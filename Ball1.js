class Ball{
    constructor(x,y,radious){
        var option={
            isStatic:true
        
        }
        this.body=Bodies.circle(x,y,radious,option);
        World.add(world,this.body)
this.radious=radious
    }
    display(){
        rectMode(CENTER)
        fill("pink");
        circle(this.body.position.x,this.body.position.y,this.radious)

    }
}