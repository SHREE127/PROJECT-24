class paper{

    constructor(x, y) {
        var options = {
            'isStatic' : false,
            'restitution' : 0.3,
            'fricton': 0.5,
            'density': 1.2
            
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.width = 20;
        this.height = 20;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x, pos.y, this.width, this.height);
        
      }
}