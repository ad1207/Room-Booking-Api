const mongo = require("../shared/connect")
const {ObjectId} = require("bson")

module.exports.createRoom = async (req,res,next) =>{
    try{
        var data = await mongo.selectedDb.collection("roomDetails").insertOne(req.body);
        res.send(data);
    }catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports.getRoom = async (req,res,next) => {
    try {
        var data =await mongo.selectedDb.collection('roomDetails').find().toArray();
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports.bookRoom = async (req,res,next) => {
    try{
        var roomList = await mongo.selectedDb.collection('roomDetails').find().toArray();
        var bookedRoom = await mongo.selectedDb.collection('bookedRooms').find().toArray();
        var details = req.body;
        var flag=true;
        for(var i=0;i<roomList.length;i++){
            if(roomList[i].id===details.roomId){
                for(var j=0;j<bookedRoom.length;j++){
                    if((bookedRoom[j].roomId===details.roomId) && (bookedRoom[j].date===details.date)){
                        flag=false;
                    }
                }
            }
        }
        if(flag===true){
            var data = await mongo.selectedDb.collection('bookedRooms').insertOne(req.body);
            res.send(data)
        }
        else{
            res.send("Room Not Available")
        }
    }catch(err){
        console.log(err)
        res.send(500).send(err)
    }
    

}

module.exports.getCustomer = async (req,res,next) => {
    try {
        var data = await mongo.selectedDb.collection('bookedRooms').find().toArray();
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports.getBookedRooms = async (req,res,next) => {
    try {
        var data = await mongo.selectedDb.collection('bookedRooms').find().toArray();
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}