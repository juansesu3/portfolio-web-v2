import SingleProject from '@/app/components/projects/SingleProject'
import ThankYouSection from '@/app/components/projects/ThankYouSection';
import React from 'react'

const page = () => {
    const projectData = {
        title: "E-commerce client",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        approach: "Nuestro enfoque fue dividir el problema en módulos pequeños, usando metodologías ágiles para iterar rápidamente. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
        desktopImage: "https://negiupp.com/_next/image?url=https%3A%2F%2Fmy-page-negiupp.s3.amazonaws.com%2F1691393721997.png&w=3840&q=75",
        mobileImage: "https://negiupp.com/_next/image?url=%2Fassets%2Fmobile-case.png&w=1920&q=75",
        
    };
  return (
    <div>
          <SingleProject project={projectData} />
          <ThankYouSection/>
    </div>
  )
}

export default page