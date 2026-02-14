const utils = require('./utils');

/**
 * YouTube Specialized Document Processor
 */
module.exports = {
    process: (data, body, filename) => {
        const title = data.title || filename.replace(/\.md$/, '');

        let description = data.description || data.summary || '';
        if (!description) {
            description = utils.cleanMetadataText(body).substring(0, 150) + '...';
        }

        // Try to get YouTube ID from thumbnail field first, then body
        let ytId = utils.extractYouTubeId(data.thumbnail || data.url || '');
        if (!ytId) {
            ytId = utils.extractYouTubeId(body);
        }

        const ogImage = ytId
            ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`
            : (data.thumbnail || '');

        return {
            title: `📺 ${title}`, // Add an emoji for distinction
            description: description,
            ogImage: ogImage,
            ogType: 'video.other'
        };
    }
};
