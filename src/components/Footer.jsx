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
              src="https://s3-alpha-sig.figma.com/img/d7fb/35d1/0a5d5473989ba4ec575b8af8fe1f746c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n-vbAPQ05LmD8Nda2f2mGNfZTgj7C6YBEioDb~0ls1JxMZ5voB4rtvKkqDu8mDFa9VKS4X~28N4hO14wVLH-Aaips877QZP2jTVclw~oKbP2-R0Qz-NXaQES6jgHdYYG6XJTT31iOazUoRUpPb3Y9U-8~DwuxkzPZnq5SG3zOgqASsaIeiHiO7uId7sMl7jnpznKoyNk~F-lEI73oUHez4df0sd86oEDWzKWRAGY~oxiwQv2J5iJ3PZpHP3RN-~i7P29JdHP6US2hi4N-MOlhHADGHdxVYkiuJ~y4k1eyZUHYlLo-~TAMM1nHamq4uA7BPtgQPLwN19MZEeOlGHqOw__" 
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
                <img src="https://s3-alpha-sig.figma.com/img/3ab9/eeb0/e196ede389387ab9e06d10d71ce9b10e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LNTwUY4uSrRu2N7zb5JVUSxrebvHcRD16NWb6iCg~nP9UvpRlYMSof~ZUorH0ehgJFPOFR9wmDxuzdDoq-ez5fgNVVg4XdLzitmu5T~HKn1SS20Ox~ST5gis5Kp60DTVNn8OO8VgeNhOR3X0xIrGn8LXHEwdp~OFMluGXPRJMWsEeoU5PBpG93z45rOKcIaB4Lhk5CJA7Dw6BpLnPJL~VXfAzanIznxxRYq3EP1wi3JXo1i4oeKlBufOjH5IgKmaTu2PpmamU-KzrR91OaddMfoylzO8dibDAWYwRGh7p38g~QQx5H4w~EYAF5lKEmoP76bsyG7w0xMBCmtBRnmHcQ__" alt="payments"/>
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