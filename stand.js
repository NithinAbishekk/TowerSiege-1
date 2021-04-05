class Stand{
	constructor(x,y,w,h){
        
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=200;
		this.h=10;
		this.image = loadImage("images/stand.png");
		this.body=Bodies.rectangle(x, y, 215, 40, options);
 		World.add(world, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
			push();
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER);
			image(this.image,0,0,450, 140);
			pop();
			
	}

}