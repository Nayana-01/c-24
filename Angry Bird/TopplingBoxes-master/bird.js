class Bird {
    constructor(x, y){
        var option = {
            'restitution':0.5,
            'fricton':0.4,
            'density':1.5

        }
        this.body = Bodies.rectangle(x, y, 50, 50, option);
this.width = 50;
this.height = 50;
World.add(world, this.body)

    }
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle)
        rectMode(CENTER);
        fill("red");
        stroke("black");
        strokeWeight(3);
        rect(0, 0, this.width, this.height);

        pop();
    }
}