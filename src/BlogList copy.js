import { Link } from "react-router-dom";

const BlogList  = (props) => {
    const blogs = props;
    console.log(blogs)
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
            blogs.map(blog=>(
                <div className="blog-preview" key = {blog.id}>
                  <Link to ={`/blogs/${blog.blogId}`}>  
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