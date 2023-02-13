const express = require("express");
const router = express.Router();
const rssController = require("../controllers/rssController");

router.get("/alllinks", rssController.getAllLinks);
router.get("/:link", rssController.getRssSourceFromLink);

module.exports = router;