let startTime, updatedTime, difference;
let timer;
let running = false;
let lapCount = 1;

function start(){
    if(!running){
        startTime = new Date().getTime() - (difference || 0);
        timer = setInterval(updateTime, 1000);
        running = true;
    }
}

function pause(){
    clearInterval(timer);
    running = false;
}

function reset(){
    clearInterval(timer);
    running = false;
    difference = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("laps").innerHTML = "";
    lapCount = 1;
}

function lap(){
    if(running){
        const lapTime = document.createElement("li");
        lapTime.innerText = "Lap " + lapCount++ + " : " +
            document.getElementById("display").innerText;
        document.getElementById("laps").appendChild(lapTime);
    }
}

function updateTime(){
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let seconds = Math.floor((difference / 1000) % 60);
    let minutes = Math.floor((difference / (1000 * 60)) % 60);
    let hours = Math.floor((difference / (1000 * 60 * 60)));

    document.getElementById("display").innerHTML =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
}
