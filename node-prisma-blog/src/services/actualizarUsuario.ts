import { prisma } from "../../lib/prisma.ts";
import { BuscarUsuarioEmail } from "./buscarUsuario.ts";

export async function ActualizarNombreUsuario(id: number, nombre: string) {
    try {

        const usuarioNombre = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            name: nombre
        },
    })

        console.log("Se actualizo correctamente");
        

    } catch (error: any) {
        console.error("Error inesperado en el servicio:", error.message);
    }
}

export async function ActualizarEmailUsuario(id: number, email: string) {
    try {
        
        const busquedaEmail = await BuscarUsuarioEmail(email);

        if (busquedaEmail) {
            return false;
        }

        const usuarioEmail = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            email: email
        },
    })

        return true;

    } catch (error: any) {
        console.error("Error inesperado en el servicio:", error.message);
        return false;
    }
}

export async function ActualizarPasswordUsuario(id: number, password: string) {
    try {
        
        const usuarioPassword = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            password: password
        },
    })

        console.log("Se actualizo correctamente");
        

    } catch (error: any) {
        console.error("Error inesperado en el servicio:", error.message);
    }
}
