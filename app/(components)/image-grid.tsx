import React from 'react'
import image1 from "../../public/assets/image1.png";
import image2 from "../../public/assets/image2.png";
import image3 from "../../public/assets/image3.png";
import image4 from "../../public/assets/image4.png";
import image5 from "../../public/assets/image5.png";
import image6 from "../../public/assets/image6.png";
import Image from "next/image";

const ImageGrid = () => {
  return (
    <div className='flex gap-x-[12px] gap-y-[16px] lg:gap-[24px] h-[635px] lg:h-[764px]'>
        {/* Grid one */}
        <div className='flex flex-col gap-y-[24px] w-[120px] lg:w-[146px]'>
            <Image src={image1} width={146} height={460} className='w-full lg:h-[460px] h-[339px] rounded-[45.12px]' alt='' />
            <Image src={image4} width={146} height={280} className='w-full h-[280px] lg:h-[280px] rounded-[45.12px]' alt='' />
        </div>
        <div className='flex flex-col w-[120px] gap-y-[24px] lg:w-[146px]'>
            <Image src={image2} width={146} height={501} className='w-full h-[380px] lg:h-[501px] rounded-[45.12px]' alt='' />
            <Image src={image5} width={146} height={239} className='w-full h-[239px] lg:h-[280px] rounded-[45.12px]' alt='' />
        </div>
        <div className='flex flex-col gap-y-[24px] w-[120px] lg:w-[146px]'>
            <Image src={image3} width={146} height={501} className='w-full h-[251px] lg:h-[501px] rounded-[45.12px]' alt='' />
            <Image src={image6} width={146} height={330} className='w-full h-[368px] lg:h-[330px] rounded-[45.12px]' alt='' />
        </div>
    </div>
  )
}

export default ImageGrid