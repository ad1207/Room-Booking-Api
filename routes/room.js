const express = require("express")
const router = express.Router();
const roomModule = require("../module/room")

router.post('/create',roomModule.createRoom)
router.get('/get',roomModule.getRoom)
router.post('/book',roomModule.bookRoom)
router.get('/booked',roomModule.getBookedRooms)
module.exports = router