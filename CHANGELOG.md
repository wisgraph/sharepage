# Changelog

## [1.1.0] - 2026-02-15
### Added
- Content Management: Delete uploaded notes directly from Obsidian settings.
- Background Deployment Monitoring: Real-time notifications for GitHub Actions status.
- Real-time Timer: Tracks deployment duration in the deletion manager.
- Deployment Status Board: View build history and retry failed deployments from settings.

### Fixed
- Description Cleaning: Strips Markdown formatting and Obsidian links from dashboard cards.
- Layout: Hide sections with zero notes on the dashboard.
- GitHub Sync: Strategic polling (30s delay + 5s intervals) for more responsive updates.
- Atomicity: Core files are updated as a single commit to prevent deployment race conditions.

## [1.0.0] - 2026-02-10
- Initial release with automated GitHub Pages deployment.
- Mobile-responsive dashboard with search and tag filtering.
- Automatic image upload support.
