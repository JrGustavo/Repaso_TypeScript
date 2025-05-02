

let nombre: string[] = ["Charles", "Juan", "Pedro"];
console.log("nombres: ", nombre);

let edades: number[] = [30, 25, 40];
console.log("edades: ", edades);

let mixto: (string | number)[] = ["Charles", 30, "Juan", 25];
console.log("mixto: ", mixto);

interface Persona {
    nombre: string;
    edad: number;
    esEstudiante: boolean;
}

let personas: Persona[] = [
    { nombre: "Charles", edad: 30, esEstudiante: true },
    { nombre: "Juan", edad: 25, esEstudiante: false },
    { nombre: "Pedro", edad: 40, esEstudiante: true }
];

personas.push({nombre: "Miranda", edad: 20, esEstudiante: false});

//Enumeradores

enum DiaDeLaSemana {

    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo

}

let dia: DiaDeLaSemana = DiaDeLaSemana.Lunes;
console.log("Dia de la semana: ", dia);


