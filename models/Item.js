const mongoose = require("mongoose")
const Schema = mongoose.Schema

// year: 2018
// month: 01
// day: 01
const ItemSchema = new Schema({
    icon: {
        type: String,
        require: true
    },
    year: {
        type: String,
        require: true
    },
    month: {
        type: String,
        require: true
    },
    day : {
        type: String,
        require: true
    },
	title: {
		type: String,
		require: true
	},
	desc: {
		type: String,
		require: true
	},
	image: {
		type: String,
		require: true
    },
    url: {
        type: String,
        require: true
    }
})

// require 这个模型才能去查询
// 是借助了 mongoose 才实现的
module.exports = Item = mongoose.model("items", ItemSchema)