
const AboutSection = () => {
  const features = [
    {
      title: "Inspired Living",
      description: "Discover furniture that combines modern elegance with everyday comfort, crafted to make your home a reflection of your unique style."
    },
    {
      title: "Exceptional Savings",
      description: "By bridging the gap between you and trusted furniture makers, we bring you stunning pieces at prices that fit your budget."
    },
    {
      title: "Easy Shopping",
      description: "From quick browsing to fast delivery and easy assembly, we simplify every step of finding and enjoying your perfect furniture."
    },
    {
      title: "Sustainable Options",
      description: "Choose from sustainable furniture options crafted with the planet in mind—because style should never come at the cost of the environment."
    }
  ];

  return (
    <section className="max-w-full mx-auto px-32 mt-10">
      {/* About Us Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-6">About us</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Discover the epitome of luxury living with our exclusive furniture collection. Each piece is meticulously crafted to bring sophistication and elegance to your home.
        </p>
      </div>

      {/* Features and Images Grid */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Features Column */}
        <div className="flex-1 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {features.map((feature, index) => (
              <div key={index} className="max-w-sm">
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Images Grid - Corrected Layout */}
        <div className="flex-1">
          <div className="grid grid-cols-12 gap-4 h-full">
            {/* First row */}
            <div className="col-span-4">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
                alt="Living room with wall art"
                className="w-full h-60 object-cover rounded-lg"
                loading="lazy" // ⚡ Bolt: Lazy load gallery images
              />
            </div>
            <div className="col-span-8">
              <img
                src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800"
                alt="Bedroom interior"
                className="w-full h-60 object-cover rounded-lg"
                loading="lazy"
                />
            </div>
            
            {/* Second row */}
            <div className="col-span-8">
              <img
                src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800"
                alt="Modern living room"
                className="w-full h-60 object-cover rounded-lg"
                loading="lazy"
                />
            </div>
            <div className="col-span-4">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800"
                alt="Bedroom design"
                className="w-full h-60 object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;