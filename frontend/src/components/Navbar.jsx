import React from "react";

function Navbar() {
  return (
    <>
      <div className="w-full mx-auto px-6 py-3 md:px-40 shadow-lg h-16 fixed top-0 left-0 z-50">
        <div className="flex justify-between">
          <h1 className="text-2xl text-white cursor-pointer font-bold">
            Word<span className="text-3xl text-blue-600">To</span>PDF
          </h1>
        </div>
      </div>
    </>
  );
}

export default Navbar;
