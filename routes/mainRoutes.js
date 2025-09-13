const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.home);
router.get("/about", mainController.about);

router.get("/contact", mainController.contact);
router.post("/contact", mainController.saveContact);

router.get("/admin", mainController.admin);

// Elimina cualquier ruta como estas:
// router.get('/games', ...);
// router.post('/formgames', ...);

module.exports = router;
