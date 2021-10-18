var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var xSpeed = (7, 2);
var ySpeed = (-2, -7);
var score = 0
let rectWidth = 90
let rectHight = 15
let colour = 0
//let colour = (0, 255, 255)

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(0, windowWidth);
  y = random(0, windowHeight);

}

function draw() {
  // Background
  background(colour);
  fill(255, 0, 255);
  // das ist ja noch einmal gut gegangen
  
  // Score
  textSize(24);
  text("Score: " + score, rectWidth, rectHight);


  rect(mouseX,windowHeight-15, 90, 15);
  


  // TO DO 1: Bringe den Balken dazu der Maus auf der x-Achse zu folgen. 

  x += xSpeed;
  y += ySpeed;

  //ellipse(xBall, windowHeight/2, 20, 20);
  ellipse(x, y, 20, 20);


  // TO DO 2: Schaffst du es, dass sich der Ball frei bewegt?

if(x > windowWidth || x < 0){
xSpeed = -xSpeed;
//background(0, 255, 0);
  } 
  if(y > windowHeight || y < 0){
ySpeed = -ySpeed;


//background(255, 0, 0);

//if(y < (windowHeight-10) && x < mouseX){
  //angle = -1 * Math.PI / 4;

}


function changeColour(){
  colour = 255
  }

 if(x > windowWidth || x < 0) {
   changeColour()
  }

}

//if(y > windowHeight-10 && x = mouseX){
  //xSpeed = -xSpeed;

//rect(mouseX,windowHeight-15, 90, 15);

  // TO DO 3: Lass den Ball von den Seitenrändern abprallen (windowWidth/windowHeight)

  // TO DO 4: Lass den Ball vom Balken aprallen, falls sie sich berühren

  //hier ist schluss