//Array of words
var rps = [];
rps[0] = `Rock` 
rps[1] = `Paper`
rps[2] = `Scissors`

//Array of Buttons
var btn = document.querySelectorAll(`a`)
//Changes the words in the buttons
btn[0].innerHTML = rps[0]
btn[1].innerHTML = rps[1]
btn[2].innerHTML = rps[2]

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.font = "50px Impact";
ctx.textAlign = 'center'
ctx.fillText("ROCK PAPER SCISSORS", c.width/2 , 50);
ctx.strokeText("ROCK PAPER SCISSORS", c.width/2 , 50);

//Makes the buttons clickable.
//Once clicked they call the play function
btn[0].addEventListener(`click`, function(e){
    play(0)
})
btn[1].addEventListener(`click`, function(e){
    play(1)
})
btn[2].addEventListener(`click`, function(e){
    play(2)
})



//Play function accepts an integer
//generates an integer 0-2
//Displays the player's choice and computer's choice
function play(pChoice)
{
    var cChoice = Math.floor(Math.random()*2.999999)
    
    //alert(rps[pChoice] + " " + rps[cChoice]) 

    switch(pChoice){
        case 0:
            if(cChoice === 0)
            {
                //display a tie
                //alert(`You Tied`)
                ctx.fillStyle = 'rgb(239, 7, 247)'
                ctx.font = '60px Impact'
                ctx.textAlign = 'center'
                ctx.fillText("You Tied!", c.width/2, c.height/2);
                ctx.fillText("Computer chose Rock!",  c.width-500, c.height-400); 
                ctx.strokeText("Computer chose Rock!",  c.width-500, c.height-400);
                ctx.strokeText("You Tied!", c.width/2, c.height/2);

            }
            else if(cChoice === 1)
            {
                //display a loss
                //alert(`You Lost`)
                ctx.fillStyle = 'rgb(239, 7, 247)'
                ctx.font = '60px Impact'
                ctx.textAlign = 'center'
                ctx.fillText("You Lose!", c.width/2, c.height/2);
                ctx.fillText("Computer chose Paper!",  c.width-500, c.height-400);
                ctx.strokeText("You Lose!", c.width/2, c.height/2);
                ctx.strokeText("Computer chose Paper!",  c.width-500, c.height-400);
            }
            else
            {
                //display a win
                //alert(`You Won`)
                ctx.fillStyle = 'rgb(239, 7, 247)'
                ctx.font = '60px Impact'
                ctx.textAlign = 'center'
                ctx.fillText("You Win!", c.width/2, c.height/2);
                ctx.fillText("Computer chose Scissors!",  c.width-500, c.height-400);
                ctx.strokeText("You Win!", c.width/2, c.height/2);
                ctx.strokeText("Computer chose Scissors!",  c.width-500, c.height-400);
            }
            break;

            case 1:
                if(cChoice === 0)
                {
                    //display a tie
                    //alert(`You Win`)
                    ctx.fillStyle = 'rgb(239, 7, 247)'
                    ctx.font = '60px Impact'
                    ctx.textAlign = 'center'
                    ctx.fillText("You Win!", c.width/2, c.height/2);
                    ctx.fillText("Computer chose Rock!",  c.width-500, c.height-400);
                    ctx.strokeText("You Win!", c.width/2, c.height/2);
                    ctx.strokeText("Computer chose Rock!",  c.width-500, c.height-400);
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    //alert(`Tie`)
                    ctx.fillStyle = 'rgb(239, 7, 247)'
                    ctx.font = '60px Impact'
                    ctx.textAlign = 'center'
                    ctx.fillText("You Tied!", c.width/2, c.height/2);
                    ctx.fillText("Computer chose Paper!",  c.width-500, c.height-400);
                    ctx.strokeText("You Tied!", c.width/2, c.height/2);
                    ctx.strokeText("Computer chose Paper!",  c.width-500, c.height-400);
                }
                else
                {
                    //display a win
                    //alert(`You Lost`)
                    ctx.fillStyle = 'rgb(239, 7, 247)'
                    ctx.font = '60px Impact'
                    ctx.textAlign = 'center'
                    ctx.fillText("You Lose!", c.width/2, c.height/2);
                    ctx.fillText("Computer chose Scissors!",  c.width-500, c.height-400);
                    ctx.strokeText("You Lose!", c.width/2, c.height/2);
                    ctx.strokeText("Computer chose Scissors!",  c.width-500, c.height-400);
                } 
            break;

            case 2:
                if(cChoice === 0)
                {
                    //display a tie
                   // alert(`You Lost`)
                   ctx.fillStyle = 'rgb(239, 7, 247)'
                   ctx.font = '60px Impact'
                   ctx.textAlign = 'center'
                   ctx.fillText("You Lose!", c.width/2, c.height/2);
                   ctx.fillText("Computer chose Rock!",  c.width-500, c.height-400);
                   ctx.strokeText("You Lose!", c.width/2, c.height/2);
                   ctx.strokeText("Computer chose Rock!",  c.width-500, c.height-400);
                   
                }
                else if(cChoice === 1)
                {
                    //display a loss
                   // alert(`You Win`)
                   ctx.fillStyle = 'rgb(239, 7, 247)'
                   ctx.font = '60px Impact'
                   ctx.textAlign = 'center'
                   ctx.fillText("You Win!", c.width/2, c.height/2);
                   ctx.fillText("Computer chose Paper!",  c.width-500, c.height-400);
                   ctx.strokeText("You Win!", c.width/2, c.height/2);
                   ctx.strokeText("Computer chose Paper!",  c.width-500, c.height-400);
                }
                else
                {
                    //display a win
                   // alert(`You Tie`)
                   ctx.fillStyle = 'rgb(239, 7, 247)'
                   ctx.font = '60px Impact'
                   ctx.textAlign = 'center'
                   ctx.fillText("You Tied!", c.width/2, c.height/2);
                   ctx.fillText("Computer chose Scissors!",  c.width-500, c.height-400);
                   ctx.strokeText("You Tied!", c.width/2, c.height/2);
                   ctx.strokeText("Computer chose Scissors!",  c.width-500, c.height-400);
                }
             break;
    }
}
