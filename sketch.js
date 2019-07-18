let posX = 25;
let posY = 25;
let mySpeed = 3;

let enemyPosX, enemyPosY;
let enemyWidth = 50; enemyHeight = 50

let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom; 

let points = 0;

let clefairy;
let togepi;

function setup(){
    createCanvas(500, 500);
    background(0);
    textSize(15)

    rectMode(CENTER);
    
    enemyPosX = random(25, 475)
    enemyPosY = random(100, 475)

    clefairy = loadImage("clefairy.png")
    togepi = loadImage("togepi.png")
}

function draw(){
    background(0);
    
    image(togepi, enemyPosX, enemyPosY, enemyWidth, enemyHeight);
    
    // fill(255, 0, 0);
    // rect(enemyPosX, enemyPosY, enemyWidth, enemyHeight)
    
    // fill(0, 0, 255);
    // rect(posX, posY, 50,50)

    
    if(keyIsDown(LEFT_ARROW)){
        posX -= mySpeed;    
    }

    if(keyIsDown(RIGHT_ARROW)){
        posX += mySpeed;
    }

    if(keyIsDown(UP_ARROW)){
        posY -= mySpeed;
    }

    if(keyIsDown(DOWN_ARROW)){
        posY += mySpeed;
    }

    if(posX <= 25){
        posX = 25;
    }

    if(posX >= 475){
        posX = 475;
    }

    if(posY <= 25){
        posY = 25;
    }

    if(posY >= 475){
        posY = 475;
    }

    myLeft = posX - 25;
    myRight = posX + 25;
    myTop = posY - 25;
    myBottom = posY + 25;

    enemyLeft = enemyPosX - 25;
    enemyRight = enemyPosX + 25;
    enemyTop = enemyPosY - 25;
    enemyBottom - enemyPosY + 25;

    if(myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop){

    }

    else{
        // console.log("Collision");
        // fill(random(255), random(255), random(255));
        // text("Your colliding with your enemy!!!", 255, 480);

        points++

        enemyPosX = random(25, 475)
        enemyPosY = random(100, 475)
        
    }
    fill(255);
    text("Enemies colleted: " + points, 350, 25)
}

