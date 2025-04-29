import { useState } from "react"
import useFetch from "../Hooks/useFetch"

function ProductList() {
    const [url, setUrl] = useState("https://reactpractice-lzgt--8000--d4eba4a9.local-credentialless.webcontainer.io/products")
    const { data : products, loading, error} = useFetch(url)

    return (
        <section>
            <div>
                <button onClick={() => setUrl("https://reactpractice-lzgt--8000--d4eba4a9.local-credentialless.webcontainer.io/products")}>All</button>
                <button onClick={() => setUrl(`${url}?in_stock=true`)}>Only In Stock</button>
            </div>
            {loading && <p>Loading Products...</p>}

            {error && <p>{error}</p>}

            {products && products.map((product) => (
                <div className="card" key={product.id}>
                    <p className="id">{product.id}</p>
                    <p className="name">{product.name}</p>
                    <p className="info">
                        <span>${product.price}</span>
                        <span className={product.in_stock ? "instock" : "unavailable"}>{product.in_stock ? "In Stock" : "Out of Stock"}</span>
                    </p>
                </div>
            ))}
        </section>
    )
}

export default ProductList
