/**
 * transition.js
 */

// ═══════════════════════════════════════════════════════════════
// 1. PageAnimations Registry
// ═══════════════════════════════════════════════════════════════

window.PageAnimations = (() => {
  let _registry = [];
  let _originals = []; // lưu hàm gốc để re-register sau clear

  return {
    register(fn) {
      if (typeof fn === "function") {
        // Tránh trùng theo tên hàm
        if (!_originals.find(f => f.name === fn.name)) {
          _originals.push(fn);
        }
        _registry.push(fn);
      }
    },

    // Gọi trước mỗi page transition mới
    reset() {
      _registry = [..._originals];
    },

    runAll() {
      _registry.forEach(fn => {
        try { fn(); }
        catch (err) { console.warn("[PageAnimations]", fn.name, err); }
      });
    },
  };
})();

// ═══════════════════════════════════════════════════════════════
// 2. Helpers
// ═══════════════════════════════════════════════════════════════

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms || 0));
}

// ═══════════════════════════════════════════════════════════════
// 3. Page Transition
// ═══════════════════════════════════════════════════════════════

function initPageTransition() {
  if (typeof barba === "undefined") {
    console.warn("[Transition] barba.js chưa được load");
    return;
  }

  if (window._barbaInitialized) return;

  const COLUMN_BG =
    getComputedStyle(document.documentElement).getPropertyValue(
      "--color-brand",
    ) || "hsla(247, 48%, 45%, 1)";

  // ────────────────────────────────────────────────────────────
  // coverScreen
  // ────────────────────────────────────────────────────────────
  function coverScreen() {
    const cols = document.querySelectorAll("#preloader .column");
    if (!cols.length) return;

    gsap.set(cols, { backgroundColor: COLUMN_BG });
    gsap.set(cols, {
      rotateY: -90,
      translateZ: -180,
      transformOrigin: "right center",
    });
    gsap.set("#preloader", { display: "flex" });

    gsap.to(cols, {
      rotateY: 0,
      translateZ: 0,
      duration: 0.65,
      stagger: -0.025,
      ease: "power4.inOut",
    });
  }

  // ────────────────────────────────────────────────────────────
  // startLoader
  // ────────────────────────────────────────────────────────────
  function startLoader() {
    const loaderIcon = document.getElementById("loader-icon");
    const ring = document.getElementById("ring");

    if (!loaderIcon || !ring) return;

    const CIRC = 2 * Math.PI * 60;
    ring.style.strokeDasharray = CIRC;
    ring.style.strokeDashoffset = CIRC;

    loaderIcon.style.display = "block";
    gsap.set(loaderIcon, { opacity: 0, scale: 0.95 });

    gsap
      .timeline()
      .to(loaderIcon, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
      .to(
        ring,
        { strokeDashoffset: 0, duration: 1.2, ease: "power1.inOut" },
        "<0.1",
      );
  }

  // ────────────────────────────────────────────────────────────
  // hideLoader
  // ────────────────────────────────────────────────────────────
  function hideLoader() {
    const loaderIcon = document.getElementById("loader-icon");
    if (!loaderIcon) return;

    gsap.to(loaderIcon, {
      opacity: 0,
      scale: 0.95,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        loaderIcon.style.display = "none";
      },
    });
  }

  // ────────────────────────────────────────────────────────────
  // revealScreen
  // ────────────────────────────────────────────────────────────
  function revealScreen() {
    const cols = document.querySelectorAll("#preloader .column");
    if (!cols.length) return;

    gsap.to(cols, {
      rotateY: -90,
      translateZ: 180,
      transformOrigin: "left center",
      duration: 1,
      stagger: -0.03,
      ease: "power4.inOut",
      onComplete: () => {
        gsap.set("#preloader", { display: "none" });
      },
    });
  }

  // ────────────────────────────────────────────────────────────
  // destroyCurrentPage — xóa sạch mọi thứ của page hiện tại
  // ────────────────────────────────────────────────────────────
  function destroyCurrentPage() {
    ScrollTrigger.getAll().forEach((t) => t.kill());
    ScrollTrigger.clearScrollMemory?.();

    if (window._lenis) {
      if (window._lenisTickerFn) {
        gsap.ticker.remove(window._lenisTickerFn);
        window._lenisTickerFn = null;
      }
      try {
        window._lenis.destroy();
      } catch (e) {}
      window._lenis = null;
    }

    document.body.style.overflowY = "";
    document.documentElement.style.overflowY = "";

    const footer = document.querySelector("footer");
    if (footer) footer.style.transform = "";

    const main = document.querySelector("main");
    if (main) {
      main.style.transform = "";
      main.style.boxShadow = "";
    }

    document.getElementById("footer-reveal-spacer")?.remove();

    if (window._formParallaxTicker) {
      gsap.ticker.remove(window._formParallaxTicker);
      window._formParallaxTicker = null;
    }

    ["_swiper1", "_swiper2"].forEach((key) => {
      try {
        window[key]?.destroy(true, true);
      } catch (e) {}
      window[key] = null;
    });

    try {
      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          if (arguments.length) window.scrollTo(0, value);
          return window.scrollY;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });
    } catch (e) {}
  } 

  // ────────────────────────────────────────────────────────────
  // initNewPage — chạy lại toàn bộ animation cho page mới
  // ────────────────────────────────────────────────────────────
  function initNewPage() {
    window.scrollTo({ top: 0, behavior: "instant" });

    if (typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    PageAnimations.reset();
  }

  const T = {
    COVER: 800,
    LOADER: 1600,
    HIDE: 300,
    REVEAL: 400,
  };

  // ────────────────────────────────────────────────────────────
  // Barba init
  // ────────────────────────────────────────────────────────────
  try {
    barba.init({
      prevent: ({ el }) => {
        if (el.classList?.contains("no-barba")) return true;
        if (el.closest("[data-barba-prevent]")) return true;
        const href = el.getAttribute("href");
        if (!href || href === "") return true;
        if (href.startsWith("#")) return true;
        if (el.getAttribute("target") === "_blank") return true;
        return false;
      },

      transitions: [
        {
          name: "columns",

          async leave({ current }) {
            coverScreen();
            await delay(T.COVER);
            destroyCurrentPage();
            startLoader();
          },

          async enter({ next }) {
            await delay(T.LOADER);
            hideLoader();
            await delay(T.HIDE);
            gsap.set(next.container, { opacity: 1 });
            initNewPage();
            revealScreen();
            await delay(T.REVEAL);
          },

          after() {
            ScrollTrigger.refresh?.();
          },
        },
      ],

      requestError(trigger, action, url, response) {
        console.error("[Barba] Request error", action, url, response);
        return true;
      },
    });

    window._barbaInitialized = true;
    console.log("[Barba] init OK");
  } catch (e) {
    console.error("[Barba] init FAILED:", e);
  }

  barba.hooks.after(({ next }) => {
    PageAnimations.runAll();
    document.querySelectorAll(".h-menu a, .nav-menu a").forEach((a) => {
      a.classList.remove("is-active");
      try {
        const url = new URL(a.href, location.origin);
        if (url.pathname === location.pathname) {
          a.classList.add("is-active");
        }
      } catch (_) {}
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPageTransition);
} else {
  initPageTransition();
}
