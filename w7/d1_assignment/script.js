window.onload = function () {
    var c = document.querySelector('canvas')
    var ctx = c.getContext("2d")



    function GameObject() {
        this.x = 0;
        this.y = 0;
        this.w = 100;
        this.h = 10;

        this.drawBox = function () {
            ctx.save();
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
            ctx.restore();
        }
    }

   // var drawShape = new GameObject()
    var box = new GameObject();
    box.x = 100;
    box.y = 100;



    function drawShape() {
        ctx.clearRect(0, 0, c.width, c.height);

        //square
        ctx.fillStyle = "yellow";
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 5;
        ctx.fillRect(85,300, 100,100);
        ctx.strokeRect(85,300, 100,100);

        //draw line example
        ctx.save();
        
        ctx.strokeStyle = "rgb(255,0,0)"
        ctx.moveTo(84, 682);
        ctx.lineTo(280, 545);
        ctx.stroke();
        ctx.restore();

        //circle
        ctx.beginPath()
        ctx.fillStyle = "#ffff00"
        ctx.strokeStyle = "red"
        ctx.arc(385,440, 65, 0, 2 * Math.PI, true)
        ctx.closePath()
        ctx.fill()
        ctx.stroke()

        ctx.fillStyle = "#ffff00";
        ctx.strokeStyle = "rgb (32,32,32)";
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(635, 496);
        ctx.lineTo(667, 554);
        ctx.lineTo(732, 567);
        ctx.lineTo(687, 617);
        ctx.lineTo(696, 683);
        ctx.lineTo(635, 650);
        ctx.lineTo(574, 683);
        ctx.lineTo(583, 616);
        ctx.lineTo(537, 566);
        ctx.lineTo(602, 554);
        ctx.closePath();
        ctx.fill()
        ctx.stroke();

        ctx.strokeStyle = "#00ffff";
        ctx.fillStyle = "#ff00ff";
        ctx.beginPath();
        ctx.moveTo(557, 308);
        ctx.lineTo(667, 283);
        ctx.lineTo(725,380);
        ctx.lineTo(650,465);
        ctx.lineTo(545, 420);
        ctx.lineTo(557, 308);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();


       
        


        



/*
        //draw shape
        drawShape
        ctx.save();
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'black';
        ctx.moveTo(500, 100);
        ctx.lineTo(550, 200);
        ctx.lineTo(450, 150);
        ctx.lineTo(475, 120);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();


        
        box.drawBox();
        rotatingBox.drawRotateBox();*/

        timer = requestAnimationFrame(drawShape);

    }
    drawShape();
}
