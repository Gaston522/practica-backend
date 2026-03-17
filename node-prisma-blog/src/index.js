import { prisma } from "../lib/prisma.ts";
import { Principal } from "./menus/Principal.ts";
import { CrearUsuario } from "./menus/CrearUsuario.ts";
import { Ingresar } from "./menus/Ingresar.ts";
import { Dashboard } from "./menus/Dashboard.ts";

async function main() {

    try {
        //esta variable va a guardar un number se sera la id del usuario
        //o un numero para el flujo
        let usuarioCreado;

        while (true) {

            // Principal() debería retornar 1 (Crear), 2 (Loguear) o null (Salir)
            const ingreso = await Principal();

            // CASO: Salir del programa
            if (ingreso === null) {
                console.log("Saliendo...");
                break;
            }

            // CASO 1: Crear Usuario
            if (ingreso === 1) {
                usuarioCreado = await CrearUsuario();

                if (usuarioCreado === null) { console.log("Saliendo..."); break; } // Salida total
                if (usuarioCreado === 0) continue; // Volver al menú principal

                if (usuarioCreado > 0) {
                    const dboard = await Dashboard(usuarioCreado);

                    if (dboard === null) {
                        console.log("Saliendo...");
                        break;
                    }
                    continue;
                    // Al volver del Dashboard, el bucle sigue y muestra Principal()
                }
            }

            // CASO 2: Ingresar (Login)
            if (ingreso === 2) {
                const usuarioLogueado = await Ingresar();

                if (usuarioLogueado === null) { 
                    console.log("Saliendo..."); 
                    break; 
                } // Salida total
                if (usuarioLogueado === 0) continue; // Volver al menú

                if (usuarioLogueado > 0) {
                    await Dashboard(usuarioLogueado);
                    continue;
                }
            }

            break;
        }

    } catch (e) {
        console.error("Hubo un error:", e);
        process.exit(1);
    } finally {
        // Esto se ejecuta SIEMPRE, haya error o no
        await prisma.$disconnect();
        process.exit(0)
    }
}

main()