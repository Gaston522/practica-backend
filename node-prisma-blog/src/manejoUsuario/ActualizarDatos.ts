import readline from 'node:readline/promises';
import { ActualizarNombreUsuario, ActualizarEmailUsuario, ActualizarPasswordUsuario } from '../services/actualizarUsuario.ts';

export async function ActualizarDatos(id: number) {

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    while (true) {

        console.clear();
        console.log("======================================");
        console.log(`          ACTUALIZAR DATOS   `);
        console.log("======================================");
        console.log("1. Actualizar Nombre\n2. Actualizar Email\n3. Actualizar Password\n4. Atras\n");
        let opciones = await rl.question('Selecciona una opcion: ');

        if (opciones < "0" || opciones > "4") {

            console.log("Debes elegir entre 1 y 3");
            const continuar = await rl.question('Presiona Enter para continuar...');
            continue;
        }

        if (opciones === '1') {
            
            const nuevoNombre = await rl.question('Ingresa el nuevo nombre:\n');

            await ActualizarNombreUsuario(id, nuevoNombre);

            const continuar = await rl.question('Presiona Enter para continuar...');
            continue;
        }

        if (opciones === '2') {
            
            const nuevoEmail = await rl.question('Ingresa el nuevo email:\n');

            await ActualizarEmailUsuario(id, nuevoEmail);

            const continuar = await rl.question('Presiona Enter para continuar...');
            continue;
        }

        if (opciones === '3') {
            
            const nuevoPassword = await rl.question('Ingresa el nuevo password:\n');

            await ActualizarPasswordUsuario(id, nuevoPassword);

            const continuar = await rl.question('Presiona Enter para continuar...');
            continue;
        }

        rl.close();
        break;
    }
}
