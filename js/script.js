function projectPage() {
    $('section').fadeOut(500);
    $('#project-page').delay(400).css('display', 'flex').hide().fadeIn(500);
}

function homePage() {
    $('section').fadeOut(500);
    $('#home-page').delay(400).fadeIn(500);
}

function skillsPage() {
    $('section').fadeOut(500);
    $('#skills-page').delay(400).css('display', 'flex').hide().fadeIn(500);
}

function contactPage() {
    $('section').fadeOut(500);
    $('#contact-page').delay(400).css('display', 'flex').hide().fadeIn(500);
}

$(document).ready(function() {

    let portfolioItems = [
        PlaylistMix = {
            title: "PlaylistMix",
            description: "React web application which utilizes the Spotify API to generate bespoke playlists based on user specified criteria to aid the discovery of new music.",
            images: ["assets/PlaylistMix-Portfolio-1.png", "assets/PlaylistMix-Portfolio-2.png"],
            tags: ['React', 'Javascript', 'Tailwind'],
            url: ''
        },
        Shoefit = {
            title: "ShoeFit Fitting Assistant",
            description: "Built a custom WordPress plugin / application using jQuery and vanilla JavaScript which takes foot measurements and calculates the users correct shoe size. I worked alongside DCS Digital who built the back-end and created designs while I built the front-end solo. Conditional logic allowed users to specify foot shape and medical conditionss which were then used to filter website products to only suitable footwear.",
            images: ["assets/ShoeFitFinal1.png", "assets/ShoeFitFinal2.png", "assets/ShoeFitFinal3.png", "assets/ShoeFitFinal3half.png", "assets/ShoeFitFinal4.png"],
            tags: ['Javascript', 'jQuery', 'WordPress'],
            url: 'https://shoefit.uk/'
        },
        AirToWoo = {
            title: "AirToWoo Web App",
            description: "SaaS Web application built primarily with JavaScript which connects AirTable with WooCommerce via API. This tool allows users to manage their WooCommerce products via an AirTable spreadsheet, and instantly save changes. I was tasked with writing all of the JavaScript which would send and receive webbooks, transform data, intelligently manage images and taxonomies, and much more.",
            images: ["assets/AirToWoo-Portfolio-1.png", "assets/AirToWoo-Portfolio-2.png"],
            tags: ['JavaScript', 'WordPress', 'AirTable', 'SaaS'],
            url: 'https://www.dcsdigital.co.uk/airtowoo/'
        },
        Tokenomy = {
            title: "Tokenomy",
            description: "Built dynamic, multi-language blog site from a design sent by the client. Elementor and custom code were used in tandem to rapidly deploy a highly custom,  custom loop templates, multi-lingual, user permissions, etc.",
            images: ["assets/Tokenomy-laptop-port.png", "assets/TokenomyFinal2.png", "assets/TokenomyFinal3.png"],
            tags: ['WordPress', 'Elementor'],
            url: 'blog.tokenomy.com/'
        },
        DCS_Digital_Site = {
            title: "DCS Creative Site",
            description: "Worked from a design by DCS Digital. I built their 'creative' style portfolio featuring animations, transitions, hover effects, text effects, and much more. I used the Tailwind CSS framework on this project alongside AnimeJS to rapidly create a responsive, interactive website with fluid animations and transitions",
            images: ["assets/DCS-Portfolio-1.png", "assets/DCS-Portfolio-2.png", "assets/DCS-Portfolio-3.png"],
            tags: ['JavaScript', 'Tailwind CSS', 'AnimeJS'],
            url: ''
        },
        Emergency_Vet_247 = {
            title: "Emergency Vet 24/7",
            description: "Worked alongside client to create Veterinary practice location finder with custom filtering, map display, etc. The site was built with WordPress and AJAX based plugins",
            images: ["assets/Emergency-Vet-laptop-port.png", "assets/EmergencyVetFinal1.png"],
            tags: ['WordPress', 'JavaScript', 'Elementor'],
            url: 'https://emergencyvet247.com/'
        }
    ]

    let currentProjectNum = 0
    let maxProjectNum = portfolioItems.length - 1
    let currentImageIndex = 0
    let currentProject = portfolioItems[currentProjectNum];
    resetItem()

    function resetItem() {
        currentProject = portfolioItems[currentProjectNum];
        currentImageIndex = 0
        $('#project-page .project-title').text(currentProject.title);
        $('#project-page .project-title').attr("href", currentProject.url ? currentProject.url : null);
        $('#project-page .project-description').text(currentProject.description);
        $('#project-page .project-img').attr("src", currentProject.images[currentImageIndex]);
        $('.tags-container').html('')
        for (let item of portfolioItems[currentProjectNum].tags) {
            $('.tags-container').append('<span class="bg-black text-white lg:text-sm text-2xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 mt-6" style="width:fit-content">' + item + '</span>')
        }
        totalProjectImages = currentProject.images.length
    }

    $('.next-proj').click(function() {
        if (currentProjectNum < maxProjectNum) {
            currentProjectNum++
            resetItem();
        } else {
            currentProjectNum = 0
            resetItem()
        }
    })
    $('.prev-proj').click(function() {
        if (currentProjectNum > 0) {
            currentProjectNum--
            resetItem();
        } else {
            currentProjectNum = maxProjectNum
            resetItem()
        }
    })

    $('#prevPortfolioImg').click(function() {
        console.log(currentImageIndex)
        if (currentImageIndex > 0) {
            currentImageIndex--
            $('#project-page .project-img').attr("src", currentProject.images[currentImageIndex]);
        } else {
            currentImageIndex = totalProjectImages - 1
            $('#project-page .project-img').attr("src", currentProject.images[currentImageIndex]);
        }
    })

    $('#nextPortfolioImg').click(function() {
        if (currentImageIndex < totalProjectImages - 1) {
            currentImageIndex++
            $('#project-page .project-img').attr("src", currentProject.images[currentImageIndex]);
        } else {
            currentImageIndex = 0
            $('#project-page .project-img').attr("src", currentProject.images[currentImageIndex]);
        }
    })

    let menuClose = anime({
        targets: '#menu-btn',
        rotate: [405, 0],
        duration: 800,
        easing: 'spring',
        loop: false,
        autoplay: false,
    });

    let menuOpen = anime({
        targets: '#menu-btn',
        rotate: [0, 405],
        duration: 800,
        easing: 'spring',
        loop: false,
        autoplay: false,
    });

    let menuBtn = document.getElementById('menu-btn');
    document.getElementById('menu-btn').addEventListener('click', () => {
        if (menuBtn.classList.contains('menu-open')) {
            menuClose.play();
            $('#mobile-menu').fadeOut(500);
            menuBtn.classList.remove('menu-open');
            $('.wasOpen').delay(400).fadeIn(500);
            $('section:visible').removeClass('wasOpen');
        } else {
            menuOpen.play();
            $('section:visible').addClass('wasOpen');
            $('section').fadeOut(500);
            $('#mobile-menu').delay(400).fadeIn(500);
            menuBtn.classList.add('menu-open')
        }
    })

    $('#mobile-menu a').click(() => {
        $('section').removeClass('wasOpen');
        menuClose.play();
        menuBtn.classList.remove('menu-open');
    })

    for (let item of portfolioItems) {
        if (item.images) {
            for (let image of item.images) {
                $('body').append('<img class="lazy-loading-images hidden" src="' + image + '" />')
            }
        }
    }

});