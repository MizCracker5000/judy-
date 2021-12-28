var cerbjudy,cerbjudyImage;
var jugador,jugadorImage;
function preload() {
  cerbjudyImage = loadImage("cerbjudy.png")
   jugadorImage = loadImage("JugadorJudy.png")
  }
function setup() {

  createCanvas(800,400);
  cerbjudy = createSprite(400, 200, 50, 50);
  cerbjudy.addImage(cerbjudyImage)
  jugador = createSprite(200,200,50,50);
  jugador.addImage(jugadorImage)
}

function draw() {
  background(255,255,255);  
  if (keyDown(rightArrow)) {
    jugador.velocityY=5;
  }
  drawSprites();
}


