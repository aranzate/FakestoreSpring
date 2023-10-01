import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
    const [product, setProduct] = useState({ name: '', price: 0 });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8080/product', product)
            .then((response) => {
                console.log('Product created:', response.data);
                // Reset the form or show a success message
            })
            .catch((error) => {
                console.error('Error creating product:', error);
                // Handle errors, e.g., display an error message
            });
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Product Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="price">Product Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        min="0.01" 
                        max="1000000.00" 
                        step="0.01"
                        value={product.price}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="price">Product Image:</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={product.image}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="quantity">Product Quantity:</label>
                    <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={product.quantity}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;