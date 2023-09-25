const express= require("express");
const router= express.Router();

usersRoute= require("../controllers/usersControllers");

router.get("/", usersRoute.userController);

module.exports =router;