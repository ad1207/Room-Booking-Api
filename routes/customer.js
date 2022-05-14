const express = require("express")
const router = express.Router();
const roomModule = require("../module/room")

router.get('/get',roomModule.getCustomer)
module.exports = router