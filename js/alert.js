(function($) {
  Drupal.behaviors.showSiteAlert = {
    attach: function(context, settings) {
      $(window).load(function() {
        var seen = $.cookie(Drupal.settings.site_alert_message.cookie);
        if(!seen) {
          $('.site-alert-message-reveal-trigger', context).click();
          $.cookie(Drupal.settings.site_alert_message.cookie, true)
        }
      });
    }
  }
})(jQuery);