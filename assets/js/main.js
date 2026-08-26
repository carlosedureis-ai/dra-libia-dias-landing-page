/**
 * Dra. Líbia Dias - Landing Page Script
 * Secure, Vanilla JavaScript without external dependencies.
 * Zero vulnerabilities, XSS-safe, CSP compliant.
 */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    initHeaderScroll();
    initProcedureFilters();
    initFaqAccordion();
    initWhatsAppHelpers();
});

/**
 * 1. Header scroll visual effect with passive event listener for 60fps performance
 */
function initHeaderScroll() {
    const header = document.getElementById("main-header");
    if (!header) return;

    let ticking = false;

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 40) {
                    header.classList.add("shadow-md", "py-2.5");
                    header.classList.remove("py-3.5");
                } else {
                    header.classList.remove("shadow-md", "py-2.5");
                    header.classList.add("py-3.5");
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/**
 * 2. Procedure category tab filtering with smooth transition
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
 * 3. FAQ Accordion Toggle with ARIA state updates
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
 * 4. WhatsApp Copy Helper & Universal Dispatcher
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
