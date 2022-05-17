var campo = []
var colunas, linhas, bombs;
var jprimeiro, varredura
var quadrados = 0
var lin, col;
var min = 0; seg = 0;
var tm = true
var win = 0, score
var dificuldade
var cl

function iniciar(params) {
    document.getElementById('p1').style.display = 'none';
    document.getElementById('p2').style.display = 'block';
    jprimeiro = true
    varredura = false
}

function facil(params) {
    document.getElementById('p2').style.display = 'none';
    document.getElementById('p3').style.display = 'block';
    document.getElementById('dificuldadeX').innerText = 'INICIANTE';
    linhas = 10
    colunas = 8
    bombs = 10
    gerarcampo1()
    dificuldade = 'facil'
}
function intermediario(params) {
    document.getElementById('p2').style.display = 'none';
    document.getElementById('p3').style.display = 'block';
    document.getElementById('dificuldadeX').innerText = 'INTERMEDIÁRIO';
    linhas = 18
    colunas = 14
    bombs = 40
    gerarcampo2()
    dificuldade = 'intermediario'
}
function avancado(params) {
    document.getElementById('p2').style.display = 'none';
    document.getElementById('p3').style.display = 'block';
    document.getElementById('dificuldadeX').innerText = 'AVANÇADO';
    linhas = 24
    colunas = 20
    bombs = 99
    gerarcampo3()
    dificuldade = 'avancado'
}
function popup(params) {
    document.getElementById('p3').style.display = 'none';
    document.getElementById('popup').style.display = 'block';
}
function jogarnov(params) {
    document.location.reload()
}


function gerarcampo1() {
    for (let l = 0; l < linhas; l++) {
        campo[l] = []
        for (let c = 0; c < colunas; c++) {
            campo[l][c] = 0
            document.getElementById('campo').innerHTML += '<button class="iniciante" id="' + l + "," + c + '" onclick="rodar(' + l + "," + c + ')"></button>';
        }
        document.getElementById('campo').innerHTML += '<br>';
    }
    cl = 'iniciante'
    console.log(campo);
    if (tm == true) {
        timer()
        tm = setInterval(() => { timer() }, 1000)
    }
}
function gerarcampo2() {
    for (let l = 0; l < linhas; l++) {
        campo[l] = []
        for (let c = 0; c < colunas; c++) {
            campo[l][c] = 0
            document.getElementById('campo').innerHTML += '<button class="intermediario" id="' + l + "," + c + '" onclick="rodar(' + l + "," + c + ')"></button>';
        }
        document.getElementById('campo').innerHTML += '<br>';
    }
    cl = 'intermediario'
    console.log(campo);
    if (tm == true) {
        timer()
        tm = setInterval(() => { timer() }, 1000)
    }
}
function gerarcampo3() {
    for (let l = 0; l < linhas; l++) {
        campo[l] = []
        for (let c = 0; c < colunas; c++) {
            campo[l][c] = 0
            document.getElementById('campo').innerHTML += '<button class="avancado" id="' + l + "," + c + '" onclick="rodar(' + l + "," + c + ')"></button>';
        }
        document.getElementById('campo').innerHTML += '<br>';
    }
    cl = 'avancado'
    console.log(campo);
    if (tm == true) {
        timer()
        tm = setInterval(() => { timer() }, 1000)
    }
}
function rodar(l, c) {
    act_bombs(l, c)
    varrer_bomb(varredura)
    if (campo[l][c] == 0) {
        for (let i = 0; i < linhas; i++) {
            for (let j = 0; j < colunas; j++) {
                if (campo[i][j] == 0) {
                    document.getElementById(i + "," + j).innerHTML = '<button class="' + cl + '" id="' + l + "," + c + '" onclick="rodar(' + l + "," + c + ')"> 0 </button>';
                    document.getElementById(i + "," + j).disabled = true
                    win++
                }
            }
        }
    }
    else if (campo[l][c] != 0) {
        document.getElementById(l + "," + c).innerHTML = campo[l][c];
        document.getElementById(l + "," + c).disabled = true
        win++
    }
    console.log(l, c)
    console.log(win);
    pontuacao()
    console.log(score);
    tela_vitoria()
}
function pontuacao(params) {
    switch (dificuldade) {
        case 'facil':
            score = 70
            break;

        case 'intermediario':
            score = 212
            break;
        case 'avancado':
            score = 381
            break;
    }

}
function act_bombs(l, c) {
    var cont_bombs = 0
    var i, j;
    if (jprimeiro == true) {
        while (cont_bombs < bombs) {
            i = Math.floor(Math.random() * linhas)
            j = Math.floor(Math.random() * colunas)
            if (l != i && c != j) {
                if (campo[i][j] == 0) {
                    campo[i][j] = '#'
                    document.getElementById(i + "," + j).innerHTML = '<button class="' + cl + '" id="' + l + "," + c + '" onclick="derrota()"></button>';
                    cont_bombs++

                }
            }

        }
    }
    console.log(campo);
    jprimeiro = false
}



function varrer_bomb() {
    if (varredura == false) {
        for (let i = 0; i < linhas; i++) {
            for (let j = 0; j < colunas; j++) {
                if (campo[i][j] != '#') {
                    if (campo[i - 1] != undefined && campo[i - 1][j - 1] == '#') {
                        campo[i][j] += 1
                    }
                    if (campo[i - 1] != undefined && campo[i - 1][j] == '#') {
                        campo[i][j] += 1
                    }
                    if (campo[i - 1] != undefined && campo[i - 1][j + 1] == '#') {
                        campo[i][j] += 1
                    }
                    if (campo[i] != undefined && campo[i][j - 1] == '#') {
                        campo[i][j] += 1
                    }
                    if (campo[i] != undefined && campo[i][j + 1] == '#') {
                        campo[i][j] += 1
                    }
                    if (campo[i + 1] != undefined && campo[i + 1][j - 1] == '#') {
                        campo[i][j] += 1
                    }
                    if (campo[i + 1] != undefined && campo[i + 1][j] == '#') {
                        campo[i][j] += 1
                    }
                    if (campo[i + 1] != undefined && campo[i + 1][j + 1] == '#') {
                        campo[i][j] += 1
                    }
                }

            }

            varredura = true
        }
    }
    console.log(campo);
}
function timer() {
    seg++;

    if (seg == 60) {
        seg = 0;
        min++;
    }
    document.getElementById("sec1").innerText = min + ' : ' + seg;
}

function derrota(params) {
    document.getElementById('p3').style.display = 'none';
    document.getElementById('popup').style.display = 'block';
    tm = false
    document.getElementById('status').innerHTML = 'VOCÊ PERDEU!';
    document.getElementById('img_status').innerHTML = '<img id = "img_status" src="Res/derrota.png" alt="">';
    document.getElementById('sec2').innerHTML = min + ' minutos ' + seg + " segundos";
}

function tela_vitoria(params) {
    if (win >= score) {
        document.getElementById('p3').style.display = 'none';
        document.getElementById('popup').style.display = 'block';
        tm = false
        document.getElementById('status').innerHTML = 'VOCÊ GANHOU!';
        document.getElementById('img_status').innerHTML = '<img id = "img_status" src="Res/trofeu.png" alt="">';
        document.getElementById('sec2').innerHTML = min + ' minutos ' + seg + " segundos";
    }
}