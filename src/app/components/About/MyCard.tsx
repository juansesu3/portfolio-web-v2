'use client'
import Image from 'next/image'
import React from 'react'

const MyCard = () => {
    return (
        <div className='flex flex-col sm:flex-row gap-4 w-full sm:h-[550px] h-full'>

            <div className='border border-gray-100 p-4 rounded-lg flex flex-col gap-4 shadow-md max-w-96 my-auto mx-auto'>
                <Image
                    src="https://my-page-negiupp.s3.amazonaws.com/1688550234499.jpg"
                    alt="founder profile image"
                    width={500}
                    height={500}
                    className='transform scale-x-[-1] w-96 object-cover '
                />
                <h1 className='text-center font-medium text-lg'>
                    Juan Sebastian Suarez Ramirez
                </h1>
                <div className='flex flex-row justify-center gap-2'>
                    <div className='transition-all duration-300 ease-in-out hover:-translate-y-1 cursor-pointer hover:shadow-md  p-2 rounded-md border border-gray-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px"><path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z" /><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05" /><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07" /><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z" /></svg>
                    </div>
                    <div className='transition-all duration-300 ease-in-out hover:-translate-y-1 cursor-pointer hover:shadow-md p-2 rounded-md border border-gray-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px"><path fill="#fff" d="M41,24c0,9.4-7.6,17-17,17S7,33.4,7,24S14.6,7,24,7S41,14.6,41,24z" /><path fill="#455a64" d="M21 41v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-6.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h1.8c.2-.3.2-.6.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5c-2.3 0-4.3 3.1-4.3 5.2v3.9c0 .4.1.8.2 1.1L21 41 21 41zM40.1 26.4C40.1 26.4 40.1 26.4 40.1 26.4c0 0-1.3-.4-2.4-.4 0 0-.1 0-.1 0-1.1 0-2.9.3-2.9.3-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2-.3 3.1-.3 1.1 0 2.4.4 2.5.4.1 0 .1.1.1.2C40.2 26.3 40.2 26.4 40.1 26.4zM39.8 27.2C39.8 27.2 39.8 27.2 39.8 27.2c0 0-1.4-.4-2.6-.4-.9 0-3 .2-3.1.2-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2.2-.2 3.1-.2 1.3 0 2.6.4 2.6.4.1 0 .1.1.1.2C39.9 27.1 39.9 27.2 39.8 27.2zM7.8 26.4c-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.2.8-.2 2.4-.5 3.3-.5.8 0 3.5.2 3.6.2.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0-2.7-.2-3.5-.2C10.1 26 8.6 26.2 7.8 26.4 7.8 26.4 7.8 26.4 7.8 26.4zM8.2 27.9c0 0-.1 0-.1-.1 0-.1 0-.1 0-.2.1 0 1.4-.8 2.9-1 1.3-.2 4 .1 4.2.1.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0 0 0 0 0 0 0-2.8-.3-4.1-.1C9.6 27.1 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9z" /><path fill="#455a64" d="M14.2,23.5c0-4.4,4.6-8.5,10.3-8.5c5.7,0,10.3,4,10.3,8.5S31.5,31,24.5,31S14.2,27.9,14.2,23.5z" /><path fill="#455a64" d="M28.6 16.3c0 0 1.7-2.3 4.8-2.3 1.2 1.2.4 4.8 0 5.8L28.6 16.3zM20.4 16.3c0 0-1.7-2.3-4.8-2.3-1.2 1.2-.4 4.8 0 5.8L20.4 16.3zM20.1 35.9c0 0-2.3 0-2.8 0-1.2 0-2.3-.5-2.8-1.5-.6-1.1-1.1-2.3-2.6-3.3-.3-.2-.1-.4.4-.4.5.1 1.4.2 2.1 1.1.7.9 1.5 2 2.8 2 1.3 0 2.7 0 3.5-.9L20.1 35.9z" /><path fill="#00bcd4" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M24,40c-8.8,0-16-7.2-16-16S15.2,8,24,8 s16,7.2,16,16S32.8,40,24,40z" /></svg>
                    </div>
                    <div className='transition-all duration-300 ease-in-out hover:-translate-y-1 cursor-pointer hover:shadow-md p-2 rounded-md border border-gray-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5" /><stop offset=".328" stopColor="#ff543f" /><stop offset=".348" stopColor="#fc5245" /><stop offset=".504" stopColor="#e64771" /><stop offset=".643" stopColor="#d53e91" /><stop offset=".761" stopColor="#cc39a4" /><stop offset=".841" stopColor="#c837ab" /></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z" /><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9" /><stop offset=".999" stopColor="#4168c9" stopOpacity="0" /></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z" /><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z" /><circle cx="31.5" cy="16.5" r="1.5" fill="#fff" /><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z" /></svg>
                    </div>
                </div>
                <button className='bg-purple-500 text-white rounded-md p-2 text-lg font-medium transition-all duration-300 ease-in-out  hover:shadow-md  hover:bg-purple-600 '>Contact Me</button>
            </div>

            <div className='w-full overflow-y-scroll'>
                <div className='flex flex-col gap-6'>
                    {/* about me */}
                    <div>
                        <h2 className='text-purple-500 font-semibold text-lg mb-2 uppercase'>About Me</h2>
                        <div className="text-gray-700 text-base leading-7 tracking-wide space-y-2 text-justify">
                            <p>
                                Hi! I'm Juan Sebastian Suarez Ramirez, a passionate Full Stack Developer with over four years of experience delivering innovative and impactful web solutions. I specialize in frontend development using React.js, Next.js, and TypeScript, combined with backend development using Node.js, Express.js, and Python for crafting robust applications and implementing efficient business logic.
                            </p>
                            <p>
                                I have extensive experience working with language processing models and designing AI-powered agents, creating innovative, creative, and efficient solutions that leverage tools like OpenAI API, LangChain.js, LangChain.py, and FastAPI.
                            </p>
                            <p>As the CEO and Co-Founder of PandorAI, I led the implementation of Retrieval-Augmented Generation (RAG) techniques, significantly reducing operational costs and making advanced AI more accessible to businesses by aligning technology with business efficiency.</p>
                            <p>
                                I’m passionate about writing clean, modular, and maintainable code, solving real-world challenges through technology, and continuously learning to stay ahead of innovation. Let’s connect and build something amazing together! 🚀
                            </p>
                        </div>
                    </div>
                    {/* language */}
                    <div>
                        <h2 className='text-purple-500 font-semibold text-lg mb-4 uppercase'>Language</h2>
                        <div className='flex gap-4 justify-around'>
                            <div className='flex flex-col items-center justify-center'>
                                <span>🇬🇧</span>
                                <h3 className='text-lg font-bold '> English</h3>
                                <p className='text-purple-500'>Level B2+</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <span>🇫🇷</span>
                                <h3 className='text-lg font-bold '> French</h3>
                                <p className='text-purple-500'>Level A2</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <span>🇪🇸</span>
                                <h3 className='text-lg font-bold '> Spanish</h3>
                                <p className='text-purple-500'>Level Native</p>
                            </div>
                        </div>
                    </div>

                    {/* Experiences */}
                    <div>
                        <h2 className='text-purple-500 font-semibold text-lg mb-4 uppercase'>Experiences</h2>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <p className='text-slate-500'>02/2024 - present</p>
                                <h3 className='text-purple-500 font-semibold text-lg'>CEO & Co-Founder</h3>
                                <h4 className='font-semibold '>Pandorai.ch</h4>
                                <p className='text-gray-700 text-base leading-7 tracking-wide space-y-2 text-justify'>
                                    As the CEO and co-founder of PandorAI, I led the
                                    creation of a clear vision, the formation of a talented
                                    team, and the structuring of our services. Drawing on
                                    my experience as a fullstack developer, we
                                    implemented the RAG (Retrieval-Augmented
                                    Generation) technique, which significantly reduced
                                    the operational costs of language models. This
                                    approach not only improved our offering to clients but
                                    also increased the company's profits, aligning
                                    technological innovation with business efficiency to
                                    democratize access to advanced artificial intelligence
                                    solutions.
                                </p>
                            </div>
                            <hr />
                            <div>
                                <p className='text-slate-500'>01/2023 - 02/2024</p>
                                <h3 className='text-purple-500 font-semibold text-lg'>FullStack Developer</h3>
                                <h4 className='font-semibold '>Freelancer</h4>
                                <p className='text-gray-700 text-base leading-7 tracking-wide space-y-2 text-justify'>
                                    As a fullstack developer I have developed amazing
                                    projects solving everyday problems through digital
                                    products with a powerful stack of technologies,
                                    among which React.js, Node.js, Next.js, JavaScript,
                                    Express.js, MongoDB, SQL, NoSQL stand out. You can
                                    visit the projects section in my website to learn more.
                                </p>
                            </div>
                            <hr />
                            <div>
                                <p className='text-slate-500'>01/2022 - 12/2022 </p>
                                <h3 className='text-purple-500 font-semibold text-lg'>JavaScript Developer</h3>
                                <h4 className='font-semibold '>Talent.com</h4>
                                <p className='text-gray-700 text-base leading-7 tracking-wide space-y-2 text-justify'>As a JavaScript Developer, I designed and executed
                                    sophisticated web scraping scripts, ensuring data
                                    quality and optimizing storage methodologies.
                                    Leveraged collaborative teamwork and advanced
                                    technologies, ultimately achieving a prominent
                                    position within my role. Excited to bring this expertise
                                    and success to new challenges.</p>
                            </div>
                            <hr />
                            <div>
                                <p className='text-slate-500'>07/2021 - 01/2022</p>
                                <h3 className='text-purple-500 font-semibold text-lg'>Frontend Developer</h3>
                                <h4 className='font-semibold '>Makaia</h4>
                                <p className='text-gray-700 text-base leading-7 tracking-wide space-y-2 text-justify'>Engaged as a Frontend Developer in a dynamic
                                    bootcamp, tackling real-world tech challenges.
                                    Crafted innovative digital solutions using React.js and
                                    TypeScript, while implementing CSS preprocessors for
                                    enhanced styling. Applied Agile methodologies and
                                    CI/CD practices for efficient project execution. Excited
                                    to leverage this experience and skill set in future
                                    opportunities.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MyCard