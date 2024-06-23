import { useNavigate } from "react-router-dom";

export default function ContainerIndexer({ url, tags, cloudinaryId, hideChat }) {
  const navigate = useNavigate();

  return (
    <div className='bg-[#d1e3f9] flex flex-col flex-grow p-6 w-full xl:w-7/12'>
      <p className='font-main text-2xl'>VIDEO : </p>
      <video className='h-[280px] w-auto bg-darker rounded' controls>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <br />
      <p className='font-main text-2xl'>List Tag : </p>
      <div className='flex flex-wrap gap-2'>
        {tags.map(el => <p key={el} className='font-main text-xl bg-white rounded p-2'>#{el}</p>)}
      </div>
      <br />
      {
        !hideChat && (
          <button className="flex self-start relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 from-purple-600 to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span onClick={() => navigate(`/chat/${cloudinaryId}`)} className="text-white text-xl relative px-1.5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md bg-opacity-0">
              CHAT WITH VISOUNDAY!
            </span>
          </button>
        )
      }
      <p className='mt-2.5'>ℹ️ Get your video analyze and song recommendations via CHAT</p>
    </div>
  )
}