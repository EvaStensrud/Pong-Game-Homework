var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = Math.floor(Math.random() * 500) + 50;
var xSpeed = (4, 8);
var ySpeed = (-8, -4);
var score = 0
var ballSize = 100
var radius = ballSize/2
var backgrColour
//var colourBall
var rectWidth = 150
var rectHeight = 20
var fieldWidth = 1000
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
  //colourBall = fillStyle(0 ,0 , 0)
}
//Hintergrundfarbe ändert sich (Bedingung: bei Seitenkontakt wird unten aufgerufen)
function changeColour() {
    var newR = random(255)
    var newG = random(255)
    var newB = random(255)
    backgrColour = color(newR, newG, newB)
}

/*//Farbe Ball ändert sich random
function changeColourBall() {
    var ballR = random(255)
    var ballG = random(255)
    var ballB = random(255)
    colourBall = fillStyle(ballR, ballG, ballB)
}*/

//Game over
function gameOver() {
    text("Game over", 450, 350);  
}

function draw() {
// Background
  background(backgrColour);

//Ballfarbe
    //fillStyle(colourBall);

// Koordinatensystem verschieben
  translate(50, 50);

//Linie oben
  line(0, 0, 1000, 0);
//Linie links
  line(0, 0, 0, 650);
//Linie rechts
  line(1000, 0, 1000, 650);

  stroke('purple'); // Change the color
  strokeWeight(10);
  
// Score
  textSize(24);
  text("Score: " + score, 1050, 10);
  text("Bei grün: abprallen lassen", 1050, 50);
  text("Bei rot: durch lassen", 1050, 90);


/*if(yBall>=windowHeight){
    score +=1
   }
*/

// TO DO 1: Bringe den Balken dazu der Maus auf der x-Achse zu folgen. 
  
  /*if(mouseIsPressed) {
    fill(color(255, 0, 255));
    ellipse(mouseX,fieldHeight-rectHeight, rectWidth, rectHeight);
  } else {*/
    rect(mouseX,fieldHeight-rectHeight, rectWidth, rectHeight);
  //}
 
// TO DO 2: Schaffst du es, dass sich der Ball frei bewegt?
  xBall += xSpeed;
  yBall += ySpeed;
  ellipse(xBall, yBall, ballSize, ballSize);

// TO DO 3: Lass den Ball von den Seitenrändern abprallen (windowWidth/windowHeight)
  if(xBall>fieldWidth-radius || xBall+radius<100){
    xSpeed *=-1;
  } 

  if(yBall<0+radius){
    ySpeed *=-1
  }

// Hintergrundfarbe ändert sich, sobald der Ball am Rand anstösst
  if(xBall>fieldWidth-radius || xBall+radius<100 || yBall<0+radius) {
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
   // changeColourBall();
    }

    if (yBall>fieldHeight) {
    gameOver()
    }

  }
  
