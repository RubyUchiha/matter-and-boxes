class Hammer {
    constructor(x, y, width, height) {
        var options = {
            'density':2,
            'friction':1,
            'restitution':0.5
        }
        this.body  = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("lime");
        rect(0, 0, this.width, this.height);
        pop();
    }
// hello Miss, i tried to make the thing follow the mouse.x position, but it did not work. Can u plz help me?
    display1(x, y){
        var x = mouse.x;
        var y = mouse.y;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("lime");
        rect(0, 0, this.width, this.height);
        pop();
    }
}