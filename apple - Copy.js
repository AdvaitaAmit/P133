status = "";

function preload(){
    apple_image = loadImage("alarm.jpg");
}

function setup(){
    canvas = createCanvas(640, 350);
    canvas.position(315, 200);
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";  
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(apple_image, gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(apple_image, 0, 0, 640, 350);
}