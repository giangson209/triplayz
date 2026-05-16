<?php include 'header.php'; ?>
<div data-barba="wrapper">
    <div data-barba="container" data-barba-namespace="service">
        <main>
            <section class="relative overflow-hidden">
                <img src="assets/images/bn-service.jpg" class="w-full h-screen object-cover" alt="">
                <div class="absolute bottom-0 left-0 w-full p-4 md:p-10 lg:p-18 3xl:p-20">
                    <div class="wrapper">
                        <div class="block xl:flex gap-40 xl:gap-72 3xl:gap-92 justify-end">
                            <div class="title-animation item anek font-medium pt-0 xl:pt-14 mb-8 xl:mb-0">[ SERVICES ]
                            </div>
                            <div class="item">
                                <h1
                                    class="title-animation text-10 xl:text-[64px] 2xl:text-[80px] 3xl:text-[100px] font-semibold">
                                    One Partner <br>
                                    Three Strengths <br>
                                    Endless Possibilities
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="service"
                class="py-10 md:py-20 lg:py-25 3xl:py-50 px-6 md:px-10 relative overflow-hidden relative">
                <div class="wrapper relative">
                    <div class="absolute top-0 right-0 pointer-events-none">
                        <img class="srv-bg" src="assets/images/asci.png" alt="">
                    </div>
                    <div class="block lg:flex mb-6 md:mb-20 gap-50 relative z-2">
                        <div class="item anek font-medium opacity-65 pt-0 lg:pt-10 mb-6 lg:mb-0">/SERVICES</div>
                        <div class="wraper max-w-280 title-br">
                            <h2
                                class="title-animation text-8 md:text-[48px] lg:text-[64px] 2xl:text-[80px] 3xl:text-[100px] font-medium leading-[1.25]">
                                What our purpose-built
                                solutions can do for <span class="text-[#56565D]">your growth strategy</span>
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
                                    We combine technical precision with strategic thinking — so every solution we
                                    deliver moves
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
                                    <div class="avarta"><img src="assets/images/srv-<?php echo $x; ?>.svg" alt=""></div>
                                    <div class="mt-4">
                                        <div class="text-6 font-medium mb-5 text-white">
                                            <?php echo $x; ?>.
                                            <?php echo ['Gamification', 'BFSI Solution', 'Digital Solution'][$x - 1]; ?>
                                        </div>
                                        <div class="desc mb-5 opacity-85 anek">
                                            We combine technical precision with strategic thinking — so every solution we
                                            deliver
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

            <section class="py-10 lg:py-25 px-4 md:px-10 bg-[#483BA8] relative text-white overflow-hidden">
                <div class="wrapper">
                    <div class="block lg:flex items-end justify-between mb-20 lg:mb-25 2xl:mb-36">
                        <div class="item">
                            <div
                                class="text-10 lg:text-[64px] 2xl:text-[80px] 3xl:text-[124px] font-medium title-animation">
                                Technologies <br> & Tools
                            </div>
                        </div>
                        <div class="w-full max-w-117 anek title-animation mt-4 lg:mt-0">
                            <span>We don't just use cutting edge tools; we back them with 10+ years of experience in the
                                market
                                to deliver faster and more accurate solutions </span>
                        </div>
                    </div>

                    <div
                        class="grid grid-cols-1 md:grid-cols-2 gap-x-20 md:gap-x-10 lg:gap-x-25 2xl:gap-x-50 gap-y-20 lg:gap-y-35">
                        <?php
                        for ($j = 1; $j <= 5; $j++) { ?>
                            <div class="item">
                                <div class="top font-medium mb-5 lg:mb-6">
                                    <div class="mb-4 flex items-center justify-between">
                                        <span class="title-animation">Front-end languages & frameworks</span>
                                        <div class="icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect x="5" y="3" width="14" height="2" fill="white" />
                                                <rect x="5" y="19" width="14" height="2" fill="white" />
                                                <rect x="3" y="5" width="2" height="14" fill="white" />
                                                <rect x="19" y="5" width="2" height="14" fill="white" />
                                                <rect x="9" y="7" width="6" height="2" fill="white" />
                                                <rect x="9" y="15" width="6" height="2" fill="white" />
                                                <rect x="7" y="9" width="2" height="6" fill="white" />
                                                <rect x="15" y="9" width="2" height="6" fill="white" />
                                                <rect x="11" y="1" width="2" height="2" fill="white" />
                                                <rect x="11" y="21" width="2" height="2" fill="white" />
                                                <rect x="1" y="11" width="2" height="2" fill="white" />
                                                <rect x="21" y="11" width="2" height="2" fill="white" />
                                                <rect x="21" y="7" width="2" height="2" fill="white" />
                                                <rect x="21" y="15" width="2" height="2" fill="white" />
                                                <rect x="1" y="15" width="2" height="2" fill="white" />
                                                <rect x="1" y="7" width="2" height="2" fill="white" />
                                                <rect x="7" y="1" width="2" height="2" fill="white" />
                                                <rect x="15" y="1" width="2" height="2" fill="white" />
                                                <rect x="15" y="21" width="2" height="2" fill="white" />
                                                <rect x="7" y="21" width="2" height="2" fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="line"><img src="assets/images/line-cpu.svg" class="w-full" alt=""></div>
                                </div>
                                <div class="flex flex-wrap gap-4">
                                    <div class="item">
                                        <img src="assets/images/sv-2.png" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="assets/images/sv-3.png" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="assets/images/sv-2.png" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="assets/images/sv-3.png" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="assets/images/sv-2.png" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="assets/images/sv-3.png" alt="">
                                    </div>
                                </div>
                                <div class="list relative text-5 lg:text-6 font-medium hidden">
                                    <?php
                                    for ($x = 1; $x <= 3; $x++) { ?>
                                        <div
                                            class="item item-tools relative overflow-hidden flex items-center justify-between px-0 lg:px-6 py-3 md:py-4 lg:py-6 border-b-[2px] border-[#594CBC]">
                                            <a href="" class="absolute top-0 left-0 w-full h-full z-3"></a>
                                            <span>Kafka</span>
                                            <div class="logo opacity-100 md:opacity-0">
                                                <img src="assets/images/kafa.png" alt="">
                                            </div>

                                            <svg class="d-studio-award-block--filler absolute top-0 left-0 w-full h-full -z-10"
                                                viewBox="0 0 500 100" preserveAspectRatio="none" style="opacity: 0;">
                                                <path fill="#8B86F7" class="d-award-path"
                                                    d="M 0 100 V 100 Q 250 100 500 100 V 100 z">
                                                </path>
                                            </svg>
                                        </div>
                                    <?php }
                                    ?>
                                </div>
                            </div>
                        <?php }
                        ?>
                    </div>
            </section>

            <section class="px-4 md:px-10 relative">
                <div class="block lg:grid grid-cols-2 gap-20">
                    <div class="item">
                        <div class="sticky top-0 h-[auto] lg:h-[100vh] py-10 lg:py-25 flex flex-col justify-between">
                            <div class="top mb-0 lg:mb-16 2xl:mb-25">
                                <div class="block 2xl:flex items-center gap-10">
                                    <span class="anek opacity-65 title-animation">/DELIVERY PROCESS</span>
                                    <div class="text-10 lg:text-[64px] 2xl:text-[80px] font-medium title-animation">We
                                        validate
                                    </div>
                                </div>
                                <div
                                    class="text-10 lg:text-[64px] 2xl:text-[80px] font-medium opacity-35 title-animation">
                                    concepts &
                                    attract
                                </div>
                            </div>

                            <div class="avarta hidden lg:block">
                                <img src="assets/images/detail-1.png"
                                    class="max-h-60 2xl:max-h-85 transition-opacity duration-300" alt=""
                                    id="process-img">
                            </div>
                        </div>
                    </div>
                    <div class="item pt-0 lg:pt-[100vh] pb-10 lg:pb-[45vh]">
                        <?php
                        // Mảng dữ liệu mẫu (sau này bạn thay bằng dữ liệu từ database)
                        $process_steps = [
                            [
                                'image' => 'assets/images/detail-1.png',
                                'title' => 'Briefing',
                                'desc' => '<p>Receive and analyze project requirements and objectives</p><p>Clarify the brief and identify potential risks</p><p>Conduct internal meetings to align the approach and solution direction</p>'
                            ],
                            [
                                'image' => 'assets/images/detail-2.png', // Sửa tên ảnh thực tế tại đây
                                'title' => 'Planning',
                                'desc' => '<p>Receive and analyze project requirements and objectives</p><p>Clarify the brief and identify potential risks</p><p>Conduct internal meetings to align the approach and solution direction</p>'
                            ],
                            [
                                'image' => 'assets/images/detail-1.png',
                                'title' => 'Execution',
                                'desc' => '<p>Receive and analyze project requirements and objectives</p><p>Clarify the brief and identify potential risks</p><p>Conduct internal meetings to align the approach and solution direction</p>'
                            ],
                            [
                                'image' => 'assets/images/detail-2.png',
                                'title' => 'Testing',
                                'desc' => '<p>Receive and analyze project requirements and objectives</p><p>Clarify the brief and identify potential risks</p><p>Conduct internal meetings to align the approach and solution direction</p>'
                            ],
                            [
                                'image' => 'assets/images/detail-1.png',
                                'title' => 'Delivery',
                                'desc' => '<p>Receive and analyze project requirements and objectives</p><p>Clarify the brief and identify potential risks</p><p>Conduct internal meetings to align the approach and solution direction</p>'
                            ],
                        ];

                        foreach ($process_steps as $index => $step) {
                            $x = $index + 1;
                            ?>
                            <div class="item-step relative pb-16 2xl:pb-25 last:pb-0 flex step-block"
                                data-img="<?php echo $step['image']; ?>">
                                <div
                                    class="line w-0.5 h-full bg-[#2F2F38] absolute top-0 left-4.5 lg:left-9 overflow-hidden">
                                    <div class="line-fill w-full bg-[#8B86F7]" style="height: 0%;"></div>
                                </div>
                                <div class="w-full max-w-10 lg:max-w-18 relative font-bold text-5 lg:text-8">
                                    <span
                                        class="doto step-num transition-all duration-300 inline-flex items-center justify-center border-1 border-[#FFFFFF26] h-10 lg:h-18 w-full rounded-1 lg:rounded-3 bg-[#1D1D27]">0<?php echo $x; ?></span>
                                </div>
                                <div class="w-full pl-6 lg:pl-16 pt-0 lg:pt-4">
                                    <div class="text-6 lg:text-8 2xl:text-10 font-medium mb-6 2xl:mb-8">
                                        <?php echo $step['title']; ?>
                                    </div>
                                    <div class="desc anek opacity-55">
                                        <?php echo $step['desc']; ?>
                                    </div>
                                </div>
                            </div>
                        <?php }
                        ?>
                    </div>
                </div>
            </section>
        </main>
    </div>
</div>

<?php include 'footer.php'; ?>