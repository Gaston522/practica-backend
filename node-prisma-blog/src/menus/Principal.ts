import readline from 'node:readline/promises';

export async function Principal() {

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    console.clear();
    console.log("======================================");
    console.log(`            PRISMA BLOG`);
    console.log("======================================");
    console.log("1- Crear Usuario");
    console.log("2- Ingresar");
    console.log("0- Salir");

    let opcion = await rl.question(`Seleccioná una opción con los números: `);

    let opcionNum = Number(opcion);

    while (opcionNum > 2 || opcionNum < 0) {
        console.log('Debe elegir entre 0, 1 o 2');
        opcion = await rl.question(`Seleccioná una opción con los números: `);
        opcionNum = Number(opcion);
    }

    if (opcionNum === 0) {
        rl.close();
        return null;
    }

    rl.close();
    return opcionNum;
}
