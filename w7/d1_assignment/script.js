window.onload = function(){
    var c = document.querySelector('canvas')
    var ctx = c.getContext("2d")

}

function GameObject(){
    this.x = 0;
    this.y = 0;
    this.w = 100;
    this.h = 10;
 
}
var drawShape = GameObject


this.drawBox = function(){
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.restore();
}


var box = new GameObject();
box.x = 100;
box.y = 100;



function drawShape(){
    
            
         
    
            //draw line example
            ctx.save();
            ctx.fillStyle = "black";
            ctx.strokeStyle = 'black';
            ctx.moveTo(20,20);
            ctx.lineTo(84,682);
            ctx.stroke();
            ctx.restore();
    
    
    
            //draw shape
            drawShape
            ctx.save();
            ctx.strokeStyle = 'red';
            ctx.fillStyle = 'yellow';
            ctx.moveTo(500, 100);
            ctx.lineTo(550,200);
            ctx.lineTo(450,150);
            ctx.lineTo(475,120);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            
    
            ctx.clearRect(0,0,c.width,c.height);
            box.drawBox();
            rotatingBox.drawRotateBox();
    
            timer = requestAnimationFrame(draw);
    
        }
    