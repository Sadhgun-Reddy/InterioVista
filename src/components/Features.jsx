/* eslint-disable react/prop-types */

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-300 p-8 rounded-lg">
    <div className="flex justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-950 font-semibold leading-relaxed">
      {description}
    </p>
  </div>
);

const VibrerFeatures = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 5v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2zm4 3h10v2H7V8zm0 4h10v2H7v-2z" />
        </svg>
      ),
      title: "500 + Collections",
      description: "Our journey begins with a comprehensive understanding of your unique style and space requirements."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
      ),
      title: "300 + Fabrics",
      description: "Our journey begins with a comprehensive understanding of your unique style and space requirements."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      ),
      title: "Top-notch Quality",
      description: "Our journey begins with a comprehensive understanding of your unique style and space requirements."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
      title: "Colour and Length customization",
      description: "Our journey begins with a comprehensive understanding of your unique style and space requirements."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 pb-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Vibrer Stands Out?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default VibrerFeatures;