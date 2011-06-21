/*!
 * jQuery Event Debug Plugin v0.1
 * http://www.istvan-antal.ro/jquery-event-debug.html
 *
 * Copyright 2011, Antal István Miklós
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.istvan-antal.ro/open-source.html
 *
 */
(function () {
    var _trigger = jQuery.event.trigger,
    _handle = jQuery.event.handle;
    
    jQuery.event.trigger = function( event, data, elem, onlyHandlers ) {
        console.log('Event:',  event.type);
        if (event.target) {
            console.log('Target:',  event.target);
        }
        _trigger.apply(this, arguments);
    };
    
    jQuery.event.handle = function( event ) {
        console.log('Event:',  event.type);
        if (event.target) {
            console.log('Target:',  event.target);
        }
        _handle.apply(this, arguments);
    };
}());