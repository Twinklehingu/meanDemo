const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = "mongodb://localhost:27017/videoplayer";
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true }, (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Connected to the Database")
    }
})

//locahost:3000/api
// router.get('/', (req, res)=>{
//     res.send('API Works')
// })

//locahost:3000/api/videos
router.get('/videos', (req, res)=>{
    console.log("Get all videos")
    Video.find({})
        .exec(function(err, videos){
            if(err){
                console.log(err)
            }
            else{
                res.json(videos)
            }
        })
});
// /
module.exports = router;
router.get('/', function(req, res) {
    res.send('api works');
});

module.exports = router;

