//child of baseClass 
//bird will extend the properties and functions of the parent Baseclass
class Bird extends BaseClass{
  constructor(x,y){
    //super is used to override the parent class
    //super(overrride)change the properties or function preset in base class(parent)
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}