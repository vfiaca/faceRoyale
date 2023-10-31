let video;
let canvas;

function preload() {
    video = createCapture(VIDEO);
    video.hide();
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    faceapi = ml5.faceApi(video, faceOptions, faceReady);
}

function draw() {
    image(video, 0, 0);
    drawBoxes(detections);
}

function Instructions() {
    fill(230, 0, 0);
    textSize(20);
    noStroke();
    text('Get your face in the frame or get eliminated!', windowWidth / 2, windowHeight / 2);
}

function BlackScreen() {
    fill(0, 0, 0);
    rect(0, 0, windowWidth, windowHeight);
}

