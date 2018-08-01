/*the lines below are to prevent false errors from jslint or eslint in Brackets*/

/*eslint-disable no-unused-vars*/
/*global $, document, alert*/
/*jshint browser: true, unused: false, no-unused-vars: true*/
/*jslint devel: true, node: true, vars: true*/
"use strict"; // required by jslint

/*
File Name: week6.js
Date: 05/13/18
Programmer: Thomas Nixon
*/

// The line below is to test your link to the .js file. 
//   Please comment it out (put // in front).
//alert("the link to the .js file is correct!");
$(document).ready(function () {
	

    
    var firstNumber;
    var secondNumber;
    var answer;
    var button;
    
    $("#clear").on("click", function () {

        $("#a").val(""); 
        $("#b").val(""); 
        $("#c").val(""); 
    
    });
    
    $(".operator").on("click", function () {
	
     var button = $(this).val(); //error if I indent further 
	
       firstNumber = $("#a").val();
        firstNumber = parseInt(firstNumber, 10);

        secondNumber = $("#b").val();
        secondNumber = parseInt(secondNumber, 10);
	
	if (isNaN(firstNumber) || isNaN(secondNumber)) {
	alert("Please enter numbers");
	return;
	} //error if I indent this further
	

        if (button === "Add") {
            answer = firstNumber + secondNumber;
        }

        else if (button === "Subtract") {
            answer = firstNumber - secondNumber;
        }

        else if (button === "Multiply") {
            answer = firstNumber * secondNumber;
        }

        else if (button === "Divide") {
            answer = firstNumber / secondNumber;
        }

        $("#c").val(answer);
      
    }); 

});

// ================================================================================