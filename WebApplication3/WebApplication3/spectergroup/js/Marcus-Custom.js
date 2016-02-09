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
                $('#nav li a').removeClass('open').children('span.expandableText').html('<img id="zoomin" src="" />');

                // open our new menu and add the open class
                $(this).next('ul').slideDown(350);
                $(this).addClass('open');
                $(this).children('span.expandableText').html('<img id="zoomout" src="" />');

            }

            else if ($(this).hasClass('open')) {
                $(this).removeClass('open');
                $(this).next('ul').slideUp(350);
                $(this).children('span.expandableText').html('<img id="zoomin" src="" />');
            }
        }
    });

    $('.collapsible > a').append('<span class="expandableText"><img id="zoomin" src="" /></span>');

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

    $('.ms-siteicon-img').attr('src', '/_catalogs/masterpage/spectergroup/img/Safety_Crest_with_Army_fw.png');

    $('.static.ms-verticalAlignTop.ms-listMenu-editLink.ms-navedit-editArea').remove();
});