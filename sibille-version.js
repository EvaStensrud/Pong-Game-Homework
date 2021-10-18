var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = Math.floor(Math.random() * 500) + 50;
var xSpeed = (1, 4);
var ySpeed = (-7, -2);
var score = 0
var ballSize = 200
var radius = ballSize/2
var backgrColour

/* object-orientierte Schreibweise
let ball = {
  xBall: Math.floor(Math.random() * 300) + 50,
  yBall: Math.floor(Math.random() * 500) + 50,
  ballSize: 20,
  radius: ballSize/2
  xSpeed: (1, 4),
  ySpeed: (-7, -2),
}
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgrColour = color(0, 0, 0)
}

function changeColour() {
    var newR = random(255)
    var newG = random(255)
    var newB = random(255)
    backgrColour = color(newR, newG, newB)
}

function draw() {
  // Background
  background(backgrColour);
  
  // Score
  textSize(24);
  text("Score: " + score, 10, 25);

/*if(yBall>=windowHeight){
    score +=1
   }
*/

  // TO DO 1: Bringe den Balken dazu der Maus auf der x-Achse zu folgen. 
  
  if(mouseIsPressed) {
    fill(color(255, 0, 255));
    ellipse(mouseX,windowHeight-15, 150, 15);
  } else {
    rect(mouseX,windowHeight-15, 90, 15);
  }
 
  // TO DO 2: Schaffst du es, dass sich der Ball frei bewegt?
  xBall += xSpeed;
  yBall += ySpeed;
  ellipse(xBall, yBall, ballSize, ballSize);

  // TO DO 3: Lass den Ball von den Seitenrändern abprallen (windowWidth/windowHeight)
  if(xBall>windowWidth-radius || xBall<0+radius){
    xSpeed *=-1;
  } 
  
  if(yBall<0+radius){
    ySpeed *=-1
  }

// Hintergrundfarbe ändert sich, sobald der Ball am Rand anstösst
  if(xBall>windowWidth-radius|| xBall+radius<0) {
    changeColour()
    }

  // TO DO 4: Lass den Ball vom Balken aprallen, falls sie sich berühren

  if((yBall+radius>windowHeight-15) && (xBall>mouseX && xBall<mouseX+90)){
     /* andere Schreibweise
     xSpeed = -xSpeed;
     */
    xSpeed *=-1;
    ySpeed *=-1; 
    }
  }
  
