var grassArr = [];
var xotaker = [];
var gishatic = [];
var dekoracia = [];
var hox = [];
var matrix = [];
var number = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 0, 0, 4, 0, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 2, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1];
var exanak = "garun";
var side = 25;
var z = 76;
var m = 40;
var grassColor = "green";
var dekoraciaColor = "blue";

setInterval(function () {
    if (exanak == "garun") {
        exanak = "amar"
    }
    else if (exanak == "amar") {
        exanak = "ashun"
    }
    else if (exanak == "ashun") {
        exanak = "dzmer"
    }
    else if (exanak == "dzmer") {
        exanak = "garun"
    }
    console.log(exanak);

}, 2000);

function setup() {
    if (exanak == "garun") {
        frameRate(20)
    }
    else if (exanak == "amar") {
        frameRate(10)

    }
    else if (exanak == "ashun") {
        frameRate(8)
    }
    else if (exanak == "dzmer") {
        frameRate(4)
    }


    
    for (var y = 0; y < m; y++) {
        matrix[y] = [];

        for (var x = 0; x < z; x++) {
            matrix[y][x] = random(number);

        }

    }
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y, 1));

            }

            else if (matrix[y][x] == 2) {
                xotaker.push(new Xotaker(x, y, 1));
            }
            else if (matrix[y][x] == 3) {
                gishatic.push(new Gishatic(x, y, 1));
            }
            else if (matrix[y][x] == 4) {
                dekoracia.push(new Dekoracia(x, y, 1));
            }
            else if (matrix[y][x] == 5) {
                hox.push(new Hox(x, y, 1));
            }


        }
    }





}




for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 0) {
            fill(0, 255, 0);
            rect(x * 50, y * 50, 50, 50);
        }
        else if (matrix[y][x] == 1) {
            fill(grassColor);
            rect(x * 50, y * 50, 50, 50);
        }
        else if (matrix[y][x] == 2) {
            fill(255, 255, 0);
            rect(x * 50, y * 50, 50, 50);
        }
        else if (matrix[y][x] == 3) {
            fill("orange");
            rect(x * 50, y * 50, 50, 50);
        }
        else if (matrix[y][x] == 4) {
            fill(dekoraciaColor);
            rect(x * 50, y * 50, 50, 50);
        }
        else if (matrix[y][x] == 5) {
            fill("brown");
            rect(x * 50, y * 50, 50, 50);
        }
    }
}



function draw() {
    
        if(exanak == "dzmer"){
            grassColor = "white";
            dekoraciaColor = "lightblue";
        }
        else if(exanak == "amar"){
            grassColor = "green";
            dekoraciaColor = "blue";
        }
        else if(exanak == "ashun"){
            grassColor = "#FFD700";
            dekoraciaColor = "blue";
            
        }
        else{
            grassColor = "lightgreen";
            dekoraciaColor = "blue";
        }

      

            







    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill(grassColor);
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill(dekoraciaColor);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("brown");
                rect(x * side, y * side, side, side);
            }
        }
    
}



    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var i in xotaker) {
        var norVandak = random(xotaker[i].yntrelVandak(1));

        if (xotaker[i].chuteluqanak == 5) {
            xotaker[i].mahanal(i);
        }
        else if (xotaker[i].uteluqanak == 5) {
            xotaker[i].bazmanal();
        }
        else if (norVandak) {
            xotaker[i].utel();
        }

        else {
            xotaker[i].sharjvel();
        }
    }
    for (var i in gishatic) {
        var norVandak = random(gishatic[i].yntrelVandak(2));
        if (gishatic[i].chuteluqanak == 45) {
            gishatic[i].mahanal(i);
        }
        else if (gishatic[i].uteluqanak == 5) {
            gishatic[i].bazmanal();
        }
        else if (norVandak) {
            gishatic[i].utel();
        }
        else {
            gishatic[i].sharjvel();
        }
    }
    for (var i in dekoracia) {
        var norVandak = random(dekoracia[i].yntrelVandak(2));

        dekoracia[i].bazmanal();
    }
    for (var i in hox) {
        var norVandak = random(hox[i].yntrelVandak(4));
        if (hox[i].chuteluqanak == 5) {
            hox[i].mahanal(i);
        }
        else if (hox[i].uteluqanak == 5) {
            hox[i].bazmanal();
        }
        else if (norVandak) {
            hox[i].utel();
        }
        else {
            hox[i].sharjvel();
        }

       
     
    }
   
        }
    



