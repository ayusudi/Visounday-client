import React from 'react';
import Header from '../components/Header';
import Footer from "../components/Footer";
export default function Page({ page }) {
  console.log(page);
  return (
    <div id="dashboard">
      <Header page={page} />
      <div className='w-full bg-[#081431] flex flex-col gap-5'>
        <div>
          <h1 className='font-main lg:text-[54px] text-[28px] text-center xl:pt-20 pt-10 text-white'>VINSOUNDAY FEATURE</h1>
          <img src="/chats.png" className='m-auto xl:w-[75%] w-auto object-cover min-h-[340px]' />
          <div className='text-white w-[900px] max-w-[80%] flex flex-col gap-4 justify-start items-start m-auto'>
            <p className='text-2xl font-bold mb-4'>AI CHAT TO ANALYZE VIDEO</p>
            <p className='text-xl'>• <span className='font-bold text-xl'>Frame Extraction</span> : We take a frame from the uploaded video.</p>
            <p className='text-xl'>• <span className='font-bold text-xl'>Context Analysis</span> :  This frame is sent to a Azure Vision system to understand the context.</p>
            <p className='text-xl'>• <span className='font-bold text-xl'>Elaboration</span> : The analyzed context is then elaborated on using GPT-4, providing insightful explanation.</p>
            <p className='text-xl'>• <span className='font-bold text-xl'>Song Recommendation</span> : Based on the context and elaboration, song recommendations are provided.</p>
            <p className='text-xl'>• <span className='font-bold text-xl'>Chat Interaction</span> : The user can continue to chat with Visounday for further interactions and recommendations.</p>
          </div>
        </div>
        <div class="flex items-center xl:flex-row flex-col-reverse">
          <div class="flex-grow xl:flex-row">
            <div class="text-white flex flex-col gap-4 m-auto">
              <div class="text-white xl:w-[750px] max-w-[82%] flex flex-col gap-4 justify-start items-start m-auto">
                <p class="text-2xl font-bold mb-4 xl:text-start text-center">VIDEO INDEXER ENCHANCER</p>
                <div class="flex flex-col"><p class="text-xl font-bold">• Tag Generation</p>
                  <p class="text-xl pl-2.5">A list of tags is generated from the video using a video indexer</p>
                </div>
                <div class="flex flex-col">
                  <p class="text-xl font-bold">• Clipart Search</p>
                  <p class="text-xl pl-2.5">These tags are used to conduct a comprehensive search, providing a list of related clipart images.</p>
                </div>
                <p class="text-xl my-4">We utilize Video Indexer and Bing Search for Clipart Images.</p>
                <p class="text-xl">This feature is useful for users who are editing videos and are considering which images are relevant for hiding something or decorating.</p>
              </div>
            </div>
          </div>
          <img src="/indexer.png" class="mb-8" />
        </div>
      </div>
      <div className="py-10 bg-[#081431]">
        <Footer />
      </div>
    </div >
  );
}