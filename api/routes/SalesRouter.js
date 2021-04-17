const express = require("express");
const router = express.Router();

const { createSale, getAll,getIndividualSale , deleteSale} = require("./controllers/SalesControllers") 

router.post("/add", createSale)
router.post("/delete/:id", deleteSale)
router.get("/:id", getIndividualSale)
router.get("/", getAll)

module.exports = router;
