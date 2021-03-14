var red = 'rgb(255, 0, 0)';
            var blue = 'rgb(0, 21, 255)';
            var green =  "rgb(0, 161, 11)";
            var lightblue =  "rgb(0, 204, 255)";
            var brown = "rgb(189, 105, 2)";
    var canvas  = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    // here are the functions{
    var rect = function(x,y,w,h){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    };
    var circle = function(x,y,w,h){
        ctx.beginPath();
        ctx.ellipse(x,y,w,h, 0, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    };
    var triangle = function(x1,y1,x2,y2,x3,y3){
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.lineTo(x3,y3);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        };
    var text = function(txt,x,y){
            ctx.beginPath();
            
            ctx.fillText(txt,x,y);
            ctx.fill();
        };
    var textAlign = function(align){
            ctx.textAlign = align;
        };
    var background = function(color){
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.fillRect(0,0,600,600);
            ctx.fill();
        };
    var fill = function(color){
            ctx.fillStyle = color;
        };
    var stroke = function(color){
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.stroke();
        };
    var quad = function(x1,y1,x2,y2,x3,y3,x4,y4){
            ctx.beginPath();
            ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.lineTo(x3,y3);
        ctx.lineTo(x4,y4);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        };
    var hex = function(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,x9,y9,x10,y10,x11,y11,x12,y12,x13,y13){
            ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.lineTo(x3,y3);
        ctx.lineTo(x4,y4);
        ctx.lineTo(x5,y5);
        ctx.lineTo(x6,y6);
        ctx.lineTo(x7,y7)
        ctx.lineTo(x8,y8);
        ctx.lineTo(x9,y9);
        ctx.lineTo(x10,y10);
        ctx.lineTo(x11,y11);
        ctx.lineTo(x12,y12);
        ctx.lineTo(x13,y13);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
            
        };
    var oct = function(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8){
            ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.lineTo(x3,y3);
        ctx.lineTo(x4,y4);
        ctx.lineTo(x5,y5);
        ctx.lineTo(x6,y6);
        ctx.lineTo(x7,y7);
        ctx.lineTo(x8,y8);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
            
        };
    var line = function(x1,y1,x2,y2){
            ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.closePath();
        ctx.stroke();
        };
    var roundRect = function(x,y,w,h,r){
			ctx.beginPath();
			ctx.moveTo(x + r, y);
			ctx.lineTo(x + w - r, y);
			ctx.quadraticCurveTo(x + w, y, x + w, y + r);
			ctx.lineTo(x + w, y + h - r);
			ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
			ctx.lineTo(x + r, y + h);
			ctx.quadraticCurveTo(x, y + h, x, y + h - r);
			ctx.lineTo(x, y + r);
			ctx.quadraticCurveTo(x, y, x + r, y);
			ctx.closePath();
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
        };
    var clear = function(){
            ctx.clearRect(0,0,600,600);
        };
    var strokeWeight = function(weight){
        ctx.lineWidth = weight;
        };
    var noFill = function(){
            ctx.fillStyle = "rgba(255, 255, 255,0.0)";
            ctx.fill();
        };
    var noStroke = function(){
        ctx.strokeStyle = "rgba(255, 255, 255,0.0)"
    };
    var textSize = function(size){
        ctx.font = ctx.font.replace(/\d+px/,size+"px");

    };
     var arc = function(x,y,start,stop){
         ctx.beginPath();
        ctx.arc(x, y, start,stop, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
    };
    //}
        //showcode {
        var showCode = function(){
        clear();
        background("yellow");
        fill(green);
        strokeWeight(2);
        triangle(450,0,10,100,250,200);
        fill(red);
        textAlign("center");
        textSize("50");
        text("Smart Script",250,250);
        fill("black");
        circle(250,310,50,50);
        fill(brown);
        stroke("white");
        rect(120,280,50,50);
        rect(320,280,50,50);
        fill("red");
        stroke("rgba(255,255,255,0.0)");
        roundRect(410,50,100,50,3);
        roundRect(385,99,150,40,5);
        fill("black");
        circle(410,159,20,20);
        circle(510,159,20,20);
        stroke("black");
        line(500,49,500,9);
        hex(60,50, 100,50, 134,90, 100,140, 50,140, 20,90 );
        quad(160,150, 200,150, 240,190, 120,190);
        //}
        };
        showCode();
        //quad(60,50, 100,50, 140,90, 20,90);
        
// Here is a hexagon !hex(60,50, 100,50, 140,90, 100,140, 50,140, 20,90 );
fill("blue");
var d3x = 50;
    quad(d3x+10,d3x+10,d3x+50,d3x+50,d3x+150,d3x+15,d3x+60,d3x+90);
    fill("red");
    triangle(d3x+150,d3x+150,d3x+60,d3x+90,d3x+150,d3x+16)
    fill("green");
    quad(d3x+60,d3x+90,d3x+60,d3x+150,d3x+150,d3x+150);
