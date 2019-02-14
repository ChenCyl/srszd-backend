const express = require("express")
const router = express.Router()

// 拿到 mongo 模型
const Video = require("../models/Video")

// @route GET /videos
// @desc Get all videos
// @access public
router.get("/", (req, res) => {
  Video.find()
    .then(videos => {
      res.json(videos)
    })
    .catch(err => {console.log(err)})
})

// @route GET /videos/:type
// @desc Get videos by type(1, 2, 3)
// @access public
router.get("/:type", (req, res) => {
  // console.log(req.params.type)
  Video.find({
    type: req.params.type
  }).then(videos => {
      res.json(videos)
    })
    .catch(err => {console.log(err)})
})

// @route POST /videos
// @desc create/update new videos[]
// @access public
router.post("/", (req, res) => { 
  // let newVideo = new Video(req.body)
  Video.insertMany(req.body)
    .then(ret => {
      res.json(ret)
    })
    .catch(err => {
      console.log(err)  
    })
})

// @route GET /videos/test
// @desc 测试
// @access public
router.get("/test", (req, res) => {
  res.json({
    msg: "vedio route works"
  })
})

module.exports = router