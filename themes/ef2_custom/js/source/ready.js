jQuery(document).ready(function($) {
  	$('#menu-toggle').on('click touchstart', function(event){
		$('body').toggleClass('main-menu-active');       
        $(this).toggleClass('active');
        $('nav.menu--main > ul > li').removeClass('open');
        event.stopImmediatePropagation();
        event.preventDefault();
    });

    $('body.page-node-type-homepagina #page-wrapper > header #navbar').addClass('header-nav');
    $('body.page-node-type-homepagina #page-wrapper > header #navbar').removeClass('scroll');


    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (currentScrollPos >= 650 && window.innerWidth >= 1025) {
            $('body.page-node-type-homepagina #page-wrapper > header #navbar').addClass('scroll');
            $('body.page-node-type-homepagina #page-wrapper > header #navbar').removeClass('header-nav');
            $('#page-wrapper > header#pri-header #navbar .region-header .block-system-branding-block a.site-logo img').attr('src', '/themes/ef2_custom/logo.png');
        } else {
            $('body.page-node-type-homepagina #page-wrapper > header #navbar').addClass('header-nav');
            $('body.page-node-type-homepagina #page-wrapper > header #navbar').removeClass('scroll');
            $('#page-wrapper > header#pri-header #navbar .region-header .block-system-branding-block a.site-logo img').attr('src', '/themes/ef2_custom/logo-white.png');
        }

        if(currentScrollPos >= 300 && window.innerWidth <= 550) {
            $('#page-wrapper > header#pri-header #navbar .region-header .block-system-branding-block a.site-logo img').attr('src', '/themes/ef2_custom/logo.png');
        }
    };

    if(!$('body').hasClass('page-node-type-homepagina')) {
        $('body #page-wrapper > header #navbar').addClass('scroll');
    }
});