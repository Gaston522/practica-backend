import { prisma } from "../../lib/prisma.ts";

export async function ActualizarTituloPosteo(id: number, titulo: string) {
    try {
        
        const posteos = await prisma.post.update({
        where: {
            id: id
        },
        data: {
            title: titulo
        },
    })

        console.log("Se actualizo correctamente");
        

    } catch (error: any) {
        console.error("Error inesperado en el servicio:", error.message);
    }
}

export async function ActualizarContenidoPosteo(id: number, contenido: string) {
    try {
        
        const posteos = await prisma.post.update({
        where: {
            id: id
        },
        data: {
            content: contenido
        },
    })

        console.log("Se actualizo correctamente");
        

    } catch (error: any) {
        console.error("Error inesperado en el servicio:", error.message);
    }
}

export async function ActualizarPublicarPosteo(id: number, publicar: boolean) {
    try {
        
        const posteos = await prisma.post.update({
        where: {
            id: id
        },
        data: {
            published: publicar
        },
    })

        console.log("Se actualizo correctamente");
        

    } catch (error: any) {
        console.error("Error inesperado en el servicio:", error.message);
    }
}
