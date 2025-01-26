import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center space-x-6">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <img
                src="https://th.bing.com/th/id/OIP.ETAbJA98jY8xjV2MmblhGwHaDt?w=349&h=174&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                alt="Spicy Food Logo"
                className="relative w-16 h-16 rounded-full object-cover transform group-hover:scale-105 transition duration-300"
              />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-wider">
                Spicy Haven
                <span className="block text-sm font-medium text-yellow-300 mt-1">Taste the Heat, Feel the Passion</span>
              </h1>
            </div>
          </div>
          
          <nav className="flex items-center space-x-8">
            <a 
              href="/" 
              className="text-white font-medium hover:text-yellow-300 transition-colors duration-200 flex items-center space-x-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
