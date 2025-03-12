import React from "react";

const BlogForm = () => {
    return (
        <div className="container">
            <div className="post-box">
                <h2 className="title">Make a post</h2>
                <div className="user-avatar">
                    <img src="https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg" alt="User Avatar" />
                </div>
                <form>
                    <label>Title</label>
                    <input type="text" className="input-field" />
                    <label>Description</label>
                    <textarea className="input-field" rows="6"></textarea>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default BlogForm;