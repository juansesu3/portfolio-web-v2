import Image from 'next/image'
import React from 'react'
import { FaCode } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";
import { IoIosDesktop } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

const SectionTwo = () => {
    return (
        <div className=''>
            {/* desktop */}
            <div className='lg:flex gap-4 justify-between hidden'>
                <div className='border border-gray-100 flex flex-col justify-end gap-2 cursor-pointer rounded-2xl shadow-md p-4 w-full hover:-translate-y-1 transition-all duration-300 ease-in-out'>
                    <Image
                        src="https://my-page-negiupp.s3.amazonaws.com/1736256686153.avif"
                        width={500}
                        height={500}
                        alt="profile image juan sebastian suarez ramirez"
                        className='object-contain w-full h-56'
                    />
                    <div>
                        <h2 className='uppercase text-slate-500 text-sm'>AI</h2>
                        <h3 className='text-md text-black font-bold'>AI Solutions</h3>
                    </div>
                </div>
                <div className='border border-gray-100 flex flex-col justify-end gap-2 cursor-pointer rounded-2xl shadow-md p-4 w-full hover:-translate-y-1 transition-all duration-300 ease-in-out'>
                    <div className='flex justify-between gap-4 my-auto'>
                        <div className='border  border-gray-100 p-6 rounded-xl hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-purple-500 hover:text-white text-black ' ><IoIosDesktop size={60} /></div>
                        <div className='border border-gray-100 p-6 rounded-xl hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-purple-500 hover:text-white text-black ' ><CiMobile3 size={60} /></div>
                        <div className='border border-gray-100 p-6 rounded-xl hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-purple-500 hover:text-white text-black ' ><FaCode size={60} /></div>
                    </div>
                    <div>
                        <h2 className='uppercase text-slate-500 text-sm'>Specialization</h2>
                        <h3 className='text-md text-black font-bold'>Services Offering</h3>
                    </div>
                </div>
                <div className='border border-gray-100 flex flex-col justify-end gap-2 cursor-pointer rounded-2xl shadow-md p-4 w-full hover:-translate-y-1 transition-all duration-300 ease-in-out'>
                    <div className='flex flex-col gap-4'>
                        <div className='border  border-gray-100 p-6 rounded-xl hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-purple-500 hover:text-white text-black flex justify-center items-center ' ><IoLogoLinkedin size={60} /></div>
                        <div className='flex gap-4 '>
                            <div className='border w-full  border-gray-100 p-6 rounded-xl hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-purple-500 hover:text-white text-black flex justify-center items-center' > <IoLogoGithub size={60} /></div>
                            <div className='border w-full border-gray-100 p-6 rounded-xl hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-purple-500 hover:text-white text-black flex justify-center items-center' ><IoLogoInstagram size={60} /></div>
                        </div>
                    </div>
                    <div>
                        <h2 className='uppercase text-slate-500 text-sm'>Stay With Me</h2>
                        <h3 className='text-md text-black font-bold'>Profiles</h3>
                    </div>
                </div>
            </div>
            {/* mbile */}
            <div className='gap-4 justify-between lg:hidden flex flex-col'>
                <div className='border border-gray-100 flex flex-col justify-end gap-2 cursor-pointer rounded-2xl shadow-md p-4 w-full hover:-translate-y-1 transition-all duration-300 ease-in-out'>
                    <div className='flex justify-around gap-4 my-auto'>
                        <div className='border  border-gray-100 p-6 rounded-xl hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-purple-500 hover:text-white text-black ' ><IoIosDesktop size={60} /></div>
                        <div className='border border-gray-100 p-6 rounded-xl hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-purple-500 hover:text-white text-black ' ><CiMobile3 size={60} /></div>
                        <div className='border border-gray-100 p-6 rounded-xl hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-purple-500 hover:text-white text-black ' ><FaCode size={60} /></div>
                    </div>
                    <div>
                        <h2 className='uppercase text-slate-500 text-sm'>Specialization</h2>
                        <h3 className='text-md text-black font-bold'>Services Offering</h3>
                    </div>
                </div>
                <div className='flex gap-4 flex-col sm:flex-row'>
                    <div className='border border-gray-100 flex flex-col justify-end gap-2 cursor-pointer rounded-2xl shadow-md p-4 w-full hover:-translate-y-1 transition-all duration-300 ease-in-out'>
                        <div className='flex flex-col gap-4'>
                            <div className='border  border-gray-100 p-6 rounded-xl hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-purple-500 hover:text-white text-black flex justify-center items-center ' ><IoLogoLinkedin size={60} /></div>
                            <div className='flex gap-4 '>
                                <div className='border w-full  border-gray-100 p-6 rounded-xl hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-purple-500 hover:text-white text-black flex justify-center items-center' > <IoLogoGithub size={60} /></div>
                                <div className='border w-full border-gray-100 p-6 rounded-xl hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-purple-500 hover:text-white text-black flex justify-center items-center' ><IoLogoInstagram size={60} /></div>
                            </div>
                        </div>
                        <div>
                            <h2 className='uppercase text-slate-500 text-sm'>Stay With Me</h2>
                            <h3 className='text-md text-black font-bold'>Profiles</h3>
                        </div>
                    </div>
                    <div className='border border-gray-100 flex flex-col justify-end gap-2 cursor-pointer rounded-2xl shadow-md p-4 w-full hover:-translate-y-1 transition-all duration-300 ease-in-out'>
                        <Image
                            src="https://my-page-negiupp.s3.amazonaws.com/1736256686153.avif"
                            width={500}
                            height={500}
                            alt="profile image juan sebastian suarez ramirez"
                            className='object-contain w-full h-56'
                        />
                        <div>
                            <h2 className='uppercase text-slate-500 text-sm'>AI</h2>
                            <h3 className='text-md text-black font-bold'>AI Solutions</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo