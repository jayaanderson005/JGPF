var faces = [6];

function preload(){
        faces[0] = new Image(); faces[0].src = "Assets/dice-1.png";
        faces[1] = new Image(); faces[1].src = "Assets/dice-2.png";
        faces[2] = new Image(); faces[2].src = "Assets/dice-3.png";
        faces[3] = new Image(); faces[3].src = "Assets/dice-4.png";
        faces[4] = new Image(); faces[4].src = "Assets/dice-5.png";
        faces[5] = new Image(); faces[5].src = "Assets/dice-6.png";
}

function roll(imgElement){
 let number = Math.floor(Math.random() * 6);
 imgElement.src = faces[number].src;
 console.log (number);
}