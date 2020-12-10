window.onload = function(){
var c = document.querySelector("canvas");
var ctx = c.getContext("2d");


/*var bg = new Image();
bg.src = 'images/background2.png';

bg.onload = function(){
    draw();
}
*/

var rock = new Image();
var paper = new Image();
var scissor = new Image();
var hrock = new Image();
var hpaper = new Image();
var hscissor = new Image();
var barFullWidth = 512;
var health = 100;
var cpuHealth = 100;


var loseScreen = new Image();
loseScreen.src = "images/background2.png";

/*var bg = new Image();
bg.src = 'images/background2.png';*/





rock.src = "images/rock.jpg";
paper.src = "images/paper.jpg";
scissor.src = "images/scissors.jpg";

hrock.src = "images/rock2.jpg";
hpaper.src = "images/paper2.jpg";
hscissor.src = "images/scissors2.jpg";


/*if(health<0 || cpuHealth<0){
    drawResults

}*/

hscissor.onload = function(){
    draw(rock, paper,scissor, rock, paper,scissor);
}

var results = "Pick an option from the buttons above."


var rps = [];
rps[0] = "Rock";
rps[1] = "Paper";
rps[2] = "Scissors";

//Array of Buttons
var btn = document.querySelectorAll('a');
//assign event listeners to the buttons
btn[0].addEventListener('click', function(e){play(0)});
btn[1].addEventListener('click', function(e){play(1)});
btn[2].addEventListener('click', function(e){play(2)});

function drawHealthBar(){
    var barCurrentWidth = barFullWidth * getHealthPercentage(health);
    var barCurrentWidthCpu = barFullWidth * getHealthPercentage(cpuHealth);
    ctx.save();
   
    //Player health bar
    ctx.fillStyle = 'gray';
    ctx.fillRect(20-10, 30-10, barFullWidth +20, 10+20);
    ctx.fillStyle = 'white';
    ctx.fillRect(20, 30, barCurrentWidth, 10);
    //cpu health bar
    ctx.fillStyle = 'gray';
    ctx.fillRect(475-10, 550-10, barFullWidth+20, 10+20);
    ctx.fillStyle = "green";
    ctx.fillRect(475, 550, barCurrentWidthCpu, 10);
    ctx.restore();

}

function getHealthPercentage(health){
    return health/100;
}

/*if(health<0 || cpuHealth<0){
    loseScreen = draw
}
*/




function play(playersChoice){
    var cpuChoice = Math.floor(Math.random() * 2.999);
   // alert("Player Choice: " + rps[playersChoice] + " vs. Computer Choice: " + rps[cpuChoice]);

    switch(playersChoice){
        case 0:
            if(cpuChoice === 0){
                //alert("It's a tie!");
                results = "Its a tie!";
                draw(hrock,paper,scissor,hrock,paper,scissor);
            }
            else if(cpuChoice === 1){
                //alert("You Lost!");
                results = "You Lost!";
                health-= 25;
                draw(hrock,paper,scissor,rock,hpaper,scissor);
                
            } 
            else{
                //alert("You Win!");
                results = "You Win";
                cpuHealth -= 25;
                draw(hrock,paper,scissor,rock,paper,hscissor);
            }
            break;
        case 1:
            if(cpuChoice === 0){
               // alert("You Win!");
                results = "You Win!";
                cpuHealth -= 25;
                draw(rock,hpaper,scissor,hrock,paper,scissor);
            }
            else if(cpuChoice === 1){
                //alert("It's a tie!");
                results = "It's a tie!";
                draw(rock,hpaper,scissor,rock,hpaper,scissor);
            } 
            else{
                //alert("You Lost!");
                results = "You Lost!";
                health-= 25;
                draw(rock,hpaper,scissor,rock,paper,hscissor);
                

            } 
            break;
        case 2: 
            if(cpuChoice === 0){
                //alert("You Lose!");
                results = "You Lost!";
                health-= 25;
                draw(rock,paper,hscissor,hrock,paper,scissor);
                
            }
            else if(cpuChoice === 1){
                //alert("You Win!");
                results = "You Win!";
                cpuHealth -= 25;
                draw(rock,paper,hscissor,rock,hpaper,scissor);
            } 
            else{
                //alert("It's a tie!");
                results = "It's a tie!";
                draw(rock,paper,hscissor,rock,paper,hscissor);
            }
            break;
    }
}

function draw(rock, paper, scissor, crock, cpaper, cscissor){
    ctx.clearRect(0,0,c.width,c.height);
    ctx.fillRect(0,0,c.width,c.height);

    ctx.save();
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText("Player Choice", c.width/2, 100);
    ctx.drawImage(rock, c.width/2 - rock.width/2 -100, 150);
    ctx.drawImage(paper, c.width/2 - paper.width/2, 150);
    ctx.drawImage(scissor, c.width/2 - scissor.width/2 + 100, 150);

    ctx.fillText("Computer Choice", c.width/2, 325);
    ctx.drawImage(crock, c.width/2 - rock.width/2 - 100, 375);
    ctx.drawImage(cpaper, c.width/2 - paper.width/2, 375);
    ctx.drawImage(cscissor, c.width/2 - scissor.width/2 + 100, 375);
    //displays results
    ctx.fillText(results, c.width/2, 525);    

    ctx.restore();
    drawHealthBar();
   
    
   
}


}



/*
 if(health<0 || cpuHealth<0){
     //gamover

 }


 gameover = function(){
    context.clearRect(1000, 600, canvas.width, canvas.height);
    
    
    if(health<0 || cpuHealth<0){
    clearRect(canvas.width, canvas.height);



function drawResults(){
    if(health<25 ){
        ctx.fillStyle = 'white'
        ctx.font = '30px Timesnewroman'
        ctx.textAlign = 'center'
        ctx.fillText("You Lose!", c.width/2, c.height/2);
    }
     else{
        ctx.fillStyle = 'white'
        ctx.font = '30px Timesnewroman'
        ctx.textAlign = 'center'
        ctx.fillText("You Win!", c.width/2, c.height/2);
     }

}


 */