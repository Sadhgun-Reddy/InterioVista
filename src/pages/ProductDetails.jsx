import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center mt-20">Loading product...</div>;
  if (!product) return <div className="text-center mt-20 text-red-500">Product not found.</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link to="/products" className="text-blue-500 hover:underline mb-8 inline-block">&larr; Back to Products</Link>

      <div className="flex flex-col md:flex-row gap-12 bg-white p-8 rounded-lg shadow-sm">
        <div className="md:w-1/2">
          <img src={product.imageUrl} alt={product.name} className="w-full h-auto rounded-lg shadow-md object-cover" />
        </div>
        <div className="md:w-1/2 flex flex-col">
          <span className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-2">{product.category}</span>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-gray-800 mb-6">${product.price.toFixed(2)}</p>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2 border-b pb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{product.description}</p>
          </div>

          <button
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to cart`}
            className="mt-auto bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 text-lg font-bold transition-colors w-full md:w-auto self-start focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
