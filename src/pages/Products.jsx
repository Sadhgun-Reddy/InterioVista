import { useState, useEffect, memo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { Search } from 'lucide-react';

// ⚡ Bolt: Performance optimization
// Extracted ProductCard to a separate component wrapped in React.memo
// to prevent the entire product grid and all images from re-rendering
// on every keystroke when typing in the search input.
const ProductCard = memo(({ product, addToCart }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
    <Link to={`/products/${product.id}`}>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-56 object-cover hover:opacity-90 transition-opacity"
      />
    </Link>
    <div className="p-4 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-2">
        <Link to={`/products/${product.id}`}>
            <h3 className="text-lg font-semibold hover:text-gray-700 leading-tight">{product.name}</h3>
        </Link>
        <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded text-gray-600">
            {product.category}
        </span>
      </div>
      <p className="text-gray-600 flex-grow text-sm mb-4 line-clamp-2">{product.description}</p>
      <div className="mt-auto flex items-center justify-between">
        <span className="font-bold text-xl">${product.price.toFixed(2)}</span>
        <button
          onClick={() => addToCart(product)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 text-sm font-medium transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
));

ProductCard.displayName = 'ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || '';
  const initialSearch = searchParams.get('search') || '';
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const { addToCart } = useCart();

  useEffect(() => {
    setSearchTerm(initialSearch);
  }, [initialSearch]);

  const categories = ['Living', 'Storage', 'Dining', 'Bedroom', 'Mattress', 'Study', 'Office', 'Outdoor'];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let url = '/api/products?';
        const params = new URLSearchParams();
        if (category) params.append('category', category);
        if (initialSearch) params.append('search', initialSearch);

        const res = await axios.get(url + params.toString());
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category, initialSearch]);

  const handleSearch = (e) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    if (searchTerm) {
      newParams.set('search', searchTerm);
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams);
  };

  const handleCategoryChange = (newCategory) => {
    const newParams = new URLSearchParams(searchParams);
    if (newCategory) {
      newParams.set('category', newCategory);
    } else {
      newParams.delete('category');
    }
    setSearchParams(newParams);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-bold text-lg mb-4">Filters</h3>

          <div className="mb-6">
            <h4 className="font-semibold mb-2">Category</h4>
            <div className="space-y-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  checked={category === ''}
                  onChange={() => handleCategoryChange('')}
                  className="form-radio text-black focus:ring-black"
                />
                <span>All Categories</span>
              </label>
              {categories.map(cat => (
                <label key={cat} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    checked={category === cat}
                    onChange={() => handleCategoryChange(cat)}
                    className="form-radio text-black focus:ring-black"
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-3xl font-bold capitalize">
            {category ? `${category} Products` : 'All Products'}
            {initialSearch && ` - Search: "${initialSearch}"`}
          </h2>

          <form onSubmit={handleSearch} className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:border-black"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <button type="submit" className="hidden">Search</button>
          </form>
        </div>

        {loading ? (
            <div className="flex justify-center mt-20">
                <div className="animate-spin inline-block w-8 h-8 border-4 border-black border-t-transparent rounded-full" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        ) : products.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-lg shadow-sm">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            <button
                onClick={() => { setSearchTerm(''); setSearchParams({}); }}
                className="mt-4 text-blue-600 hover:underline"
            >
                Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;
