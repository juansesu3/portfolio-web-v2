import Image from 'next/image'
import React from 'react'

const SectionOne = () => {
    return (
        <>
            <div className='flex md:flex-row flex-col gap-4 justify-between'>
                <div className='border relative border-gray-100 bg-purple-500 flex gap-2 justify-end rounded-2xl shadow-md p-4  cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out md:h-auto h-72 '>
                    <Image
                        src="https://my-page-negiupp.s3.amazonaws.com/1713789684234.png"
                        width={500}
                        height={500}
                        alt="profile image juan sebastian suarez ramirez"
                        className='transform scale-x-[-1] w-40 object-cover absolute bottom-0 -left-2 rounded-r-3xl'
                    />
                    <div className='w-full'></div>
                    <div className='flex flex-col gap-2 text-white w-md justify-center'>
                        <div>
                            <h2 className='uppercase  text-gray-300 font-bold'>FullStack Developer</h2>
                            <h3 className='text-sm font-bold '>Juan Sebastian Suarez Ramirez</h3>
                        </div>
                        <div>
                            <p className='text-sm font-light'>Construyo soluciones innovadoras que combinan tecnología, creatividad y rendimiento.</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 w-full flex-col custom:flex-row'>
                    <div className='border border-gray-100 flex flex-col justify-end gap-2 cursor-pointer rounded-2xl shadow-md p-4 w-full hover:-translate-y-1 transition-all duration-300 ease-in-out'>
                        <Image
                            src="https://my-page-negiupp.s3.amazonaws.com/1688631092905.png"
                            width={500}
                            height={500}
                            alt="profile image juan sebastian suarez ramirez"
                            className='object-contain w-full'
                        />
                        <div>
                            <h2 className='uppercase text-slate-500 text-sm'>More About Me</h2>
                            <h3 className='text-md text-black font-bold'>Credentials</h3>
                        </div>
                    </div>
                    <div className='border border-gray-100 flex flex-col justify-between gap-2 rounded-2xl shadow-md p-4  w-full cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out'>
                        <Image
                            src="https://my-page-negiupp.s3.amazonaws.com/1691393721997.png"
                            width={500}
                            height={500}
                            alt="profile image juan sebastian suarez ramirez"
                            className='object-contain rounded-xl w-full'
                        />
                        <div>
                            <h2 className='uppercase text-slate-500 text-sm'>ShowCase</h2>
                            <h3 className='text-md text-black font-bold'>My Projects</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionOne