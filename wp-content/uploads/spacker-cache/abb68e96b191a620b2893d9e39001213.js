/* prettyPhoto-init: (http://virtue.tk/wp-content/plugins/woocommerce/assets/js/prettyPhoto/jquery.prettyPhoto.init.min.js) */
(function(e){e(document).ready(function(){e("#review_form_wrapper").hide();e("a.zoom").prettyPhoto({social_tools:!1,theme:"pp_woocommerce",horizontal_padding:40,opacity:.9,deeplinking:!1});e("a.show_review_form").prettyPhoto({social_tools:!1,theme:"pp_woocommerce",horizontal_padding:40,opacity:.9,deeplinking:!1});e("a[rel^='prettyPhoto']").prettyPhoto({social_tools:!1,theme:"pp_woocommerce",horizontal_padding:40,opacity:.9,deeplinking:!1});window.location.hash=="#review_form"&&e("a.show_review_form").trigger("click")})})(jQuery);