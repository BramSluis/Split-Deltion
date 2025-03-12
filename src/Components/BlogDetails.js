import React from 'react'

const BlogDetails = ({ title, subtitle, content }) => {
    return (
        <div className='blog-details-container'>
            <article className='blog-content'>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quibusdam eaque dolores, enim officia ipsam.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro expedita odit laboriosam saepe corrupti ipsa vero dolorem recusandae dignissimos alias, sit facilis? Nobis, distinctio, odio impedit sed error eveniet natus vero dicta blanditiis omnis exercitationem dolorum. Sint ad ipsam minus quo ducimus sapiente voluptates! Reiciendis facilis ipsum natus molestias laborum, a debitis voluptas obcaecati quae nesciunt sint unde dignissimos aperiam quas sit. Sed natus assumenda consectetur ducimus expedita a rerum quibusdam repudiandae hic porro error, illo veritatis earum distinctio dolore magni dolores accusamus quos saepe itaque sunt nobis corrupti neque? Excepturi neque veniam omnis iste iure vitae hic nobis nemo.</p>
            </article>
            <aside>
                <img src="https://www.landstedembo.nl/media/4hkpatbf/zwolle-landstede-mbo.jpg?width=405&height=580&format=webp&v=1db08546c9c76b0" alt="zwolle" />
            </aside>
        </div>
    )
}

export default BlogDetails
