$(document).ready(function () {
    $('#DeltaTopNavigation').append('<div class="customButton" id="quickLinksButton"><a href="#sideNavBox">Quick Links</a></div><div class="customButton" id="submitTicketButton"><a href="#">Submit a Ticket</a></div>');

    $('#sideNavBox').addClass('hidden');

    $(function () {

        $('#quickLinksButton a').click(function (event) {
            event.preventDefault();
            var target = $(this).attr('href');
            $(target).toggleClass('hidden');
        });

    });
});