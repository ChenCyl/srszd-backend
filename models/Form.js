const mongoose = require("mongoose")
const Schema = mongoose.Schema

const FormSchema = new Schema({
	name: {
        type: String,
        required: true
    },
    message: {
        type: String
    },
    record: {
        type: String,
        required: true
    },
	date: {
        type: Date,
        default: Date.now
	}
})

// require 这个模型才能去查询
// 是借助了 mongoose 才实现的
module.exports = Form = mongoose.model("forms", FormSchema)