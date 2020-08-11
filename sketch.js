var dog,happyDog;
var database;
var foodS,foodStock;

function preload()
{
  dog_image = loadImage("images/dogImg.png");
  dog_image2 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(250,370,10,10);
  dog.addImage(dog_image);
  dog.scale = 0.3;

  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog_image2);
  }



  drawSprites();

  textSize(15);
  fill("black")
  text("NOTE:- Press UP_ARROW Key to Feed Tom Milk",90,20)

  if(foodS !== undefined){
    textSize(25);
    stroke(15);
    fill("black")
    text("Food Remaining:- " + foodS,130,200);
  }

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food: x - 1
  })
}


