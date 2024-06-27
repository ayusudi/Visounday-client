import React, { useEffect, useState } from 'react';
import { Spinner } from "flowbite-react";
import { useParams } from "react-router-dom";
import axios from 'axios';

import Header from '../components/Header';
import ContainerChat from '../components/ContainerChat';
import NavBar from '../components/NavBar';
import Footer from "../components/Footer";

export default function Page() {
  const [loadPage, setLoadPage] = useState(true)
  const [state, setState] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  let [chats, setChats] = useState([])
  const [input, setInput] = useState('')
  const { cloudinary_id } = useParams()

  const askGPT = (first = false) => {
    if (first || input.length) {
      if (input.length) setChats([...chats, { role: "user", content: input, type: "input-text" }])
      let content = input
      setInput('')
      setIsLoading(true)
      axios({
        method: "POST",
        url: "https://visoundayserver.azurewebsites.net/videos/" + cloudinary_id + '/gpt',
        headers: {
          access_token: localStorage.getItem("access_token")
        },
        data: {
          content
        }
      })
        .then(({ data }) => {
          setChats(data)
        })
        .catch(err => {
          let data = [...chats]
          data.push({ content: "Sorry something happen and I can't talk now.", role: "assistant" })
          setChats(data)
        })
        .finally(() => setIsLoading(false))
    }
  }

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://visoundayserver.azurewebsites.net/videos/" + cloudinary_id,
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
      .then(({ data }) => {
        setState(data.video)
        console.log(data.video);
        setLoadPage(false)
        if (!data.video.gptChats.length) {
          setChats([
            {
              role: 'assistant',
              content: "Hello! I'm Visounday, an AI designed to help content creators like you analyze video data and provide insights. I can describe your raw data in a way that's easy to understand and visualize, and I can also recommend background music to enhance your content. How can I assist you today?",
              type: "init"
            },
            {
              role: 'user',
              content: "Hi Visounday, let's do your work! Here is the video and generate.json",
              type: "input-text"
            },
            { role: "user", content: "JSON", type: "input-json" },
            { role: "user", content: "URL VIDEO", type: "input-video" },
          ])
          if (!data.video.gpt.length) {
            return askGPT(true)
          }
        } else {
          setChats(data.video.gptChats)
          setIsLoading(false)
        }
      })
      .catch(err => console.log((err)))
  }, [])

  return (
    <div id="dashboard">
      <Header />
      <div className="flex flex-col gap-6 md:mx-[60px] mx-5 bg-white rounded-3xl mt-[-7.5%] p-10">
        {
          !loadPage && (<>
            <NavBar />
            <div className="border border-1.5 border-[#d7e1f4] rounded-2xl  overflow-hidden flex w-full xl:flex-row flex-col">
              <div className='w-full h-[72vh]'>
                <ContainerChat chats={chats} url={state.url} isLoading={isLoading} />
                <div className='flex  items-center h-[10%]'>
                  <input value={input} onChange={(e) => setInput(e.target.value)} type='text' className='border-none ring-none focus:ring-0 outlined-none bg-red w-11/12 self-center px-8' />
                  <button onClick={askGPT} className={"mt-3 relative group inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 " + (!isLoading ? 'cursor-ponter' : 'cursor-not-allowed')}>
                    {isLoading ? <span className="text-white p-2 rounded-md group-hover:bg-opacity-0 flex gap-2 "> <Spinner className='w-4 h-[18px] p-0 text-white' color="info" aria-label="Purple spinner example" />SEND</span> : <span className="group-hover:text-white relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">SEND</span>}
                  </button>
                </div>

              </div>
              <div className='bg-[#d1e3f9] flex flex-col flex-grow p-6'>
                <p className='py-3 text-[#090C30]'>ℹ️ Chat with Visounday to get your video insight and recommendations.<br></br>It will be nice if your share and mention <b>@airprogramming</b> at X or Instagram. </p>
                <img className='rounded-2xl border-8 border-[#090C30] xl:flex hidden' src={state.cover} />
              </div>
            </div>
          </>
          )
        }
        {
          loadPage && (
            <img src="/loading.gif" className='w-[240px] object-contain m-auto' />
          )
        }
      </div>
      <div className="pt-4  pb-7">
        <Footer />
      </div>
    </div>
  );
}
