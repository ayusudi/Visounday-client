import image from "../assets/visounday.png"
import button from "../assets/playbutton.png"
import paypal from "../assets/paypal.png"
import heart from "../assets/heart.png"
import { Link } from "react-router-dom"
export default function Page() {
  return (
    <div id="bento" className="relative">
      <div className="flex xl:flex-row flex-col bg-white xl:bg-transparent rounded-3xl gap-6 xl:gap-0 py-[50px] xl:py-0">
        <div className="xl:w-7/12 flex flex-col justify-around items-center xl:py-[50px]" style={{ height: '90%' }}>
          <div className="w-full">
            <img className="w-8/12 m-auto rounded-3xl" src={image} alt="visounday" />
            <button className="absolute invisible xl:visible bottom-[50%] left-[5.5%]">
              <img className="w-[100px] h-[100px] object-contain" src={button} alt="playbutton" />
            </button>
          </div>
          <div className="w-8/12 flex flex-col xl:flex-row xl:justify-between items-center gap-2 mt-4 xl:gap-0">
            <h1 className="text-5xl md:text-7xl font-main">VISOUNDAY</h1>
            <p className="xl:w-6/12 text-xl">AI Background Song Recommender for Short Videos</p>
          </div>
        </div>
        <div className="xl:w-5/12 w-8/12 flex xl:pt-[52px] xl:pb-[40px] xl:px-[10px] m-auto xl:m-0" style={{ height: '65%' }}>
          <div className="xl:w-11/12 flex m-auto flex-col xl:justify-around gap-4">
            <h1 className="text-7xl font-main hidden xl:block">VISOUNDAY</h1>
            <p className="text-justify">AI enhancer that recommends background songs for uploaded short videos. We recommend that your videos be more than 15 to 60 seconds. It's perfect for documenting activities, like a beautiful Sunday.</p>
            <div className="xl:w-10/12 w-11/12">
              <p><b>Steps to Use :</b></p>
              <p><b>1. Upload Your Video</b></p>
              <p>Begin by uploading your short video to VISOUNDAY.</p>
              <p><b>2. Generate Recommendation </b></p>
              <p>After the upload is complete, click Generate button.</p>
              <p><b>3. View Recommendation </b></p>
              <p>A pop-up text will display the recommended background song.</p>
              <p><b>4. Listen to the Song </b></p>
              <p>If you like the recommendation, click the "Next" button to listen to the song while your video is muted.</p>
            </div>
            <div className="flex flex-col xl:gap-0 gap-4 xl:flex-row xl:justify-between justify-center items-center mt-2.5">
              <button className="rounded-xl text-main bg-darker text-white text-xl font-semibold self-start xl:px-6 xl:py-3 py-5 px-9 xl:my-0 my-1.5 mx-auto xl:mx-0">UPLOAD VIDEO</button>
              <Link className="text-center text-xl underline font-semibold text-orange">TOP CHART VISOUNDAY</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:pt-4.5 py-6 xl:w-5/12 xl:absolute top-[65%] right-0 flex flex-col xl:py-3 gap-3.5" style={{ height: '35%', }}>
        <p className="text-white text-center text-xl">Support Visounday Developer</p>
        <div className="flex flex-col gap-5">
          <button className="w-full rounded-2xl text-white bg-orange">
            <div className="flex justify-center items-center xl:gap-4 gap-2 px-2">
              <img src={heart} alt="heart" className="w-[12%]" />
              <div className="flex flex-col py-3 xl:p-0">
                <p className="text-left w-full text-[16px]"><b>Try & Share with Hashtag #VISOUNDAY</b></p>
                <p className="text-left w-full">You can mention @airprogramming in IG & X</p>
              </div>
            </div>
          </button>
          <a href="https://www.paypal.com/ncp/payment/AUYUQNKT3852S">
            <button className=" w-full rounded-full bg-gray hover:bg-graypay justify-center items-center"><img src={paypal} className="m-auto py-3" alt="paypal" /> </button>
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center items-center pt-5" style={{ height: '10%' }}>
        <p className="text-white text-center">© 2024 Ayu Sudi Dwijayanti, ID-JKT.</p>
      </div>
    </div>
  )
}