$(document).ready( function() {
	$('.carousel').flickity({
	  // options
	  cellAlign: 'left',
	  contain: true,
	  freeScroll: true,
	  autoPlay: 7000
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

	/// MAILER

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