import React from "react";
import Navbar from "./Navbar";
import { Toaster } from "@/components/ui/toaster";
const Layout = ({ children }) => {
    return (
        <div>
            <Toaster />
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;
