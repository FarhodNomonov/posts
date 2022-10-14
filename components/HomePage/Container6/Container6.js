import React from 'react'
import Image from 'next/image';

const Container6 = () => {
    return (
        <div className='pb-[80px] main-div'>
            <h3 className='text-black font-semibold mb-[30px]'>Mice</h3>
            <div className='flex justify-evenly gap-[30px]'>
                <div className='w-[146px] text-center cursor-pointer group'>
                    <div className='relative w-[146px] h-[160px] overflow-hidden'>
                        <Image className='group-hover:-translate-y-[50%]' src="https://novotours.uz/wp-content/uploads/2017/02/spritesheet.png" width={146} height={322} alt="img" />
                    </div>
                    <p className='group-hover:text-orange'>Conference halls in Uzbekistan</p>
                </div>
                <div className='w-[146px] text-center cursor-pointer group'>
                    <div className='relative w-[146px] h-[160px] overflow-hidden'>
                        <Image className='group-hover:-translate-y-[50%]' src="https://novotours.uz/wp-content/uploads/2017/02/spritesheet-1.png" width={146} height={322} alt="img" />
                    </div>
                    <p className='group-hover:text-orange'>Teambuilding</p>
                </div>
                <div className='w-[146px] text-center cursor-pointer group'>
                    <div className='relative w-[146px] h-[160px] overflow-hidden'>
                        <Image className='group-hover:-translate-y-[50%]' src="https://novotours.uz/wp-content/uploads/2017/02/spritesheet-2.png" width={146} height={322} alt="img" />
                    </div>
                    <p className='group-hover:text-orange'>Exhibitions events and festivals</p>
                </div>
                <div className='w-[146px] text-center cursor-pointer group'>
                    <div className='relative w-[146px] h-[160px] overflow-hidden'>
                        <Image className='group-hover:-translate-y-[50%]' src="https://novotours.uz/wp-content/uploads/2017/02/spritesheet-8.png" width={146} height={322} alt="img" />
                    </div>
                    <p className='group-hover:text-orange'>For exhibitions&apos; participants</p>
                </div>
            </div>
        </div>
    )
}

export default Container6