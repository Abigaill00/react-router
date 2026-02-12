import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ProductDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                navigate("/prodotti");
            });
    }, [id, navigate]);

    if (loading) return <p>Caricamento prodotto...</p>;
    if (!product) return <p>Prodotto non trovato</p>;

    return (
        <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
            <button onClick={() => navigate("/prodotti")} style={{ marginBottom: "1rem" }}>← Torna ai prodotti</button>
            <div style={{ display: "flex", gap: "2rem" }}>
                <img src={product.image} alt={product.title} style={{ width: "300px", height: "400px", objectFit: "cover" }} />
                <div>
                    <h1>{product.title}</h1>
                    <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#e74c3c" }}>${product.price}</p>
                    <p><strong>Categoria:</strong> {product.category}</p>
                    <p><strong>Descrizione:</strong> {product.description}</p>
                    <p><strong>Rating:</strong>  {product.rating?.rate} ({product.rating?.count} recensioni)</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage;