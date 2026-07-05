import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const processSteps = [
    ["01", "Submit Your Request", "Fill out the form with your security needs and contact info."],
    ["02", "Free Consultation", "We’ll contact you to discuss your requirements in detail."],
    ["03", "Custom Security Plan", "Receive a tailored proposal with transparent pricing."],
    ["04", "Deployment", "We deploy your security team on time, every time."],
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);
    formData.append("access_key", "80e9711b-c38f-4279-93c5-378095829bdf");
    formData.append("subject", "New Security Assessment Request - IAMONIT");
    formData.append("from_name", "IAMONIT Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#06213b] text-white">
      <Navbar />

      <section className="px-6 md:px-20 py-24 bg-[#06213b]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="animate-slide-left">
            <p className="flex items-center gap-4 text-[#62c92a] font-bold tracking-[0.3em] text-xs uppercase">
              <span className="w-10 h-[1px] bg-[#62c92a]" />
              Get In Touch
            </p>

            <h1 className="heading-font text-6xl md:text-8xl font-bold leading-[0.95] mt-7">
              REQUEST A <br />
              <span className="text-[#62c92a]">FREE ASSESSMENT</span>
            </h1>

            <p className="text-lg md:text-xl text-white/75 leading-8 mt-8 max-w-2xl">
              Tell us about your security needs. We’ll respond within one
              business day with a tailored plan and transparent pricing.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-9 max-w-2xl">
              {[
                "Licensed & Bonded",
                "Background-Checked Officers",
                "24/7 Dispatch Available",
                "Free Security Assessment",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/75">
                  <FaCheckCircle className="text-[#62c92a]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#031421] border border-[#62c92a]/20 p-8 md:p-10 shadow-2xl animate-fade-up">
            <h2 className="heading-font text-4xl font-bold">
              FAST RESPONSE. CLEAR PLAN.
            </h2>
            <p className="text-white/60 mt-4 leading-7">
              Share your details and we’ll help identify the right security
              coverage for your property, business, or event.
            </p>

            <div className="mt-8 grid gap-5">
              <div className="flex gap-4">
                <FaPhoneAlt className="text-[#62c92a] mt-1" />
                <div>
                  <p className="font-bold">(253) 420-3126 or (206) 730-9793</p>
                  <p className="text-white/50 text-sm">Main line — 24/7 urgent inquiries</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="text-[#62c92a] mt-1" />
                <div>
                  <p className="font-bold">info@iamonits.com</p>
                  <p className="text-white/50 text-sm">Quotes and general inquiries</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaClock className="text-[#62c92a] mt-1" />
                <div>
                  <p className="font-bold">Response Time</p>
                  <p className="text-white/50 text-sm">Quote requests answered within 1 business day</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-[#62c92a] mt-1" />
                <div>
                  <p className="font-bold">Service Area</p>
                  <p className="text-white/50 text-sm">Serving clients nationwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="quote-form"
        className="bg-[#eef5ff] text-[#06213b] px-6 md:px-20 py-24 scroll-mt-32"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.3fr_0.8fr] gap-14">
          <form
            className="bg-white border border-gray-200 shadow-xl p-8 md:p-12"
            onSubmit={handleSubmit}
          >
            <input type="checkbox" name="botcheck" className="hidden" />

            <div className="mb-10">
              <p className="text-[#62c92a] tracking-[0.25em] text-xs font-bold uppercase">
                01 — Contact Information
              </p>
              <div className="h-px bg-gray-200 mt-5" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[#06213b]/60 text-xs tracking-[0.2em] uppercase font-bold mb-2">
                  Full Name *
                </label>
                <input
                  required
                  name="full_name"
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full bg-transparent border-b border-gray-300 py-4 outline-none focus:border-[#62c92a]"
                />
              </div>

              <div>
                <label className="block text-[#06213b]/60 text-xs tracking-[0.2em] uppercase font-bold mb-2">
                  Organization
                </label>
                <input
                  name="organization"
                  type="text"
                  placeholder="Company or venue name"
                  className="w-full bg-transparent border-b border-gray-300 py-4 outline-none focus:border-[#62c92a]"
                />
              </div>

              <div>
                <label className="block text-[#06213b]/60 text-xs tracking-[0.2em] uppercase font-bold mb-2">
                  Email Address *
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full bg-transparent border-b border-gray-300 py-4 outline-none focus:border-[#62c92a]"
                />
              </div>

              <div>
                <label className="block text-[#06213b]/60 text-xs tracking-[0.2em] uppercase font-bold mb-2">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="(202) 555-0000"
                  className="w-full bg-transparent border-b border-gray-300 py-4 outline-none focus:border-[#62c92a]"
                />
              </div>
            </div>

            <div className="mt-12 mb-8">
              <p className="text-[#62c92a] tracking-[0.25em] text-xs font-bold uppercase">
                02 — Security Needs
              </p>
              <div className="h-px bg-gray-200 mt-5" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[#06213b]/60 text-xs tracking-[0.2em] uppercase font-bold mb-2">
                  Industry Type *
                </label>
                <select
                  required
                  name="industry_type"
                  className="w-full bg-transparent border-b border-gray-300 py-4 outline-none focus:border-[#62c92a]"
                >
                  <option value="">Select industry</option>
                  <option>Commercial Property</option>
                  <option>Residential Community</option>
                  <option>Construction Site</option>
                  <option>Event / Venue</option>
                  <option>Retail / Loss Prevention</option>
                  <option>School / University</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[#06213b]/60 text-xs tracking-[0.2em] uppercase font-bold mb-2">
                  Service Type *
                </label>
                <select
                  required
                  name="service_type"
                  className="w-full bg-transparent border-b border-gray-300 py-4 outline-none focus:border-[#62c92a]"
                >
                  <option value="">Select service</option>
                  <option>Unarmed Security Officers</option>
                  <option>Mobile Patrol Services</option>
                  <option>Event Security</option>
                  <option>Loss Prevention</option>
                  <option>Standing Post / Fixed Guard</option>
                  <option>Corporate & Campus Security</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>
            </div>

            <div className="mt-12 mb-8">
              <p className="text-[#62c92a] tracking-[0.25em] text-xs font-bold uppercase">
                03 — Additional Details
              </p>
              <div className="h-px bg-gray-200 mt-5" />
            </div>

            <div>
              <label className="block text-[#06213b]/60 text-xs tracking-[0.2em] uppercase font-bold mb-2">
                Tell Us More About Your Needs
              </label>
              <textarea
                name="message"
                rows="6"
                placeholder="Property size, number of locations, event dates, specific concerns..."
                className="w-full bg-transparent border-b border-gray-300 py-4 outline-none focus:border-[#62c92a] resize-none"
              />
            </div>

            {status === "success" && (
              <p className="mt-6 text-[#62c92a] font-bold">
                Thank you! Your request has been sent. We’ll contact you shortly.
              </p>
            )}

            {status === "error" && (
              <p className="mt-6 text-red-600 font-bold">
                Something went wrong. Please try again or call us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-10 bg-[#62c92a] text-white px-10 py-4 font-bold tracking-[0.18em] hover:bg-[#06213b] transition-all hover:-translate-y-1 disabled:opacity-60"
            >
              {loading ? "SENDING..." : "SUBMIT REQUEST →"}
            </button>
          </form>

          <aside className="space-y-10">
            <div className="bg-[#06213b] text-white p-8 md:p-10 shadow-xl">
              <h3 className="text-[#62c92a] tracking-[0.25em] text-xs font-bold uppercase">
                What To Expect
              </h3>

              <div className="mt-8 space-y-8">
                {processSteps.map(([num, title, text]) => (
                  <div key={num} className="flex gap-5 group">
                    <span className="text-[#62c92a] font-bold">{num}</span>
                    <div>
                      <h4 className="font-bold">{title}</h4>
                      <p className="text-white/60 text-sm mt-1 leading-6">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 shadow-xl">
              <h3 className="text-[#62c92a] tracking-[0.25em] text-xs font-bold uppercase">
                Licensed · Bonded · Insured
              </h3>
              <p className="text-[#06213b]/70 leading-7 mt-4">
                I Am On It Security Services and Protection, LLC provides
                professional security services with accountability, reliability,
                and clear communication.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;