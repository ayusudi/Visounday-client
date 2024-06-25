import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
export default function Header({ page }) {
  const navigate = useNavigate()
  return (
    <div id="visounday-dashboard" className="w-full">
      <div className="m-auto flex flex-col h-full justify-center gap-2 xl:gap-0 md:px-[60px] px-5">
        <h1 className="text-3xl md:text-5xl xl:text-8xl font-main text-white xl:mt-[-8%] mt-[-2%]">VISOUNDAY</h1>
        <p className="xl:w-6/12 md:text-xl text-white md:w-5/12 hidden xl:block text-sm max-w-[320px]">
          {page === "NotFoundPage" ? '404 NOT FOUND PAGE' : 'AI Background Song Recommender for Short Videos'}
        </p>
        {
          page && <Button className="self-start my-4" color="light" onClick={() => navigate("/")}>
            <p className=" font-main text-xl">Back to Home</p>
          </Button>
        }
      </div>
    </div>
  )
}