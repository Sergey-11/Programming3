class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
        this.uteluqanak = 0;
        this.chuteluqanak = 0;
    }



    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        if (this.multiply >= 8 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }








}




class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.directions = [];
        this.index = 2;
        this.directions = [];
        this.uteluqanak = 0;
        this.chuteluqanak = 0;

    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();


        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {
        this.chuteluqanak++;
        var vandak = random(this.yntrelVandak(0));
        if (vandak) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = 2;
        }
    }
    utel() {
        this.uteluqanak++;
        this.chuteluqanak = 0;
        var vandak1 = random(this.yntrelVandak(1));
        if (vandak1) {
            matrix[this.y][this.x] = 0;
            this.y = vandak1[1];
            this.x = vandak1[0];
            matrix[this.y][this.x] = 2;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                }
            }
        }

    }
    bazmanal() {
        this.uteluqanak = 0;

        var norVandak = random(this.yntrelVandak(1));

        if (norVandak) {
            var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
            xotaker.push(norXotaker);
            matrix[norVandak[1]][norVandak[0]] = 1;

        }
    }
    mahanal(i) {
        matrix[this.y][this.x] = 0;
        xotaker.splice(i, 1);
    }

}

class Gishatic{
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 8;
        this.directions = [];
        this.index = 2;
        this.directions = [];
        this.uteluqanak = 0;
        this.chuteluqanak = 0;

    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();


        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    
    sharjvel() {
        this.chuteluqanak++;
        var vandak = random(this.yntrelVandak(0));
        if (vandak) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = 3;
        }
    }
    utel() {
        this.uteluqanak++;
        this.chuteluqanak = 0;
        var vandak1 = random(this.yntrelVandak(2));
        if (vandak1) {
            matrix[this.y][this.x] = 0;
            this.y = vandak1[1];
            this.x = vandak1[0];
            matrix[this.y][this.x] = 2;
            for (var i in xotaker) {
                if (xotaker[i].x == this.x && xotaker[i].y == this.y) {
                    xotaker.splice(i, 1);
                }
            }
        }

    }
    bazmanal() {
        this.uteluqanak = 0;

        var norVandak = random(this.yntrelVandak(0));

        if (norVandak) {
            var norGishatic = new Gishatic(norVandak[0], norVandak[1]);
            gishatic.push(norGishatic);
            matrix[norVandak[1]][norVandak[0]] = 3;

        }
    }
    mahanal(i){
        matrix[this.y][this.x] = 0;
        gishatic.splice(i, 1);
    }
}

class Dekoracia{
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.energy = 8;
        this.directions = [];
        this.index = 2;
        this.directions = [];
        this.uteluqanak = 0;
        this.chuteluqanak = 0;

    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            
            [this.x - 1, this.y + 1],          
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();


        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    bazmanal() {
        this.multiply++;
        

        var norVandak = random(this.yntrelVandak(0));

        if (this.multiply >= 6 && norVandak) {
            var norDekoracia = new Dekoracia(norVandak[0], norVandak[1]);
            dekoracia.push(norDekoracia);
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.multiply = 0;

        }
    }


}
class Hox{
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 8;
        this.directions = [];
        this.index = 2;
        this.directions = [];
        this.uteluqanak = 0;
        this.chuteluqanak = 0;

    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();


        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {
        this.chuteluqanak++;
        var vandak = random(this.yntrelVandak(0));
        if (vandak) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = 5;
        }
    }
    bazmanal() {
        this.uteluqanak = 0;

        var norVandak = random(this.yntrelVandak(0));

        if (norVandak) {
            var norHox = new Hox(norVandak[0], norVandak[1]);
            hox.push(norHox);
            matrix[norVandak[1]][norVandak[0]] = 5;

        }
    }
    utel() {
        this.uteluqanak++;
        this.chuteluqanak = 0;
        var vandak1 = random(this.yntrelVandak(4));
        if (vandak1) {
            matrix[this.y][this.x] = 0;
            this.y = vandak1[1];
            this.x = vandak1[0];
            matrix[this.y][this.x] = 4;
            for (var i in dekoracia) {
                if (dekoracia[i].x == this.x && dekoracia[i].y == this.y) {
                    dekoracia.splice(i, 1);
                }
            }
        }

    }
    mahanal(i) {
        matrix[this.y][this.x] = 0;
        hox.splice(i, 1);
    }
}
