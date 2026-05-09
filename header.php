<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Halotel</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anek+Latin:wght@100..800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap" rel="stylesheet">

    <link rel="stylesheet" type="text/css" title="" href="assets/lib/css/swiper.min.css">
    <link rel="stylesheet" type="text/css" title="" href="assets/lib/css/animate.css">

    <link rel="stylesheet" type="text/css" title="" href="assets/css/style.css?v=<?php echo time() ?>">

    <link rel="stylesheet" type="text/css" title="" href="assets/css/custom.css?v=<?php echo time() ?>">

    <link rel="stylesheet" type="text/css" href="assets/css/tailwind.css?v=<?php echo time() ?>">

    <link rel="stylesheet" type="text/css" href="assets/css/animation.css?v=<?php echo time() ?>">

    <style>
        html.lenis,
        html.lenis body {
            height: auto;
        }

        .lenis.lenis-smooth {
            scroll-behavior: auto !important;
        }

        .lenis.lenis-smooth [data-lenis-prevent] {
            overscroll-behavior: contain;
        }

        .lenis.lenis-stopped {
            overflow: hidden;
        }

        .lenis.lenis-smooth iframe {
            pointer-events: none;
        }
    </style>

    <script>
        if (history.scrollRestoration) {
            history.scrollRestoration = 'manual';
        }
        window.addEventListener('pageshow', function () {
            window.scrollTo({ top: 0, behavior: 'instant' });
        });
    </script>
</head>

<body>

    <header id="main-header" class="fixed top-0 left-0 w-full z-50 p-2.5 md:p-5 2xl:p-10 anek"
        style="transition: transform 0.4s ease-in-out;">
        <div class="wrapper">
            <div
                class="bg-black w-full p-2 border border-[#2F2F38] rounded-1 hidden lg:flex items-center justify-between gap-6 relative">
                <div class="item h-full flex items-center">
                    <a href=""><img src="assets/images/logo.svg" alt=""></a>
                </div>
                <div class="item  h-full flex items-center justify-center">
                    <div class="h-menu">
                        <ul>
                            <li>
                                <a href="">
                                    Services
                                    <svg class="arrow" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 9V11H15V13H13V15H11V13H9V11H7V9H17Z" fill="white" />
                                    </svg>
                                </a>
                                <div class="sub-menu-child">
                                    <ul class="sub-menu !block">
                                        <li>
                                            <a href="">
                                                <span class="icon">
                                                    <img src="assets/images/sumenu.svg" alt="">
                                                </span>
                                                <span class="text">
                                                    <span class="h-title">
                                                        Gamifcation
                                                    </span>
                                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span class="icon">
                                                    <img src="assets/images/sumenu.svg" alt="">
                                                </span>
                                                <span class="text">
                                                    <span class="h-title">
                                                        BFSI Solution
                                                    </span>
                                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span class="icon">
                                                    <img src="assets/images/sumenu.svg" alt="">
                                                </span>
                                                <span class="text">
                                                    <span class="h-title">
                                                        Digital Solution
                                                    </span>
                                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="">
                                    Case Study
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Company
                                    <svg class="arrow" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 9V11H15V13H13V15H11V13H9V11H7V9H17Z" fill="white" />
                                    </svg>
                                </a>
                                <div class="sub-menu-child !left-[50%]" style="transform: translateX(-50%);">
                                    <div class="sub-menu company flex gap-2">
                                        <div class="grid grid-cols-3 gap-4 w-full max-w-143">
                                            <div
                                                class="item overflow rounded-1 relative p-2 hover:bg-[#FFFFFF14] max-w-45 w-full">
                                                <a href="" class="absolute top-0 left-0 z-2 w-full h-full"></a>
                                                <img src="assets/images/why.png"
                                                    class="w-full object-cover aspect-square" alt="">
                                                <div class="pt-3 pb-2 text-center anek font-medium">
                                                    About us
                                                </div>
                                            </div>
                                            <div
                                                class="item overflow rounded-1 relative p-2 hover:bg-[#FFFFFF14] max-w-45 w-full">
                                                <a href="" class="absolute top-0 left-0 z-2 w-full h-full"></a>
                                                <img src="assets/images/why.png"
                                                    class="w-full object-cover aspect-square" alt="">
                                                <div class="pt-3 pb-2 text-center anek font-medium">
                                                    Career
                                                </div>
                                            </div>
                                            <div
                                                class="item overflow rounded-1 relative p-2 hover:bg-[#FFFFFF14] max-w-45 w-full">
                                                <a href="" class="absolute top-0 left-0 z-2 w-full h-full"></a>
                                                <img src="assets/images/why.png"
                                                    class="w-full object-cover aspect-square" alt="">
                                                <div class="pt-3 pb-2 text-center anek font-medium">
                                                    Blog
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="rigt flex flex-col justify-between pb-6 pl-6 text-[16px] border-l-[1px] border-[#FFFFFF26]">
                                            <div class="opacity-65">CONTACT</div>
                                            <div class="item">
                                                <p>T: (+84) 868 217 954</p>
                                                <p>(日本): 050 5539 3197</p>
                                                <p>E: contact@triplayz.com</p>
                                            </div>
                                            <div class="item">
                                                <p>3 Le Van Huu Street, Hai Ba Trung Ward, Hanoi, Vietnam</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="item h-full flex items-center justify-end">
                    <div class="flex items-center">
                        <div class="translate btn-head-menu relative">
                            <a href="">
                                <img src="assets/images/eng.png" alt="">
                                <span>English</span>
                                <svg class="arrow" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 9V11H15V13H13V15H11V13H9V11H7V9H17Z" fill="white" />
                                </svg>
                            </a>
                            <div class="sub-menu-child anek text-[16px]">
                                <ul class="sub-menu !block text-left">
                                    <li>
                                        <a href="">
                                            <img src="assets/images/eng.png" alt="">
                                            <span>日本語 (Japanese)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="assets/images/eng.png" alt="">
                                            <span>Tiếng Việt (Vietnamese)</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="head-contact btn-head-menu">
                            <a href="" class="bg-[#5643DD]">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-black w-full p-4 flex items-center justify-between rounded-1 block lg:hidden">
                <div class="logo">
                    <a href=""><img src="assets/images/logo.svg" class="h-8" alt=""></a>
                </div>
                <div class="bar">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 5H21" stroke="white" stroke-width="2" stroke-linecap="square" />
                        <path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="square" />
                        <path d="M3 19H21" stroke="white" stroke-width="2" stroke-linecap="square" />
                    </svg>
                </div>
            </div>
        </div>
    </header>