export default function Section({ search, handleSearch }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-red-700"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-5xl font-extrabold text-white mb-6 tracking-tight">
          Welcome to Spicy Paradise!
          <span className="block text-yellow-300 text-6xl mt-2">Where Flavor Meets Fire</span>
        </h2>

        <p className="text-xl text-white/90 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          Embark on a culinary journey through our carefully crafted spicy dishes. From mild tingles to intense heat, discover your perfect spice
          level and let your taste buds dance with joy.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        
        <input 
          type="search" 
          value={search}
          onChange={handleSearch}
          placeholder="Search for your favorite dish" 
          className="w-64 px-5 py-3 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
        />
      </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🌶️",
              title: "Customizable Heat",
              description: "Choose your preferred spice level from mild to extreme",
            },
            {
              icon: "👨‍🍳",
              title: "Master Chefs",
              description: "Expertly prepared dishes by seasoned spice specialists",
            },
            {
              icon: "🥘",
              title: "Fresh Ingredients",
              description: "Quality ingredients sourced daily for the best flavor",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
