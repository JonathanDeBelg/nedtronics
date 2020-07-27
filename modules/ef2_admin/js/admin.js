jQuery(document).ready(function($){

    var yoast = $('.field--type-yoast-seo');
    var advanced = $('#edit-advanced');
    if(yoast.length && advanced.length){
        $('details', yoast).insertBefore( $('details', advanced)[0] );
    }
    var interval = setInterval(ef2_remove_update_errors, 100);
    setTimeout(function(){
        clearInterval(interval);
    }, 5000);

    //Status icoon fixen
    if(jQuery('.node-form .form-item-status-value').length) {
        if(jQuery('.node-form .form-item-status-value input[type=checkbox]').prop('checked') == false){
            jQuery('.node-form .form-item-status-value').addClass('unpublished');
        }
        jQuery('.node-form .form-item-status-value input[type=checkbox]').change(function(event){
            jQuery(this).closest('.form-item-status-value').toggleClass('unpublished');
        })
    }

    jQuery('.block-local-tasks-block h2').click(function(){
        window.location = jQuery(this).parent().find('ul.tabs li a[href*=edit]').attr('href');
    });

    if($('body').hasClass('adminimal-admin-toolbar') && !$('body').hasClass('role-administrator')){
        //Snelkoppelingen naar nieuwe inhoud toevoegen voor alle types
        $('#toolbar-item-administration-tray > nav > div.toolbar-menu-administration > ul > li:nth-child(2) > ul > li > ul > li').each(function(){
            $(this).appendTo($(this).parent('ul').parent('li').parent('ul'));
            $('a', this).addClass('add-icon')
        });
        $('#toolbar-item-administration-tray > nav > div.toolbar-menu-administration > ul > li:nth-child(2) > ul > li:nth-child(1)').remove();

        $('.toolbar-menu-administration > .toolbar-menu li').each(function(){

            //Voor nu de configuration aanzetten
            if($('> a', this).hasClass('toolbar-icon-system-admin-config')){
                $(this).find('> a').css('display', 'block');
            }

            //Logo-menu aanpassen
            if($('> a', this).hasClass('toolbar-icon-admin-toolbar-tools-help')){
                $(this).find('> ul > li').each(function(){
                   if($('> a', this).hasClass('toolbar-icon-system-admin-index')) $(this).remove();
                   if($('> a', this).hasClass('toolbar-icon-admin-development')) $(this).remove();
                   if($('> a', this).hasClass('toolbar-icon-admin-toolbar-tools-drupalorg')) $(this).remove();
                });
            }

            //Structuur tab aanpassen, wordt verborgen in de css (adminglobal.css)
            else if($('> a', this).hasClass('toolbar-icon-system-admin-structure')){
                $(this).find('> ul > li').each(function(){
                    //Menu's menu toevoegen
                    if($('> a', this).hasClass('toolbar-icon-entity-menu-collection')){
                        //Alles doorlopen en overbodige menu's verwijderen
                        $(this).find('> ul > li').each(function(){
                            if($('> a', this).hasClass('toolbar-icon-entity-menu-add-form')) $(this).remove();
                            if($('> a', this).hasClass('toolbar-icon-entity-menu-edit-form-admin')) $(this).remove();
                            if($('> a', this).hasClass('toolbar-icon-entity-menu-edit-form-devel')) $(this).remove();
                            if($('> a', this).hasClass('toolbar-icon-entity-menu-edit-form-account')) $(this).remove();
                            if($('> a', this).hasClass('toolbar-icon-entity-menu-edit-form-tools')) $(this).remove();
                        });

                        $(this).insertAfter($('.toolbar-menu-administration > .toolbar-menu > li:nth-child(2)'));
                    }

                    //Formulieren menu toevoegen
                    if($('> a', this).hasClass('toolbar-icon-entity-webform-collection')){
                        $(this).insertAfter($('.toolbar-menu-administration > .toolbar-menu > li:nth-child(3)'));
                    }

                    //Taxonomie menu toevoegen
                    if($('> a', this).hasClass('toolbar-icon-entity-taxonomy-vocabulary-collection')){
                        //Link om toe te voegen verwijderen
                        $(this).find('> ul > li').each(function(){
                            if($('> a', this).hasClass('toolbar-icon-entity-taxonomy-vocabulary-add-form')) $(this).remove();
                        });

                        if($(this).find('> ul > li').length) {
                            $(this).insertAfter($('.toolbar-menu-administration > .toolbar-menu > li:nth-child(4)'));
                        }
                    }
                });
            }

            else if($('> a', this).hasClass('toolbar-icon-cacheflush-presets')){
                $(this).find('> ul > li').each(function(){
                    if($(this).find('a').text() == 'Clear All'){
                        $(this).find('a').text('Cache leegmaken');
                    }
                    $(this).insertAfter($('.toolbar-menu-administration > .toolbar-menu > li:nth-child(5)'));
                });
            }

        });
    }

    //Analytics in nieuw tabblad laten openen
    $('.toolbar-menu-administration > .toolbar-menu li a[href="https://analytics.google.com/analytics/web/"]').attr('target', '_blank');

});
function ef2_remove_update_errors(){
    jQuery('.messages--error:contains(update)').hide();
}
