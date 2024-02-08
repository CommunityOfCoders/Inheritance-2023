import React, { useState } from 'react'
import axiosClient from '../api/axiosClient'

const Modal = ({ isOpen, onClose }) => {
  // Regex to verify the URL.
  const videoUrl =
    /^(https?:\/\/)?(www\.)?(youtube\.com\/(embed\/|v\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/

  const playListUrl =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/)(?:.*?[?&]list=)([a-zA-Z0-9_-]+)/

  // State Variables.
  const [url, setUrl] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => setUrl(e.target.value)

  // Adding the URL.
  const addUrl = async () => {
    if (!videoUrl.test(url) && !playListUrl.test(url)) {
      setErrorMessage('Invalid YouTube URL. Please Enter a valid URL.')
      setUrl('')

      setTimeout(() => {
        setErrorMessage('')
      }, 2000)
    } else {
      if (videoUrl.test(url)) {
        const resp = await axiosClient.post('/api/v1/video/addUrl', {
          url: url,
          video: true,
        })
      } else {
        const resp = await axiosClient.post('/api/v1/video/addUrl', {
          url: url,
          video: false,
        })
      }
      setUrl('')
      onClose()
      window.location.reload()
    }
  }

  return (
    // Main Div
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } fixed z-10 overflow-y-auto top-0 w-full left-0`}
      id="modal"
    >
      {/* Modal Position Fixing */}
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div
          className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {/* Taking the Input */}
          <div className="rounded bg-blue-300 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <label className="font-medium text-gray-800">Url</label>
            <input
              type="text"
              className="w-full outline-none focus:outline-black rounded bg-blue-100 p-2 mt-2 mb-3"
              value={url}
              onChange={handleChange}
            />
            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          </div>

          {/* Close Button */}
          <div className="bg-blue-500 px-4 py-3 text-right">
            <button
              type="button"
              className="py-2 px-4 bg-red-500 rounded-lg text-white mr-2 hover:bg-white hover:text-black hover:border-black duration-300"
              onClick={onClose}
            >
              <i className="fa-solid fa-x mr-2" />
              Cancel
            </button>

            {/* Create Button */}
            <button
              type="button"
              className="py-2 px-4 bg-black rounded-lg text-white font-medium hover:bg-white hover:text-black hover:border-black mr-2 transition duration-300"
              onClick={addUrl}
            >
              <i className="fa-solid fa-plus" /> Create
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
