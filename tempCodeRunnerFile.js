function file1(){
  let camera = createCapture(VIDEO);
  // camera.hide();
  
  let liveCamera = image(camera, 0, 0);
  console.log(liveCamera);
}