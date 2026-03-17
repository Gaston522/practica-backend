import readline from 'node:readline/promises';
import { BuscarUsuarioId } from '../services/buscarUsuario.ts';
import { CrearPost } from '../manejoPosteo/CrearPost.ts';
import { VerPosteos } from "../manejoPosteo/VerPosteos.ts";
import { ActualizarDatos } from '../manejoUsuario/ActualizarDatos.ts';

export async function Dashboard(usuarioId: number) {

    let opciones = "";

    while (true) {

        const user = await BuscarUsuarioId(usuarioId);

        console.clear();
        console.log("======================================");
        console.log(`       BIENVENIDO, ${user?.name?.toUpperCase()}   `);
        console.log("======================================");
        console.log(`📧 Email: ${user?.email}`);
        console.log(`🆔 ID de cuenta: ${user?.id}`);
        console.log("--------------------------------------");
        console.log("\n1. Ver mis posts");
        console.log("2. Crear nuevo post");
        console.log("3. Actualizar mis datos");
        console.log("4. Salir");

        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

        opciones = await rl.question('Elije una opcion: ');

        if (opciones > "4" || opciones < "1") {

            console.log('Debes elegir entre 1 y 4');
            continue;
        }

        if (opciones === "1") {
            rl.close();
            const posteo = await VerPosteos(usuarioId);
            
            if (posteo === 1) continue;
            if (posteo === null) return null;
        }

        if (opciones === "2") {
            rl.close();
            await CrearPost(usuarioId);
            continue;
        }

        if (opciones === "3") {
            rl.close();
            await ActualizarDatos(usuarioId);
            continue;
        }

        rl.close();
        break;
    }

    return 1;
}