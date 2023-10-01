import { Link } from "react-router-dom"

const Navigation = () => {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Courier New",
        textDecoration: 'none',
        borderStyle: 'solid',
        borderRadius: '10px'
    };
    return(
        <>
        <div>
            <Link to="/" style={mystyle}>Home</Link>
            <Link to="/products" style={mystyle}>Products</Link>
            <Link to="/product" style={mystyle}>Add new product</Link>
        </div>
        </>
    );
}



export default Navigation;