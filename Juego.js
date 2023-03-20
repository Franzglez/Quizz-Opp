

class Juego {
    constructor (preguntas, contenedor){
        this.contenedor = contenedor
        this.preguntas = preguntas
    }

    start() {
        for (let i = 0; i < this.preguntas.length; i++){
            this.nextQuestion(this.preguntas[i],`${i}`)

        }
    }

    nextQuestion(pregunta,set) {

        const question = new Pregunta(pregunta, this.contenedor)
        question.createQuestion(set)

    }



}