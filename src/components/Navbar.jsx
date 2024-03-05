"use client";

import Image from "next/image";
import logo from "../images/Logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TextField } from "@mui/material";

// Material UI Icon
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Navbar = ({cartDataLenght}) => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Clothes", href: "/clothes" },
    { name: "Jewelery", href: "/jewelery" },
    { name: "Accessories", href: "/accessories" },
  ];

  const pathname = usePathname();


  /// Favorite Count
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const handleFavorite = (productId, isFavorite) => {
    if (isFavorite) {
      setFavoriteProducts((prevFavorites) => [...prevFavorites, productId]);
    } else {
      setFavoriteProducts((prevFavorites) =>
        prevFavorites.filter((id) => id !== productId)
      );
    }
  };

  return (
    <>
      <header className="text-black body-font flex justify-center py-4 bg-[#F5F5F5]">
        <div className="   container mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
          <nav className=" border-blue-500  flex  justify-center md:justify-center lg:justify-center xl:justify-center items-center text-base">
            <ul className="sm:flex w-[65%] mx-auto">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li
                    className={`px-6 py-3 text-center ${
                      isActive ? "border-b border-red-500" : ""
                    }`}
                    key={link.name}
                  >
                    <Link
                      href={link.href}
                      className={`font-semibold ${
                        isActive
                          ? "text-[#ED165F] space-y-3 mr-4"
                          : "text-black mr-4"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <a className="lg:w-[70px] lg:relative lg:left-[300px] flex justify-center xl:justify-center lg:justify-center order-first lg:order-none  title-font font-medium items-center text-gray-900 lg:items-center  mb-4 md:mb-0">
            <Image src={logo} width={70} height={70} />
          </a>
          <div className=" sm:justify-center sm:flex  text-center lg:justify-end  items-center">
            <div className="flex justify-center items-center px-5">
              <TextField
                id="filled-search"
                label="Search..."
                type="search"
                variant="filled"
                className="bg-white"
              />
              <SearchIcon className="hover:text-[#ED165F] ease-in-out duration-200 transition" />
            </div><br />
            <Link href="/register">
              <PersonIcon className="hover:text-[#ED165F] ease-in-out duration-200 transition ml-5" />
            </Link>
            <Link href="/cart" >
              <ShoppingCartIcon className="hover:text-[#ED165F] ease-in-out duration-200 transition ml-5" />
            </Link>
            <FavoriteIcon className="hover:text-[#ED165F] ease-in-out duration-200 transition ml-5" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
