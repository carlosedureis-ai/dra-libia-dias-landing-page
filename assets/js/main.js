/**
 * Dra. Líbia Dias - Landing Page Script
 * Secure, Vanilla JavaScript without external dependencies.
 * Progressive Scroll Reveal & Interactive UI Modules.
 * Zero vulnerabilities, XSS-safe, CSP compliant.
 */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    initFloatingHeader();
    initMobileNav();
    initProcedureFilters();
    initFaqAccordion();
    initWhatsAppHelpers();
    initScrollAnimations();
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
 * 6. PROGRESSIVE SCROLL REVEAL (Safe, Native Web Animations API)
 * Content remains 100% visible by default in CSS.
 * Animations only run dynamically when elements enter the viewport.
 */
function initScrollAnimations() {
    // Check reduced motion preference
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
        return;
    }

    // Safety check for Web Animations API and IntersectionObserver
    if (typeof Element.prototype.animate !== "function" || !("IntersectionObserver" in window)) {
        return;
    }

    const isMobile = window.innerWidth <= 768;

    // Single Central Observer
    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                playReveal(el, isMobile);
                obs.unobserve(el);
            });
        },
        {
            threshold: isMobile ? 0.08 : 0.12,
            rootMargin: "0px 0px -6% 0px"
        }
    );

    // Play reveal using Web Animations API (no permanent opacity: 0 in CSS)
    function playReveal(element, mobile) {
        if (!element || element.dataset.animated === "true") return;
        element.dataset.animated = "true";

        const x = parseFloat(element.dataset.revealX || "0");
        const y = parseFloat(element.dataset.revealY || "24");
        const scale = parseFloat(element.dataset.revealScale || "1");
        const duration = parseInt(element.dataset.revealDuration || "650", 10);
        const delay = parseInt(element.dataset.revealDelay || "0", 10);

        try {
            const animation = element.animate(
                [
                    {
                        opacity: 0,
                        transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`
                    },
                    {
                        opacity: 1,
                        transform: "translate3d(0, 0, 0) scale(1)"
                    }
                ],
                {
                    duration: mobile ? Math.min(duration, 550) : duration,
                    delay: mobile ? Math.max(0, delay * 0.7) : delay,
                    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                    fill: "none"
                }
            );

            animation.onfinish = () => {
                animation.cancel();
            };
        } catch (err) {
            console.warn("Animation skipped:", err);
        }
    }

    // Helper to register elements with progressive stagger
    function observeElements(selector, config = {}) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            const xVal = isMobile ? 0 : (config.x ?? 0);
            const yVal = isMobile ? Math.min(config.y ?? 24, 20) : (config.y ?? 24);

            element.dataset.revealX = xVal;
            element.dataset.revealY = yVal;
            element.dataset.revealScale = config.scale ?? 1;
            element.dataset.revealDuration = config.duration ?? (isMobile ? 550 : 650);
            element.dataset.revealDelay = (config.delay ?? 0) + index * (config.stagger ?? 0);

            observer.observe(element);
        });
    }

    // ==========================================
    // ETAPA 1: HERO (Reveal Elegante Inicial)
    // ==========================================
    observeElements(".hero-left-col > .flex:first-child", { y: 16, delay: 60 });
    observeElements(".hero-headline", { y: 26, delay: 140 });
    observeElements(".hero-divider", { y: 16, delay: 210 });
    observeElements(".hero-left-col > p", { y: 22, delay: 280 });
    observeElements(".hero-left-col > .flex.items-stretch", { y: 22, delay: 360 });
    observeElements(".hero-trust-container", { y: 20, delay: 440 });
    observeElements(".hero-arch-frame", { x: isMobile ? 0 : 24, y: isMobile ? 24 : 0, scale: 0.98, duration: 800, delay: 200 });
    observeElements(".hero-floating-card", { y: 16, scale: 0.97, duration: 650, delay: 520 });

    // ==========================================
    // ETAPA 2: DIAGNÓSTICO & DESEJO (#identificacao)
    // ==========================================
    observeElements("#identificacao .ident-eyebrow", { y: 18, delay: 0 });
    observeElements("#identificacao .ident-headline", { y: 24, delay: 80 });
    observeElements("#identificacao .ident-divider", { y: 14, delay: 140 });
    observeElements("#identificacao .ident-desc", { y: 20, delay: 190 });
    observeElements("#identificacao .ident-card", { y: 32, scale: 0.98, stagger: 110, delay: 120 });
    observeElements("#identificacao .ident-callout", { y: 26, delay: 220 });

    // ==========================================
    // ETAPA 3: PROCESSO TRANSPARENTE (#como-funciona)
    // ==========================================
    observeElements("#como-funciona .ident-eyebrow", { y: 18, delay: 0 });
    observeElements("#como-funciona .ident-headline", { y: 24, delay: 80 });
    observeElements("#como-funciona .ident-divider", { y: 14, delay: 140 });
    observeElements("#como-funciona .ident-desc", { y: 20, delay: 190 });
    observeElements("#como-funciona .step-card", { y: 30, stagger: 130, delay: 120 });
    observeElements("#como-funciona .ident-callout", { y: 26, delay: 220 });

    // ==========================================
    // ETAPA 4: PROCEDIMENTOS (#procedimentos)
    // ==========================================
    observeElements("#procedimentos .text-center > span", { y: 16, delay: 0 });
    observeElements("#procedimentos .text-center > h2", { y: 24, delay: 80 });
    observeElements("#procedimentos .text-center > p", { y: 20, delay: 150 });
    observeElements("#procedimentos [role='tablist']", { y: 18, delay: 210 });
    observeElements("#procedimentos .proc-card", { y: 28, scale: 0.98, stagger: 90, delay: 120 });

    // ==========================================
    // ETAPA 5: SOBRE MIM (#sobre)
    // ==========================================
    observeElements("#sobre .aspect-square", { x: isMobile ? 0 : -24, y: isMobile ? 24 : 0, scale: 0.98, duration: 750, delay: 0 });
    observeElements("#sobre .w-full.md\\:w-1\\/2.flex.flex-col > span", { y: 16, delay: 60 });
    observeElements("#sobre .w-full.md\\:w-1\\/2.flex.flex-col > h2", { y: 22, delay: 120 });
    observeElements("#sobre .w-full.md\\:w-1\\/2.flex.flex-col > .inline-flex", { y: 16, delay: 180 });
    observeElements("#sobre .w-full.md\\:w-1\\/2.flex.flex-col > p", { y: 20, stagger: 60, delay: 230 });
    observeElements("#sobre .grid > div", { y: 22, stagger: 90, delay: 300 });
    observeElements("#sobre .whatsapp-cta", { y: 18, delay: 380 });

    // ==========================================
    // ETAPA 6: LOCALIZAÇÃO (#espaco)
    // ==========================================
    observeElements("#espaco .w-14.h-14", { y: 16, delay: 0 });
    observeElements("#espaco span", { y: 16, delay: 60 });
    observeElements("#espaco h2", { y: 22, delay: 120 });
    observeElements("#espaco p", { y: 20, delay: 170 });
    observeElements("#espaco address", { y: 24, scale: 0.98, delay: 230 });
    observeElements("#espaco .flex.flex-wrap.justify-center > a", { y: 18, stagger: 90, delay: 300 });

    // ==========================================
    // ETAPA 7: FAQ (#faq)
    // ==========================================
    observeElements("#faq .text-center > span", { y: 16, delay: 0 });
    observeElements("#faq .text-center > h2", { y: 22, delay: 70 });
    observeElements("#faq .text-center > p", { y: 18, delay: 130 });
    observeElements("#faq .faq-item", { y: 22, stagger: 60, delay: 100 });

    // ==========================================
    // ETAPA 8: CTA FINAL (#agendar)
    // ==========================================
    observeElements("#agendar span.text-\\[10px\\]", { y: 18, delay: 0 });
    observeElements("#agendar h2", { y: 36, delay: 90 });
    observeElements("#agendar p", { y: 22, delay: 170 });
    observeElements("#agendar .whatsapp-cta", { y: 18, scale: 0.97, delay: 260 });
    observeElements("#agendar #btn-copy-phone", { y: 16, delay: 330 });
    observeElements("#agendar .flex.flex-col.items-center.gap-1", { y: 16, delay: 400 });
}
