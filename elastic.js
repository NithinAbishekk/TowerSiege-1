class Elastic{
    constructor(bodyA, pointB){
       var options= {
       bodyA : bodyA,
       pointB : pointB,
       stiffness : 0.02,
       length : 10
     }
    this.bodyA= bodyA;
    this.pointB = pointB;
    this.elastic = Constraint.create(options);
    World.add(world, this.elastic);

   }
   fly(){    
    this.elastic.bodyA = null;    
   }

   display(){
       if(this.elastic.bodyA){
           var posA = this.bodyA.position;
           var posB = this.pointB;
           stroke("white");
           strokeWeight(3);
           line(posA.x,posA.y,posB.x,posB.y);
       }
      
   }
    
    
}