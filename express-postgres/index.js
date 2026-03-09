const express = require('express');
const { Pool } = require('pg');

const app = express();

const PORT = process.env.PORT ?? 1234;

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'boca_db',
  password: process.env.DB_PASSWORD || 'boca123',
  port: process.env.DB_PORT || 5432,
});

// Ejemplo de una ruta GET para probar la tabla
app.get('/prueba-jugador', async (req, res) => {
  try {
    // La consulta más simple: Selecciona todas las columnas (*) de la tabla
    const query = 'SELECT * FROM jugador ORDER BY id ASC';

    const result = await pool.query(query);

    // Enviamos el arreglo completo de filas al cliente
    res.json(result.rows);

  } catch (err) {
    console.error('Error al obtener jugadores:', err.message);
    res.status(500).send("Error en el servidor");
  }
});

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})