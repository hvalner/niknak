function setup(){
	createCanvas(windowWidth,windowHeight);
	noStroke();

}
function draw(){
		
	background(255,255,255,2+25*(mouseX/windowWidth));
	
	translate(windowWidth/2, windowHeight/2); 

	rotate(radians(frameCount*1.25));
	rotate(radians(frameCount*120));

	
	fill(249,61,110);
	rect(0, 0, 25,25,50);
	
	fill(74,193,210);
	rect(20,20, 25,25,50);
	
	fill(255,206,0);
	rect(40, 40, 25, 25, 50);

}


function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
