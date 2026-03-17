import readline from 'node:readline/promises';
import { LoguearUsuario } from '../services/loguearUsuario.ts';

export async function Ingresar() {

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    console.clear();
    console.log("======================================");
    console.log(`               INGRESAR`);
    console.log("======================================");

    let ingresar = "";
    let password = "";
    let buscarUsuario;

    while (true) {
        ingresar = await rl.question(`Ingresa tu email, regresa con 0 o finaliza con el 1: `);

        if (ingresar === '1') {
            rl.close();
            return null;
        }

        if (ingresar === '0') {
            rl.close();
            return 0;
        }

        password = await rl.question(`Ingresa tu password, regresa con 0 o finaliza con el 1: `);
        
        if (password === '1') {
            rl.close();
            return null;
        }

        if (password === '0') {
            rl.close();
            return 0;
        }

        buscarUsuario = await LoguearUsuario(ingresar, password);

        if (!buscarUsuario) {
            console.log(`El email o password son incorrectos. Reitenta, regresa con 0 o finaliza con el 1: `);
            continue;
        }

        break;
    }

    console.clear();
    rl.close();
    return buscarUsuario.id;
}