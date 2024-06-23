import Markdown from 'react-markdown'

export default function ContainerChat({ chats, url, isLoading }) {
  return (
    <div className=' bg-[#edf4ff] flex flex-col px-3 xl:px-10 pt-2 pb-4 overflow-y-scroll h-[90%]'>
      {
        chats.map(({ role, content, type }, i) => {
          if (role === "assistant" && type === "init") {
            return (<div key={i} className='xl:w-[62%] w-[96%]  p-2 my-2'>
              <p className='pb-2 text-[18px] font-bold'>Visounday</p>
              <p className='text-justify text-justify'>{content}</p>
            </div>)
          } else if (role === 'assistant' && type === 'markdown') {
            return <div key={i} className='markdown xl:w-[62%] w-[96%]  p-2 my-2'><p className='pb-2 text-[18px] font-bold'>Visounday</p><Markdown>{content}</Markdown></div>
          } else if (type === "input-video" && url) {
            return (
              <div key={i} className='my-1.5 flex self-end xl:max-w-[60%] bg-white rounded-xl p-3'>
                <video className='h-[240px] w-auto' controls>
                  <source src={url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )
          } else if (type === "input-json") {
            return (
              <div key={i} className='my-1.5 flex self-end xl:max-w-[60%] bg-white rounded-xl p-3'>
                <div className='cursor-pointer flex gap-2 items-center'>
                  <img width="40" height="40" src="/json.webp" />
                  <p className='font-main'>GENERATE.JSON</p>
                </div>
              </div>
            )
          } else if (type === "input-text") {
            return (
              <div key={i} className='my-1.5 flex self-end xl:max-w-[60%] bg-white rounded-xl p-3'>
                <div className='flex gap-2 items-center '>
                  {content}
                </div>
              </div>
            )
          }

        })
      }
      {
        isLoading && (
          <div>
            <p className='pb-2 text-[16px] font-bold'>Visounday is analyzing</p>
            <img src="/loading.gif" className='h-20' />
          </div>
        )
      }
    </div>
  )
}