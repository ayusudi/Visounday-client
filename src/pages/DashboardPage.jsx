import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import CardVideo from '../components/CardVideo';
import FormVideoUpload from '../components/FormVideoUpload';
import NavBar from '../components/NavBar';
import Footer from "../components/Footer";

export default function Page() {
  const [list, setList] = useState([])
  const [onLoadPage, setOnLoadPage] = useState(true)
  const fetchVideos = async () => {
    try {
      let { data } = await axios({
        method: "GET",
        url: "https://visoundayserver.azurewebsites.net/videos",
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
      data.sort(((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
      setList(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchVideos()
      .then(() => {
        setOnLoadPage(false)
      })
  }, [])

  return (
    <div id="dashboard">
      <Header />
      <div className="flex flex-col gap-6 md:mx-[60px] mx-5 bg-white rounded-3xl mt-[-7.5%] p-10">
        <NavBar page='Dashboard' />
        <FormVideoUpload fetchVideos={fetchVideos} />
        {
          onLoadPage && <img src="/loadingCloud.gif" className='w-[400px] m-auto' />
        }
        {
          !onLoadPage && !list.length && (
            <div className='flex flex-col justify-center items-center m-auto pb-5'>
              <img src="/noVideo.webp" />
              <p className='font-main text-2xl text-center'>NO VIDEO. UPLOAD & TRY IT NOW</p>
            </div>
          )
        }
        {
          !onLoadPage && list.length > 0 && (
            <div className='mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full'>
              {/* // <div className="flex flex-wrap justify-around gap-10 py-8"> */}
              {list.map((el, i) => <CardVideo key={i} el={el} />)}
            </div>
          )
        }
      </div >
      <div className="pt-4 pb-7">
        <Footer />
      </div>
    </div >
  );
}
