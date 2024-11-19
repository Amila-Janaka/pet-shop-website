import React, { useState } from "react";
import LoginIcon from "../assets/image1.png"
import { IoEyeSharp } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";


const Login = () => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <section id="login">
            {/* <div className="mx-auto container p-6">

                <div className="bg-slate-800 p-6 m-6 w-full max-w-xl mx-auto border border-black rounded-md">
                    <div className="w-20 h-20 py-2 mx-auto">
                        <img src={LoginIcon} alt="login-icon" />
                    </div>

                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10">
                        <div className="grid">
                            <label className="block text-gray-700 text-sm font-bold">Email  </label>
                            <div className="bg-slate-100 my-2 rounded-md">
                                <input type="email" placeholder="Enter Your Email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-1">Password : </label>
                            <div className="flex items-baseline">
                                <input type={showPassword ? "text" : "password"} placeholder="Enter Your Password" className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none " />

                                <span className="text-xl px-2 cursor-pointer" onClick={() =>
                                    setShowPassword((preve) => !preve)
                                }>
                                    {
                                        showPassword ?
                                            (
                                                <IoMdEyeOff />
                                            )
                                            :
                                            (
                                                <IoEyeSharp />
                                            )
                                    }
                                </span>

                            </div>
                            <p className="mt-2 text-red hover:underline hover:text-red-400 ">
                                <Link to={"/forgotPassword"} >
                                    Forgot Password ?
                                </Link>
                            </p>

                        </div>
                        <div className="mt-2">
                            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded mx-auto block">
                                Login
                            </button>
                        </div>
                    </form>
                    <p className="text-white">Don't have account ?
                        <Link to={"/signIn"} className=" text-red-400 hover:text-red-700 hover:underline"> SingIn</Link>
                    </p>
                </div>

            </div> */}


            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img src={LoginIcon} alt="login-icon" className="w-40 h-40 mx-auto" />
                    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" action="#" method="POST">
                        <div>
                            <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
                            <div class="mt-2">
                                <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
                                <div class="text-sm">
                                    <Link to={"/forgotPassword"} class="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </Link>

                                </div>
                            </div>
                            <div class="mt-2 flex items-center">
                                <input id="password" name="password" type={showPassword ? "text" : "password"} autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
                                <span className="text-xl px-2 cursor-pointer" onClick={() =>
                                    setShowPassword((preve) => !preve)
                                }>
                                    {
                                        showPassword ?
                                            (
                                                <IoMdEyeOff />
                                            )
                                            :
                                            (
                                                <IoEyeSharp />
                                            )
                                    }
                                </span>
                            </div>
                        </div>

                        <div>
                            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <p class="mt-10 text-center text-sm/6 text-gray-500">
                        Not a member?
                        <Link to={"/signIn"} class="font-semibold text-indigo-600 hover:text-indigo-500"> Create Account</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Login;