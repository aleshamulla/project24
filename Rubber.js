class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	    var options = {
			'friction' : 1.0,
            'restitution' : 0.3,
			'density' : 1.0
		}
		this.x=x;
		this.y=y;
		this.r=50;
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			ellipseMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            ellipse(0,0,this.r,this.r);
			pop()
	}

}