const express = require("express");
const passport = require('passport')
const router = express.Router();

const { userRegister ,getUsers, login , me, logout } = require("./controllers/UsersControllers") 

router.post("/register", userRegister)
router.post('/login',passport.authenticate('local') , login );
router.post("/logout", logout)
router.get("/me", me)
router.get("/", getUsers)

module.exports = router;


 