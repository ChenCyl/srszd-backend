const mongoose = require("mongoose")
const Schema = mongoose.Schema

// type:
// 1 - 玩家剪辑
// 2 - moment
// 3 - 官方视频
const VideoSchema = new Schema({
    title: {
		type: String,
		require: true
	},
	type: {
		type: Number,
		require: true
    },
    image: {
		type: String,
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
	},
	episode: {
		type: Array
	}
})

// require 这个模型才能去查询
// 是借助了 mongoose 才实现的
module.exports = Video = mongoose.model("videos", VideoSchema)