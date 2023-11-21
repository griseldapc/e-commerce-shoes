import React from "react";

export default function Navbar() {
  return (
    <nav className="p-10">
      <div className="container mx-auto flex items-center justify-between">
        <div>
        <img src="https://cdn-icons-png.flaticon.com/128/732/732084.png" className="w-16"></img>
        </div>
        <div className="flex justify-center gap-6 items-center">
          <a href="#" className="">New & Featured</a>
          <a href="#" className="">Men</a>
          <a href="#" className="">Women</a>
          <a href="#" className="">Kids</a>
          <a href="#" className="">Sale</a>
        </div>
        <div className="flex gap-7">
          <img src="https://cdn-icons-png.flaticon.com/128/622/622669.png" className="w-5"></img>
          <img src="https://cdn-icons-png.flaticon.com/128/151/151910.png" className="w-5"></img>
          <img src="https://cdn-icons-png.flaticon.com/128/1288/1288704.png" className="w-5"></img>
        </div>
      </div>
    </nav>
  );
};
