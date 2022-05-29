

function preload(){
    
}

function setup(){
    canvas = createCanvas(800, 800);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.center();
    video.size(450, 300);
}

function draw() {
    image(video, 180, 230, 450, 300);
    fill(0, 128, 0);
    stroke(0,128, 0);
    rect(40, 130, 700, 40);

    rect(40, 585, 700, 40);
    
    rect(30, 130, 40, 500);

    rect(720, 130, 40, 500);


    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(740, 150, 70);

    circle(740, 605, 70);

    circle(50, 150, 70);

    circle(50, 605, 70);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}