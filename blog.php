<?php include 'header.php'; ?>
<div data-barba="wrapper">
    <div data-barba="container" data-barba-namespace="blog">
        <main>
            <section
                class="relative flex justify-end flex-col bg-cover bg-center bg-no-repeat h-[432px] md:h-[450px] 2xl:h-[650px] px-2.5 py-6 md:p-5 2xl:p-10">
                <div class="no-logo-canvas lg:block"></div>
                <div class="wrapper relative z-3">
                    <div class="flex gap-[16px] lg:gap-[40px] flex-col lg:flex-row lg:items-center">
                        <h1 class="title-animation text-[56px] md:text-[100px] 2xl:text-[124px] font-medium leading-[1.25]">
                            Our Story
                        </h1>
                        <div class="text-animation anek text-[16px] min-[1200px]:text-[20px] max-w-[219px] leading-[1.25]">
                            Grow your career as we grow. Join the team that's changing IT services
                        </div>
                    </div>
                </div>
            </section>

            <!-- Featured Section -->
            <section class="px-4 pt-10 pb-[1px] md:p-10 bg-white text-black">
                <div class="wrapper">
                    <div class="flex items-center justify-between pb-4">
                        <div class="text-4 md:text-5 font-[400] anek text-[#1D1D27]">Featured case studies</div>
                        <div class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="14" width="20" height="2" fill="#1D1D27" />
                                <rect x="2" y="20" width="20" height="2" fill="#1D1D27" />
                                <rect x="2" y="16" width="2" height="4" fill="#1D1D27" />
                                <rect x="20" y="16" width="2" height="4" fill="#1D1D27" />
                                <rect x="8" y="2" width="8" height="2" fill="#1D1D27" />
                                <rect x="8" y="4" width="2" height="4" fill="#1D1D27" />
                                <rect x="14" y="4" width="2" height="4" fill="#1D1D27" />
                                <rect x="8" y="8" width="8" height="2" fill="#1D1D27" />
                                <rect x="11" y="10" width="2" height="4" fill="#1D1D27" />
                                <rect x="7" y="12" width="2" height="2" fill="#1D1D27" />
                            </svg>
                        </div>
                    </div>
                    <div class="border-[2px] border-[#D0CCBE] border-b-0 h-[16px] mb-4"></div>

                    <div class="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                        <!-- Large Featured Post -->
                        <div class="lg:col-span-6">
                            <div class="group ">
                                <a href="blog_detail.php" class="block overflow-hidden rounded-[12px] mb-6">
                                    <img src="assets/images/study.jpg"
                                        class="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                                        alt="Featured Post">
                                </a>
                                <div class="anek text-4 mb-4 text-[#1D1D27] opacity-[0.65] font-medium">
                                    <span class="pr-6">NEWS</span> 14.02.2026
                                </div>
                                <h2 class="text-4 md:text-5 2xl:text-6 font-medium">
                                    Creating an Engaging User Experience with the New Lake & Oak Tea Co. Interface on Shopify
                                </h2>
                            </div>
                        </div>

                        <!-- Smaller Featured Posts -->
                        <div class="lg:col-span-6 flex flex-col gap-6 lg:gap-10">
                            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                                <?php for ($i = 0; $i < 2; $i++) { ?>
                                    <div class="lg:col-span-6">
                                        <div class="group">
                                            <a href="blog_detail.php" class="block overflow-hidden rounded-[12px] mb-6">
                                                <img src="assets/images/study.jpg"
                                                    class="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                                                    alt="Small Post">
                                            </a>
                                            <div class="anek text-4 mb-4 text-[#1D1D27] opacity-[0.65] font-medium">
                                                <span class="pr-6">NEWS</span> 14.02.2026
                                            </div>
                                            <h2 class="text-4 md:text-5 2xl:text-6 font-medium">
                                                Creating an Engaging User Experience with the New Lake & Oak Tea Co. Interface on
                                                Shopify
                                            </h2>
                                        </div>
                                    </div>
                                <?php } ?>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <!-- Blog Grid -->
            <section class="px-4 pt-0 pb-10 md:py-20 md:px-10 bg-white text-black">
                <div class="wrapper">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-10 gap-y-8 md:gap-y-16">
                        <?php for ($i = 0; $i < 3; $i++) { ?>
                            <div class="group">
                                <a href="blog_detail.php" class="block overflow-hidden rounded-[12px] mb-4 md:mb-6">
                                    <img src="assets/images/study.jpg"
                                        class="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                                        alt="Blog Grid Post">
                                </a>
                                <div class="anek text-4 mb-2 md:mb-4 text-[#1D1D27] opacity-[0.65] font-medium">
                                    <span class="pr-6">NEWS</span> 14.02.2026
                                </div>
                                <h2 class="text-4 md:text-5 2xl:text-6 font-medium">
                                    Creating an Engaging User Experience with the New Lake & Oak Tea Co. Interface on
                                    Shopify
                                </h2>
                            </div>
                        <?php } ?>
                    </div>
                </div>
            </section>

            <!-- Consultation Section (Reused from index.php) -->
            <section class="py-20 lg:py-25 px-10 relative overflow-hidden hidden md:block wrapper form-parallax-sec text-white">
                <img src="assets/images/bn-form.jpg" class="w-full h-full absolute object-cover top-0 left-0 form-parallax-img"
                    alt="" style="transform: scale(1.1);">
                <div class="grid grid-cols-12 gap-10 relative z-2">
                    <div class="item item col-span-12 lg:col-span-6 2xl:col-span-7 h-full flex items-center">
                        <div class="title-animation text-[48px] lg:text-[64px] 3xl:text-[80px] font-medium">Get a free
                            consultation</div>
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
    </div>
</div>
<?php include 'footer.php'; ?>