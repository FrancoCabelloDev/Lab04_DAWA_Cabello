const express = require('express');
const router = express.Router();

let videojuegos = []; // Array en memoria

router.get('/games', (req, res) => {
  res.render('games', { videojuegos });
});

router.post('/formgames', (req, res) => {
  const { titulo, genero, plataforma, anio, desarrollador } = req.body;
  videojuegos.push({ titulo, genero, plataforma, anio, desarrollador });
  res.redirect('/games'); // Redirige para mostrar la tabla actualizada
});

module.exports = router;