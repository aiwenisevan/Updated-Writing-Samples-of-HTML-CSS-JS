// JavaScript Document
window.onload=function(){
    var canvas=document.getElementById("walk");
    
    var context=canvas.getContext('2d');
    drawNotChange(context);
	
	

   /* context.fillStyle='blue';
    context.beginPath();
    context.arc(350,150,30,0,2*Math.PI,true);
    context.closePath();
    context.fill();*/
    setInterval(function(){
        run(context);
    }, 50);
};
var time=0;



function run(cxt){
	   
   var clearScreen = function() {
 	cxt.fillStyle = "hsla(0,0%,75%,0.2)";
 	 cxt.fillRect(0,0,500,500);
	};
	
    drawNotChange(cxt);
	clearScreen();
    cxt.save();
	
    cxt.translate(250,time*Math.random());
    cxt.rotate(time*2*Math.PI/180);
	
    cxt.fillStyle='blue';
    cxt.beginPath();
    cxt.arc(250,time*Math.random(),30,0,2*Math.PI,false);
    cxt.closePath();
    cxt.fill();
    cxt.restore();
	
	drawNotChange(cxt);
	clearScreen();
    cxt.save();
	
    cxt.translate(0,300);
    cxt.rotate(time*8*Math.PI/180);
	
    cxt.fillStyle='pink';
    cxt.beginPath();
    cxt.arc(200,150,30,0,2*Math.PI,false);
    cxt.closePath();
    cxt.fill();
    cxt.restore();
	
	drawNotChange(cxt);
	
    cxt.save();
    cxt.translate(150,150);
    cxt.rotate(time*4*Math.PI/180);
	cxt.clearRect(100,0,120,120);
    cxt.fillStyle='yellow';
    cxt.beginPath();
    cxt.arc(150,100,30,0,2*Math.PI,false);
    cxt.closePath();
    cxt.fill();
    cxt.restore();
	
    time+=1;
}



//绘制不变因素
function drawNotChange(context){
    context.fillStyle='red';
    context.beginPath();
	
    context.arc(250,250,30,0,2*Math.PI,true);
	
    context.closePath();
    context.fill();
    /*context.beginPath();
    context.arc(250,250,150,0,2*Math.PI,true);
    context.closePath();
	
    context.stroke();*/
	
}

