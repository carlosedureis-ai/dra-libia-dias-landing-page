/**
 * Dra. Líbia Dias - Landing Page Script
 * Secure, Vanilla JavaScript without external dependencies.
 * Progressive Scroll Reveal & Living Interactive UI Modules.
 * Zero vulnerabilities, XSS-safe, CSP compliant.
 */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    initFloatingHeader();
    initMobileNav();
    initProcedureFilters();
    initFaqAccordion();
    initWhatsAppHelpers();
    initLivingScrollAnimations();
});

/**
 * 1. Floating Header with dynamic subtle shadow on scroll
 */
function initFloatingHeader() {
    const header = document.getElementById("main-header");
    if (!header) return;

    let ticking = false;

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 30) {
                    header.classList.add("shadow-lg");
                } else {
                    header.classList.remove("shadow-lg");
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/**
 * 2. Mobile Navigation Toggle
 */
function initMobileNav() {
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    const menu = document.getElementById("mobile-menu");
    if (!toggleBtn || !menu) return;

    toggleBtn.addEventListener("click", () => {
        const isOpen = menu.classList.contains("open");
        if (isOpen) {
            menu.classList.remove("open");
            toggleBtn.setAttribute("aria-expanded", "false");
            toggleBtn.innerHTML = '<span class="material-symbols-outlined text-2xl text-primary" aria-hidden="true">menu</span>';
        } else {
            menu.classList.add("open");
            toggleBtn.setAttribute("aria-expanded", "true");
            toggleBtn.innerHTML = '<span class="material-symbols-outlined text-2xl text-primary" aria-hidden="true">close</span>';
        }
    });

    // Close menu when clicking any link
    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("open");
            toggleBtn.setAttribute("aria-expanded", "false");
            toggleBtn.innerHTML = '<span class="material-symbols-outlined text-2xl text-primary" aria-hidden="true">menu</span>';
        });
    });
}

/**
 * 3. Procedure category tab filtering with smooth transition
 */
function initProcedureFilters() {
    const tabButtons = document.querySelectorAll(".proc-tab");
    const cards = document.querySelectorAll(".proc-card");

    if (!tabButtons.length || !cards.length) return;

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const category = btn.getAttribute("data-filter") || "all";

            // Update tab button active styles
            tabButtons.forEach(t => {
                t.classList.remove("bg-primary", "text-white", "shadow-sm");
                t.classList.add("bg-white", "text-on-surface-variant", "border", "border-outline-variant/60");
                t.setAttribute("aria-selected", "false");
            });

            btn.classList.remove("bg-white", "text-on-surface-variant", "border", "border-outline-variant/60");
            btn.classList.add("bg-primary", "text-white", "shadow-sm");
            btn.setAttribute("aria-selected", "true");

            // Filter cards with smooth fade/scale
            cards.forEach(card => {
                const cardCats = (card.getAttribute("data-category") || "").toLowerCase();
                if (category === "all" || cardCats.includes(category)) {
                    card.classList.remove("hidden-card");
                    card.classList.add("visible-card");
                } else {
                    card.classList.remove("visible-card");
                    card.classList.add("hidden-card");
                }
            });
        });
    });
}

/**
 * 4. FAQ Accordion Toggle with ARIA state updates
 */
function initFaqAccordion() {
    const faqToggles = document.querySelectorAll(".faq-toggle");

    faqToggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const item = toggle.closest(".faq-item");
            if (!item) return;

            const isActive = item.classList.contains("active");

            // Close all items
            document.querySelectorAll(".faq-item").forEach(el => {
                el.classList.remove("active");
                const btn = el.querySelector(".faq-toggle");
                if (btn) btn.setAttribute("aria-expanded", "false");
            });

            // Toggle selected item
            if (!isActive) {
                item.classList.add("active");
                toggle.setAttribute("aria-expanded", "true");
            }
        });
    });
}

/**
 * 5. WhatsApp Copy Helper & Universal Dispatcher
 */
function initWhatsAppHelpers() {
    const copyBtn = document.getElementById("btn-copy-phone");
    if (!copyBtn) return;

    copyBtn.addEventListener("click", () => {
        const textToCopy = "+55 92 99219-1806";
        
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                showCopySuccess(copyBtn);
            }).catch(() => {
                fallbackWhatsAppOpen();
            });
        } else {
            fallbackWhatsAppOpen();
        }
    });
}

function showCopySuccess(btn) {
    const originalContent = btn.innerHTML;
    btn.innerHTML = `<span class="material-symbols-outlined text-sm text-secondary-accent" aria-hidden="true">check</span> <span>Número copiado com sucesso!</span>`;
    setTimeout(() => {
        btn.innerHTML = originalContent;
    }, 2500);
}

function fallbackWhatsAppOpen() {
    const url = "https://api.whatsapp.com/send?phone=5592992191806&text=" + encodeURIComponent("Olá, Dra. Líbia! Gostaria de agendar uma avaliação em Manaus.");
    window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * 6. LIVING PROGRESSIVE SCROLL REVEAL (Safe & Native)
 * - Pure GPU Acceleration (transform + opacity).
 * - Immediate Hero Cascade on Load.
 * - Staggered Storytelling Reveal on Scroll.
 * - Failsafe Timer guarantees zero hidden content.
 */
function initLivingScrollAnimations() {
    // Check reduced motion preference
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
        return;
    }

    if (!("IntersectionObserver" in window)) {
        return;
    }

    // Activate animation styles
    document.documentElement.classList.add("js-scroll-ready");

    const revealElements = document.querySelectorAll("[data-reveal]");
    if (!revealElements.length) return;

    const isMobile = window.innerWidth <= 768;

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const delaySec = parseFloat(el.getAttribute("data-delay") || "0");
                    const delayMs = (isMobile ? delaySec * 0.6 : delaySec) * 1000;

                    if (delayMs > 0) {
                        setTimeout(() => {
                            el.classList.add("is-revealed");
                        }, delayMs);
                    } else {
                        el.classList.add("is-revealed");
                    }

                    obs.unobserve(el);
                }
            });
        },
        {
            threshold: isMobile ? 0.05 : 0.08,
            rootMargin: isMobile ? "0px 0px -15px 0px" : "0px 0px -35px 0px"
        }
    );

    revealElements.forEach(el => {
        observer.observe(el);
    });

    // Failsafe safety net: reveal all after 4.5s
    setTimeout(() => {
        document.querySelectorAll("[data-reveal]:not(.is-revealed)").forEach(el => {
            el.classList.add("is-revealed");
        });
    }, 4500);
}
