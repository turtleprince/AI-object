var Status = "";


function preload(){

}

function setup(){
canvas = createCanvas(650, 500);
background("red");
canvas.position(630,300);

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, model_loaded);
    poseNet.on('pose', got_results);

}

function draw(){
    image(video, 0, 0, 650, 500);

}

function Start(){
    objectDetector = ml5.objectDetector("cocossd", model_loaded);
    document.getElementById("Status").innerHTML = "Status : Dectecting Objects";
    
}

function model_loaded(){
    console.log("Coccossd model loaded");
    status = true;

}

function got_results(){
    
}