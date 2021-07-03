class Shoot{
    constructor(a,b){
        var options={
        bodyA:a,
        pointB:b,
        stiffness:0.04,
        length:10
        
    }
       this.bodyA=a
       this.pointB=b 
       this.shot=Constraint.create(options)
  
    World.add(world,this.shot)
}
display(){
   
    if(this.shot.bodyA){
    var pointA=this.shot.bodyA.position
    var pointB=this.pointB

    push()
    strokeWeight(3)
    line(pointA.x,pointA.y,pointB.x,pointB.y) 
    pop()
    }


} 
 noRope(){
     this.shot.bodyA=null
 } 
 connect(x){
     this.shot.bodyA=x
 }      


}
