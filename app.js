var energy=80;

function feed(){
    energy += 10;
    console.log(energy);
    display();
}

function display(){
    document.getElementById("info").innerHTML=`<p>Energy: ${energy}</p>`;
}

display();