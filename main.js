var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0zlp0m0_V/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("detected").innerHTML = "Detected dog - "+dog+", Detected cat - "+cat+", Detected lion - "+lion+", Detected cow - "+cow+"";
        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("Animal_voices").innerHTML = "Detected voice is of - " + results[0].label;
        document.getElementById("Animal_voices").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img=document.getElementById("animal_images");

        if(results[0].label == "Barking"){
            img.src="https://i.pinimg.com/originals/2c/64/c5/2c64c5b293ab4e80f3d94d2ba456ba1b.jpg"
            dog = dog + 1;
        }
         else if(results[0].label == "Meowing"){
            img.src="https://i.pinimg.com/736x/69/c1/96/69c196c141cb5a18aa8a1878d591f555.jpg"
            cat = cat + 1;
        }
        else if(results[0].label == "Roar"){
            img.src="https://www.shutterstock.com/image-vector/cute-lion-sitting-cartoon-vector-260nw-2153609741.jpg"
            lion = lion + 1;
        }
        else if(results[0].label == "Mooing"){
            img.src="https://img.freepik.com/premium-vector/cute-cow-cartoon-icon_42750-297.jpg?w=2000"
            cow = cow + 1;
        }
    }
}