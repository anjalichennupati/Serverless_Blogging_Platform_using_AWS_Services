import { useParams } from "react-router-dom";
import useFetch from "./usefetch";
import { useNavigate } from "react-router-dom";


// hook to grab that url

const BlogDetails = () => {
  
    const {id} = useParams(); // whatever :id parameter is given in the url can be grabbed
    const {data: blog, error, isPending} =useFetch('/dev/blogs/'+id);
    const navigate = useNavigate(); 
   const handleClick=() =>{
    fetch('/dev/blogs/' +blog.id, {
     
        method:'DELETE'
        
    }).then(()=>{
        navigate('/')

    })
   }
   
    return ( 
        <div className="blog-details">
           {isPending && <div> Loading... </div>}
           {error && <div> {error} </div>}
           {blog && (
            <article>
                <h2>
                    {blog.title}
                </h2>
                <p>
                    Written by {blog.author}
                </p>
                <div>
                    {blog.content}
                </div>
                <button onClick={handleClick}>Delete</button>
            </article>

           )}

        </div>
     );
}
 
export default BlogDetails;