let x=0;
let y=0;
function playGame()
{
    playerOne=Math.floor(Math.random() * 6)+1;
    playerTwo=Math.floor(Math.random() * 6)+1;

    imageOne="dice"+playerOne+".png"
    imageTwo="dice"+playerTwo+".png"

    linkOne="images/"+imageOne;
    linkTwo="images/"+imageTwo;

    document.getElementById('player1').src=linkOne;
    document.getElementById('player2').src=linkTwo;

    document.getElementById('player1').setAttribute("class", "playerOne");
    document.getElementById('player2').setAttribute("class", "playerTwo");

    

    if(playerOne>playerTwo)
    {
        document.querySelector("h1").textContent="Player1 wins";
        x=x+1;
    }
    else if(playerTwo>playerOne)
    {
        document.querySelector("h1").textContent="Player2 wins";
        y=y+1;
    }
    else
    {
        document.querySelector("h1").textContent="Draw";
    }
    document.getElementsByClassName("pOne").innerHTML="Player1 :";
    document.getElementsByClassName("pTwo").innerHTML="Player2 :";
}