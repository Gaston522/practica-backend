const fs = require('fs');

// Capturamos lo que el usuario escribe en la terminal
// process.argv guarda los argumentos: [0] node, [1] archivo, [2] acción, [3] tarea
const accion = process.argv[2];
const tarea = process.argv[3];

const ARCHIVO = 'tareas.txt';

// --- FUNCIÓN PARA AÑADIR TAREA ---
if (accion === 'agregar' && tarea) {
    // fs.appendFile añade texto al final del archivo sin borrar lo anterior
    fs.appendFile(ARCHIVO, tarea + '\n', (err) => {
        if (err) throw err;
        console.log(`✅ Tarea guardada: "${tarea}"`);
    });
}

// --- FUNCIÓN PARA LISTAR TAREAS ---
else if (accion === 'listar') {
    if (!fs.existsSync(ARCHIVO)) {
        console.log("No hay tareas pendientes. ¡Estás libre!");
        return;
    }

    fs.readFile(ARCHIVO, 'utf-8', (err, contenido) => {
        if (err) throw err;
        console.log("\n--- MIS TAREAS PENDIENTES ---");
        console.log(contenido);
    });
}

// --- SI EL USUARIO NO SABE QUÉ HACER ---
else {
    console.log("Uso: ");
    console.log("  node app.js agregar 'Nombre de la tarea'");
    console.log("  node app.js listar");
}