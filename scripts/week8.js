

/*eslint-disable no-unused-vars*/
/*global $, document, alert, window*/
/*jshint browser: true, unused: false, no-unused-vars: true*/
/*jslint devel: true, node: true, vars: true*/
"use strict"; // required by jslint

/*
Programmer: Thomas Nixon
*/



$(document).ready(function () {
	
	//alert("jQuery is running");
	
	var imageFolder = "images/";
	
	var imageSource;
	
	var photoCaption;
	
	var thumbNames = ["family_small.jpg", "mom_small.jpg", "thomasandsons_small.jpg", "tommyAndSabby_small.jpg", "Hopetown_Falls_small.jpg", "Jonathans_Run_small.jpg", "Manavgat_small.jpg", "Niagara_Falls_small.jpg"];
	
	var current;
	
	var next;
	
	$(".cross").hide();
	
	$(".menu").hide();
	
	$(".hamburger").show();
	
	$("#bigPhoto").attr("src", imageFolder + "Agua_Azul.jpg");
	
	$("#bigPhoto").hide();
	
	//$.each(thumbNames, function (i) {
  //  alert(thumbNames[i]);
//});
	
	$("img.thumbnail-inner").each(function(i) { 
		
		(this).src = imageFolder + thumbNames[i];
		
	});
	
	$("img.thumbnail-inner").on("click", function(i) { 
		
		//alert("Nice click on that image!");
		
		$("img").css("opacity", "1");
		
		$(this).css("opacity",".5");
		
		var imageSource = $(this).attr("src");
		
		//alert(imageSource);
		
		imageSource = imageSource.replace("_small", "");
		
		$("#bigPhoto").attr("src", imageSource);
		
		photoCaption = imageSource.replace(".jpg", "");
		
		photoCaption = photoCaption.replace("images/", "");
		
		photoCaption = photoCaption.replace("_", " ");
		
		photoCaption = photoCaption.replace("_", " ");
        
		$("#caption").text(photoCaption);
		
		$("#bigPhoto").show();
		
	});
	$(".menu").hide();
	$(".hamburger").on("click", function() {
		$(".menu").slideToggle(1000);
		$(".hamburger").hide();
		$(".cross").show();

	});
    
	$(".cross").on("click", function() {
		$(".menu").slideToggle(2000);
		$(".cross").hide();
		$(".hamburger").show();
	});
	
    $("#lightSlider").lightSlider({
		item:3,
		auto:true,
		loop:true,
		speed:2000,
		pause:4000,
		controls: true,
	}); 

	
});
