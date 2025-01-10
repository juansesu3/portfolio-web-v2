import ArticlesContainer from '@/app/components/blog/ArticlesContainer'
import FootterBlog from '@/app/components/blog/FootterBlog'
import Hero from '@/app/components/blog/Hero'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero/>
        <ArticlesContainer/>
        <FootterBlog/>
    </div>
  )
}

export default page