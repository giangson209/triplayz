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

  let lenis; // khai báo ở scope ngoài để dùng được trong gsap block

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

      const MAIN_SLOW = 1.9;
      const FOOTER_SLOW = 0.7;

      const spacer = document.createElement("div");
      spacer.id = "footer-reveal-spacer";
      spacer.style.pointerEvents = "none";
      mainEl.insertAdjacentElement("afterend", spacer);

      function getOffset() {
        return window.innerHeight * 0.4;
      }

      function updateSpacer() {
        const V = window.innerHeight;
        const FH = footerEl.offsetHeight;
        spacer.style.height =
          Math.max(
            V * MAIN_SLOW * 0.94,
            V * FOOTER_SLOW * 0.94 + Math.max(0, FH - V),
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

    // Cập nhật số thứ tự cho phần Highlight case study kèm hiệu ứng slide
    if ($(".item-casestudy").length) {
      let activeIndex = 0;
      let lastDirection = 1;
      let updateTimeout;

      $(".item-casestudy").each(function (index) {
        ScrollTrigger.create({
          trigger: this,
          start: "top 60%",
          end: "bottom 60%",
          onToggle: (self) => {
            if (self.isActive && activeIndex !== index) {
              lastDirection = index > activeIndex ? 1 : -1;
              activeIndex = index;

              clearTimeout(updateTimeout);
              updateTimeout = setTimeout(() => {
                let num = activeIndex + 1;
                let newText = num < 10 ? "0" + num : num;

                let $wrap = $(".current-case-numb").first().parent();

                $wrap.find(".is-leaving").remove();

                let $oldEls = $wrap.find(".current-case-numb");

                if ($oldEls.length && $oldEls.last().text() === String(newText))
                  return;

                $oldEls.addClass("is-leaving");

                let yOut = lastDirection === 1 ? "100%" : "-100%";
                let yIn = lastDirection === 1 ? "-100%" : "100%";

                let $newEl = $(
                  '<span class="current-case-numb absolute w-full text-center">' +
                    newText +
                    "</span>",
                );
                gsap.set($newEl, { y: yIn });

                $wrap.append($newEl);

                gsap.killTweensOf($oldEls);

                gsap.to($oldEls, {
                  y: yOut,
                  duration: 0.3,
                  ease: "power2.out",
                  onComplete: () => {
                    $oldEls.remove();
                  },
                });

                gsap.to($newEl, {
                  y: "0%",
                  duration: 0.3,
                  ease: "power2.out",
                });
              }, 25);
            }
          },
        });
      });
    }

    // Animation xoay vòng Why Us
    if ($(".content-whuyus").length && $(".whyus-slide").length > 1) {
      let slides = gsap.utils.toArray(".whyus-slide");

      slides.forEach((sl, i) => {
        sl.classList.remove("opacity-0", "translate-y-10");
        if (i > 0) gsap.set(sl, { yPercent: 100 });
        else gsap.set(sl, { yPercent: 0 });
      });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".content-whuyus",
          start: "center center",
          end: () => "+=" + window.innerHeight * 4,
          pin: true,
          scrub: true,
        },
      });

      let totalDuration = slides.length - 1;
      let totalRotation = -totalDuration * 45;

      tl.to(
        ".whyus-wheel",
        {
          rotation: totalRotation,
          ease: "none",
          duration: totalDuration,
        },
        0,
      );

      slides.forEach((sl, i) => {
        if (i > 0) {
          tl.to(
            slides[i - 1],
            { yPercent: -100, ease: "none", duration: 1 },
            i - 1,
          );
          tl.to(sl, { yPercent: 0, ease: "none", duration: 1 }, i - 1);
        }
      });
    }

    if ($(".form-parallax-sec").length && $(".form-parallax-img").length) {
      const section = document.querySelector(".form-parallax-sec");
      const img = document.querySelector(".form-parallax-img");
      let smoothedScroll = lenis ? lenis.targetScroll : window.scrollY;
      const LERP_FACTOR = 0.18; 

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

        // Map từ -20px đến +20px
        const yPercent = -10 + clamped * 22;
        img.style.transform = `translateY(${yPercent}%)`;
      });
    }

    // Header ẩn/hiện khi scroll
    let headerEl = document.getElementById("main-header");
    if (headerEl) {
      ScrollTrigger.create({
        start: "top -100",
        end: 99999,
        onUpdate: (self) => {
          if (self.direction === -1) {
            headerEl.style.transform = "translateY(0%)";
          } else if (self.direction === 1) {
            headerEl.style.transform = "translateY(-100%)";
          }
        },
      });
    }
  }
});
