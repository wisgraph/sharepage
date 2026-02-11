import { fetchFile, routes } from './utils.js';
import { loadAllNotes } from './dashboard/dashboardDataExtractor.js';
import { renderCardGrid } from './dashboard/dashboardCardRenderer.js';
import { calculatePaginationInfo, renderPagination, shouldRenderPagination } from './dashboard/dashboardPagination.js';

let dashboardState = {
  currentPage: 1,
  allNotes: []
};

export async function loadDashboardNotes() {
  console.log('[Dashboard] Loading dashboard notes...');

  try {
    const dashboardContent = await fetchFile('_home.md');
    console.log('[Dashboard] _home.md length:', dashboardContent.length);

    const notes = await loadAllNotes(dashboardContent, routes);

    dashboardState = {
      ...dashboardState,
      allNotes: notes
    };

    console.log('[Dashboard] Notes loaded:', notes.length);
  } catch (error) {
    console.error('[Dashboard] Error loading dashboard:', error);
    dashboardState = {
      ...dashboardState,
      allNotes: []
    };
  }
}

export function renderDashboardPage(page) {
  console.log('[Dashboard] ===== Rendering dashboard page', page, 'START =====');

  const { notesToShow, totalPages } = calculatePaginationInfo(dashboardState.allNotes, page);

  if (dashboardState.allNotes.length === 0) {
    console.log('[Dashboard] No notes found');
    return '<div class="loading">No notes found.</div>';
  }

  const cardGridHtml = renderCardGrid(notesToShow);
  let html = cardGridHtml;

  if (shouldRenderPagination(totalPages)) {
    html += renderPagination(page, totalPages);
  }

  console.log('[Dashboard] ===== Rendering dashboard page', page, 'END =====');
  return html;
}

export function goToPage(page) {
  dashboardState = {
    ...dashboardState,
    currentPage: page
  };

  const html = renderDashboardPage(page);
  document.getElementById('app').innerHTML = html;
  window.scrollTo(0, 0);
}
