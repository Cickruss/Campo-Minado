var campo = []
var colunas,linhas, bombs;


function facil(params) {
    linhas = 10
    colunas = 8
    bombs = 10
}
function intermediario(params) {
    linhas = 18
    colunas = 14
}
function avancado(params) {
    linhas = 24
    colunas = 20
}


function gerarcampo(params) {
    for (let i = 0; i < linhas; i++) {
        campo[i] = []
        for (let j = 0; j < colunas; j++) {
            campo[i][j] = 0
            document.getElementById('campo').innerHTML += '<button id="' + j + "," + i + '" onclick="">' + campo[i][j] + '</button>';
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
                    campo[i][j] = 1
                    cont_bombs++
                    document.getElementById(j + "," + i).innerHTML = '<button id="' + j + "," + i + '" onclick="">1</button>';
                }
        }
        console.table(campo);
    }