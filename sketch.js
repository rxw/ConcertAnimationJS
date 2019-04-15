let stars = [];
let space, dspace = false;
let vogue, nouvelle;
let i, j = 0;
let bottle;

function setup() {
	createCanvas(windowWidth, windowHeight);
	vogue = loadFont("future war.ttf");
	nouvelle = loadFont("nouvelle_vague_final.ttf");

	bottle = loadImage("soju.png");

	for (let i = 0; i < 200; i++) {
		stars.push(new Star());
	}
}

function draw() {
	background(10,10,60);
	translate(width/2, height/2);
	textSize(i);
	
	let u = sqrt(width * width + height * height)/100;
	bottle.resize(u*2.5, u*5);

	for (star of stars) {
		star.show();
		star.update();
	}
	
	if (space) {
		textSize(u*5);//map(Math.sin(Date.now()/300), -1, 1, u*4.5, u*5));
		fill(255);
		textAlign(CENTER);
		textFont(vogue);
		text("WELCOME TO THE",map(Math.sin(Date.now()/200), -1, 1, 0, u) , map(Math.sin(Date.now()/300), -1, 1, 0, u));

	}
	if (dspace) {
		textSize(u*5);//map(Math.sin(Date.now()/300), -1, 1, u*4.5, u*5));
		text("BLU ZONE", map(Math.sin(Date.now()/200), -1, 1, 0, u), map(Math.sin(Date.now()/300), -1, 1, u*6, u*7));
		image(bottle, map(Math.sin(Date.now()/200), -1, 1, u*5*2, u*5*2 + u), map(Math.sin(Date.now()/300), -1, 1, u, u*2));
	}

}

function keyTyped() {
	if (key === " " && !space) {
		i = 0;
		space = !space;
		console.log("space");
	} else if (key === " " && space && !dspace) {
		j = 0;
		dspace = !dspace;
	} else if (key === " ") {
		space = !space;
		dspace = !dspace;
	}
}

function touchEnded() {
	if (!space) {
		i = 0;
		space = !space;
		console.log("space");
	} else if (space && !dspace) {
		j = 0;
		dspace = !dspace;
	} else {
		space = !space;
		dspace = !dspace;
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
