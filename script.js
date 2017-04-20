var i = 0;
var newSearchResults = '';
$('.hvr-pulse-grow').click(function () {
	var resultSearch = $('#txt').val();

	//This will ignore case sensitivity of the test
	$.expr[":"].contains = $.expr.createPseudo(function (arg) {
		return function (elem) {
			return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
		};
	});

	$('a').css("background-color", "").attr('counter', '');

	if (!resultSearch) {
		if ($('p').length == 0) {
			$('.search').append('<p>Это поиск и в него надо что-то вводить</p>');
		} else {
			$("p").text('Это поиск и в него надо что-то вводить!');
		}
	} else if ($("a:contains(" + resultSearch + ")").length == 0) {
		if ($('p').length == 0) {
			$('.search').append('<p>Сорян, но по запросу "' + resultSearch + '" ничего не найдено :(</p>');
		} else {
			$("p").text('Сорян, но по запросу "' + resultSearch + '" ничего не найдено :(');
		}
	} else {

		var counter = $("a:contains(" + resultSearch + ")").css("background-color", "yellow").attr('counter', i++);

		//	var oldSearchResults = counter.text(); 

		if (counter.text() != newSearchResults) {
			i = 0;
		}

		newSearchResults = counter.text();

		if (i >= 2) {
			counter.css("background-color", "red");
		}

		$("p").remove();
	}

});








$('.shuffle').click(function (event) {

	event.preventDefault;

	$(".col-1-3 ul").append($(".col-1-3 ul li").get().sort(function (a, b) {
		return Math.random() - 0.5;
	}));

	$(".col-2-3 ul").append($(".col-2-3 ul li").get().sort(function (a, b) {
		return Math.random() - 0.5;
	}));


	$(".col-3-3 ul").append($(".col-3-3 ul li").get().sort(function (a, b) {
		return Math.random() - 0.5;
	}));




});

/// Нагуглил норм способы

/*
	(function($){
	 
	    $.fn.shuffle = function() {
	 
	        var allElems = this.get(),
	            getRandom = function(max) {
	                return Math.floor(Math.random() * max);
	            },
	            shuffled = $.map(allElems, function(){
	                var random = getRandom(allElems.length),
	                    randEl = $(allElems[random]).clone(true)[0];
	                allElems.splice(random, 1);
	                return randEl;
	           });
	 
	        this.each(function(i){
	            $(this).replaceWith($(shuffled[i]));
	        });
	 
	        return $(shuffled);
	 
	    };
	 
	})(jQuery);
		
		$('li').shuffle();
	*/





/*
$('.shuffle').click(function() {
  $("div.list").randomize("ul li", "ul li a");
});

(function($) {
  
  $.fn.randomize = function(tree, childElem) {
    return this.each(function() {
      var $this = $(this);
      if (tree) $this = $(this).find(tree);
      var unsortedElems = $this.children(childElem);
      var elems = unsortedElems.clone();
      
      elems.sort(function() { return (Math.round(Math.random())-0.5); });  

      for(var i=0; i < elems.length; i++)
        unsortedElems.eq(i).replaceWith(elems[i]);
    });    
  };

})(jQuery);
*/