"use client"

import Layout from "@/components/Layout";
import Image from "next/image"
import { useEffect, useState } from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Cart = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("cartData"));
        if (storedData) {
            setProducts(storedData);
        }
    }, []);

    console.log(products);
      // Function to remove item from the cart
      const handleRemoveItem = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
        localStorage.setItem("cartData", JSON.stringify(updatedProducts));
    };


    const calculateTotalPrice = () => {
        let totalPrice = 0;
        products.forEach((product) => {
            totalPrice += parseFloat(product.price);
        });
        return totalPrice.toFixed(2); // Optionally, you can round the total price to two decimal places
    };

    

    return(
        <>
        
        <Layout>
        <section class="py-24 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">

            <h2 class="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart
            </h2>
            <div class="hidden lg:grid grid-cols-2 py-6">
                <div class="font-normal text-xl leading-8 text-gray-500">Product</div>
                <p class="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                    <span class="w-full max-w-[260px] text-center">Quantity</span>
                    <span class="w-full max-w-[200px] text-center">Total</span>
                </p>
            </div>
            {products.map((data, index) => (
                <div key={index}>
                    <div class="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                <div
                    class="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                    <div class="img-box">
                        <Image src={data.image} alt="perfume bottle image" width={200} height={200} class="xl:w-[140px]" />

                        </div>
                    <div class="pro-data w-full max-w-sm ">
                        <h5 class="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                            {data.title}
                        </h5>
                    
                        <h6 class="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">${data.price}</h6>
                    </div>
                </div>
                <div
                    class="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                    
                    <div class="flex items-center w-full mx-auto justify-center">
                       
                    <input
  type="number"
  className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
  placeholder="1"
/>
                       
                    </div>
                    <h6
                        class="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                        ${data.price}</h6>
                </div>
                <button className="text-red-600 mt-4 lg:mt-0" onClick={() => handleRemoveItem(index)}>
                  <HighlightOffIcon/>
                    Remove</button>
            </div>
                </div>
            ))}

            
            
            <div class="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
                <div class="flex items-center justify-between w-full py-6">
                    <p class="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
                    <h6 class="font-manrope font-medium text-2xl leading-9 text-indigo-500">${calculateTotalPrice()}</h6>
                </div>
            </div>
            <div class="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
                <button
                    class="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
                    <span class="px-2 font-semibold text-lg leading-8 text-indigo-600">Continue Shopping</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998" stroke="#4F46E5" stroke-width="1.6"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <button
                    class="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">Continue
                    to Payment
                    <svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                        fill="none">
                        <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" stroke-width="1.6"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
         </section>
        </Layout>
                                            
    </>
  )
}

export default Cart