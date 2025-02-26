import { Link } from "react-router-dom";
import React, { useEffect } from "react";

const BlogList  = (props) => {
     const parsedBlogs = JSON.parse(props.blogs.body);
     const transformedBlogs = parsedBlogs.map((blog, index) => ({
      id: blog.blogId || `blog_${index}`, // Use blogId or generate one
      title: blog.title || "Default Title",
      content:
        blog.content ||
        "Default Content: Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: blog.author || "Anonymous"
    }));

    console.log("transformed blogs:", transformedBlogs)

    

  
  const title = props.title;
   const handleDelete= props.handleDelete;

    return ( 
        
        <div className="blog-list">
            <h2 style={{  color:  '#f1356d',}}> {title}</h2>
              {

                
            // blogs.forEach((blog)=>{
            //     <p>{blog.title}</p>
            // }) foreach wont return anything, you should use map instead
            //key property is used by react to keep track on additions etc in the list
            // key must be unique
            transformedBlogs.map(blog=>(
                <div className="blog-preview" key = {blog.id}>
                  <Link to ={`/blogs/${blog.id}`}>  
                  {/* link tag is used in react dom */}
                  <h2>{blog.title}</h2>
                  <p>Written by {blog.author}</p>
                  </Link>
                  
                    {/* <button onClick = {()=>handleDelete(blog.id)}> Delete</button> */}
                </div>

            ))


          }

        </div>
     );
}
 
export default BlogList ;




















// import { Link } from "react-router-dom";

// const BlogList  = (props) => {

//    console.log("props: ", props)
//     const blogs = props.blogs;
//     const title = props.title;

//    const handleDelete= props.handleDelete;

//     return ( 
        
//         <div className="blog-list">
//             <h2 style={{  color:  '#f1356d',}}> {title}</h2>
//               {

                
//             // blogs.forEach((blog)=>{
//             //     <p>{blog.title}</p>
//             // }) foreach wont return anything, you should use map instead
//             //key property is used by react to keep track on additions etc in the list
//             // key must be unique
//             blogs.map(blog=>(
//                 <div className="blog-preview" key = {blog.id}>
//                   <Link to ={`/blogs/${blog.id}`}>  
//                   {/* link tag is used in react dom */}
//                   <h2>{blog.title}</h2>
//                   <p>Written by {blog.author}</p>
//                   </Link>
                  
//                     {/* <button onClick = {()=>handleDelete(blog.id)}> Delete</button> */}
//                 </div>

//             ))


//           }

//         </div>
//      );
// }
 
// export default BlogList ;