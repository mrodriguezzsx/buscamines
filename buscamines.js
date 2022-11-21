let mines;

//Funcio per crear la Taula
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

    for (let j = 0; j < document.getElementById("midaY").value; j++) {
        // Craecio row's de la taula
        let row = document.createElement("tr");

        for (let i = 0; i < document.getElementById("midaX").value; i++) {
            // Creacio cel·les de la taula
            let td = document.createElement("td");

            //Fem que al clicar, ens indiqui la posicio de la cel·la
            td.onclick = celaclicada.bind(td,j,i);

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

function inicialitzaMines(nMines, midaY , midaX) {
    let matriu = [];
    let numMines = nMines;
    for (let n = 0; n < midaY; n++) {
        let fila = [];
        for (let m = 0; m < midaX; m++) {
            fila.push(0)
        }
        matriu.push(fila);
    }
    while (numMines != 0) {
        let n = Math.trunc(Math.random() * (midaY));
        let m = Math.trunc(Math.random() * (midaX));
        if (matriu[n][m] != 1) {
            matriu[n][m] = 1;
            numMines--;
        }
    }
    return matriu;
}

//Funcio per a pintar x mines (Random)
function pintamines(mines) {
    let taula = document.getElementsByTagName("tbody")[0];
    for (let n = 0; n < mines.length; n++) {
        for (let m = 0; m < mines[0].length; m++) {
            if (mines[n][m] == 1) {
                taula.children[n].children[m].style.backgroundColor = "red";

            }
        }
    }
}

//Funcio per a saber la cel·la clicada
function celaclicada(x,y) {
    console.log(x,y);
    if(mines[x][y] == 1) {
        console.log("ES UNA MINA")
    } else {
        console.log("NO ES UNA MINA")
    }
}

//Funcio utilitzada al boto per cridar totes les funcions
function inicialitzaJoc() {
    creaTaula();

    let nMines = document.getElementById("nMines").valueAsNumber;
    let midaY = document.getElementById("midaY").valueAsNumber;
    let midaX = document.getElementById("midaX").valueAsNumber;
    mines = inicialitzaMines(nMines, midaY, midaX);

    pintamines(mines);
}