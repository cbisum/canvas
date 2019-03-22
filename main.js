let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

function random(min,max){
    let num = Math.floor(Math.random()*(max-min)+1)+min;
    return num;
}


function Ball(x,y,velX,velY,color,size){
    this.x =x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

Ball.prototype.draw = function(){
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
    ctx.fill();
}


Ball.prototype.update = function(){
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
      }
    
      if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
      }
    
      if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
      }
    
      if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
      }
    
      this.x += this.velX;
      this.y += this.velY;
}

let balls = [];

function loop(){
    ctx.fillStyle= 'rgb(0,0,0,0.2)';
    ctx.fillRect(0,0,width,height);
    while (balls.length<50){
        let size  = random(10,20);
        let ball =new Ball(
            random(size,width-size),
            random(size,height-size),
            random(-7,7),random(-7,7),
            'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
            size,
        );
        balls.push(ball);

    }

    for(let i=0;i<balls.length;i++){
        balls[i].draw();
        balls[i].update();
    }
    requestAnimationFrame(loop);
}


loop();