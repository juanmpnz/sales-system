const express = require("express");
const router = express.Router();

const { createSale, getAll } = require("./controllers/SalesControllers") 

router.post("/add", createSale)
router.get("/", getAll)

module.exports = router;
