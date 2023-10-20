import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('fakeData/fakeData.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='blogs-section'>
            <div className='all-blogs'>
                {
                    blogs.map(blog=> <Blog
                    key={blog.id}
                    blog={blog}
                    ></Blog>)
                }
            </div>
            <div className='my-bookmarks'>
                <div>
                    <h3>Spent time on read : mins</h3>
                </div>
                <div>
                    <h3>Bookmarked Blogs :</h3>
                </div>
            </div>
        </div>
    );
};

export default Blogs;