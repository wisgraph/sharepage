/**
 * Callout Service
 * Handles transformation of Obsidian-style callouts [!type] to HTML
 */

const ICONS = {
    note: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>',
    abstract: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-list"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>',
    info: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
    tip: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.243-2.143.5-3.5 2.558 2.378 2.63 3.655 2.5 4.5Z"/></svg>',
    success: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>',
    question: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-help-circle"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>',
    warning: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
    failure: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    danger: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    bug: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bug"><path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/></svg>',
    example: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>',
    quote: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1Z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1Z"/></svg>'
};

const CALLOUT_TYPES = {
    note: 'note',
    seealso: 'note',
    abstract: 'abstract',
    summary: 'abstract',
    tldr: 'abstract',
    info: 'info',
    todo: 'info',
    tip: 'tip',
    hint: 'tip',
    important: 'tip',
    success: 'success',
    check: 'success',
    done: 'success',
    question: 'question',
    help: 'question',
    faq: 'question',
    warning: 'warning',
    caution: 'warning',
    attention: 'warning',
    failure: 'failure',
    fail: 'failure',
    missing: 'failure',
    danger: 'danger',
    error: 'danger',
    bug: 'bug',
    example: 'example',
    quote: 'quote',
    cite: 'quote'
};

/**
 * Transforms Obsidian callouts in markdown to HTML structure
 * @param {string} markdown 
 * @returns {string} Processed markdown/HTML
 */
export function transformCallouts(markdown) {
    const lines = markdown.split('\n');
    const output = [];
    let insideCallout = false;
    let currentCallout = null;
    let calloutIndent = '';

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        // Match: optional whitespace (indent), then '>', then optional whitespace, then '[!type]', then title
        const match = line.match(/^(\s*)>\s*\[!(\w+)\](.*)/);

        if (match) {
            if (insideCallout) {
                output.push(renderCallout(currentCallout, calloutIndent));
            }

            const indent = match[1];
            const type = match[2].toLowerCase();
            const title = match[3].trim() || type.charAt(0).toUpperCase() + type.slice(1);

            insideCallout = true;
            calloutIndent = indent;
            currentCallout = {
                type: CALLOUT_TYPES[type] || 'note',
                title: title,
                content: []
            };
        } else if (insideCallout) {
            // Check if this line is a continuation of the CURRENT callout
            // It must have the SAME indentation followed by '>'
            const escapedIndent = calloutIndent.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const continuationRegex = new RegExp(`^${escapedIndent}>\s?(.*)`);
            const contentMatch = line.match(continuationRegex);

            if (contentMatch) {
                currentCallout.content.push(contentMatch[1]);
            } else if (line.trim() === '') {
                // Peek at next line to see if callout continues after empty line
                const nextLine = lines[i + 1];
                const nextMatch = nextLine && nextLine.match(continuationRegex);
                if (nextMatch) {
                    currentCallout.content.push('');
                } else {
                    output.push(renderCallout(currentCallout, calloutIndent));
                    insideCallout = false;
                    currentCallout = null;
                    output.push(line);
                }
            } else {
                output.push(renderCallout(currentCallout, calloutIndent));
                insideCallout = false;
                currentCallout = null;
                output.push(line);
            }
        } else {
            output.push(line);
        }
    }

    if (insideCallout) {
        output.push(renderCallout(currentCallout, calloutIndent));
    }

    return output.join('\n');
}

/**
 * Renders callout data to HTML string
 * @param {Object} callout 
 * @returns {string} HTML string
 */
function renderCallout(callout, indent = '') {
    const icon = ICONS[callout.type] || ICONS['note'];

    // Use global marked parser for inner content
    const contentHtml = typeof marked !== 'undefined'
        ? marked.parse(callout.content.join('\n'))
        : callout.content.join('\n');

    // Prepend indentation to each line of the callout HTML
    const html = `
<div class="callout" data-callout="${callout.type}">
  <div class="callout-title">
    <div class="callout-icon">${icon}</div>
    <div class="callout-title-text">${callout.title}</div>
  </div>
  <div class="callout-content">
    ${contentHtml}
  </div>
</div>
`.trim();

    return html.split('\n').map(line => indent + line).join('\n');
}
