/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Search, User, ChevronDown } from 'lucide-react';

const Header = () => {
  const [activePath, setActivePath] = useState('/');
  const [activeDropdown, setActiveDropdown] = useState(null);

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
    { name: 'Living', path: '/living', hasDropdown: true },
    { name: 'Storage', path: '/storage', hasDropdown: true },
    { name: 'Dining', path: '/dining', hasDropdown: true },
    { name: 'Bedroom', path: '/bedroom', hasDropdown: true },
    { name: 'Matress', path: '/matress', hasDropdown: true, isHighlighted: true },
    { name: 'Study', path: '/study', hasDropdown: true },
    { name: 'Office', path: '/office', hasDropdown: true },
    { name: 'Outdoor', path: '/outdoor', hasDropdown: true },
  ];

  const handleNavClick = (path, name) => {
    setActivePath(path);
    setActiveDropdown(activeDropdown === name.toLowerCase() ? null : name.toLowerCase());
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
          <div className="flex-none">
            <img 
              src="https://s3-alpha-sig.figma.com/img/d7fb/35d1/0a5d5473989ba4ec575b8af8fe1f746c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n-vbAPQ05LmD8Nda2f2mGNfZTgj7C6YBEioDb~0ls1JxMZ5voB4rtvKkqDu8mDFa9VKS4X~28N4hO14wVLH-Aaips877QZP2jTVclw~oKbP2-R0Qz-NXaQES6jgHdYYG6XJTT31iOazUoRUpPb3Y9U-8~DwuxkzPZnq5SG3zOgqASsaIeiHiO7uId7sMl7jnpznKoyNk~F-lEI73oUHez4df0sd86oEDWzKWRAGY~oxiwQv2J5iJ3PZpHP3RN-~i7P29JdHP6US2hi4N-MOlhHADGHdxVYkiuJ~y4k1eyZUHYlLo-~TAMM1nHamq4uA7BPtgQPLwN19MZEeOlGHqOw__" 
              alt="Logo" 
              className="h-20 w-20 rounded-full"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center items-center mx-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group px-3"
              >
                <button
                  className={`flex items-center py-2 text-sm font-medium whitespace-nowrap
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
                    options={dropdownOptions[item.name.toLowerCase()]} 
                    isOpen={activeDropdown === item.name.toLowerCase()}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Right section */}
          <div className="flex-none flex items-center space-x-4">
            <button className="p-2 hover:text-gray-300">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 hover:text-gray-300">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;