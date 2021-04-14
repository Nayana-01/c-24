class Log{
    constructor(x, y, height, angle){
        var option = {
            'restitution': 0.8,
            'friction': 2.5,
            'density': 1
        }
        this.body = Bodies.rectangle(x, y, 20, height, option); 
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.body, angle)
        World.add(world, this.body);

    }
    display(){
    var pos = this.body.position;
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