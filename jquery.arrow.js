(function($){
 $.fn.addArrow = function(options) {
	
	var  
	  defaults = {  
		direction: 'right',  
		color: 'black',  
		isBefore: true,
		isThick: true		
	  },  settings = $.extend({}, defaults, options); 
	
	var thisArrow = "";

	if (settings.isThick == true) {
		thisArrow = "&#9658;";
		if (settings.direction == 'left')  {thisArrow = "&#9668;";}
		if (settings.direction == 'right') {thisArrow = "&#9658;";}
		if (settings.direction == 'up')    {thisArrow = "&#9650;";}
		if (settings.direction == 'down')  {thisArrow = "&#9660;";}
	} else {
		thisArrow = "&#8594;";
		if (settings.direction == 'left')  {thisArrow = "&#8592;";}
		if (settings.direction == 'right') {thisArrow = "&#8594;";}
		if (settings.direction == 'up')    {thisArrow = "&#8593;";}
		if (settings.direction == 'down')  {thisArrow = "&#8595;";}
	}

    return this.each(function() {
       if (settings.isBefore == true) {
		$(this).prepend('<span class="arrow" style="color:'+settings.color+'">' + thisArrow + '</span>');
	   } else {
		$(this).append('<span class="arrow" style="color:'+settings.color+'">' + thisArrow + '</span>');
	   }
    });
	
 };
})(jQuery);

(function($){
 $.fn.removeArrow = function() {
	
    return this.each(function() {
		$(this).children().css('class', 'arrow').remove();
    });
	
 };
})(jQuery);