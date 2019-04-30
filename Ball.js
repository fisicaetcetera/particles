class bola {
  constructor(x,y,r) {
    this.x = x;
    this.y = y;
    this.r = r;
  } 
  move(){
   //this.x += random(-12,0);
    this.x += random(-5+this.r/6);
   this.y += random(-5,5);
  }
  bounce(){
   if(this.x > width){
     this.x = 0;
   }else if(this.x<0){
     this.x = width;}
    
     if(this.y > height){
     this.y = 0;
   }else if(this.x<0){
     this.y = height;}
    
  }
  
  display(){
   stroke(0);
    
    fill(111);
    ellipse(this.x,this.y, this.r);
  }
}