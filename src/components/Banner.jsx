export default function Banner() {
  return (
    <div className="xl:self-end sel-start xl:w-7/12 flex flex-col justify-around items-center" style={{ height: '90%' }}>
      <div className=" w-full flex flex-grow flex-col justify-center items-center">
        <img className="w-8/12 m-auto rounded-3xl" src="/visounday-mascot.webp" alt="visounday" />
        <button className="absolute invisible xl:visible bottom-[50%] left-[5.5%]">
          <img className="w-[100px] h-[100px] object-contain" src="/playbutton.webp" alt="playbutton" />
        </button>
      </div>
      <div className="w-8/12 flex flex-col xl:flex-row xl:justify-between items-center gap-2 mt-4 xl:gap-0">
        <h1 className="text-5xl md:text-7xl font-main">VISOUNDAY</h1>
        <p className="xl:w-6/12 text-xl">AI Background Song Recommender for Short Videos</p>
      </div>
    </div>
  )
}