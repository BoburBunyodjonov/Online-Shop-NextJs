"use client"

import Footer from "@/components/Footer"
import Layout from "@/components/Layout"
import Navbar from "@/components/Navbar"
import { useState } from "react"


const Register = () => {

    const [registerData, setRegisterData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        createPassword: "",
        confirmPassword: ""
    });

    const RegiterSubmit = (e) => {
        e.preventDefault();
        console.log(registerData);
        if(registerData.confirmPassword !== registerData.createPassword) {
            alert("Password is incorrect");
        }else {
            localStorage.setItem("registerData", JSON.stringify(registerData));
            alert("Success You have registered")
            setRegisterData({
                firstName: '',
                lastName: '',
                email: '',
                createPassword: '',
                confirmPassword: '',
            });
            window.location.href = '/';
        }
        
    }

  return (
    <>
        <Layout>
        <div className="container mx-auto flex justify-center">
            <div className="register space-y-3 py-16 "><br /><br />
                <h3 className="text-xl font-semibold">CREATE ACCOUNT</h3><br />
                <form onSubmit={RegiterSubmit} action="" className="space-y-3 w-[80%] flex flex-col">
                    <label htmlFor="firstName">First Name</label>
                    <input value={registerData.firstName} onChange={(e) => setRegisterData({...registerData, firstName: e.target.value})} className="rounded-md border p-3 outline-none" type="text" name="" id="firstName" />
                    <label htmlFor="lastName">Last Name</label>
                    <input value={registerData.lastName} onChange={(e) => setRegisterData({...registerData, lastName: e.target.value})} className="rounded-md border p-3 outline-none" type="text" name="" id="lastName" />
                    <label htmlFor="email">Email</label>
                    <input value={registerData.email} onChange={(e) => setRegisterData({...registerData, email: e.target.value})} className="rounded-md border p-3 outline-none" type="text" name="" id="email" />
                    <label htmlFor="createpassword">Create Password</label>
                    <input value={registerData.createPassword} onChange={(e) => setRegisterData({...registerData, createPassword: e.target.value})} className="rounded-md border p-3 outline-none" type="text" name="" id="createpassword" />
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input value={registerData.confirmPassword} onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})} className="rounded-md border p-3 outline-none" type="text" name="" id="confirmpassword" />
                   
                    <label htmlFor=""> 
                    <input className="rounded-md border p-3 outline-none" type="checkbox" name="" id="" /> I want to receive Safari newsletters with the best deals 
                        and offers</label><br />
                    <button type="submit" className="px-5 py-3 bg-[#ED165F] text-white">CREATE ACCOUNT</button>
                </form>
            </div>
        </div>
        </Layout>
    </>


  )
}

export default Register