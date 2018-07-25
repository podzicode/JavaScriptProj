/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer,gamePlaying,setWin,previousRoll;


//
init();
document.querySelector(".btn-roll").addEventListener('click',function()
	{
		if(gamePlaying)
			{
			var dice=Math.floor(Math.random()*6)+1;
			var dice2=Math.floor(Math.random()*6)+1;
			var diceDom= document.querySelector(".dice");
			var dice2Dom=document.querySelector(".dice2");
			diceDom.src='dice-'+dice+'.png';
			dice2Dom.src='dice-'+dice2+'.png';
		if(dice!==1 && dice2!==1){
			document.querySelector(".dice").style.display='block';
			document.querySelector(".dice2").style.display='block';
			roundScore+=(dice+dice2);
			document.querySelector("#current-"+activePlayer).textContent=roundScore;
			}
		else{
			nextplayer();


	}}
})
document.querySelector('.btn-hold').addEventListener('click',function(){
	if(gamePlaying){
		scores[activePlayer]+=roundScore;
		document.querySelector("#score-"+activePlayer).textContent=scores[activePlayer];
		document.getElementById("current-0").textContent='0';
		document.getElementById("current-1").textContent='0';
		}
		if(setWin>0){
			if(scores[activePlayer]>=setWin){
			document.querySelector("#name-"+activePlayer).textContent="Winner!";
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
			document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
			gamePlaying=false;		
		}
		else{
			nextplayer();
		}
		}
		else{
			if(scores[activePlayer]>=100){
			document.querySelector("#name-"+activePlayer).textContent="Winner!";
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
			document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
			gamePlaying=false;		
		}
		else{
			nextplayer();
		}
		}
		
	
		
		
		
		
	
	

})
function nextplayer(){
	if(activePlayer===0){
			activePlayer=1;
			roundScore=0;
			document.getElementById("current-0").textContent='0';
			document.querySelector(".dice").style.display='none';
			document.querySelector(".dice2").style.display='none';
			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');
		}
		else{
			activePlayer=0;
			roundScore=0;
			document.getElementById("current-1").textContent='0';
			document.querySelector(".dice").style.display='none';
			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');

		}		

			
}
document.querySelector('.btn-new').addEventListener('click',init);
function init(){
	setWin=prompt("Enter the value to win");
	scores=[0,0];
	roundScore=0;
	activePlayer=0;
	previousRoll=0;
	gamePlaying=true;
	document.getElementById("current-0").textContent='0';
	document.getElementById("current-1").textContent='0';
	document.getElementById("score-0").textContent='0';
	document.getElementById("score-1").textContent='0';
	document.querySelector("#name-0").textContent="Player 1";
	document.querySelector("#name-1").textContent="Player 2";
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');


}