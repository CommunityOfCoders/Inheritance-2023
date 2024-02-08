const Video = require('../models/Video')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const { handleFetchVideoDetails } = require('../utils')

const addUrl = async (req, res) => {
   const { url, video } = req.body
   if (!url) {
      throw new CustomError.BadRequestError("Provide Valid URL")
   }

   const check = await Video.findOne({ url: url, user: req.user.userId })
   if (check) {
      throw new CustomError.BadRequestError("URL already exists!")
   }

   const videoDetails = await handleFetchVideoDetails(url, video)
   await Video.create({
      videoId: videoDetails.id, title: videoDetails.title,
      description: videoDetails.description, thumbnailUrl: videoDetails.thumbnailUrl, url, user: req.user.userId
   })

   res.status(StatusCodes.CREATED).json({ msg: 'Successfully Created' })
}

const deleteUrl = async (req, res) => {
   const { id } = req.params
   if (!id) {
      throw new CustomError.BadRequestError('Please provide video ID')
   }

   const video = Video.findOne({ _id: id })
   if (!video) {
      throw new CustomError.BadRequestError("No video with Id!")
   }

   await Video.findByIdAndDelete({ _id: id })
   res.status(StatusCodes.OK).json({ msg: "Video deleted successfully" })
}

const getUrls = async (req, res) => {
   const videos = await Video.find({ user: req.user.userId })
   res.status(StatusCodes.OK).json(videos)
}

module.exports = { addUrl, deleteUrl, getUrls }