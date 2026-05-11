<?php include 'header.php'; ?>
<main>
    <section class="relative overflow-hidden">
        <div class="block">
            <img src="assets/images/bn-about.jpg" class="w-full object-cover h-screen" alt="">
        </div>
        <div class="absolute top-0 left-0 w-full h-full px-10 lg:px-20 xl:px-36 hidden md:flex items-center pb-[12%]">
            <h1 class="text-[60px] lg:text-[80px] xl:text-[100px] 3xl:text-[124px] font-medium">
                <span class="block">Your Vision</span>
                <span class="block pl-20">Our Innovation</span>
            </h1>
        </div>
        <div class="absolute bottom-0 left-0 w-full px-4 md:px-10 lg:px-16 py-10 z-3">
            <div class="text-[42px] font-medium mb-6 block md:hidden">
                Your Vision <br> Our Innovation
            </div>
            <div class="grid grid-cols-12 gap-6 border-0 md:border-t-[1px] border-[#FFFFFF26] pt-0 md:pt-10">
                <div class="item col-span-12 lg:col-span-10 xl:col-span-7">
                    <div class="block md:flex gap-10 lg:gap-42">
                        <div class="btn-main hidden md:block">
                            <a href="">
                                LETS TALK
                                <div class="dot"></div>
                                <div class="dot"></div>
                                <div class="dot"></div>
                                <div class="dot"></div>
                            </a>
                        </div>
                        <div class="w-full max-w-200 xl:max-w-96 anek">
                            Founded in 2023 by a team with more than a decade of hands-on experience, Triplayz is a
                            global
                            technology company headquartered in Vietnam, delivering Gamification, BFSI Solutions, and
                            Digital Solutions to enterprises across industries worldwide.
                        </div>
                        <div class="btn-main block md:hidden mt-6">
                            <a href="">
                                LETS TALK
                                <div class="dot"></div>
                                <div class="dot"></div>
                                <div class="dot"></div>
                                <div class="dot"></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="item col-span-5 hidden xl:block">
                    <div class="w-full max-w-78 anek ml-auto 3xl:ml-0">
                        We don't just build technology — we turn ambition into measurable outcomes through a thoughtful
                        balance of imagination, precision, and true partnership.
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="relative">
        <div class="block md:hidden bg-[#483BA8] py-10 px-4">
            <div class="w-full max-w-245">
                <div class="anek mb-6">/OUR VISON</div>
                <div class="text-8 lg:text-[64px] 3xl:text-[80px] font-medium">
                    To be a trusted global tech partner that turns vision into reality
                </div>
            </div>
        </div>
        <img src="assets/images/bn-about.png" class="w-full min-h-100 md:min-h-145 lg:min-h-[unset] object-cover"
            alt="">
        <div
            class="absolute top-0 left-0 w-full h-full hidden md:flex flex-col justify-between gap-5 py-10 px-10 lg:px-16">
            <div class="item">
                <div class="w-full max-w-245">
                    <div class="anek mb-6">/OUR VISON</div>
                    <div class="text-8 lg:text-[64px] 3xl:text-[80px] font-medium">
                        To be a trusted global tech partner that turns vision into reality
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="w-full max-w-98 ml-auto anek">
                    Founded in 2023 by a team with more than a decade of hands-on experience, Triplayz is a global
                    technology company headquartered in Vietnam, delivering Gamification, BFSI Solutions, and Digital
                    Solutions to enterprises across industries worldwide.
                </div>
            </div>
        </div>

        <div class="pt-6 pb-10 block md:hidden anek px-4 text-4">
            Founded in 2023 by a team with more than a decade of hands-on experience, Triplayz is a global
            technology company headquartered in Vietnam, delivering Gamification, BFSI Solutions, and Digital
            Solutions to enterprises across industries worldwide.
        </div>
    </section>

    <section id="achieve-section" class="py-10 md:py-25 relative px-4 md:px-10 overflow-hidden">
        <div class="absolute flex items-center justify-center top-0 left-0 w-full h-full">
            <img src="assets/images/archive.png" class="w-full" alt="">
        </div>
        <div class="wrapper relative">
            <div class="text-center text-8 lg:text-[64px] xl:text-[80px] font-medium mb-6 md:mb-10 lg:mb-20">
                We achieve this by
            </div>
            <div
                class="m-auto relative w-full max-w-100 3xl:max-w-135 overflow-hidden min-h-[350px] 3xl:min-h-[500px] hidden md:block">
                <div class="icon absolute top-0 left-0 w-full h-full z-1">
                    <img src="assets/images/squere.png" class="w-full h-full object-contain" alt="">
                </div>
                <?php
                $achieves_data = [
                    [
                        'title' => 'Founded & Strategically <br>Positioned',
                        'desc' => 'Triplayz was founded by a team with deep expertise in Gamification and Fintech. From day one, we positioned ourselves as a new-generation tech partner. Experience-driven thinking and execution quality guide everything we build.'
                    ],
                    [
                        'title' => 'Innovative <br>Solutions',
                        'desc' => 'We integrate the latest methodologies to drive engagement, boost loyalty, and create memorable digital experiences that users love across all touchpoints.'
                    ],
                    [
                        'title' => 'Fintech & BFSI <br>Excellence',
                        'desc' => 'Delivering secure, scalable, and compliant financial solutions that empower businesses to thrive and adapt in the modern digital economy.'
                    ],
                    [
                        'title' => 'Global Reach, <br>Local Impact',
                        'desc' => 'With a global mindset and deep local insights, we tailor our solutions to meet the unique needs of diverse markets and cultures.'
                    ],
                    [
                        'title' => 'Continuous <br>Evolution',
                        'desc' => 'We never stop learning. We constantly explore new technologies and methodologies to ensure our partners stay consistently ahead of the curve.'
                    ]
                ];

                foreach ($achieves_data as $index => $item) { ?>
                    <div
                        class="achieve-content relative md:absolute top-0 left-0 w-full md:h-full z-2 flex items-center justify-center p-6 md:p-18 text-center opacity-100 md:opacity-0 md:invisible mb-6 md:mb-0">
                        <div class="block">
                            <div class="mb-6 text-6 font-medium">
                                <?php echo $item['title']; ?>
                            </div>
                            <div class="anek opacity-85">
                                <?php echo $item['desc']; ?>
                            </div>
                        </div>
                    </div>
                <?php }
                ?>
            </div>

            <div class="block md:hidden text-center">
                <?php
                for ($x = 1; $x <= 5; $x++) { ?>
                    <div class="item relative mb-6 last:mb-0">
                        <img src="assets/images/squere.png" class="w-full h-full object-contain" alt="">
                        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div class="block p-8">
                                <div class="mb-4 font-medium text-5">
                                    Founded & Strategically
                                    Positioned
                                </div>
                                <div class="text-4 opacity-85 anek">
                                    Triplayz was founded by a team with deep expertise in Gamification and Fintech.From day
                                    one, we positioned ourselves as a new-generation tech partner. Experience-driven
                                    thinking and execution quality guide everything we build.
                                </div>
                            </div>
                        </div>
                    </div>
                <?php }
                ?>
            </div>
        </div>
    </section>

    <section class="relative py-10 md:py-25 px-4 md:px-10">
        <div class="wrapper">
            <div
                class="m-auto w-full max-w-244 text-8 lg:text-[60px] 2xl:text-[80px] font-medium text-center md:text-left">
                <div class="block md:flex gap-10">
                    <div class="anek opacity-65 text-5 flex items-center justify-center font-regular mb-6 md:mb-0">/OUR
                        VALUE</div>
                    <div class="text-white">To be a trusted blobal</div>
                </div>
                <p>tech partner that turns</p>
                <p class="opacity-35">vision into reality</p>
            </div>
            <div class="mt-6 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-8">
                <?php
                for ($x = 1; $x <= 4; $x++) { ?>
                    <div class="item p-6 2xl:p-10 relative border border-[#FFFFFF26] rounded-1 bg-[#2B2B38]">
                        <div class="text-5 md:text-8 2xl:text-10 font-medium">Agility</div>
                        <div class="py-4 lg:py-20 text-center">
                            <img src="assets/images/agi.png" alt="">
                        </div>
                        <div class="anek text-right">
                            Fast, flexible, <br>
                            and forward-focused
                        </div>
                    </div>
                <?php }
                ?>
            </div>
        </div>
    </section>

    <section id="journey-section" class="relative py-10 md:py-0 px-4 md:px-0">
        <div class="wrapper relative">
            <div class="text-left md:text-center m-auto absolute top-0 left-0 w-full h-full flex items-center justify-center"
                id="text-journey">
                <div class="block">
                    <div class="mb-4 md:mb-6 anek opacity-65 hero-title">/OUR JOURNEY</div>
                    <div
                        class="text-8 lg:text-[52px] xl:text-[64px] 2xl:text-[80px] font-medium mb-10 md:mb-30 max-w-282 w-full m-auto hero-title">
                        Our journey
                        reflects
                        a growing depth
                        of
                        experience
                    </div>
                </div>
            </div>
            <div class="hidden md:block">
                <!-- <img src="assets/images/rotate.png" alt=""> -->

                <div class="outer relative" id="outer">
                    <div class="absolute left-0 top-0 h-full flex items-center px-10">
                        <span class="relative top-10">09.2023 - 06.2024</span>
                    </div>
                    <div class="scroll-track">
                        <div class="sticky-frame" id="frame"></div>
                    </div>

                    <div class="absolute top-0 right-0 px-10 h-full hidden lg:flex items-center">
                        <div class="max-w-[24vw] xl:max-w-110 w-full anek opacity-85">
                            Triplayz was founded by a team with deep expertise in Gamification and Fintech.From day one,
                            we positioned ourselves as a new-generation tech partner. Experience-driven thinking and
                            execution quality guide everything we build.
                        </div>
                    </div>
                </div>

                <div class="dots !hidden " id="dots"></div>
            </div>

            <div class="md:hidden block">
                <?php
                for ($x = 1; $x <= 4; $x++) {
                    ?>
                    <div
                        class="item mb-6 pb-6 relative border-b-[1px] border-[#FFFFFF26] last:mb-0 last:pb-0 last:border-0">
                        <div class="text-4 mb-3">09.2023 - 06.2024</div>
                        <div class="text-5 font-medium mb-3">
                            Entering the Japan Market
                        </div>
                        <div class="text-4 anek">
                            Triplayz was founded by a team with deep expertise in Gamification and Fintech.From day one, we
                            positioned ourselves as a new-generation tech partner. Experience-driven thinking and execution
                            quality guide everything we build.
                        </div>
                    </div>
                    <?php
                }
                ?>
            </div>
        </div>
    </section>

    <section class="relative py-10 md:py-25 lg:py-36 px-4 md:px-10">
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <img src="assets/images/vuong.jpg" class="w-full h-full object-cover top-0 left-0" alt="">
        </div>
        <div class="wrapper relative z-2 pr-0 3xl:pr-[8%]">
            <div
                class="relative 2xl:absolute font-medium text-8 md:text-[52px] xl:text-[64px] top-0 left-0 mb-6 md:mb-10 lg:mb-20 2xl:mb-0 text-center md:text-left">
                Brings the best <br>technology solution
            </div>
            <div class="block md:flex justify-end gap-6 w-full max-w-230 ml-auto mb-6 last:mb-0">
                <div
                    class="item relative aspect-[normal] md:aspect-square bg-[#2B2B38] p-6 md:p-8 w-full md:w-90 flex flex-col justify-between mb-6 md:mb-0 last:mb-0">
                    <div class="absolute top-0 left-0 w-full">
                        <img src="assets/images/top-bring.png" class="w-full" alt="">
                    </div>
                    <div class="absolute bottom-0 left-0 w-full">
                        <img src="assets/images/bot-bring.png" class="w-full" alt="">
                    </div>
                    <div class="top">
                        <div class="text-5 md:text-6 font-medium mb-2">Luck-based</div>
                        <div class="anek opacity-85">
                            Lucky wheel, Mystery box, Plinko, Lucky number
                        </div>
                    </div>
                    <div class="icon mt-10 md:mt-0">
                        <img src="assets/images/joy.png" class="w-8 md:w-14" alt="">
                    </div>
                </div>
                <div
                    class="item relative aspect-[normal] md:aspect-square bg-[#2B2B38] p-6 md:p-8 w-full md:w-90 flex flex-col justify-between mb-6 md:mb-0 last:mb-0">
                    <div class="absolute top-0 left-0 w-full">
                        <img src="assets/images/top-bring.png" class="w-full" alt="">
                    </div>
                    <div class="absolute bottom-0 left-0 w-full">
                        <img src="assets/images/bot-bring.png" class="w-full" alt="">
                    </div>
                    <div class="top">
                        <div class="text-5 md:text-6 font-medium mb-2">Luck-based</div>
                        <div class="anek opacity-85">
                            Lucky wheel, Mystery box, Plinko, Lucky number
                        </div>
                    </div>
                    <div class="icon mt-10 md:mt-0">
                        <img src="assets/images/joy.png" class="w-8 md:w-14" alt="">
                    </div>
                </div>
            </div>
            <div class="block md:flex gap-6 w-full max-w-230 ml-auto mb-6 last:mb-0">
                <div
                    class="item relative aspect-[normal] md:aspect-square bg-[#2B2B38] p-6 md:p-8 w-full md:w-90 flex flex-col justify-between mb-6 md:mb-0 last:mb-0">
                    <div class="absolute top-0 left-0 w-full">
                        <img src="assets/images/top-bring.png" class="w-full" alt="">
                    </div>
                    <div class="absolute bottom-0 left-0 w-full">
                        <img src="assets/images/bot-bring.png" class="w-full" alt="">
                    </div>
                    <div class="top">
                        <div class="text-5 md:text-6 font-medium mb-2">Luck-based</div>
                        <div class="anek opacity-85">
                            Lucky wheel, Mystery box, Plinko, Lucky number
                        </div>
                    </div>
                    <div class="icon mt-10 md:mt-0">
                        <img src="assets/images/joy.png" class="w-8 md:w-14" alt="">
                    </div>
                </div>
                <div
                    class="item relative aspect-[normal] md:aspect-square bg-[#2B2B38] p-6 md:p-8 w-full md:w-90 flex flex-col justify-between mb-6 md:mb-0 last:mb-0">
                    <div class="absolute top-0 left-0 w-full">
                        <img src="assets/images/top-bring.png" class="w-full" alt="">
                    </div>
                    <div class="absolute bottom-0 left-0 w-full">
                        <img src="assets/images/bot-bring.png" class="w-full" alt="">
                    </div>
                    <div class="top">
                        <div class="text-5 md:text-6 font-medium mb-2">Luck-based</div>
                        <div class="anek opacity-85">
                            Lucky wheel, Mystery box, Plinko, Lucky number
                        </div>
                    </div>
                    <div class="icon mt-10 md:mt-0">
                        <img src="assets/images/joy.png" class="w-8 md:w-14" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="leaders-section"
        class="relative py-10 md:py-20 px-4 md:px-10 h-[auto] md:h-screen overflow-hidden bg-[#1D1D27]">
        <img src="assets/images/bg-mem.png" class="w-full h-full absolute object-cover top-0 left-0" alt="">


        <!-- Left side content -->
        <div class="wrapper relative h-full w-full z-10 flex flex-col justify-between">
            <div class="block md:flex gap-10 xl:gap-25 justify-between">
                <div class="w-full max-w-208 mb-6 md:mb-10">
                    <div
                        class="text-8 md:text-10 xl:text-[56px] 2xl:text-[64px] font-medium leading-tight pr-0 xl:pr-[8%] 2xl:pr-0  text-center md:text-left">
                        The leaders driving worldquant foundry's mission forward
                    </div>
                </div>
                <div class="w-full max-w-122 hidden md:block">
                    <div class="single-text anek opacity-85">
                        <p class="mb-4">Triplayz was founded by a team with deep expertise in Gamification and
                            Fintech.From day one,
                            we positioned ourselves as a new-generation tech partner. </p>
                        <p>Triplayz was founded by a team with deep expertise in Gamification and Fintech.From day one,
                            we positioned ourselves as a new-generation tech partner. </p>
                    </div>
                </div>
            </div>
            <div class="w-full max-w-133 left-0 bottom-0 mt-auto">
                <div class="grid grid-cols-3 md:grid-cols-2 gap-4 md:gap-8 text-center md:text-left">
                    <div class="item border-t-[1px] border-[#FFFFFF26] pt-4">
                        <div
                            class="numb text-10 md:text-[48px] xl:text-[64px] 2xl:text-[80px] font-medium mb-2 md:mb-3">
                            20
                        </div>
                        <div class="anek opacity-85">Professionals</div>
                    </div>
                    <div class="item border-t-[1px] border-[#FFFFFF26] pt-4">
                        <div
                            class="numb text-10 md:text-[48px] xl:text-[64px] 2xl:text-[80px] font-medium mb-2 md:mb-3">
                            2</div>
                        <div class="anek opacity-85">Offices worldwide</div>
                    </div>
                    <div class="item border-t-[1px] border-[#FFFFFF26] pt-4">
                        <div
                            class="numb text-10 md:text-[48px] xl:text-[64px] 2xl:text-[80px] font-medium mb-2 md:mb-3">
                            85%
                        </div>
                        <div class="anek opacity-85">On-time delivery</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right side container for members -->
        <div
            class="members-container relative md:absolute right-0 top-0 w-full md:w-2/3 h-full z-20 block mt-6 md:mt-0">
            <?php
            for ($x = 1; $x <= 5; $x++) { ?>
                <div
                    class="item-member relative w-full max-w-full md:max-w-90 bg-[#2F2F38] border border-[2px] border-[#FFFFFF26] mb-6 md:mb-0 last:mb-0">
                    <div class="block"><img src="assets/images/mem-2.png" alt=""></div>
                    <div class="p-4 md:p-6">
                        <div class="relative w-full pr-13">
                            <div class="text-5 md:text-6 font-medium mb-1 md:mb-0.5">Ngoc Nguyen</div>
                            <div class="anek opacity-85">CEO</div>
                            <div class="absolute top-0 right-0 flex items-center h-full">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="24" fill="white" fill-opacity="0.08" />
                                    <path d="M24 16.5V32.5" stroke="white" stroke-width="2" />
                                    <path d="M32 24.5L16 24.5" stroke="white" stroke-width="2" />
                                </svg>
                            </div>
                        </div>
                        <div class="anek opacity-85 mt-6 pt-6 border-t-[1px] border-[#FFFFFF26] desc hidden">
                            Triplayz was founded by a team with deep expertise in Gamification and Fintech.From day one, we
                            positioned ourselves as a new-generation tech partner. Triplayz was founded by a team with deep
                            expertise in Gamification and Fintech.From day one, we positioned ourselves as a new-generation
                            tech
                            partner. Triplayz was founded by a team with deep expertise in Gamification and Fintech.From day
                            one, we positioned ourselves as a new-generation tech partner.
                        </div>
                    </div>
                </div>
                <div
                    class="item-member relative w-full max-w-full md:max-w-90 bg-[#2F2F38] border border-[2px] border-[#FFFFFF26] mb-6 md:mb-0 last:mb-0">
                    <div class="block"><img src="assets/images/mem-1.png" alt=""></div>
                    <div class="p-4 md:p-6">
                        <div class="relative w-full pr-13">
                            <div class="text-5 md:text-6 font-medium mb-1 md:mb-0.5">Ngoc Nguyen</div>
                            <div class="anek opacity-85">CEO</div>
                            <div class="absolute top-0 right-0 flex items-center h-full">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="24" fill="white" fill-opacity="0.08" />
                                    <path d="M24 16.5V32.5" stroke="white" stroke-width="2" />
                                    <path d="M32 24.5L16 24.5" stroke="white" stroke-width="2" />
                                </svg>
                            </div>
                        </div>
                        <div class="anek opacity-85 mt-6 pt-6 border-t-[1px] border-[#FFFFFF26] desc hidden">
                            Triplayz was founded by a team with deep expertise in Gamification and Fintech.From day one, we
                            positioned ourselves as a new-generation tech partner. Triplayz was founded by a team with deep
                            expertise in Gamification and Fintech.From day one, we positioned ourselves as a new-generation
                            tech
                            partner. Triplayz was founded by a team with deep expertise in Gamification and Fintech.From day
                            one, we positioned ourselves as a new-generation tech partner.
                        </div>
                    </div>
                </div>
            <?php }
            ?>
        </div> <!-- End members-container -->

        <div class="hidden">
            <?php
            for ($x = 1; $x <= 5; $x++) { ?>
                <div class="item-member relative w-full max-w-90 bg-[#2F2F38] border border-[2px] border-[#FFFFFF26]">
                    <div class="block"><img src="assets/images/mem-2.png" alt=""></div>
                    <div class="p-6">
                        <div class="relative w-full pr-13">
                            <div class="text-6 font-medium mb-0.5">Ngoc Nguyen</div>
                            <div class="anek opacity-85">CEO</div>
                            <div class="absolute top-0 right-0 flex items-center h-full">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="24" fill="white" fill-opacity="0.08" />
                                    <path d="M24 16.5V32.5" stroke="white" stroke-width="2" />
                                    <path d="M32 24.5L16 24.5" stroke="white" stroke-width="2" />
                                </svg>
                            </div>
                        </div>
                        <div class="anek opacity-85 mt-6 pt-6 border-t-[1px] border-[#FFFFFF26] desc hidden">
                            Triplayz was founded by a team with deep expertise in Gamification and Fintech.From day one, we
                            positioned ourselves as a new-generation tech partner. Triplayz was founded by a team with deep
                            expertise in Gamification and Fintech.From day one, we positioned ourselves as a new-generation
                            tech
                            partner. Triplayz was founded by a team with deep expertise in Gamification and Fintech.From day
                            one, we positioned ourselves as a new-generation tech partner.
                        </div>
                    </div>
                </div>
                <div class="item-member relative w-full max-w-90 bg-[#2F2F38] border border-[2px] border-[#FFFFFF26]">
                    <div class="block"><img src="assets/images/mem-1.png" alt=""></div>
                    <div class="p-6">
                        <div class="relative w-full pr-13">
                            <div class="text-6 font-medium mb-0.5">Ngoc Nguyen</div>
                            <div class="anek opacity-85">CEO</div>
                            <div class="absolute top-0 right-0 flex items-center h-full">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="24" fill="white" fill-opacity="0.08" />
                                    <path d="M24 16.5V32.5" stroke="white" stroke-width="2" />
                                    <path d="M32 24.5L16 24.5" stroke="white" stroke-width="2" />
                                </svg>
                            </div>
                        </div>
                        <div class="anek opacity-85 mt-6 pt-6 border-t-[1px] border-[#FFFFFF26] desc hidden">
                            Triplayz was founded by a team with deep expertise in Gamification and Fintech.From day one, we
                            positioned ourselves as a new-generation tech partner. Triplayz was founded by a team with deep
                            expertise in Gamification and Fintech.From day one, we positioned ourselves as a new-generation
                            tech
                            partner. Triplayz was founded by a team with deep expertise in Gamification and Fintech.From day
                            one, we positioned ourselves as a new-generation tech partner.
                        </div>
                    </div>
                </div>
            <?php }
            ?>
        </div>

    </section>

    <section class="py-20 lg:py-25 px-10 relative overflow-hidden hidden md:block wrapper form-parallax-sec">
        <img src="assets/images/bn-form.jpg"
            class="bg-form w-full h-full absolute object-cover top-0 left-0 form-parallax-img" alt="">
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
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/SplitText.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js"></script>
<script src="assets/js/animation.js?v=<?php echo time() ?>"></script>

<script>
    document.addEventListener("DOMContentLoaded", () => {
        gsap.registerPlugin(ScrollTrigger);

        let mm = gsap.matchMedia();

        const achieveSection = document.getElementById("achieve-section");
        const contents = gsap.utils.toArray(".achieve-content");

        if (achieveSection && contents.length > 0) {
            mm.add("(min-width: 768px)", () => {
                // Setup initial states
                gsap.set(contents, { autoAlpha: 0, y: 40 });
                gsap.set(contents[0], { autoAlpha: 1, y: 0 });

                // Create a timeline for pinning
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: achieveSection,
                        start: "center center",
                        end: "+=3500", // Stretch scrolling distance for smoother feel
                        pin: true,
                        scrub: 1.5, // Add momentum / smoothing to the scroll linkage
                        anticipatePin: 1
                    }
                });

                // Pause slightly on the first item
                tl.to({}, { duration: 1.5 });

                // Animate through contents
                contents.forEach((content, i) => {
                    if (i === 0) return;

                    // Synchronize fade out and fade in using labels
                    tl.add(`step${i}`);

                    // Fade out previous item
                    tl.to(contents[i - 1], { autoAlpha: 0, y: -40, duration: 1.5, ease: "power2.inOut" }, `step${i}`);

                    // Fade in current item
                    tl.to(content, { autoAlpha: 1, y: 0, duration: 1.5, ease: "power2.inOut" }, `step${i}+=0.5`);

                    // Add a pause to allow users to read
                    tl.to({}, { duration: 1.5 });
                });
            });

            mm.add("(max-width: 767px)", () => {
                // Remove inline styles set by GSAP to ensure pure CSS handles mobile
                gsap.set(contents, { clearProps: "all" });
            });
        }

        // --- Leaders Section Animation ---
        const leadersSection = document.getElementById("leaders-section");

        if (leadersSection) {
            mm.add("(min-width: 768px)", () => {
                // Chỉ lấy các item-member nằm trong members-container của desktop
                const members = gsap.utils.toArray(".members-container .item-member");

                if (members.length > 0) {
                    // Hàm xáo trộn mảng để random vị trí
                    const shuffle = (array) => {
                        let currentIndex = array.length, randomIndex;
                        while (currentIndex !== 0) {
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex--;
                            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
                        }
                        return array;
                    };

                    // Tạo danh sách làn đường được xáo trộn ngẫu nhiên từng cụm 3
                    let randomLanes = [];
                    for (let i = 0; i < members.length; i += 3) {
                        randomLanes = randomLanes.concat(shuffle([0, 1, 2]));
                    }

                    // Set initial positions for members
                    members.forEach((member, i) => {
                        const laneIndex = randomLanes[i];

                        // Mỗi làn chiếm khoảng 30%, cộng thêm tí random
                        const randomLeft = (laneIndex * 32) + (Math.random() * 5);

                        // Strict vertical stagger: each item is placed at least 80% of screen height below the previous
                        // + random(0, 15) to add slight visual irregularity without breaking the gap
                        const startTop = 100 + (i * 80) + (Math.random() * 15);

                        member.style.pointerEvents = "auto";

                        gsap.set(member, {
                            left: `${randomLeft}%`,
                            top: `${startTop}%`,
                            position: "absolute",
                            zIndex: members.length - i // Ensure items that appear later don't inappropriately layer over earlier ones
                        });
                    });

                    // Calculate total travel distance needed for the very last item to clear the top of the screen
                    const lastItemStartTop = 100 + ((members.length - 1) * 80) + 15;
                    const travelDistance = lastItemStartTop + 80; // Additional 80% to ensure it fully exits

                    // Create scroll animation
                    // By moving all items by the EXACT SAME amount (-=travelDistance%), 
                    // their vertical gaps are perfectly preserved and they never collide.
                    gsap.to(members, {
                        top: `-=${travelDistance}%`,
                        ease: "none",
                        scrollTrigger: {
                            trigger: leadersSection,
                            start: "top top",
                            end: `+=${members.length * 700}`, // Adjust scroll length based on number of items
                            pin: true,
                            scrub: 1.5
                        }
                    });
                }
            });

            mm.add("(max-width: 767px)", () => {
                // Clear props on mobile if needed (mostly safe since we only target desktop elements now)
                const members = gsap.utils.toArray(".members-container .item-member");
                if (members.length > 0) gsap.set(members, { clearProps: "all" });
            });
        }
    });
</script>

<script>
    const items = [
        "Entering the Japan Market",
        "Founded & Strategically Positioned",
        "Entering the Japan Market",
        "Entering the Japan Market",
        "Entering the Japan Market",
    ];

    const frame = document.getElementById("frame");
    const section = document.getElementById("journey-section");
    const dotsEl = document.getElementById("dots");
    const outerEl = document.getElementById("outer");
    const textJourney = document.getElementById("text-journey");

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
        const cardWraps = [];
        const dots = [];
        const ANGLE_STEP = 28;

        // Trạng thái ban đầu: ẩn cards, chuẩn bị text
        gsap.set(outerEl, { opacity: 0, visibility: "hidden" });
        gsap.set(textJourney, { opacity: 0, y: 30 });

        // Tạo các item cho Desktop
        items.forEach((title, i) => {
            const wrap = document.createElement("div");
            wrap.className = "card-wrap";
            wrap.style.position = "absolute";
            wrap.style.transformOrigin = "0px 50%";
            wrap.innerHTML = `<div class="card">${title}</div>`;
            frame.appendChild(wrap);
            cardWraps.push(wrap);

            const dot = document.createElement("div");
            dot.className = "dot";
            dotsEl.appendChild(dot);
            dots.push(dot);
        });

        function updateLayout(floatIndex) {
            const roundedIndex = Math.round(floatIndex);
            cardWraps.forEach((card, i) => {
                const diff = i - floatIndex;
                const abs = Math.abs(diff);
                const angle = diff * ANGLE_STEP;

                let opacity = 0;
                if (abs === 0) opacity = 1;
                else if (abs <= 1) opacity = 1 - (abs * 0.35);
                else if (abs <= 2) opacity = 0.65 - (abs - 1) * 0.3;
                else opacity = Math.max(0, 0.35 - (abs - 2) * 0.35);

                card.querySelector(".card").classList.toggle("active", roundedIndex === i);
                dots[i].classList.toggle("on", roundedIndex === i);

                gsap.set(card, {
                    rotation: angle,
                    opacity: opacity,
                    zIndex: items.length - Math.floor(abs),
                });
            });
        }

        updateLayout(0);

        let introPlayed = false;

        // ScrollTrigger chính để ghim section
        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "+=5000",
            pin: true,
            scrub: 0.5,
            onEnter: () => {
                if (!introPlayed) {
                    // Khóa cuộn trang khi đang show text
                    document.body.style.overflow = "hidden";

                    const introTl = gsap.timeline({
                        onComplete: () => { 
                            introPlayed = true; 
                            // Mở lại cuộn trang sau khi xong intro
                            document.body.style.overflow = "";
                        }
                    });
                    introTl.to(textJourney, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" })
                           .to(textJourney, { opacity: 0, y: -20, duration: 0.6, delay: 1.2, ease: "power2.in" })
                           .to(outerEl, { 
                               autoAlpha: 1, 
                               duration: 0.7,
                               onStart: () => { outerEl.style.visibility = "visible"; }
                           });
                }
            },
            onUpdate: (self) => {
                if (introPlayed) {
                    updateLayout(self.progress * (items.length - 1));
                }
            }
        });

        // Cleanup
        return () => {
            frame.innerHTML = "";
            dotsEl.innerHTML = "";
            document.body.style.overflow = ""; // Reset scroll lock
            gsap.set([outerEl, textJourney], { clearProps: "all" });
        };
    });
</script>


<?php include 'footer.php'; ?>
</content>