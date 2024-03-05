import { Rating } from "@mui/material";
import Image from "next/image";
// import { useState, useEffect } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "next/link";
import React, { createContext, useContext, useState, useEffect } from "react";




const ProductCard = ({ clothes }) => {
    const [showButton, setShowButton] = useState(true);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
      const saveCart = JSON.parse(localStorage.getItem("cartData")) || [];
        saveCart.forEach((item) => {
            if(item.id === clothes.id) {
                setShowButton(false);
            }
        });
  }, []);

    const handleAddToCart = () => {
        if(localStorage.getItem('registerData')) {
          const existingCartData = JSON.parse(localStorage.getItem("cartData")) || [] ;
          existingCartData.push(clothes);
          localStorage.setItem("cartData", JSON.stringify(existingCartData));
          setCartData(existingCartData);
          setShowButton(false);
        }else {
          window.location.href = '/register';
        }
       
    }
    

  return (
    <div className="group hover:shadow-xl transition duration-300 ease-in-out" key={clothes.id}>
      <div className="relative overflow-hidden">
        <Image
          width={100}
          height={100}
          className="p-5 h-72 object-contain w-full"
          src={clothes.image}
          alt=""
        />
        <div className="absolute p-10 h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="text-center">
            {showButton ? (
              <button className="bg-white rounded text-black py-2 px-5" onClick={handleAddToCart}>
                Add to cart <ShoppingCartIcon />
              </button>
            ) : (
              <Link href="/cart" className="bg-white rounded text-black py-2 px-5">
                Cart <ShoppingCartIcon />
              </Link>
            )}
            <br />
            <button className="mt-5 p-3 rounded bg-white hover:text-red-500 text-red-500">
              <FavoriteBorderIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-2 mb-5 p-5 text-center space-y-5 items-center justify-between">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">
            {clothes.title.split(' ').slice(0, 5).join(' ')}
            
          </h5>
        </a>
        <p>
          <span className="text-3xl font-bold text-slate-900">{clothes.price}</span>
        </p>
        <div className="flex items-center w-2/3 mx-auto">
          <Rating name="read-only" value={clothes.rating.rate} readOnly />
          <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
            {clothes.rating.rate}
          </span>
        </div>
      </div>
    </div>
    
  );
};

export default ProductCard;
