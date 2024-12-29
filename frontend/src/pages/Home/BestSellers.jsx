
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const bestSellers = products.filter((item) => item.status === "Best Sellers");

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold capitalize mb-5">Best Sellers</h2>
        <p className="text-black/75 capitalize md:w-2/3 mx-auto">
          Discover top-selling items curated just for you. Shop and enjoy amazing deals!
        </p>
      </div>

      {/* Best Sellers Products */}
      <div className="mb-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {bestSellers.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="group bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <Link to={`/shop/${product.id}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-56 object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-all">
                        View Details
                      </button>
                    </div>
                  </div>
                </Link>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                    {product.title}
                  </h4>
                  <p className="text-sm text-gray-500 mb-4">{product.category}</p>
                  <button className="px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-full hover:bg-green-600 transition-all">
                    ${product.price}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSellers;
