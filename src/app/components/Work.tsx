import React from 'react'

const Work = () => {
  return (
    <>
      <div className='w-[1921px] h-[574px] top-[4080px] left[1px] py-[140px] px-[220px] bg-[#043873] text-white flex flex-col justify-between'>
        <div className='w-[1481px] h-[294px] gap-[60px] ml-40'>
            <div  className='w-[1064px] h-[87px] gap-6 font-bold text-[72px] leading-[87.14px] tracking-[-o.o2em]'>
             Your Work, everywhere you are
            </div>
          <p className='w-[1064px] h-[60px] font-normal text-[18px] items-center leading-[30px] tracking-[-0.02em] mt-5'>
            Access your notes from your computer, phone or tablet by synchronising with various services including 
            whitespace, dropbox and Onedrive.The app is available on the windows, macOS , Linux, Andriod and ioS.A terminal 
            app is also available!
          </p>
        </div>
        <button className="w-[195px] h-[63px] rounded-lg px-10 py-5 bg-[#4F9CF9] gap-[10px] ml-[500px] mt-0 hover:bg-[#C4DEFD]">Try Taskey</button>
      </div>
    </>
  )
}

export default Work
