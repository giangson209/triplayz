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

                
            }
        }

        // Cập nhật số thứ tự cho phần Highlight case study kèm hiệu ứng slide (chống kẹt khi cuộn nhanh)
        if ($('.item-casestudy').length) {
            let activeIndex = 0;
            let lastDirection = 1;
            let updateTimeout;

            $('.item-casestudy').each(function (index) {
                ScrollTrigger.create({
                    trigger: this,
                    start: "top 60%",
                    end: "bottom 60%",
                    onToggle: self => {
                        if (self.isActive && activeIndex !== index) {
                            lastDirection = index > activeIndex ? 1 : -1;
                            activeIndex = index;

                            // Dùng debounce/timeout siêu ngắn để gom nhóm và bỏ qua các trạng thái trung gian nếu cuộn vèo một phát qua nhiều item
                            clearTimeout(updateTimeout);
                            updateTimeout = setTimeout(() => {
                                let num = activeIndex + 1;
                                let newText = num < 10 ? '0' + num : num;

                                let $wrap = $('.current-case-numb').first().parent();

                                // Dọn dẹp DOM node thừa để rác không bị dồn khi cuộn cuồng loạn mà onComplete chưa ki kịp
                                $wrap.find('.is-leaving').remove();

                                let $oldEls = $wrap.find('.current-case-numb');

                                // Nếu số hiện tại vẫn giống thì khỏi làm gì (trường hợp quay xe ngay lập tức)
                                if ($oldEls.length && $oldEls.last().text() === String(newText)) return;

                                $oldEls.addClass('is-leaving');

                                // Hướng trượt (scroll xuống -> trượt xuống như yêu cầu)
                                let yOut = lastDirection === 1 ? '100%' : '-100%';
                                let yIn = lastDirection === 1 ? '-100%' : '100%';

                                let $newEl = $('<span class="current-case-numb absolute w-full text-center">' + newText + '</span>');
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
                                    }
                                });

                                gsap.to($newEl, {
                                    y: '0%',
                                    duration: 0.3,
                                    ease: "power2.out"
                                });

                            }, 25); 
                        }
                    }
                });
            });
        }
        
    }

});

