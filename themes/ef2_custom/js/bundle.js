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
        // if() {÷
            if (currentScrollPos >= 650 && window.innerWidth >= 1025) {
                $('body.page-node-type-homepagina #page-wrapper > header #navbar').addClass('scroll');
                $('body.page-node-type-homepagina #page-wrapper > header #navbar').removeClass('header-nav');
            } else {
                $('body.page-node-type-homepagina #page-wrapper > header #navbar').addClass('header-nav');
                $('body.page-node-type-homepagina #page-wrapper > header #navbar').removeClass('scroll');
            }
        // }
    };

    if(!$('body').hasClass('page-node-type-homepagina')) {
        $('body #page-wrapper > header #navbar').addClass('scroll');
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnV0b2dnbGVyLmpzIiwicmVhZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1lbnV0b2dnbGVyID0gZnVuY3Rpb24oKXtcblx0dGhpcy5pbml0KCk7XG5cdFxuXHR0aGlzLmluaXQgPSBmdW5jdGlvbigpIHtcblxuXHR9XG59IiwialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XG4gIFx0JCgnI21lbnUtdG9nZ2xlJykub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCBmdW5jdGlvbihldmVudCl7XG5cdFx0JCgnYm9keScpLnRvZ2dsZUNsYXNzKCdtYWluLW1lbnUtYWN0aXZlJyk7ICAgICAgIFxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnbmF2Lm1lbnUtLW1haW4gPiB1bCA+IGxpJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgIC8vIGlmKCkge8O3XG4gICAgICAgICAgICBpZiAoY3VycmVudFNjcm9sbFBvcyA+PSA2NTAgJiYgd2luZG93LmlubmVyV2lkdGggPj0gMTAyNSkge1xuICAgICAgICAgICAgICAgICQoJ2JvZHkucGFnZS1ub2RlLXR5cGUtaG9tZXBhZ2luYSAjcGFnZS13cmFwcGVyID4gaGVhZGVyICNuYXZiYXInKS5hZGRDbGFzcygnc2Nyb2xsJyk7XG4gICAgICAgICAgICAgICAgJCgnYm9keS5wYWdlLW5vZGUtdHlwZS1ob21lcGFnaW5hICNwYWdlLXdyYXBwZXIgPiBoZWFkZXIgI25hdmJhcicpLnJlbW92ZUNsYXNzKCdoZWFkZXItbmF2Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJ2JvZHkucGFnZS1ub2RlLXR5cGUtaG9tZXBhZ2luYSAjcGFnZS13cmFwcGVyID4gaGVhZGVyICNuYXZiYXInKS5hZGRDbGFzcygnaGVhZGVyLW5hdicpO1xuICAgICAgICAgICAgICAgICQoJ2JvZHkucGFnZS1ub2RlLXR5cGUtaG9tZXBhZ2luYSAjcGFnZS13cmFwcGVyID4gaGVhZGVyICNuYXZiYXInKS5yZW1vdmVDbGFzcygnc2Nyb2xsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9O1xuXG4gICAgaWYoISQoJ2JvZHknKS5oYXNDbGFzcygncGFnZS1ub2RlLXR5cGUtaG9tZXBhZ2luYScpKSB7XG4gICAgICAgICQoJ2JvZHkgI3BhZ2Utd3JhcHBlciA+IGhlYWRlciAjbmF2YmFyJykuYWRkQ2xhc3MoJ3Njcm9sbCcpO1xuICAgIH1cbn0pOyJdfQ==
