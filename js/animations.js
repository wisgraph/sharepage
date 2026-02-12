/**
 * Scroll Animation Module
 * Adds smooth entrance animations to elements as they enter the viewport
 */

let observer = null;

export function initScrollAnimations() {
    console.log('[Animations] Initializing scroll animations');

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        console.log('[Animations] Reduced motion preferred, skipping animations');
        return;
    }

    // Clean up existing observer
    if (observer) {
        observer.disconnect();
    }

    // Select elements to animate
    const documentContainer = document.querySelector('.document-container');
    if (!documentContainer) {
        console.log('[Animations] No document container found');
        return;
    }

    // Add animation classes to elements
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

    elementsToAnimate.forEach((element, index) => {
        // Choose animation type based on element
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

    // Create Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px', // Trigger slightly before element is fully visible
        threshold: 0.1
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    console.log(`[Animations] Observing ${elementsToAnimate.length} elements`);
}

export function cleanupScrollAnimations() {
    if (observer) {
        observer.disconnect();
        observer = null;
        console.log('[Animations] Cleaned up scroll animations');
    }
}

/**
 * Dashboard Card Animations
 */
let dashboardObserver = null;

export function initDashboardAnimations() {
    console.log('[Animations] Initializing dashboard animations');

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        console.log('[Animations] Reduced motion preferred, skipping animations');
        return;
    }

    // Clean up existing observer
    if (dashboardObserver) {
        dashboardObserver.disconnect();
    }

    // Select dashboard cards
    const cards = document.querySelectorAll('.note-card');
    if (cards.length === 0) {
        console.log('[Animations] No dashboard cards found');
        return;
    }

    // Add animation class to each card
    cards.forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        // Override delay based on card index for stagger effect
        card.style.transitionDelay = `${index * 0.05}s`;
    });

    // Create Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    dashboardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Unobserve after animation
                dashboardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards
    cards.forEach(card => {
        dashboardObserver.observe(card);
    });

    console.log(`[Animations] Observing ${cards.length} dashboard cards`);
}

export function cleanupDashboardAnimations() {
    if (dashboardObserver) {
        dashboardObserver.disconnect();
        dashboardObserver = null;
        console.log('[Animations] Cleaned up dashboard animations');
    }
}
