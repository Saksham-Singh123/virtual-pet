var dog,happyDog,database,foodS,foodStock;
var dog1,dog2;
var database;
function preload(){
  dog1 = loadImage("images/dogImg.png");
  dog2 = loadImage("images/dogImg1.png");
}
function setup() {
	createCanvas(500,500);
  database = firebase.database();
  dog = createSprite(200,200,20,20);
  dog.addImage(dog1);
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);

}
function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog2);

  }
  drawSprites();
  textSize(20);
  text("Note:Press Up_Arrow to feed rock a bottle of milk!");

}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}