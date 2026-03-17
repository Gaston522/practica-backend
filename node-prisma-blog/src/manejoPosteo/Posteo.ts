import { ActualizarTituloPosteo, ActualizarContenidoPosteo, ActualizarPublicarPosteo } from "../services/actualizarPosteo.ts";
import { EliminarPosteo } from "../services/eliminarPosteo.ts";
import { MostrarPosteo } from "../services/mostrarPosteos.ts";
import readline from 'node:readline/promises';

export async function Posteo(posteo: any) {

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    while (true) {

        posteo = await MostrarPosteo(posteo.authorId, posteo.id);

        console.clear();
        console.log("======================================");
        console.log(`     TITULO: ${posteo.title.toUpperCase()}`);
        console.log("======================================");

        console.log(`Contenido: ${posteo.content}`);
        console.log(`Publicado: ${posteo.published}`);

        console.log('\nElige una opcion\n');
        console.log("1. Actualizar titulo");
        console.log("2. Actualizar contenido");
        console.log('3. Publica o despublica un posteo');
        console.log("4. Eliminar");
        console.log('5. Atras\n');

        const opciones = await rl.question("");

        if (opciones > "5" || opciones < "1") {
            console.log("La opcion ingresada debe ser entre 1 y 5");
            continue;
        }

        if (opciones === "5") {
            rl.close();
            return;
        }

        if (opciones === '1') {
            const nuevoTitulo = await rl.question("Ingresa el nuevo titulo: \n");
            await ActualizarTituloPosteo(posteo.id, nuevoTitulo);
            const continuar = await rl.question("Presiona Enter para continuar...");
            continue;
        }

        if (opciones === '2') {
            const nuevoContenido = await rl.question("Ingresa el nuevo contenido: \n");
            await ActualizarContenidoPosteo(posteo.id, nuevoContenido);
            const continuar = await rl.question("Presiona Enter para continuar...");
            continue;
        }

        if (opciones === '3') {
            const nuevoPublicar = await rl.question("Desea cambiar el estado de la publicacion?\n1. Si\n2. No: \n");

            if (nuevoPublicar === "1") await ActualizarPublicarPosteo(posteo.id, !posteo.published);
            else continue;

            const continuar = await rl.question("Presiona Enter para continuar...");
            continue;
        }

        if (opciones === '4') {
            const eliminarPsteo = await rl.question("Desea eliminar el posteo?\n1. Si\n2. No: \n");

            if (eliminarPsteo === "1") {
                const resultado = await EliminarPosteo(posteo.id);
                console.log(`\n ${resultado || "Error al eliminar"}`);
                await rl.question("Presiona Enter para continuar...");
                rl.close();
                return;
            }
            continue;
        }
        rl.close();
        break;
    }

}