const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Mojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color:"white",
                    backgroundColor:"#e07a5f",
                    borderRadius: '8px'
                }} >Create New Blog</a>

                
            </div>
            
            
        </nav>


    );
}
 
export default Navbar;