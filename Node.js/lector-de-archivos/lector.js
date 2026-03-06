// 1. Importamos el módulo "fs" (File System) que viene con Node
const fs = require('fs');

// 2. Usamos la función readFile
// 'nota.txt' -> El archivo que queremos abrir
// 'utf-8'    -> El formato para que las letras se vean bien (leíbles)
fs.readFile('nota.txt', 'utf-8', (error, contenido) => {

    // Si hubo un error (por ejemplo, el archivo no existe)
    if (error) {
        console.error("¡Ups! No pude leer el archivo:", error.message);
        return;
    }

    // Si todo salió bien, imprimimos el contenido
    console.log("--- Contenido del archivo ---");
    console.log(contenido);
    console.log("-----------------------------");
});

console.log("Procesando lectura...");
