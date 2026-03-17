import readline from 'node:readline/promises';
import { CrearPosteo } from '../services/crearPosteos.ts';

export async function CrearPost(id: number) {
    
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    console.clear();
    console.log("======================================");
    console.log(`             CREAR POST`);
    console.log("======================================");
    const titulo = await rl.question('Agregar el titulo: ');
    const contenido = await rl.question('Agregar el contenido: ');
    const publicar = await rl.question('Publicar?\n1- Si\n2- No ');
    let publicado = false;

    if (publicar === "1") publicado = true;

    await CrearPosteo(id, titulo, contenido, publicado)

    rl.close();
    console.clear();
}