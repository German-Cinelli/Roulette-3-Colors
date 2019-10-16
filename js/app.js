// Form
var formulario = document.getElementById('formulario');

var numero = document.getElementById('numero');

var divsaldo = document.getElementById('divsaldo');
var tryAgain = document.querySelector('#try');

// Bet
var bet1 = document.querySelector('#bet1');
var bet2 = document.querySelector('#bet2');
var bet3 = document.querySelector('#bet3');
var bet4 = document.querySelector('#bet4');
var bet5 = document.querySelector('#bet5');

// Buttons
var red = document.getElementById('red');
var green = document.getElementById('green');
var black = document.getElementById('black');

// Sounds
var ready = document.querySelector('#ready');
var spin = document.querySelector('#spin');
var winner = document.querySelector('#winner');
var loser = document.querySelector('#loser');

var cadena = ''; // Color List
var saldo = 10000; // Saldo
var sorteados = []; // List sorteados

// Objects
var object = {
    "red": 0,
    "green": 0,
    "black": 0
};

// Run
mostrarsaldo();
time();

function listaSorteados(){

    if(sorteados.length >= 16){
        sorteados.splice(0,1);
    }
    var cadena = '';

    for (var i = 0;i < sorteados.length; i++){

        if(sorteados[i] == 1) {
            cadena += `<span class="badge badge-pill badge-danger"> </span>`;
        }
        if(sorteados[i] == 2) {
            cadena += `<span class="badge badge-pill badge-dark"> </span>`;
        }
        if(sorteados[i] == 3) {
            cadena += `<span class="badge badge-pill badge-success"> </span>`;
        }
    }
    list.innerHTML = cadena;
}

function mostrarsaldo(){
    if(saldo != 0){
        divsaldo.innerHTML = `<label id="saldo" class="badge badge-primary" style="font-size: 15px;" for="">$${saldo}</label>`;
    } else {
        divsaldo.innerHTML = `<label id="saldo" class="badge badge-danger" style="font-size: 15px;" for="">$${saldo}</label>`;
    }
}

// Clear label bet
function limpiarap(){
    object.red = 0;
    object.green = 0;
    object.black = 0;

    ap1.innerHTML = ``;
    ap2.innerHTML = ``;
    ap3.innerHTML = ``;

}

 // Clear color Win
function limpiarGanador(){
    setTimeout(function(){
        sorteado.innerHTML = `<label for=""></label>`;
        win.innerHTML = ``;
        if(saldo == 0 && object.red == 0 && object.green == 0 && object.black == 0){
            tryAgain.innerHTML = `
                <button class="btn btn-outline-light text-center">Try again!</button>
            `;
        }
    },3000);
}

//Button Try Again
tryAgain.addEventListener('click', addTry);

function addTry(){
    saldo = 10000;
    divsaldo.innerHTML = `<label id="saldo" class="badge badge-danger" style="font-size: 15px;" for="">$${saldo}</label>`;
    tryAgain.innerHTML = ``;
    mostrarsaldo();
}

//Enable BTN
function enabledBtn(){
    red.disabled = false;
    green.disabled = false;
    black.disabled = false;
}

//Disable BTN
function disabledBtn(){
    red.disabled = true;
    green.disabled = true;
    black.disabled = true;
}

function youLose(){
    win.innerHTML = `<label for="" class="badge badge-danger">You Lose!</label>`;
}

function time(){
    var timer = 12;
    seconds = document.querySelector('#seconds');
    var interval = window.setInterval(function(){
        if (timer <= 1){
            seconds.innerHTML = `Ready!`;
            ready.play();
            spin.play();
            disabledBtn();
            miRuleta.startAnimation();
            window.clearInterval(interval);
        } else {
            timer--;
            seconds.innerHTML = timer;
        }
    },1000)
}

/* ####################### BUTTONS BET ####################### */
bet1.addEventListener('click', function(e){
    e.preventDefault();
    numero.value = "500";
})

bet2.addEventListener('click', function(e){
    e.preventDefault();
    numero.value = "1000";
})

bet3.addEventListener('click', function(e){
    e.preventDefault();
    numero.value = "2000";
})

bet4.addEventListener('click', function(e){
    e.preventDefault();
    numero.value = "5000";
})

bet5.addEventListener('click', function(e){
    e.preventDefault();
    numero.value = "10000";
})

/* ######################### BUTTONS ######################### */
//Event Red Click
red.addEventListener('click', function(e){
    e.preventDefault();
    var deposito = Number(document.getElementById('numero').value);
    if (deposito > 0 && saldo > 0 && deposito <= saldo){
        saldo -= deposito;
        object.red += deposito;
        mostrarsaldo();
        ap1.innerHTML = `
                    <label id="apuestared" class="badge badge-dark" for="">$${object.red}</label>
                `;
    }
});

//Event Green Click
green.addEventListener('click', function(e){
    e.preventDefault();
    var deposito = Number(document.getElementById('numero').value);
    if(deposito > 0 && saldo > 0 && deposito <= saldo){
        saldo -= deposito;
        object.green += deposito;
        mostrarsaldo();
        ap2.innerHTML = `
                    <label id="apuestagreen" class="badge badge-dark" for="">$${object.green}</label>
                `;
    }
});

//Event Black Click
black.addEventListener('click', function(e){
    e.preventDefault();
    var deposito = Number(document.getElementById('numero').value);
    if(deposito > 0 && saldo > 0 && deposito <= saldo){
        saldo -= deposito;
        object.black += deposito;
        mostrarsaldo();
        ap3.innerHTML = `
                    <label id="apuestablack" class="badge badge-dark" for="">$${object.black}</label>
                `;
    }
});


var miRuleta = new  Winwheel({
    'numSegments': 15,
    'outerRadius': 170,
    'innerRadius': 120,
    'textAlignment'  : 'center',
    'textOrientation' : 'curved',
    'segments': [
        {'fillStyle': '#1daf30', 'id': '3', 'text' : '0', 'textFillStyle': '#FFFFFF', 'textFontSize' : 10, 'textFontFamily' : 'Arial'},
        {'fillStyle': '#bb2626', 'id': '1', 'text' : '1', 'textFillStyle': '#FFFFFF', 'textFontSize' : 10, 'textFontFamily' : 'Arial'},
        {'fillStyle': '#141414', 'id': '2', 'text' : '8', 'textFillStyle': '#FFFFFF', 'textFontSize' : 10, 'textFontFamily' : 'Arial'},
        {'fillStyle': '#bb2626', 'id': '1', 'text' : '2', 'textFillStyle': '#FFFFFF', 'textFontSize' : 10, 'textFontFamily' : 'Arial'},
        {'fillStyle': '#141414', 'id': '2', 'text' : '9', 'textFillStyle': '#FFFFFF', 'textFontSize' : 10, 'textFontFamily' : 'Arial'},
        {'fillStyle': '#bb2626', 'id': '1', 'text' : '3', 'textFillStyle': '#FFFFFF', 'textFontSize' : 10, 'textFontFamily' : 'Arial'},
        {'fillStyle': '#141414', 'id': '2', 'text' : '10', 'textFillStyle': '#FFFFFF', 'textFontSize' : 10, 'textFontFamily' : 'Arial'},
        {'fillStyle': '#bb2626', 'id': '1', 'text' : '4', 'textFillStyle': '#FFFFFF', 'textFontSize' : 10, 'textFontFamily' : 'Arial'},
        {'fillStyle': '#141414', 'id': '2', 'text' : '11', 'textFillStyle': '#FFFFFF', 'textFontSize' : 10, 'textFontFamily' : 'Arial'},
        {'fillStyle': '#bb2626', 'id': '1', 'text' : '5', 'textFillStyle': '#FFFFFF', 'textFontSize' : 10, 'textFontFamily' : 'Arial'},
        {'fillStyle': '#141414', 'id': '2', 'text' : '12', 'textFillStyle': '#FFFFFF', 'textFontSize' : 10, 'textFontFamily' : 'Arial'},
        {'fillStyle': '#bb2626', 'id': '1', 'text' : '6', 'textFillStyle': '#FFFFFF', 'textFontSize' : 10, 'textFontFamily' : 'Arial'},
        {'fillStyle': '#141414', 'id': '2', 'text' : '13', 'textFillStyle': '#FFFFFF', 'textFontSize' : 10, 'textFontFamily' : 'Arial'},
        {'fillStyle': '#bb2626', 'id': '1', 'text' : '7', 'textFillStyle': '#FFFFFF', 'textFontSize' : 10, 'textFontFamily' : 'Arial'},
        {'fillStyle': '#141414', 'id': '2', 'text' : '14', 'textFillStyle': '#FFFFFF', 'textFontSize' : 10, 'textFontFamily' : 'Arial'},
    ],
    'animation': {
        'type': 'spinToStop', // Spin to Stop
        'duration':12, // Spin duration
        'callbackFinished': 'Mensaje()', // Function MSG show
        'callbackAfter': 'dibujarIndicador()', // Function to paint indicator

        // Other function

        'easing'       : 'Power2.easeInOut',
        'spins'        : 5,
    }
});

function Mensaje() {
    var SegmentoSeleccionado = miRuleta.getIndicatedSegment();

    switch (SegmentoSeleccionado.id) {
        case '1':
            saldo += (object.red)*2;
            sorteado.innerHTML = `
                    <label for="" style="color:#fff"><span class="badge badge-pill badge-danger">Red!</span></label>
                `;

            if (object.red > 0){
                win.innerHTML = `
                        <label for="" class="badge badge-success">You Win! $${object.red*2}</label>
                    `;
                winner.play();
            } else {
                youLose();
                loser.play();
            }
            break;

        case '2':
            saldo += (object.black)*2;
            sorteado.innerHTML = `
                    <label for="" style="color:#fff"><span class="badge badge-pill badge-dark">Black!</span></label>
                `;

            if (object.black > 0){
                win.innerHTML = `
                        <label for="" class="badge badge-success">You Win! $${object.black*2}</label>
                    `;
                winner.play();
            } else {
                youLose();
                loser.play();
            }
            break;

        case '3':
            saldo += (object.green)*14;
            sorteado.innerHTML = `
                    <label for="" style="color:#fff"><span class="badge badge-pill badge-success">Green!</span></label>
                `;

            if (object.green > 0){
                win.innerHTML = `
                        <label for="" class="badge badge-success">You Win! $${object.green*14}</label>
                    `;
                winner.play();
            } else {
                youLose();
                loser.play();
            }
            break;

        default:
            alert('There was an error');

    }

    limpiarGanador();
    mostrarsaldo();
    limpiarap();

    setTimeout(function(){
        miRuleta.stopAnimation(false);
        miRuleta.rotationAngle = miRuleta.rotationAngle % 360;
        miRuleta.draw();
        dibujarIndicador();
    }, 1500);
    enabledBtn();
    time();
    sorteados.push(SegmentoSeleccionado.id);
    listaSorteados();
}

function dibujarIndicador() {
            var ctx = miRuleta.ctx;
            var SegmentoSeleccionado = miRuleta.getIndicatedSegment();
            ctx.strokeStyle = '#000';
            ctx.fillStyle = SegmentoSeleccionado.fillStyle;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(180, 10);
            ctx.lineTo(220, 10);
            ctx.lineTo(200, 40);
            ctx.lineTo(180, 10);
            ctx.stroke();
            ctx.fill();
}

dibujarIndicador();