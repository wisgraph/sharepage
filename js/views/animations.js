/**
 * Animations View Component
 * Handles scroll animations for document elements and dashboard cards
 */

let observer = null;
let dashboardObserver = null;

/**
 * Initializes scroll animations for document elements
 */
export function initScrollAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (observer) observer.disconnect();

    const documentContainer = document.querySelector('.document-container');
    if (!documentContainer) return;

    const elementsToAnimate = documentContainer.querySelectorAll(`
        h1, h2, h3, h4,
        p,
        ul, ol,
        .callout,
        pre,
        img,
        table,
        .video-container,
        .mermaid
    `);

    elementsToAnimate.forEach((element) => {
        if (element.tagName.match(/^H[1-4]$/)) {
            element.classList.add('animate-slide-left');
        } else if (element.classList.contains('callout') || element.tagName === 'IMG' || element.classList.contains('mermaid')) {
            element.classList.add('animate-scale');
        } else if (element.tagName === 'PRE' || element.classList.contains('video-container')) {
            element.classList.add('animate-slide-right');
        } else {
            element.classList.add('animate-on-scroll');
        }
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(element => observer.observe(element));
}

/**
 * Cleans up document scroll animations
 */
export function cleanupScrollAnimations() {
    if (observer) {
        observer.disconnect();
        observer = null;
    }
}

/**
 * Initializes animations for dashboard cards
 */
export function initDashboardAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (dashboardObserver) dashboardObserver.disconnect();

    const cards = document.querySelectorAll('.note-card');
    if (cards.length === 0) return;

    cards.forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        card.style.transitionDelay = `${index * 0.05}s`;
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    dashboardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                dashboardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => dashboardObserver.observe(card));
}

/**
 * Cleans up dashboard animations
 */
export function cleanupDashboardAnimations() {
    if (dashboardObserver) {
        dashboardObserver.disconnect();
        dashboardObserver = null;
    }
}
