var $j = jQuery.noConflict();

$j(window).load(function(){
	setTimeout(function(){
		if ($j("body.home").length > 0){
			$j("#panel").animate({marginLeft: "0px"});
			$j("a.open").addClass('opened');
			$j("#panel").addClass('opened-panel');
		}
	},1000);
});

$j(document).ready(function() {


	//$j('#panel select').sSelect();

	$j("#panel").css("margin-left", -280);

	$j("#panel a.open").click(function(e){
		e.preventDefault();
		var margin_left = $j("#panel").css("margin-left");
		if (margin_left == "-280px"){
			$j("#panel").animate({marginLeft: "0px"});
			$j("#panel").addClass('opened-panel');
			$j(this).addClass('opened');
		}
		else{
			$j("#panel").animate({marginLeft: "-280px"});
			$j(this).removeClass('opened');
			$j("#panel").removeClass('opened-panel');
		}
		return false;
	});



	$j('#tootlbar_colors .color').each(function(){
		$j(this).on('click',function(){
			$j('#tootlbar_colors .color').removeClass('active');
			$j(this).addClass('active');
			var color = $j(this).data('color');

			if ($j("#toolbar_colors_css").length > 0){
				$j("#toolbar_colors_css").remove();
			}

			newSkin =".qodef-title, \
						.qodef-fullscreen-menu-opener:hover .qodef-line, \
						.qodef-fullscreen-menu-opener.opened:hover .qodef-line:after, \
						.qodef-fullscreen-menu-opener.opened:hover .qodef-line:before, \
						.qodef-icon-shortcode.circle, .qodef-icon-shortcode.square, \
						.qodef-progress-bar .qodef-progress-content-outer .qodef-progress-content, \
						.qodef-price-table.qodef-active .qodef-active-text, \
						.qodef-pie-chart-doughnut-holder .qodef-pie-legend ul li .qodef-pie-color-holder, \
						.qodef-pie-chart-pie-holder .qodef-pie-legend ul li .qodef-pie-color-holder, \
						.qodef-tabs .qodef-tabs-nav li.ui-state-active a, \
						.qodef-tabs .qodef-tabs-nav li.ui-state-hover a, \
						.qodef-btn.qodef-btn-solid, \
						.qodef-btn.qodef-btn-icon:not(.qodef-btn-custom-hover-bg).qodef-btn-solid .qodef-btn-text-icon, \
						#submit_comment, \
						input.wpcf7-form-control.wpcf7-submit, \
						.qodef-accordion-holder .qodef-title-holder.ui-state-active .qodef-accordion-mark, \
						.qodef-accordion-holder .qodef-title-holder.ui-state-hover .qodef-accordion-mark, \
						.qodef-accordion-holder.qodef-boxed .qodef-title-holder .qodef-accordion-mark, \
						.qodef-price-table.qodef-active .qodef-price-table-inner ul li.qodef-table-title, \
						.qodef-price-table .qodef-price-table-inner ul li.qodef-table-title, \
						.qodef-portfolio-list-holder.qodef-ptf-standard article .qodef-item-icons-holder a, \
						.qodef-team.main-info-below-image .qodef-circle-animate, \
						body:not(.qodef-menu-item-first-level-bg-color) .qodef-main-menu > ul > li:hover > a .item_outer, .qodef-main-menu > ul > li.qodef-active-item > a .item_outer, \
						.qodef-drop-down .second .inner ul li a:before, \
						#qodef-back-to-top:hover > span, \
						.qodef-process-holder .qodef-process-item:hover .qodef-icon-shortcode.circle, \
						.qodef-underline-icon-box-holder .qodef-underline-icon-box-underline, \
						.qodef-image-with-icon-holder .qodef-image-with-icon-holder-icon-wrapper .qodef-icon-shortcode, \
						.qodef-icon-shortcode.circle.checked:before, \
						.qodef-image-with-icon-holder .qodef-image-with-icon-holder-icon-wrapper .qodef-icon-shortcode, \
						.qodef-input-title:before, \
						.qodef-social-share-holder.qodef-list a:hover, \
						.qodef-sidebar .widget h4:before, \
						.qodef-side-menu .widget h4:before, \
						#submit_comment, \
						input.wpcf7-form-control.wpcf7-submit, \
						.qodef-blog-holder article.format-audio .mejs-controls .mejs-time-rail .mejs-time-current, \
						.qodef-blog-holder article.format-audio .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current, \
						.qodef-pagination li.active, \
						.qodef-pagination li:hover, \
						.qodef-blog-holder.qodef-blog-type-standard .qodef-blog-standard-post-date .month, \
						.qodef-btn.qodef-btn-solid, \
						.qodef-btn.qodef-btn-icon:not(.qodef-btn-custom-hover-bg).qodef-btn-solid:hover, \
						.qodef-btn:not(.qodef-btn-custom-border-hover):hover, \
						.qodef-main-menu > ul > li > a .item_outer:before, \
						.qodef-woocommerce-page .product .qodef-onsale, \
						.page-template-default .woocommerce .product .qodef-onsale, \
						.page-template-full-width .woocommerce .product .qodef-onsale, \
						.qodef-woocommerce-page .qodef-woocommerce-product-list-add-to-cart-button-holder .added_to_cart:hover, \
						.page-template-default .woocommerce .qodef-woocommerce-product-list-add-to-cart-button-holder .added_to_cart:hover, \
						.page-template-full-width .woocommerce .qodef-woocommerce-product-list-add-to-cart-button-holder .added_to_cart:hover, \
						.woocommerce-pagination .page-numbers li span.current, \
						.woocommerce-pagination .page-numbers li a:hover, \
						.woocommerce-pagination .page-numbers li span:hover, \
						.woocommerce-pagination .page-numbers li span.current:hover, \
						.widget_price_filter .ui-slider-range, \
						.widget_price_filter .price_slider_amount .button, \
						.qodef-woocommerce-page .qodef-quantity-buttons .qodef-quantity-input, \
						.qodef-woocommerce-page .woocommerce-accordions.qodef-boxed .qodef-title-holder.ui-state-active, \
						.qodef-woocommerce-page .woocommerce-accordions.qodef-boxed .qodef-title-holder.ui-state-hover, \
						footer input.wpcf7-form-control.wpcf7-submit:hover, \
						.qodef-shopping-cart-outer .qodef-shopping-cart-header .qodef-cart-label, \
						.qodef-shopping-cart-dropdown .qodef-cart-bottom .checkout, \
						.qodef-shopping-cart-dropdown .qodef-cart-bottom .view-cart:hover, \
						.qodef-shopping-cart-dropdown .qodef-item-info-holder .qodef-item-right .remove:hover, \
						.qodef-woocommerce-page .return-to-shop a:hover, \
						.qodef-team .qodef-team-social-holder, \
						.qodef-testimonials.filled .qodef-testimonial-text-holder .qodef-testimonial-text-inner, \
						.qodef-shopping-cart-dropdown .qodef-dropdown-top-stripe-holder, \
						#panel .open, \
						.qodef-btn.qodef-btn-hover-animation:not(.qodef-btn-outline):not(.qodef-btn-custom-hover-bg):not(.qodef-btn-solid) .qodef-animation-overlay, \
						.qodef-btn.qodef-btn-hover-animation:not(.qodef-btn-outline):hover.qodef-btn-solid:not(.qodef-btn-custom-hover-bg), \
						.qodef-icon-shortcode.circle.checked:after, \
						.qodef-icon-shortcode.circle.checked:before, \
						.qodef-blog-single .qodef-blog-standard-post-date .month, \
						.qodef-portfolio-list-holder-outer.qodef-ptf-standard article .qodef-item-icons-holder a, \
						.qodef-btn.qodef-btn-hover-animation .qodef-animation-overlay, \
						.woocommerce-edit-account input[type=submit]:hover, \
						.woocommerce-edit-address input[type=submit]:hover, \
						.woocommerce-view-order mark,\
						.qodef-woocommerce-page #reviews input[type=submit],\
						.qodef-woocommerce-page .login .form-row input[type=submit]:hover,\
						.qodef-woocommerce-page .checkout_coupon input[type=submit]:hover,\
						.qodef-woocommerce-page .lost_reset_password .form-row input[type=submit]:hover,\
						.qodef-woocommerce-page .woocommerce-message a\
							{ \
								background-color: "+color+"; \
							} \
					h1 a:hover, \
					h2 a:hover, \
					h3 a:hover, \
					h4 a:hover, \
					h5 a:hover, \
					h6 a:hover, \
					a, \
					p a, \
					.qodef-main-menu ul li ul li:hover a, .qodef-main-menu ul li ul li.qodef-active-item a, \
					.qodef-drop-down .second .inner ul li.sub ul li:hover > a, \
					.qodef-drop-down .second .inner ul li:hover > a, \
					.qodef-drop-down .wide .second .inner > ul > li > a:hover, \
					.qodef-drop-down .wide .second .inner ul li.sub .flexslider ul li a:hover, \
					.qodef-drop-down .wide .second ul li .flexslider ul li a:hover, \
					.qodef-drop-down .wide .second .inner ul li.sub .flexslider.widget_flexslider .menu_recent_post_text a:hover, \
					.qodef-mobile-header .qodef-mobile-nav a:hover, .qodef-mobile-header .qodef-mobile-nav h4:hover, \
					.qodef-mobile-header .qodef-mobile-menu-opener a:hover, \
					.qodef-side-menu-button-opener:hover, \
					nav.qodef-fullscreen-menu ul li a:hover, \
					nav.qodef-fullscreen-menu ul li ul li a, \
					.qodef-search-slide-header-bottom .qodef-search-submit:hover, \
					.qodef-search-cover .qodef-search-close a:hover, \
					.qodef-message .qodef-message-inner a.qodef-close i:hover, \
					.qodef-ordered-list ol > li:before, \
					.qodef-icon-list-item .qodef-icon-list-icon-holder .qodef-icon-list-icon-holder-inner i, \
					.qodef-icon-list-item .qodef-icon-list-icon-holder .qodef-icon-list-icon-holder-inner .font_elegant, \
					.qodef-tabs .qodef-tabs-nav li a, \
					.qodef-btn.qodef-btn-outline, \
					.post-password-form input[type='submit']:hover, \
					.qodef-accordion-holder .qodef-title-holder.ui-state-active, \
					.qodef-accordion-holder .qodef-title-holder.ui-state-hover, \
					.qodef-icon-list-item .qodef-icon-list-icon-holder-inner i, \
					.qodef-icon-list-item .qodef-icon-list-icon-holder-inner .font_elegant, \
					.qodef-ordered-list ol>li:before, \
					.qodef-portfolio-filter-holder .qodef-portfolio-filter-holder-inner ul li.active span, \
					.qodef-portfolio-filter-holder .qodef-portfolio-filter-holder-inner ul li.current span, \
					.qodef-portfolio-list-holder.qodef-ptf-standard article .qodef-item-icons-holder a:hover, \
					.qodef-portfolio-slider-holder .qodef-portfolio-list-holder.owl-carousel .owl-buttons .qodef-prev-icon i, \
					.qodef-portfolio-slider-holder .qodef-portfolio-list-holder.owl-carousel .owl-buttons .qodef-next-icon i, \
					.qodef-search-opener:hover, \
					.qodef-side-menu a.qodef-close-side-menu:hover span, \
					.qodef-underline-icon-box-holder.qodef-underline-animation:hover .qodef-underline-icon-box-icon-holder .qodef-icon-shortcode .qodef-icon-element, \
					.qodef-pie-chart-with-icon-holder .qodef-percentage-with-icon i, \
					.qodef-pie-chart-with-icon-holder .qodef-percentage-with-icon span, \
					.qodef-blog-list-holder .qodef-item-info-section, \
					.qodef-blog-holder article .qodef-post-info a:hover, \
					.qodef-comment-holder .qodef-comment-text .qodef-comment-date, \
					.qodef-sidebar .widget a:hover, \
					.qodef-side-menu .widget a:hover, \
					footer a:hover, \
					.post-password-form input[type='submit']:hover, \
					.qodef-sidebar #searchform input[type='submit']:hover, \
					.qodef-side-menu #searchform input[type='submit']:hover, \
					footer input[type='submit']:hover, \
					.qodef-author-description .qodef-author-description-text-holder .qodef-author-social-inner a:hover, \
					.qodef-portfolio-single-holder .qodef-portfolio-info-holder h6, \
					.qodef-portfolio-single-holder .qodef-portfolio-single-nav .qodef-portfolio-back-btn span:hover, \
					.qodef-portfolio-single-holder .qodef-portfolio-single-nav .qodef-portfolio-next a:hover span,  \
					.qodef-portfolio-single-holder .qodef-portfolio-single-nav .qodef-portfolio-prev a:hover span, \
					.qodef-portfolio-list-holder-outer.qodef-ptf-gallery article .qodef-item-text-holder .qodef-ptf-category-holder, \
					.qodef-portfolio-filter-holder .qodef-portfolio-filter-holder-inner ul li span:hover, \
					.star-rating, \
					.qodef-woocommerce-page .select2-results .select2-highlighted, \
					.qodef-woocommerce-page .select2-container .select2-choice .select2-arrow b:after, \
					.qodef_twitter_widget li .tweet_icon_holder .social_twitter, \
					.qodef-single-product-summary .qodef-woocommerce-share-holder .qodef-social-share-holder a:hover, \
					.qodef-counter-holder .qodef-counter-title, \
					.qodef-shopping-cart-outer .qodef-shopping-cart-header .qodef-header-cart:hover i, \
					.qodef-woocommerce-page .qodef-cart-totals .order-total, \
					.qodef-woocommerce-page .woocommerce-checkout-review-order-table .order-total, \
					.qodef-process-holder .qodef-process-item:hover .qodef-process-item-title-holder > *, \
					.qodef-blog-holder article.sticky .qodef-post-title a, \
					.qodef-blog-list-holder .qodef-item-info-section > div a, \
					.qodef-blog-list-holder .qodef-item-info-section > div:before, \
					.qodef-blog-list-holder .qodef-item-info-section span, \
					.qodef-sidebar .widget.widget_recent_comments a, \
					.qodef-side-menu .widget.widget_recent_comments a, \
					.qodef-shopping-cart-dropdown .qodef-item-info-holder .qodef-item-left a:hover, \
					.qodef-shopping-cart-dropdown .qodef-cart-bottom .qodef-subtotal-holder .qodef-total-amount, \
					.qodef-blog-holder.qodef-blog-type-masonry .qodef-btn, \
					.qodef-blog-holder.qodef-masonry-full-width .qodef-btn, \
					.countdown-period, \
					.qodef-portfolio-list-holder-outer.qodef-ptf-gallery article .qodef-item-text-holder .qodef-item-title>a, \
					.qodef-portfolio-list-holder-outer.qodef-ptf-gallery article .qodef-item-text-holder .qodef-ptf-category-holder span, \
					.qodef-portfolio-list-holder-outer.qodef-ptf-standard article .qodef-item-text-holder .qodef-ptf-category-holder span, \
					.qodef-menu-area .qodef-featured-icon { \
						color: "+color+"; \
					} \
					.qodef-process-holder .qodef-process-item:hover .qodef-process-item-background-holder{ \
						border-color: rgba("+hexToRgb(color).r+","+hexToRgb(color).g+","+hexToRgb(color).b+", 0.4); \
					}\
					.qodef-blog-holder.qodef-blog-type-masonry .qodef-btn:hover, \
					.qodef-icon-list-item .qodef-icon-list-icon-holder-inner i, \
					.custom-color-row .qodef-icon-shortcode .qodef-icon-element, \
					.custom-row-icons .qodef-icon-shortcode .qodef-icon-element, \
					.qodef-blog-holder.qodef-masonry-full-width .qodef-btn:hover{ \
						color: "+color+" !important; \
					} \
					.qodef-btn.qodef-btn-icon:not(.qodef-btn-custom-hover-bg).qodef-btn-solid:hover, \
					.qodef-btn.qodef-btn-hover-animation:not(.qodef-btn-outline):hover.qodef-btn-solid:not(.qodef-btn-custom-hover-bg), \
					.row-custom-color .qodef-icon-shortcode.circle, \
					.custom-row-class .qodef-icon-shortcode.circle, \
					.custom-row-color .qodef-icon-shortcode.circle, \
					.qodef-landing-custom .qodef-item-icons-holder .qodef-preview:before, \
					.qodef-btn:not(.qodef-btn-custom-border-hover):hover{ \
						background-color: "+color+" !important; \
					} \
					.qodef-drop-down .second, \
					.qodef-progress-bar .qodef-progress-number-wrapper.qodef-floating .qodef-down-arrow, \
					.qodef-tabs .qodef-tabs-nav li a, \
					.qodef-btn.qodef-btn-solid, \
					.qodef-btn.qodef-btn-outline, \
					#submit_comment, \
					.post-password-form input[type='submit'], \
					input.wpcf7-form-control.wpcf7-submit, \
					.wpcf7-form-control.wpcf7-text:focus, \
					.wpcf7-form-control.wpcf7-number:focus, \
					.wpcf7-form-control.wpcf7-date:focus, \
					.wpcf7-form-control.wpcf7-textarea:focus, \
					.wpcf7-form-control.wpcf7-select:focus, \
					.wpcf7-form-control.wpcf7-quiz:focus, \
					#respond textarea:focus, \
					#respond input[type='text']:focus, \
					.post-password-form input[type='password']:focus, \
					.qodef-accordion-holder .qodef-title-holder.ui-state-active .qodef-accordion-mark, \
					.qodef-accordion-holder .qodef-title-holder.ui-state-hover .qodef-accordion-mark, \
					.qodef-portfolio-slider-holder .qodef-portfolio-list-holder.owl-carousel .owl-buttons .qodef-prev-icon, \
					.qodef-portfolio-slider-holder .qodef-portfolio-list-holder.owl-carousel .owl-buttons .qodef-next-icon, \
					.qodef-drop-down .second .inner > ul, \
					.qodef-process-holder .qodef-process-item:hover .qodef-process-item-icon-holder, \
					.qodef-icon-shortcode.circle, \
					.qodef-icon-shortcode.square, \
					.qodef-single-tags-holder .qodef-tags a:after, \
					blockquote .qodef-blockquote-text, \
					#submit_comment, \
					.post-password-form input[type='submit'], \
					input.wpcf7-form-control.wpcf7-submit, \
					footer input[type='submit'], \
					.qodef-sidebar .tagcloud a:hover:after, \
					.qodef-side-menu .tagcloud a:hover:after, \
					footer .widget .tagcloud a:hover:after, \
					.qodef-portfolio-single-holder .qodef-portfolio-single-nav .qodef-portfolio-prev a:hover, \
					.qodef-portfolio-single-holder .qodef-portfolio-single-nav .qodef-portfolio-next a:hover, \
					.qodef-pagination li.active, \
					.qodef-pagination li:hover, \
					.qodef-btn.qodef-btn-solid, \
					.qodef-btn:not(.qodef-btn-custom-border-hover):hover, \
					.qodef-woocommerce-page .qodef-woocommerce-product-list-add-to-cart-button-holder .added_to_cart:hover, \
					.page-template-default .woocommerce .qodef-woocommerce-product-list-add-to-cart-button-holder .added_to_cart:hover, \
					.page-template-full-width .woocommerce .qodef-woocommerce-product-list-add-to-cart-button-holder .added_to_cart:hover, \
					.woocommerce-pagination .page-numbers li span.current, \
					.woocommerce-pagination .page-numbers li a:hover, \
					.woocommerce-pagination .page-numbers li span:hover, \
					.woocommerce-pagination .page-numbers li span.current:hover, \
					.widget_price_filter .ui-slider-handle, \
					.widget_price_filter .price_slider_amount .button, \
					.qodef-woocommerce-page .woocommerce-accordions.qodef-boxed .qodef-title-holder.ui-state-active, \
					.qodef-woocommerce-page .woocommerce-accordions.qodef-boxed .qodef-title-holder.ui-state-hover, \
					footer .qodef-footer-top-holder .widget.widget_recent_entries li a:before, \
					.qodef-woocommerce-page #reviews input[type='submit'], \
					footer input.wpcf7-form-control.wpcf7-submit:hover, \
					.qodef-shopping-cart-dropdown .qodef-cart-bottom .checkout, \
					.qodef-shopping-cart-dropdown .qodef-cart-bottom .view-cart:hover, \
					.qodef-woocommerce-page .checkout_coupon input[type='submit']:hover, \
					.qodef-woocommerce-page .login .form-row input[type='submit']:hover, \
					.qodef-woocommerce-page .lost_reset_password .form-row input[type='submit']:hover, \
					.qodef-woocommerce-page .return-to-shop a:hover, \
					.qodef-blog-holder.qodef-blog-type-masonry article:not(.format-audio) .qodef-post-image, \
					.qodef-tabs .qodef-tabs-nav li.ui-state-active a, \
					.qodef-portfolio-list-holder-outer.qodef-ptf-standard article .qodef-item-icons-holder a, \
					.woocommerce-edit-account input[type=submit]:hover, \
					.woocommerce-edit-address input[type=submit]:hover, \
					.woocommerce-view-order mark, \
					.qodef-woocommerce-page .woocommerce-message a,\
					.carousel-inner h3.qodef-slide-subtitle{ \
						border-color: "+color+"; \
					} \
					.qodef-btn:not(.qodef-btn-custom-border-hover):hover, \
					.qodef-tabs .qodef-tabs-nav li.ui-state-hover a { \
						border-color: "+color+" !important; \
					} \
					";
			jQuery('body').append('<style id="toolbar_colors_css" type="text/css">'+newSkin+'</style>');

		});
	});
});

function hexToRgb(hex) {
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function(m, r, g, b) {
		return r + r + g + g + b + b;
	});

	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}

$j.fn.inlineStyle = function (prop) {
	var styles = this.attr("style"),
		value;
	styles && styles.split(";").forEach(function (e) {
		var style = e.split(":");
		if ($j.trim(style[0]) === prop) {
			value = style[1];
		}
	});
	return value;
};