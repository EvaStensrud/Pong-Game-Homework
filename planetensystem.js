let a = 0

function setup() {
  createCanvas(400, 400);
}
function draw() {
  translate(width/2, height/2)
  background(220);
  
  let diameter = 300
  let radius = diameter/2
  
  ellipse(0, 0, diameter)
  
  let xPos = cos(a) * radius
  let yPos = sin(a) * radius
  ellipse(xPos, yPos, 10)

  let xPos1 = cos(a) * radius
  let yPos1 = sin(a) * radius
  ellipse(xPos1+20, yPos1+20, 30)
  
  push()
  translate(xPos, yPos)
  let miniRadius = 20
  let miniY = cos(a) * miniRadius
  let miniX = sin(a) * miniRadius
  ellipse(miniX, miniY, 5)
  pop()

  push()
  translate(xPos+10, yPos+10)
  let miniRadius2 = 15
  let miniY2 = cos(a) * miniRadius2
  let miniX2 = sin(a) * miniRadius2
  ellipse(miniX2, miniY2, 10)
  pop()

  push()
  translate(xPos+20, yPos+20)
  let miniRadius3 = 100
  let miniY3 = cos(a) * miniRadius3
  let miniX3 = sin(a) * miniRadius3
  ellipse(miniX3, miniY3, 5)
  pop()
  
  a += PI/180
}