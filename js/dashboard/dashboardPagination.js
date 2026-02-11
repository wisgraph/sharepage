import { PAGINATION_ITEMS_PER_PAGE } from '../utils.js';

export function calculatePaginationInfo(totalNotes, page) {
  const startIndex = (page - 1) * PAGINATION_ITEMS_PER_PAGE;
  const endIndex = startIndex + PAGINATION_ITEMS_PER_PAGE;
  const notesToShow = totalNotes.slice(startIndex, endIndex);
  const totalPages = Math.ceil(totalNotes.length / PAGINATION_ITEMS_PER_PAGE);

  const info = {
    total: totalNotes.length,
    page: page,
    totalPages: totalPages,
    startIndex: startIndex,
    endIndex: endIndex,
    showing: notesToShow.length
  };

  console.log('[Dashboard] Pagination info:', info);
  return { notesToShow, ...info };
}

export function renderPagination(page, totalPages) {
  console.log('[Dashboard] Rendering pagination for page', page, 'of', totalPages);

  let html = '<div class="pagination">';

  if (page > 1) {
    html += `<button onclick="goToPage(${page - 1})">Previous</button>`;
  }

  for (let i = 1; i <= totalPages; i++) {
    html += `<button onclick="goToPage(${i})" ${i === page ? 'class="active"' : ''}>${i}</button>`;
  }

  if (page < totalPages) {
    html += `<button onclick="goToPage(${page + 1})">Next</button>`;
  }

  html += '</div>';
  return html;
}

export function shouldRenderPagination(totalPages) {
  return totalPages > 1;
}
