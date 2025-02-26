const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Myblog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href = "/create" style={{
                    color:"white",
                    backgroundColor:  '#f1356d',
                    borderRadius: '8px',

                }}>New Blog</a>
                {/* when we need dynamic value we use {}  */}
            </div>
        </nav>
    );
}
 
export default Navbar;