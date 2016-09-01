jQuery.fn = jQuery.prototype = {
    init: function( selector, context ) {
        var match, elem, ret, doc;
 
        // Handle $(""), $(null), or $(undefined)
        if ( !selector ) {
            return this;
        }
 
        // Handle $(DOMElement) 
        if ( selector.nodeType ) {
            this.context = this[0] = selector;
            this.length = 1;
            return this;
        }
         
        // The body element only exists once, optimize finding it
        if ( selector === "body" && !context ) {
            this.context = document;
            this[0] = document.body;
            this.selector = "body";
            this.length = 1;
            return this;
        }
         
        //... ...
    },
    get: function( num ) {
        return num == null ?
            // Return a 'clean' array
            this.toArray() :
            // Return just the object
            ( num < 0 ? this.slice(num)[ 0 ] : this[ num ] );
    }
};