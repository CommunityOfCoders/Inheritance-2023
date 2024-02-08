const fetchYouTubeVideoDetails = async (videoId, video) => {
   if (video) {
      const videoUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.GOOGLE_API_KEY
         }&part=snippet`
      try {
         const response = await fetch(videoUrl)
         const data = await response.json()

         if (data.items.length > 0) {
            return {
               id: videoId,
               title: data.items[0].snippet.title,
               description: data.items[0].snippet.description,
               thumbnailUrl: data.items[0].snippet.thumbnails.high.url,
            }
         } else {
            return null
         }
      } catch (error) {
         console.log(error)
      }
   } else {
      const playListUrl = `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&id=${videoId}&key=${process.env.GOOGLE_API_KEY}`
      try {
         const response = await fetch(playListUrl)
         const data = await response.json()

         if (data.items.length > 0) {
            if (data.items.length > 0) {
               return {
                  id: videoId,
                  title: data.items[0].snippet.title,
                  description: data.items[0].snippet.description,
                  thumbnailUrl: data.items[0].snippet.thumbnails.high.url,
               }
            } else {
               return null
            }
         } else {
            return null
         }
      } catch (error) {
         console.log(error)
      }
   }
}

const extractYouTubeID = (url, video) => {
   const videoUrl =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/(embed\/|v\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
   const playListUrl =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/)(?:.*?[?&]list=)([a-zA-Z0-9_-]+)/

   if (video) {
      let match = url.match(videoUrl)
      return match[5]
   } else {
      let match = url.match(playListUrl)
      return match[1]
   }
}

const handleFetchVideoDetails = async (url, video) => {
   const videoId = extractYouTubeID(url, video)
   console.log(videoId);
   if (videoId) {
      const details = await fetchYouTubeVideoDetails(videoId, video)
      return details
   }
}

module.exports = handleFetchVideoDetails 