import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import Card from "../../components/Card";

const Products = () => {
  const [jsonData, setJsonData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("products.json");
        const data = await response.json();
        setJsonData(data);
        setFilteredItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? jsonData
        : jsonData.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);
  };

  const showAll = () => {
    setFilteredItems(jsonData);
    setSelectedCategory("all");
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    let sortedItems = [...filteredItems];
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredItems(sortedItems);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12">
      <h2 className="text-3xl font-semibold capitalize text-center my-8">
        Explore Our Products
      </h2>

      {/* Filter and Sort */}
      <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
        <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
          <button
            onClick={showAll}
            className={`px-4 py-2 rounded-md border ${
              selectedCategory === "all"
                ? "bg-black text-white"
                : "bg-white text-black border-gray-300"
            } hover:bg-black hover:text-white transition-all`}
          >
            All Products
          </button>
          <button
            onClick={() => filterItems("Dress")}
            className={`px-4 py-2 rounded-md border ${
              selectedCategory === "Dress"
                ? "bg-black text-white"
                : "bg-white text-black border-gray-300"
            } hover:bg-black hover:text-white transition-all`}
          >
            Clothing
          </button>
          <button
            onClick={() => filterItems("Hoodies")}
            className={`px-4 py-2 rounded-md border ${
              selectedCategory === "Hoodies"
                ? "bg-black text-white"
                : "bg-white text-black border-gray-300"
            } hover:bg-black hover:text-white transition-all`}
          >
            Hoodies
          </button>
          <button
            onClick={() => filterItems("Bag")}
            className={`px-4 py-2 rounded-md border ${
              selectedCategory === "Bag"
                ? "bg-black text-white"
                : "bg-white text-black border-gray-300"
            } hover:bg-black hover:text-white transition-all`}
          >
            Bag
          </button>
          <button
            onClick={() => filterItems("Jewellery")}
            className={`px-4 py-2 rounded-md border ${
              selectedCategory === "Jewellery"
                ? "bg-black text-white"
                : "bg-white text-black border-gray-300"
            } hover:bg-black hover:text-white transition-all`}
          >
            Jewellery
          </button>
          <button
            onClick={() => filterItems("Makeup")}
            className={`px-4 py-2 rounded-md border ${
              selectedCategory === "Makeup"
                ? "bg-black text-white"
                : "bg-white text-black border-gray-300"
            } hover:bg-black hover:text-white transition-all`}
          >
            Makeup
          </button>
          <button
            onClick={() => filterItems("Watches")}
            className={`px-4 py-2 rounded-md border ${
              selectedCategory === "Watches"
                ? "bg-black text-white"
                : "bg-white text-black border-gray-300"
            } hover:bg-black hover:text-white transition-all`}
          >
            Watches
          </button>
          <button
            onClick={() => filterItems("Beverages & Foods")}
            className={`px-4 py-2 rounded-md border ${
              selectedCategory === "Beverages & Foods"
                ? "bg-black text-white"
                : "bg-white text-black border-gray-300"
            } hover:bg-black hover:text-white transition-all`}
          >
            Beverages & Foods
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="p-2 bg-black rounded-md">
            <FaFilter className="text-white h-4 w-4" />
          </div>
          <select
            id="sort"
            onChange={(e) => handleSortChange(e.target.value)}
            value={sortOption}
            className="bg-black text-white px-3 py-2 rounded-md border-none focus:outline-none"
          >
            <option value="default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
      </div>

      {/* Products Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Link to={`/product/${item.id}`} className="block relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity"></div>
            </Link>
            <div className="p-4 text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500 mb-4">{item.category}</p>
              <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all">
                ${item.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
