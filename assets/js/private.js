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

    var swiperModel1 = new Swiper('.swiper-model-1', swiperConfig);

    var swiperModel2 = new Swiper('.swiper-model-2', {
        ...swiperConfig,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true, // chạy ngược chiều
        },
    });

    // Khởi tạo Lenis smooth scrolling cho toàn bộ trang (body)
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.35,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing mượt
            smooth: true,
            smoothTouch: false,
        });

        // Hàm loop liên tục để tính toán cuộn
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Đồng bộ GSAP với Lenis nếu có
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            });
            gsap.ticker.lagSmoothing(0);
        }
    }

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        if ($('.vision-shape-section').length) {
            // Only apply on desktop where it's 100vh
            let mdBreakpoint = window.matchMedia("(min-width: 1024px)");

            if (mdBreakpoint.matches) {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".vision-shape-section",
                        start: "top top",
                        end: "+=180%",
                        pin: true,
                        scrub: 1,
                    }
                });

                tl.from(".vision-text", { xPercent: 87, ease: "none", duration: 1 }, 0)
                    .from(".shape-text", { xPercent: -87, ease: "none", duration: 1 }, 0)
                    .from(".take-1", { yPercent: -200, opacity: 0, ease: "none", duration: 1 }, 0)
                    .from(".take-2", { yPercent: 200, opacity: 0, ease: "none", duration: 1 }, 0)
                    .to({}, { duration: 0.1 }); // Nghỉ một chút (~ 60px - 100px scroll) sau khi animation chạy xong để không bị giật sang section khác
            }
        }
    }

});

