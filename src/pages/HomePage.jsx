import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import app from "../firebase";
import {
  getAuth,
  OAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Footer from "../components/Footer";
import Banner from "../components/Banner"
import { useState } from "react";
import SwallError from "../components/SwallError";

export default function Page() {
  const [loadingSignIn, setLoadingSignIn] = useState(false)
  const baseUrl = 'https://visoundayserver.azurewebsites.net';
  const auth = getAuth(app);
  const microsoftProvider = new OAuthProvider('microsoft.com'); // Specify 'microsoft.com' here
  const navigate = useNavigate()

  const handleMicrosoftSignIn = () => {
    setLoadingSignIn(true)
    signInWithPopup(auth, microsoftProvider)
      .then(result => {
        const loggedInUser = result.user;
        return loggedInUser.getIdToken();
      })
      .then(idToken => {
        return axios.post(`${baseUrl}/verify`, { id_token: idToken });
      })
      .then(response => {
        let { email, name, access_token } = response.data;
        localStorage.setItem("access_token", access_token)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        navigate("/dashboard")
      })
      .catch((err) => SwallError('Failed SignIn'))
      .finally(() => setLoadingSignIn(false))
  };

  return (
    <div id="bento" className="relative">
      <div className="flex xl:flex-row flex-col bg-white xl:bg-transparent rounded-3xl gap-6 xl:gap-0 py-[50px] xl:py-0">
        <Banner />
        <div className="xl:w-5/12 w-8/12 flex xl:pt-[52px] xl:pb-[40px] xl:px-[10px] m-auto xl:m-0" style={{ height: '65%' }}>
          <div className="xl:w-11/12 flex m-auto flex-col xl:justify-around gap-4">
            <h1 className="text-7xl font-main hidden xl:block">VISOUNDAY</h1>
            <p className="text-justify">AI enhancer that recommends background songs for uploaded short videos. We recommend that your videos be more than 15 to 60 seconds. It's perfect for documenting activities, like a beautiful Sunday.</p>
            <div className="xl:w-10/12 w-11/12">
              <p><b>Steps to Use :</b></p>
              <p><b>1. Upload Your Video</b></p>
              <p>Begin by uploading your short video to VISOUNDAY.</p>
              <p><b>2. Generate Description </b></p>
              <p>Once the upload is complete, click the "Generate" button.</p>
              <p><b>3. Chat with Visounday </b></p>
              <p>Chat and get video analysis and song recommendations.</p>
              <p><b>4. Try Video Indexer Tag Enhancer </b></p>
              <p>Integrate Video Indexer tags with Bing Image Search.</p>
            </div>
            <div className="flex flex-col xl:gap-0 gap-4 xl:flex-row xl:justify-between justify-center items-center mt-2.5">
              <button onClick={handleMicrosoftSignIn} className="cursor-pointer flex justify-center items-center gap-2 rounded-xl  bg-black text-white text-lg font-semibold self-start xl:px-3 xl:py-3 py-5 px-9 xl:my-0 my-1.5 mx-auto xl:mx-0"> <img src="/microsoft.webp" className="w-[28px] h-[28px]" />{loadingSignIn ? 'Please Wait . . .' : 'Sign in with Microsoft'}</button>
              <Link to="/use-case" className="text-center text-xl underline font-semibold text-orange">USE CASE VISOUNDAY</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:pt-4.5 py-6 xl:w-5/12 xl:absolute top-[65%] right-0 flex flex-col xl:py-3 gap-3.5" style={{ height: '35%', }}>
        <p className="text-white text-center text-xl">Support Visounday Developer</p>
        <div className="flex flex-col gap-4">
          <button className="w-full rounded-2xl text-white bg-[#F78860]">
            <div className="flex justify-center items-center xl:gap-4 gap-2 px-2">
              <img src="/heart.webp" alt="heart" className="w-[10%]" />
              <a href="https://instagram.com/airprogramming" className="flex flex-col py-2 xl:p-0">
                <p className="text-left w-full text-[16px]"><b>Try & Share with Hashtag #VISOUNDAY</b></p>
                <p className="text-left w-full">You can mention @airprogramming in IG & X</p>
              </a>
            </div>
          </button>
          <button onClick={() => navigate("/terms-and-conditions")} className="group w-full rounded-full bg-black hover:bg-[#0a0a0a] justify-center items-center "><p className="font-main text-white text-[14px] py-2.5">VISOUNDAY TERMS AND CONDITONS</p></button>
          <a href="https://www.paypal.com/ncp/payment/AUYUQNKT3852S">
            <button className=" w-full bg-gray  rounded-full hover:bg-graypay justify-center items-center flex gap-2 px-2 py-2.5 flex-wrap">
              <p className="font-main m-0 p-0">Help Visounday Developer Pay a Cloud and API Bill Via</p>
              <img src="/paypal.webp" className="h-[15px]" />
            </button>
          </a>
        </div>
      </div>
      <div className="visible xl:invisible">
        <Footer />
      </div>
    </div>
  )
}