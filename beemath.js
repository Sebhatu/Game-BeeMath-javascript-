 function component(pic, x, y, color, fon, type, picX, picY, curframe, framecoun) {
    this.type = type;
	this.pic = pic;
	this.color = color;
	this.fon = fon;
    this.x = x;
    this.y = y; 
	this.speedX = 0;
    this.speedY = Math.random()+0.2;
    this.picX = picX;
    this.picY = picY;
    this.curframe = curframe;
    this.framecoun = framecoun;	
    ctx = myGameArea.context;
    this.draw = function(){
	if(this.type == "text"){
	
	ctx.font = this.fon;
	ctx.fillStyle = this.color;
	ctx.fillText(this.pic, this.x, this.y);
	
	 }else if(this.type == "be"){
	
	 ctx.drawImage(this.pic, this.picX, this.picY, this.color, this.fon, this.x, this.y, this.color, this.fon);
	
	   }else if(this.type == "circle"){
	      ctx.beginPath();
		  
		  ctx.fillStyle = this.color;
		  ctx.arc(this.x, this.y, this.picX, this.picY, this.fon)
	      ctx.fill();

		  
	   }
	   
	   else{
	        ctx.drawImage(this.pic, this.x, this.y);
	 }
	}
	this.move = function(){
				 
				 this.curframe = ++this.curframe % this.framecoun; 
				 this.picX = this.curframe * this.color; 

		}
      this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
                
    }  
   
   
   this.change = function(){
   if(this.pic == t.pic){
     this.pic += 2;
   }
  }
  this.check = function(flower,flower1,tex){
	  if((flower.x + 80 >= this.x && flower.x <= this.x)||(flower1.x + 80 >= this.x && flower1.x <= this.x)){
		  this.x += 80;
		  tex.x = this.x + 35;
		  
	  }
  }
  this.crashWith = function(otherobj) {
        var myleft = this.x - 15
        var myright = this.x + 35;
        var mytop = this.y + 30
        var mybottom = this.y + 15;
        var otherleft = otherobj.x;
        var otherright = otherobj.x + 70;
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + 84;
        var crash = false;
        if (myright >= otherleft && myleft <= otherright && mybottom <= otherbottom && mytop >= othertop) {
            crash = true;
        }
        return crash;
    }
	this.rondomspeed = function(tex){
	this.y += this.speedY;
	tex.y = this.y + 43;
   }
	}
	function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}