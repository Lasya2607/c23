class ground{
constructor(x,y,width,height) {
    var object_options = {
    isStatic:true
    }
this.object = Bodies.rectangle(x,y,width,height,object_options);
this.width = width;
this.height = height;
World.add(world,this.object);
}
display(){
    var pos = this.object.position
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)
}

}