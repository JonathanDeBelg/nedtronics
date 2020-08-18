menutoggler = function(){
	this.init();
	
	this.init = function() {

	}
}
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnV0b2dnbGVyLmpzIiwicmVhZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtZW51dG9nZ2xlciA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuaW5pdCgpO1xuXHRcblx0dGhpcy5pbml0ID0gZnVuY3Rpb24oKSB7XG5cblx0fVxufSIsImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xuICBcdCQoJyNtZW51LXRvZ2dsZScpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZXZlbnQpe1xuXHRcdCQoJ2JvZHknKS50b2dnbGVDbGFzcygnbWFpbi1tZW51LWFjdGl2ZScpOyAgICAgICBcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoJ25hdi5tZW51LS1tYWluID4gdWwgPiBsaScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keS5wYWdlLW5vZGUtdHlwZS1ob21lcGFnaW5hICNwYWdlLXdyYXBwZXIgPiBoZWFkZXIgI25hdmJhcicpLmFkZENsYXNzKCdoZWFkZXItbmF2Jyk7XG4gICAgJCgnYm9keS5wYWdlLW5vZGUtdHlwZS1ob21lcGFnaW5hICNwYWdlLXdyYXBwZXIgPiBoZWFkZXIgI25hdmJhcicpLnJlbW92ZUNsYXNzKCdzY3JvbGwnKTtcblxuXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjdXJyZW50U2Nyb2xsUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICBpZiAoY3VycmVudFNjcm9sbFBvcyA+PSA2NTAgJiYgd2luZG93LmlubmVyV2lkdGggPj0gMTAyNSkge1xuICAgICAgICAgICAgJCgnYm9keS5wYWdlLW5vZGUtdHlwZS1ob21lcGFnaW5hICNwYWdlLXdyYXBwZXIgPiBoZWFkZXIgI25hdmJhcicpLmFkZENsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgICAgICQoJ2JvZHkucGFnZS1ub2RlLXR5cGUtaG9tZXBhZ2luYSAjcGFnZS13cmFwcGVyID4gaGVhZGVyICNuYXZiYXInKS5yZW1vdmVDbGFzcygnaGVhZGVyLW5hdicpO1xuICAgICAgICAgICAgJCgnI3BhZ2Utd3JhcHBlciA+IGhlYWRlciNwcmktaGVhZGVyICNuYXZiYXIgLnJlZ2lvbi1oZWFkZXIgLmJsb2NrLXN5c3RlbS1icmFuZGluZy1ibG9jayBhLnNpdGUtbG9nbyBpbWcnKS5hdHRyKCdzcmMnLCAnL3RoZW1lcy9lZjJfY3VzdG9tL2xvZ28ucG5nJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCdib2R5LnBhZ2Utbm9kZS10eXBlLWhvbWVwYWdpbmEgI3BhZ2Utd3JhcHBlciA+IGhlYWRlciAjbmF2YmFyJykuYWRkQ2xhc3MoJ2hlYWRlci1uYXYnKTtcbiAgICAgICAgICAgICQoJ2JvZHkucGFnZS1ub2RlLXR5cGUtaG9tZXBhZ2luYSAjcGFnZS13cmFwcGVyID4gaGVhZGVyICNuYXZiYXInKS5yZW1vdmVDbGFzcygnc2Nyb2xsJyk7XG4gICAgICAgICAgICAkKCcjcGFnZS13cmFwcGVyID4gaGVhZGVyI3ByaS1oZWFkZXIgI25hdmJhciAucmVnaW9uLWhlYWRlciAuYmxvY2stc3lzdGVtLWJyYW5kaW5nLWJsb2NrIGEuc2l0ZS1sb2dvIGltZycpLmF0dHIoJ3NyYycsICcvdGhlbWVzL2VmMl9jdXN0b20vbG9nby13aGl0ZS5wbmcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGN1cnJlbnRTY3JvbGxQb3MgPj0gMzAwICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDU1MCkge1xuICAgICAgICAgICAgJCgnI3BhZ2Utd3JhcHBlciA+IGhlYWRlciNwcmktaGVhZGVyICNuYXZiYXIgLnJlZ2lvbi1oZWFkZXIgLmJsb2NrLXN5c3RlbS1icmFuZGluZy1ibG9jayBhLnNpdGUtbG9nbyBpbWcnKS5hdHRyKCdzcmMnLCAnL3RoZW1lcy9lZjJfY3VzdG9tL2xvZ28ucG5nJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYoISQoJ2JvZHknKS5oYXNDbGFzcygncGFnZS1ub2RlLXR5cGUtaG9tZXBhZ2luYScpKSB7XG4gICAgICAgICQoJ2JvZHkgI3BhZ2Utd3JhcHBlciA+IGhlYWRlciAjbmF2YmFyJykuYWRkQ2xhc3MoJ3Njcm9sbCcpO1xuICAgIH1cbn0pOyJdfQ==
