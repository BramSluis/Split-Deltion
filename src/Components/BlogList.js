import React from 'react'
import BlogItem from './BlogItem'

const BlogList = () => {
    return (
        <div className='blog-list-container'>
            <h2>Read more :</h2>
            <section className='blog-list'>
                <BlogItem /> <BlogItem />
                <BlogItem /> <BlogItem />
                <BlogItem /><BlogItem />
            </section>
        </div>
    )
}

export default BlogList
