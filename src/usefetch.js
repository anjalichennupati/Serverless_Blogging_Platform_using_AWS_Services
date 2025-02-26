//custom hooks in js need to start with use

import {useState, useEffect} from 'react';

const useFetch = (url) =>{
    console.log(url)
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(()=>{
            console.log(url)
            fetch(url, {signal : abortCont.signal})
            .then(res=>{
                if(!res.ok){
                    throw Error("could not fetch the data from that resource")
                }
            return res.json();
            })
            .then(data=>{
                 console.log(data);
                 setData(data);
                 setIsPending(false);
                 setError(null); 
            })
            .catch(err=>{
                if (err.name === 'AbortError'){
                    console.log("fetch aborted");
                }
                else{
                    setIsPending(false);
                setError(err.message); // the message thrown by the promise is caught
                console.log(err.message)

                }
                
            })
    
    
        }, 1000)
        return ()=> abortCont.abort(); //abort whatever fetvh it is associated wth
      
      }, [url]) //whenever the url cahnges the function reruns

      console.log("data", data)
      return {data, isPending, error}

}

export default useFetch;