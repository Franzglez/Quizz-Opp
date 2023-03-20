const preguntas = {
    "questions": [
        {
            "question": "How do you round the number 7.25, to the nearest integer?",
            "answers": [
                "Math.round(7.25)",
                "round(7.25)",
                "Math.rnd(7.25)",
                "rnd(7.25)"
            ],
            "correctAnswer": 0
        },
        {
            "question": "Which operator is used to assign a value to a variable?",
            "answers": [
                "x",
                "-",
                "=",
                "*"
            ],
            "correctAnswer": 2
        },
        {
            "question": "How do you write \"Hello World\" in an alert box?",
            "answers": [
                "msgBox(\"Hello World\");",
                "alert(\"Hello World\");",
                "alertBox(\"Hello World\");",
                "msg(\"Hello World\");"
            ],
            "correctAnswer": 1
        },
        {
            "question": "What is the correct JavaScript syntax to change the content of the HTML element below?",
            "answers": [
                "document.getElement(\"p\").innerHTML = \"Hello World!\";",
                "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
                "#demo.innerHTML = \"Hello World!\";",
                "document.getElementByName(\"p\").innerHTML = \"Hello World!\";"
            ],
            "correctAnswer": 1
        },
        {
            "question": "What is the correct syntax for referring to an external script called \"xxx.js\"?",
            "answers": [
                "<script href=\"xxx.js\">",
                "<script src=\"xxx.js\">",
                "<script name=\"xxx.js\">",
                "<script declare=\"xxx.js\">"
            ],
            "correctAnswer": 1
        }
    ]
}





// Obtengo el titulo de la pregunta 0
// const enunciadopreguntas = preguntas.questions.map
// console.log(enunciadopreguntas)
// Pusheo el resultado a un nuevo array
// const preg1 = almacenarpreguntas.push(enunciadopreguntas)

// Obtengo el titulo de todas las preguntas

// const savepreguntas = preguntas.questions.map(q => q.question) 

// const almacenarrespuestas = []

// // Obtengo las respuestas del objeto y las pusheo a un nuevo array
// const respuesta1 = preguntas.questions[1].answers
// almacenarrespuestas.push(respuesta1)
// const respuesta2 = preguntas.questions[2].answers
// almacenarrespuestas.push(respuesta2)
// const respuesta3 = preguntas.questions[3].answers
// almacenarrespuestas.push(respuesta3)
// const respuesta4 = preguntas.questions[4].answers
// almacenarrespuestas.push(respuesta4)


// function imprimePregunta(){
// for (let i = 0; i < preguntas.questions.length; i++){
//     createQuestion(preguntas.questions[i])
// }}
// imprimePregunta()


// function imprimeRespuesta(){
//     for (let i = 0; i < almacenarrespuestas.length; i++){
//         console.log(almacenarrespuestas[i])
//     }
// }
// imprimeRespuesta()

// Obtengo todas las respuestas correctas

// const saverespuestacorrecta=[]
// console.log(saverespuestacorrecta)

// const respuestacorrecta0 = preguntas.questions[0].correctAnswer
// saverespuestacorrecta.push(respuestacorrecta0)
// const respuestacorrecta1 = preguntas.questions[1].correctAnswer
// saverespuestacorrecta.push(respuestacorrecta1)
// const respuestacorrecta2 = preguntas.questions[2].correctAnswer
// saverespuestacorrecta.push(respuestacorrecta2)
// const respuestacorrecta3 = preguntas.questions[3].correctAnswer
// saverespuestacorrecta.push(respuestacorrecta3)


// const JuegoQuiz = new Juego(preguntas)

