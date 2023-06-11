status = "";

function preload(){
    flower_vase_image = loadImage("flower-vase.jpg");
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
    objectDetector.detect(flower_vase_image, gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(flower_vase_image, 0, 0, 640, 350);
    if(status != ""){
        for(i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            fill(255,0,0);
            percent = floor(objects[i].confidence * 100)
            noFill();
            text(objects[i].label + " "+ percent + "%", objects[i].x + 15, objects[i].y + 15);
            stroke(255, 0, 0);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}