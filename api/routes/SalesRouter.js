const express = require("express");
const router = express.Router();

const { createSale, getAll,getIndividualSale } = require("./controllers/SalesControllers") 

router.post("/add", createSale)
router.get("/:id", getIndividualSale)
router.get("/", getAll)

module.exports = router;
