import React from 'react'

const Bloglist = (props) => {
    const blogs = props.blogs
    console.log(blogs)

    return (
        <div>
            {blogs.map((blog) => (
                <div style={{ backgroundColor: '#ff0000', }} key={blog.id} >
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                </div>
            ))};
        </div>
    );
}

export default Bloglist
