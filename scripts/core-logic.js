/**
 * Core Logic for SharePage
 * This file contains pure functions for processing notes and dashboard data.
 * It is designed to be shared between GitHub Actions and the Obsidian Plugin.
 */

/**
 * Normalizes filenames for consistent encoding (NFC)
 * Important for Korean characters across different OS.
 */
function normalizeName(name) {
    return name.normalize('NFC');
}

/**
 * Basic Frontmatter Parser
 */
function parseFrontmatter(content) {
    const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
    const match = content.match(frontmatterRegex);
    const data = {};
    let body = content;

    if (match) {
        body = content.replace(frontmatterRegex, '').trim();
        const yaml = match[1];
        yaml.split('\n').forEach(line => {
            const parts = line.split(':');
            if (parts.length >= 2) {
                const key = parts[0].trim();
                const value = parts.slice(1).join(':').trim().replace(/^['"](.*)['"]$/, '$1');
                data[key] = value;
            }
        });
    }

    return { data, body };
}

/**
 * Clean text for metadata (remove markdown links, bold, etc.)
 */
function cleanMetadataText(text) {
    if (!text) return '';
    return text
        .replace(/\[\[([^\]]+)\]\]/g, '$1') // [[Link]] -> Link
        .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // [Text](Url) -> Text
        .replace(/[#*`~_]/g, '') // Remove formatting characters
        .replace(/\n/g, ' ') // Replace newlines with space
        .trim();
}

/**
 * Inject metatags and title into template
 */
function applyMetadataToTemplate(template, metadata, domain) {
    const { title, description, pageUrl, ogImage, ogType } = metadata;

    const replacements = {
        '{{TITLE}}': title || 'SharePage',
        '{{DESCRIPTION}}': (cleanMetadataText(description) || '').replace(/"/g, '&quot;'),
        '{{PAGE_URL}}': pageUrl || domain,
        '{{OG_IMAGE}}': ogImage || (domain + '/images/logo.png'),
        '{{OG_TYPE}}': ogType || 'website',
        '{{DOMAIN}}': domain
    };

    // Ensure absolute URL for local images
    if (replacements['{{OG_IMAGE}}'] && !replacements['{{OG_IMAGE}}'].startsWith('http')) {
        let imgPath = replacements['{{OG_IMAGE}}'];
        if (imgPath.startsWith('/')) imgPath = imgPath.substring(1);
        replacements['{{OG_IMAGE}}'] = `${domain}/${imgPath}`;
    }

    let html = template;
    for (const [placeholder, value] of Object.entries(replacements)) {
        html = html.split(placeholder).join(value);
    }

    return html;
}

/**
 * Update Dashboard Content (Add/Remove links)
 */
function updateDashboardContent(dashboardContent, noteName, dateStr, isNew = true, targetSection = 'Inbox') {
    let currentLines = dashboardContent.split('\n');
    const cleanNoteName = normalizeName(noteName.replace(/\.md$/, ''));

    // 1. Find if and where the link exists
    const linkRegex = new RegExp(`^\\s*-\\s*\\[\\[${cleanNoteName}(\\|[^\\]]*)?\\]\\]`);
    let existingLineIdx = -1;
    let currentSection = '';

    for (let i = 0; i < currentLines.length; i++) {
        const line = currentLines[i].trim();
        if (line.startsWith('## ')) {
            currentSection = line.substring(3).trim();
        }
        if (linkRegex.test(line)) {
            existingLineIdx = i;
            break;
        }
    }

    const isCorrectSection = currentSection === targetSection;

    // 2. Logic: Move if in wrong section, or Add if new
    if (isNew) {
        if (existingLineIdx !== -1 && !isCorrectSection) {
            // MOVEMENT: Remove from wrong section
            console.log(`[Core] Moving [[${cleanNoteName}]] from ${currentSection} to ${targetSection}`);
            currentLines.splice(existingLineIdx, 1);
            // Need to re-find or fallback for adding
            return updateDashboardContent(currentLines.join('\n'), noteName, dateStr, true, targetSection);
        } else if (existingLineIdx === -1) {
            // NEW: Add to target section
            const newLinkLine = `- [[${cleanNoteName}]] ${dateStr}`;
            const sectionHeader = `## ${targetSection}`;
            let sectionIdx = currentLines.findIndex(line => line.trim() === sectionHeader);

            // Fallback to Inbox if target section not found
            if (sectionIdx === -1 && targetSection !== 'Inbox') {
                sectionIdx = currentLines.findIndex(line => line.trim() === '## Inbox');
            }

            if (sectionIdx !== -1) {
                currentLines.splice(sectionIdx + 1, 0, newLinkLine);
            } else {
                currentLines.push('', `## ${targetSection}`, newLinkLine);
            }
        }
    }

    return currentLines.join('\n');
}

// Node.js compatibility
if (typeof module !== 'undefined') {
    module.exports = {
        normalizeName,
        parseFrontmatter,
        cleanMetadataText,
        applyMetadataToTemplate,
        updateDashboardContent
    };
}
