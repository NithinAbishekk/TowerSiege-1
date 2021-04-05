class Star{
	constructor(x,y)
	{
		var options={
			
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=60;
		this.image = loadImage("images/star.png");
		this.body=Bodies.circle(this.x, this.y, 20, options);
		World.add(world, this.body);
	}

	display()
	{
		var starPos=this.body.position;	
		push()
		translate(starPos.x, starPos.y);
		rotate(this.body.angle);
		fill(255,0,255)
		imageMode(CENTER);
		image(this.image, 0,0,this.r, this.r);
		pop()
 }
}