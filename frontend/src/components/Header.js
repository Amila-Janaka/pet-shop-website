import React from "react";
import ImageComponent from "./Image";
import logo from "../assets/logo.jpeg"
import { CiSearch } from "react-icons/ci";
// import { FaRegUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import "./Components CSS/Header.css";



const Header = () => {
    return (
        <header className="header h-16 shadow-md bg-gray-700">
            <div className="h-full container-fluid mx-auto flex items-center px-10 justify-between">
                <div className="">
                    <Link to={"/"}>
                        <ImageComponent
                            src={logo}
                            alt="A cute pet"
                            className="pet-image"
                            style={{ width: '60px', height: '50px' }}
                        />
                    </Link>

                </div>

                <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-lg pl-2 ">
                    <input type="text" placeholder="Search Products Here..." className="w-full outline-none text-white bg-transparent" />
                    <div className="text-lg min-w-[50px] h-8 bg-gray-700 flex items-center justify-center rounded-r-full text-white">
                        <CiSearch />
                    </div>
                </div>

                

                <div className="flex gap-7">

                    {/* <div className="text-3xl cursor-pointer">
                        <FaRegUserCircle />
                    </div> */}


                    <div className="text-l cursor-pointer relative text-white hover:text-yellow-500">
                        <span>Explore</span>
                    </div>

                    <div className="text-l cursor-pointer relative text-white hover:text-yellow-500">
                        <span>For Business</span>
                    </div>

                    <div className="text-2xl cursor-pointer relative ">
                        <span className="text-white "><DropdownMenu /></span>

                        {/* <div className="px-3 py-1 rounded-full border text-black font-bold hover:bg-blue-100">
                            <Link to={"/login"}>Login</Link>
                        </div>
                        <div className="px-3 py-1 rounded-full border text-black font-bold hover:bg-blue-100">
                            <button>Register</button>
                        </div> */}

                    </div>

                    <div className="text-2xl cursor-pointer relative ">
                        <span className="text-white "><IoMdCart /></span>
                        <div className="bg-black-600 text-white w-4 h-4 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3 ">
                            <p className="text-sm">0</p>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header;