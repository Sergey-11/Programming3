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
