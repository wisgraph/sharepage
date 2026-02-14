/**
 * Common Metadata Utilities
 */
const utils = {
    cleanMetadataText: (text) => {
        if (!text) return '';
        return text
            .replace(/\*\*(.+?)\*\*/g, '$1')
            .replace(/\*(.+?)\*/g, '$1')
            .replace(/__(.+?)__/g, '$1')
            .replace(/_(.+?)_/g, '$1')
            .replace(/~~(.+?)~~/g, '$1')
            .replace(/`(.+?)`/g, '$1')
            .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
            .replace(/[#*`_\[\]]/g, '')
            .replace(/\n/g, ' ')
            .trim();
    },

    extractYouTubeId: (text) => {
        const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
        const match = text.match(youtubeRegex);
        return match ? match[1] : null;
    }
};

module.exports = utils;
