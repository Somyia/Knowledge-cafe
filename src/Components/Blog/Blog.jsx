import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

const Blog = (props) => {
    
    const {id, author, author_image, cover_image, title, date, time, tags} = props.blog;

    return (
        <div className='blog'>
            <div className='cover-img'>
                <img src={cover_image} alt="" />
            </div>

            <div className='blog-info'>
                <div className='author-info'>
                    <div className='author-img'>
                        <img src={author_image} alt="" />
                    </div>
                    <div>
                        <h5>{author}</h5>
                        <small>{date}(4 days ago)</small>
                    </div>
                </div>
                <div className='blog-time'>
                    <small>{time} mins read <FontAwesomeIcon icon={faBookOpen} /> </small>
                </div>
            </div>
            <h2>{title}</h2>
            <p>{
                tags.map(tag => <a href=""><small>#{tag}</small></a>)
                }
            </p>
            <a>Mark as read</a>
        </div>
    );
};

export default Blog;