/**
 * TOC - Backward Compatibility Layer
 * Re-exports from services/tocService.js and views/tocView.js
 */

export { addHeadingIds } from './services/tocService.js?v=41000';
export {
  renderTOC,
  initScrollHighlight,
  stopScrollHighlight,
  initTOCToggle
} from './views/tocView.js?v=41000';
