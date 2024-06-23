import { useNavigate } from "react-router-dom";
import { Card } from "flowbite-react";

export default function CardVideo({ el }) {
  const navigate = useNavigate()

  return (
    <Card
      className="col-span-1  mb-12 mx-auto self-center max-w-sm cursor-pointer group border border-0"
      renderImage={() => <img className="rounded-t-lg object-cover filter grayscale-[40%] group-hover:grayscale-0 w-full h-48" src={el.cover} alt="image 1" />}
    >
      <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">
        From coding novice to Airbending Aang @airprogramming, continue developing and welcoming Visounday to the public!
      </p>
      <div className="flex justify-between">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span onClick={() => navigate(`/chat/${el.cloudinaryId}`)} className="group-hover:text-white relative px-1.5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            OPEN CHAT
          </span>
        </button>
        <button onClick={() => navigate(`/enhancer/${el.cloudinaryId}`)} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-black group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="group-hover:text-white relative px-1.5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            VIDEO INDEXER ENHANCE
          </span>
        </button>
      </div>
    </Card>
  )
}