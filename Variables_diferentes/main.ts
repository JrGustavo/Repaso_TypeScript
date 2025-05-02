let variableAny :any;
variableAny = 42;

//variableAny = true
console.log("Valor de la variable any " + variableAny);

let variableDesconocida: unknown;

variableDesconocida = "Hello";
//variableDesconocida = 42;
//variableDesconocida = true;

if (typeof variableDesconocida === "string"){
    console.log("Variable unknown is a string:", variableDesconocida);
}

function throwError(message: string ): never {
    throw new Error(message);
}

throwError("Este es un error")

