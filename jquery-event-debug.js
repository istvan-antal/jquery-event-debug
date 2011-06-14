(function () {
    var _trigger = jQuery.event.trigger;
    
    jQuery.event.trigger = function( event, data, elem, onlyHandlers ) {
        console.log('Event:',  event);
        _trigger.apply(jQuery.event, arguments);
    };
}());