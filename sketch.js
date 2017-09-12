var bee;
var img;
var flowerimg
var pipes = [];
var score = 0;
var speed = 5;
var changescore = 10;

function setup () {
  createCanvas(400,600);
  bee = new Bee();
  img = loadImage("bee.png");
  flowerimg = loadImage("flower.png");
  noStroke();
  pipes.push(new Pipe());
}

function draw () {
  background(156,178,147);


  if (frameCount % 80 == 0) {
  	pipes.push(new Pipe());
    console.log("speed: " + speed);
  }

  for(var i = 0; i < pipes.length; i++){
  	pipes[i].show();
  	pipes[i].update();

    if (pipes[i].miss(bee)){
      console.log("HITS");
    }
    if (pipes[i].gotit(bee)){
      console.log("AYE");
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
    
  }

  bee.update();
  bee.show();

  textSize(32);
  text("Score: " + score, 10, 30);
  if (frameCount < 300) {
    textSize(16);
    text("Space to Jump", 10, 55);
  }
}


function keyPressed () {
	if (key == ' ') {
		bee.up();
	}
  if (keyCode === UP_ARROW){
    //speed +=1;
  }
}

function touchStarted() {
	if (value > 0) {
    		bee.up();
  	}
}




