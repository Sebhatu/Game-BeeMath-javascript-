function play(){
	w = 0;
	INF = 0;
}
 
 function continueLevels(){
	if (level === 1 && s === 50){
	 
	maxsco = 100
	level = 2;
	up(); 
	 c = 0;
	s += 10;
	
 }
 else if (level === 2 && s === 100){
	maxsco = 160;
	level = 3;
	up(); 
	 c = 0;
	s += 10;

	
 }
 
 }
 function restart(){
	 if(J <= 0 || s === 160){
	 J = 3;
	  K = backpicfile ;
	 
	mySound.play();
	 maxsco = 50;
	level = 1;
	s = 0;
	up(); 
	 c = 0;
	 w = 0;
	 INF = 0;
	
	
	 }
 }
 function information(){
	 if(w === 1){
	 INF = 1;
 }
 }
 function mute(){
	 
	 if (cont === 0){
	 mySound.stop();
	 cont = 1;
	 document.getElementById("mute").innerHTML = "UNMUTE";
	 }else {
		 mySound.play();
		cont = 0;
	document.getElementById("mute").innerHTML = "MUTE";	
	 }
 
 }