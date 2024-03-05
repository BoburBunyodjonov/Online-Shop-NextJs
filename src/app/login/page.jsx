"use client"

import Layout from "@/components/Layout";
import { useState } from "react"
import  Link  from "next/link"



const Login = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    if(!localStorage.getItem('registerData')) {
        window.location.href = '/register';
    }


    const LoginSubmit = (e) => {
        e.preventDefault();
        console.log(loginData);
        const login = JSON.parse(localStorage.getItem('registerData'));
        if (login.email !== loginData.email) {
          alert('Invalid Email');
        } else if (login.confirmPassword !== loginData.password) {
          alert('Invalid password');
        } else {
            localStorage.setItem("loginData", JSON.stringify(loginData));
            window.location.href = '/';
        }
      };

  return (
    <>
        <Layout>
        <div className="container mx-auto flex justify-center">
            <div className="login w-[40%] space-y-3 py-10">
                <h1 className="text-3xl font-semibold">Hello there</h1>
                <p className="text-lg">Please sign in or create account to continue</p>
                <h3 className="text-xl font-semibold">SIGN IN</h3><br />
                <form onSubmit={LoginSubmit}  action="" className=" space-y-2 w-[100%] flex flex-col ">
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setLoginData({...loginData, email: e.target.value})} className="outline-none rounded-md border p-3" type="email" name="email" id="email" />
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => setLoginData({...loginData, password: e.target.value})} className="outline-none rounded-md border p-3" type="password" name="password" id="password" />
                    <label htmlFor="check">
                    <input className="outline-none rounded-md border p-3" id="check" type="checkbox" name="" id="" /> Remeber my details</label><br />
                    <button type="submit" className="px-5 py-3 bg-[#ED165F] text-white">Sign In</button>
                </form><br />
                <Link href="/register" className=" cursor-pointer"> Or Create Account</Link>
            </div>
        </div>
        </Layout>
    </>


  )
}

export default Login