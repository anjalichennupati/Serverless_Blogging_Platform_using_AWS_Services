
import Navbar from './Navbar'; 
import Home from './Home'; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() {
  const title ='welcome to the new blog!';
  return (
    <Router>
    <div className="App">
      <Navbar> </Navbar>
      <div className="content">
      <Routes>  
        {/* all routes go around switch component */}
        <Route path="/" element = {<Home/>}/>
        <Route path="/create" element = {<Create/>}/>
        <Route path="/blogs/:id" element = {<BlogDetails/>}/>
        <Route path="*" element = { <NotFound />} />
         
       
      </Routes>
      </div>
   <div className="content">
    {/* <h1>{title}</h1> */}
    
   </div>
    </div>
    </Router>
  );
}

export default App;
