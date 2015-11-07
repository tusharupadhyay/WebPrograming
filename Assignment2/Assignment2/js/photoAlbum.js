$(document).ready(function() {
	
	
	var text1= "Beautiful white flower clicked by amazing photographer in beautiful sunny day.";
	var text2= "Kata beach Phukette.";
	var text3= "Beautiful painting of two peackocks by M.F.Hussein.";
	var text4= "Amazing photograph of fall season in Switzerland.";
	var text5= "Wonderful picture of bird clicked by Brian Clarke Howard.";
	
	var tn_text= Array();
	tn_text.push(text1);
	tn_text.push(text2);
	tn_text.push(text3);
	tn_text.push(text4);
	tn_text.push(text5);
	
	var width =1500;
	var animationSpeed= 1000;
	var pause= 3000;
	var $slider = $('#photos');
		
	var $slide = $slider.find('.slide');
	var currentSlide = 0;
	var tn_array = Array();
	$slide.each(function(){
		
		tn_array.push($(this));
		
	});
	
	changeContent();
	changeBackground("1");
	
	$('#next').click(function(){
		
		if(currentSlide == tn_array.length-1){
			
			var slide = tn_array[currentSlide];
			var next_slide = tn_array[currentSlide-currentSlide];
			
			slide.fadeOut('slow');
			next_slide.fadeIn('slow');
			currentSlide=0;
			changeContent();
			changeBackground(currentSlide+1);
		}
		else{
			var slide = tn_array[currentSlide];
			var next_slide = tn_array[currentSlide+1];
			slide.fadeOut('slow');
			next_slide.fadeIn('slow');
			currentSlide++;
			changeContent();
			changeBackground(currentSlide+1);
			
		}
		
	});


	$('#prev').click(function(){
		
		if(currentSlide == tn_array.length-tn_array.length){
			
			var slide = tn_array[currentSlide];
			var next_slide = tn_array[tn_array.length-1];
			
			slide.fadeOut('slow');
			next_slide.fadeIn('slow');
			currentSlide=tn_array.length-1;
			changeContent();
			changeBackground(currentSlide+1);
		}
		else{
			var slide = tn_array[currentSlide];
			var next_slide = tn_array[currentSlide-1];
			slide.fadeOut('slow');
			next_slide.fadeIn('slow');
			
			currentSlide--;
			changeContent();
			changeBackground(currentSlide+1);
		}
		
	});
	
	$('.buttonPress').click(function(e){
		
		//var btn = e.target.attr("value");
		var val = $(this).attr("value");
		
		//$(this).css()
		changeBackground(val);
		
		var imgShow = tn_array[val-1];
		
		tn_array[currentSlide].fadeOut('slow');
		imgShow.fadeIn('slow');
		currentSlide = val-1;
		changeContent();
		
	});
	
	function changeContent(){
		
		$("#content").text(tn_text[currentSlide]);
	}

	function changeBackground( val){
		
		$(".buttonPress").css('background-color','white');
		$("#numberButtons").find("#"+val).css('background-color','blue');
		
	}
	
});