var campo = []
var colunas,linhas, bombs;

function iniciar(params) {
    document.getElementById('p1').style.display = 'none';
    document.getElementById('p2').style.display = 'block';
}

function facil(params) {
    document.getElementById('p2').style.display = 'none';
    document.getElementById('p3').style.display = 'block';
    document.getElementById('dificuldadeX').innerText = 'INICIANTE';
    linhas = 10
    colunas = 8
    bombs = 10
    gerarcampo1()

}
function intermediario(params) {
    document.getElementById('p2').style.display = 'none';
    document.getElementById('p3').style.display = 'block';
    document.getElementById('dificuldadeX').innerText = 'INTERMEDIÁRIO';
    linhas = 18
    colunas = 14
    gerarcampo2()
}
function avancado(params) {
    document.getElementById('p2').style.display = 'none';
    document.getElementById('p3').style.display = 'block';
    document.getElementById('dificuldadeX').innerText = 'AVANÇADO';
    linhas = 24
    colunas = 20
    gerarcampo3()
}
function popup(params) {
    document.getElementById('p3').style.display = 'none';
    document.getElementById('popup').style.display = 'block';
}
function jogarnov(params) {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('p2').style.display = 'block';
}


function gerarcampo1(params) {
    for (let i = 0; i < linhas; i++) {
        campo[i] = []
        for (let j = 0; j < colunas; j++) {
            campo[i][j] = 0
            document.getElementById('campo').innerHTML += '<button class="quadrado_campo_inicante" id="' + j + "," + i + '" onclick="">' + campo[i][j] + '</button>';
        }
        document.getElementById('campo').innerHTML += '<br>';
    }
    console.table(campo);
}
function gerarcampo2(params) {
    for (let i = 0; i < linhas; i++) {
        campo[i] = []
        for (let j = 0; j < colunas; j++) {
            campo[i][j] = 0
            document.getElementById('campo').innerHTML += '<button class="quadrado_campo_intermediario" id="' + j + "," + i + '" onclick="">' + campo[i][j] + '</button>';
        }
        document.getElementById('campo').innerHTML += '<br>';
    }
    console.table(campo);
}
function gerarcampo3(params) {
    for (let i = 0; i < linhas; i++) {
        campo[i] = []
        for (let j = 0; j < colunas; j++) {
            campo[i][j] = 0
            document.getElementById('campo').innerHTML += '<button class="quadrado_campo_avancado" id="' + j + "," + i + '" onclick="">' + campo[i][j] + '</button>';
        }
        document.getElementById('campo').innerHTML += '<br>';
    }
    console.table(campo);
}

function act_bombs(params) {
    var cont_bombs = 0
    var i, j;
    debugger

    while (cont_bombs < bombs) {
            i = Math.floor(Math.random()*linhas)
            j = Math.floor(Math.random()*colunas)

                if (campo[i][j] == 0) {
                    campo[i][j] = '#'
                    cont_bombs++
                    document.getElementById(j + "," + i).innerHTML = '<button id="' + j + "," + i + '" onclick="">1</button>';
                }
        }
    }    