import React from 'react'

const BlogItem = ({ title, subtitle }) => {
    return (
        <div className='blog-item-container'>
            <img src="https://ikwilmeerreizen.nl/wp-content/uploads/2020/08/wat-te-doen-in-zwolle-sassenpoort-790x593.jpg" alt="zwolle" />
            <h2>Title</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, temporibus ab! Enim, vel accusantium. Explicabo doloremque laborum iure eum nesciunt?</p>
        </div>
    )
}

export default BlogItem
