import { useParams } from "react-router-dom";
import useFetch from "./usefetch";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

const BlogDetails = () => {
    const { id } = useParams(); // Grab :id from URL
    const { data: blog, error, isPending } = useFetch('/dev/blogs/' + id);
    const navigate = useNavigate();

    let parsedblog = null;
    if (blog && blog.body) {
        try {
            parsedblog = JSON.parse(blog.body);
        } catch (e) {
            console.error("Error parsing blog body:", e);
        }
    }

    const handleClick = () => {
        if (parsedblog && parsedblog.blogId) {
            fetch(`/dev/blogs/${parsedblog.blogId}`, {
                method: 'DELETE'
            }).then(() => {
                navigate('/');
            }).catch(err => {
                console.error("Error deleting the blog:", err);
            });
        } else {
            console.error("Parsed blog ID not found.");
        }
    };

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {!parsedblog && blog && <div>Could not parse blog details.</div>}
            {parsedblog && (
                <article>
                    <h2>{parsedblog.title}</h2>
                    <p>Written by {parsedblog.author}</p>
                    <div>{parsedblog.content}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
};

export default BlogDetails;
