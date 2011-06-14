(function () {
    var _trigger = jQuery.event.trigger,
        _handle = jQuery.event.handle;
    
    jQuery.event.trigger = function( event, data, elem, onlyHandlers ) {
        console.log('Event:',  event);
        _trigger.apply(jQuery.event, arguments);
    };
    
    jQuery.event.handle = function( event ) {
        console.log('Event:',  event);
        _handle.apply(jQuery.event, arguments);
    };
}());