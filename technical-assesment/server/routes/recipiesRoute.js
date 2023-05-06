const express = require("express");
const router = express.Router();
const {getrecepie,addRecepie,deleteRecepie,update}= require('../controller/recipiesController')

router.get("/api/menuItems",getrecepie);
router.post("/api/recepies",addRecepie);
router.delete("/api/recepies/:id",deleteRecepie)
router.patch("/api/recepies/:id",update)

module.exports = router;
