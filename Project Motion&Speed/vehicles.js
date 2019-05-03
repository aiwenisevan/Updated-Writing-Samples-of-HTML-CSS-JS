// JavaScript Document
$(document).ready(function(){
		$("button").click(function(){
			var car1=$('#car1');
			car1.animate({left:'500px',},'fast');
			car1.animate({left:'500px',});
			
			car1.animate({left:'800px',},'1000', 'swing');
			
			
			
			var car2=$('#car2');
			car2.animate({left:'500px'},'fast');
			car2.animate({left:'800px'},'slow');
			
			car2.animate({top:'150px'},'slow');
			car2.animate({top:'150px', left:'1000px'},'slow');
			
			});
			
		});
	