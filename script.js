//vars {
            var red = 'rgb(255, 0, 0)';
            var blue = 'rgb(0, 21, 255)';
            var green =  "rgb(0, 161, 11)";
            var lightblue =  "rgb(0, 204, 255)";
            var brown = "rgb(189, 105, 2)";
    var canvas  = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
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
        for (var txtLoop = 0;txtLoop < txt.length;txtLoop++){
            ctx.beginPath();
            ctx.fillText(txt[txtLoop],x,y+30*txtLoop+40);
            ctx.fill();
        }
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
    var hex = function(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6){
            ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.lineTo(x3,y3);
        ctx.lineTo(x4,y4);
        ctx.lineTo(x5,y5);
        ctx.lineTo(x6,y6);
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
    var quadCurve = function(x1,y1,x2,y2,x3,y3,x4,y4){
        
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.quadraticCurveTo(x2,y2,x3,y3,x4,y4)
        ctx.closePath();
        ctx.fill();
    };
    var bezier = function(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8){
        
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.bezierCurveTo(x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8);

        ctx.closePath();
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
    var allowAnimation = function(theVariable){
        window.requestAnimationFrame(theVariable);
    };
    var floor = function(num1){
        Math.floor(num1);
    };
    var ceil = function(num1){
        Math.ceil(num1);
    };
    var round = function(num){
      Math.round(num);
    };
    // } //they have all functions, and color vars.
