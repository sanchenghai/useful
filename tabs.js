/*
 * 	Sparker5 Tabs01
 *	written by Sparker5 team
 *	http://sparker5.com
 *	build for zark only
 *
 *  html example:
 *      <a href="c1" fx="s5_tabs01" ></a>
 *      <a href="c2" fx="s5_tabs01" ></a>
 *
 *      <div id="c1" >
 *      </div>
 *      <div id="c2" class="hidden" >
 *      </div>
 *
 *  js example:
 *      $('a[fx=s5_tabs01]').s5_tabs01();
 *
 */
 

(function($) {
	$.fn.s5_tabs01 = function(options){
	  
		var defaults = {			
		}; 
		
		var options = $.extend(defaults, options);  

		this.each(function() {  
			var obj = $(this);

            obj.click(function(){
                $(this).blur();
                $('a[fx=s5_tabs01]').each(function(){
                    $($(this).attr('href')).hide();
                    $(this).addClass('unchosed').removeClass('chosed');
                });
                $($(this).attr('href')).show();
                $(this).addClass('chosed').removeClass('unchosed');
                return false;
            });

		});
	};
})(jQuery);
