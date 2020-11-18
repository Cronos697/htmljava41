//javascript goes here

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

//example for loading images to canvas
var mario = new Image();
mario.src = 'images/Stick.png';

var x = 0;
//Timer
var timer = requestAnimationFrame(main);

//variables for starting and finish line
var start = 110;
var finish = 1010;

// fuel variables
var startFuel = 950;
var fuel = startFuel;
var barFullWidth = 512;


//start timer stuff
var sec = 3;
var fps = 60;
var frames = fps;





function main(){
    timer = requestAnimationFrame(main)
    //clear the canvas
ctx.clearRect(0,0, c.width, c.height);
//draw the game objects
drawStartLine();
drawFinishLine();
drawBox();
drawSprite();

drawFuelBar();
drawFuelText();

if(sec > 0){
runStartTimer();
drawStartTimer();
}

else{
    if(fuel > 0){
        //update x
        x += 1;
        fuel -= 1;
    }
}











//draw some text
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.font = "50px Timesnewroman";
ctx.textAlign = 'center'
ctx.fillText("RACE", c.width/2 , 50);
ctx.strokeText("RACE", c.width/2 , 50);

//checks to see if player made it to finish line
if(fuel <= 0 || x + 100 > finish){
    drawResults();
}



}

function drawBox(){
    ctx.fillStyle = 'black'
    ctx.fillRect(start -10, 70, barFullWidth +20, 30);
}

function drawSprite(){
    //draw image to canvas
ctx.drawImage(mario, x, 110,100,100);
}

function drawStartLine(){
    ctx.fillStyle = 'green'
    ctx.fillRect(58, 100, 12, 550);
    
}
function drawFinishLine(){
    ctx.fillStyle = 'darkblue'
    ctx.fillRect(956, 100, 12, 550);

}

function drawFuelBar(){
    var barCurrentWidth = barFullWidth * getFuelPercentage();

    ctx.fillStyle = 'white'
    ctx.fillRect(start, 80, barCurrentWidth, 10);

}

function drawFuelText(){
    ctx.fillStyle = 'black'
    ctx.font = '30px Timesnewroman'
    ctx.fillText(fuel, start, 50,);
    
}

function getFuelPercentage(){
    return fuel/startFuel;
}

function drawResults(){
    if(x + 100 > finish){
        //winning condition
        ctx.fillStyle = 'black'
        ctx.font = '30px Timesnewroman'
        ctx.textAlign = 'center'
        ctx.fillText("You Win!", c.width/2, c.height/2);
    }


else{
        //losing condition
        ctx.fillStyle = 'black'
        ctx.font = '30px Timesnewroman'
        ctx.textAlign = 'center'
        ctx.fillText("You Lose!", c.width/2, c.height/2);
}
}


function runStartTimer(){
    frames -= 1;
    if(frames < 0){
        frames = fps;
        sec -= 1;
    }
}

function drawStartTimer(){
    ctx.fillStyle = 'black'
    ctx.font = '30px Arial'
    ctx.textAlign = 'center'
    ctx.fillText(sec, c.width/2, c.height/2);
}



