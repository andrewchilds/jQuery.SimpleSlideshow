/**
 * jQuery Simple Slideshow, v.1.1
 *
 * Copyright (c) 2010 Andrew Childs
 *
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Example Usage:
 *
 * $(function() {
 *     $('.slideshow').simpleSlideshow();
 * });
 *
 * <div class="slideshow">
 *     <img src="/path/to/image1.jpg" alt="" />
 *     <img src="/path/to/image2.jpg" alt="" />
 *     <img src="/path/to/image3.jpg" alt="" />
 *     <img src="/path/to/image4.jpg" alt="" />
 * </div>
 *
 * With Custom Settings:
 *
 * $(function() {
 *     var options = { cycleSpeed: 3000, fadeSpeed: 200 };
 *     $('.slideshow').simpleSlideshow(options);
 * });
 *
 */
;(function($) {
    $.fn.simpleSlideshow = function(options) {

        var config = {
            activeClassName: 'active_slide',    // class name for active slide
            cycleSpeed: 5000,                   // How quickly the slideshow cycles to the next image, in milliseconds.
            fadeType: 'cross',                  // Can be 'cross' or 'sequential'
            fadeSpeed: 800,                     // Fader speed, in milliseconds.
            zIndex: 100                         // The z-index of the slides. The active slide is this + 1.
        };
        if (options) $.extend(config, options);

        this.each(function() {
            var $container = $(this);
            var $slides = $container.children();

            function init() {
                $container.css({ position: 'relative', zIndex: config.zIndex });
                $slides.css({ display: 'block', zIndex: config.zIndex });
                $slides.not(':eq(0)').hide().removeClass(config.activeClassName);
                $slides.eq(0).show().addClass(config.activeClassName);
            }

            function cycle() {
                var $last_slide = $slides.filter('.' + config.activeClassName);
                var $next_slide = $last_slide.next();
                if (!$next_slide.length) {
                    $next_slide = $slides.eq(0);
                }
                $slides.css({ zIndex: config.zIndex });
                // Sequential fade
                if (config.fadeType == 'sequential') {
                    $last_slide.animate({ opacity: 0 }, config.fadeSpeed / 2, '', function() {
                        $next_slide.css({ position: 'absolute', left: 0, top: 0, zIndex: config.zIndex + 1 })
                            .fadeIn(config.fadeSpeed / 2, function() {
                                $last_slide.css({ opacity: 1 }).hide().removeClass(config.activeClassName);
                                $(this).css({ position: 'static' }).addClass(config.activeClassName);
                            });
                        });
                }
                // Cross-fade
                else {
                    $next_slide.css({ position: 'absolute', left: 0, top: 0, zIndex: config.zIndex + 1 })
                        .fadeIn(config.fadeSpeed, function() {
                            $last_slide.hide().removeClass(config.activeClassName);
                            $(this).css({ position: 'static' }).addClass(config.activeClassName);
                        });
                }
            }

            init();
            setInterval(cycle, config.cycleSpeed);

        });

        return this;
    };

})(jQuery);
