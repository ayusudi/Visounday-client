import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Footer from "../components/Footer";
import Header from '../components/Header';
import ContainerTagImage from '../components/ContainerTagImage';
import NavBar from '../components/NavBar';
import ContainerIndexer from '../components/ContainerIndexer';

export default function Page() {
  const [loadPage, setLoadPage] = useState(true)
  const [state, setState] = useState({})
  const { cloudinary_id } = useParams()
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
        setLoadPage(false)
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
            <div className="h-[75vh] bg-[#edf4ff] border border-1.5 border-[#d7e1f4] rounded-2xl  overflow-hidden flex w-full xl:flex-row flex-col">

              <ContainerIndexer url={state.url} tags={state.tags} cloudinaryId={state.cloudinaryId} />
              <div className='w-full '>
                <div className=' flex flex-col px-3 xl:px-10 pt-2 pb-4 overflow-y-scroll h-full'>
                  {state.tagImages.map(({ keyword, urls }) => <ContainerTagImage key={keyword} keyword={keyword} urls={urls} />)}
                </div>
              </div>
            </div>
          </>
          )
        }
        {
          loadPage && (
            <img src="/imageIndexerLoading.gif" className='w-[280px] h-[60vh] object-contain m-auto' />
          )
        }
      </div>
      <div className="pt-4  pb-7">
        <Footer />
      </div>
    </div>
  );
}
