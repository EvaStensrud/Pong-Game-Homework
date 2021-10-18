var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = Math.floor(Math.random() * 500) + 50;
var xSpeed = (4, 8);
var ySpeed = (-8, -4);
var score = 0
var ballSize = 100
var radius = ballSize/2
var backgrColour
var newSize
//var windowHeight = 500
//var windowWidth = 1000
var rectWidth = 150
var rectHeight = 20
var fieldWidth = 1250
var fieldHeight = 650

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

function changeSize(){
    newW = (random(10, 100))
    newH = (random(10, 100))
newSize = ellipse(xBall, yBall, newS, newS)
}

function draw() {
  // Background
  background(backgrColour);
  translate(50, 50);
  //Linie
  line(50, 50, 1250, 50);
  line(50, 50, 50, 650);
  line(1250, 50, 1250, 650);
  line(50, 650, 1250, 650);
  
  
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
    ellipse(mouseX,fieldHeight-15, 150, 15);
  } else {
    rect(mouseX,fieldHeight-15, rectWidth, rectHeight);
  }
 
  // TO DO 2: Schaffst du es, dass sich der Ball frei bewegt?
  xBall += xSpeed;
  yBall += ySpeed;
  ellipse(xBall, yBall, ballSize, ballSize);

  // TO DO 3: Lass den Ball von den Seitenrändern abprallen (windowWidth/windowHeight)
  if(xBall>fieldWidth-radius || xBall+radius<0){
    xSpeed *=-1;
  } 
  
  if(yBall<0+radius){
    ySpeed *=-1
  }

// Hintergrundfarbe ändert sich, sobald der Ball am Rand anstösst
  if(xBall>fieldWidth-radius || xBall<0 || yBall<0) {
    changeColour()
    }

  // TO DO 4: Lass den Ball vom Balken aprallen, falls sie sich berühren
  if((yBall+radius>fieldHeight-rectHeight) && (xBall>mouseX && xBall<mouseX+rectWidth)){
    xSpeed *=-1;
    ySpeed *=-1; 
    /* andere Schreibweise
     xSpeed = -xSpeed;
     */
    score++;
    }
  }
  
