import GridProjects from '@/app/components/projects/GridProjects'
import HeroProjects from '@/app/components/projects/HeroProjects'
import ThanksGrid from '@/app/components/projects/ThanksGrid'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroProjects/>
      <GridProjects/>
      <ThanksGrid/>
    </div>
  )
}

export default page