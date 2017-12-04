$(document).ready( function() {
	var elem = document.querySelector('.carousel');
	
	var flkty = new Flickity( elem, {
	  cellAlign: 'left',
	  contain: true,
	  freeScroll: true,
	  autoPlay: 7000
	});

	var obj1 = {};
	obj1.image = "images/group4.svg";
	obj1.title = 'Денежные переводы';

	var obj2 = {};
	obj2.image = "images/shape.svg"
	obj2.title = 'Безопасность операций	';

	var obj3 = {};
	obj3.image = "images/group.svg";
	obj3.title = 'Заказ еды и цветов';
	
	var obj4 = {};
	obj4.image = "images/shape1.svg";
	obj4.title = 'Кнопки - в прошлом';

	var obj5 = {};
	obj5.image = "images/group1.svg";
	obj5.title = 'Лучший помощник';

	var triangleImg = {};
	triangleImg.image = 'images/triangle.svg';

	var triangleBottom = {};
	triangleBottom.image = 'images/triangle_bottom.svg';

	var icons = [ obj1, obj2, obj3, obj4, obj5 	];

	function listener() {
		if (flkty.selectedIndex == 0){
			$('.flickity-page-dots img').removeClass();
			$('.flickity-page-dots img').addClass('dotTriangleBot');
			$('.flickity-page-dots img').addClass('moveTo0');
		}
		else if (flkty.selectedIndex == 1){
			$('.flickity-page-dots img').removeClass();
			$('.flickity-page-dots img').addClass('dotTriangleBot');
			$('.flickity-page-dots img').addClass('moveTo1');
		}
		else if (flkty.selectedIndex == 2){
			$('.flickity-page-dots img').removeClass();
			$('.flickity-page-dots img').addClass('dotTriangleBot');
			$('.flickity-page-dots img').addClass('moveTo2');
		}
		else if (flkty.selectedIndex == 3){
			$('.flickity-page-dots img').removeClass();
			$('.flickity-page-dots img').addClass('dotTriangleBot');
			$('.flickity-page-dots img').addClass('moveTo3');
		}
		else if (flkty.selectedIndex == 4){
			$('.flickity-page-dots img').removeClass();
			$('.flickity-page-dots img').addClass('dotTriangleBot');
			$('.flickity-page-dots img').addClass('moveTo4');
		}
	  }
	  
	$('.carousel').on( 'select.flickity', listener );

	// $("li p").on('click', function(){
	// 	flkty.select( $('.carousel').selectedIndex, true, true );
	// })

	$('.flickity-page-dots').append('<hr class="dotsLine">');
	$('.flickity-page-dots').append('<img src='+triangleBottom.image+' class="dotTriangleBot"/>');

	$( "li" ).each(function (index, item) {
		$(item).append('<p> ' + icons[index].title + '</p>')
		$(item).addClass('li-text');
		$.ajax({
			type: "GET",
			url : icons[index].image,
			dataType: "html",
			context: this,
			success: function (data) {
				$(this).append(data);
			} 
		});
		if(index==2){
			$(item).attr('id', 'orderSvg');
		}
		else {
			$(item).attr('id', 'anotherSvg');
		}
	});	

	var titles = ['Регистрация', 'Создание пин-кода', 'Смена пин-кода', 'Привязка карточки', 'Кэшин', 'Кэшаут', 'История транзакций', 'Что умеет делать бот', 
				'Перевод через бота', 'Перевод через чат', 'Сходим', 'Погода', 'Энциклопедия', 'Переводчик', 'Платежи', 'Сбор денег', 'Помощь'];
	var videos = ["https://www.youtube.com/embed/QpQxMogRkSQ", "https://youtube.com/embed/P7XHdqN0Ndc", "https://youtube.com/embed/ooFOh8ez7WE", 
				"https://www.youtube.com/embed/ZDZgD9IbsEs", "https://www.youtube.com/embed/S23GR7wmINY", "https://www.youtube.com/embed/jAQuxjJGXwQ",
				"https://www.youtube.com/embed/IwleoMIAS7s", "https://www.youtube.com/embed/4CxgrgLC8fg", "https://www.youtube.com/embed/TROEriL5koI", 
				"https://www.youtube.com/embed/j43Ks-hzRCY", "https://www.youtube.com/embed/XJ_PmH2W2RQ", "https://www.youtube.com/embed/lY2G4UZf__E",
				"https://www.youtube.com/embed/kkfZhDpX0Ys", "https://www.youtube.com/embed/J7Acu43nIQs", "https://www.youtube.com/embed/UOlH0MYGEzo",
				"https://www.youtube.com/embed/47wbnh2Q9O8", "https://www.youtube.com/embed/vfinwx7gC1E"];

	var activeVideoInd;
	
	for (var i=0; i<17; i++){
		activeVideoInd = 0;
		var $input = $('<div class="buttons" data-value='+i+'>' + titles[i] + '</div>');
		if(i == 0) {
			$input.addClass('activeVideo');
		}
		$input.appendTo($(".videoTitles"));
	}
	
	$(".buttons").on('click', function (e) {
		for (var i=0; i<17; i++){
			if ($('.buttons').hasClass('activeVideo')){
				$('.buttons').removeClass('activeVideo');
			}
		}
		activeVideoInd = $(this).data('value');
		var $video = $('<iframe width="824" height="416" src='+videos[$(this).data('value')]+' frameborder="0" autoplay="true" allowfullscreen></iframe>');
		$(".videos").html($video);
		if(activeVideoInd!=undefined && activeVideoInd==$(this).data('value')){
			$(this).toggleClass('activeVideo');
		}
	})

	$(window).scroll(function(){
		var scrolltop = $(window).scrollTop();
		var windowWidth = $(window).width();
		if (scrolltop > 700 && windowWidth < 426){	
			$(".fixed-social-links").fadeOut("slow");	
		}
		else{
			$(".fixed-social-links").fadeIn("slow");		
		}
	});

	$("input").tooltip('disable'); 

	$("form").submit(function(event){
		event.preventDefault();	
		var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var text = document.getElementById("content").value;

        $.ajax({
            type: "POST",
            url: 'mail.php',
            dataType: "json",
            data: "name="+name+"&text="+text+"&email="+email+"&phone="+phone
        }).always(function() {
               	document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("phone").value = "";
                document.getElementById("content").value = "";
           });

        $("h5").css("visibility", "visible");

        function hide(){
        	$("h5").css("visibility", "hidden").fadeOut("slow");
        }
		setTimeout(hide,3000);
	});
});
