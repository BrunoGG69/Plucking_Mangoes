class Mango{
    constructor(x, y, r) {
        var options = {
            isStatic : false,
            restitution : 0,
            friction :1
        }
        this.body = Bodies.circle(x, y, r, options);
        
        this.r = r
        
        
        this.x = x;
        this.y = y;

        this.image = loadImage("mango.png");

        World.add(world, this.body);
      }
      display(){

        push();
      
        imageMode(CENTER);

        image(this.image, this.x, this.y, this.r, this.r);

        pop();
      }
}