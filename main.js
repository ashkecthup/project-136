status="";
objects=[];

function preload(){
    
}

function setup(){
    video=createCapture(VIDEO);
    video.size(380,380)
    canvas=createCanvas(380,380);
    canvas.center()
}

function draw(){
    image(video,0,0,480,380)
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status:detecting objects";

}

function modelloaded(){
    console.log("modelloaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}