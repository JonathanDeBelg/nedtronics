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
    if (window.innerWidth > 550) {
        $('#page-wrapper > header#pri-header #navbar .region-header .block-system-branding-block a.site-logo img').attr('src', '/themes/ef2_custom/logo-white.png');
    }
    
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnV0b2dnbGVyLmpzIiwicmVhZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibWVudXRvZ2dsZXIgPSBmdW5jdGlvbigpe1xuXHR0aGlzLmluaXQoKTtcblx0XG5cdHRoaXMuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG5cdH1cbn0iLCJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpIHtcbiAgXHQkKCcjbWVudS10b2dnbGUnKS5vbignY2xpY2sgdG91Y2hzdGFydCcsIGZ1bmN0aW9uKGV2ZW50KXtcblx0XHQkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ21haW4tbWVudS1hY3RpdmUnKTsgICAgICAgXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKCduYXYubWVudS0tbWFpbiA+IHVsID4gbGknKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHkucGFnZS1ub2RlLXR5cGUtaG9tZXBhZ2luYSAjcGFnZS13cmFwcGVyID4gaGVhZGVyICNuYXZiYXInKS5hZGRDbGFzcygnaGVhZGVyLW5hdicpO1xuICAgICQoJ2JvZHkucGFnZS1ub2RlLXR5cGUtaG9tZXBhZ2luYSAjcGFnZS13cmFwcGVyID4gaGVhZGVyICNuYXZiYXInKS5yZW1vdmVDbGFzcygnc2Nyb2xsJyk7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNTUwKSB7XG4gICAgICAgICQoJyNwYWdlLXdyYXBwZXIgPiBoZWFkZXIjcHJpLWhlYWRlciAjbmF2YmFyIC5yZWdpb24taGVhZGVyIC5ibG9jay1zeXN0ZW0tYnJhbmRpbmctYmxvY2sgYS5zaXRlLWxvZ28gaW1nJykuYXR0cignc3JjJywgJy90aGVtZXMvZWYyX2N1c3RvbS9sb2dvLXdoaXRlLnBuZycpO1xuICAgIH1cbiAgICBcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgIGlmIChjdXJyZW50U2Nyb2xsUG9zID49IDY1MCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDI1KSB7XG4gICAgICAgICAgICAkKCdib2R5LnBhZ2Utbm9kZS10eXBlLWhvbWVwYWdpbmEgI3BhZ2Utd3JhcHBlciA+IGhlYWRlciAjbmF2YmFyJykuYWRkQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAgICAgJCgnYm9keS5wYWdlLW5vZGUtdHlwZS1ob21lcGFnaW5hICNwYWdlLXdyYXBwZXIgPiBoZWFkZXIgI25hdmJhcicpLnJlbW92ZUNsYXNzKCdoZWFkZXItbmF2Jyk7XG4gICAgICAgICAgICAkKCcjcGFnZS13cmFwcGVyID4gaGVhZGVyI3ByaS1oZWFkZXIgI25hdmJhciAucmVnaW9uLWhlYWRlciAuYmxvY2stc3lzdGVtLWJyYW5kaW5nLWJsb2NrIGEuc2l0ZS1sb2dvIGltZycpLmF0dHIoJ3NyYycsICcvdGhlbWVzL2VmMl9jdXN0b20vbG9nby5wbmcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJ2JvZHkucGFnZS1ub2RlLXR5cGUtaG9tZXBhZ2luYSAjcGFnZS13cmFwcGVyID4gaGVhZGVyICNuYXZiYXInKS5hZGRDbGFzcygnaGVhZGVyLW5hdicpO1xuICAgICAgICAgICAgJCgnYm9keS5wYWdlLW5vZGUtdHlwZS1ob21lcGFnaW5hICNwYWdlLXdyYXBwZXIgPiBoZWFkZXIgI25hdmJhcicpLnJlbW92ZUNsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgICAgICQoJyNwYWdlLXdyYXBwZXIgPiBoZWFkZXIjcHJpLWhlYWRlciAjbmF2YmFyIC5yZWdpb24taGVhZGVyIC5ibG9jay1zeXN0ZW0tYnJhbmRpbmctYmxvY2sgYS5zaXRlLWxvZ28gaW1nJykuYXR0cignc3JjJywgJy90aGVtZXMvZWYyX2N1c3RvbS9sb2dvLXdoaXRlLnBuZycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoY3VycmVudFNjcm9sbFBvcyA+PSAzMDAgJiYgd2luZG93LmlubmVyV2lkdGggPD0gNTUwKSB7XG4gICAgICAgICAgICAkKCcjcGFnZS13cmFwcGVyID4gaGVhZGVyI3ByaS1oZWFkZXIgI25hdmJhciAucmVnaW9uLWhlYWRlciAuYmxvY2stc3lzdGVtLWJyYW5kaW5nLWJsb2NrIGEuc2l0ZS1sb2dvIGltZycpLmF0dHIoJ3NyYycsICcvdGhlbWVzL2VmMl9jdXN0b20vbG9nby5wbmcnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBpZighJCgnYm9keScpLmhhc0NsYXNzKCdwYWdlLW5vZGUtdHlwZS1ob21lcGFnaW5hJykpIHtcbiAgICAgICAgJCgnYm9keSAjcGFnZS13cmFwcGVyID4gaGVhZGVyICNuYXZiYXInKS5hZGRDbGFzcygnc2Nyb2xsJyk7XG4gICAgfVxufSk7Il19
