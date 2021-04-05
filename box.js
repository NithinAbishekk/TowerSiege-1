class Box{
	constructor(x,y){

		var options={
			'friction' : 20,
            

			}
		this.x=x;
		this.y=y;
		this.w=220;
		this.h=100;
        this.image = loadImage("images/box.png");
		this.body=Bodies.rectangle(x, y, 25 ,25, options);
 		World.add(world, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
			push();
			translate(groundPos.x, groundPos.y);
			//rectMode(CENTER);
			imageMode(CENTER)
			image(this.image,0,0,this.w, this.h);
			//rect(0,0,this.w,this.h);
			pop();
			
	}

}