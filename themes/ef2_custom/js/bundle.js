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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnV0b2dnbGVyLmpzIiwicmVhZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibWVudXRvZ2dsZXIgPSBmdW5jdGlvbigpe1xuXHR0aGlzLmluaXQoKTtcblx0XG5cdHRoaXMuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG5cdH1cbn0iLCJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpIHtcbiAgXHQkKCcjbWVudS10b2dnbGUnKS5vbignY2xpY2sgdG91Y2hzdGFydCcsIGZ1bmN0aW9uKGV2ZW50KXtcblx0XHQkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ21haW4tbWVudS1hY3RpdmUnKTsgICAgICAgXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKCduYXYubWVudS0tbWFpbiA+IHVsID4gbGknKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGxQb3MgPj0gNjUwKSB7XG4gICAgICAgICAgICAkKCdib2R5LnBhZ2Utbm9kZS10eXBlLWhvbWVwYWdpbmEgI3BhZ2Utd3JhcHBlciA+IGhlYWRlciAjbmF2YmFyJykuYWRkQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAgICAgJCgnYm9keS5wYWdlLW5vZGUtdHlwZS1ob21lcGFnaW5hICNwYWdlLXdyYXBwZXIgPiBoZWFkZXIgI25hdmJhcicpLnJlbW92ZUNsYXNzKCdoZWFkZXItbmF2Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCdib2R5LnBhZ2Utbm9kZS10eXBlLWhvbWVwYWdpbmEgI3BhZ2Utd3JhcHBlciA+IGhlYWRlciAjbmF2YmFyJykuYWRkQ2xhc3MoJ2hlYWRlci1uYXYnKTtcbiAgICAgICAgICAgICQoJ2JvZHkucGFnZS1ub2RlLXR5cGUtaG9tZXBhZ2luYSAjcGFnZS13cmFwcGVyID4gaGVhZGVyICNuYXZiYXInKS5yZW1vdmVDbGFzcygnc2Nyb2xsJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYoISQoJ2JvZHknKS5oYXNDbGFzcygncGFnZS1ub2RlLXR5cGUtaG9tZXBhZ2luYScpKSB7XG4gICAgICAgICQoJ2JvZHkgI3BhZ2Utd3JhcHBlciA+IGhlYWRlciAjbmF2YmFyJykuYWRkQ2xhc3MoJ3Njcm9sbCcpO1xuICAgIH1cbn0pOyJdfQ==
