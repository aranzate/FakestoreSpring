import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
    const mystyle = {
        color: "white",
        backgroundColor: "grey",
        padding: "10px",
        fontFamily: "Courier New",
        textDecoration: 'none',
        borderStyle: 'solid',
        borderRadius: '10px'
    };

    const [products, setProducts] = useState([]);

    const fetchData = () => {
        axios.get(`http://localhost:8080/product`)
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    };

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 1);
        return () => clearInterval(intervalId);
    }, []);

    const handleDelete = (productId) => {
        axios.delete(`http://localhost:8080/product/${productId}`)
            .then(() => {
                setProducts(prevProducts => prevProducts.filter(product => product.id !== productId))
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <h2>Product List</h2>
            <table>
                <thead style={mystyle}>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Add to cart</th>
                        <th>Remove from cart</th>
                        <th>Delete product</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <>
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <button>Add to cart</button>
                            </td>
                            <td>
                                <button>Remove from cart</button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;