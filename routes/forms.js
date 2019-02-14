const express = require("express")
const router = express.Router()

// 拿到 mongo 模型
const Form = require("../models/Form")

// @route GET /forms
// @desc Get all forms
// @access public
router.get("/", (req, res) => {
  Form.find()
    .then(forms => {
      res.json(forms)
    })
    .catch(err => {console.log(err)})
})

// @route POST /forms
// @desc create/update new forms[]
// @access public
router.post("/", (req, res) => { 
  let newForm = new Form(req.body)
    newForm.save()
    .then(ret => {
      res.json(ret)
    })
    .catch(err => {
      console.log(err)  
    })
})

// @route GET /forms/test
// @desc 测试
// @access public
router.get("/test", (req, res) => {
  res.json({
    msg: "image route works"
  })
})

module.exports = router