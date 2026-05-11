/**
 * transition.js
 */

// ═══════════════════════════════════════════════════════════════
// 1. PageAnimations Registry
// ═══════════════════════════════════════════════════════════════

window.PageAnimations = (() => {
  const _registry = [];

  return {
    register(fn) {
      if (typeof fn === "function") _registry.push(fn);
    },

    runAll() {
      _registry.forEach((fn) => {
        try {
          fn();
        } catch (err) {
          console.warn("[PageAnimations] Error in " + fn.name + ":", err);
        }
      });
    },
  };
})();

// ═══════════════════════════════════════════════════════════════
// 2. Page Transition
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
  // coverScreen — columns bay vào từ PHẢI sang TRÁI che màn hình
  // ────────────────────────────────────────────────────────────
  function coverScreen() {
    return new Promise((resolve) => {
      const cols = document.querySelectorAll("#preloader .column");
      if (!cols.length) return resolve();

      gsap.set(cols, { backgroundColor: COLUMN_BG });

      gsap.set(cols, {
        rotateY: -90,
        translateZ: -180,
        transformOrigin: "right center",
      });

      gsap.set("#preloader", { display: "flex" });

      // stagger âm = column cuối (phải nhất) vào trước
      gsap.to(cols, {
        rotateY: 0,
        translateZ: 0,
        duration: 0.65,
        stagger: -0.025,
        ease: "power4.inOut",
        onComplete: resolve,
      });
    });
  }

  // ────────────────────────────────────────────────────────────
  // Loader — dùng promise riêng, KHÔNG phụ thuộc vào timeline
  // ────────────────────────────────────────────────────────────
  let _loaderTl = null;
  let _loaderDoneResolve = null;
  let _loaderDonePromise = null;

  function startLoader() {
    const loaderIcon = document.getElementById("loader-icon");
    const ring = document.getElementById("ring");

    // Tạo promise mới, resolve khi ring chạy xong
    _loaderDonePromise = new Promise((resolve) => {
      _loaderDoneResolve = resolve;
    });

    if (!loaderIcon || !ring) {
      // Không có element → resolve ngay để không treo
      _loaderDoneResolve?.();
      return;
    }

    const CIRC = 2 * Math.PI * 60;
    ring.style.strokeDasharray = CIRC;
    ring.style.strokeDashoffset = CIRC;

    // Hiện element trước khi gsap set để tránh flash
    loaderIcon.style.display = "block";
    gsap.set(loaderIcon, { opacity: 0, scale: 0.95 });

    if (_loaderTl) {
      _loaderTl.kill();
      _loaderTl = null;
    }

    _loaderTl = gsap.timeline({
      // FIX: onComplete gọi resolve TRƯỚC khi hideLoader kill timeline
      onComplete: () => {
        _loaderDoneResolve?.();
      },
    });

    _loaderTl
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

  async function hideLoader() {
    // Đợi ring chạy xong (hoặc promise đã resolve rồi thì qua ngay)
    if (_loaderDonePromise) await _loaderDonePromise;

    return new Promise((resolve) => {
      const loaderIcon = document.getElementById("loader-icon");

      if (_loaderTl) {
        _loaderTl.kill();
        _loaderTl = null;
      }

      if (!loaderIcon) return resolve();

      gsap.to(loaderIcon, {
        opacity: 0,
        scale: 0.95,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          loaderIcon.style.display = "none";
          resolve();
        },
      });
    });
  }

  // ────────────────────────────────────────────────────────────
  // revealScreen — columns mở ra giống preloader exit
  // ────────────────────────────────────────────────────────────
  function revealScreen() {
    return new Promise((resolve) => {
      const cols = document.querySelectorAll("#preloader .column");
      if (!cols.length) return resolve();

      gsap.to(cols, {
        rotateY: -90,
        translateZ: 180,
        transformOrigin: "left center",
        duration: 1,
        stagger: -0.03,
        ease: "power4.inOut",
        onComplete: () => {
          gsap.set("#preloader", { display: "none" });
          resolve();
        },
      });
    });
  }

  // ────────────────────────────────────────────────────────────
  // destroyCurrentPage
  // ────────────────────────────────────────────────────────────
  function destroyCurrentPage() {
    ScrollTrigger.getAll().forEach((t) => t.kill());

    if (window._lenis) {
      if (window._lenisTickerFn) {
        gsap.ticker.remove(window._lenisTickerFn);
        window._lenisTickerFn = null;
      }
      window._lenis.destroy();
      window._lenis = null;
    }

    ["_swiper1", "_swiper2"].forEach((key) => {
      window[key]?.destroy(true, true);
      window[key] = null;
    });

    window.globeDestroy?.();
    window.shaderPause?.();
  }

  // ────────────────────────────────────────────────────────────
  // initNewPage
  // ────────────────────────────────────────────────────────────
  function initNewPage() {
    window.scrollTo({ top: 0, behavior: "instant" });

    if (typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    PageAnimations.runAll();

    const heroContainer = document.querySelector("[data-barba='container']");
    if (heroContainer && window.triggerAnimationsIn) {
      window.triggerAnimationsIn(heroContainer);
    }

    const hasShader = !!document.querySelector(".gradient-canvas");
    if (hasShader) {
      window.shaderResume?.();
      window.shaderReveal?.();
    }

    const hasGlobe = !!document.getElementById("company-globe-canvas");
    if (hasGlobe && !window._globeInitialized) {
      window._globeInitialized = true;
      window.init3DGlobe?.();
    }
  }

  // ────────────────────────────────────────────────────────────
  // Barba init
  // ────────────────────────────────────────────────────────────
  try {
    barba.init({
      prevent: ({ el }) => {
        if (el.classList?.contains("no-barba")) return true;
        if (el.closest("[data-barba-prevent]")) return true;
        if (el.getAttribute("href")?.startsWith("#")) return true;
        if (el.getAttribute("target") === "_blank") return true;
        return false;
      },

      transitions: [
        {
          name: "columns",

          async leave({ current }) {
            await coverScreen(); // đợi columns phủ xong
            destroyCurrentPage(); // dọn dẹp trang cũ
            startLoader(); // fire-and-forget, KHÔNG await
            // leave kết thúc → Barba swap DOM ngay khi fetch xong
          },

          async enter({ next }) {
            await hideLoader(); // đợi ring chạy xong rồi fade out
            gsap.set(next.container, { opacity: 1 });
            initNewPage();
            await revealScreen(); // columns mở ra reveal trang mới
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
