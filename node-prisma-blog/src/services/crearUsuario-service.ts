import { prisma } from "../../lib/prisma.ts";
import { BuscarUsuarioEmail } from "./buscarUsuario.ts";

export async function crearUsuarioService(email: string, nombre: string, password: string) {
    try {

        const busquedaEmail = await BuscarUsuarioEmail(email);

        if (busquedaEmail) {
            return null;
        }

        const usuario = await prisma.user.create({
            data:{
                email: email,
                name: nombre,
                password: password
            }
        })

        console.log("Usuario creado con exito");

        return usuario;
    } catch (error: any) {
        console.error("Error inesperado en el servicio:", error.message);
        return null;
    }
}