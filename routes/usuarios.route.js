const express = require("express");
const router = express.Router();

// Agora o caminho será: POST /usuarios/login




router.post("/login", () => {console.log("login")});
router.post("/", () => {console.log("registro")});
router.put("/", () => {console.log("update")});
 
module.exports = router;

