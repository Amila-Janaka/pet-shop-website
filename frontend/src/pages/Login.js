import React, { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg"


const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    console.log(data, "Login data");

    return (
        <section id="login">
            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img src={logo} alt="login-icon" className="w-40 h-40 mx-auto rounded-xl" />
                    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                    <form class="space-y-6" onSubmit={handleSubmit}>
                        <div>

                            {/* email  */}
                            <label for="email" class="block text-sm/6 font-medium text-white">Email address</label>
                            <div class="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email here.."
                                    onChange={handleOnChange}
                                    value={data.email}
                                    autocomplete="email"
                                    required class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>

                            {/* password */}
                            <label for="password" class="block text-sm/6 font-medium text-white mt-4">Password</label>
                            <div class="mt-2 flex items-center">
                                <input
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password here.."
                                    onChange={handleOnChange}
                                    value={data.password}
                                    type={showPassword ? "text" : "password"}
                                    autocomplete="current-password"
                                    required class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                                <span className="text-xl px-2 cursor-pointer text-white" onClick={() =>
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
                            <Link to={"/forgotPassword"} class="mt-2 text-sm font-semibold text-yellow-500 hover:text-yellow-400 flex justify-end">
                                Forgot password?
                            </Link>
                        </div>

                        <div>
                            <button type="submit" class="flex w-full justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <p class="mt-8 text-center text-sm/6 text-gray-500">
                        Not a member?
                        <Link to={"/signIn"} class="font-semibold text-yellow-500 hover:text-yellow-400"> Create Account</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Login;