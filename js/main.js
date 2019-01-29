  var script_url = "https://script.google.com/macros/s/AKfycbzOJwLVemWhBG8a5sW-7o4_TLELTsQyg19nZ966/exec";
    function insert_value() {
        var id1 = $("#id").val();
        var name = $("#name").val();
        var url = script_url + "?callback=ctrlq&name=" + name + "&id=" + name + "&name="+"&action=insert";
        var request = jQuery.ajax({
            crossDomain: true,
            url: url,
            method: "GET",
            dataType: "jsonp"
        });
       
    }
    function ctrlq(e) {
        document.location.href="Unnamed_Project/project.html";
    }





var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("showSlide");
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  timer = setTimeout(showSlides, 5000);
}




var modal = document.getElementById('myModal');
        
var btn = document.getElementById("myBtn");

var btn2 = document.getElementById("myBtn2");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";

    var videoSrc = document.getElementById("youTubeVideo").getAttribute("src");  
    document.getElementById("youTubeVideo").setAttribute("src","");
    document.getElementById("youTubeVideo").setAttribute("src",videoSrc);
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


$(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 90
        }, 600, function(){
        //   window.location.hash = hash;
        });
      } 
    });
  });




//Snear-Slider

(function($,document,window,undefined){

	$.fn.sneakslider = function(config){
		
		this.elements = this.find("img");
		this.center = this.elements.filter(".center").index();

		var that= this,
			config=$.fn.sneakslider.getConfig(config);

		$.fn.sneakslider.setHeight(that);
		$(window).on("resize",function(){$.fn.sneakslider.setHeight(that);});

		var move=$.fn.sneakslider.moveslider;
		$.fn.sneakslider.addNav(that,move,config);

		that.mousemove(function(e){
			$.fn.sneakslider.mouseFollow.call(that,e,this.elements);
		});
		return that;
	}


	$.fn.sneakslider.setHeight = function(that){

		var width=that.width(),
			proportion=parseInt(that.css("max-width"))/parseInt(that.css("max-height"));

			that.css("height",width/proportion);
		console.log(width,proportion);
	}


	$.fn.sneakslider.mouseFollow = function(e,elem){
		var width = $(window).innerWidth();
			height = this.height();
	}


	$.fn.sneakslider.addNav = function(that,f1,settings){
		var leftArrow=$("<div class='navContainer'><div class='"+settings.nav.leftClass+"'></div>").prependTo(that),
			rightArrow=$("<div class='navContainer'><div class='"+settings.nav.rightClass+"'></div>").appendTo(that);
		leftArrow.on("click",function(){f1(that,"left",settings);});
		rightArrow.on("click",function(){f1(that,"right",settings);});
	}


	$.fn.sneakslider.getConfig = function(config){

		var defaultConfig = {
			"duration" : 500,
			"nav" : {
				"leftClass":"leftClass",
				"rightClass":"rightClass"
			}
		}

		if(!(config instanceof Object))
		{
			return $.extend({},defaultConfig,config);
		}
		else
		{
			return $.extend({},defaultConfig);
		}
	}


	$.fn.sneakslider.checkPosition = function(cent,len){
			var left=(cent-1)<0 ? len-1 : cent-1,
			right=(cent+2)>len ? 0 : cent+1,
			prevleft=(left-1)<0 ? len-1 : left-1,
			prevright=(right+2)>len ? 0 : right+1
			return [left,cent,right,prevleft,prevright];
	}

	$.fn.sneakslider.moveslider = function(that,side,config){
		console.log(that);

		var len=that.elements.length;

		if(side==="right")
			that.center= that.center+2>len ? 0 : that.center+1;		
		else if(side==="left")
			that.center= that.center-1<0 ? len-1 : that.center-1;


		var pos=$.fn.sneakslider.checkPosition(that.center,len);
				
		that.elements.removeClass();
		
		that.elements.eq(pos[2]).addClass("right");				
		that.elements.eq(pos[1]).addClass("center");
		that.elements.eq(pos[0]).addClass("left");

	}

	$(window).on("load",function(){
		$(".slider").sneakslider();
	});

})(jQuery,document,window);