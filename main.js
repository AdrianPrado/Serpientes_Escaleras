
class Dado{
    lanzar(){
        return Math.ceil(Math.random()*6)
    }
}

class Player{

    /**
     * 
     * @param {String} name nombre del jugardor
     * @param {String} color color de ficha
     */

    constructor(name, color){
        this.name = name
        this.color = color
        this.lanzamientos = 0
        this.recorrido = 0
    }

    lanzarDado(){
        let dado = new Dado()
        return this.recorrido += dado.lanzar()
    }
}

class Tablero{

    constructor(){
        this.casilla = []
        this.meta = 100
    }

    llenar(){
        for(let i = 1; i<=100; i++){
            if(i == 5){
                this.casilla[i] = 35
            }else if(i == 17){
                this.casilla[i] = 3
            }else if(i == 28){
                this.casilla[i] = 14
            }else if(i == 39){
                this.casilla[i] = 21
            }else if(i == 43){
                this.casilla[i] = 80
            }else if(i == 50){
                this.casilla[i] = 69
            }else if(i == 55){
                this.casilla[i] = 47
            }else if(i == 65){
                this.casilla[i] = 95
            }else if(i == 70){
                this.casilla[i] = 92
            }else if(i == 78){
                this.casilla[i] = 64
            }else if(i == 85){
                this.casilla[i] = 97
            }else if(i == 88){
                this.casilla[i] = 74
            }else if(i == 99){
                this.casilla[i] = 81
            }else{
                this.casilla[i] = i
            }
        }
    }

    checkCasilla(casilla){
        return this.casilla[casilla]
    }

    verTablero(){
        console.log(this.casilla)
    }
}

class Game{
    constructor(){
        this.players = []
        this.tablero = new Tablero()
        this.tablero.llenar()
    }

    addPlayer(player){
        this.players.push(player)
    }

    play(){
        let fin = false
        let nPlayers = this.players.length
        while(fin == false){
            let i = 0
            while(i<nPlayers && fin == false){
                let turno = this.players[i].lanzarDado()
                this.players[i].lanzamientos += 1
                if (turno<100){
                    this.players[i].recorrido = this.tablero.checkCasilla(turno)
                }else{
                    fin = true
                    console.log("El ganador/ganadora es: ", this.players[i].name,", y su color es:", this.players[i].color)
                }
                i++
            }
        }
    }

    mostrarPlayers(){
        console.log(this.players)
    }

    mostrarPlayer(player){
        console.log(this.players[player])
    }
}

let game = new Game()
let p1 = new Player("Adrian", "Azul")
let p2 = new Player("Diana", "Rosa")
let p3 = new Player("Janette", "Morado")
let p4 = new Player("Pedro", "Rojo")

game.addPlayer(p1)
game.addPlayer(p2)
game.addPlayer(p3)
game.addPlayer(p4)
game.play()
game.mostrarPlayers()