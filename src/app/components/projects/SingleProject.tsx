import Image from 'next/image';
import React from 'react';
import { FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa'; // Importa iconos de react-icons
import { SiTailwindcss, SiMongodb, SiTypescript } from 'react-icons/si';

interface Project {
    title: string;
    description: string;
    approach: string;
    desktopImage: string;
}

const SingleProject = ({ project }: { project: Project }) => {
    const { title, description, approach, desktopImage} = project;

    return (
        <div className="flex flex-col gap-6 ">
            <div className="flex flex-col gap-4">
                <h2 className="text-gray-500 uppercase text-sm font-medium">Branding - <span className='text-purple-500'>{title}</span></h2>
                <h1 className="text-4xl font-bold text-center">{title}</h1>
                <div className='group flex flex-row gap-4 justify-center items-center'>
                    <button className='border bg-purple-500 hover:bg-yellow-400 transition-all hover:text-black duration-300  text-white border-gray-100 py-1 px-2 rounded-md shadow-sm'>code</button>
                    <button className='border border-gray-100 bg-white hover:bg-yellow-400  hover:text-black transition-all duration-300 py-1 px-2 rounded-md shadow-sm'>deploy</button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-4">
                <p className="flex-1 text-gray-700 text-base leading-7 tracking-wide space-y-2 text-justify">{description}</p>
                <div className="flex-1">
                    <Image
                        src={desktopImage}
                        alt="desktop"
                        width={800}
                        height={600}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>

            <div className="bg-purple-500 p-6 pb-12 rounded-lg">
                <h2 className="text-white font-bold text-3xl text-center mb-6">
                    Responsive Design
                </h2>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    {/* Responsive image container */}
                    <div className="relative w-full max-w-xs mx-auto sm:mx-0 aspect-[8/16] overflow-hidden ">
                        <Image
                            className="z-40 absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full "
                            src="https://negiupp.com/_next/image?url=%2Fassets%2Fmobile-case.png&w=1920&q=75"
                            alt="mobile case"
                            width={500}
                            height={900}
                        />
                        <Image
                            className="absolute top-[2%] left-1/2 transform -translate-x-1/2 w-[92%]  rounded-3xl object-contain  "
                            src="https://my-page-negiupp.s3.amazonaws.com/1697571376665.png"
                            alt="mobile view"
                            width={500}
                            height={800}
                        />
                    </div>

                    <div className="relative w-full max-w-xs mx-auto sm:mx-0 aspect-[8/16] overflow-hidden ">
                        <Image
                            className="z-40 absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full "
                            src="https://negiupp.com/_next/image?url=%2Fassets%2Fmobile-case.png&w=1920&q=75"
                            alt="mobile case"
                            width={500}
                            height={900}
                        />
                        <Image
                            className="absolute top-[2%] left-1/2 transform -translate-x-1/2 w-[92%]  rounded-3xl object-contain  "
                            src="https://my-page-negiupp.s3.amazonaws.com/1697571380083.png"
                            alt="mobile view"
                            width={500}
                            height={800}
                        />
                    </div>

                    <div className="relative w-full max-w-xs mx-auto sm:mx-0 aspect-[8/16] overflow-hidden ">
                        <Image
                            className="z-40 absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full "
                            src="https://negiupp.com/_next/image?url=%2Fassets%2Fmobile-case.png&w=1920&q=75"
                            alt="mobile case"
                            width={500}
                            height={900}
                        />
                        <Image
                            className="absolute top-[2%] left-1/2 transform -translate-x-1/2 w-[92%]  rounded-3xl object-contain  "
                            src="https://my-page-negiupp.s3.amazonaws.com/1697571384350.png"
                            alt="mobile view"
                            width={500}
                            height={800}
                        />
                    </div>
                </div>
            </div>

            <div className=" flex flex-col md:flex-row justify-between items-start gap-4">
                <div className='md:w-1/2 w-full'>
                    <div className="font-semibold text-2xl text-gray-800 mb-2">
                        Technologies
                    </div>

                    <div className="grid grid-cols-3  gap-4 mt-4">
                        {/* Icono React */}
                        <div className="flex flex-col items-center">
                            <FaReact className="text-blue-500 w-10 h-10" />
                            <span className="text-sm mt-2 text-gray-700">React</span>
                        </div>

                        {/* Icono Node.js */}
                        <div className="flex flex-col items-center">
                            <FaNodeJs className="text-green-600 w-10 h-10" />
                            <span className="text-sm mt-2 text-gray-700">Node.js</span>
                        </div>

                        {/* Icono Tailwind CSS */}
                        <div className="flex flex-col items-center">
                            <SiTailwindcss className="text-blue-400 w-10 h-10" />
                            <span className="text-sm mt-2 text-gray-700">Tailwind</span>
                        </div>

                        {/* Icono TypeScript */}
                        <div className="flex flex-col items-center">
                            <SiTypescript className="text-blue-700 w-10 h-10" />
                            <span className="text-sm mt-2 text-gray-700">TypeScript</span>
                        </div>

                        {/* Icono CSS3 */}
                        <div className="flex flex-col items-center">
                            <FaCss3Alt className="text-blue-600 w-10 h-10" />
                            <span className="text-sm mt-2 text-gray-700">CSS3</span>
                        </div>

                        {/* Icono MongoDB */}
                        <div className="flex flex-col items-center">
                            <SiMongodb className="text-green-500 w-10 h-10" />
                            <span className="text-sm mt-2 text-gray-700">MongoDB</span>
                        </div>
                    </div>
                </div>

                <div className='md:w-1/2 w-full text-gray-700 text-base leading-7 tracking-wide space-y-2 text-justify'>
                    {approach}
                </div>
            </div>
            <div className='flex flex-col gap-4 '> 
                <Image src={'https://my-page-negiupp.s3.amazonaws.com/1691393730744.png'} alt="desktop" width={800} height={600} className="w-full h-auto rounded-lg"/>
                <Image src={'https://my-page-negiupp.s3.amazonaws.com/1691393737938.png'} alt="desktop" width={800} height={600} className="w-full h-auto rounded-lg"/>
                <Image src={'https://my-page-negiupp.s3.amazonaws.com/1691393743937.png'} alt="desktop" width={800} height={600} className="w-full h-auto rounded-lg"/>
            </div>
        </div>
    );
};

export default SingleProject;
