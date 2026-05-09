$(document).ready(function () {
  var swiperConfig = {
    spaceBetween: 16,
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5.5,
      },
      1400: {
        slidesPerView: 5.5,
      },
    },
  };

  var swiperModel1 = new Swiper(".swiper-model-1", swiperConfig);

  var swiperModel2 = new Swiper(".swiper-model-2", {
    ...swiperConfig,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
    },
  });

  let lenis; 

  if (typeof Lenis !== "undefined") {
    lenis = new Lenis({
      duration: 1.45,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          if (arguments.length) lenis.scrollTo(value, { immediate: true });
          return lenis.scroll;
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

      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      ScrollTrigger.refresh();
    }

    (function initFooterReveal() {
      const mainEl = document.querySelector("main");
      const footerEl = document.querySelector("footer");
      if (!mainEl || !footerEl) return;

      const MAIN_SLOW = 2;
      const FOOTER_SLOW = 0.7;

      const spacer = document.createElement("div");
      spacer.id = "footer-reveal-spacer";
      spacer.style.pointerEvents = "none";
      mainEl.insertAdjacentElement("afterend", spacer);

      function getOffset() {
        return window.innerHeight * 0.5;
      }

      function updateSpacer() {
        const V = window.innerHeight;
        const FH = footerEl.offsetHeight;
        spacer.style.height =
          Math.max(
            V * MAIN_SLOW * 0.64,
            V * FOOTER_SLOW * 0.64 + Math.max(0, FH - V),
          ) + "px";
      }

      updateSpacer();
      footerEl.style.transform = `translateY(${getOffset()}px)`;

      lenis.on("scroll", ({ scroll }) => {
        const V = window.innerHeight;
        const FOOTER_OFFSET = getOffset();
        const triggerY = mainEl.offsetHeight - V;

        if (scroll > triggerY) {
          const rawDelta = scroll - triggerY;

          const mainDelta = rawDelta / MAIN_SLOW;
          mainEl.style.transform = `translateY(-${mainDelta}px)`;

          const mainProgress = Math.min(1, mainDelta / V);
          mainEl.style.boxShadow = `0 10px 20px rgba(0,0,0,.3)`;

          const footerProgress = Math.min(1, rawDelta / (FOOTER_SLOW * V));
          const footerParallax = FOOTER_OFFSET * (1 - footerProgress);

          const FH = footerEl.offsetHeight;
          const footerScrollStart = FOOTER_SLOW * V;
          const footerScrollDelta = Math.min(
            Math.max(0, rawDelta - footerScrollStart),
            Math.max(0, FH - V),
          );

          footerEl.style.transform = `translateY(${footerParallax - footerScrollDelta}px)`;
        } else {
          mainEl.style.transform = "";
          mainEl.style.boxShadow = "";
          footerEl.style.transform = `translateY(${getOffset()}px)`;
        }
      });

      window.addEventListener("resize", () => {
        updateSpacer();
        footerEl.style.transform = `translateY(${getOffset()}px)`;
        ScrollTrigger.refresh();
      });
    })();
  }

  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Animation xoay vòng Why Us
    if ($(".content-whuyus").length && $(".whyus-slide").length > 1) {
      const scrollTrig = document.getElementById("whyus-scroll-trigger");
      if (scrollTrig) {
        const slides = gsap.utils.toArray(".whyus-slide");
        const origins = ["top", "center", "top", "center"];
        const rotates = [-2, 3, -.5, 2];

        slides.forEach((sl, i) => {
          sl.classList.remove("opacity-0", "translate-y-10");
          gsap.set(sl, {
            yPercent: i === 0 ? 0 : 100,
            rotateX: 0,
            rotate: 0,
            y: 0,
            z: 0,
            opacity: 1,
            transformOrigin: `bottom ${origins[i]}`,
            transformPerspective: 600,
          });
        });

        let triggeredIdx = -1;

        function getWhyusProgress() {
          const rect = scrollTrig.getBoundingClientRect();
          const total = scrollTrig.offsetHeight - window.innerHeight;
          if (total <= 0) return 0;
          return Math.max(0, Math.min(1, -rect.top / total));
        }

        function onWhyusScroll() {
          const p = getWhyusProgress();
          const numT = slides.length - 1;
          const tp = p * numT;

          const wheelEl = document.querySelector(".whyus-wheel");
          if (wheelEl) wheelEl.style.transform = `rotate(${-45 * tp}deg)`;

          slides.forEach((sl, i) => {
            const rawT = tp - i;
            const yPct = Math.max(-100, Math.min(100, (i - tp) * 100));

            let rotateX = 0;
            let rotate = 0
            let z = 0;
            let y = 0;
            let opacity = 1;

            if (rawT >= 0.3 && rawT <= 1.0) {
              const exitProgress = (rawT - 0.3) / 0.4;
              rotateX = exitProgress * 20;
              rotate = exitProgress * rotates[i];
              z = exitProgress * -90;
              y = exitProgress * -100;
              opacity = 1 - exitProgress;
            }

            gsap.set(sl, { yPercent: yPct, rotateX, rotate, z, y, opacity });
          });

          const rect = scrollTrig.getBoundingClientRect();
          const inView = rect.top < window.innerHeight && rect.bottom > 0;

          if (inView && triggeredIdx < 0) {
            triggeredIdx = 0;
            if (window.triggerAnimationsIn)
              window.triggerAnimationsIn(slides[0]);
          }

          const currentIdx = Math.min(Math.round(tp), numT);
          if (currentIdx > triggeredIdx) {
            for (let i = triggeredIdx + 1; i <= currentIdx; i++) {
              if (window.triggerAnimationsIn)
                window.triggerAnimationsIn(slides[i]);
            }
            triggeredIdx = currentIdx;
          }
        }

        let _whyusRaf = false;
        window.addEventListener(
          "scroll",
          () => {
            if (_whyusRaf) return;
            _whyusRaf = true;
            requestAnimationFrame(() => {
              onWhyusScroll();
              _whyusRaf = false;
            });
          },
          { passive: true },
        );

        if (typeof lenis !== "undefined" && lenis) {
          lenis.on("scroll", onWhyusScroll);
        }

        onWhyusScroll();
      }
    }

    if ($(".form-parallax-sec").length && $(".form-parallax-img").length) {
      const section = document.querySelector(".form-parallax-sec");
      const img = document.querySelector(".form-parallax-img");
      let smoothedScroll = lenis ? lenis.targetScroll : window.scrollY;
      const LERP_FACTOR = 0.07;

      gsap.ticker.add(() => {
        const target = lenis ? lenis.targetScroll : window.scrollY;
        smoothedScroll += (target - smoothedScroll) * LERP_FACTOR;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const vh = window.innerHeight;

        const start = sectionTop - vh;
        const end = sectionTop + sectionHeight;
        const progress = (smoothedScroll - start) / (end - start);
        const clamped = Math.max(0, Math.min(1, progress));

        const yPercent = -10 + clamped * 24;
        img.style.transform = `translateY(${yPercent}%)`;
      });
    }

    // Header ẩn/hiện khi scroll
    let headerEl = document.getElementById("main-header");
    if (headerEl) {
      let lastScrollY = lenis ? lenis.scroll : window.scrollY;

      const handleHeaderScroll = ({ scroll }) => {
        if (scroll < 100) {
          headerEl.style.transform = "translateY(0%)";
        } else if (scroll < lastScrollY) {
          headerEl.style.transform = "translateY(0%)";
        } else if (scroll > lastScrollY) {
          headerEl.style.transform = "translateY(-100%)";
        }
        lastScrollY = scroll;
      };

      if (lenis) {
        lenis.on("scroll", handleHeaderScroll);
      } else {
        window.addEventListener(
          "scroll",
          () => {
            const scroll = window.scrollY;
            handleHeaderScroll({ scroll });
          },
          { passive: true },
        );
      }
    }
  }

  // Handle contact form clear button
  $(".form-contact input, .form-contact textarea").on("input", function () {
    var $icon = $(this).siblings(".btn-clear");
    if ($(this).val().length > 0) {
      $icon.removeClass("opacity-0 pointer-events-none").addClass("!opacity-100 !pointer-events-auto");
    } else {
      $icon.addClass("opacity-0 pointer-events-none").removeClass("!opacity-100 !pointer-events-auto");
    }
  });

  $(".form-contact .btn-clear").on("click", function () {
    var $input = $(this).siblings("input, textarea");
    $input.val("").trigger("input");
  });

  // Handle directional hover for .item-tools with SVG
  $(".item-tools").each(function () {
    let $this = $(this);
    let $svg = $this.find(".d-studio-award-block--filler");
    let $path = $svg.find("path");

    let tl;

    $this.on("mouseenter", function (e) {
      if (tl) tl.kill();
      tl = gsap.timeline();

      let rect = this.getBoundingClientRect();
      let relY = e.clientY - rect.top;
      let isTop = relY < rect.height / 2;

      gsap.set($svg[0], { opacity: 1 });

      if (isTop) {
        gsap.set($path[0], { attr: { d: "M 0 0 V 0 Q 250 0 500 0 V 0 z" } });
        tl.to($path[0], {
          attr: { d: "M 0 0 V 50 Q 250 100 500 50 V 0 z" },
          duration: 0.15,
          ease: "sine.in"
        }).to($path[0], {
          attr: { d: "M 0 0 V 100 Q 250 100 500 100 V 0 z" },
          duration: 0.15,
          ease: "sine.out"
        });
      } else {
        gsap.set($path[0], { attr: { d: "M 0 100 V 100 Q 250 100 500 100 V 100 z" } });
        tl.to($path[0], {
          attr: { d: "M 0 100 V 50 Q 250 0 500 50 V 100 z" },
          duration: 0.15,
          ease: "sine.in"
        }).to($path[0], {
          attr: { d: "M 0 100 V 0 Q 250 0 500 0 V 100 z" },
          duration: 0.15,
          ease: "sine.out"
        });
      }
    });

    $this.on("mouseleave", function (e) {
      if (tl) tl.kill();
      tl = gsap.timeline();

      let rect = this.getBoundingClientRect();
      let relY = e.clientY - rect.top;
      let isTop = relY < rect.height / 2;

      if (isTop) {
        gsap.set($path[0], { attr: { d: "M 0 0 V 100 Q 250 100 500 100 V 0 z" } });
        tl.to($path[0], {
          attr: { d: "M 0 0 V 50 Q 250 100 500 50 V 0 z" },
          duration: 0.35,
          ease: "sine.in"
        }).to($path[0], {
          attr: { d: "M 0 0 V 0 Q 250 0 500 0 V 0 z" },
          duration: 0.35,
          ease: "sine.out"
        });
      } else {
        gsap.set($path[0], { attr: { d: "M 0 100 V 0 Q 250 0 500 0 V 100 z" } });
        tl.to($path[0], {
          attr: { d: "M 0 100 V 50 Q 250 0 500 50 V 100 z" },
          duration: 0.35,
          ease: "sine.in"
        }).to($path[0], {
          attr: { d: "M 0 100 V 100 Q 250 100 500 100 V 100 z" },
          duration: 0.35,
          ease: "sine.out"
        });
      }
    });
  });
});



