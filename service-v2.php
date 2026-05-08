<?php include 'header.php'; ?>
<main>
    <section class="relative overflow-hidden">
        <img src="assets/images/bn-service.jpg" class="w-full h-screen object-cover" alt="">
        <div class="absolute bottom-0 left-0 w-full p-20">
            <div class="wrapper">
                <div class="flex gap-92 justify-end">
                    <div class="item anek font-medium pt-14">[ SERVICES ]</div>
                    <div class="item">
                        <h1 class="text-[100px] font-semibold">
                            One Partner <br>
                            Three Strengths <br>
                            Endless Possibilities
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="service" class="py-10 md:py-20 lg:py-25 3xl:py-50 px-6 md:px-10 relative overflow-hidden relative">
        <div class="wrapper relative">
            <div class="absolute top-0 right-0 pointer-events-none">
                <img class="srv-bg" src="assets/images/asci.png" alt="">
            </div>
            <div class="block lg:flex mb-6 md:mb-20 gap-50 relative z-2">
                <div class="item anek font-medium opacity-65 pt-0 lg:pt-10 mb-6 lg:mb-0">/SERVICES</div>
                <div class="wraper max-w-300">
                    <h2
                        class="title-animation text-8 md:text-[48px] lg:text-[64px] 2xl:text-[80px] 3xl:text-[100px] font-medium leading-[1.25]">
                        What our purpose-built
                        <br class="hidden xl:block">solutions can do for <br class="hidden xl:block"><span
                            class="text-[#56565D]">your growth strategy</span>
                    </h2>

                    <div
                        class="mt-6 md:mt-10 lg:mt-14 3xl:mt-36 flex items-end gap-x-10 xl:gap-x-82 justify-between flex-wrap 3xl:justify-[unset] md:flex-[unset]">
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
                            class="text-animation max-w-full md:max-w-1/2 xl:max-w-103 w-full anek opacity-85 order-1 md:order-2 mb-6 md:mb-0">
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
                            <img id="srv-img-to" class="srv-slide-img" src="" alt="" />

                            <div id="srv-wipe-line"></div>

                            <div class="srv-corner" id="srv-c-tl">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M22 1H1V22" stroke="#ffffff" stroke-width="1.5" />
                                </svg>
                            </div>
                            <div class="srv-corner" id="srv-c-tr">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M0 1H21V22" stroke="#ffffff" stroke-width="1.5" />
                                </svg>
                            </div>
                            <div class="srv-corner" id="srv-c-bl">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M22 21H1V0" stroke="#ffffff" stroke-width="1.5" />
                                </svg>
                            </div>
                            <div class="srv-corner" id="srv-c-br">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M0 21H21V0" stroke="#ffffff" stroke-width="1.5" />
                                </svg>
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

                <div class="grid md:hidden grid-cols-1 gap-6">
                    <?php for ($x = 1; $x <= 3; $x++) { ?>
                        <div class="item relative border-b border-[#FFFFFF26] pb-8">
                            <div class="avarta"><img src="assets/images/srv-<?php echo $x; ?>.png" alt=""></div>
                            <div class="mt-4">
                                <div class="text-6 font-medium mb-5 text-white">
                                    <?php echo $x; ?>.
                                    <?php echo ['Gamification', 'BFSI Solution', 'Digital Solution'][$x - 1]; ?>
                                </div>
                                <div class="desc mb-5 opacity-85 anek">
                                    We combine technical precision with strategic thinking — so every solution we deliver
                                    moves your business meaningfully forward.
                                </div>
                                <ul class="desc-item-servce grid grid-cols-2 gap-x-5 gap-y-1 pl-4 list-disc anek">
                                    <li>UI/UX &amp; Creative Design</li>
                                    <li>Web &amp; App Development</li>
                                    <li>Business Platform &amp; System Integration</li>
                                </ul>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </section>

    <section class="py-25 px-10 bg-[#483BA8] relative text-white">
        <div class="wrapper">
            <div class="flex items-end justify-between mb-36">
                <div class="item">
                    <div class="text-[124px] font-medium">
                        Technologies <br> & Tools
                    </div>
                </div>
                <div class="w-full max-w-117 anek">
                    <span>We don't just use cutting edge tools; we back them with 10+ years of experience in the
                        market
                        to deliver faster and more accurate solutions </span>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-50">
                <div class="item">
                    <div class="top anek mb-6">
                        <div class="mb-4 flex items-center justify-between">
                            <span>Front-end languages & frameworks</span>
                            <div class="icon">
                                <img src="assets/images/cpu.svg" alt="">
                            </div>
                        </div>
                        <div class="line"><img src="assets/images/line-cpu.svg" class="w-full" alt=""></div>
                    </div>
                    <div class="list relative text-6 font-medium">
                        <?php
                        for ($x = 1; $x <= 6; $x++) { ?>
                            <div
                                class="item item-tools relative overflow-hidden flex items-center justify-between px-6 py-6 border-b-[2px] border-[#594CBC]">
                                <a href="" class="absolute top-0 left-0 w-full h-full z-3"></a>
                                <span>Kafka</span>
                                <div class="logo opacity-0">
                                    <img src="assets/images/kafa.png" alt="">
                                </div>

                                <svg class="d-studio-award-block--filler absolute top-0 left-0 w-full h-full z-4"
                                    viewBox="0 0 500 100" preserveAspectRatio="none" style="
                                    opacity: 0;
                                ">
                                    <path fill="#dca66d" class="d-award-path" d="M 0 100 V 100 Q 250 100 500 100 V 100 z">
                                    </path>
                                </svg>
                            </div>
                        <?php }
                        ?>
                    </div>
                </div>
                <div class="item"></div>
            </div>
        </div>
    </section>
</main>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/SplitText.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js"></script>
<!-- <script src="assets/js/animation.js"></script> -->

<?php include 'footer.php'; ?>