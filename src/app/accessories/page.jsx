"use client"

import Navbar from "@/components/Navbar"
import ProductCard from "@/components/ProductCard"
import { Pagination } from "@mui/material"
import { useEffect, useState } from "react"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Layout from "@/components/Layout"



const Accessories = () => {
  const [data, setData] = useState([])
  const [url, setUrl] = useState("https://fakestoreapi.com/products/")

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
    },[url])


  // data.map((card) => {
  //   const item =  card.category === "men's clothing";
  //   if(item == true) {
  //     console.log(card);
  //   }
  // });
  

  const [page, setPage] = useState(1);
  const itemsPerPage = 9; // Number of items per page
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;

  const currentPageData = data.slice(startIndex, endIndex);

  const handleLinkClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Layout>
      <div className="w-[95%] mx-auto py-10">
        <h1 className="text-2xl font-semibold">Clothes</h1>

        <div className="w-full md:flex border">
          <div className="md:w-1/3 p-2">
            <h1 className="text-xl py-2">Category</h1>
            <div className="border-1 border-t mt-1 p-5">
              <ul>
                <li className="cursor-pointer hover:text-[#ed165f]">All</li>
                <li className="cursor-pointer hover:text-[#ed165f]">Electronics</li>
                <li className="cursor-pointer hover:text-[#ed165f]">Jewelery</li>
                <li className="cursor-pointer hover:text-[#ed165f]">Men's clothing</li>
                <li className="cursor-pointer hover:text-[#ed165f]">Women's clothing</li>
              </ul>
            </div>
            <h1 className="text-xl py-2">SIZE - EU/US</h1>
            <div className="border-1 border-t p-5">
              <ul className="grid grid-cols-3 gap-5">
                <button className="focus:bg-[#ED165F] focus:text-white hover:bg-red-400 hover:text-white border cursor-pointer p-2 text-center">
                  35
                </button>
                <button className="focus:bg-[#ED165F] focus:text-white hover:bg-red-400 hover:text-white border cursor-pointer p-2 text-center">
                  35
                </button>
                <button className="focus:bg-[#ED165F] focus:text-white hover:bg-red-400 hover:text-white border cursor-pointer p-2 text-center">
                  35
                </button>
                <button className="focus:bg-[#ED165F] focus:text-white hover:bg-red-400 hover:text-white border cursor-pointer p-2 text-center">
                  35
                </button>
                <button className="focus:bg-[#ED165F] focus:text-white hover:bg-red-400 hover:text-white border cursor-pointer p-2 text-center">
                  35
                </button>
                <button className="focus:bg-[#ED165F] focus:text-white hover:bg-red-400 hover:text-white border cursor-pointer p-2 text-center">
                  35
                </button>
                <button className="focus:bg-[#ED165F] focus:text-white hover:bg-red-400 hover:text-white border cursor-pointer p-2 text-center">
                  35
                </button>
                <button className="focus:bg-[#ED165F] focus:text-white hover:bg-red-400 hover:text-white border cursor-pointer p-2 text-center">
                  35
                </button>
                <button className="focus:bg-[#ED165F] focus:text-white hover:bg-red-400 hover:text-white border cursor-pointer p-2 text-center">
                  35
                </button>
              </ul>
            </div>
            <h1 className="text-xl py-2">Color</h1>
            <div className="border-1 border-t p-5">
              <ul className="grid grid-cols-3 gap-5">
                <button className="border cursor-pointer focus:bg-[#ED165F] focus:text-white hover:bg-red-400 hover:text-white p-2 flex justify-center items-center text-center">
                  <button className="p-3 bg-blue-500"></button>
                  <span class="ml-2">Blue</span>
                </button>
                <button className="border cursor-pointer focus:bg-[#ED165F] focus:text-white hover:bg-red-400 hover:text-white p-2 flex justify-center items-center text-center">
                  <button className="p-3 bg-black"></button>
                  <span class="ml-2">Black</span>
                </button>
                <button className="border cursor-pointer focus:bg-[#ED165F] focus:text-white hover:bg-red-400 hover:text-white p-2 flex justify-center items-center text-center">
                  <button className="p-3 bg-orange-500"></button>
                  <span class="ml-2">Orange</span>
                </button>
                <button className="border cursor-pointer focus:bg-[#ED165F] focus:text-white hover:bg-red-400 hover:text-white p-2 flex justify-center items-center text-center">
                  <button className="p-3 bg-green-500"></button>
                  <span class="ml-2">Green</span>
                </button>
                <button className="border cursor-pointer focus:bg-[#ED165F] focus:text-white hover:bg-red-400 hover:text-white p-2 flex justify-center items-center text-center">
                  <button className="p-3 bg-white border border-black"></button>
                  <span class="ml-2">White</span>
                </button>
                <button className="border cursor-pointer focus:bg-[#ED165F] focus:text-white hover:bg-red-400 hover:text-white p-2 flex justify-center items-center text-center">
                  <button className="p-3 bg-red-500"></button>
                  <span class="ml-2">Red</span>
                </button>
                <button className="border cursor-pointer focus:bg-[#ED165F] focus:text-white hover:bg-red-400 hover:text-white p-2 flex justify-center items-center text-center">
                  <button className="p-3 bg-purple-500"></button>
                  <span class="ml-2">Purple</span>
                </button>
              </ul>
            </div>
            <h1 className="text-xl py-2">Price</h1>
            <div className="border-1 border-t p-5">
              <ul className="">
                <form action="">
                <li className="p-2 flex justify-start items-center text-center">
                  <input name="price" className="w-5 h-5" type="checkbox" />
                  <span class="ml-2">$0 - $10,000</span>
                </li>
                <li className="p-2 flex justify-start items-center text-center">
                  <input name="price" className="w-5 h-5" type="checkbox" />
                  <span class="ml-2">$10,000 - $20,000</span>
                </li>
                <li className="p-2 flex justify-start items-center text-center">
                  <input name="price" className="w-5 h-5" type="checkbox" />
                  <span class="ml-2">$20,000 - $50,000</span>
                </li>
                <li className="p-2 flex justify-start items-center text-center">
                  <input name="price" className="w-5 h-5" type="checkbox" />
                  <span class="ml-2">$50,000 - 100,000</span>
                </li>
                <li className="p-2 flex justify-start items-center text-center">
                  <input name="price" className="w-5 h-5" type="checkbox" />
                  <span class="ml-2">$100,000 - 200,000</span>
                </li>
                <li className="space-x-3 p-2 flex justify-start items-center text-center">
                  <input placeholder="$" name="nubmer" className="border px-5 py-2 w-20" type="number" /> 
                  <span>to</span> 
                  <input placeholder="$" name="nubmer" className="border px-5 py-2 w-20" type="number" />
                  <button  className="px-5 py-2 bg-[#ED165F] text-white">Apply</button>
                </li>
                </form>
              </ul>
            </div>
          </div>
          <div className="md:w-2/3 p-2 relative">
            <div className="w-full flex justify-end">
              <select name="sortBy" id="sortBy" className="py-3 text-lg border">
                <option value="mostPopular">Most Popular</option>
                <option value="bestSelling">Best Selling</option>
              </select>
            </div>
            <section className="text-gray-600 body-font border">
                <div className="container py-24 mx-auto">
                  <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                  {currentPageData.map((clothes, index) => {
                      const item = clothes.category === "electronics";
                      if (item) {
                        console.log(clothes);
                        return <ProductCard key={index} clothes={clothes} />;
                      }
                    })}
                  </div> 
                </div>
              </section>
              <section className="container mx-auto flex items-center py-5">
          <div className="w-[90%] flex justify-center  text-center">
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChange}
              variant="outlined"
              shape="rounded"
              className="ml-28"
            />
          </div>
         <div className="w-[10%] flex justify-end">
         <a className="p-3 rounded border">
             <NavigateNextIcon onClick={handleLinkClick} className="rotate-[270deg] "/>
          </a>
         </div>

          
              </section>
          </div>
        </div>
      </div>
      </Layout>
    </>
  )
}

export default Accessories