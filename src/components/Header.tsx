import React from "react";
import MainNavigation from "./MainNavigation";
import Logo from "./Logo";
import Line from "./Line";

export default function Header() {
  return (
    <div>
      <Line />
      <div className="flex flex-col justify-between md:flex-row md:items-start mb-6">
        <Logo />
        <MainNavigation />
      </div>
    </div>
  );
}


