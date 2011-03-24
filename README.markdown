# simpleSlideshow

A simple slideshow plugin for jQuery. To use, dump your slides into a container element and call simpleSlideshow() on it. Done!

## Example Usage:

    $(function() {
        $('.slideshow').simpleSlideshow();
    });

    <div class="slideshow">

        <!-- Slide #1 -->
        <a href="#"><img src="/path/to/image1.jpg" alt="" /></a>

        <!-- Slide #2 -->
        <img src="/path/to/image2.jpg" alt="" />

        <!-- Slide #3 -->
        <div>
            <h1>You could include complex DOM structures too</h1>
            <p><img src="/path/to/image3.jpg" alt="" /></p>
            <p>Here is some text</p>
        </div>

        <!-- Slide #4 -->
        <img src="/path/to/image4.jpg" alt="" />

    </div>

## Demo

[http://glomerate.com/simpleSlideshow/examples/usage.html](http://glomerate.com/simpleSlideshow/examples/usage.html)

## Browser Support

The simpleSlideshow demo was tested to work in the following browsers:

* Firefox 3+
* Chrome 3+
* Safari 4+
* Opera 9+
* Internet Explorer 6+

## Dependencies

simpleSlideshow is known to be compatible with jQuery versions 1.2.3 through 1.5.1.

## Progressive Degradation, Graceful Enhancement

Users with Javascript disabled will see all images stacked, assuming images are visible to begin with and have display: block.

## Notes

* For best results, slideshow images should all have identical dimensions.
* IE6 may begin displaying additional images before the DOM ready event is fired. To work around this, you might manually hide slideshow images in CSS with display: none, overflow: hidden, etc.
