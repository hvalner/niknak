var bgfidg = 255;
var reset = false;

function setup(){
	var canvas = createCanvas(75,75);
	canvas.parent('sketch31');
//	canvas.position(2*windowWidth/5,0);
	noStroke();
}
function draw(){
		
	//background(255,255,255,2+25*(mouseX/windowWidth));
	background(bgfidg,bgfidg,bgfidg,2+25*(mouseX/windowWidth));
	
	if (reset) {background(bgfidg,bgfidg,bgfidg); reset = false;};
	
	translate(37.5, 37.5); 

	rotate(radians(frameCount*1.25));
	rotate(radians(frameCount*120));
	scale(.35);
	
	fill(249,61,110);
	rect(0, 0, 25,25,50);
	
	fill(74,193,210);
	rect(20,20, 25,25,50);
	
	fill(255,206,0);
	rect(40, 40, 25, 25, 50);

}


function windowResized(){
	// resizeCanvas(windowWidth, windowHeight);
}
