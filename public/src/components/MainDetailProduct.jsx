export default function MainDetail() {
  return (
    <>
      <main className="p-10">
        <div className="space-y-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition flex items-center">
            <img
              src="https://th.bing.com/th?id=ORMS.fe100b47bbe0eecf4215344290d6f034&pid=Wdp&w=268&h=140&qlt=90&c=1&rs=1&dpr=1&p=0"
              alt="Ayam Geprek Pedas"
              className="w-48 h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-red-600">Ayam Geprek Sambal Bawang</h3>
              <hr className="h-px my-2 bg-gray-300 border-0" />
              <p className="text-gray-700 text-sm">
                Ayam geprek yang gurih dilumuri dengan sambal bawang super pedas, cocok bagi pencinta makanan pedas sejati. Disajikan dengan nasi
                hangat dan lalapan segar.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
