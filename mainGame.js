let video;
let canvas;
let countDown;
let timeRemaining = 500;

function preload() {
    video = createCapture(VIDEO);
    // video.size(windowWidth, (windowWidth / 3) * 4)
    video.hide();
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    // frameRate(30);
    faceapi = ml5.faceApi(video, faceOptions, faceReady);
}

function draw() {
    background(220);
    // image(video, 0, 0);
    // drawBoxes(detections);

    Instructions();

    let currentTime = int(millis() / 1000);
    countDown = timeRemaining - currentTime;

    if (countDown < 1) {
        countDown = 0;
    }

    textSize(24);
    textAlign(CENTER);
    fill(0);
    text('Countdown: ' + countDown, windowWidth / 2, windowHeight / 3);

    if (countDown <= 490 && countDown > 485) {
        BlackScreen();
    }

    if (countDown <= 485 && countDown > 480) {
        image(video, 0, 0);
        drawBoxes(detections);
    }

    if (countDown <= 480 && countDown > 470) {
        image(video, 0, 0);
        video.pause();
        if (detections.length > 0) {
            textAlign(CENTER);
            text('Congratulations!', windowWidth / 2, windowHeight / 1.5);
        }
        else{
            textAlign(CENTER);
            text('You are out!', windowWidth / 2, windowHeight / 1.5);
        }
    }






}

function Instructions() {
    fill(230, 0, 0);
    textAlign(CENTER);
    textSize(20);
    noStroke();
    text('Get your face in the frame or get eliminated!', windowWidth / 2, windowHeight / 2);
}

function BlackScreen() {
    fill(0);
    rect(0, 0, windowWidth, windowHeight);
}



