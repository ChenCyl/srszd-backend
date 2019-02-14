const express = require("express")
const router = express.Router()

// 拿到 mongo 模型
const Item = require("../models/Item")

// @route GET /items
// @desc Get all items
// @access public
router.get("/", (req, res) => {
  Item.find()
    .then(items => {
      res.json(items)
    })
    .catch(err => {console.log(err)})
})

// @route GET /items/:year
// @desc Get items by year(2018, 2019)
// @access public
router.get("/:year", (req, res) => {
  Item.find({year: req.params.year})
    .then(items => {
      res.json(items)
    })
    .catch(err => {console.log(err)})
})

// @route GET /items/:year/:month
// @desc Get items by year(2018, 2019) and month(01, 02 ... 12)
// @access public
router.get("/:year/:month", (req, res) => {
    Item.find({
        year: req.params.year,
        month: req.params.month
    })
      .then(items => {
        res.json(items)
      })
      .catch(err => {console.log(err)})
  })

// @route POST /items
// @desc create/update new items[]
// @access public
router.post("/", (req, res) => { 
  // let newItem = new Item(req.body)
  Item.insertMany(req.body)
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
    msg: "item route works"
  })
})

module.exports = router