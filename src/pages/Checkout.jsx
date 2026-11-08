import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { cartItems, clearCart, getCartTotal } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const total = getCartTotal ? getCartTotal() : cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const handleCheckout = async (e) => {
        e.preventDefault();

        if (!user) {
            toast.error('You must be logged in to checkout');
            navigate('/login');
            return;
        }

        if (cartItems.length === 0) {
            toast.error('Your cart is empty');
            return;
        }

        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            const items = cartItems.map(item => ({
                productId: item.id,
                quantity: item.quantity,
                price: item.price
            }));

            await api.post('/api/orders', {
                items,
                totalAmount: total
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            toast.success('Order placed successfully!');
            clearCart();
            setSuccess(true);
        } catch (err) {
            console.error('Checkout failed', err);
            toast.error('Checkout failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="max-w-2xl mx-auto px-4 py-16 text-center">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-green-100">
                    <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-green-600 mb-4">Order Successful!</h2>
                    <p className="text-gray-600 mb-8">Thank you for your purchase, {user?.username}. Your order is being processed.</p>
                    <div className="flex gap-4 justify-center">
                        <Link to="/products" className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
                            Continue Shopping
                        </Link>
                        <Link to="/profile" className="bg-white text-black border border-black px-6 py-2 rounded-md hover:bg-gray-50 transition-colors">
                            View Order History
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <Link to="/products" className="text-blue-600 hover:underline">Go shopping</Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-8">Checkout</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Order Summary */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-xl font-bold mb-4 border-b pb-2">Order Summary</h3>
                    <div className="space-y-4 mb-4 max-h-96 overflow-y-auto pr-2">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex justify-between items-center text-sm">
                                <div className="flex items-center gap-3">
                                    <img src={item.imageUrl} alt={item.name} className="w-12 h-12 object-cover rounded" />
                                    <div>
                                        <span className="font-medium">{item.name}</span>
                                        <span className="text-gray-500 block">x{item.quantity}</span>
                                    </div>
                                </div>
                                <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="border-t pt-4">
                        <div className="flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* Shipping / Payment Mock Form */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-xl font-bold mb-4 border-b pb-2">Shipping Information</h3>
                    <form onSubmit={handleCheckout} className="space-y-4">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input id="fullName" name="fullName" aria-label="Full Name" type="text" required defaultValue={user?.username || ''} className="w-full p-2 border rounded focus:ring-black focus:border-black focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-black outline-none" />
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                            <input id="address" name="address" aria-label="Address" type="text" required placeholder="123 Main St" className="w-full p-2 border rounded focus:ring-black focus:border-black focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-black outline-none" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                <input id="city" name="city" aria-label="City" type="text" required className="w-full p-2 border rounded focus:ring-black focus:border-black focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-black outline-none" />
                            </div>
                            <div>
                                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                                <input id="zipCode" name="zipCode" aria-label="ZIP Code" type="text" required className="w-full p-2 border rounded focus:ring-black focus:border-black focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-black outline-none" />
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold mb-4 border-b pb-2">Payment</h3>
                            <div className="bg-gray-50 p-4 rounded text-sm text-gray-600 mb-4 border">
                                This is a demo application. No real payment will be processed. You can simply place the order.
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading || !user}
                            className={`w-full text-white font-bold py-3 px-4 rounded transition-colors ${
                                loading || !user ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800'
                            }`}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                                    Processing...
                                </span>
                            ) : (
                                !user ? 'Login to Place Order' : `Place Order - $${total.toFixed(2)}`
                            )}
                        </button>
                        {!user && (
                            <p className="text-sm text-red-500 text-center mt-2">
                                You must be <Link to="/login" className="underline font-bold">logged in</Link> to checkout.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
