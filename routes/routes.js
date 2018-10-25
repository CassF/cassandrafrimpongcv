const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/", indexController.showIndex);
router.get("/new", indexController.showNewIndex);

module.exports = router;