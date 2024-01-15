import React from "react";

const Navbar = () => {
    return (
        <div className="border-b">
            <div className="container flex items-center justify-between p-5">
                <p className="text-white font-bold text-xl cursor-pointer">
                    TODO LIST
                </p>
                <div className="w-[20%] flex gap-1">
                    <p className="text-white font-bold underline text-md cursor-pointer">
                        Home
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
