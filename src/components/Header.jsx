import { useState } from 'react';
import { Search, User, ChevronDown, ShoppingCart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [activePath, setActivePath] = useState('/');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { user } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const dropdownOptions = {
    living: ['Sofas', 'Tables', 'Chairs', 'Decor'],
    storage: ['Cabinets', 'Shelves', 'Wardrobes', 'Organizers'],
    dining: ['Dining Sets', 'Tables', 'Chairs', 'Sideboards'],
    bedroom: ['Beds', 'Wardrobes', 'Nightstands', 'Dressers'],
    matress: ['Spring', 'Foam', 'Hybrid', 'Orthopedic'],
    study: ['Desks', 'Chairs', 'Bookshelves', 'Lamps'],
    office: ['Workstations', 'Chairs', 'Storage', 'Accessories'],
    outdoor: ['Sets', 'Chairs', 'Tables', 'Umbrellas'],
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Living', path: '/products?category=Living', hasDropdown: true },
    { name: 'Storage', path: '/products?category=Storage', hasDropdown: true },
    { name: 'Dining', path: '/products?category=Dining', hasDropdown: true },
    { name: 'Bedroom', path: '/products?category=Bedroom', hasDropdown: true },
    { name: 'Study', path: '/products?category=Study', hasDropdown: true },
    { name: 'Office', path: '/products?category=Office', hasDropdown: true },
    { name: 'Outdoor', path: '/products?category=Outdoor', hasDropdown: true },
  ];

  const handleNavClick = (path, name) => {
    setActivePath(path);
    setActiveDropdown(activeDropdown === name.toLowerCase() ? null : name.toLowerCase());
    navigate(path);
  };

  const Dropdown = ({ options, isOpen }) => {
    if (!isOpen) return null;

    return (
      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
        {options.map((option, index) => (
          <a
            key={index}
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            {option}
          </a>
        ))}
      </div>
    );
  };

  return (
    <header className="w-full bg-black text-white fixed top-0 left-0 right-0 z-50">
      <div className="w-full px-6">
        <div className="flex items-center justify-between h-16 max-w-[1920px] mx-auto">
          {/* Logo */}
          <Link to="/" aria-label="Go to homepage" className="flex-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-full">
            <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=150&h=150"
              alt="Logo" 
              className="h-12 w-12 rounded-full object-cover"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center items-center mx-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group px-3"
              >
                <button
                  className={`flex items-center py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-md px-2
                    ${activePath === item.path ? 'text-white' : 'text-gray-300 hover:text-white'}
                    ${item.isHighlighted ? 'text-blue-400' : ''}
                  `}
                  onClick={() => handleNavClick(item.path, item.name)}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown 
                      className={`ml-1 h-4 w-4 transition-transform duration-200 
                      ${activeDropdown === item.name.toLowerCase() ? 'rotate-180' : ''}`} 
                    />
                  )}
                </button>
                {item.hasDropdown && (
                  <Dropdown 
                    options={dropdownOptions[item.name.toLowerCase()] || []}
                    isOpen={activeDropdown === item.name.toLowerCase()}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Right section */}
          <div className="flex-none flex items-center space-x-4">
            <button aria-label="Search" className="p-2 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-md">
              <Search className="h-5 w-5" />
            </button>
            <div className="relative group">
              <Link to={user ? '/profile' : '/login'} aria-label="User profile" className="flex items-center p-2 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-md">
                <User className="h-5 w-5" />
              </Link>
              {user && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white text-black text-sm rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="px-4 py-2 border-b font-semibold truncate">Hello, {user.username}</div>
                    <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</Link>
                </div>
              )}
            </div>

            <Link to="/cart" aria-label="Shopping Cart" className="p-2 hover:text-gray-300 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-md">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
