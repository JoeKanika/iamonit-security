import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/images/Iamonit-best.png";
import {
  FaEye,
  FaCarSide,
  FaUsers,
  FaShoppingBag,
  FaBroadcastTower,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      number: "01",
      icon: FaEye,
      title: "Unarmed Security Officers",
      desc: "Professional unarmed guards providing access control, customer-facing security, and patrol services. Cost-effective protection for retail, residential, and corporate environments.",
      includes: [
        "Access control & visitor management",
        "Foot patrol & monitoring",
        "Customer service-oriented approach",
        "Incident documentation & reporting",
        "Emergency response coordination",
      ],
    },
    {
      number: "02",
      icon: FaCarSide,
      title: "Mobile Patrol Services",
      desc: "Marked vehicle patrols covering multiple sites on scheduled or random routes. Highly visible deterrence across large properties, parking lots, and multi-site portfolios.",
      includes: [
        "Scheduled & random patrol routes",
        "GPS-tracked patrol vehicles",
        "Multi-site coverage",
        "Parking enforcement support",
        "After-hours property checks",
      ],
    },
    {
      number: "03",
      icon: FaUsers,
      title: "Event Security",
      desc: "Comprehensive event security from pre-event planning through post-event wrap-up. Crowd management, VIP protection, and venue security for events of any size.",
      includes: [
        "Pre-event security assessment",
        "Crowd management & flow control",
        "VIP & executive protection",
        "Entry screening & bag checks",
        "Emergency evacuation planning",
      ],
    },
    {
      number: "04",
      icon: FaShoppingBag,
      title: "Loss Prevention",
      desc: "Specialized retail loss prevention officers trained to reduce shrinkage, deter theft, and protect your bottom line without compromising the customer experience.",
      includes: [
        "Uniformed & plainclothes officers",
        "Shoplifting deterrence",
        "Employee theft investigation support",
        "CCTV monitoring coordination",
        "Incident reporting & documentation",
      ],
    },
    {
      number: "05",
      icon: FaBroadcastTower,
      title: "Standing Post / Fixed Guard",
      desc: "Dedicated officers stationed at entry points, lobbies, or sensitive areas. Consistent, visible security presence for facilities requiring 24/7 coverage.",
      includes: [
        "Lobby & reception security",
        "Entry point access control",
        "Visitor screening & badging",
        "24/7 post coverage available",
        "Emergency response ready",
      ],
    },
    {
      number: "06",
      icon: FaShieldAlt,
      title: "Corporate & Campus Security",
      desc: "Tailored security programs for office buildings, universities, and multi-tenant campuses. Professional officers who represent your brand while keeping your people safe.",
      includes: [
        "Campus-wide patrol coverage",
        "Access badge enforcement",
        "Incident command coordination",
        "After-hours lockdown support",
        "Customized security protocols",
      ],
    },
  ];

  return (
    <div className="text-[#06213b] bg-white">
      <Navbar />

      <section className="bg-[#06213b] text-white px-6 md:px-20 py-24 grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
        <div className="animate-slide-left">
          <p className="flex items-center gap-4 text-[#62c92a] font-bold tracking-[0.3em] text-xs uppercase">
            <span className="w-10 h-[1px] bg-[#62c92a]" />
            Our Services
          </p>

          <h1 className="heading-font text-6xl md:text-8xl font-bold leading-[0.95] mt-7">
            PROTECTION <br />
            <span className="text-[#62c92a]">YOU CAN COUNT ON</span>
          </h1>

          <p className="text-lg md:text-xl text-white/85 leading-8 mt-8 max-w-2xl">
            From unarmed officers to mobile patrol and event security, we deploy
            the right solution for every environment.
          </p>

          <p className="mt-6 text-[#62c92a] tracking-[0.18em] text-sm font-bold uppercase">
            Professional protection tailored to your site, schedule, and risk level.
          </p>
        </div>

        <div className="relative flex justify-center animate-fade-up">
          <div className="absolute w-80 h-80 rounded-full border border-[#62c92a]/20 animate-pulse" />
          <div className="absolute w-96 h-96 rounded-full border border-[#62c92a]/10" />
          <img
            src={logo}
            alt="I Am On It Security"
            className="relative z-10 w-72 h-72 object-contain drop-shadow-2xl"
          />
          <div className="absolute bottom-4 border border-[#62c92a] bg-[#031421] px-8 py-4">
            <p className="text-[#62c92a] font-bold tracking-[0.25em] text-xs">
              ● PROFESSIONAL · LICENSED · BONDED
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-20 bg-white">
        <div className="max-w-7xl mx-auto border border-gray-200">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="group grid lg:grid-cols-[130px_1fr_320px] border-b border-gray-200 last:border-b-0 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-[#62c92a]"
              >
                <div className="bg-[#eef5ff] flex flex-col items-center justify-center gap-4 py-10 border-r border-gray-200">
                  <span className="heading-font text-3xl text-slate-300 font-bold group-hover:text-[#62c92a] transition-colors">
                    {service.number}
                  </span>
                  <Icon className="text-[#62c92a] text-2xl transition-transform group-hover:scale-125" />
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="heading-font text-3xl md:text-4xl font-bold uppercase">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-8 mt-5 text-base md:text-lg max-w-4xl">
                    {service.desc}
                  </p>
                </div>

                <div className="bg-[#eef5ff] p-8 md:p-10 border-l border-gray-200">
                  <h3 className="text-xs font-bold tracking-[0.28em] uppercase mb-6">
                    Includes
                  </h3>

                  <ul className="space-y-4">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm text-gray-600 leading-6"
                      >
                        <FaCheckCircle className="text-[#62c92a] mt-1 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#06213b] text-white px-6 md:px-20 py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div>
            <p className="text-[#62c92a] tracking-[0.3em] font-bold text-xs uppercase">
              Not Sure What You Need?
            </p>
            <h2 className="heading-font text-5xl md:text-6xl font-bold mt-4">
              FREE SECURITY ASSESSMENT.
            </h2>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">
              We'll conduct a free security assessment and recommend the right
              solution for your property or event.
            </p>
          </div>

          <Link
            to="/contact"
            className="bg-[#62c92a] text-white px-10 py-5 font-bold tracking-[0.18em] hover:bg-white hover:text-[#06213b] transition-all hover:-translate-y-1"
          >
            GET A FREE ASSESSMENT →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Services;