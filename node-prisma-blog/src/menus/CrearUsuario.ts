import readline from 'node:readline/promises';
import { BuscarUsuarioEmail } from '../services/buscarUsuario.ts';
import { crearUsuarioService } from '../services/crearUsuario-service.ts';

export async function CrearUsuario() {

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    console.clear();
    console.log("======================================");
    console.log(`            CREAR USUARIO`);
    console.log("======================================");

    let emailIngresado = "";

    // 1. Lógica de Email con validación de existencia
    while (true) {

        emailIngresado = await rl.question('Ingresa el email, 0 para retroceder o 1 para salir: ');

        if (emailIngresado === "1") {
            rl.close();
            return null;
        }
        if (emailIngresado === "0") {
            rl.close();
            return 0;
        }

        emailIngresado = await CheckLength(emailIngresado, "email", rl)

        const buscarEmail = await BuscarUsuarioEmail(emailIngresado)

        if (buscarEmail) {
            console.log('El email ya existe. Intenta de nuevo.');
            continue;
        }
        break;
    }

    // 2. Password
    let password = await rl.question('Ingresa el password: ');
    password = await CheckLength(password, "password", rl);

    // 3. Nombre
    let nombre = await rl.question('Ingresa el nombre: ');
    nombre = await CheckLength(nombre, "nombre", rl);

    // 4. Creación
    const newUser = await crearUsuarioService(emailIngresado, nombre, password);

    console.clear();
    if (!newUser) {
        console.log("Error: No se pudo crear el usuario.");
        return null;
    }

    console.log(`Usuario creado con exito`);
    rl.close();
    return newUser.id;
}

async function CheckLength(ingreso: string, palabra: string, rl: any) {
    let actual = ingreso;
    while (actual.length < 3 || actual.length > 30) {
        console.log(`El ${palabra} debe tener entre 3 y 30 caracteres.`);
        actual = await rl.question(`Ingresa el ${palabra} nuevamente: `);
    }
    return actual;
}