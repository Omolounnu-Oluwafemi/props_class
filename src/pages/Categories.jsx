import React from 'react'
import Bloglist from '../components/BlogList'

const Category = () => {

const categoryBlogs = [{
        title: 'Blog 1',
        content: 'This is blog 1',
        id: 1
    },
    {
        title: 'Blog 2',
        content: 'This is blog 2',
        id: 2
    },
    {
        title: 'Blog 3',
        content: 'This is blog 3',
        id: 3
    },
    {
        title: 'Blog 4',
        content: 'This is blog 4',
        id: 4
    }]

const author = 'FrontEnd Master Team'
    
    return (
        <>
        <h1>Category Page</h1>
          <div style={{backgroundColor: '#fff', width: '20%', padding:'30px'}}>
                <Bloglist listOfBlog={categoryBlogs} owner={author} />
         </div>
      </>
  )
}

export default Category
