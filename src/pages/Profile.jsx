import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';
import { useNavigate, Link } from 'react-router-dom';
import { Package, Calendar, DollarSign, LogOut, ExternalLink } from 'lucide-react';

const Profile = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }

        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await api.get('/api/orders', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setOrders(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching orders:', err);
                setError('Failed to load order history.');
                setLoading(false);
            }
        };

        fetchOrders();
    }, [user, navigate]);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <div className="animate-spin inline-block w-8 h-8 border-4 border-black border-t-transparent rounded-full" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-white shadow-sm rounded-lg p-6 mb-8 flex justify-between items-center border">
                <div>
                    <h1 className="text-2xl font-bold mb-1">My Profile</h1>
                    <p className="text-gray-600">Logged in as <span className="font-semibold">{user?.username}</span></p>
                </div>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 border border-red-500 text-red-500 hover:bg-red-50 font-medium py-2 px-4 rounded transition"
                >
                    <LogOut size={18} />
                    Logout
                </button>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Package className="text-black" />
                    Order History
                </h2>

                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6">
                        {error}
                    </div>
                )}

                {orders.length === 0 && !error ? (
                    <div className="bg-white border rounded-lg p-12 text-center shadow-sm">
                        <Package className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
                        <p className="text-gray-500 mb-6">When you place orders, they will appear here.</p>
                        <Link to="/products" className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {orders.map(order => (
                            <div key={order.id} className="bg-white border rounded-lg overflow-hidden shadow-sm">
                                {/* Order Header */}
                                <div className="bg-gray-50 border-b p-4 flex flex-wrap justify-between items-center gap-4">
                                    <div className="flex gap-6">
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold flex items-center gap-1">
                                                <Calendar size={14} /> Order Placed
                                            </p>
                                            <p className="text-sm font-medium">{new Date(order.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold flex items-center gap-1">
                                                <DollarSign size={14} /> Total
                                            </p>
                                            <p className="text-sm font-medium">${Number(order.totalAmount).toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">Order #</p>
                                        <p className="text-sm font-mono text-gray-600">{order.id.toString().padStart(6, '0')}</p>
                                    </div>
                                </div>

                                {/* Order Items */}
                                <div className="p-4">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className={`inline-block px-3 py-1 text-xs rounded-full font-semibold ${
                                            order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                            order.status === 'completed' ? 'bg-green-100 text-green-800' :
                                            'bg-gray-100 text-gray-800'
                                        }`}>
                                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                        </span>
                                    </div>

                                    <div className="divide-y">
                                        {order.items && order.items.map((item, index) => (
                                            <div key={index} className="py-4 flex gap-4 items-center">
                                                <div className="h-16 w-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                                                    {item.imageUrl ? (
                                                        <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover" />
                                                    ) : (
                                                        <div className="h-full w-full flex items-center justify-center text-gray-400">
                                                            <Package size={24} />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex-grow">
                                                    <Link to={`/products/${item.productId}`} className="font-medium text-blue-600 hover:underline flex items-center gap-1">
                                                        {item.name || `Product #${item.productId}`} <ExternalLink size={14} />
                                                    </Link>
                                                    <p className="text-sm text-gray-500 mt-1">Qty: {item.quantity}</p>
                                                </div>
                                                <div className="text-right font-medium">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
