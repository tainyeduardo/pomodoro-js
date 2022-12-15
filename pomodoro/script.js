
function addId() {
    todoid++;
}

let minutos = 25;
let segundos = 0;
let time;

let fase = "Foco";

function timer(){
    if (segundos == 0){
        minutos--;
        segundos = 60;
    }
    segundos--;
    if (minutos == 0 && segundos == 0 && fase == "Foco"){
        alert("5 minutos de descanso");
        minutos = 5;
        segundos = 0;
        fase = "Descansar";
    }
    if (minutos == 0 && segundos == 0 && fase == "Descansar"){
        alert("Volte aos estudos");
        minutos = 25;
        segundos = 0;
        fase = "Foco";
    }
    document.getElementById("timer").innerHTML = minutos + ":" + segundos;
    document.getElementById("status").innerHTML = fase;
}

function start(){
    time = setInterval(() => { timer(); }, 1000);
}

function stop(){
    clearInterval(time);
}

function reset(){
    minutos = 25;
    segundos = 00;
    document.getElementById("timer").innerHTML = minutos + ":" + segundos;
}






