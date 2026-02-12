import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductsPage() {
    const [products, setProducts] = useState([]); // SALVO I PRODOTTI
    const [loading, setLoading] = useState(true); // SI STA CARICANDO

    useEffect(() => {
        // Questa funzione si esegue al primo render
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
             
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, []); // Array vuoto = esegui una sola volta al mount

    if (loading) return <p>Caricamento prodotti...</p>;

    return (
        <div>
            <h1>I nostri prodotti</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                {products.map(product => (
                    <Link key={product.id} to={`/prodotti/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
                        <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
                            <h3>{product.title}</h3>
                            <p>${product.price}</p>
                            <img src={product.image} alt={product.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;