import React from "react";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between bg-blaxk p-5 px-[10%] border">
            <p className="text-white font-bold text-xl cursor-pointer">
                TODO LIST
            </p>
            <div className="w-[20%] flex gap-1">
                <p className="text-white font-bold underline text-md cursor-pointer">
                    Home
                </p>
            </div>
        </div>
    );
};

export default Navbar;
