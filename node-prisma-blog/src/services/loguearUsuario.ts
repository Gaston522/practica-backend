import { prisma } from "../../lib/prisma.ts"

export async function LoguearUsuario(email: string, password: string) {

    const usuario = await prisma.user.findFirst({
        where:{
            email: email,
            password: password
        }
    })

    return usuario;
}