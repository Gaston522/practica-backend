import { prisma } from "../../lib/prisma.ts";

export async function MostrarPosteos(id: number) {
    try {
        
        const posteos = await prisma.post.findMany({
            where:{
                authorId: id
            }
        })

        return posteos;

    } catch (error: any) {
        console.error("Error inesperado en el servicio:", error.message);
        return null;
    }
}

export async function MostrarPosteo(idU: number, idP: number) {
    try {
        
        const posteo = await prisma.post.findFirst({
            where:{
                id: idP,
                authorId: idU
            }
        })

        return posteo;

    } catch (error: any) {
        console.error("Error inesperado en el servicio:", error.message);
        return null;
    }
}