const express = require("express");
const router = express.Router();

const { createOffice,getOffice } = require("./controllers/OfficeControllers") 

router.post("/add", createOffice)
router.get("/", getOffice)

module.exports = router;
