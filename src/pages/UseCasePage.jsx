import React, { useState } from 'react';
import Header from '../components/Header';
import ContainerChat from '../components/ContainerChat';
import Footer from "../components/Footer";
import ContainerIndexer from '../components/ContainerIndexer';
import ContainerTagImage from '../components/ContainerTagImage';
import { useNavigate } from 'react-router-dom';
import { Card } from 'flowbite-react';
export default function Page() {
  const [feature, setFeature] = useState("Cat")
  const navigate = useNavigate()
  const state = {
    "url": "https://res.cloudinary.com/di1kz1kvd/video/upload/v1719033087/videos/bove3xxg3jmiiwmhjxbb.mp4",
    "cover": "https://res.cloudinary.com/di1kz1kvd/image/upload/v1719033103/covers/bove3xxg3jmiiwmhjxbb.png",
    "gptChats": [
      {
        "role": "assistant",
        "content": "Hello! I'm Visounday, an AI designed to help content creators like you analyze video data and provide insights. I can describe your raw data in a way that's easy to understand and visualize, and I can also recommend background music to enhance your content. How can I assist you today?",
        "type": "init",
        "_id": "66765e82a4af3c1552c917c7"
      },
      {
        "role": "user",
        "content": "Hi Visounday, let's do your work! Here is the video and generate.json",
        "type": "input-text",
        "_id": "66765e82a4af3c1552c917c8"
      },
      {
        "role": "user",
        "content": "JSON",
        "type": "input-json",
        "_id": "66765e82a4af3c1552c917c9"
      },
      {
        "role": "user",
        "content": "URL VIDEO",
        "type": "input-video",
        "_id": "66765e82a4af3c1552c917ca"
      },
      {
        "role": "assistant",
        "content": "## Video Analysis:\n\nFrom the data JSON provided, the video located at the URL. consists of four different frames that highlight the notable activities and elements of the video.\n\nBelow are the frames along with their descriptions:\n\n1. Frame 1: A woman playing a game. ![Image1](http://res.cloudinary.com/di1kz1kvd/image/upload/v1719033095/extracted_frames/bove3xxg3jmiiwmhjxbb-frame-001.png)\n\n2. Frame 2: A group of people playing a game. ![Image2](http://res.cloudinary.com/di1kz1kvd/image/upload/v1719033096/extracted_frames/bove3xxg3jmiiwmhjxbb-frame-002.png)\n\n3. Frame 3: A motorcycle on the road. ![Image3](http://res.cloudinary.com/di1kz1kvd/image/upload/v1719033097/extracted_frames/bove3xxg3jmiiwmhjxbb-frame-003.png)\n\n4. Frame 4: People playing a game in a room. ![Image4](http://res.cloudinary.com/di1kz1kvd/image/upload/v1719033099/extracted_frames/bove3xxg3jmiiwmhjxbb-frame-004.png)\n\n## Title Caption:\n\nConsidering the evolution of events and the common themes of gaming, a possible video title could be: \"From Solo to Social: The Transformation of Gaming\"\n\n## Background Song Recommendation:\n\nGiven the focus on gaming that shifts from a solo activity to a group experience, and the inclusion of a motorcycle scene possibly hinting at an element of adventure or freedom, the suggested background music could be something energetic and thrilling. \n\nA few suggestions:\n\n- \"Remember the Name\" by Fort Minor\n- \"The Adventure\" by Angels & Airwaves\n\nRemember to select music that aligns with the mood and tone of your video and respect the copyright rules for using songs.",
        "type": "markdown",
        "_id": "66765e82a4af3c1552c917cb"
      },
      {
        "role": "user",
        "content": "buat caption dalam bahasa indonesia",
        "type": "input-text",
        "_id": "667662db8274b686f4ddcfca"
      },
      {
        "role": "assistant",
        "content": "## Analisis Video:\n\nDari data JSON yang disediakan, video yang terletak di URL `https://res.cloudinary.com/di1kz1kvd/video/upload/v1719033087/videos/bove3xxg3jmiiwmhjxbb.mp4` terdiri dari empat frame yang menonjolkan aktivitas dan elemen penting dalam video.\n\nBerikut adalah frame tersebut beserta deskripsinya:\n\n1. Frame 1: Seorang wanita sedang bermain game. ![Image1](http://res.cloudinary.com/di1kz1kvd/image/upload/v1719033095/extracted_frames/bove3xxg3jmiiwmhjxbb-frame-001.png)\n\n2. Frame 2: Sebuah grup orang sedang bermain game. ![Image2](http://res.cloudinary.com/di1kz1kvd/image/upload/v1719033096/extracted_frames/bove3xxg3jmiiwmhjxbb-frame-002.png)\n\n3. Frame 3: Sebuah motor di jalan. ![Image3](http://res.cloudinary.com/di1kz1kvd/image/upload/v1719033097/extracted_frames/bove3xxg3jmiiwmhjxbb-frame-003.png)\n\n4. Frame 4: Beberapa orang bermain game di ruangan. ![Image4](http://res.cloudinary.com/di1kz1kvd/image/upload/v1719033099/extracted_frames/bove3xxg3jmiiwmhjxbb-frame-004.png)\n\n## Judul Caption:\n\nMempertimbangkan evolusi peristiwa dan tema gaming yang berubah dari kegiatan solo menjadi pengalaman grup, judul video yang mungkin adalah: \"Dari Solo ke Sosial: Transformasi Bermain Game\"\n\n## Rekomendasi Lagu Latar:\n\nMengingat fokus pada gaming yang berubah dari aktivitas solo menjadi pengalaman grup, dan inklusi adegan motor yang mungkin mengindikasikan elemen petualangan atau kebebasan, musik latar yang disarankan bisa sesuatu yang energetik dan menegangkan.\n\nBeberapa saran:\n\n- \"Remember the Name\" by Fort Minor\n- \"The Adventure\" by Angels & Airwaves \n\nIngatlah untuk memilih musik yang sesuai dengan suasana dan nada video Anda dan patuhi aturan hak cipta untuk menggunakan lagu.",
        "type": "markdown",
        "_id": "667662db8274b686f4ddcfcb"
      },
      {
        "role": "user",
        "content": "Hai visounday",
        "type": "input-text",
        "_id": "6676778e8274b686f4ddd7f3"
      },
      {
        "role": "assistant",
        "content": "Hai! Bagaimana saya bisa membantu Anda hari ini?",
        "type": "markdown",
        "_id": "6676778e8274b686f4ddd7f4"
      },
      {
        "role": "user",
        "content": "Kabarku baik visounday. Bagaimana denganmu?",
        "type": "input-text",
        "_id": "667678c68274b686f4ddd89e"
      },
      {
        "role": "assistant",
        "content": "Hai, saya senang mendengar kabar baik dari Anda. Sebagai AI, saya tidak memiliki perasaan, tetapi saya siap dan bersemangat untuk membantu Anda. Bagaimana saya bisa membantu Anda hari ini?",
        "type": "markdown",
        "_id": "667678c68274b686f4ddd89f"
      }
    ],
    "tagImages": [
      {
        "keyword": "playground",
        "urls": [
          "https://www.geeksvgs.com/files/2/78/playground-epa.png",
          "https://cdn.pixabay.com/photo/2017/01/21/17/47/slide-1997831_960_720.png",
          "http://thumb7.shutterstock.com/thumb_large/600367/288611411/stock-vector--hildren-s-playground-at-public-park-in-the-yard-coloring-book-vector-illustration-isolated-on-288611411.jpg"
        ],
        "_id": "66765d6d85651e7acaad0128"
      },
      {
        "keyword": "clothing",
        "urls": [
          "https://openclipart.org/image/2400px/svg_to_png/213490/Kleid.png",
          "https://cdn.pixabay.com/photo/2015/04/23/13/05/clothing-736033_960_720.png",
          "https://openclipart.org/image/2400px/svg_to_png/64975/colorful-beach-shorts.png"
        ],
        "_id": "66765d6d85651e7acaad0123"
      },
      {
        "keyword": "footwear",
        "urls": [
          "https://www.publicdomainpictures.net/pictures/40000/velka/cute-red-shoes.jpg",
          "https://svgsilh.com/svg/37729-ff9800.svg",
          "https://cdn.pixabay.com/photo/2014/04/03/11/56/shoes-312640_960_720.png"
        ],
        "_id": "66765d6d85651e7acaad0124"
      },
      {
        "keyword": "human face",
        "urls": [
          "https://openclipart.org/image/2400px/svg_to_png/12949/Anonymous-man-face.png",
          "https://cdn.pixabay.com/photo/2012/02/29/15/59/beautiful-19305_960_720.jpg",
          "https://www.goodfreephotos.com/cache/vector-images/large-happy-face-vector-clipart.png"
        ],
        "_id": "66765d6d85651e7acaad0125"
      },
      {
        "keyword": "outdoor",
        "urls": [
          "https://cdn.pixabay.com/photo/2014/04/03/10/20/pond-310139_960_720.png",
          "http://www.publicdomainpictures.net/pictures/50000/velka/owl-family-cute-clipart.jpg",
          "https://www.publicdomainpictures.net/pictures/40000/velka/leaves-clipart.jpg"
        ],
        "_id": "66765d6d85651e7acaad0127"
      },
    ],
    "tags": [
      "playground",
      "clothing",
      "footwear",
      "human face",
      "outdoor",
    ]
  }

  return (
    <div id="dashboard">
      <Header pageUseCase="true" />
      <div className='w-full bg-[#081431] flex flex-col gap-5'>
        <div>
          <h1 className='font-main lg:text-[54px] text-[28px] text-center xl:pt-20 pt-10 text-white'>VINSOUNDAY FEATURE</h1>
          <img src="/chats.png" className='m-auto xl:w-[75%] w-auto object-cover min-h-[340px]' />
          <div className='text-white w-[900px] max-w-[80%] flex flex-col gap-4 justify-start items-start m-auto'>
            <p className='text-2xl font-bold mb-4'>AI CHAT TO ANALYZE VIDEO</p>
            <p className='text-xl'>• <span className='font-bold text-xl'>Frame Extraction</span> : We take a frame from the uploaded video.</p>
            <p className='text-xl'>• <span className='font-bold text-xl'>Context Analysis</span> :  This frame is sent to a Azure Vision system to understand the context.</p>
            <p className='text-xl'>• <span className='font-bold text-xl'>Elaboration</span> : The analyzed context is then elaborated on using GPT-4o, providing insightful explanation.</p>
            <p className='text-xl'>• <span className='font-bold text-xl'>Song Recommendation</span> : Based on the context and elaboration, song recommendations are provided.</p>
            <p className='text-xl'>• <span className='font-bold text-xl'>Chat Interaction</span> : The user can continue to chat with Visounday for further interactions and recommendations.</p>
          </div>
        </div>
        <div className='flex items-center xl:flex-row flex-col-reverse'>
          <div className='flex-grow xl:flex-row'>
            <div className='text-white flex flex-col gap-4 m-auto'>
              <div className='text-white xl:w-[750px] max-w-[82%] flex flex-col gap-4 justify-start items-start m-auto'>
                <p className='text-2xl font-bold mb-4 xl:text-start text-center'>VIDEO INDEXER ENCHANCER</p>
                <div className='flex flex-col'>
                  <p className='text-xl font-bold'>• Tag Generation</p>
                  <p className='text-xl pl-2.5'>A list of tags is generated from the video using a video indexer</p>
                </div>
                <div className='flex flex-col'>
                  <p className='text-xl font-bold'>• Clipart Search</p>
                  <p className='text-xl pl-2.5'>These tags are used to conduct a comprehensive search, providing a list of related clipart images.</p>
                </div>
                <p className='text-xl my-4'>We utilize Video Indexer and Bing Search for Clipart Images.</p>
                <p className='text-xl'>This feature is useful for users who are editing videos and are considering which images are relevant for hiding something or decorating.</p>
              </div>
            </div>
          </div>
          <img src="/indexer.png" className='mb-8' />
        </div>
      </div>
      <div className="py-10 bg-[#081431]">
        <Footer />
      </div>
    </div >
  );
}
