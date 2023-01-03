const getRandomColor = () => `hsla(${Math.floor(Math.random() * 360)}, 100%, 50%, 1)`;

const getRandomNumber = () =>{
    return Math.floor(Math.random() * 256);
}

const getBackgroundCircle=()=>{
    return `radial-gradient(circle at -8.9% 51.2%, 
        rgb(${getRandomNumber()}, ${getRandomNumber()},${getRandomNumber()}) 0%, 
        rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}) 15.9%, 
        rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}) 15.9%, 
        rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}) 24.4%, 
        rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}) 24.5%, 
        rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}) 66%)`;
}

setInterval(() => {
    document.getElementById("red-box").style.background = getRandomColor();
    document.getElementById("blue-box").style.backgroundColor = getRandomColor();
    document.getElementById("green-box").style.backgroundColor = getRandomColor();
}, 1000);
