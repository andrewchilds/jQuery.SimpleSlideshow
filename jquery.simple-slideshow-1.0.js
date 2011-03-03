/**
 * jQuery Simple Slideshow, v.1.0
 *
 * Copyright (c) 2010 Andrew Childs
 *
 * Example Usage:
 *
 * $(function() {
 *     $('.slideshow').simpleSlideshow();
 * });
 *
 * <div class="slideshow">
 *   <img src="/path/to/image1.jpg" alt="" />
 *   <img src="/path/to/image2.jpg" alt="" />
 *   <img src="/path/to/image3.jpg" alt="" />
 *   <img src="/path/to/image4.jpg" alt="" />
 * </div>
 */
;(function($) {
    $.fn.simpleSlideshow = function(options) {

        var config = {
            cycleSpeed: 5000,   // How quickly the slideshow cycles to the next image, in milliseconds.
            fadeSpeed: 800,     // Crossfader speed, in milliseconds.
            zIndex: 999         // The zIndex of the overlapping image.
        };
        if (options) $.extend(config, options);

        this.each(function() {
            var container = $(this);
            container.css({ position: 'relative', zIndex: config.z });
            $('img', container).hide();
            $('img:first', container).show();
            var cycle = function() {
                var next = $('img:visible', container).next('img');
                if (!next.length) {
                    next = $('img:first', container);
                }
                $('img', container).css({ zIndex: config.zIndex });
                var old = $('img:visible', container);
                next.css({ position: 'absolute', top: '0px', zIndex: config.zIndex + 1 }).fadeIn(config.fadeSpeed, function() {
                    old.hide();
                    $(this).css({ position: 'static' });
                });
                setTimeout(cycle, config.cycleSpeed);
            };
            setTimeout(cycle, config.cycleSpeed);
        });

        return this;
    };

})(jQuery);
