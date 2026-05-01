<?php include 'header.php'; ?>
<main>
    <section class="relative overflow-hidden">
        <div class="gradient-canvas"></div>
        
        <div class="wrapper p-6 md:p-10 min-h-[unset] md:min-h-[100vh] relative">
            <div
                class="relative md:absolute top-[-13%] lg:top-0 left-[16%] md:left-[10%] lg:left-0 flex items-center z-2 w-full justify-center xl:justify-start scale-[1.8] md:scale-[1]">
            </div>
            <div
                class="relative md:absolute z-3 bottom-0 right-0 px-0 md:px-10 max-w-full xl:max-w-[60%] text-center md:text-left">
                <div class="mb-12 3xl:mb-20">
                    <div
                        class="text-10 md:text-[48px] lg:text-[64px] 2xl:text-[80px] 3xl:text-[100px] font-medium mb-8 3xl:mb-10">
                        a global end-to-end
                        tech partner</div>
                    <div class="btn-main">
                        <a href="">
                            TALK WITH US
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </a>
                    </div>
                </div>
                <div
                    class="py-6 2xl:py-8 3xl:py-10 border-t border-[#FFFFFF26] block md:flex items-center justify-between gap-6 md:gap-16 2xl:gap-8 3xl:gap-10 text-center md:text-left">
                    <div class="item anek max-w-121 w-full text-center md:text-left mb-6 md:mb-0">
                        Gamification, BFSI solutions, and digital solutions under one roof, helping enterprises across
                        industries engage customers and grow sustainably
                    </div>
                    <div class="item px-6 md:px-0">
                        <img src="assets/images/clutch.png" class="max-w-69 2xl:max-w-[auto] w-full" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section
        class="vision-shape-section relative h-[unset] lg:h-[100vh] flex items-center justify-center text-center py-20 lg:py-0 wrapper overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <img src="assets/images/union.png" class="inline" alt="">
        </div>
        <div
            class="block lg:flex items-center justify-center text-10 2xl:text-[64px] 3xl:text-[72px] font-medium gap-10 xl:gap-30 2xl:gap-8 relative z-2">
            <div class="txt vision-text">where vision</div>
            <div class="text-center py-10 lg:py-0 shapes-container">
                <div class="icon take-1 -mb-8 last:mb-0">
                    <img src="assets/images/take-1.svg" class="max-h-[18vh] 2xl:max-h-[26vh] 3xl:max-h-[40vh]" alt="">
                </div>
                <div class="icon take-2 -mb-8 last:mb-0">
                    <img src="assets/images/take-2.svg" class="max-h-[18vh] 2xl:max-h-[26vh] 3xl:max-h-[40vh]" alt="">
                </div>
            </div>
            <div class="txt shape-text">take shape</div>
        </div>
    </section>

    <section id="service" class="py-10 md:py-20 lg:py-25 3xl:py-50 px-6 md:px-10 relative">
        <div class="wrapper relative">
            <img class="srv-bg" src="./assets/images/asci.png" alt="">
            <div class="block lg:flex mb-6 md:mb-20 gap-50 relative z-2">
                <div class="item anek font-medium opacity-65 pt-0 lg:pt-10 mb-6 lg:mb-0">/SERVICES</div>
                <div class="wraper max-w-300">
                    <h2
                        class="text-8 md:text-[48px] lg:text-[64px] 2xl:text-[80px] 3xl:text-[100px] font-medium leading-[1.25]">
                        What our purpose-built
                        <br class="hidden xl:block">solutions can do for <br class="hidden xl:block"><span
                            class="text-[#56565D]">your growth strategy</span>
                    </h2>

                    <div
                        class="mt-6 md:mt-10 lg:mt-14 3xl:mt-36 flex items-end gap-x-10 xl:gap-x-82 justify-between 3xl:justify-[unset] flex-wrap md:flex-[unset]">
                        <div class="btn-main order-2 md:order-1">
                            <a href="">
                                DOWNLOAD BROCHURE
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                            </a>
                        </div>
                        <div
                            class="max-w-full md:max-w-1/2 xl:max-w-103 w-full anek opacity-85 order-1 md:order-2 mb-6 md:mb-0">
                            We combine technical precision with strategic thinking — so every solution we deliver moves
                            your business meaningfully forward.
                        </div>
                    </div>
                </div>
            </div>

            <div class="srv-anim relative block">
                <div class="line w-full mb-6 md:mb-0">
                    <img src="assets/images/line-srv.svg" class="w-full" alt="">
                </div>

                <!-- Desktop: scroll-pin animation -->
                <div id="srv-scroll-trigger" class="hidden md:block">
                    <div id="srv-pinned-section">

                        <div id="srv-image-stage">
                            <img id="srv-img-from" class="srv-slide-img" src="" alt="" />
                            <img id="srv-img-to"   class="srv-slide-img" src="" alt="" />

                            <div id="srv-wipe-line"></div> 

                            <div class="srv-corner" id="srv-c-tl">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M22 1H1V22" stroke="#2a3d60" stroke-width="1.5"/></svg>
                            </div>
                            <div class="srv-corner" id="srv-c-tr">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M0 1H21V22" stroke="#2a3d60" stroke-width="1.5"/></svg>
                            </div>
                            <div class="srv-corner" id="srv-c-bl">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M22 21H1V0" stroke="#2a3d60" stroke-width="1.5"/></svg>
                            </div>
                            <div class="srv-corner" id="srv-c-br">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M0 21H21V0" stroke="#2a3d60" stroke-width="1.5"/></svg>
                            </div>
                        </div>

                        <div id="srv-title-bullet"></div>

                        <div id="srv-title-list">
                            <ul>
                                <li class="srv-title-item active" id="srv-title-0">Gamification</li>
                                <li class="srv-title-item" id="srv-title-1">BFSI Solution</li>
                                <li class="srv-title-item" id="srv-title-2">Digital Solution</li>
                            </ul>
                        </div>

                        <div id="srv-counter">
                            <div class="srv-counter-row">
                                <div class="srv-slot-digit srv-slot-static">0</div>
                                <div id="srv-slot-window">
                                    <div id="srv-slot-track">
                                        <div class="srv-slot-digit">1</div>
                                        <div class="srv-slot-digit">2</div>
                                        <div class="srv-slot-digit">3</div>
                                    </div>
                                </div>
                            </div>
                            <div id="srv-counter-total">/03</div>
                        </div>

                        <div id="srv-tags">
                            <span class="srv-tag">Web &amp; App Development</span>
                            <span class="srv-tag">UI/UX &amp; Creative Design</span>
                            <span class="srv-tag">Business Platform &amp; System Integration</span>
                            <span class="srv-tag">MVP-as-a-Service</span>
                            <span class="srv-tag">Data Visualization &amp; Analytics</span>
                        </div>

                        <div id="srv-description">
                            <p id="srv-desc-text">
                                Gamified engagement and interactive media solutions that drive
                                deeper user interaction and lasting engagement.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Mobile: giữ nguyên -->
                <div class="grid md:hidden grid-cols-1 gap-6">
                    <?php for ($x = 1; $x <= 3; $x++) { ?>
                    <div class="item relative border-b border-[#FFFFFF26] pb-8">
                        <div class="avarta"><img src="assets/images/srv-<?php echo $x; ?>.png" alt=""></div>
                        <div class="mt-4">
                            <div class="text-6 font-medium mb-5 text-white"><?php echo $x; ?>.<?php echo ['Gamification','BFSI Solution','Digital Solution'][$x-1]; ?></div>
                            <div class="desc mb-5 opacity-85 anek">
                                We combine technical precision with strategic thinking — so every solution we deliver
                                moves your business meaningfully forward.
                            </div>
                            <ul class="desc-item-servce grid grid-cols-2 gap-x-5 gap-y-1 pl-4 list-disc anek">
                                <li>UI/UX &amp; Creative</li>
                                <li>UI/UX &amp; Creative</li>
                                <li>Design</li>
                                <li>Design</li>
                                <li>Web &amp; App</li>
                                <li>Web &amp; App</li>
                                <li>Development</li>
                                <li>Development</li>
                                <li>Business Platform &amp; System Integration</li>
                                <li>Business Platform &amp; System Integration</li>
                            </ul>
                        </div>
                    </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </section>

    <section class="relative overflow-hidden">
        <div class="wrapper relative overflow-hidden py-10">
            <div
                class="text-[56px] md:text-[100px] lg:text-[124px] 2xl:text-[164px] 3xl:text-[200px] font-medium mb-4 px-6 md:px-10">
                WHY US?</div>
            <div class="pl-0 3xl:pl-[22%] block lg:flex items-end justify-between anek">
                <div class="item mb-4 lg:mb-0 last:mb-0 max-w-[60%] md:max-w-full lg:max-w-75 w-full opacity-85">
                    Experience you can measure. Outcomes you can rely on.
                </div>
                <div class="item mb-4 lg:mb-0 last:mb-0 max-w-[60%] md:max-w-full lg:max-w-75 w-full opacity-85">
                    Experience you can measure. Outcomes you can rely on.
                </div>
                <div class="item mb-4 lg:mb-0 last:mb-0">
                    <div class="btn-main">
                        <a href="">
                            ABOUT US
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="py-20 relative overflow-hidden hidden md:block content-whuyus">
                <div class="absolute top-0 right-0 w-full h-full pointer-events-none">
                    <img src="assets/images/union-why.png" alt="">
                </div>
                <div class="relative">
                    <div class="w-[45%] 3xl:w-1/2 ml-[-25%] flex items-center relative z-4">
                        <img src="assets/images/circle-blue.png" class="whyus-wheel" alt="">
                        <div class="absolute top-0 left-0 w-full h-full flex items-center z-2 pointer-events-none">
                            <img src="assets/images/circle-gray.png" alt="">
                        </div>
                        <div
                            class="absolute top-0 right-[-100px] 3xl:right-[-160px] flex items-center justity-center h-full">
                            <img src="assets/images/arrow-right.svg" alt="">
                        </div>
                    </div>
                    <div class="absolute top-0 left-0 w-full h-full flex items-center pl-[36%] 3xl:pl-[40%]">
                        <div class="relative w-full h-full whyus-slides-container overflow-hidden">
                            <?php for ($x = 1; $x <= 4; $x++) { 
                                $numbers = ['50+', '100+', '200+', '300+'];
                                $texts = ['SUCCESSFULLY DELIVERED PROJECTS', 'SATISFIED CLIENTS WORLDWIDE', 'TECH EXPERTS & ENGINEERS', 'YEARS OF INDUSTRY EXP'];
                            ?>
                                <div class="whyus-slide absolute top-0 left-0 w-full h-full flex items-center gap-6 lg:gap-10 xl:gap-20 3xl:gap-32 <?php echo $x === 1 ? '' : 'opacity-0 translate-y-10'; ?>">
                                    <div class="avarta w-full max-w-36 lg:max-w-60 xl:max-w-85 3xl:max-w-105">
                                        <img src="assets/images/why.png" class="max-w-105" alt="">
                                    </div>
                                    <div class="desc">
                                        <div class="font-medium text-[48px] xl:text-[80px] 2xl:text-[112px] 3xl:text-[142px]">
                                            <?php echo $numbers[$x-1]; ?>
                                        </div>
                                        <div class="anek text-5 xl:text-6"><?php echo $texts[$x-1]; ?></div>
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pt-10 block md:hidden">
                <div class="grid grid-cols-1 gap-6">
                    <?php
                    for ($x = 1; $x <= 4; $x++) { ?>
                        <div class="item flex items-center">
                            <div class="avarta w-full max-w-36 flex-[0_0_144px]"><img src="assets/images/why.png"
                                    class="w-full" alt=""></div>
                            <div class="desc pl-6">
                                <div class="font-medium text-[48px]">50+</div>
                                <div class="anek opacity-85">SUCCESSFULLY DELIVERED PROJECTS</div>
                            </div>
                        </div>
                    <?php }
                    ?>
                </div>
            </div>
        </div>
    </section>

    <section id="company" class="relative overflow-hidden bg-[#483BA8] pt-10 md:pt-20 lg:pt-25 3xl:pt-50">
        <div class="wrapper relative overflow-hidden">
            <img src="assets/images/top-company.png" class="w-full absolute top-0 left-0" alt="">
            <div class="px-6 md:px-10 text-center relative mb-16 md:mb-28 3xl:mb-31">
                <div class="text-8 md:text-[48px] lg:text-[64px] 2xl:text-[80px] font-medium mb-6 md:mb-10">
                    Companies we're proud to <br class="hidden md:block">have worked with
                </div>
                <div class="btn-main">
                    <a href="">
                        BUTTON
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </a>
                </div>
            </div>
            <div class="block relative mb-16 md:mb-31">
                <div class="mb-6 md:mb-10 last:mb-0 relative overflow-hidden">
                    <div class="swiper-container swiper-model-1">
                        <div class="swiper-wrapper">
                            <?php for ($x = 1; $x <= 15; $x++) { ?>
                                <div class="swiper-slide">
                                    <div
                                        class="item flex items-center py-4 md:py-7.5 px-8 md:px-20 bg-[#FFFFFF0D] rounded-[2px] overflow-hidden">
                                        <img src="assets/images/partner.png" alt="">
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>
                <div class="mb-6 md:mb-10 last:mb-0 relative overflow-hidden">
                    <div class="swiper-container swiper-model-2">
                        <div class="swiper-wrapper">
                            <?php for ($x = 1; $x <= 15; $x++) { ?>
                                <div class="swiper-slide">
                                    <div
                                        class="item flex items-center py-4 md:py-7.5 px-8 md:px-20 bg-[#FFFFFF0D] rounded-[2px] overflow-hidden">
                                        <img src="assets/images/partner.png" alt="">
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="company-globe-container">
            <div id="company-globe" class="company-globe">
                <canvas id="company-globe-canvas"></canvas>
                <div id="company-globe-labels"></div>
                <div id="company-globe-msg">
                    <div id="company-globe-msg-text">Creating...</div>
                    <div id="company-globe-prog-bar"><div id="company-globe-prog"></div></div>
                </div>
            </div>
        </div>
    </section>

    <section class="relative py-10 md:py-20 3xl:py-25 px-6 md:px-10 bg-white">
        <div class="wrapper relative">
            <div class="grid grid-cols-5 2xl:grid-cols-3 gap-0 md:gap-10">
                <div
                    class="item col-span-5 md:col-span-2 2xl:col-span-1 h-[auto] md:h-[80vh] block md:sticky top-25 pb-6 md:pb-0 mb-6 md:mb-0 border-b md:border-0 border-[#00000026]">
                    <div class="block md:flex flex-col justify-between h-full text-[#1D1D27]">
                        <div class="text-8 md:text-[48px] lg:text-[64px] 2xl:text-[80px] font-medium">Highlight <br>
                            case study</div>
                        <div class="block md:hidden py-6 anek">
                            We combine technical precision with strategic thinking — so every solution we deliver moves
                            your business meaningfully forward.
                        </div>
                        <div class="numb text-10 2xl:text-[64px] font-medium hidden md:flex items-center">
                            <span
                                class="inline-flex overflow-hidden relative justify-center items-center aspect-square h-full">
                                <span class="current-case-numb absolute w-full text-center">01</span>
                            </span>
                            <span class="opacity-25">/08</span>
                        </div>
                        <div class="btn-main">
                            <a href="" style="border: 1px solid #1D1D2714; background: #1D1D2714;">
                                MORE PROJECTS
                                <span class="dot !bg-[#1D1D27]"></span>
                                <span class="dot !bg-[#1D1D27]"></span>
                                <span class="dot !bg-[#1D1D27]"></span>
                                <span class="dot !bg-[#1D1D27]"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="item col-span-5 md:col-span-3 2xl:col-span-2 pl-0 md:pl-10">
                    <?php
                    for ($x = 1; $x <= 8; $x++) { ?>
                        <div class="item item-casestudy mb-6 md:mb-10 3xl:mb-20 last:mb-0">
                            <div class="relative avarta overflow-hidden">
                                <img src="assets/images/study.jpg" class="w-full" alt="">
                                <div class="hidden md:block absolute desc-absolute top-0 right-0 p-6 w-[55%] bg-[#00000080] border border-[#FFFFFF47]"
                                    style="backdrop-filter: blur(74px)">
                                    <div class="text-5 anek mb-6">CUSTOMER FEEDBACK</div>
                                    <div class="text-4 2xl:text-6 font-medium mb-40">
                                        “Gamified engagement and interactive media solutions that drive deeper user
                                        interaction and lasting engagement.”
                                    </div>
                                    <div class="logo"><img src="assets/images/gg.png" alt=""></div>
                                </div>
                            </div>
                            <div class="mt-4 md:mt-8">
                                <div
                                    class="mb-2 lg:mb-4 flex items-center text-[14px] md:text-4 lg:text-5 font-medium anek gap-3 text-black">
                                    <span
                                        class="bg-[#7060E5] inline-flex items-center w-3 lg:w-4 h-3 lg:h-4 rounded-[2px]"></span>
                                    GAMIFICATIONS
                                </div>
                                <h3>
                                    <a href=""
                                        class="block text-4 md:text-6 lg:text-8 3xl:text-10 font-medium text-[#1D1D27]">Celebrate
                                        SkyJoy’s 2nd Anniversary </a>
                                </h3>
                            </div>
                        </div>
                    <?php }
                    ?>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20 lg:py-25 px-10 relative overflow-hidden hidden md:block wrapper">
        <img src="assets/images/bn-form.jpg" class="w-full h-full absolute object-cover top-0 left-0" alt="">
        <div class="grid grid-cols-12 gap-10 relative z-2">
            <div class="item item col-span-12 lg:col-span-6 2xl:col-span-7 h-full flex items-center">
                <div class="text-[48px] lg:text-[64px] 3xl:text-[80px] font-medium">Get a free consultation</div>
            </div>
            <div class="item col-span-12 lg:col-span-6 2xl:col-span-5">
                <div class="bg-white w-full p-10 text-black">
                    <div class="text-10 font-medium mb-8">Get a free consultation</div>
                    <div class="grid grid-cols-2 gap-4 3xl:gap-6 anek">
                        <div class="item">
                            <input type="text"
                                class="w-full h-13.5 3xl:h-18 px-5 border border-[#1D1D2726] rounded-1 outline-none"
                                placeholder="Firstname">
                        </div>
                        <div class="item">
                            <input type="text"
                                class="w-full h-13.5 3xl:h-18 px-5 border border-[#1D1D2726] rounded-1 outline-none"
                                placeholder="Lastname">
                        </div>
                        <div class="item">
                            <input type="text"
                                class="w-full h-13.5 3xl:h-18 px-5 border border-[#1D1D2726] rounded-1 outline-none"
                                placeholder="Company">
                        </div>
                        <div class="item">
                            <input type="text"
                                class="w-full h-13.5 3xl:h-18 px-5 border border-[#1D1D2726] rounded-1 outline-none"
                                placeholder="Company email">
                        </div>
                        <div class="item">
                            <input type="text"
                                class="w-full h-13.5 3xl:h-18 px-5 border border-[#1D1D2726] rounded-1 outline-none"
                                placeholder="Phone">
                        </div>
                        <div class="item">
                            <select
                                class="w-full h-13.5 3xl:h-18 px-5 border border-[#1D1D2726] rounded-1 outline-none">
                                <option value="">Service/Fields</option>
                                <option value="">Service/Fields</option>
                                <option value="">Service/Fields</option>
                                <option value="">Service/Fields</option>
                                <option value="">Service/Fields</option>
                            </select>
                        </div>
                        <div class="item col-span-2">
                            <textarea
                                class="w-full h-28 3xl:h-36 px-5 py-4 border border-[#1D1D2726] rounded-1 outline-none"
                                placeholder="To better assist you, please describe how we can help...."></textarea>
                        </div>
                        <div class="item">
                            <div class="btn-main">
                                <a href="" style="border: 1px solid #1D1D2714; background: #1D1D2714;">
                                    SUBMIT NOW
                                    <span class="dot !bg-[#1D1D27]"></span>
                                    <span class="dot !bg-[#1D1D27]"></span>
                                    <span class="dot !bg-[#1D1D27]"></span>
                                    <span class="dot !bg-[#1D1D27]"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/SplitText.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.9.0/d3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js"></script>
<script src="assets/js/animation.js"></script>

<?php include 'footer.php'; ?>