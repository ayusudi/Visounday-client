import axios from "axios";
import { FileInput, Label, Spinner } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SwallError from "./SwallError";
const { VITE_CLOUDINARY_CLOUD, VITE_CLOUDINARY_APIKEY, VITE_CLOUDINARY_UPLOADPRESET } = import.meta.env

export default function FormVideoUpload({ fetchVideos }) {
  const navigate = useNavigate()
  let [bodyData, setBodyData] = useState({})
  const [status, setStatus] = useState({
    cursorUpload: "cursor-pointer",
    cursorGenerate: "cursor-not-allowed",
    cursorChat: "cursor-not-allowed",
  });
  const [statusLoadingChat, setLoadingChat] = useState(false)
  const [uploading, setUploading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [videoFile, setVideoFile] = useState(null);
  const [videoPublicId, setVideoPublicId] = useState('');
  const [videoUploadedUrl, setVideoUploadedUrl] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const videoElement = document.createElement('video');
    videoElement.src = URL.createObjectURL(file);
    videoElement.onloadedmetadata = () => {
      const duration = videoElement.duration;
      if (duration < 15 || duration > 44) {
        SwallError('Video duration must be between 15 and 44 seconds.');
        setVideoFile(null);
      } else {
        setVideoFile(file);
      }
    };
  };

  const handleVideoUpload = async (event) => {
    event.preventDefault();
    if (videoFile && videoFile.size < (40 * 1024 * 1024)) {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', videoFile);
      formData.append('upload_preset', VITE_CLOUDINARY_UPLOADPRESET);
      formData.append('api_key', VITE_CLOUDINARY_APIKEY);
      try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${VITE_CLOUDINARY_CLOUD}/video/upload`, {
          method: 'POST',
          body: formData
        });
        const data = await response.json();
        let publicid = data.public_id.replace('videos/', '');
        setVideoPublicId(publicid);
        setUploading(false);
        setStatus({
          cursorUpload: "cursor-not-allowed",
          cursorGenerate: "cursor-pointer",
          cursorChat: "cursor-not-allowed",
        });
        let url = data.secure_url;
        let extension = url.slice(-3).toLowerCase();
        if (extension === "mov") {
          url = url.slice(0, -3) + "mp4";
        }
        setVideoUploadedUrl(url);
      } catch (error) {
        console.log(error);
        console.error('Error uploading video:', error);
        setUploading(false);
      }
    } else {
      SwallError("Your video is bigger than 40 MB")
      setVideoFile(null);
    }
  };

  const generate = async () => {
    try {
      setGenerating(true);
      let { data } = await axios({
        method: "POST",
        url: "https://visounday2024.azurewebsites.net/videos",
        data: {
          url: videoUploadedUrl,
          cloudinaryId: videoPublicId
        },
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      });
      await fetchVideos()
      let { description, JSON, gpt, tags, user, ...raw } = data;
      setBodyData({ ...raw });
      setGenerating(false);
      setStatus({
        cursorUpload: "cursor-not-allowed",
        cursorGenerate: "cursor-not-allowed",
        cursorChat: "cursor-pointer"
      })
    } catch (error) {
      console.log("hello");
      console.log(error);
      setGenerating(false);
    }
  };

  const toChat = async () => {
    setVideoFile(null)
    setTimeout(() => {
      setLoadingChat(true);
      setVideoPublicId('')
      setVideoPublicId('')
      setLoadingChat(false);
      navigate(`/chat/${bodyData.cloudinaryId}`, { state: { ...bodyData } });
    }, 2000)
  }

  return (
    <div className="flex w-full items-center justify-center bg-[#edf4ff]">
      <Label
        htmlFor="dropzone-file"
        className="py-12 flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#232647] bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="w-[80%] flex flex-col items-center justify-center pb-6 pt-5">
          <svg
            className="mb-4 h-12 w-12 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="text-center mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload video</span> or drag and drop
          </p>
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">ONLY UPLOAD 1 VIDEO (MP4/MOV)<br />WITH DURATION BETWEEN 15 TO 40 SECONDS AND LESS THAN 40 MB.</p>
        </div>
        <div className="flex flex-col gap-6 mb-6">
          <FileInput id="dropzone-file" className="z-10 bg-white" onChange={handleFileChange} />
          <div className='flex'>
            <button onClick={handleVideoUpload} className={"relative group inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 " + status.cursorUpload}>
              {uploading ? <span className="text-white p-2 rounded-md group-hover:bg-opacity-0 flex gap-2 "> <Spinner className='w-4 h-[18px] p-0 text-white' color="info" aria-label="Purple spinner example" />UPLOAD</span> : <span className="group-hover:text-white relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">UPLOAD</span>}
            </button>
            <button disabled={status.cursorGenerate === '"cursor-not-allowed"'} onClick={generate} className={"relative group  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 " + status.cursorGenerate}>
              {generating ? <span className="text-white p-2 rounded-md group-hover:bg-opacity-0 flex gap-2 "> <Spinner className='w-4 h-[18px] p-0 text-white' color="info" aria-label="Purple spinner example" />GENERATE</span> : <span className="group-hover:text-white relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">GENERATE</span>}
            </button>
            <button disabled={status.cursorChat === '"cursor-not-allowed"'} onClick={toChat} className={"relative group  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 " + status.cursorChat}>
              {statusLoadingChat ? <span className="text-white p-2 rounded-md group-hover:bg-opacity-0 flex gap-2 "> <Spinner className='w-4 h-[18px] p-0 text-white' color="info" aria-label="Purple spinner example" />CHAT</span> : <span className="group-hover:text-white relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">CHAT</span>}
            </button>
          </div>
        </div>
      </Label>
    </div>

  )
}