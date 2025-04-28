import { useEffect, useState } from "react"

function ProductList() {
    const [products, setProducts] = useState([])


    useEffect(() => {

        fetch("https://reactpractice-lzgt--8000--d4eba4a9.local-credentialless.webcontainer.io/products")
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <section>
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <p className="id">{product.id}</p>
                    <p className="name">{product.name}</p>
                    <p className="info">
                        <span>${product.price}</span>
                        <span className={product.in_stock ? "instock":"unavailable"}>{product.in_stock ? "In Stock":"Out of Stock"}</span>
                    </p>
                </div>
            ))}
        </section>
    )
}

export default ProductList
