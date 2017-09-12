
function Bee () {
	this.y = height/2;
	this.x = 60;

	this.grav = 0.5;
	this.jump = -15;
	this.vel = 0;

	this.show = function () {
		image(img, this.x, this.y );
	}

	this.up = function() {
		this.vel += this.jump;
	}

	this.update = function() {
		this.y += this.vel;
		this.vel *= 0.9;
		this.vel += this.grav;

		if(this.y > height-img.height) {
		this.y = height-img.height;
		this.vel = 0;
		}

		if(this.y < 0) {
		this.y = 0;
		this.vel = 0;
		}
	}

}