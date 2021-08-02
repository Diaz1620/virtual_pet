var energy=80;
var hunger=50;

var angry_sad = `<img id="tama" src="images/angry-sad.gif" alt="happy tama">`;

var sleepy = `<img id="tama" src="images/sleepy.gif" alt="happy tama">`;

var playing = `<img id="tama" src="images/playing.gif" alt="happy tama">`;

var satisfied = `<img id="tama" src="images/satisfied.gif" alt="happy tama">`;

var happy = `<img id="tama" src="images/happy.gif" alt="happy tama">`;

function feed(){
    if(energy < 100 && energy >= 40){
        energy += 10;
        document.getElementById("tama").innerHTML=happy;
        display();
    }
    else if(energy < 40){
        energy += 10;
        document.getElementById("tama").innerHTML=sleepy;
    }
    else if(energy == 100){
        document.getElementById("tama").innerHTML=satisfied;
        display();
    }
    // console.log(energy);
    display();
};

function play(){
    if(energy <= 100 && energy > 40){
        energy -= 20;
        document.getElementById("tama").innerHTML=playing;
        display();
    }
    else if(energy < 50 && energy > 20){
        energy -= 20;
        document.getElementById("tama").innerHTML=sleepy;
        display()
    }
    else if(energy <= 20){
        document.getElementById("tama").innerHTML=angry_sad;
        display()
    }
    display();
};

function display(){
    document.getElementById("info").innerHTML=`<p>Energy: ${energy}</p>`;
};

display();

// add level of hunger
// add sleep button.
// add showstatus button to display energy & hunger
// must hit status button to know if it wants food or play or sleep.
// put buttons under shadow box
// change background color.