export default function Header() {
  return (
    <>
      <header className="bg-red-600 text-white p-5 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://th.bing.com/th/id/OIP.ETAbJA98jY8xjV2MmblhGwHaDt?w=349&h=174&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="logo"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h1 className="text-3xl font-extrabold tracking-wide">Makanan Pedas</h1>
            <p className="text-lg font-light italic">Bikin Makan Jadi Lebih Berwarna</p>
          </div>
        </div>
        <nav className="flex space-x-6 text-lg font-semibold">
          <a href="#" className="hover:text-yellow-400">
            Home
          </a>
          <a href="#" className="hover:text-yellow-400">
            Login
          </a>
        </nav>
      </header>
    </>
  );
}
