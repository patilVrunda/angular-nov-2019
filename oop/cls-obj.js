// new aproch  (object-orientation) angular understand
class car {
    constructor(){
        this.speed = 10
    }

    speedUp(){
        this.speed++
    }
}

class BMW extends car {
    constructor() {

    }
}

let cr = new car()
cr.speed = 70 
cr.speedUp()

console.log(cr.speed)


// old aproch  (prototype-based) also angular does'nt understand

function Animal() {    
}

let an = new Animal()