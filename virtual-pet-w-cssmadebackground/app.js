var energy=80;
var hunger=50;

var angry_sad = `<img class="tama" src="images/angry-sad.gif" alt="happy tama">`;

var sleepy = `<img class="tama" src="images/sleepy.gif" alt="happy tama">`;

var playing = `<img class="tama" src="images/playing.gif" alt="happy tama">`;

var satisfied = `<img class="tama" src="images/satisfied.gif" alt="happy tama">`;

var happy = `<img class="tama" src="images/happy.gif" alt="happy tama">`;

var sleeping = `<img class="tama sleep" src="images/sleeping.gif" alt="happy tama">`

function feed(){
    if(energy < 100 && energy >= 40 ){
        energy += 5;
        hunger += 10;
        document.getElementById("tama").innerHTML=happy;
    
    }
    else if(energy < 40){
        energy += 5;
        hunger += 10;
        document.getElementById("tama").innerHTML=sleepy;
    }
    else if(energy == 100 || hunger == 100){
        document.getElementById("tama").innerHTML=satisfied;
    
    }
    if(hunger < 100){
        hunger += 10
    }
    // console.log(energy);

};

function play(){
    if(energy <= 100 && energy > 40 && hunger > 20){
        energy -= 20;
        hunger -= 10;
        document.getElementById("tama").innerHTML=playing;
    
    }
    else if(energy < 50 && energy > 20 && hunger > 20){
        energy -= 20;
        hunger -= 10;
        document.getElementById("tama").innerHTML=sleepy;
    }
    else if(energy <= 20 || hunger <= 20){
        document.getElementById("tama").innerHTML=angry_sad;
    }
};

function sleep(){
    if(energy != 100){
        energy = 100;
        document.getElementById("tama").innerHTML=sleeping;
    }
}

function backToTama(){
    if(energy > 40){
        document.getElementById("tama").innerHTML=happy;
    }
    else if(energy <= 40 && energy > 20){
        document.getElementById("tama").innerHTML=sleepy;
    }
    else if(energy <= 20){
        document.getElementById("tama").innerHTML=angry_sad;
    }
}

function display(){
    // document.getElementById("info").innerHTML=`<p>Energy: ${energy}</p>`;
    document.getElementById("tama").innerHTML=`
    <p>Energy: ${energy}</p>
    <p>Hunger: ${hunger}</p>
    `;
};


// add level of hunger
// add sleep button.
// add showstatus button to display energy & hunger
// must hit status button to know if it wants food or play or sleep.
// put buttons under shadow box
// change background color.