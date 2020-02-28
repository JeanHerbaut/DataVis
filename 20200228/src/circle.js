export default class Circle {
    //nommé Circle l'instance de cette classe est une redondance, du coup nommer comme on veut lors de l'import
    constructor(x, y, radius, speed, color, colorBorder) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.color = color || "red";
        this.colorBorder = colorBorder || "red";
    }

    //draw a circle
    draw(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = this.colorBorder;
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill()
        ctx.stroke();
    }

    //move a circle 
    move(dt, direction) {
        this.x += this.speed * dt * Math.cos(direction);
        this.y += this.speed * dt * Math.sin(direction);
    }

    //sort with radius
    sortRadius(a, b) {
        return a.radius - b.radius;
    }

    isCollidingWith(x, y, r = 0) {
        return Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2) <= Math.pow(this.r + r, 2);
    }
}