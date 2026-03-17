import { prisma } from "../../lib/prisma.ts"

export async function BuscarUsuarioEmail(email: string) {

    const usuario = await prisma.user.findFirst({
        where:{
            email: email
        }
    })

    return usuario;
}

export async function BuscarUsuarioId(id: number) {
    
    const usuario = await prisma.user.findFirst({
        where:{
            id: id
        }
    })

    return usuario;
}