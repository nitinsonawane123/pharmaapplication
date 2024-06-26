import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import ProductDetails from './ProductDetails';

const ProductDetailsComponent = () => {
    const [products] = useState([
        { id: 1, name: 'Product 1', price: 50, category: 'Category 1', description: 'test', imageUrl: 'https://medcellpharma.com/wp-content/uploads/2023/01/medcellpharma-new-3D-products-2023-11-jpg.webp' },
        { id: 2, name: 'Product 2', price: 60, category: 'Category 2', description: 'test2',imageUrl: 'https://medcellpharma.com/wp-content/uploads/2023/01/medcellpharma-new-3D-products-2023-06-jpg.webp' },
        { id: 3, name: 'Product 3', price: 70, category: 'Category 1', description: 'test3',imageUrl: 'https://lh3.googleusercontent.com/proxy/OqXX-4HjSKPDygI7YfJ7HVQdQTm_b7RikffwyoGx2Q2QtsSgrzUycmhI7pHqTJ23teTtBlq_dQOA9ygRBRfhfSaWrLiMUPa7zBWbToF21W045ZpgqdyL4hQ-aNULdDA' },
    ]);

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Product Add to Cart
    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    // Product Remove from Cart
    const removeFromCart = (productToRemove) => {
        setCart(cart.filter(product => product !== productToRemove));
    };

    // Filter by Category
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    // Sort Text
    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

     // Search Text
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const getFilteredProducts = () => {
        let filteredProducts = products;

        if (filter) {
            filteredProducts = filteredProducts.filter(product => product.category === filter);
        }

        if (searchTerm) {
            filteredProducts = filteredProducts.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (sort) {
            filteredProducts = filteredProducts.sort((a, b) => {
                if (sort === 'priceAsc') {
                    return a.price - b.price;
                } else if (sort === 'priceDesc') {
                    return b.price - a.price;
                } else if (sort === 'nameAsc') {
                    return a.name.localeCompare(b.name);
                } else if (sort === 'nameDesc') {
                    return b.name.localeCompare(a.name);
                }
                return 0;
            });
        }

        return filteredProducts;
    };

    const filteredProducts = getFilteredProducts();

    return (
        <div>
            <p>Welcome to the pharma application!</p>
            <div className="container filter-section">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <label className="form-label me-2">Filter by Category:</label>
                        <select value={filter} onChange={handleFilterChange} className="form-select">
                            <option value="">All</option>
                            <option value="Category 1">Category 1</option>
                            <option value="Category 2">Category 2</option>
                        </select>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label me-2">Sort by:</label>
                        <select value={sort} onChange={handleSortChange} className="form-select">
                            <option value="">None</option>
                            <option value="priceAsc">Price: Low to High</option>
                            <option value="priceDesc">Price: High to Low</option>
                            <option value="nameAsc">Name: A to Z</option>
                            <option value="nameDesc">Name: Z to A</option>
                        </select>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label me-2">Search:</label>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="form-control"
                            placeholder="Search by product name"
                        />
                    </div>
                </div>
            </div>
            <h3>Products</h3>
            <ProductList products={filteredProducts} onProductClick={setSelectedProduct} addToCart={addToCart} />
            {selectedProduct && (
                <div>
                    <h3>Product Detail</h3>
                    <ProductDetails 
                        product={selectedProduct} 
                        addToCart={addToCart} 
                    />
                </div>
            )}
            <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
    );
};

export default ProductDetailsComponent;
