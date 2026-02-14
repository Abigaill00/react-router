import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../index.css"; 

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, []);

    if (loading) return <p className="loading">Caricamento prodotti...</p>;

    return (
        <div className="products-page">
            <h1 className="page-title">I nostri prodotti</h1>
            <div className="products-grid">
                {products.map(product => (
                    <Link key={product.id} to={`/prodotti/${product.id}`} className="product-link">
                        <div className="product-card">
                            <img src={product.image} alt={product.title} className="product-image" />
                            <h3 className="product-title">{product.title}</h3>
                            <p className="product-price">${product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;