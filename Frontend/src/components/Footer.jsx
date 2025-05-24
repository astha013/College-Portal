import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f3e45] text-white text-sm mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6 bg-[#1a5a5c] text-white">
        {/* Examination */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Examination</h3>
          <ul className="space-y-2">
            {["Result", "Academic Calender", "Exam Time Table", "Schemes", "NCC Notice & Syllabus"].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span>&gt;</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Other Links</h3>
          <ul className="space-y-2">
            {["Photo Gallery", "Bus Information", "RTI", "Important Links", "Anti Ragging"].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span>&gt;</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Help & Support</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span>&gt;</span> NIRF Rank
            </li>
            <li className="flex items-center gap-2">
              <span>&gt;</span> Technical Support Call - 8989205805
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-white">
          <h3 className="text-lg font-semibold mb-3">Get in Touch With Us</h3>
          <div className="space-y-3 text-white text-sm">
            <div className="flex items-start gap-2">
              <i className="fas fa-map-marker-alt text-red-500 mt-1"></i>
              <span>Narsinghgarh By pass Road, Near Gandhi Nagar, Bhopal M.P</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-envelope text-red-500"></i>
              <span>uit_director@rgpv.ac.in</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-phone-alt text-red-500"></i>
              <span>+(91)-(755)-2678812</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-fax text-red-500"></i>
              <span>+(91)-(755)-2678819</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0f3e45] border-t border-white/10 text-center py-4 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 text-white">
          <span>© 2025 UIT–RGPV . All Rights Reserved</span>
          <span>Disclaimer / Privacy Policy / Sitemap</span>
          <span>Design and Developed by CSE Students</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
