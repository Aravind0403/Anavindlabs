/**
 * ANAVIND LABS — Core Client-Side Logic
 * Interactive Systems Stack Map, Category Filtering, and Provenance Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initSystemsStack();
  initResearchFilters();
  initCopyButtons();
});

/* Mobile Navigation Toggle */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const siteHeader = document.querySelector('.site-header');

  if (toggleBtn && siteHeader) {
    toggleBtn.addEventListener('click', () => {
      siteHeader.classList.toggle('mobile-nav-active');
      const isExpanded = siteHeader.classList.contains('mobile-nav-active');
      toggleBtn.setAttribute('aria-expanded', isExpanded);
    });
  }
}

/* 7-Layer Systems Stack Interactivity */
function initSystemsStack() {
  const stackRows = document.querySelectorAll('.stack-layer-row');
  if (!stackRows.length) return;

  stackRows.forEach(row => {
    row.addEventListener('click', (e) => {
      // If clicking directly on a link, let browser follow it
      if (e.target.closest('a')) return;

      const targetUrl = row.getAttribute('data-target');
      if (targetUrl) {
        window.location.href = targetUrl;
      }
    });

    row.addEventListener('mouseenter', () => {
      stackRows.forEach(r => r.classList.remove('active'));
      row.classList.add('active');
    });
  });
}

/* Category Filter on /research page */
function initResearchFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-dossier-wrap');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Active state on buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'block';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

/* Copy to Clipboard (BibTeX, Code Snippet, Provenance Logs) */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.btn-copy');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy-text');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalText = btn.innerHTML;
        btn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34D399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; margin-right:4px;">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span style="color:#34D399;">Copied!</span>
        `;
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy to clipboard', err);
      }
    });
  });
}
