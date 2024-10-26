var mouseprevX = 400;
var mouseprevY = 500;


let star1, star2, star3, star4, star5, star6;

function setup() {
    new Canvas("fullscreen");
    star1 = new Sprite(400, 500, 30);
	star1.color = 'white';
    star2 = new Sprite(700, 230, 25);
	star2.color = 'white';
    star3 = new Sprite(800, 300, 15);
	star3.color = 'white';
    star4 = new Sprite(900, 420, 35);
	star4.color = 'white';
    star5 = new Sprite(1000, 600, 50);
	star5.color = 'white';
    star6 = new Sprite(1300, 350, 36);
    star6.color = 'white';


    stroke(250);
}

function draw() {
    background(1, 20, 28);
    noLoop();


    textSize(12);
    fill('white');
    text('1', 400, 480);
    text('2', 695, 210);
    text('3', 795, 280);
    text('4', 895, 400);
    text('5', 1000, 570);
    text('6', 1295, 320);
}

function mouseClicked() {
    line(mouseprevX, mouseprevY, mouseX, mouseY);
    mouseprevX = mouseX;
    mouseprevY = mouseY;
  }