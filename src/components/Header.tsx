import React from "react";
import MainNavigation from "./MainNavigation";
import Logo from "./Logo";
import Line from "./Line";

export default function Header() {
  return (
    <div>
      <Line />
      <div className="flex flex-col justify-between md:flex-row md:items-center">
        <Logo />
        <MainNavigation />
      </div>
    </div>
  );
}
