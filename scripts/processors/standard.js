const utils = require('./utils');

/**
 * Standard Document Processor
 */
module.exports = {
    process: (data, body, filename) => {
        const title = data.title || filename.replace(/\.md$/, '').replace(/_/g, ' ');

        // Extract description
        let description = data.description || data.summary || '';
        if (!description) {
            description = utils.cleanMetadataText(body).substring(0, 150) + '...';
        } else {
            description = utils.cleanMetadataText(description);
        }

        // Extract OG Image
        let ogImage = data.thumbnail || data.url || '';
        if (ogImage.startsWith('[[') && ogImage.endsWith(']]')) {
            ogImage = ogImage.slice(2, -2);
        }

        // Body image fallback
        if (!ogImage) {
            const imageMatch = body.replace(/```[\s\S]*?```/g, '').match(/!\[\[([^\]]+)\]\]/) ||
                body.match(/!\[.*?\]\((.*?)\)/);
            if (imageMatch) ogImage = imageMatch[1];
        }

        return {
            title,
            description,
            ogImage: ogImage.startsWith('http') ? ogImage : (ogImage ? `images/${ogImage}` : ''),
            ogType: 'website'
        };
    }
};
