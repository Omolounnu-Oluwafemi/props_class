import React from 'react'
import Bloglist from '../components/BlogList'

const Home = () => {

    const blogs = [
        {
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
    },
    {
        title: 'Blog 5',
        content: 'This is blog 5',
        id: 5
    },
    {
        title: 'Blog 6',
        content: 'This is blog 6',
        id: 6
    },
    {
        title: 'Blog 7',
        content: 'This is blog 7',
        id: 7
    },
    {
        title: 'Blog 8',
        content: 'This is blog 8',
        id: 8
    },
    {
        title: 'Blog 9',
        content: 'This is blog 9',
        id:9
    },
    {
        title: 'Blog 10',
        content: 'This is blog 10',
        id : 10
    
    }]

    const name = 'Femi'
    
    return (
      <>
        <h1>Home Page</h1>
          <div style={{backgroundColor: '#fff', width: '20%', padding:'30px'}}>
                <Bloglist listOfBlog={blogs} User={name} />
         </div>
      </>
  )
}

export default Home
