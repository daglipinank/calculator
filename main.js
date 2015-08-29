'use strict';
$(document).ready(function (){
	$('.result').text(0);
	var $text =$('.result');
	var $operator = '';
	var $num1 = 0;
	var $num2 = 0;
	var $result=0;
	$('.clear').click(function(){
		$num1=0;
		$num2=0;
		$result=0;
		$text.text(0);
	});
	$('.num').click(function(){
		var $number = $(this).text();
		console.log("number:typed" + $number);
		$text.text($text.text()+$number+"");
		
	});
	$('.op').click(function(){
		if(!$num1) {
			$num1 = parseFloat($text.text());
			console.log("num1:saved"+$num1)
			$operator = $(this).text();
			console.log("operator:saved"+$operator);
			$text.text(0);
		} else if($num1) {
			$num2 = parseFloat($text.text());
			console.log("num2:saved" + $num2);
			$text.text(0);
		} else {
			$text.text(0);
		}
	});
	$('.decimal').click(function (){
	    if($text.text().indexOf('.')<0)
			$text.text($text.text()+".");
		else
			$text.text($text.text());
	});

	$('.ans').click(function(){
		if(!$num2) {
			$num2 = parseFloat($text.text());
			console.log("num2:saved" + $num2);
			$text.text(0);
		} 	
		if(!$operator) {
			$operator = $(this).text();
			console.log("operator:saved" + $operator);
			$text.text(0);
		} 	
		console.log($operator);
		switch($operator){
			case '+':{ $result = parseFloat($num1) + parseFloat($num2); break; }
			case '-':{ $result = parseFloat($num1) - parseFloat($num2); break; }
			case '*':{ $result = parseFloat($num1) * parseFloat($num2); break; }
			case '/':{ $result = parseFloat($num1) / parseFloat($num2); break; }
			case '%':{ $result = parseFloat($num2) /100; break; }
			case '+/-':{ $result = 0 - parseFloat($num2); break; }
			case 'x^2':{ $result = Math.pow(parseFloat($num2),2) ; break; }
			case 'x^3':{ $result = Math.pow(parseFloat($num2),3) ; break; }
			case 'sin':{ $result = Math.sin(parseFloat($num2)) ; break; }
			case 'cos':{ $result = Math.cos(parseFloat($num2)) ; break; }
			case 'tan':{ $result = Math.tan(parseFloat($num2)) ; break; }
			case 'sqrt':{ $result = Math.sqrt(parseFloat($num2)); break; }
			case 'cbrt':{ $result = Math.cbrt(parseFloat($num2)) ; break; }
			case 'log':{ $result = Math.log(parseFloat($num2)); break; }
			case '': {console.log("you fail!!!!");}
		}
		$text.text(($result));
	});
	$('.newTheme').click(function (){
		$('.col').removeClass( "colo" ).addClass( "col1" );
		$('.colo').removeClass( "colo" ).addClass( "colo1" );
	});
});
