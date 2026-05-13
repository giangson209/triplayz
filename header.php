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
</head>

<body>

    <header id="main-header" class="fixed top-0 left-0 w-full z-[50] p-2.5 md:p-5 2xl:p-10 anek"
        style="transition: transform 0.4s ease-in-out;">
        <div class="wrapper">
            <div
                class="bg-black w-full p-2 border border-[#2F2F38] rounded-1 hidden lg:flex items-center justify-between gap-6 relative">
                <div class="item h-full flex items-center">
                    <a href="index.php"><img src="assets/images/logo.svg" alt=""></a>
                </div>
                <div class="item  h-full flex items-center justify-center">
                    <div class="h-menu">
                        <ul>
                            <li>
                                <a href="service.php">
                                    Services
                                    <svg class="arrow" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 9V11H15V13H13V15H11V13H9V11H7V9H17Z" fill="white" />
                                    </svg>
                                </a>
                                <div class="sub-menu-child">
                                    <ul class="sub-menu !block">
                                        <li>
                                            <a href="service_game-1.php">
                                                <span class="icon">
                                                    <img src="assets/images/sumenu.svg" alt="">
                                                </span>
                                                <span class="text">
                                                    <span class="h-title">
                                                        Gamification
                                                    </span>
                                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service_game-2.php">
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
                                            <a href="service_game-3.php">
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
                                <a href="casestudy.php">
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
                                                <a href="about.php" class="absolute top-0 left-0 z-2 w-full h-full"></a>
                                                <img src="assets/images/why.png"
                                                    class="w-full object-cover aspect-square" alt="">
                                                <div class="pt-3 pb-2 text-center anek font-medium">
                                                    About us
                                                </div>
                                            </div>
                                            <div
                                                class="item overflow rounded-1 relative p-2 hover:bg-[#FFFFFF14] max-w-45 w-full">
                                                <a href="career.php"
                                                    class="absolute top-0 left-0 z-2 w-full h-full"></a>
                                                <img src="assets/images/why.png"
                                                    class="w-full object-cover aspect-square" alt="">
                                                <div class="pt-3 pb-2 text-center anek font-medium">
                                                    Career
                                                </div>
                                            </div>
                                            <div
                                                class="item overflow rounded-1 relative p-2 hover:bg-[#FFFFFF14] max-w-45 w-full">
                                                <a href="blog.php" class="absolute top-0 left-0 z-2 w-full h-full"></a>
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
                            <a href="contact.php" class="bg-[#5643DD]">Contact Us</a>
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

    <div
        class="nav-menu text-[32px] font-medium block lg:hidden bg-[#1D1D27] fixed top-0 w-full md:w-[375px] h-full z-[100] p-4 no-scrollbar overflow-y-scroll">
        <div class="flex rounded-1 border border-[#2F2F38] p-4 items-center justify-between mb-8 md:mb-16">
            <div class="logo">
                <a href="index.php"><img src="assets/images/logo.svg" alt=""></a>
            </div>
            <div class="close-menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 19L18 6" stroke="white" stroke-width="2" stroke-linecap="square" />
                    <path d="M6 6L19 19" stroke="white" stroke-width="2" stroke-linecap="square" />
                </svg>
            </div>
        </div>

        <div class="mm-mobile">
            <ul>
                <li><a href="index.php">Home</a></li>
                <li>
                    <div class="relaitve children-menu-mb">
                        <a href="service.php">Service</a>
                        <div class="arrow-menu w-7 h-7 flex items-center justify-center">
                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0 0L-1.16578e-07 2.66699L2.66699 2.66699L2.66699 5.33301L5.33398 5.33301L5.33398 8L8 8L8 5.33301L10.667 5.33301L10.667 2.66699L13.334 2.66699L13.334 0L0 0Z"
                                    fill="white" />
                            </svg>
                        </div>
                    </div>
                    <ul class="sub-menu-mb">
                        <li><a href="service_game-1.php">Gamifcation</a></li>
                        <li><a href="service_game-2.php">BFSI Solution</a></li>
                        <li><a href="service_game-3.php">Digital Solution</a></li>
                    </ul>
                </li>
                <li><a href="casestudy.php">Case Study</a></li>
                <li>
                    <div class="relaitve children-menu-mb">
                        <a href="about.php">Company</a>
                        <div class="arrow-menu w-7 h-7 flex items-center justify-center">
                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0 0L-1.16578e-07 2.66699L2.66699 2.66699L2.66699 5.33301L5.33398 5.33301L5.33398 8L8 8L8 5.33301L10.667 5.33301L10.667 2.66699L13.334 2.66699L13.334 0L0 0Z"
                                    fill="white" />
                            </svg>
                        </div>
                    </div>
                    <ul class="sub-menu-mb">
                        <li><a href="about.php">About us</a></li>
                        <li><a href="career.php">Career</a></li>
                        <li><a href="blog.php">Blog</a></li>
                    </ul>
                </li>
                <li><a href="contact.php">Contact</a></li>
            </ul>
        </div>

        <div class="translate-mobile relative text-[20px] font-normal py-6">
            <div class="inline-flex px-6 py-4 items-center gap-2 [#2B2B38] border border-[#FFFFFF26] rounded-[2px]">
                <div class="flag flex items-center">
                    <img src="assets/images/eng.png" alt="">
                </div>
                <span>English</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9V11H15V13H13V15H11V13H9V11H7V9H17Z" fill="white" />
                </svg>
            </div>
        </div>
        <div class="block text-[16px] font-normal anek">
            <div class="opacity-65 uppercase mb-3">CONTACT</div>
            <ul class="mb-3">
                <li>T: (+84) 868 217 954</li>
                <li>(日本): 050 5539 3197</li>
                <li>E: contact@triplayz.com</li>
            </ul>
            <p>3 Le Van Huu Street, Hai Ba Trung Ward, Hanoi, Vietnam</p>
        </div>

    </div>

    <section id="preloader">
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
    </section>
    <div class="lazy-loading" id="loader-icon">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M36.564 36.4292C38.4974 34.5161 41.6228 34.5261 43.5462 36.4493L71.3949 64.3046L71.3849 64.3145C71.6254 64.5549 71.6253 64.9355 71.3849 65.1759L65.1641 71.3961C64.9237 71.6365 64.543 71.6364 64.3026 71.3961L44.9988 52.0947L44.9988 79.3891C44.9988 79.7296 44.7283 80 44.3877 80L35.5923 80C35.2617 80 34.9813 79.7296 34.9813 79.3891L34.9813 52.0947L15.6775 71.3961C15.4371 71.6365 15.0564 71.6364 14.816 71.3961L8.59502 65.1759C8.35464 64.9355 8.35462 64.5549 8.59502 64.3145L36.564 36.4292Z"
                fill="white" />
            <path
                d="M44.3977 -4.28095e-07C44.7383 2.33778e-05 45.0087 0.280441 45.0088 0.610942L45.0088 27.9054L64.3126 8.60402C64.553 8.36363 64.9336 8.36363 65.174 8.60402L71.3949 14.8241C71.6353 15.0645 71.6353 15.4451 71.3949 15.6855L52.0911 34.9869L79.389 34.9869C79.7195 34.9869 80 35.2573 80 35.5978L80 44.3922C80 44.7227 79.7295 45.0032 79.389 45.0032L59.7346 45.0032C57.8713 45.0032 56.0881 44.262 54.7758 42.9499L45.8302 34.0052C42.5745 30.75 37.2953 30.75 34.0496 34.0052L25.0639 42.9598C23.7516 44.272 21.9684 45.0032 20.1152 45.0032L0.611019 45.0032C0.280478 45.0031 2.70922e-05 44.7327 4.28042e-07 44.3922L3.43244e-07 35.5978C3.24989e-05 35.2573 0.280481 34.9869 0.611019 34.9869L27.9089 34.9869L8.60509 15.6855C8.36467 15.4451 8.36467 15.0645 8.60509 14.8241L14.8259 8.60402C15.0664 8.36363 15.447 8.36363 15.6874 8.60402L34.9912 27.9054L34.9912 0.610942C34.9913 0.280427 35.2718 -3.401e-07 35.6024 -3.43288e-07L44.3977 -4.28095e-07Z"
                fill="white" />
        </svg>

        <svg class="ring-svg" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
            <circle cx="48" cy="48" r="60" class="circle-track" />
            <circle cx="48" cy="48" r="60" class="circle-fill" id="ring" />
        </svg>
    </div>