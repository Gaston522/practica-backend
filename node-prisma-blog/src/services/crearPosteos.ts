import { prisma } from "../../lib/prisma.ts";

export async function CrearPosteo(id: number, titulo: string, contenido: string, publicar: boolean) {
    
    try {
        await prisma.post.create({
            data:{
                title: titulo,
                content: contenido,
                published: publicar,
                authorId: id
            }
        })

        console.log("Posteo creado con exito.");
        
    } catch (error: any) {
        console.error("Error inesperado en el servicio:", error.message);
    }
}