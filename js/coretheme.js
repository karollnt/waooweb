"use strict"
/**
 * * * * * * * * * * * * * * * * * * * * *  
 * * CORE THEME SCRIPT * * * * * * * * * *
 * * TABLE OF CONTENTS * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * *
 * 1. REVIEWS
 * 2. SCREENS
 * 3. CONTACT FORM
 * 4. RESIZE FUNCTION
 * 5. SLIDER
 * 6. MAIN MENU CLICK
 * 7. SCROLL FUNCTION / FOLLOW MENU         
 * 8. BACKGROUND
 * * * * * * * * * * * * * * * * * * * * */

$(document).ready(function() {

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
	 *
	 * 1. REVIEWS
	 * 
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
	var maxHeightReviews = -1;
	var revsTimer;

	$('.reviewCloud').each(function() {
		maxHeightReviews = maxHeightReviews > $(this).height() ? maxHeightReviews : $(this).height();
	});
	$(".reviewsWrap").height(maxHeightReviews + 250 );


	$(".review").eq(0).addClass("reviewActive");

	//click right
	$(".revNaviRight").click(function() {
		rightClickReview();
		clearStartReviewsInterval(true);
	});

	//click left
	$(".revNaviLeft").click(function() {
		leftClickReview();
		clearStartReviewsInterval(true);
	});
	
	function rightClickReview(){
		var active = $(".reviewActive");
		if (active.next().hasClass("review"))
			active.removeClass("reviewActive").next().addClass("reviewActive");
		else {
			active.removeClass("reviewActive");
			$(".review").eq(0).addClass("reviewActive");
		}	
	}

	function leftClickReview(){
		var active = $(".reviewActive");
		if (active.prev().hasClass("review"))
			active.removeClass("reviewActive").prev().addClass("reviewActive");
		else {
			active.removeClass("reviewActive");
			$(".review").last().addClass("reviewActive");
		}		
	}

	//start the animation
	function clearStartReviewsInterval(startAnim) {
		clearInterval(revsTimer);
		//$("#reviewsTimerBar").stop().css('left', '-100%');

		if (startAnim)
			//$("#reviewsTimerBar").animate({left : '0'}, 5000);

		revsTimer = setInterval(function() {
			//$("#reviewsTimerBar").stop().css('left', '-100%');
			//$("#reviewsTimerBar").animate({left : '0'}, 5000);
			rightClickReview();
		}, 5000);		
	}

	clearStartReviewsInterval(true);

	$(".review").hover(function() {
		clearInterval(revsTimer);
		//$("#reviewsTimerBar").stop().css('left', '-100%');
	}, function() {
		clearStartReviewsInterval(true);	
	});
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * /

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
	 *
	 * 2. SCREENS
	 * 
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
	$(".rightScreens").click(function() {
		var activeScreen = $(".screen-item-active");

		if (activeScreen.next().hasClass("screen-item")) {
			activeScreen.removeClass("screen-item-active").next().addClass("screen-item-active");
			if ((activeScreen.next().next().hasClass("screen-item") && activeScreen.prev().hasClass('screen-item')) || $(window).width() < 1200  )
				$(".screensPanel").css('left',  (-(activeScreen.width() + 60) * activeScreen.index())+'px');
		}
		else {
			activeScreen.removeClass("screen-item-active");
			$(".screen-item").eq(0).addClass("screen-item-active");
			$(".screensPanel").css('left', '0');
		}
	});

	$(".leftScreens").click(function() {
		var activeScreen = $(".screen-item-active");

		if (activeScreen.prev().hasClass("screen-item")) {
			activeScreen.removeClass("screen-item-active").prev().addClass("screen-item-active");
			if ((activeScreen.prev().prev().hasClass("screen-item")  && activeScreen.next().hasClass('screen-item')) || $(window).width() < 1200 )
				$(".screensPanel").css('left', (-(activeScreen.width() + 60) * (activeScreen.index()-2))+'px');

			console.log(((activeScreen.width() + 60) * activeScreen.index()));
		}
		else {
			activeScreen.removeClass("screen-item-active");
			$(".screen-item").last().addClass("screen-item-active");

			if ( $(window).width() < 1200 )
				var lenFactor = 2
			else
				var lenFactor = 3;
			$(".screensPanel").css('left', "-" + (($(".screen-item").length-lenFactor) * (activeScreen.width() + 60) + "px"));
		}
	});

	if ($(window).width() < 768) {
		$(".screen-item").width($(".screensViewport").width());
	} 
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
	 *
	 * 3. CONTACT FORM  
	 * 
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
	$( "#sendmail" ).on( "submit", function( event ) {
		event.preventDefault();
		$(".fa-form-wait").css('display', 'inline-block');

		$.ajax( {
			type: "POST",
			url: $( "#sendmail" ).attr( 'action' ),
			data: $( "#sendmail" ).serialize(),
			success: function( response ) {
				var rpl = JSON.parse(response);

				$(".fa-form-wait").css('display', 'none');

				if (rpl.type == "error")
					$("#formSubmitMessage").html('<span style="color: #AA0000;"><i class="fa fa-exclamation-circle"></i> ' + rpl.text + '</span>');
				else {
					$("#formSubmitMessage").html('<span style="color: #40A6A6;"><i class="fa fa-check-circle"></i> ' + rpl.text + '</span>');
					$("#sendmail").slideUp();
				}
			}
		});
	});

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
	 *
	 * 4. RESIZE 
	 * 
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
	var doit;
	window.onresize = function(){
	  clearTimeout(doit);
	  doit = setTimeout(resizedw, 300);
	};

	function resizedw() {
		//reviews
		$('.reviewCloud').each(function() {
			maxHeightReviews = maxHeightReviews > $(this).height() ? maxHeightReviews : $(this).height();
		});
		$(".reviewsWrap").height(maxHeightReviews + 250 );

		//screens
		if ($(window).width() < 768) {
			$(".screen-item").width($(".screensViewport").width());
		} else {
			$(".screen-item").width(260);
		}
		$(".screen-item-active").removeClass("screen-item-active");
		$(".screen-item").eq(0).addClass("screen-item-active");
		$(".screensPanel").css('left', '0');

		//slider
		$(".sliderWrap img").each(function(){
			var dis = $("this");

			dis.css('margin-left', "-" + (dis.width()/2) + "px");
		});
	};

	$("a[data-gal^='prettyPhoto']").prettyPhoto({theme: 'dark_rounded', social_tools: '', hook: 'data-gal'});

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
});

$(window).load(function() {

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
	 *
	 * 5. SLIDER 
	 * 
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
	$(".sliderWrap img").each(function(){
		var dis = $(this);
		dis.css('margin-left', "-" + (dis.width()/2) + "px");
		$(".sliderButtons").append("<div class='sliderButton'></div>")
	});

	$(".sliderWrap img").eq(0).addClass("sliderActive");
	$(".sliderButton").eq(0).addClass("sliderButtonActive")

	$(".sliderButton").click(function() {
		if ($(this).hasClass('sliderButtonActive'))
			return;

		var ind = $(this).index();
		$(".sliderActive").removeClass("sliderActive");
		$(".sliderWrap img").eq(ind).addClass("sliderActive");

		$('.sliderButtonActive').removeClass('sliderButtonActive');
		$(this).addClass('sliderButtonActive');

		clearInterval(sliderTimer);
		sliderTimer = setInterval(rightSliderMove, 6000);
	});

	function rightSliderMove() {
		var activeSlider = $(".sliderActive");

		if (activeSlider.next().hasClass("sliderImg")) 
			activeSlider.removeClass("sliderActive").next().addClass("sliderActive");
		else {
			activeSlider.removeClass("sliderActive");
			$(".sliderWrap img").eq(0).addClass("sliderActive");
		}

		$('.sliderButtonActive').removeClass('sliderButtonActive');
		$(".sliderButton").eq($(".sliderActive").index()).addClass('sliderButtonActive');
	};

	function leftSliderMove() {
		var activeSlider = $(".sliderActive");

		if (activeSlider.prev().hasClass("sliderImg")) 
			activeSlider.removeClass("sliderActive").prev().addClass("sliderActive");
		else {
			activeSlider.removeClass("sliderActive");
			$(".sliderWrap img").last().addClass("sliderActive");
		}
	};

	var sliderTimer = setInterval(rightSliderMove, 6000);	

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
	 *
	 * 6. MAIN MENU CLICK
	 * 
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
	$( ".mainMenu" ).clone().prependTo( "#followMenu" );
	var topMenuHeight = 0;
	$(".mainMenu a, .headerButton").click(function(e) {
		e.preventDefault();
		var target = $(this).attr("href");
		//alert();

	    $('html,body').animate({
	         scrollTop: ($(target).offset().top - topMenuHeight)
	    }, 800);
	});

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
	 *
	 * 7. SCROLL FUNCTION / FOLLOW MENU
	 * 
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	var downloads = $(".downloads span"), dlNr = parseInt(downloads.html().replace(",", "")), nrAnim = false;
	downloads.html("0");

	var folMenu = $("#followMenu");
	var resMenuToggle = $("#responsiveMenuToggle");
	var lastId,
	    topMenu = $("#followMenu .mainMenu"),
	    topMenuHeight = 70,
	    // All list items
	    menuItems = topMenu.find("a"),
	    headerHeight = $("#topContainer").height(),
	    // Anchors corresponding to menu items
	    scrollItems = menuItems.map(function(){
	      var item = $($(this).attr("href"));
	      if (item.length) { return item; }
	    });


	$(window).scroll(function() {
	   // Get container scroll position
	   var fromTop = $(this).scrollTop() + topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top <= (fromTop+5))
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("menuActive")
	         .end().filter("[href=#"+id+"]").parent().addClass("menuActive");
	   }      

		if (headerHeight !== 0 && ($(window).scrollTop()+80) > headerHeight) {
			if (!folMenu.hasClass("fmshown")) {
				folMenu.addClass("fmshown");
				//folMenu.stop().fadeIn(300); 
			}

		}
		else {
			if (folMenu.hasClass("fmshown")) {
				folMenu.removeClass("fmshown");
				//folMenu.stop().fadeOut(300);
			}
		}

		//animate numbers
		animateNumbers();
	});

	resMenuToggle.click(function(){
		if (!folMenu.hasClass("fmToggled")) {
			folMenu.addClass("fmToggled");
			//folMenu.stop().fadeIn(300); 
		} else if (folMenu.hasClass("fmToggled")) {
			folMenu.removeClass("fmToggled");
			//folMenu.stop().fadeOut(300);
		}
	});

	$("a", folMenu).click(function() {
		folMenu.removeClass("fmToggled");
	})

	//add menu on refresh
	if (headerHeight !== 0 && ($(window).scrollTop()+80) > headerHeight) {
			folMenu.addClass("fmshown");
	}
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	animateNumbers();

	//animate downloads numbers
	function animateNumbers() {
		if (nrAnim)
			return;
		if (isElementInViewport(downloads)) {
			nrAnim = true;
			$({someValue: 0}).animate({someValue: dlNr}, {
				duration: 3000,
				step: function() {
					downloads.text(Math.round(this.someValue).toLocaleString('en'));
				},
				complete:function(){
					downloads.text(Math.round(this.someValue).toLocaleString('en'));
				}
			});
		} 
	}
});



/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 *
 * 8. BACKGROUND
 * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var header = document.getElementById("topContainer"), xPercent, yPercent;
var wireframe = document.querySelector('.wireframe1');
var wireframe2 = document.querySelector('.wireframe2');
var w = window.innerWidth;
var h = window.innerHeight;
var mouseX = 0, mouseY = 0;
var xp = 0, yp = 0;

//if (mozRequestAnimationFrame);

header.onmousemove = function(event){
	mouseX = event.clientX;
	mouseY = event.clientY;
}


function bgStep(timestamp) {
    xp += (mouseX - xp) / 6;
    yp += (mouseY - yp) / 6;

    xPercent = (Math.round((xp / w) * 300) - 150);
    yPercent = (Math.round((yp / wireframe.clientHeight) * 300) - 150);
    if (xPercent > -10 && xPercent < 10)
    	xPercent= 1;
    if (yPercent > -10 && yPercent < 10)
    	yPercent= 1;
    //console.log(xPercent);

	wireframe.style.transform = "rotateY("+xPercent/10+"deg) rotateX("+yPercent/10+"deg) scale(1.2)";
	//wireframe2.style.transform = "rotateY("+-xPercent+"deg) rotateX("+-yPercent+"deg)";

    window.requestAnimationFrame(bgStep);
}

window.requestAnimationFrame(bgStep);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

//check if eleement is in viewport
function isElementInViewport (el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

