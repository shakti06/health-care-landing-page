"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {HiFingerPrint,HiAtSymbol} from "react-icons/hi";

export default function Register(){
    const [visible,setVisible] = useState({password : false, cpassword: false});
    return(
        <section className="w-1/2 max-container flex flex-col items-center gap-10 mt-100 ">
            <div className="title pt-20 mb-4">
                <h1 className="text-3xl text-bold ">Register</h1>
            </div>

            <form className="flex flex-col gap-5">
                <div className="input-group">
                    <input type="email"
                    name="Email Address"
                    placeholder="Email Address"
                    className="input-text"/>
                    <span className="icon flex items-center px-4"><HiAtSymbol size={20}/></span>
                </div>

                <div className="input-group">
                    <input type="email"
                    name="email"
                    placeholder="Confirm Email Address"
                    className="input-text"/>
                    <span className="icon flex items-center px-4"><HiAtSymbol size={20}/></span>
                </div>

                <div className="input-group">
                    <input type="text"
                    name="Surname"
                    placeholder="Surname"
                    className="input-text"/>
                    <span className="icon flex items-center px-4"><HiAtSymbol size={20}/></span>
                </div>
                <div className="input-group">
                    <input type="text"
                    name="Given Name"
                    placeholder="Given Name"
                    className="input-text"/>
                    <span className="icon flex items-center px-4"><HiAtSymbol size={20}/></span>
                </div>

                <div className="input-group">
                    <input type="text"
                    name="Phone"
                    placeholder="Phone Number"
                    className="input-text"/>
                    <span className="icon flex items-center px-4"><HiAtSymbol size={20}/></span>
                </div>

                <div className="input-group">
                    <input type={`${visible.password ? "text" : "password"}`}
                    name="password"
                    placeholder="password"
                    className="input-text"
                    />
                    <span onClick ={() => setVisible({...visible, password : !visible.password})}  className="icon flex items-center px-4"><HiFingerPrint size={20}/></span>

                </div>

                <div className="input-group">
                    <input type={`${visible.cpassword ? "text" : "password"}`}
                    name="Confirm Password"
                    placeholder="Confirm Password"
                    className="input-text"
                    />
                    <span onClick ={() => setVisible({...visible, cpassword : !visible.cpassword})}  className="icon flex items-center px-4"><HiFingerPrint size={20}/></span>

                </div>

                <p className="text-center mt-4">
                  <input type="checkbox" className="mr-4"/>
                    I accept the Security Notice and Terms of Use of this service
               </p>
                <div className="input-button">
                    <button type="submit" className="btn-blue btn-form hover:bg-white hover:text-black">Submit</button>
                </div>
            </form>
           
        </section>
    )
}