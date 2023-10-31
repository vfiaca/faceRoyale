let video;
let canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowWidth * 16 / 9);
    video = createCapture(VIDEO);
    video.hide();

    faceapi = ml5.faceApi(video, faceOptions, faceReady);

}

function draw() {
    image(video, 0, 0);
    drawBoxes(detections);
}