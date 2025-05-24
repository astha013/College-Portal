import React from "react";

const HeaderHeroSection = () => {
  return (
    <div className="w-full">
      {/* Top Orange Bar */}
      <div className="bg-[#f16c39] text-white flex justify-between px-4 py-1 text-sm">
        <div className="flex gap-2">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-youtube"></i>
        </div>
        <div className="flex gap-3 items-center">
          <button className="bg-[#0f3e45] text-white px-2 py-0.5 text-xs font-semibold rounded">Screen Reader</button>
          <span className="bg-white text-black px-1">A</span>
          <span className="bg-black text-white px-1">A</span>
          <span className="text-white">A- A A+</span>
        </div>
      </div>

      {/* Logo & University Info */}
      <div className="bg-white flex items-center justify-center gap-6 py-4 px-4 flex-wrap">
        <img src="/logo.png" alt="Logo" className="h-20" />
        <div className="text-center">
          <h1 className="text-xl md:text-3xl font-bold text-black">
            UNIVERSITY INSTITUTE OF TECHNOLOGY, RGPV
          </h1>
          <p className="text-sm md:text-base text-[#1e2a5a] mt-1">
            Constituent College of RGPV, NAAC "A" graded Technological University <br />
            Narsinghgarh By Pass Road Near Gandhi Nagar, Bhopal (M.P)
          </p>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#0f3e45] text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-around text-sm md:text-base">
          {["Home", "About Us", "Departments", "Admission", "Academics", "Examination", "Student Life", "Faculty", "Placement", "Contact us"].map((item, idx) => (
            <div key={idx} className="cursor-pointer hover:underline">
              {item}
            </div>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="relative h-[200px] bg-cover bg-center flex items-end"
        style={{ backgroundImage: "url('/hero-background.jpg')" }}
      >
        <div className="w-full text-center pb-10">
          <h1 className="text-white text-3xl font-bold">FACULTY _PROFILE</h1>
          <div className="mt-3 inline-block bg-[#0f3e45] px-4 py-1 text-white text-sm rounded">
            Home &nbsp; &gt; &nbsp; Faculty_Profile
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHeroSection;
