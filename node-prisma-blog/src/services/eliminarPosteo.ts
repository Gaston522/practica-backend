import { prisma } from "../../lib/prisma.ts";

export async function EliminarPosteo(id: number) {
    try {
        
        await prisma.post.delete({
            where:{
                id: id
            }
        })

        return "Eliminado con exito";

    } catch (error: any) {
        // P2025 es el código de Prisma cuando el registro no existe
        if (error.code === 'P2025') {
            console.warn(`Aviso: El post con ID ${id} no existe.`);
            return "El post ya no existe";
        }

        console.error("Error inesperado en el servicio:", error.message);
        return null;
    }
}