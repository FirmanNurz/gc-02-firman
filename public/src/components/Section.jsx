export default function Section() {
  return (
    <>
      <section className="bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Selamat Datang di Surga Rasa Pedas!</h2>
        <p className="text-xl font-light max-w-xl mx-auto">
          Nikmati sensasi makanan pedas yang menggoda dengan berbagai pilihan menu spesial hanya di sini.
        </p>
        <button className="mt-6 px-8 py-3 bg-white text-red-600 font-bold rounded-lg shadow-lg hover:bg-yellow-400 hover:text-white transition">
          Jelajahi Menu
        </button>
      </section>
    </>
  );
}
