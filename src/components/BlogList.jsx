import React from 'react'

const Bloglist = ({listOfBlog, User, owner}) => {
   
    const list = listOfBlog
    const Author = User
    const blogger = owner
    
    return (
        <div>
            <h2>BlogList</h2>
            {list.map((blog) => (
                <div style={{ backgroundColor: '#ff0000', }} key={blog.id} >
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                    <p>{Author}</p>
                    <p>{blogger}</p>
                </div>
            ))}
        </div>
    );
}

export default Bloglist
