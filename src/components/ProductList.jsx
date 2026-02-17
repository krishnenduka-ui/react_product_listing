const ProductList = ({ products }) => {

    const handleAddToCart = (productName) => {
    console.log(`${productName} added to cart`);
  };
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {products.map((product) => {
                return (
                    <div className='p-3 shadow-xl rounded-md' key={product.id}>

                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-40 object-cover mb-4"
                        />

                        <h2 className="font-bold text-lg">{product.name}</h2>
                        <p className="text-gray-600"> ₹{product.price}</p>
                        <p className="text-sm text-gray-500">{product.category}</p>
                        <p className="text-yellow-500">⭐ {product.rating}</p>

                        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" 
                         onClick={()=> handleAddToCart(product.name)}>
                        Add to cart</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;
