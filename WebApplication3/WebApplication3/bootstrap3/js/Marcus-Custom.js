$(document).ready(function () {
    $('div.ms-core-brandingText').html($('div.ms-core-brandingText').html().replace('SharePoint', 'US Army Combat Readiness Center'));

    $('div#DeltaTopNavigation li.static span.menu-item-text').each(function () {
        var text = $(this).html();
        if (text === 'Quick Links') {
            $(this).closest('li').attr('id', 'quickLinksButton').addClass('customButton');
        }
        if (text === 'Submit a Ticket') {
            $(this).closest('li').attr('id', 'submitTicketButton').addClass('customButton');
        }
    })

    $('#sideNavContainer').hide(0);

    $(function () {
        $('#quickLinksButton .menu-item').click(function (event) {
            event.preventDefault();
            var target = $('#sideNavContainer');

            if ($(target).css('display') === 'none') {
                $(target).show('slide', { direction: 'up' }, 1000);
                $('#quickLinksButton .menu-item').css({ 'background': 'linear-gradient(to bottom right, rgb(121, 15, 11), rgb(222, 29, 24))', 'border-color': 'rgb(91, 11, 9) rgb(114, 15, 11) rgb(159, 22, 18) rgb(114, 15, 11)', 'color': '#bbb' });
            }

            else if($(target).css('display') === 'block') {
                $(target).hide('slide', { direction: 'up' }, 1000);
                $('#quickLinksButton .menu-item').css({ 'background': 'linear-gradient(to bottom right, rgb(221, 102, 99), rgb(200, 44, 39))', 'border-color': 'rgb(159, 22, 18) rgb(136, 17, 14) rgb(136, 17, 14) rgb(136, 17, 14)', 'color': '#fff' });

            }
        });
    });

    $('#sideNavRemoval').closest('.ms-rtestate-read.ms-rte-wpbox').css('display', 'none');

    $('div.ms-rtestate-read.ms-rte-wpbox td.ms-vb2').each(function () {
        var value = $(this).html();
        if (value === 'Not Started') {
            $(this).attr('value', 'blue');
        }
        if (value === 'In Progress') {
            $(this).attr('value', 'yellow');
        }
        if (value === 'Completed') {
            $(this).attr('value', 'green');
        }
        if (value === 'Deferred') {
            $(this).attr('value', 'red');
        }
        if (value === 'Waiting on someone else') {
            $(this).attr('value', 'gray');
        }
    });
});