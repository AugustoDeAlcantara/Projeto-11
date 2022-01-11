var ship, shipShaking;
var ocean, oceanImg;
var clouds, cloudImg;


function preload(){
shipShaking=loadAnimation('ship-1.png', 'ship-2.png', 'ship-3.png', 'ship-4.png');
oceanImg=loadImage('sea.png');
cloudImg=loadImage('Clouds.png');
}

function setup(){
createCanvas(1400, 800);
ocean=createSprite(700, 400, 10, 10);
ocean.addImage('OceanImage', oceanImg);
ocean.scale=0.5;

ship=createSprite(680, 400, 10, 10);
ship.addAnimation('navio em alto mar', shipShaking);
ship.scale=0.4

clouds=createSprite(300, 200, 10, 10);
clouds.addImage('nuvens moveis', cloudImg);
}


function draw() {
background("lightBlue");
drawSprites();

//tentei deixar a Clouds.png se movendo e batendo nos cantos, mas o BounceOff nao reconhece o rightEdge
}
