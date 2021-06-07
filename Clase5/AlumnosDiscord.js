// Dados alumnos, determinar el ranking de participación en Discord

let alumnos = [
    {
        nombre: "MiaFate",
        ranking: 4
    },

    {
        nombre: "Argentum",
        ranking: 2
    },

    {
        nombre: "Lucas",
        ranking: 1
    },

    {
        nombre: "Ema",
        ranking: 3
    }

]

function liderRankingDiscord() {
    let maxRanking = 0;
    let position = 0;
    for (let i = 0; i < alumnos.length; i++ ) {
        if (alumnos[i].ranking > maxRanking) {
            maxRanking = alumnos[i].ranking;
            position = i;
        }
    }

    return alumnos[position]
}

console.log("El alumno que lidera el ranking de participación en Discord es " 
+ liderRankingDiscord().nombre + " con un ranking de " + liderRankingDiscord().ranking)

console.log("_____________")
// Dado un array de estudiantes, indicar los que estudien la carrera de
// ingeniería en computación

let alumnos2 = [
    {
        nombre: "Ema",
        carrera: "Ingeniería en computación"
    },

    {
        nombre: "Luis",
        carrera: "Producción audiovisual"
    },

    {
        nombre: "Pablo",
        carrera: "Ingeniería en computación"
    },

    {
        nombre: "Melson",
        carrera: "Ingeniería en computación"
    }
]

function estudiantesDeIngComp() {
    let estudiantes = []
    for(let i = 0; i < alumnos2.length; i++) {
        if (alumnos2[i].carrera === "Ingeniería en computación") {
            estudiantes.push(alumnos2[i].nombre)
        }

    }

    return estudiantes
}

console.log("Los estudiantes que realizan la carrera de ingeniería en computación son "
+ estudiantesDeIngComp())

