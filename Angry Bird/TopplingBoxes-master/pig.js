class Pig {
constructor(x, y){
    var option = {
        'restitution':1,
        'friction': 0.4,
        'density':1
    }
    this.body = Bodies.rectangle(x, y, 50, 50, option);

this.width = 50
this.height = 50
World.add(world, this.body);
}
display(){
    var pos = this.body.position;
    push();
translate(pos.x, pos.y);
rotate(this.body.angle);
rectMode(CENTER);
rect(0, 0, this.width, this.height);

    pop();
}
}