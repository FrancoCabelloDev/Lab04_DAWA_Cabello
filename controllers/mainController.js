// "Base de datos" en memoria
const messages = [];
const videojuegos = [];

const home = (req, res) => {
  res.render("home", { title: "Inicio" });
};

const about = (req, res) => {
  res.render("about", { title: "Acerca de" });
};

const contact = (req, res) => {
  res.render("contact");
};

const saveContact = (req, res) => {
  const { nombre, email, mensaje } = req.body;
  messages.push({ nombre, email, mensaje });
  res.redirect("/admin");
};

const admin = (req, res) => {
  res.render("admin", { messages });
};

// NUEVA VISTA: Videojuegos
const games = (req, res) => {
  res.render("games", { videojuegos });
};

const saveExtra = (req, res) => {
  const { titulo, genero, plataforma, anio, desarrollador } = req.body;
  videojuegos.push({ titulo, genero, plataforma, anio, desarrollador });
  res.redirect("/games");
};

const mainController = {
  home,
  about,
  contact,
  saveContact,
  admin,
  games,
  saveExtra,
};

module.exports = mainController;
