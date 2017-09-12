

function Pipe () {
	this.bottom = random(height/2);
	this.x = width;
	this.w = 20;
	this.missed = false;
	this.got = false;

	this.miss = function (bee) {
		if ((bee.y + (img.height/2)) > height - this.bottom) {
	      if (bee.x + (img.width/2) > this.x && bee.x + (img.width/2)< this.x + this.w) {
	        this.missed = true;
	        if(frameCount % 2 == 0){
	        	score -= 1;
	        }
	        return true;
	      }
	    }
	    return false;
	}

	this.gotit = function(bee) {
		if (bee.y+(img.height/2) < height-this.bottom && bee.y+(img.height/2) > height-this.bottom-flowerimg.height) {
	      if (bee.x + (img.width/2) > this.x && bee.x + (img.width/2)< this.x + this.w) {
	        this.got = true;
	        if(frameCount%4 == 0){
	        	score +=1;
	        }
	        return true;
	      }
	    }
	    return false;
	}

	this.show = function() {
		fill(255);

		if (this.missed) {
        	fill(255, 0, 0);
        	bee.y = height/4;
        	bee.x = 50;
        }

        if (this.got) {
        	fill(0,255,0)
        }

		rect(this.x, height-this.bottom, this.w, this.bottom);
		image(flowerimg, (this.x-(flowerimg.width/2))+10, height-this.bottom-(flowerimg.height/2));

	}

	this.update = function() {
		this.x -= speed;
		if(score > changescore && frameCount%15 == 0){
			speed +=1;
			changescore += 10;
		}
	}

	this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }

  }
}