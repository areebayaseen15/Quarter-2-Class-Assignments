 import React from "react";
 import Image from "next/image"


const Hero = ({heading,paragraph,backgroundColor , color, reverse = false ,imageContainer ,btnstyle ,btnText,  showImage, 
    imageSrc }:any) => {
	return (
        <>
		<div className={`w-[1920px] h-[829px] py-[140px] px-[220px] top-[92px] left-[1px] gap-6 flex  items-center ${
   reverse ? 'flex-row-reverse' : 'flex-row'}`}
   style={{ backgroundColor , color }}>
				<div className='w-[656px] h-[361px] gap-[60px] flex flex-col justify-between'>
					<div id="text-block" className="w-[656px] h-[238px]">
						<h2 className='w-[656px] h-[154px] font-bold text-[64px] leading-[77.45px] tracking-[-0.02em]'>
							{heading}
						</h2>
						<p className='w-[656px] h-[60px] font-normal text-lg leading-[30px] tracking-[-0.02em] '>
							{paragraph}
						</p>
					</div>
                    <button className={btnstyle}>{btnText}</button>
				</div>
				<div className={imageContainer}>
                {showImage && imageSrc && (
            <Image src={imageSrc} alt="Hero Image" width={600} height={400} />
          )}
                      </div>
                </div>
                </>
                );}
     

export default Hero;





