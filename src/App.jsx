import { useState, useEffect } from "react";
import ProductList from "./components/ProductList"

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchProduct, setSearchProduct] = useState("");
    const [sort, setSort] = useState("");
    const products = [
        {
            id: 1,
            name: "Samsung TV",
            price: 49999,
            category: "Electronics",
            rating: 4.1,
            image: "https://www.fairdealelectronics.in/images/productimg/71qxrtsc8ds._sl1500__0337.jpg",
        },
        {
            id: 2,
            name: "Shoes",
            price: 6500,
            category: "Fashion",
            rating: 4.0,
            image: "https://redtape.com/cdn/shop/files/RSL1017_1.jpg?v=1768570510&width=1946",
        },
        {
            id: 3,
            name: "iPhone 15",
            price: 154000,
            category: "Electronics",
            rating: 4.5,
            image: "https://www.mobileana.com/wp-content/uploads/2025/06/Apple-iPhone-17-Pro-Max-Cosmic-Orange.webp",
        },
        {
            id: 4,
            name: "Leather Jacket",
            price: 4500,
            category: "Fashion",
            rating: 4.2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6mSM9lB5kPLpK-DPUKDnNL9aJ0l4FGZ2L9w&s",
        },
        {
            id: 5,
            name: "Air Fryer",
            price: 5999,
            category: "Electronics",
            rating: 4.4,
            image: "https://m.media-amazon.com/images/I/41exFmRRtqL._AC_UF894,1000_QL80_.jpg",
        },
        
        {
            id: 6,
            name: "Cotton T-Shirt",
            price: 500,
            category: "Fashion",
            rating: 3.8,
            image: "https://carbonmadras.com/cdn/shop/files/pantone2.jpg?v=1733939126&width=1445",
        },
        {
            id: 7,
            name: "Moisturizer",
            price: 850,
            category: "Beauty",
            rating: 4.3,
            image: "https://thefaceshop.in/cdn/shop/files/6_c6f4b82a-1f42-4bd2-9741-caba904e75d5.jpg?v=1760521859&width=1500",
        },


    ];

    const filteredProducts = products.filter((product) => selectedCategory == "All" ? products : product.category === selectedCategory)
        .filter((product) => product.name.toLowerCase().includes(searchProduct.toLowerCase()))
        .sort((a, b) => {
            if (sort === "low") return a.price - b.price;
            if (sort === "high") return b.price - a.price;
            if (sort === "rating") return b.rating - a.rating;
            return 0;
        });

    const handleSearch = (e) => {
        setSearchProduct(e.target.value)
    }
    return (
        <div>
            <nav className="bg-blue-600 text-white p-4 text-center text-xl font-bold">
                Product Listing
            </nav>
            <div className="container mx-auto px-4 py-6">
                {/* Header */}
                <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>

            </div> 

                <div className="flex flex-col md:flex-row gap-4 mb-6">

                    <input type="text"
                        placeholder="Search by name..."
                        className="border p-2 rounded"
                        value={searchProduct}
                        onInput={handleSearch} />


                    <select
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        value={selectedCategory}
                        className="border p-2 rounded">
                        <option value="All">All</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Beauty">Beauty</option>
                        

                    </select>


                    <select
                        className="border p-2 rounded"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value="">Sort By</option>
                        <option value="low">Price: Low to High</option>
                        <option value="high">Price: High to Low</option>
                        <option value="rating">Rating</option>
                    </select>

                </div>
                <ProductList products={filteredProducts} />
            </div>
        
    )
}

export default App;