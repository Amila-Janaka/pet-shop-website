import React, { useState, useRef } from 'react';
import { IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef(null); // Reference for the timeout

    const openDropdown = () => {
        // Clear any existing timeout to prevent premature closing
        clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const closeDropdown = () => {
        // Only set a timeout to close if the dropdown is open
        if (isOpen) {
            timeoutRef.current = setTimeout(() => setIsOpen(false), 200); // Adjust delay as needed
        }
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            {/* Dropdown Button */}
            <button
                onClick={toggleDropdown}
                onMouseEnter={openDropdown} // Open on hover
                onMouseLeave={closeDropdown} // Close after delay on leave
                className="flex items-center space-x-1 focus:outline-none"
            >
                <IoPerson />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    className="absolute right-2 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                    onMouseEnter={openDropdown} // Keep open on hover in dropdown
                    onMouseLeave={closeDropdown} // Close after delay on leave
                >
                    <div className="py-1" role="menu" aria-orientation="vertical">
                        <Link to={"/login"}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                        >
                            Login / SingIn

                        </Link>
                        <Link to={""}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                        >
                            Why Create an Account?
                        </Link>
                        <Link to={""}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                        >
                            Track your orders
                        </Link>
                        <Link to={""}

                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                        >
                            Business Account
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
