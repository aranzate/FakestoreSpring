import { BrowserRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";
import AddProduct from "./CreateProduct";
import Navigation from "./Navigation";
import Home from "./Home"


const App = () => {
    return(
        <>
        <h1 style={{textAlign: 'center'}}>Fakestore</h1>
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product" element={<AddProduct />} />
            </Routes>
        </BrowserRouter>    
        
        </>
    );
}
export default App;