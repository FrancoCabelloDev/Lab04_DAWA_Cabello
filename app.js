const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));

let videojuegos = []; // Array en memoria para almacenar los juegos

// Motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Rutas principales
const mainRoutes = require("./routes/mainRoutes");
app.use("/", mainRoutes);

// Elimina las rutas /games y /formgames de mainRoutes si están ahí
// y déjalas solo aquí:
app.get("/games", (req, res) => {
  res.render("games", { videojuegos });
});

app.post("/formgames", (req, res) => {
  const { titulo, genero, plataforma, anio, desarrollador } = req.body;
  videojuegos.push({ titulo, genero, plataforma, anio, desarrollador });
  res.redirect("/games");
});

// Middleware 404
app.use((req, res, next) => {
  res.status(404).render("notFound", { url: req.originalUrl });
});

// Servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
