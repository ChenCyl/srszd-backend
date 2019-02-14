const mongoose = require("mongoose")
const Schema = mongoose.Schema

// type:
// 1 - 玩家绘
// 2 - moment
// 3 - 官方图片
const ImageSchema = new Schema({
	type: {
		type: Number,
		require: true
	},
	url: {
		type: String,
		require: true
	},
	author: {
		type: String,
		require: true
	},
	authorLink: {
		type: String,
		require: true
	},
	date: {
        type: Date,
        default: Date.now
	}
})

// require 这个模型才能去查询
// 是借助了 mongoose 才实现的
module.exports = Image = mongoose.model("images", ImageSchema)