(function($, undefined){
    jQuery.fn.konami = function(callback, code){
        if( code == undefined ){
            code = '38,38,40,40,37,39,37,39,66,65';    
        }
        return $(this).each(function(){
                var keys = [];
                $(this).keydown(function(e){
                    keys.push( e.keyCode );
                    if( keys.toString().indexOf( code ) >= 0 ){
                        keys = [];
                        callback(e);    
                    }
                    if( keys.toString().length >= code.length ){
                        keys = [];    
                    }
                }, true);
        });
    }
})(jQuery);

