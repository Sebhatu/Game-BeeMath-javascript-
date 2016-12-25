
window.onload = startpage;



var flo;
var flo2;
var flo3;
var level = 1;
var w = 1;
var welcome;
var life;
var J = 3;
var mySound;
var t2;
var t1;
var t;
var Gameoverpic;
var btweenlevelspic;
var btweenlevelspic1;
var backpicfile = new Image();
var backpic = new Image();
var bee = new Image();
var Gameover = new Image;
var breakpic = new Image;
var breakpic1 = new Image;
var winpic = new Image;
var wel = new Image();
var piclevel2 = new Image();
var piclevel3 = new Image();
var flo1 = new Image();
var info = new Image();
info.src = "BeePic.png";
breakpic1.src = "flowery.jpg";
winpic.src = "win.jpg";
breakpic.src = "backpicsunset.png";
 Gameover.src = "GameOverFinal.jpg";
 flo1.src = "flower1.png";
piclevel2.src = "MB.png";
piclevel3.src = "FogBack.png";
backpic.src = "flo.jpg"
bee.src = "last_burned.png";
backpicfile.src = "fenceBlue.png";
wel.src = "backbee.jpg";
var infopic;
 var btweenlevelstext;
 var winpage;
 var maxsco = 50;
 var K = backpicfile ;
 var INF = 0;
 var cont = 0;
 var Q;
var myscore;
var backpic2;
var cir;
var text;
var c = 1;
var s = 0;
function startpage() {
    myGameArea.start();
	up();
	bee = new component(bee, 90, 300, 426/8, 108/2, "be", 0, 0, 0, 8);
	welcome = new component(wel, 0, 0);
	mySound = new sound("Kalimba.mp3");
	wronganswer = new sound("wrongans_0001.mp3");
	correctsound = new sound("Wow.mp3");
	
	Gameoverpic = new component(Gameover, 0, 0);
	
	btweenlevelspic = new component(breakpic, 0, 0);
	btweenlevelspic1 = new component(breakpic1, 0, 0);
	
	winpage = new component(winpic, 0, 0);
	infopic = new component(info, 0, 0);
	mySound.play();
	
}
function up(){
	var A;
	var B;
	var z;
	var N;
	var random1;
	var random2;
	if( level === 1) {
		A = Math.floor(Math.random()*20);
		B = Math.floor(Math.random()*20);
		z= A+"+" +B+" "+"="+" "+"__";
		N = A + B;
		random1 =  Math.floor(Math.random()*20);
		random2 =  Math.floor(Math.random()*(40 - 20)) + 21;
	}
	else if(level === 2) {
		A = Math.floor(Math.random()*20);
		B = Math.floor(Math.random()*20);
		K = piclevel2 ;
		z= A+"-" +B+" "+"="+" "+"__";
		N = A - B;
		random1 =  Math.floor(Math.random()*20);
		random2 =  Math.floor(Math.random()*(0 + 20)) - 21;
	}
	else {
		K = piclevel3;
		A = Math.floor(Math.random()*10);
		B = Math.floor(Math.random()*10);	
		z= A+"X" +B+" "+"="+" "+"__";
		N = A * B;	
		random1 =  Math.floor(Math.random()*50);
		random2 =  Math.floor(Math.random()*(100 - 50))+ 51;
	}
	
		backpic2 = new component(K, 0, 0);	
		flo = new component(flo1, Math.floor(Math.random()*770 + 100), 40);
		flo2 = new component(flo1, Math.floor(Math.random()*770 + 100), 40);
		flo3 = new component(flo1, Math.floor(Math.random()*770 + 100), 40);
		Q = new component(z, 0, 40, "black","30px Arial", "text");
		myscore = new component("Score:"+" "+s+"/"+maxsco, 0, 80, "black", "20px Arial", "text");
		t = new component(N, flo.x + 35, flo.y + 43, "black", "20px Arial", "text");
		t1 = new component(random1, flo2.x + 35, flo2.y + 43, "black", "20px Arial", "text");
		t2 = new component(random2, flo3.x + 35, flo3.y + 43, "black", "20px Arial", "text");
		life = new component("Life :"+" "+J, 0, 120, "black", "30px Arial", "text" );
   
	}


	var myGameArea = {
		canvas : document.createElement("canvas"),
		start : function() {
        this.canvas.width = 1030;
        this.canvas.height = 450;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.interval = setInterval(test1, 20);
		window.addEventListener('keydown', function (e) {
        myGameArea.key = e.keyCode;
    })
        window.addEventListener('keyup', function (e) {
        myGameArea.key = false;
        })
    }, 
    
	     }
    
   
 
	function test1(){
		welcome.draw();
	if(w === 0){
		bee.speedX = 0;
		bee.speedY = 0.5; 	 
		backpic2.draw();
		bee.move();
		 
	if (myGameArea.key && myGameArea.key == 37) {bee.speedX = -5; bee.picY = 54;}
	if (myGameArea.key && myGameArea.key == 39) {bee.speedX = 5; bee.picY = 0;}
	if (myGameArea.key && myGameArea.key == 38) {bee.speedY = -5; }
	if (myGameArea.key && myGameArea.key == 40) {bee.speedY = 5; }
		bee.newPos();
	if(c === 0 ){
		flo.rondomspeed(t);
		 flo2.rondomspeed(t1);
		 flo3.rondomspeed(t2);
			flo2.check(flo,flo3,t1);
			 flo.check(flo2,flo3,t);
			 flo3.check(flo2,flo,t2);
			 flo.draw();
			 flo2.draw();
			 flo3.draw();
			 t1.draw();
			 t2.draw();
			 t.draw();
			 Q.draw();
			 myscore.draw();
			 t1.change();
			 t2.change();
			 life.draw();
			 
			 }
			 
			 bee.draw();
			 
		 if(bee.crashWith(flo)){
			correctsound.play();
			c = 1;
			s += 10;
			
			 
			up();
			 }
			 
			 else if( bee.crashWith(flo2)|| flo.y >= 450 || bee.y >= 450 ||bee.crashWith(flo3) ){
			 c = 1;
			 wronganswer.play();
			  bee.y = 300;
			J--;
			 up();
			 
			 } 
			
			
			         else{
			
						 if(s === 50){
						 bee.y = 300;
						 bee.x = 60;
						 btweenlevelspic.draw();
						  J = 3;
						 c = 1;
						 wronganswer.pause();
						 
						 }
						 
						else if (s === 100){
						 bee.y = 300;
						 bee.x = 60
						 btweenlevelspic1.draw();
						 J = 3;	
						 c = 1; 
						 wronganswer.pause();
						}
						else if (s === 160){
						 bee.y = 300;
						 winpage.draw();
						 J = 3
						 c = 1;
						 wronganswer.pause();
					    }
					 else {
						 c = 0;
					    }
						
			}
        }
   if(J <= 0){
	 Gameoverpic.draw();  
	 
	 w = 1;
	 c = 1;
	mySound.stop();
   }
  
 if ( INF === 1){
	 infopic.draw();
	 
    }
	}
 