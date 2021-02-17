class Paper{
    constructor(x,y,r){
        var options = {
           isStatic : false,
           'restitution' : 0.5,
           'friction' : 0.5,
           'density' : 1.2
        }
        this.body = Bodies.circle(x,y,r,options)
        this.x = x
        this.y = y
        this.r = r
        World.add(world,this.body);
        this.image = loadImage("paper.png");
    }
    display(){
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			strokeWeight(4);
			fill("white");
			image(this.image,0,0,this.r, this.r);
            pop()
            
    }

}