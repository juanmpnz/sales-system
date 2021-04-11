const express = require("express")
const router = express.Router()
const userRouter = require("./UsersRouter")
const OfficeRouter = require("./OfficeRouter")
const SalesRouter = require("./SalesRouter")

router.get("/ping", (req, res) => res.send("pong"))

router.use("/users", userRouter)
router.use("/office", OfficeRouter)
router.use("/sales", SalesRouter)

router.use("/*", (req, res) => {
  res.send("No route found")
})

module.exports = router
