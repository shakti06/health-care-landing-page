"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {HiFingerPrint,HiAtSymbol} from "react-icons/hi";
import { useFormik } from "formik";

export default function Login(){
    const [visible,setVisible] = useState(false);
    const formik = useFormik({
        initialValues:{
            email :'',
            password : ''
        },
        onSubmit 
    })
    async function onSubmit(values :any) {
        console.log(values);
    }

    async function GoogleSignIn(){
        signIn('google', {callbackUrl : 'http://localhost:3000'})
    }
    return(
        <section className="w-1/2 max-container flex flex-col items-center gap-10 mt-100 ">
            <div className="title pt-20 mb-4">
                <h1 className="text-3xl text-bold ">Login</h1>
            </div>

            <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
                <div className="input-group">
                    <input type="email"
                    name="email"
                    placeholder="email"
                    className="input-text"
                    onChange={formik.handleChange}
                    value={formik.values.email}/>
                    <span className="icon flex items-center px-4"><HiAtSymbol size={20}/></span>
                </div>

                <div className="input-group">
                    <input type={`${visible ? "text" : "password"}`}
                    name="password"
                    placeholder="password"
                    className="input-text"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    />
                    <span onClick ={() => setVisible(!visible)}  className="icon flex items-center px-4"><HiFingerPrint size={20}/></span>

                </div>

                <div className="input-button">
                    <button type="submit" className="btn-blue btn-form hover:bg-white hover:text-black">Submit</button>
                </div>

                <div className="input-button" >
                    <button type="button" className="custom-button btn-form" onClick={GoogleSignIn}>
                        Sign In with Google <Image src="/google.svg" alt="google pic" width={25} height={25}/>
                    </button>
                </div>

                <div className="input-button">
                    <button type="button" className="custom-button btn-form">
                        Sign In with Facebook <Image src="/facebook.svg" alt="fb pic" width={25} height={25}/>
                    </button>
                </div>
            </form>
            <p className="text-center mb-8">Don't have an account yet ? <Link className="px-2 text-blue-700 hover:text-black cursor-pointer" href={"/register"}>Sign Up</Link></p>
        </section>
    )
}