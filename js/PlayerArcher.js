class PlayerArcher {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        };
        this.body = Bodies.rectangle(x,y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("./assets/playerArcher.png");
        Matter.Body.setAngle(this.body, -PI/2);

        World.add(world, this.body);
    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        /*if (keyIsDown(UP_ARROW) && angle > -1.9) {
            angle -= 0.1;
            Matter.Body.setAngle(this.body, angle);
        } 

        if(keyIsDown(DOWN_ARROW) && angle < 1.2) {
            angle += 0.1;
            Matter.Body.setAngle(this.body, angle);
        } */

        if (keyIsDown(UP_ARROW) && playerArcher.body.angle < 1.77) {
            angle = 0.1;
        } else{
            angle = -0.1;
        }

        if (keyIsDown(DOWN_ARROW) && playerArcher.body.angle > 1.47) {
            angle = -0.1;
        } else{
            angle = 0.1;
        } 

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
    
        pop();
    }
}