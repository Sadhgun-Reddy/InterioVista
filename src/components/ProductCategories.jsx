import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductCategories = () => {
  const categories = [
    { name: "Living Room", icon: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800" },
    { name: "Dining", icon: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800" },
    { name: "Bedroom", icon: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800" },
    { name: "Office", icon: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800" },
    { name: "Storage", icon: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800" },
    { name: "Study Room", icon: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800" }
  ];

  const segments = [
    {
      title: "Residential",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
      alt: "Modern residential building"
    },
    {
      title: "Institutional",
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800",
      alt: "Classic institutional building"
    },
    {
      title: "Commercial",
      image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800",
      alt: "Modern commercial building"
    }
  ];

  const trendingProducts = [
    {
      id: 1,
      name: "Luxury Bed Set",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
      category: "luxury"
    },
    {
      id: 2,
      name: "Luxury Sofa Set",
      image: "https://evgorluxury.com/wp-content/uploads/2-196.jpg?v=1681339433",
      category: "luxury"
    },
    {
      id: 3,
      name: "Luxury Dining Table",
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
      category: "luxury"
    },
    {
      id: 4,
      name: "Luxury Bed Set",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
      category: "luxury"
    },
    {
      id: 5,
      name: "Elegant candle set",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
      category: "elegant"
    },
    {
      id: 6,
      name: "Elegant sofa set",
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800",
      category: "elegant"
    },
    {
      id: 7,
      name: "Fruit platter",
      image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800",
      category: "elegant"
    },
    {
      id: 8,
      name: "Elegant candle set",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
      category: "elegant"
    }
  ];

  return (
    <section className="max-w-[1920px] mx-auto px-6 pb-16 space-y-12">
      {/* Product Categories */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Product Categories</h2>
        
        <div className="relative">
          {/* Carousel Navigation Buttons */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 z-10">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 z-10">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="bg-gray-200 rounded-lg p-6 flex flex-col items-center justify-center aspect-square cursor-pointer hover:bg-gray-300 transition-colors"
              >
                <p className="font-medium text-center">{category.name}</p>
                <img 
                  alt={category.name}
                  src={category.icon}
                  className="w-16 h-16 mt-8"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Segments Section */}
      <div>
        <div className="bg-gray-200 rounded-lg p-4 mb-8">
          <h3 className="text-xl font-medium flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Segments
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img 
                src={segment.image}
                alt={segment.alt}
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                <h4 className="text-white text-2xl font-bold mb-4">{segment.title}</h4>
                <button className="bg-black text-white px-6 py-2 rounded-full w-fit">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-200 rounded-lg p-4 mb-8 mt-10">
            <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Trending products
            </h3>
            <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-300 rounded-full">
                <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-300 rounded-full">
                <ChevronRight className="w-5 h-5" />
                </button>
            </div>
            </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trendingProducts.map((product) => (
          <div 
            key={product.id}
            className="bg-gray-300 rounded-lg overflow-hidden group relative"
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Hover Overlay with Button */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-black text-white px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Enquire Now
                </button>
              </div>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-medium">{product.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;