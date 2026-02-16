/**
 * Classification Engine for SharePage
 * Determines the target dashboard section based on note metadata.
 */

module.exports = {
    /**
     * @param {Object} metadata - Note frontmatter data
     * @returns {string} - Dashboard section name (e.g., 'YouTube', 'Inbox')
     */
    classify: (metadata) => {
        if (!metadata) return 'Inbox';

        // Support both 'type' and 'source_type' fields flexibly
        const type = (metadata.type || metadata.source_type || '').toLowerCase().trim();

        // 🟢 Mapping Rules
        if (type === 'youtube') {
            return 'YouTube';
        }

        // Add more rules here as system grows:
        // if (type === 'book' || type === 'reading') return 'Reading List';
        // if (type === 'project') return 'Active Projects';

        // 🔴 Default fallback
        return 'Inbox';
    }
};
