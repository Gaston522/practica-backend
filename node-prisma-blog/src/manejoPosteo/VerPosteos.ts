import { EliminarPosteo } from "../services/eliminarPosteo.ts";
import { MostrarPosteos, MostrarPosteo } from "../services/mostrarPosteos.ts";
import readline from 'node:readline/promises';
import { Posteo } from "./Posteo.ts";

export async function VerPosteos(id: number) {

    while (true) {

        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

        console.clear();
        console.log("======================================");
        console.log(`             MIS POSTEOS`);
        console.log("======================================");

        const posteos = await MostrarPosteos(id);

        if (!posteos || posteos.length === 0) {
            console.log("No tienes posteos todavía.");
            const continuar = await rl.question('Presiona Enter para continuar...')
            rl.close();
            break;
        } else {
            posteos.forEach((p, idx) => console.log(`${idx + 1}. ${p.title}`));
        }

        console.log("\nElige una opcion:\n");

        console.log("1. Entrar a un posteo");
        console.log("2. Eliminar un posteo");
        console.log("3. Atras");
        console.log("4. Salir");

        const ingreso = await rl.question("");

        if (ingreso === "1") {
            console.clear();
            posteos?.forEach((p, idx) => console.log(`${idx + 1}. ${p.title}`));

            const seleccion = await rl.question("Elige el número del posteo: ");
            const index = Number(seleccion) - 1;

            if (posteos && posteos[index]) {
                const idReal = posteos[index].id;

                const posteoBuscado = await MostrarPosteo(id, idReal);
                rl.close();
                await Posteo(posteoBuscado);
            } else {
                console.log("Selección inválida.");
            }
            continue;
        }

        if (ingreso === "2") {
            const idxInput = await rl.question('Número del posteo a eliminar: ');
            const index = Number(idxInput) - 1;

            if (posteos && posteos[index]) {
                const seguro = await rl.question(`¿Seguro que deseas eliminar "${posteos[index].title}"?\n1. Si\n2. No\n> `);

                if (seguro === '1') {
                    const resultado = await EliminarPosteo(posteos[index].id);
                    console.log(`\n ${resultado || "Error al eliminar"}`);
                    await rl.question("Presiona Enter para continuar...");
                }
            } else {
                console.log("\n Número de posteo inválido.");
                await rl.question("Presiona Enter para intentar de nuevo...");
            }
            continue;
        }

        if (ingreso === "4") {
            rl.close();
            return null;
        }

        rl.close();
        break;
    }

    return 1;
}