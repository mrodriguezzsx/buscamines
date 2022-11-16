let mines;

function creaTaula() {
    let body = document.getElementsByTagName("body")[0];
    let div = document.createElement("div");

    //Elements taula
    let Taula = document.createElement("table");
    Taula.style.width = "50%";
    Taula.style.border = "3px solid black";
    Taula.style.padding = "2px";
    Taula.style.marginTop = "5px";

    let TaulaBody = document.createElement("tbody");
    TaulaBody.style.border = "3px solid black";

    if (document.getElementsByTagName("table").length!=0){
        //Es borra aquest element
        document.getElementsByTagName("table")[0].remove();
    }

    for (let j = 0; j < document.getElementById("midaX").value; j++) {
        // Craecio row's de la taula
        let row = document.createElement("tr");

        for (let i = 0; i < document.getElementById("midaY").value; i++) {
            // Creacio cel·les de la taula
            let td = document.createElement("td");
            td.innerHTML = "&nbsp";
            td.style.border = "2px solid black";
            td.style.margin = "1px";
            row.appendChild(td);
        }
        TaulaBody.appendChild(row);
    }

    Taula.appendChild(TaulaBody);
    div.appendChild(Taula)
    body.appendChild(div);

}

function matriuBinaria(matrix) {
    let matrix2 =[];
    for (var i = 0; i < matrix.length; i++) {
        let fila=[];
        for (var j = 0; j < matrix[0].length; j++) {
           if (matrix[i][j].style.backgroundColor == "red"){
            fila.push(1);
           }
           else{
            fila.push(0);
           }
        }
        matrix2.push(fila);
    }
    return matrix2;
}

function inicialitzaMines(nMines, midaX , midaY) {

    let matriu = [];
    let numMines = nMines;
    for (let n = 0; n < midaX; n++) {
        let fila = [];
        for (let m = 0; m < midaY; m++) {
            fila.push(0)
        }
        matriu.push(fila);
    }
    while (numMines != 0) {
        let n = Math.trunc(Math.random() * (midaX));
        let m = Math.trunc(Math.random() * (midaY));
        if (matriu[n][m] != 1) {
            matriu[n][m] = 1;
            numMines--;
        }
    }
    return matriu;
}


function pintamines(mines) {
    let taula = document.getElementsByTagName("tbody")[0];
    for (let n = 0; n < mines.length; n++) {
        for (let m = 0; m < mines[0].length; m++) {
            if (mines[n][m] == 1) {
                taula.children[n].children[m].style.backgroundColor = "#F3DDF2";

            }
        }
    }
}


function inicialitzaJoc() {
    creaTaula();

    let nMines = document.getElementById("nMines").valueAsNumber;
    let midaX = document.getElementById("midaX").valueAsNumber;
    let midaY = document.getElementById("midaY").valueAsNumber;
    mines = inicialitzaMines(nMines, midaX, midaY);

    pintamines(mines);
}