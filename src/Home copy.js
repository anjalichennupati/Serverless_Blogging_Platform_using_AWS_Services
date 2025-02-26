//import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Home = () => {


  //const [name, setName] = useState('mario');

//   const handleDelete = (id) => {
//     const newBlogs = blogs.filter(blog => blog.id !== id);
//     setBlogs(newBlogs);
//   }
 

  const {data:blogs, isPending, error} = useFetch('/dev/blogs');

  console.log("All blogs:",blogs)
  const temp = blogs.body
  const blogsArray = JSON.parse(blogs)


  return (
    <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading... </div>}
       
         
    { blogs && <BlogList blogs={blogsArray} title="All Blogs"  /> } 
    {/*  && is used, renders it only when blogs are loaded */}
      {/* <button onClick={() => setName('luigi')}>change name</button> */}


    </div>
  );
}
 
export default Home;