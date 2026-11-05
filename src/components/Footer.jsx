/* eslint-disable react/no-unescaped-entities */

const Footer = () => {
  const links = {
    mainLinks: [
      { title: 'Home', href: '#' },
      { title: 'Living', href: '#' },
      { title: 'Storage', href: '#' },
      { title: 'Dining', href: '#' },
      { title: 'Bedroom', href: '#' },
      { title: 'Mattress', href: '#' },
      { title: 'Study', href: '#' },
      { title: 'Office', href: '#' },
      { title: 'Outdoor', href: '#' }
    ],
    projectTypes: [
      { title: 'Residential', href: '#' },
      { title: 'Institutional', href: '#' },
      { title: 'Commercial', href: '#' }
    ]
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Description Column */}
          <div className="md:col-span-4 ">
            <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=150&h=150"
              alt="United Buildpro Logo" 
              className="w-24 h-24 mb-6"
            />
            <p className="text-sm leading-relaxed mb-6">
              Your dream space deserves the best execution, and that's where United Buildpro Pvt. Ltd excels. Our construction services encompass everything from foundational work to structural builds, tailored to residential, commercial, and industrial needs. We pride ourselves on using high-quality materials and advanced techniques to ensure durability and efficiency in every project we undertake.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80">
                <img src="https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Instagram-logo-transparent-PNG.png" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80">
                <img src="https://image.similarpng.com/very-thumbnail/2021/01/Black-linkedin-logo-design-on-transparent-background-PNG.png" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          

          <div className="md:col-span-4 ml-96">
            <ul className="space-y-2">
              {links.mainLinks.map((link) => (
                  <li key={link.title}>
                  <a href={link.href} className="text-sm hover:text-gray-300">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Types */}
          <div className="md:col-span-4 ml-60">
            <ul className="space-y-2">
              {links.projectTypes.map((link) => (
                  <li key={link.title}>
                  <a href={link.href} className="text-sm hover:text-gray-300">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
              

        {/* Copyright and Payment Methods */}
        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-col justify-between items-center space-y-4 md:space-y-0">
            <div>
                <p className="text-sm text-gray-400">
                    2024 © All rights reserved - Cozy Comfort
                </p>
            </div>
            <div className="flex space-x-4">
                <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800" alt="payments"/>
              {/* <img src="/visa.png" alt="Visa" className="h-8" />
              <img src="/mastercard.png" alt="Mastercard" className="h-8" />
              <img src="/maestro.png" alt="Maestro" className="h-8" />
              <img src="/paypal.png" alt="PayPal" className="h-8" />
              <img src="/google-pay.png" alt="Google Pay" className="h-8" /> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;