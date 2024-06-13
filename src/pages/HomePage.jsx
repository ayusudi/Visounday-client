import image from "../assets/visounday.png"
import button from "../assets/playbutton.png"
import paypal from "../assets/paypal.png"
import heart from "../assets/heart.png"
import { Link } from "react-router-dom"
export default function Page() {
  return (
    <div id="bento" className="relative">
      <div className="flex md:flex-row flex-col bg-white md:bg-transparent rounded-3xl gap-6 md:gap-0 py-[50px] md:py-0">
        <div className="md:w-7/12 flex flex-col justify-around items-center md:py-[50px]" style={{ height: '90%' }}>
          <div className="w-full">
            <img className="w-8/12 m-auto rounded-3xl" src={image} alt="visounday" />
            <button className="absolute invisible md:visible bottom-[50%] left-[5.5%]">
              <img className="w-[100px] h-[100px] object-contain" src={button} alt="playbutton" />
            </button>
          </div>
          <div className="w-8/12 flex flex-col md:flex-row md:justify-between items-center gap-2 mt-4 md:gap-0">
            <h1 className="text-7xl font-main">VISOUNDAY</h1>
            <p className="md:w-6/12 text-xl">AI Background Song Recommender for Short Videos</p>
          </div>
        </div>
        <div className="md:w-5/12 w-8/12 flex md:pt-[52px] md:pb-[40px] md:px-[10px] m-auto md:m-0" style={{ height: '65%' }}>
          <div className="md:w-11/12 flex m-auto flex-col md:justify-around gap-4">
            <h1 className="text-7xl font-main hidden md:block">VISOUNDAY</h1>
            <p className="text-justify">AI enhancer that recommends background songs for uploaded short videos. We recommend that your videos be more than 15 to 60 seconds. It's perfect for documenting activities, like a beautiful Sunday.</p>
            <div className="md:w-10/12 w-11/12">
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
            <div className="flex flex-col md:gap-0 gap-4 md:flex-row md:justify-between justify-center items-center mt-2.5">
              <button className=" rounded-xl text-main bg-darker text-white text-xl font-semibold self-start md:px-6 md:py-3 py-5 px-9 md:my-0 my-1.5 mx-auto md:mx-0">UPLOAD VIDEO</button>
              <Link className="text-xl underline font-semibold text-orange">TOP CHART VISOUNDAY</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-4.5 py-6 md:w-5/12 md:absolute top-[65%] right-0 flex flex-col md:py-3 gap-3.5" style={{ height: '35%', }}>
        <p className="text-white text-center text-xl">Support Visounday Developer</p>
        <div className="flex flex-col gap-5">
          <button className="w-full rounded-2xl text-white bg-orange">
            <div className="flex justify-center items-center md:gap-4 gap-2 px-2">
              <img src={heart} alt="heart" className="w-[12%]" />
              <div className="flex flex-col py-3 md:p-0">
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