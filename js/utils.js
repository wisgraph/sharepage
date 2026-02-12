export const PAGINATION_ITEMS_PER_PAGE = 9;

export function getRawUrl(filename) {
  if (filename.startsWith('http')) return filename;

  let targetFile = filename;
  // Add .md extension if missing (and not an image or system file)
  if (!targetFile.includes('.') && !targetFile.startsWith('_image_')) {
    targetFile += '.md';
  }

  const encodedFilename = encodeURIComponent(targetFile);

  // Use a root-relative path to avoid issues with trailing slashes
  // In local 'serve', it's just the filename. On GH Pages, it's also inside the repo folder.
  // Using '.' ensures it stays relative to the current index.html location.
  return `./${encodedFilename}`;
}

export async function fetchFile(filename) {
  console.log('[Fetch] Fetching:', filename);
  const url = getRawUrl(filename);
  console.log('[Fetch] URL:', url);

  try {
    const response = await fetch(url);
    console.log('[Fetch] Response status:', response.status);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const text = await response.text();
    console.log('[Fetch] Content length:', text.length);
    return text;
  } catch (error) {
    console.error('[Fetch] Error:', error);
    throw error;
  }
}

export function transformInternalLinks(html) {
  return html.replace(
    /\[\[(.*?)\]\]/g,
    (match, filename) => {
      const path = '/' + filename.replace(/\.md$/, '');
      return `<a href="#${path}" class="internal-link">${filename}</a>`;
    }
  );
}

export function transformObsidianImageLinks(markdown) {
  console.log('[Render] Converting Obsidian image links');

  return markdown.replace(
    /!\[\[(.*?)\]\]/g,
    (match, filename) => {
      const url = getRawUrl('_image_' + filename);
      return `![${filename}](${url})`;
    }
  );
}

export function parseFrontmatter(markdown) {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
  const match = markdown.match(frontmatterRegex);

  const result = {
    data: {},
    content: markdown
  };

  if (match) {
    const yamlContent = match[1];
    result.content = markdown.replace(frontmatterRegex, '').trim();

    const lines = yamlContent.split('\n');
    lines.forEach(line => {
      const separatorIndex = line.indexOf(':');
      if (separatorIndex !== -1) {
        const key = line.substring(0, separatorIndex).trim();
        let value = line.substring(separatorIndex + 1).trim();

        if (key === 'tags') {
          if (value.startsWith('[') && value.endsWith(']')) {
            value = value.slice(1, -1);
          }
          result.data[key] = value.split(',').map(t => t.trim()).filter(t => t);
        } else {
          result.data[key] = value;
        }
      }
    });
  }

  return result;
}
