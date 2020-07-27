jQuery(document).ready(function($) {
  	$('#menu-toggle').on('click touchstart', function(event){
		$('body').toggleClass('main-menu-active');       
        $(this).toggleClass('active');
        $('nav.menu--main > ul > li').removeClass('open');
        event.stopImmediatePropagation();
        event.preventDefault();
    });

    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (currentScrollPos >= 650) {
            $('body.page-node-type-homepagina #page-wrapper > header #navbar').addClass('scroll');
            $('body.page-node-type-homepagina #page-wrapper > header #navbar').removeClass('header-nav');
        } else {
            $('body.page-node-type-homepagina #page-wrapper > header #navbar').addClass('header-nav');
            $('body.page-node-type-homepagina #page-wrapper > header #navbar').removeClass('scroll');
        }
    };

    if(!$('body').hasClass('page-node-type-homepagina')) {
        $('body #page-wrapper > header #navbar').addClass('scroll');
    }
});