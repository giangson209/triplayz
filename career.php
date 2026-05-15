<?php include 'header.php'; ?>
<div data-barba="wrapper">
    <div data-barba="container" data-barba-namespace="blog">
        <main>
            <!-- Hero Section -->
            <section
                class="relative flex justify-end flex-col bg-cover bg-center bg-no-repeat h-[432px] md:h-[450px] 2xl:h-[650px] px-2.5 py-6 md:p-5 2xl:p-10">
                <div class="no-logo-canvas lg:block"></div>
                <div class="wrapper relative z-3">
                    <div
                        class="flex flex-col-reverse gap-[16px] justify-end lg:gap-[40px] flex-col lg:flex-row lg:items-center">
                        <div class="text-animation anek text-[16px] min-[1200px]:text-[20px] max-w-[219px] leading-[1.25]">
                            Grow your career as we grow. Join the team that's changing IT services
                        </div>
                        <h1 class="title-animation text-[56px] md:text-[80px] 2xl:text-[100px] 3xl:text-[124px] font-medium leading-[1.25]">
                            Start Your Journey
                        </h1>
                    </div>
                </div>
            </section>

            <!-- Main Image -->
            <section class="relative px-0 md:px-10 pb-0 md:pb-6 bg-[#1D1D27] avarta-paralax">
                <div class="wrapper overflow-hidden">
                    <img src="assets/images/carr.png" class="w-full parallax-img" alt="Team" style="transform: scale(1.15);">
                </div>
            </section>

            <!-- Intro Section -->
            <section class="py-6 md:py-10 md:py-5 px-4 md:px-10 bg-[#1D1D27] text-white">
                <div class="wrapper">
                    <div class="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-20">
                        <div class="w-full">
                            <h2 class="title-animation text-5 md:text-12 2xl:text-16 3xl:text-20 font-medium leading-tight max-w-[833px]">
                                More Than a Workplace. <br>A Place to Grow.
                            </h2>
                        </div>
                        <div class="flex items-center max-w-full lg:max-w-[500px]">
                            <p class="text-animation anek text-4 md:text-5 leading-relaxed  opacity-85">
                                At Triplayz, we believe the best products are built by people who are empowered to think boldly,
                                collaborate openly, and take pride in their craft. We're a global team united by a shared
                                passion for innovation — and a commitment to growing together, every step of the way.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Job Opportunities Section -->
            <section class="py-10 md:py-24 px-4 md:px-10 bg-[#1D1D27] text-white">
                <div class="wrapper">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
                        <div class="lg:col-span-4">
                            <h2 class="title-animation text-6 md:text-8 font-medium mb-4">People First</h2>
                            <p class="text-animation anek text-[14px] md:text-4 opacity-70">
                                We put our people first. We build a place where exciting work is done by everyone.
                            </p>
                        </div>

                        <div class="lg:col-span-8">
                            <div class="flex items-center justify-between  pb-4">
                                <div class="text-4 md:text-5 font-medium anek text-[#FFFFFF]">CURRENT OPPORTUNITIES</div>
                                <div class="icon ">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
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

                                </div>
                            </div>
                            <div class="border-[2px] border-[#2F2F38] border-b-0 h-[16px] mb-4"></div>
                            <div class="space-y-4 accordion-container">
                                <?php for ($i = 0; $i < 5; $i++) { ?>
                                    <div
                                        class="accordion-item bg-[#FFFFFF0A] border-b-[#FFFFFF14] overflow-hidden transition-colors duration-300">
                                        <div
                                            class="accordion-header group flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-[#FFFFFF14] transition-colors duration-300">
                                            <h3 class="text-4 md:text-5 2xl:text-6 font-medium">Business Development Executive (B2B
                                                Sales
                                                Specialist)</h3>
                                            <div
                                                class="relative flex-shrink-0 ml-4 md:ml-6 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center bg-[transparent] md:bg-[#FFFFFF0A] transition-transform duration-300 border-0 md:border border-[#FFFFFF14]">
                                                <!-- 4 corner dots -->
                                                <div
                                                    class="hidden md:block absolute -top-[1px] -left-[1px] w-[4px] h-[4px] bg-white">
                                                </div>
                                                <div
                                                    class="hidden md:block absolute -top-[1px] -right-[1px] w-[4px] h-[4px] bg-white">
                                                </div>
                                                <div
                                                    class="hidden md:block absolute -bottom-[1px] -left-[1px] w-[4px] h-[4px] bg-white">
                                                </div>
                                                <div
                                                    class="hidden md:block absolute -bottom-[1px] -right-[1px] w-[4px] h-[4px] bg-white">
                                                </div>

                                                <div class="relative w-6 h-6">
                                                    <svg class="icon-plus absolute top-0 left-0 transition-all duration-300 transform group-[.is-open]:rotate-90 group-[.is-open]:opacity-0"
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 5V19M5 12H19" stroke="white" stroke-width="2"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <svg class="icon-minus absolute top-0 left-0 transition-all duration-300 transform -rotate-90 opacity-0 group-[.is-open]:rotate-0 group-[.is-open]:opacity-100"
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-content px-4 md:px-6 pb-6 md:px-8 md:pb-8" style="display: none;">
                                            <div class="anek opacity-85 space-y-6 border-t border-[#FFFFFF14] pt-6">
                                                <div>
                                                    <div class="font-medium text-white mb-2">Job Description</div>
                                                    <div class="mb-2">Market Research & Lead Generation:</div>
                                                    <ul class="list-disc pl-5 space-y-1 opacity-80">
                                                        <li>Conduct market research to identify trends, opportunities, and potential
                                                            areas within the technology industry.</li>
                                                        <li>Identify and approach new markets or potential customers for the
                                                            company's technology solutions.</li>
                                                        <li>Utilize various channels and methods to create opportunities and expand
                                                            the business customer base.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <div class="mb-2">Customer Consultation & Sales:</div>
                                                    <ul class="list-disc pl-5 space-y-1 opacity-80">
                                                        <li>Provide expert advice to customers, offering solutions that align with
                                                            their specific requirements and challenges.</li>
                                                        <li>Present and demonstrate the value of the company's products and services
                                                            to potential clients.</li>
                                                        <li>Develop and maintain a sales pipeline to ensure a steady stream of
                                                            potential customers and deals.</li>
                                                        <li>Negotiate and finalize sales contracts, ensuring favorable terms that
                                                            are beneficial for both parties.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <div class="mb-2">Candidate Requirements:</div>
                                                    <ul class="list-disc pl-5 space-y-1 opacity-80">
                                                        <li>Bachelor's degree in Economics, Business Administration, or related
                                                            fields.</li>
                                                        <li>Interest or experience in Business Development, Sales (B2B), or related
                                                            roles.</li>
                                                        <li>Excellent communication and interpersonal skills, with the ability to
                                                            build relationships and influence stakeholders at all levels.</li>
                                                        <li>Ability to adapt or experience working in a technology company
                                                            environment is a plus.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <div class="mb-2">Location: Hanoi</div>
                                                    <div class="opacity-80">Working hour: Monday – Friday (from 09:00 to 18:30)
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="mb-2">Salary range: 7.000.000 VND – 12.000.000 VND</div>
                                                    <div class="mb-2">Benefits:</div>
                                                    <ul class="list-disc pl-5 space-y-1 opacity-80">
                                                        <li>Comprehensive health benefit package.</li>
                                                        <li>Opportunities for promotion and career development.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <div class="mb-2">Application contact:</div>
                                                    <ul class="list-disc pl-5 space-y-1 opacity-80">
                                                        <li>Please send your application letter and CV to hangdtt@triplayz.com</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <?php } ?>
                            </div>

                            <script>
                                window.addEventListener('load', function () {
                                    if (typeof jQuery !== 'undefined') {
                                        $('.accordion-header').on('click', function () {
                                            const $this = $(this);
                                            const $content = $this.next('.accordion-content');

                                            // Toggle open state for styling
                                            $this.toggleClass('is-open');

                                            // Hiệu ứng slide toggle mượt mà
                                            $content.slideToggle(300);
                                        });
                                    }
                                });
                            </script>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Consultation Section (Reused from index.php) -->
            <section class="py-20 lg:py-25 px-10 relative overflow-hidden hidden md:block wrapper form-parallax-sec text-white">
                <img src="assets/images/bn-form.jpg" class="w-full h-full absolute object-cover top-0 left-0 form-parallax-img"
                    alt="" style="transform: scale(1.1);">
                <div class="grid grid-cols-12 gap-10 relative z-2">
                    <div class="item item col-span-12 lg:col-span-6 2xl:col-span-7 h-full flex items-center">
                        <div class="title-animation text-[48px] lg:text-[64px] 3xl:text-[80px] font-medium">Get a free <br>
                            consultation</div>
                    </div>
                    <div class="item col-span-12 lg:col-span-6 2xl:col-span-5">
                        <div class="bg-white w-full p-10 text-black">
                            <div class="text-10 font-medium mb-8">Talk to our team</div>
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
                                    <div class="relative w-[max-content]">
                                        <input type="submit" value="SUBMIT NOW"
                                            class="h-12 min-w-42 bg-[#1D1D2714] anek font-medium uppercase text-center">
                                        <span class="!bg-[#1D1D27] w-1 h-1 absolute top-0 left-0"></span>
                                        <span class="!bg-[#1D1D27] w-1 h-1 absolute top-0 right-0"></span>
                                        <span class="!bg-[#1D1D27] w-1 h-1 absolute bottom-0 left-0"></span>
                                        <span class="!bg-[#1D1D27] w-1 h-1 absolute bottom-0 right-0"></span>
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