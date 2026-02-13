/**
 * Dashboard Data Service
 * Handles extracting and processing data for the dashboard
 */

import { fetchFile } from '../core/fileApi.js?v=41000';
import { getNotePath, getRawUrl } from './pathService.js?v=41000';
import { parseFrontmatter } from './markdownService.js?v=41000';

/**
 * Extracts links grouped by sections based on ## Headings
 * @param {string} dashboardContent 
 */
export function extractSectionedLinks(dashboardContent) {
    const sections = [];
    let currentSection = { title: 'General', links: [] };

    const lines = dashboardContent.split('\n');
    lines.forEach(line => {
        const trimmedLine = line.trim();
        if (!trimmedLine) return;

        const headingMatch = trimmedLine.match(/^##\s+(.+)$/);
        if (headingMatch) {
            if (currentSection.links.length > 0 || currentSection.title !== 'General') {
                sections.push(currentSection);
            }
            currentSection = { title: headingMatch[1].trim(), links: [] };
            return;
        }

        const linkMatch = trimmedLine.match(/\[\[([^\]]+)\]\]/);
        if (linkMatch) {
            let linkText = linkMatch[1];
            if (linkText.includes('|')) {
                linkText = linkText.split('|')[0];
            }
            const cleanLink = linkText.replace(/\.md$/, '').trim();
            if (!currentSection.links.includes(cleanLink)) {
                currentSection.links.push(cleanLink);
            }
        }
    });

    if (currentSection.links.length > 0) {
        sections.push(currentSection);
    }

    return sections;
}

/**
 * Extracts metadata and content from a note markdown
 */
function extractMetadata(markdown, filename) {
    const { data, content: contentWithoutFrontmatter } = parseFrontmatter(markdown);

    let title = data.title || filename.replace(/\.md$/, '').replace(/^_/, '');
    let description = data.description || data.summary || data.excerpt || '';
    let thumbnail = data.thumbnail || null;

    if (!description) {
        const firstParagraph = contentWithoutFrontmatter.match(/^#+\s*(.+)$/m) ||
            contentWithoutFrontmatter.match(/^(?!\s*$|#+\s).+/m);

        if (firstParagraph) {
            description = firstParagraph[1]
                .replace(/[#*`_\[\]]/g, '')
                .trim()
                .substring(0, 150);
        }
    }

    return {
        title: title.charAt(0).toUpperCase() + title.slice(1),
        description: description || 'No description available.',
        filename: filename,
        thumbnail: thumbnail,
        tags: data.tags || []
    };
}

/**
 * Extracts a thumbnail URL from content or metadata
 */
function extractThumbnail(content, metadata) {
    if (metadata.thumbnail) {
        return getRawUrl('_image_' + metadata.thumbnail);
    }

    const contentCleaned = content
        .replace(/```[\s\S]*?```/g, '')
        .replace(/`[^`]*`/g, '');

    const obsidianMatch = contentCleaned.match(/!\[\[([^\]]+)\]\]/);
    const obsidianIndex = obsidianMatch ? obsidianMatch.index : Infinity;

    const markdownMatch = contentCleaned.match(/!\[([^\]]*)\]\(([^)]+)\)/);
    const markdownIndex = markdownMatch ? markdownMatch.index : Infinity;

    if (obsidianIndex < markdownIndex) {
        return getRawUrl('_image_' + obsidianMatch[1]);
    } else if (markdownMatch) {
        const url = markdownMatch[2];
        const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
        const ytMatch = url.match(youtubeRegex);

        if (ytMatch && ytMatch[1]) {
            return `https://img.youtube.com/vi/${ytMatch[1]}/maxresdefault.jpg`;
        }
        return url;
    }

    return null;
}

/**
 * Enriches a link with metadata and thumbnail
 */
export async function extractNoteFromLink(link) {
    const filename = link.endsWith('.md') ? link : link + '.md';
    const note = {
        file: filename,
        title: link.replace(/\.md$/, '')
    };

    try {
        const content = await fetchFile(note.file);
        const metadata = extractMetadata(content, note.file);
        const thumbnail = extractThumbnail(content, metadata);

        return {
            ...note,
            title: metadata.title,
            description: metadata.description,
            thumbnail: thumbnail,
            tags: metadata.tags || [],
            path: getNotePath(note.file.replace(/\.md$/, ''))
        };
    } catch (error) {
        console.error('[DashboardDataService] Error loading note:', note.file, error);
        return null;
    }
}

/**
 * Loads all notes including auto-discovered ones
 */
export async function loadSectionedDashboard(dashboardContent) {
    const structuredLinks = extractSectionedLinks(dashboardContent);
    const result = [];
    const processedNotes = new Set();

    for (const section of structuredLinks) {
        const notePromises = section.links.map(link => extractNoteFromLink(link));
        const notes = await Promise.all(notePromises);
        const validNotes = notes.filter(n => n !== null);

        validNotes.forEach(n => processedNotes.add(n.file));

        result.push({
            title: section.title,
            notes: validNotes,
            count: validNotes.length
        });
    }

    // Auto-discovery
    try {
        const indexUrl = './posts/file_index.json?v=' + Date.now();
        const response = await fetch(indexUrl);

        if (response.ok) {
            const allFiles = await response.json();
            const unlistedFiles = allFiles.filter(f => !processedNotes.has(f));

            if (unlistedFiles.length > 0) {
                const unlistedPromises = unlistedFiles.map(file => extractNoteFromLink(file));
                const unlistedNotes = await Promise.all(unlistedPromises);
                const validUnlisted = unlistedNotes.filter(n => n !== null);

                if (validUnlisted.length > 0) {
                    result.push({
                        title: 'Others',
                        notes: validUnlisted,
                        count: validUnlisted.length
                    });
                }
            }
        }
    } catch (e) {
        console.error('[DashboardDataService] Auto-discovery failed:', e);
    }

    return result;
}
