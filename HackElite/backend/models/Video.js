const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({
   videoId: {
      type: String,
      required: [true, 'Please provide video ID']
   },
   title: {
      type: String,
      required: [true, 'Please provide a title'],
   },
   description: {
      type: String,
   },
   thumbnailUrl: {
      type: [String],
   },
   url: {
      type: String,
      required: [true, 'Please provide a url'],
   },
   user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true
   }
}, { versionKey: false })

module.exports = mongoose.model('Video', VideoSchema)