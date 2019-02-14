const express = require("express")
const router = express.Router()

// 拿到 mongo 模型
const Image = require("../models/Image")

// @route GET /images
// @desc Get all images
// @access public
router.get("/", (req, res) => {
  Image.find()
    .then(images => {
      res.json(images)
    })
    .catch(err => {console.log(err)})
})

// @route GET /images/:type
// @desc Get images by type(1, 2, 3)
// @access public
router.get("/:type", (req, res) => {
  Image.find({type: req.params.type})
    .then(images => {
      res.json(images)
    })
    .catch(err => {console.log(err)})
})

// @route POST /images
// @desc create/update new images[]
// @access public
router.post("/", (req, res) => { 
  // let newImage = new Image(req.body)
  Image.insertMany(req.body)
    .then(ret => {
      res.json(ret)
    })
    .catch(err => {
      console.log(err)  
    })
})

// @route GET /images/test
// @desc 测试
// @access public
router.get("/test", (req, res) => {
  res.json({
    msg: "image route works"
  })
})

module.exports = router