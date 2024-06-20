import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import ProductDetailsComponent from './components/ProductDetailsComponent';


const AppRouter = () => {
  return (
         <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">PharmaApp</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product-details">Product Details</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/product-details" element={<ProductDetailsComponent />} />
                </Routes>
            </div>
        </Router>
  )
}

export default AppRouter
