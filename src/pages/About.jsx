import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import video from "../assets/images/Iamonit5.mp4";
import {
  FaShieldAlt,
  FaHandshake,
  FaBolt,
  FaUserTie,
  FaClipboardList,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
} from "react-icons/fa";

function SectionLabel({ children, center = false }) {
  return (
    <p
      className={`flex items-center gap-4 text-[#62c92a] font-bold tracking-[0.3em] text-xs uppercase ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="w-10 h-[1px] bg-[#62c92a]" />
      {children}
    </p>
  );
}

function About() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = [
    {
      text: "Discipline is doing the right thing even when nobody is watching.",
      author: "Operational Standard",
    },
    {
      text: "Security is not presence alone. It is preparation, awareness, and action.",
      author: "I Am On It Principle",
    },
    {
      text: "Dedication creates trust. Trust creates safety.",
      author: "Protection Philosophy",
    },
    {
      text: "Professionalism is measured by consistency under pressure.",
      author: "Command Mindset",
    },
  ];

  const values = [
    [
      FaHandshake,
      "Integrity",
      "We operate with complete transparency. No hidden fees, no shortcuts, and no compromises on standards.",
    ],
    [
      FaShieldAlt,
      "Discipline",
      "Military and law enforcement discipline defines how our officers conduct themselves on every assignment.",
    ],
    [
      FaBolt,
      "Responsiveness",
      "We answer the call day or night. Our 24/7 dispatch ensures you are never left without support.",
    ],
    [
      FaUserTie,
      "Professionalism",
      "From uniform presentation to client communication, we represent your organization with pride.",
    ],
    [
      FaClipboardList,
      "Accountability",
      "Every incident is documented. Every officer is accountable. Every client is kept informed.",
    ],
    [
      FaUsers,
      "Community",
      "We protect the communities we serve. Our officers are neighbors, not just contractors.",
    ],
  ];

  const timeline = [
    [
      "Founded",
      "I Am On It Security Services and Protection, LLC was established with a mission to deliver military-grade discipline to civilian security.",
    ],
    [
      "Growth",
      "Expanded service offerings to include mobile patrol, event security, and specialized loss prevention.",
    ],
    [
      "Industries",
      "Began serving government facilities, educational institutions, financial organizations, and commercial properties.",
    ],
    [
      "Today",
      "Serving clients across multiple industries with a growing team of licensed, bonded security professionals.",
    ],
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [quotes.length]);

  const nextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setQuoteIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className="bg-[#06213b] text-white">
      <Navbar />

      <section className="relative overflow-hidden bg-[#06213b]">
        <div className="grid lg:grid-cols-2 min-h-[660px] items-center">
          <div className="relative z-20 px-6 md:px-16 lg:px-20 py-20">
            <div className="animate-slide-left bg-[#031421]/95 border border-white/10 shadow-2xl p-8 md:p-12 lg:mr-[-90px] relative z-30">
              <SectionLabel>About Us</SectionLabel>

              <h1 className="heading-font text-6xl md:text-8xl font-bold leading-[0.95] mt-7">
                WE ARE ON IT. <br />
                <span className="text-[#62c92a]">ALWAYS.</span>
              </h1>

              <p className="text-lg md:text-xl text-white/85 leading-8 mt-8 max-w-2xl">
                I Am On It Security Services and Protection, LLC was built on a
                simple promise: when you need us, we are there. No excuses. No
                delays. No compromises.
              </p>

              <div className="mt-8 inline-flex border border-[#62c92a] px-6 py-4 bg-[#06213b]/80">
                <p className="text-[#62c92a] font-bold tracking-[0.22em] text-xs">
                  ● LICENSED · BONDED · INSURED
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[500px] lg:min-h-[660px] overflow-hidden">
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="absolute inset-0 w-full h-full object-cover object-top animate-slow-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#06213b]/10 to-[#06213b]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06213b]/80 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="relative px-6 md:px-24 py-24 border-t border-[#62c92a]/20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center group transition-all duration-500 hover:scale-[1.015]">
          <SectionLabel center>Our Mission</SectionLabel>

          <h2 className="heading-font text-5xl md:text-6xl font-bold mt-6 leading-tight transition-all duration-500 group-hover:text-white">
            SECURITY WITH <br />
            <span className="text-[#62c92a]">PURPOSE</span>
          </h2>

          <p className="text-white/75 leading-8 mt-7 text-lg transition-all duration-500 group-hover:text-white max-w-3xl mx-auto">
            Our mission is to provide professional, reliable, and responsive
            security services that protect people, property, and peace of mind.
            We bring military-grade discipline and law enforcement expertise to
            every assignment.
          </p>

          <p className="text-white/75 leading-8 mt-5 text-lg transition-all duration-500 group-hover:text-white max-w-3xl mx-auto">
            Founded on the principle that every client deserves the highest
            standard of protection, we have built a team of dedicated
            professionals who take their responsibility seriously.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-[#62c92a] text-white px-9 py-4 font-bold tracking-[0.18em] hover:bg-white hover:text-[#06213b] transition-all hover:-translate-y-1"
          >
            WORK WITH US →
          </Link>
        </div>
      </section>

      <section className="bg-[#eef5ff] text-[#06213b] px-6 md:px-24 py-24">
        <SectionLabel>Our Values</SectionLabel>

        <h2 className="heading-font text-5xl md:text-6xl font-bold mt-6 mb-14">
          WHAT DRIVES US
        </h2>

        <div className="grid md:grid-cols-3 border border-gray-300 bg-white">
          {values.map(([Icon, title, text]) => (
            <div
              key={title}
              className="group p-9 border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#62c92a] hover:bg-[#f8fbff]"
            >
              <div className="w-1 h-8 bg-[#62c92a] mb-6 transition-all group-hover:h-12" />
              <Icon className="text-[#62c92a] text-3xl mb-5 transition-transform group-hover:scale-110" />
              <h3 className="heading-font font-bold uppercase text-2xl">
                {title}
              </h3>
              <p className="mt-4 text-gray-600 leading-7">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#031421] px-6 md:px-24 py-24 border-t border-[#62c92a]/20">
        <div className="max-w-5xl mx-auto text-center">
          <SectionLabel center>Our Inspiration</SectionLabel>

          <div className="mt-10 relative bg-[#06213b] border border-[#62c92a]/30 shadow-2xl px-8 md:px-16 py-16">
            <FaQuoteLeft className="text-[#62c92a] text-5xl mx-auto mb-8 opacity-80" />

            <p className="heading-font text-3xl md:text-5xl leading-tight font-bold transition-all duration-500">
              “{quotes[quoteIndex].text}”
            </p>

            <p className="text-[#62c92a] tracking-[0.25em] text-xs font-bold mt-8 uppercase">
              {quotes[quoteIndex].author}
            </p>

            <button
              onClick={prevQuote}
              className="absolute left-4 top-1/2 -translate-y-1/2 border border-white/20 p-3 hover:border-[#62c92a] hover:text-[#62c92a] transition-all"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={nextQuote}
              className="absolute right-4 top-1/2 -translate-y-1/2 border border-white/20 p-3 hover:border-[#62c92a] hover:text-[#62c92a] transition-all"
            >
              <FaChevronRight />
            </button>

            <div className="flex justify-center gap-3 mt-10">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setQuoteIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    quoteIndex === index
                      ? "bg-[#62c92a] scale-125"
                      : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-24 py-24 border-t border-[#62c92a]/20">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Our Story</SectionLabel>

          <h2 className="heading-font text-5xl md:text-6xl font-bold mt-6 mb-16">
            HOW WE GOT HERE
          </h2>

          <div className="relative border-l border-[#62c92a]/60 ml-4 md:ml-10">
            {timeline.map(([title, text]) => (
              <div key={title} className="relative pl-12 pb-14 group">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#62c92a] transition-transform group-hover:scale-150" />
                <h3 className="text-[#62c92a] tracking-[0.3em] text-xs font-bold uppercase">
                  {title}
                </h3>
                <p className="text-white/75 text-lg leading-8 mt-3">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;