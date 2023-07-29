// class car{
//     constructor(power,gas){
//         this._power = power;
//         this._gas = gas;
//     }
//     get power(){
//         return ` ${this._power}hp`;
//     }
//     get gas(){
//         return ` ${this._gas}L`;
//     }

//     set gas(gas){
//         if(gas > 7){
//             gas = 7;
//         }
//         else if(gas < 0){
//             gas = 0;
//         }
//         this._gas = gas;
//     }

// }

// let lambo = new car(7000,7);

// console.log(lambo.power);
// console.log(lambo.gas);


class jersey {
    constructor(club, size, priceRange) {
        this._club = club;
        this._size = size;
        this._priceRange = priceRange;
    }

    get club() {
        return `HELLO ${this._club} FAN !!`;
    }
    get size() {
        return `YOUR JERSEY SIZE IS ${this._size} `;
    }
    get priceRange() {
        return ` ${this._priseRange} IS BEST IN YOUR PRICE RANGE `
    }

    set club(club) {
        if (club == "RM") {
            this._club = "REAL MADRID";
        }
        else if (club == "MUTD") {
            this._club = "MANCHESTER UNITED";
        }
        else {
            this._club = "jersey not available";
        }
    }

    set size(size) {
        if (size != 'l' || 'm') {
            this._size = " jersey  size not available";
        }
        this._size = size;
    }

    set priceRange(range) {
        if (range < 350) {
            this._priceRange = " sorry your range is  too low , please increase your price range";
        }
        else if (range >= 350 && range <= 500) {
            this._priceRange = "YOU WILL GET PRINTED JERSEY";
        }
        else if(range > 500){
            this._priceRange= " YOU WILL GET MASTER COPY JERSEY"
        }
    }
}

let kit = new jersey("RM","l",700);

console.log( kit.club);
console.log( kit.size);
console.log( kit.priceRange);