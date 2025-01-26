export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-800 via-red-700 to-red-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Spicy Haven</h3>
            <p className="text-red-200 text-sm">
              Bringing the heat to your plate since 2025. Experience the perfect blend of spice and flavor.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Menu', 'About Us', 'Locations', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-red-200 hover:text-yellow-300 transition-colors duration-200 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Opening Hours</h3>
            <ul className="space-y-2 tt-sm text-red-200">
              <li>Monday - Friday: 10:00 - 22:00</li>
              <li>Saturday: 11:00 - 23:00</li>
              <li>Sunday: 11:00 - 21:00</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bolexd text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
                { icon: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" },
                { icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-300 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={social.icon}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-red-600/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-red-200">
              2025 Spicy Haven. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-red-200 hover:text-yellow-300 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
