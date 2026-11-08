import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!user) {
      navigate('/login');
    } else {
      navigate('/checkout');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-8">Looks like you haven&apos;t added any furniture yet.</p>
        <Link to="/products" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
              <div className="flex-grow text-center sm:text-left">
                <Link to={`/products/${item.id}`} className="text-lg font-semibold hover:text-gray-600">{item.name}</Link>
                <p className="text-gray-500">${item.price.toFixed(2)}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  aria-label={`Decrease quantity of ${item.name}`}
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-black"
                >
                  -
                </button>
                <span className="w-8 text-center" aria-label={`Quantity of ${item.name}`}>{item.quantity}</span>
                <button
                  aria-label={`Increase quantity of ${item.name}`}
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md hover:bg-gray-300 outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-black"
                >
                  +
                </button>
              </div>

              <div className="text-right w-24">
                <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>

              <button
                aria-label={`Remove ${item.name} from cart`}
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 ml-4 p-2 outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-red-500 rounded-md"
                title="Remove item"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="lg:w-80 flex-shrink-0">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
            <h3 className="text-xl font-bold mb-4 border-b pb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-4 mb-6">
              <span>Total</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors text-lg"
            >
              {user ? 'Proceed to Checkout' : 'Login to Checkout'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
