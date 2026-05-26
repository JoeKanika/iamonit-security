import { Link } from "react-router-dom";
import logo from "../assets/images/Iamonit-best.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaStar } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#06213b] text-white border-t-4 border-[#62c92a]">
      <section className="px-6 md:px-24 py-14 grid md:grid-cols-4 gap-12">
        <div>
          <img src={logo} alt="I Am On It Security Logo" className="w-24 object-contain mb-6" />
          <p className="text-white/70 leading-7">
            I Am On It Security Services and Protection, LLC — professional unarmed security solutions
            for commercial, residential, and institutional clients nationwide.
          </p>
          <div className="flex gap-2 text-[#62c92a] mt-6">
            {[1, 2, 3, 4, 5].map((s) => <FaStar key={s} />)}
            <span className="text-white/70 ml-3">Licensed & Bonded</span>
          </div>
        </div>

        <div>
          <h3 className="text-[#62c92a] tracking-[0.22em] font-bold mb-6 text-sm">OUR SERVICES</h3>
          <ul className="space-y-3 text-white/70">
            <li>• Unarmed Security Officers</li>
            <li>• Residential Community Patrol</li>
            <li>• Construction Site Security</li>
            <li>• Industrial & Warehouse Security</li>
            <li>• Event Security</li>
            <li>• Retail Loss Prevention</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#62c92a] tracking-[0.22em] font-bold mb-6 text-sm">QUICK LINKS</h3>
          <ul className="space-y-3 text-white/70">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/client-portal">Client Portal</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#62c92a] tracking-[0.22em] font-bold mb-6 text-sm">CONTACT US</h3>
          <ul className="space-y-5 text-white/80">
            <li className="flex gap-3"><FaPhoneAlt className="text-[#62c92a]" /> (202) 555-0192</li>
            <li className="flex gap-3"><FaEnvelope className="text-[#62c92a]" /> info@iamonitsecurity.com</li>
            <li className="flex gap-3"><FaMapMarkerAlt className="text-[#62c92a]" /> Serving Clients Nationwide</li>
          </ul>
        </div>
      </section>

      <div className="px-6 md:px-24 py-6 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between text-white/50 text-sm">
        <p>© 2026 I Am On It Security Services and Protection, LLC. All rights reserved.</p>
        <p>Licensed · Bonded · Insured · <span className="text-[#62c92a]">UNITED STATES</span></p>
      </div>
    </footer>
  );
}

export default Footer;