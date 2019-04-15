
class Star {

constructor() {
	this.x = random(-width/2, width/2);
	this.y = random(-height/2, height/2);
	this.z = random(width);
	
	
	this.position = createVector(this.x, this.y, this.z);
	this.velocity = createVector(0,0,0);
	this.acceleration = createVector(0,0,0);
}

show() {
	fill(254);
	stroke(20,20,70);

	this.u = sqrt(width * width + height * height)/100; // the unit length
	
	let sx = map(this.position.x/this.position.z, 0, 1,0, width);
	let sy = map(this.position.y/this.position.z, 0, 1,0, height);
	
	let size = map(this.position.z, width, 0, 0, this.u);

	let px = map(this.position.x/this.z, 0, 1,0, width);
	let py = map(this.position.y/this.z, 0, 1,0, height);
	
	line(px, py, sx, sy); 
	
	noStroke();
	ellipse(sx, sy, size, size);
	
}

update() {
	this.position.z -= this.u;

	if (this.position.z < 1) {
		
		this.x = random(-width/2, width/2);
		this.y = random(-height/2, height/2);
		this.z = random(width);
		
		this.position = createVector(this.x, this.y, this.z);
		
		this.position.z = width;
	}

}

}
