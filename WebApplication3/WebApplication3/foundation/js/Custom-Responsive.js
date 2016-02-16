$(document).ready(function () {
    $('a.static.menu-item.ms-core-listMenu-item.ms-displayInline.ms-navedit-linkNode').each(function () {
        var href = $(this).attr('href');
        console.log(href);
        if (href === '/command') {
            $(this).css('margin-left', '-5.5px');
        }
    });
    $('div.ms-core-brandingText').html($('div.ms-core-brandingText').html().replace('SharePoint', 'US Army Combat Readiness Center'));

    $('nav#leftnav ul.root').attr('id', 'nav');

    $('#sideNavBox').attr('id', 'leftNavPanel');

    $('#nav > li > a').each(function () {
        if ($(this).closest('li').children('ul').length) {
            if ($(this).parent().has('ul')) {
                $(this).closest('a').addClass('collapsible');
            }
        }
    })

    $('#nav > li > a').on('click', function (e) {
        if ($(this).closest('li').children('ul').length) {
            if ($(this).parent().has('ul')) {
                e.preventDefault();
            }

            if (!$(this).hasClass('open')) {
                // hide any open menus and remove all other classes
                $('#nav li ul').slideUp(350);
                $('#nav li a').removeClass('open');

                // open our new menu and add the open class
                $(this).next('ul').slideDown(350);
                $(this).addClass('open');

            }

            else if ($(this).hasClass('open')) {
                $(this).removeClass('open');
                $(this).next('ul').slideUp(350);
            }
        }
    });
});