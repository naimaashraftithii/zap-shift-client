import React from "react";
import { Link } from "react-router-dom";   // ✅ import Link from react-router-dom
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="inline-block">
      <div className="flex items-end">
        <img src={logo} alt="ZapShift logo" />
        <h3 className="text-3xl font-bold text-black -ms-2.5">ZapShift</h3>
      </div>
    </Link>
  );
};

export default Logo;
