(function($, undefined){
    jQuery.fn.konami = function(callback, code){
        if( code == undefined ){
            code = '38,38,40,40,37,39,37,39,66,65';    
        }
        code = code.replace( /\s+/, '' ).split(',');
        return $(this).each(function(){
            var index = 0;
            $(this).keydown(function(e){
                if( code[ index++ ] == e.keyCode ){
                    if( code.length == index ){
                        index = 0;
                        callback(e);    
                    }
                }else{
                    index = 0;
                }
            }, true);
        });
    }
})(jQuery);

