var show_variant_images = function(variant_id) {
  jQuery('li.vtmb').hide();
  jQuery('li.vtmb-' + variant_id).show();
  var currentThumb = jQuery('#' + jQuery("#main-image").data('selectedThumbId'));
  // if currently selected thumb does not belong to current variant, nor to common images,
  // hide it and select the first available thumb instead.
  if(!currentThumb.hasClass('vtmb-' + variant_id)) {
    //var thumb = jQuery(jQuery('ul.thumbnails li:visible').eq(0));
    var thumb = jQuery(jQuery("ul.thumbnails li.vtmb-" + variant_id + ":first").eq(0));
    if (thumb.length == 0) {
      thumb = jQuery(jQuery('ul.thumbnails li:visible').eq(0));
    }
    var newImg = thumb.find('a').attr('href');
    jQuery('ul.thumbnails li').removeClass('selected');
    thumb.addClass('selected');
    jQuery('#main-image img').attr('src', newImg);
    jQuery("#main-image").data('selectedThumb', newImg);
    jQuery("#main-image").data('selectedThumbId', thumb.attr('id'));
  }
}

var show_all_variant_images = function() {
  jQuery('li.vtmb').show();
}