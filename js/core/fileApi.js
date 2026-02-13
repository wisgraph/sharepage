/**
 * File API - Data Access Layer
 * Handles file fetching and caching
 */

import { getRawUrl } from '../services/pathService.js';

const fileCache = new Map();

/**
 * Fetch a file from the server with caching
 * @param {string} filename - File path relative to root (e.g., "_dashboard.md", "welcome")
 * @returns {Promise<string>} File content
 */
export async function fetchFile(filename) {
    // Check cache first
    if (fileCache.has(filename)) {
        console.log(`[FileAPI] Cache hit: ${filename}`);
        return fileCache.get(filename);
    }

    console.log(`[FileAPI] Fetching: ${filename}`);

    // Use getRawUrl to resolve the full path
    const url = getRawUrl(filename);
    console.log(`[FileAPI] Resolved URL: ${url}`);

    try {
        const response = await fetch(url, { cache: 'no-cache' });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const content = await response.text();

        // Store in cache
        fileCache.set(filename, content);

        return content;
    } catch (error) {
        console.error(`[FileAPI] Error fetching ${filename}:`, error);
        throw error;
    }
}

/**
 * Prefetch a file and store in cache without returning it
 * @param {string} filename - File path to prefetch
 */
export function prefetchFile(filename) {
    if (!fileCache.has(filename)) {
        console.log(`[FileAPI] Prefetching: ${filename}`);
        fetchFile(filename).catch(err => {
            console.warn(`[FileAPI] Prefetch failed for ${filename}:`, err);
        });
    }
}

/**
 * Clear the file cache
 */
export function clearCache() {
    console.log('[FileAPI] Clearing cache');
    fileCache.clear();
}

/**
 * Get cache statistics
 */
export function getCacheStats() {
    return {
        size: fileCache.size,
        files: Array.from(fileCache.keys())
    };
}
