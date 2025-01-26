import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Section from "../components/Section";

export default function Main() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [sort, setSort] = useState("");
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const getPagination = () => {
    let temp = [];
    for (let i = 1; i <= totalPage; i++) {
      temp.push(i);
    }
    return temp;
  };

  const pagination = getPagination();

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const sortOptions = [
    { value: "", label: "Default" },
    { value: "asc", label: "Price Low to High" },
    { value: "desc", label: "Price High to Low" },
  ];

  async function fetchData() {
    try {
      setLoading(true);
      let response = `https://h8-phase2-gc.vercel.app/apis/pub/restaurant-app/cuisines?q=${search}&i${selectedCategory}&limit=10&page=${currentPage}`;
      if (sort) {
        response += `&sort=${sort}`;
      }

      if (selectedCategory) {
        response += `&i=${selectedCategory}`;
      }

      console.log(categories, '<<<<<<<<<<<<<<<<<<<<<<, ini di fetch data');

      const { data } = await axios.get(response);

      if (data?.data?.query) {
        setData(data.data.query);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("API Error:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  }

  async function fetchCategories() {
    try {
      const { data } = await axios.get("https://h8-phase2-gc.vercel.app/apis/pub/restaurant-app/categories");
      setCategories(data?.data)
      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [ search,selectedCategory, sort, currentPage]);
  
  useEffect(() => {
    fetchCategories();
  }, []);
  

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  
  const handleDetailClick = (id) => {
    navigate(`/${id}`);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Section search={search} handleSearch={handleSearch} />

      {/* Dropdown Filter and Sort */}
      <div className="flex justify-between p-4">
        {/* Sort Dropdown */}
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="px-4 py-2 border rounded-md">
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Filter Dropdown */}
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
           className="px-4 py-2 border rounded-md">
          <option value="">Select Category</option>
          {categories.map((category) => (
            console.log(category.name, '<<<<<<<<<<<<<<<<<<<<<<, ini di map categories'),
            <option  key={category.id} value={category.name} >
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-600"></div>
        </div>
      ) : data.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <svg className="w-20 h-20 text-red-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h1 className="text-2xl font-semibold text-gray-800">No menu items available</h1>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              <span className="block">Our Delicious</span>
              <span className="block text-red-600">Menu Selection</span>
            </h1>
            <p className="mt-4 text-xl text-gray-500">Discover our carefully curated dishes made with love</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
                    onClick={() => handleDetailClick(item.id)}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">{item.name}</h3>
                  <div className="w-16 h-1 bg-red-600 mb-4 transform origin-left group-hover:scale-x-150 transition-transform duration-300"></div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
                  <button
                    onClick={() => handleDetailClick(item.id)}
                    className="inline-flex items-center px-4 py-2 border border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    View Details
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className="join mt-6">
                    <button
                      className="join-item btn bg-[#8B4513] text-white hover:bg-[#A0522D]"
                      onClick={handlePrev}
                      disabled={currentPage === 1}
                    ></button>
                    {pagination.map((el) => (
                      <button
                        key={el}
                        className={
                          el === currentPage
                            ? "join-item btn btn-active bg-[#A0522D] text-white"
                            : "join-item btn bg-[#8B4513] text-white hover:bg-[#A0522D]"
                        }
                        onClick={() => setCurrentPage(el)}
                      >
                        {el}
                      </button>
                    ))}
                    <button
                      className="join-item btn bg-[#8B4513] text-white hover:bg-[#A0522D]"
                      onClick={handleNext}
                      disabled={currentPage === totalPage}
                    ></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
