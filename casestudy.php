<?php include 'header.php'; ?>
<div data-barba="wrapper">
    <div data-barba="container" data-barba-namespace="casestudy">
        <main>
            <section class="relative pt-36 lg:pt-62 pb=6 lg:pb-10 px-5 md:px-10 overflow-hidden">
                <img src="assets/images/bn-casestudy.jpg" class="w-full h-full absolute top-0 left-0 object-cover" alt="">
                <div class="block lg:flex items-center justify-between relative z-3">
                    <div
                        class="numb doto font-medium text-white text-[80px] lg:text-[142px] xl:text-[160px] 2xl:text-[200px] 3xl:text-[240px] mb-24 lg:mb-0">
                        <span>/12</span>
                    </div>
                    <div class="item">
                        <div
                            class="title-animation text-[64px] lg:text-[88px] xl:2xl:text-[142px] 3xl:text-[165px] font-medium mb-10 text-left lg:text-right">
                            Case Studies
                        </div>
                        <div
                            class="block overflow-x-auto relative text-4 xl:text-5 px-5 md:px-0 w-[calc(100%+40px)] md:w-full -left-5 md:left-0">
                            <ul class="flex gap-3 lg:gap-5 w-[max-content]">
                                <li>
                                    <a href=""
                                        class="inline-flex items-center text-white py-3 lg:py-5 px-6 border border-[2px] border-[#FFF] hover:border-white">ALL</a>
                                </li>
                                <li>
                                    <a href=""
                                        class="inline-flex items-center text-white py-3 lg:py-5 px-6 border border-[2px] border-[#FFFFFF26] hover:border-white">BFSI
                                        Solutions</a>
                                </li>
                                <li>
                                    <a href=""
                                        class="inline-flex items-center text-white py-3 lg:py-5 px-6 border border-[2px] border-[#FFFFFF26] hover:border-white">Gamification</a>
                                </li>
                                <li>
                                    <a href=""
                                        class="inline-flex items-center text-white py-3 lg:py-5 px-6 border border-[2px] border-[#FFFFFF26] hover:border-white">Digital
                                        Solutions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="relative px-6 md:px-10 py-10 lg:py-25 overflow-hidden">
                <div class="top py-4 flex items-center justify-between text-5">
                    <span>Featured case studies</span>
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="14" width="20" height="2" fill="white" />
                            <rect x="2" y="20" width="20" height="2" fill="white" />
                            <rect x="2" y="16" width="2" height="4" fill="white" />
                            <rect x="20" y="16" width="2" height="4" fill="white" />
                            <rect x="8" y="2" width="8" height="2" fill="white" />
                            <rect x="8" y="4" width="2" height="4" fill="white" />
                            <rect x="14" y="4" width="2" height="4" fill="white" />
                            <rect x="8" y="8" width="8" height="2" fill="white" />
                            <rect x="11" y="10" width="2" height="4" fill="white" />
                            <rect x="7" y="12" width="2" height="2" fill="white" />
                        </svg>
                    </span>
                </div>
                <div class="line mb-4 flex items-center justify-center">
                    <img src="assets/images/line-srv.svg" class="w-full" alt="">
                </div>
                <div id="casestudy-list"
                    class="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-10 md:gap-y-20 lg:gap-y-31">
                    <?php
                    for ($x = 1; $x <= 6; $x++) { ?>
                        <div class="item relative">
                            <div class="block mb-4 lg:mb-10">
                                <a href="case_detail.php"><img src="assets/images/study.jpg"
                                        class="w-full aspect-[900/675] object-cover rounded-2 md:rounded-3" alt=""></a>
                            </div>
                            <div class="block">
                                <div class="relative anek gap-3 flex items-center text-3 lg:text-4 xl:text-5">
                                    <div class="w-3 md:w-4 h-3 md:h-4 bg-[#01E19A] rounded-[1px]"></div>
                                    GAMIFICATIONS
                                </div>
                                <h3 class="py-3 lg:py-4">
                                    <a href="case_detail.php" class="text-5 lg:text-6 2xl:text-8 font-medium">Creating an Engaging
                                        User Experience
                                        with the
                                        New
                                        Lake & Oak Tea Co. Interface on
                                        Shopify</a>
                                </h3>
                                <ul
                                    class="opacity-35 flex items-center gap-4 lg:gap-8 text-4 lg:text-6 font-medium anek cate-casestudy">
                                    <li class="relative flex items-center gap-4 lg:gap-8"><a href="">14.02.2026</a></li>
                                    <li class="relative flex items-center gap-4 lg:gap-8"><a href="">Google</a></li>
                                    <li class="relative flex items-center gap-4 lg:gap-8"><a href="">Finance</a></li>
                                </ul>
                            </div>
                        </div>
                    <?php }
                    ?>
                </div>
            </section>
        </main>
    </div>
</div>

<?php include 'footer.php'; ?>