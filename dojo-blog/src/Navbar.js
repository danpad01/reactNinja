const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">None</a>
                <a href="/create" /*style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}*/>New blog</a>
            </div>
        </nav>
      );
}
 
export default Navbar;
