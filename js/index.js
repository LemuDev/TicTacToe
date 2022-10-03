let container = document.querySelector("#container")
let tablero = document.querySelector("#tablero")




let jugadas = ["", "", "", "", "", "", "", "", ""]
let jugadasX = ["", "", "", "", "", "", "", "", ""]
let jugadasO = ["", "", "", "", "", "", "", "", ""]

let whatIs = "O"
let gameOver = false

console.log(tablero)

function iniciarJuego() {
    jugadas.forEach((j, i)=>{
        let div = document.createElement("div")
            div.style.background = "#555555"
            div.style.width = "31%"
            div.style.height = "31%"
            div.style.borderRadius = "10px"
            div.style.cursor = "pointer"
            div.id = i
            div.textContent = j
            div.classList = "tile"
    
    
        div.addEventListener("click", ()=> Jugar(i))
    
        tablero.appendChild(div)
    })
    
}

iniciarJuego()


function Jugar(index) {


    if (jugadas[index] !== "") {
        console.log("No puedes jugar aqui")
        return
    }
    
    if (!gameOver) {
        if (whatIs === "X") {
            console.log(jugadasX)
            jugadasO[index] = whatIs
            whatIs = "O"   
        }else{
            console.log(jugadasO)
            jugadasX[index] = whatIs
            whatIs = "X"
        }

        jugadas[index] = whatIs
        document.getElementById(index).textContent = whatIs

        isWin(jugadasX, jugadasO, jugadas)
        
    }
    
}


function isWin(jugadasX, jugadasO, jugadas) {
    if ( 
            ( jugadasX[0] && jugadasX[1] && jugadasX[2] ) ||
            ( jugadasX[3] && jugadasX[4] && jugadasX[5] ) || 
            ( jugadasX[6] && jugadasX[7] && jugadasX[8] ) || 

            ( jugadasX[0] && jugadasX[3] && jugadasX[6] ) || 
            ( jugadasX[1] && jugadasX[4] && jugadasX[7] ) || 
            ( jugadasX[2] && jugadasX[5] && jugadasX[8] ) || 

            ( jugadasX[0] && jugadasX[4] && jugadasX[8] ) || 
            ( jugadasX[2] && jugadasX[4] && jugadasX[6] )  
    ) {

        console.log("WIn")
        gameOver = true
        
        let h3 = document.createElement("h3")
        h3.textContent = "El jugador de la X ha ganado"
        
        
        container.innerHTML = ""

        let btn = document.createElement("button")
        btn.textContent = "Reiniciar juego"

        btn.id = "btn-reiniciar"
        btn.addEventListener("click", ()=> Reiniciar())

        container.appendChild(h3)
        container.appendChild(btn)
        container.style.display = "flex"
        container.style.opacity = "1"
        container.style.transform = "scaleX(1)"
        
        
    }

    if ( 
        ( jugadasO[0] && jugadasO[1] && jugadasO[2] ) || 
        ( jugadasO[3] && jugadasO[4] && jugadasO[5] ) || 
        ( jugadasO[6] && jugadasO[7] && jugadasO[8] ) ||

        ( jugadasO[0] && jugadasO[3] && jugadasO[6] ) || 
        ( jugadasO[1] && jugadasO[4] && jugadasO[7] ) || 
        ( jugadasO[2] && jugadasO[5] && jugadasO[8] ) || 

        ( jugadasO[0] && jugadasO[4] && jugadasO[8] ) ||  
        ( jugadasO[2] && jugadasO[4] && jugadasO[6] )  
    ) {
       
        gameOver = true

        let h3 = document.createElement("h3")
        h3.textContent = "El jugador de la O ha ganado"

        


        let btn = document.createElement("button")
        btn.textContent = "Reiniciar juego"

    
        btn.id = "btn-reiniciar"
        btn.addEventListener("click", ()=> Reiniciar())

        container.innerHTML = ""
        container.appendChild(h3)
        container.appendChild(btn)
        container.style.display = "flex"
        container.style.opacity = "1"
        container.style.transform = "scaleX(1)"
    
        
    }


    let jugadasHechas = jugadas.filter((j)=> j != "")
    
    console.log("Jugadas hechas", jugadasHechas.length)
    console.log(jugadasHechas)
    if (jugadasHechas.length === 9) {
        gameOver = true

        let h3 = document.createElement("h3")
        h3.textContent = "El el juego esta trancado"

        let btn = document.createElement("button")
        btn.textContent = "Reiniciar Juego"
        btn.id = "btn-reiniciar"
        btn.addEventListener("click", ()=> Reiniciar())


        container.innerHTML = ""
        container.appendChild(h3)
        container.appendChild(btn)
        container.style.display = "flex"
        container.style.opacity = "1"
        container.style.transform = "scaleX(1)"
        
    }
}




function Reiniciar() {
    gameOver = false
    jugadas = ["", "", "", "", "", "", "", "", ""]

    jugadasX = ["", "", "", "", "", "", "", "", ""]
    jugadasO = ["", "", "", "", "", "", "", "", ""]
    tablero.innerHTML = ""



    iniciarJuego()
    container.style.opacity ="0"
    container.style.transform = "scale(0)"
}


















