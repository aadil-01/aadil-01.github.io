let value=0;
window.onload=displayValue();

function displayValue(){
    document.getElementById("value").innerText=value;
}

function green(){
    document.getElementById("value").style.color="rgb(0, 255, 13)";
}

function red(){
    document.getElementById("value").style.color="red";
}

function incrCount(){
    value=value+1;
    displayValue();
    green();
}

function decrCount(){
    value=value-1;
    displayValue();
    red();
}