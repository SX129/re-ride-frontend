import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";
import React from "react";

const RideInfo = () => {
  return (
    <>
      <div className="bg-black min-h-screen">
        <header className="">
          <Header />
        </header>
        <div>RideInfo</div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default RideInfo;
