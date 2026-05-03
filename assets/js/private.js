$(document).ready(function () {
  // $('.btn-bar').click(function(){
  //     $('.mm-menu').addClass('active');
  // })
  // $('.close-menu').click(function(){
  //     $('.mm-menu').removeClass('active');
  // })

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
      reverseDirection: true, // chạy ngược chiều
    },
  });

  if (typeof Lenis !== "undefined") {
    const lenis = new Lenis({
      duration: 1.35,
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
  }

  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Cập nhật số thứ tự cho phần Highlight case study kèm hiệu ứng slide (chống kẹt khi cuộn nhanh)
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

              // Dùng debounce/timeout siêu ngắn để gom nhóm và bỏ qua các trạng thái trung gian nếu cuộn vèo một phát qua nhiều item
              clearTimeout(updateTimeout);
              updateTimeout = setTimeout(() => {
                let num = activeIndex + 1;
                let newText = num < 10 ? "0" + num : num;

                let $wrap = $(".current-case-numb").first().parent();

                // Dọn dẹp DOM node thừa để rác không bị dồn khi cuộn cuồng loạn mà onComplete chưa ki kịp
                $wrap.find(".is-leaving").remove();

                let $oldEls = $wrap.find(".current-case-numb");

                // Nếu số hiện tại vẫn giống thì khỏi làm gì (trường hợp quay xe ngay lập tức)
                if ($oldEls.length && $oldEls.last().text() === String(newText))
                  return;

                $oldEls.addClass("is-leaving");

                // Hướng trượt (scroll xuống -> trượt xuống như yêu cầu)
                let yOut = lastDirection === 1 ? "100%" : "-100%";
                let yIn = lastDirection === 1 ? "-100%" : "100%";

                let $newEl = $(
                  '<span class="current-case-numb absolute w-full text-center">' +
                    newText +
                    "</span>",
                );
                gsap.set($newEl, { y: yIn });

                $wrap.append($newEl);

                // Ngắt sạch hiệu ứng cũ để không bị giật lag
                gsap.killTweensOf($oldEls);

                // Tăng tốc một chút hiệu ứng khi cuộn nhanh, bỏ đi inOut cho dứt khoát
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
              }, 25); // Chờ 25ms (khoảng gần 2 frame) để lắng đọng nhịp cuộn nhanh
            }
          },
        });
      });
    }
    // Animation xoay vòng Why Us (Chuyển lập tức, không trượt dần theo scrub)
    if ($(".content-whuyus").length && $(".whyus-slide").length > 1) {
      let slides = gsap.utils.toArray(".whyus-slide");

      // Khởi tạo các slide
      slides.forEach((sl, i) => {
        sl.classList.remove("opacity-0", "translate-y-10");
        if (i > 0) gsap.set(sl, { yPercent: 100 });
        else gsap.set(sl, { yPercent: 0 }); // Đảm bảo slide 0 nằm đúng vị trí
      });

      let activeSlide = 0;

      // 1 ScrollTrigger duy nhất để lấy tổng tiến trình (progress)
      ScrollTrigger.create({
        trigger: ".content-whuyus",
        start: "center center",
        end: () => "+=" + window.innerHeight * 4,
        pin: true,
        onUpdate: (self) => {
          // progress chạy từ 0 đến 1. Chia 4 khu vực: 0->0.25, 0.25->0.5, 0.5->0.75, 0.75->1.0
          let newIndex = Math.min(3, Math.floor(self.progress * 4));

          if (newIndex !== activeSlide) {
            activeSlide = newIndex;

            // Chạy hiệu ứng cho tất cả slide dựa trên vị trí index mới nhất
            slides.forEach((sl, idx) => {
              if (idx === activeSlide) {
                // Mở slide target vào giữa
                gsap.to(sl, {
                  yPercent: 0,
                  duration: 0.15,
                  ease: "power2.inOut",
                  overwrite: "auto",
                });
              } else if (idx < activeSlide) {
                // Slide đằng trước đẩy tuốt lên trên
                gsap.to(sl, {
                  yPercent: -100,
                  duration: 0.15,
                  ease: "power2.inOut",
                  overwrite: "auto",
                });
              } else {
                // Cất các slide sau xuống dưới
                gsap.to(sl, {
                  yPercent: 100,
                  duration: 0.15,
                  ease: "power2.inOut",
                  overwrite: "auto",
                });
              }
            });

            // Cập nhật góc quay theo số đoạn
            gsap.to(".whyus-wheel", {
              rotation: activeSlide * 45,
              duration: 0.15,
              ease: "power2.inOut",
              overwrite: "auto",
            });
          }
        },
      });
    }
  }
});
