import { useState, useEffect } from "react";

const useBlogs = (data) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Step 1: Parse the JSON string from the data
    const parsedBlogs = JSON.parse(data.body);

    // Step 2: Transform the array into the desired format
    const transformedBlogs = parsedBlogs.map((blog, index) => ({
      id: blog.blogId || `blog_${index}`, // Use blogId or generate one
      title: blog.title || "Default Title",
      content:
        blog.content ||
        "Default Content: Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: blog.author || "Anonymous"
    }));

    // Step 3: Set the transformed blogs to state
    setBlogs(transformedBlogs);
  }, [data.body]); // Runs when `data.body` changes

  return blogs;
};

export default useBlogs;
