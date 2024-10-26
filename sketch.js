let star1, star2, star3, star4, star5, star6; //white circles that show up in case 1
let stage = 0;
let linestartPoint = []; //this array stores info about the stars/circles clicked, forming a "connection" between them
let selectedStar; 

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
    switch (stage){
        case 0:
            //intro text
            background('black');
            textSize(50);
            fill(255);
            text("Try to connect all of the dots in order!", 500, 100);

            star1.visible = false;
            star2.visible = false;
            star3.visible = false;
            star4.visible = false;
            star5.visible = false;
            star6.visible = false;

            if (millis() > 7000) {
                stage = 1;
            }
            break;
        case 1:
                //game
                background(1, 20, 28);
                
                textSize(12);
                fill('white');
                text('1', 400, 480);
                text('2', 695, 210);
                text('3', 795, 280);
                text('4', 895, 400);
                text('5', 1000, 570);
                text('6', 1295, 320);

                star1.visible = true;
                star2.visible = true;
                star3.visible = true;
                star4.visible = true;
                star5.visible = true;
                star6.visible = true;
                
                for (let linepoints of linestartPoint) {
                    let l1 = linepoints[0];
                    let l2 = linepoints[1];
                    line(l1.x, l1.y, l2.x, l2.y);
                }

                if (selectedStar) {
                    line(startCircle.x, startCircle.y, mouseX, mouseY);
                }

                if (mouse.presses()) {
                    if (dist(mouseX, mouseY, star1.x, star1.y) < 10) {
                        handleCircleClick(star1);
                      } else if (dist(mouseX, mouseY, star2.x, star2.y) < 10) {
                        handleCircleClick(star2);
                      } else if (dist(mouseX, mouseY, star3.x, star3.y) < 10) {
                        handleCircleClick(star3);
                      } else {
                        selectedStar = null;  // Deselect if clicking outside any circle
                      }
                }
                break;
        case 2:
                //congrats screen
                break;
    }

}