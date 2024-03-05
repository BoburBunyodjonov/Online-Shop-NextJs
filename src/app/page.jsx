"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import Data from "../data/data";
import { Pagination, Typography } from "@mui/material";
import ProductCard from "@/components/ProductCard";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Header from "@/components/Header";
import Layout from "@/components/Layout";


const Home = () => {
  const [data, setData] = useState(Data);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8; // Number of items per page
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

  const cartDataLenght = JSON.parse(localStorage.getItem("cartData"));
  

  return (
    <>

    <Layout>
    <Header />
    <div className="container mx-auto shop_about p-5 pt-10">
        <p className="text-lg pt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida
          cursus adipiscing viverra at tortor, egestas odio parturient. Morbi ut
          lorem in erat. Et et molestie diam diam ultricies. Scelerisque duis
          diam ac cras dictum adipiscing. Venenatis at sit proin ut vitae
          adipiscing id facilisis.
        </p>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container py-24 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {currentPageData.map((clothes, index) => (
              <ProductCard 
              key={index} clothes={clothes} />
            ))}
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
    </Layout>
      

    </>
  );
};

export default Home;
