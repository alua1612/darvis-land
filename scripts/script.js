$(document).ready( function() {
	$('.carousel').flickity({
	  // options
	  cellAlign: 'left',
	  contain: true,
	  freeScroll: true,
	  autoPlay: 10000
	});

	var obj1 = {};
	obj1.img = "images/group4.svg";
	obj1.title = 'Денежные переводы';

	var obj2 = {};
	obj2.img = "images/shape.svg"
	obj2.title = 'Безопасность операций	';

	var obj3 = {};
	obj3.img = "images/group.svg";
	obj3.title = 'Общение без границ';

	var obj4 = {};
	obj4.img = "images/shape1.svg";
	obj4.title = 'Кнопки - в прошлом';

	var obj5 = {};
	obj5.img = "images/group1.svg";
	obj5.title = 'Лучший помощник';

	var icons = [ obj1, obj2, obj3, obj4, obj5 	];

	$( "li" ).each(function (index) {
		$(this).append('<p> ' + icons[index].title + '</p>')
		// $(this).text(icons[index].title);
		$(this).addClass('li-text');
		$(this).append('<img src=" ' + icons[index].img + '">');
	});	
	
	$(window).scroll(function (event) {
	    var scrolltop = $(window).scrollTop();
		if (scrolltop > 700){
			$(".fixed-social-links").addClass('fixed-social-links-hide');
		}
	});
});