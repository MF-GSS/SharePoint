$(document).ready(function () {
    //$('#DeltaTopNavigation').append('<div class="customButton" id="quickLinksButton"><a href="#">Quick Links</a></div><div class="customButton" id="submitTicketButton"><a href="#">Submit a Ticket</a></div>');

    $('#sideNavContainer').hide(0);

    $(function () {
        $('#quickLinksButton a').click(function (event) {
            event.preventDefault();
            var target = $('#sideNavContainer');

            if ($(target).css('display') === 'none') {
                $(target).show('slide', { direction: 'up' }, 1000);
                $('#quickLinksButton').css({ 'background': 'linear-gradient(to bottom right, rgb(125, 81, 34), rgb(125, 80, 23))', 'border-color': 'rgb(91, 42, 25) rgb(208, 178, 80) rgb(208, 178, 80) rgb(91, 42, 25)', 'color': '#bbb' });
            }

            else if($(target).css('display') === 'block') {
                $(target).hide('slide', { direction: 'up' }, 1000);
                $('#quickLinksButton').css({ 'background': 'linear-gradient(to bottom right, rgb(125, 80, 23), rgb(125, 81, 34))', 'border-color': 'rgb(208, 178, 80) rgb(91, 42, 25) rgb(91, 42, 25) rgb(208, 178, 80)', 'color': '#fff' });

            }
        });
    });
    
    //$('#main #mainbody span#DeltaPlaceHolderMain').remove();
    //$('#mainbody').append('<div id="rotator"><div class="row"><div class="col-md-12"></div></div></div>');
    //$('#mainbody').append('<div id="announcements"><div class="row"><div class="col-md-12"></div></div></div>');
});