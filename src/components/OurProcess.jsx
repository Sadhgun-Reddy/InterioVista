
const ProcessStep = ({ number, title, description, imageUrl, isRight = false }) => (
  <div className={`flex items-center gap-6 mb-12 ${isRight ? 'flex-row-reverse' : 'flex-row'}`}>
    <div className="w-32 h-32 flex-shrink-0">
      <img 
        src={imageUrl} 
        alt={`Step ${number}`}
        className="w-full h-full object-contain"
        loading="lazy" // ⚡ Bolt: Lazy load process step images
      />
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-bold mb-2">Step {number}: {title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const OurProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Select your dream model",
      description: "Identify the style that best suits your space and personality. From modern minimalism to classic elegance, choose what resonates with you.",
      imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
    },
    {
      number: 2,
      title: "Customize to your requirement",
      description: "Choose from a variety of premium materials such as rich woods, luxurious fabrics, and robust metals to complement your style.",
      imageUrl: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800"
    },
    {
      number: 3,
      title: "Order confirmation",
      description: "Accurate measurements ensure your furniture fits perfectly, maximizing space and functionality.",
      imageUrl: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800"
    },
    {
      number: 4,
      title: "Quality check",
      description: "Enjoy seamless delivery and professional installation services with every purchase.",
      imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800"
    },
    {
      number: 5,
      title: "Order processing",
      description: "Your order is carefully reviewed and processed to ensure all details are correct before moving forward.",
      imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800"
    },
    {
      number: 6,
      title: "Delivery",
      description: "Our commitment to quality ensures your satisfaction with every piece you choose.",
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
        {steps.map((step) => (
          <ProcessStep
            key={step.number}
            {...step}
            //isRight={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default OurProcess;