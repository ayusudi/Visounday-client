export default function ContainerTagImage({ keyword, urls }) {
  const remove = (e) => {
    e.target.hidden = true
  }

  return (
    <div key={keyword} className='m-4'>
      <h1 className='font-bold text-xl'>#{keyword.toUpperCase()}</h1>
      <div className='flex gap-4 '>
        {
          urls.map((el, i) => {
            return (
              <img src={el} key={i} className='w-[150px] h-[150px]' onError={remove} />
            )
          })
        }
      </div>
    </div>
  )
}