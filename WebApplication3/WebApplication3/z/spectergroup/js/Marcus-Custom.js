/* Custom JS*/
$(document).ready(function () {
    $('nav#topnav ul.root.ms-core-listMenu-root.static ul li').unwrap();
    $('nav#topnav ul.root.ms-core-listMenu-root.static li a').unwrap();
    $('nav#topnav ul.root.ms-core-listMenu-root.static a.static.menu-item.ms-core-listMenu-item.ms-displayInline.ms-navedit-linkNode').wrap('<li class="static"></li>');

    $('div.ms-core-brandingText').html($('div.ms-core-brandingText').html().replace('SharePoint', 'USACRC'));

    $('*').each(function () {
        if ($(this).css('color') == 'rgb(0, 152, 153)') {
            $(this).css('color', '#ffcb05');
        };
        if ($(this).css('color') == 'rgb(0, 114, 198)') {
            $(this).css('color', '#333');
        };
        if ($(this).css('background-color') == 'rgb(153, 51, 0)') {
            $(this).css('background-color', '#333');
        };
        if ($(this).css('border-top-color') == 'rgb(153, 51, 0)') {
            $(this).css('border-top-color', '#333');
        };
    });

    $('div#DeltaPageStatusBar').remove();

    $('span.ms-siteactions-normal a.ms-core-menu-root').css('background-image', 'url("../img/128px/gear.png")');

    $('header').css('background-image', 'url("../_catalogs/masterpage/spectergroup/img/header.png")');
    
    $('img.ms-siteicon-img').attr('src', '../_catalogs/masterpage/spectergroup/img/Safety_Crest_with_Army_fw.png');

    $('a.ms-srch-sb-searchLink').css('background-image', 'url("../_catalogs/masterpage/spectergroup/img/icon-search+1.png")');

    $('nav#topnav .nav ul.root > li:first-child a').css('background-image', 'url("../_catalogs/masterpage/spectergroup/img/icon-home+1.png")');

    $('footer .contact li').css('background-image', 'url("../_catalogs/masterpage/spectergroup/img/icon-contact+1.png")');

    $('footer .span4 h6').css('text-align', 'left');

    //$('#leftnav li a.ms-core-listMenu-selected').removeClass('ms-core-listMenu-selected');

    $('nav#leftnav ul.root').attr('id', 'nav');

    $('#sideNavBox').attr('id', 'leftNavPanel');

    $('#nav li ul').parent().addClass('collapsible');

    $('#nav li li a').removeClass('collapsible');

    $('#nav > li > a').on('click', function (e) {
        if ($(this).closest('li').children('ul').length) {
            if ($(this).parent().has('ul')) {
                e.preventDefault();
            }

            if (!$(this).hasClass('open')) {
                // hide any open menus and remove all other classes
                $('#nav li ul').slideUp(350);
                $('#nav li a').removeClass('open').children('span.expandableText').html('<img id="zoomin" src="../_catalogs/masterpage/spectergroup/img/128px/zoomin+1.png" />');

                // open our new menu and add the open class
                $(this).next('ul').slideDown(350);
                $(this).addClass('open');
                $(this).children('span.expandableText').html('<img id="zoomout" src="../_catalogs/masterpage/spectergroup/img/128px/zoomout+1.png" />');

            }

            else if ($(this).hasClass('open')) {
                $(this).removeClass('open');
                $(this).next('ul').slideUp(350);
                $(this).children('span.expandableText').html('<img id="zoomin" src="../_catalogs/masterpage/spectergroup/img/128px/zoomin+1.png" />');
            }
        }
    });

    $('.collapsible > a').append('<span class="expandableText"><img id="zoomin" src="../_catalogs/masterpage/spectergroup/img/128px/zoomin+1.png" /></span>');
    $('span.expandableText').css({ 'font-size': '9px', 'float': 'right', 'height': '20px', 'width': '20px' });

    $('span.expandableText').parent('a').hover(function () {
        $(this).children().find('img#zoomin').attr('src', '../_catalogs/masterpage/spectergroup/img/128px/zoomin+2.png');
        $(this).children().find('img#zoomout').attr('src', '../_catalogs/masterpage/spectergroup/img/128px/zoomout+2.png');
    }, function () {
        $(this).children().find('img#zoomin').attr('src', '../_catalogs/masterpage/spectergroup/img/128px/zoomin+1.png');
        $(this).children().find('img#zoomout').attr('src', '../_catalogs/masterpage/spectergroup/img/128px/zoomout+1.png');
    });

    $('*').each(function () {
        if ($(this).css('max-width') == '1160px') {
            $(this).css('max-width', '100%');
        };
        if ($(this).css('max-width') == '1200px') {
            $(this).css('max-width', '100%');
        };
    });

    $('ul.cf li img').each(function () {
        if ($(this).attr('src') == '/sites/MarcusPub/_catalogs/masterpage/spectergroup/img/social/Facebook.png') {
            $(this).attr('src', '/sites/MarcusPub/_catalogs/masterpage/spectergroup/img/social/Facebook+1.png');
        };
        if ($(this).attr('src') == '/sites/MarcusPub/_catalogs/masterpage/spectergroup/img/social/Twitter.png') {
            $(this).attr('src', '/sites/MarcusPub/_catalogs/masterpage/spectergroup/img/social/Twitter+1.png');
        };
        if ($(this).attr('src') == '/sites/MarcusPub/_catalogs/masterpage/spectergroup/img/social/Google+.png') {
            $(this).attr('src', '/sites/MarcusPub/_catalogs/masterpage/spectergroup/img/social/Google++1.png');
        };
        if ($(this).attr('src') == '/sites/MarcusPub/_catalogs/masterpage/spectergroup/img/social/LinkedIn.png') {
            $(this).attr('src', '/sites/MarcusPub/_catalogs/masterpage/spectergroup/img/social/LinkedIn+1.png');
        };
        if ($(this).attr('src') == '/sites/MarcusPub/_catalogs/masterpage/spectergroup/img/social/RSS.png') {
            $(this).attr('src', '/sites/MarcusPub/_catalogs/masterpage/spectergroup/img/social/RSS+1.png');
        };
        if ($(this).attr('src') == '/sites/MarcusPub/_catalogs/masterpage/spectergroup/img/social/YouTube.png') {
            $(this).attr('src', '/sites/MarcusPub/_catalogs/masterpage/spectergroup/img/social/YouTube+1.png');
        };
    })

    $('header div.tagline h2 span').css({ 'text-shadow': '0px 0px 2px #fff', 'color': '#000' });

    $('#topnav div.container-fluid').css('padding', '0');

    $('#nav a').css({ 'font-weight': '500', 'font-size': '16px' });

    $('ul#nav').css('min-width', '255px');

    $('div#main div.container-fluid div.row-fluid div.span3 nav#leftnav').parent('div.span3').addClass('custom-span3');

    // Masonry Script

    var $grid = $('.grid').masonry({
        columnWidth: 120,
        itemSelector: '.grid-item'
    });

    $grid.on('hover', '.grid-item-content', function () {
        $(this).parent('.grid-item').toggleClass('is-expanded');
        $grid.masonry();
    });
      
    $('.grid .grid-item .grid-item-content').each(function (i, el) {
        el.id = 'box' + (i + 1);
    });
});