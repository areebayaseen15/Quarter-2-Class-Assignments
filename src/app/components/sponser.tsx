import React from 'react'
import Image from "next/image"

const Sponser = () => {
  return (
    <>
    <div className='w-[1921px] h-[538px] top-[465px]  py-[140px] px-[220px] gap-[100px] text-white flex flex-col justify-between '>
            <div  className='w-[1482px] h-[87px] gap-6 font-bold text-[72px] ml-[400px] items-center leading-[87.14px] tracking-[-o.o2em]  text-[#212529]'>
             Our Sponsers
            </div>
          <div className='w-[1482px] h-[71px] flex justify-between text-black'>
            
            <Image
            src="/assests/Apple.png"
            alt='l0go'
            width={55.46}
            height={68}/>

<Image
            src="/assests/Microsoft.png"
            alt='l0go'
            width={287}
            height={62}/>

<Image
            src="/assests/Slack.png"
            alt='lgo'
            width={280}
            height={71}/>

<Image
            src="/assests/Google.png"
            alt='l0go'
            width={211}
            height={69.81}/>
          </div>
      </div>
    </>
  )
}

export default Sponser
