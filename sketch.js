var newWidth = 40;
var newHeight = 40;

//setup function executes once
function setup(){
 createCanvas(600,400);
 background(50);
 
}

//draw function loops forever
function draw(){
    // background(50);
    if (mouseIsPressed){
    noStroke();
    fill(55,183,242,100);
    line(30, 20, 85, 75);
    ellipse(mouseX,mouseY,newWidth,newHeight);
    }
}