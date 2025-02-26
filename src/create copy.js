import { useState } from "react";
//import {useHistory} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

//useHistory hook is used to navigate through pages 

const Create = () => {
    const [title, setTitle ] = useState('');
    const [content, setContent ] = useState('');
    const [author, setAuthor ] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isredirect, setIsRedirect] = useState(false);
   // const history = useHistory();
    const navigate = useNavigate(); 

    const handleSubmit =(e) =>{
        e.preventDefault();
        const blog ={title, content, author};
        console.log(blog);
        setIsPending(true);
       

        fetch('/dev/blogs', {
          
            method: 'POST', 
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added")
            setIsSuccess(true);
            setIsPending(false);

          

           
         
        }).then(()=>{
            setTimeout(()=>{
                setIsSuccess(false);

            }, 1000)

            setTimeout(()=>{
               navigate('/')

            }, 1000)


      
        })

    }
    return ( 
        <div className="create">
            <h2> Add a New Blog!</h2>
            <form onSubmit ={handleSubmit}>
                <label> Blog title:
                </label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                />
                <label> Blog content:
                </label>
                 <textarea  
                  required
                  value ={content}
                  onChange = {(e)=> setContent(e.target.value)}
                 > 
                 </textarea>


                 <label> Blog author:</label>

                 
                <input 
                type="text"
                required
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
                />



                 {!isPending && <button>Add Blog</button>}
                 {isPending && <button disabled>Adding Blog!</button>}
                 {/* <p>{title}</p>
                 <p>{body}</p>
                 <p>{author}</p> */}

            </form>
            { isSuccess && <p class="success-message">New blog added! </p>}
           
        </div>
     );
}
 
export default Create;