class Box {
    constructor(x,y,width,height) {
      var options = {
        restitution :0.1,
        friction :2.0,
        desnity:3.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visiblity = 255;
    }
    display(){
        if(this.body.speed < 3){
            push();
            var pos= this.body.position;
            // translate(pos.x, pos.y);
            // rotate(angle);
             rectMode(CENTER);
             fill(random(0,255), random(0,255),random(0,255))
             rect(pos.x,pos.y,this.width, this.height);
             pop();
           }
        //var angle = this.body.angle;
        else
        {
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
           //age, this.body.position.x, this.body.position.y, 50, 50);
            pop();
        }
       
        
    }

    score(){
        if(this.Visiblity<0 && this.Visiblity >-105){
          score++;
        }
      }
  };

  
    