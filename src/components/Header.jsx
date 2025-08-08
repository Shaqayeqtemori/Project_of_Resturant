import { Link } from "react-router-dom";
function Header(){
    return(
        <header>
            <nav>
                <Link to="/" style={{color:"black"}} rel="stylesheet" >Home</Link>
                <Link to="/about" style={{color:"black"}} rel="stylesheet" >About</Link>
                <Link to="/contact" style={{color:"black"}} rel="stylesheet" >Contact</Link>
            </nav>
        </header>
    );
}

export default Header;