const express = require("express")

const router = express.Router()

router.get("/ping", (req, res) => res.send("pong"))


router.use("/*", (req, res) => {
  res.send("No route found")
})

module.exports = router
