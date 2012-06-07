// wSticky v0.1 by Wang Huiyuan
// http://www.plugins.ddns.us
//
// http://www.plugins.ddns.us
;
(function($){
    // Using it without an object
    $.wSticky = function(note, options, callback) {
        return $.fn.wSticky(note, options, callback);
    };

    $.fn.wSticky = function(note, options, callback) {
        // Default settings
        var settings = {
            'position' : 'top-right', // top-left, top-right, top-center, bottom-left, bottom-right, or bottom-center
            'speed' : 'fast', // animations: fast, slow, or integer
            'duplicates' : true, // true or false
            'autoclose' : 5000  // integer or false
        };

        // Passing in the object instead of specifying a note
        if(!note) {
            note = this.html();
        }

        if(options) {
            $.extend(settings, options);
        }

        // Variables
        var display = true;
        var duplicate = 'no';

        // Somewhat of a unique ID
        var uniqID = Math.floor(Math.random() * 99999);

        // Handling duplicate notes and IDs
        $('.sticky-note').each(function() {
            if($(this).html() == note && $(this).is(':visible')) {
                duplicate = 'yes';
                if(!settings['duplicates']) {
                    display = false;
                }
            }
            if($(this).attr('id') == uniqID) {
                uniqID = Math.floor(Math.random() * 9999999);
            }
        });
        var xpos;
        // Make sure the sticky queue exists
        if(!$('body').find('.'+settings['position']).html()) {
            $('body').append('<div class="sticky-queue ' + settings['position'] + '"></div>');
            if(settings['position'] == 'top-center' || settings['position'] == 'bottom-center') {
                xpos = (parseInt($(window).width()) - 200) / 2;
                $('.'+settings['position']).css('left', xpos);
            } else if(settings['position']=='top-right'||settings['position']=='bottom-right') {
                $('.'+settings['position']).css('right', 20);
            } else if(settings['position']=='top-left'||settings['position']=='bottom-left') {
                $('.'+settings['position']).css('left', 20);
            }
        }

        // Can it be displayed?
        if(display) {
            // Building and inserting sticky note
            $('.'+settings['position']).prepend('<div class="sticky border-' + settings['position'] + '" id="' + uniqID + '"></div>');
            $('#' + uniqID).append('<img src="close.png" class="sticky-close" rel="' + uniqID + '" title="Close" />');
            $('#' + uniqID).append('<div class="sticky-note" rel="' + uniqID + '">' + note + '</div>');

            // Smoother animation
            var height = $('#' + uniqID).height();
            $('#' + uniqID).css('height', height);

            $('#' + uniqID).slideDown(settings['speed']);
            display = true;
        }

        // Listeners
        $('.sticky').ready(function() {
            // If 'autoclose' is enabled, set a timer to close the sticky
            if(settings['autoclose']) {
                $('#' + uniqID).delay(settings['autoclose']).fadeOut(settings['speed']);
            }
        });
        // Closing a sticky
        $('.sticky-close').click(function() {
            $('#' + $(this).attr('rel')).dequeue().fadeOut(settings['speed']);
        });

        // Callback data
        var response = {
            'id' : uniqID,
            'duplicate' : duplicate,
            'displayed' : display
        }

        // Callback function?
        if(callback) {
            callback(response);
        } else {
            return (response);
        }
    }
})(jQuery);


