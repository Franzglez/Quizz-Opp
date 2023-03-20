const divcontenedora = document.createElement("div")
class Pregunta {
    constructor(pregunta, contenedor) {
        this.pregunta = pregunta
        this.contenedor = contenedor
    }
  

    createQuestion(set){
                
        const parrafo = document.createElement("p")
        parrafo.innerText= this.pregunta.question
        this.contenedor.append(parrafo)
    
        this.createAnswer(this.pregunta.answers[0],set)
        this.createAnswer(this.pregunta.answers[1],set)
        this.createAnswer(this.pregunta.answers[2],set)
        this.createAnswer(this.pregunta.answers[3],set)

       const br = document.createElement("br")
       this.contenedor.append(br)
    
    }
    
    createAnswer(answer,set) {
        const input = document.createElement('input')
        input.setAttribute("type","radio")
        input.setAttribute("value",answer)
        input.setAttribute("name",set)
        this.contenedor.appendChild(input)
        const label = document.createElement('label')
        label.innerText= answer
        this.contenedor.appendChild(label)

        const button = document.querySelector('input'); 
        button.onclick = function() {
       
    }
}}
