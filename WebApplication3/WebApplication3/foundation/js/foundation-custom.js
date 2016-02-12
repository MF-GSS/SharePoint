/*no conflict*/
jQuery(document).ready(function($) {
	BindTopNav($);
	BindBodySpans($);
	
	/*initialize foundation*/
	$(document).foundation();
});

/*top nav*/
function BindTopNav($) {
	var u = $('#topnavbar ul.root');
	var le = $('#topnavbar ul.root li.ms-navedit-dropNode'); /*check to see if in edit mode*/
	if ((u.length > 0) && (le.length < 1)) {
		var sn = $('.s4-tn').eq(0);
		if (sn.length > 0)
			sn.addClass('nav').removeClass('s4-tn');
		u.addClass('listMenu-display');
		u.find('a.dynamic-children').each(function() {
			//if hover events, then try
			var l = $(this).parent('li');
			var s = $(this).children('span').eq(0);
			l.hover(
				function () {HoverTopNav($(this),'',$);},
				function () {HoverTopNav($(this),'o',$);}
			);
			//trap link clicked
			$(this).bind('click',function(e) {
				var w = $(this).outerWidth(true);
				var s = $(this).children('span').eq(0);
				var rs = parseInt($(this).css("padding-right")) + parseInt($(this).css("margin-right")) + parseInt(s.css("padding-right")) + parseInt(s.css("margin-right"));
				var x = e.pageX - $(this).offset().left;
				if (x > (w-rs))
					DropTopNav($(this),'',$);
				else
					return true;
		    	return false;
			});
			//need to trap span too for some browsers
			s.bind('click',function(e) {
				var w = $(this).outerWidth(true);
				var rs = parseInt($(this).css("padding-right")) + parseInt($(this).css("margin-right"));
				var x = e.pageX - $(this).offset().left;
				if (x > (w-rs))
					DropTopNav($(this).parent('a').eq(0),'',$);
				else
					window.location.href = $(this).parent('a').eq(0).attr('href');
		    	return false;
			});
		});
	}
}
function HoverTopNav(l, a, $) {
	if (l.length > 0) {
		var m = $('#topnavbar .toggle-topbar');
		if (m.length > 0) {
			if (m.css('display') == 'none')
				DropTopNav(l.children('a.dynamic-children').eq(0), a, $);
		}
	}
}
function DropTopNav(l, a, $) {
	if (l.length > 0) {
		var u = l.siblings('ul').eq(0);
		if (u.length > 0) {
			/*if the sub menu is hidden, then show or visa-versa*/
			if (l.hasClass('selected') || (a=='o')) {
				u.css('display','none');
				l.removeClass('selected');
				u.find('ul.dynamic').css('display','none');
				u.find('a.dynamic-children').removeClass('selected');
			}
			else {
				u.css('display','block');
				l.addClass('selected');
			}
		}
	}
}
/*end top nav*/

/*body spans*/
/*used to hide left nav bar if empty, or to ensure that primary content span set to span12 if not left nav*/
function BindBodySpans($) {
	var bHideLeftNav = false;
	if (($('#sideNavBox').length > 0) && ($('#mainbody').length > 0)) {
		if ($('#sideNavBox').css('display') == 'none') {
			bHideLeftNav = true;
		}
		if (!bHideLeftNav) {
			if ($('#sideNavBox .ms-core-navigation').length > 0) {
				if ($.trim($('#sideNavBox .ms-core-navigation').html()).length < 10)
					bHideLeftNav = true;
			}
		}
	}
	if (bHideLeftNav) {
		$('#mainbody').removeClass('large-9').addClass('larger-12').css({'margin-left':'0px'});
		$('#sideNavBox').css({'display':'none'});
	}
}
/*end body spans*/