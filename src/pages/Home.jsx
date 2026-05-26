import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import video from "../assets/images/Iamonit1.mp4";
import {
  FaShieldAlt,
  FaCalendarAlt,
  FaHeadset,
  FaAward,
  FaBuilding,
  FaHome,
  FaHardHat,
  FaIndustry,
  FaRegCalendarAlt,
  FaShoppingBag,
  FaUniversity,
  FaChurch,
  FaGraduationCap,
  FaMoneyBill,
  FaUsers,
  FaBolt,
  FaClipboardCheck,
} from "react-icons/fa";

function SectionLabel({ children }) {
  return (
    <p className="flex items-center gap-4 text-[#62c92a] font-bold tracking-[0.3em] text-xs uppercase">
      <span className="w-10 h-[1px] bg-[#62c92a]" />
      {children}
    </p>
  );
}

function Home() {
  const services = [
    ["01", "Unarmed Security Officers", "Professional unarmed guards for access control, patrol, and customer-facing security roles."],
    ["02", "Mobile Patrol", "Marked vehicle patrols covering multiple sites and deterring threats across large properties."],
    ["03", "Event Security", "Crowd management, VIP protection, and venue security for events of any scale."],
    ["04", "Corporate & Campus Security", "Tailored security programs for office buildings, universities, and multi-tenant campuses."],
  ];

  const industries = [
    [FaBuilding, "Commercial Properties", "Office parks, retail centers, mixed-use developments"],
    [FaHome, "Residential Communities", "HOAs, apartment complexes, gated communities"],
    [FaHardHat, "Construction Sites", "Equipment protection, access control, perimeter security"],
    [FaIndustry, "Industrial & Warehouse", "Facilities, logistics hubs, manufacturing plants"],
    [FaRegCalendarAlt, "Events & Venues", "Concerts, galas, corporate events, festivals"],
    [FaShoppingBag, "Retail & Loss Prevention", "Stores, malls, loss prevention specialists"],
    [FaUniversity, "Government Facilities", "Municipal buildings, courthouses, public offices"],
    [FaChurch, "Houses of Worship", "Churches, mosques, synagogues, temples"],
    [FaGraduationCap, "Schools & Universities", "K-12 campuses, colleges, after-hours security"],
    [FaMoneyBill, "Banks & Financial", "Branch security, ATM protection, vault monitoring"],
  ];

  const aboutCards = [
    [FaClipboardCheck, "Customized Security Plans", "Tailored security strategies designed to fit your specific needs."],
    [FaBolt, "Rapid Deployment", "Officers deployed fast, ready to protect when you need us most."],
    [FaUsers, "Community Focused", "Building safer environments through trust and strong partnerships."],
    [FaHeadset, "24/7 Command Support", "Our dispatch center is always live with real-time coordination."],
    [FaShieldAlt, "Licensed, Bonded, Insured", "Fully licensed, bonded, and insured for complete peace of mind."],
  ];

  const why = [
    ["Fully Licensed & Bonded", "All officers are state-licensed, background-checked, and carry full liability coverage."],
    ["Rapid Deployment", "Whether planned or urgent, our team can mobilize quickly and professionally."],
    ["Customized Security Plans", "Every client receives a tailored security assessment and operating plan."],
    ["Veteran-Led Discipline", "Our approach is built around accountability, preparation, and professionalism."],
    ["Transparent Pricing", "Clear, competitive rates with no hidden fees or confusing packages."],
    ["24/7 Command Support", "Our dispatch support keeps officers and clients connected at all times."],
  ];

  return (
    <div className="text-[#06213b]">
      <Navbar />

      <section className="relative bg-[#061f38] text-white overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[700px] items-center">
          <div className="relative z-20 px-6 md:px-16 lg:px-20 py-20">
            <div className="animate-slide-left bg-[#031421]/95 border border-white/10 shadow-2xl p-8 md:p-12 lg:mr-[-90px] relative z-30">
              <div className="inline-flex items-center gap-3 border border-[#62c92a] bg-[#0b3a29]/40 text-[#62c92a] px-5 py-3 tracking-[0.2em] text-xs font-bold mb-7">
                <FaShieldAlt /> LICENSED & BONDED · UNITED STATES
              </div>

              <h1 className="heading-font text-6xl md:text-8xl font-bold leading-[0.92] tracking-tight">
                WE ARE <br />
                <span className="text-[#62c92a]">ON IT.</span>
              </h1>

              <p className="text-lg md:text-xl text-white/85 mt-7 max-w-xl leading-relaxed">
                Professional unarmed security services for commercial properties,
                events, schools, government facilities, and more. Deployed fast,
                operating with precision.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">
                <button className="bg-[#62c92a] px-8 py-4 text-white font-bold tracking-[0.15em] hover:bg-white hover:text-[#061f38] transition-all hover:-translate-y-1">
                  GET A FREE QUOTE →
                </button>
                <button className="border border-white/40 px-8 py-4 text-white font-bold tracking-[0.15em] hover:border-[#62c92a] hover:text-[#62c92a] transition-all hover:-translate-y-1">
                  CALL 24/7
                </button>
              </div>
            </div>
          </div>

          <div className="relative min-h-[500px] lg:min-h-[700px] overflow-hidden">
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#061f38]/20" />
            <div className="absolute bottom-8 right-8 z-20 border border-[#62c92a] bg-[#061f38]/85 px-6 py-4">
              <p className="text-white font-bold tracking-[0.22em] text-sm">
                <span className="text-[#62c92a]">●</span> ON DUTY 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#06213b] grid grid-cols-2 md:grid-cols-4 text-center border-t border-white/10">
        {[
          [FaShieldAlt, "10+", "Years of Service"],
          [FaCalendarAlt, "500+", "Events Secured"],
          [FaHeadset, "24/7", "Dispatch Available"],
          [FaAward, "100%", "Licensed & Bonded"],
        ].map(([Icon, number, label]) => (
          <div className="group py-10 border-r border-white/10 text-white transition-all hover:bg-[#031421]" key={label}>
            <Icon className="text-[#62c92a] text-3xl mx-auto mb-4 transition-transform group-hover:scale-125" />
            <h3 className="heading-font text-[#62c92a] text-5xl font-bold">{number}</h3>
            <p className="tracking-[0.2em] uppercase mt-3 font-semibold text-sm">{label}</p>
          </div>
        ))}
      </section>

      <section className="bg-[#eef5ff] px-6 md:px-24 py-22 grid lg:grid-cols-2 gap-14">
        <div className="animate-fade-up">
          <SectionLabel>About Us</SectionLabel>
          <h2 className="heading-font text-5xl md:text-6xl font-bold mt-6 leading-tight">
            BUILT FOR <br />
            <span className="text-[#62c92a]">YOU. ONLY YOU.</span>
          </h2>
          <p className="text-lg leading-8 mt-7">
            We deliver professional security solutions tailored to your needs.
            With licensed officers, rapid response, and 24/7 dispatch, your
            safety is always our mission.
          </p>
          <a href="/about" className="inline-block mt-8 bg-[#06213b] text-white px-9 py-4 font-bold tracking-[0.18em] hover:bg-[#62c92a] transition-all">
            LEARN MORE →
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {aboutCards.map(([Icon, title, text]) => (
            <div className="group premium-card bg-white rounded-xl p-7 shadow-lg border border-gray-200" key={title}>
              <Icon className="text-[#62c92a] text-3xl mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
              <h3 className="heading-font font-bold uppercase text-2xl">{title}</h3>
              <p className="mt-3 text-gray-600 leading-7">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#061f38] text-white px-6 md:px-24 py-20 text-center">
        <p className="text-[#62c92a] tracking-[0.35em] text-xs font-bold uppercase mb-5">
          Our Mission
        </p>
        <h2 className="heading-font text-4xl md:text-6xl font-bold max-w-5xl mx-auto leading-tight">
          TO PROTECT PEOPLE, PROPERTY, AND PEACE OF MIND WITH DISCIPLINE,
          SPEED, AND TRUST.
        </h2>
      </section>

      <section className="bg-white px-6 md:px-24 py-22">
        <SectionLabel>What We Do</SectionLabel>
        <h2 className="heading-font text-5xl md:text-6xl font-bold mt-6 mb-14">
          SECURITY SERVICES
        </h2>

        <div className="grid md:grid-cols-2 border border-gray-300">
          {services.map(([num, title, text]) => (
            <div className="group p-10 border border-gray-200 transition-all duration-300 hover:bg-[#06213b] hover:text-white hover:-translate-y-2 hover:shadow-2xl hover:border-[#62c92a]" key={num}>
              <h3 className="heading-font text-5xl text-gray-200 font-bold group-hover:text-[#62c92a] transition-colors">{num}</h3>
              <h4 className="heading-font text-3xl font-bold uppercase mt-5">{title}</h4>
              <p className="mt-4 text-lg text-gray-600 leading-8 transition-colors group-hover:text-white/75">{text}</p>
              <button className="text-[#62c92a] font-bold tracking-[0.18em] mt-7">
                LEARN MORE ›
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#06213b] text-white px-10 py-4 font-bold tracking-[0.18em] hover:bg-[#62c92a] transition-all hover:-translate-y-1">
            VIEW ALL SERVICES →
          </button>
        </div>
      </section>

      <section className="bg-[#eef5ff] px-6 md:px-24 py-22">
        <SectionLabel>Who We Protect</SectionLabel>
        <h2 className="heading-font text-5xl md:text-6xl font-bold mt-6 mb-14">
          INDUSTRIES WE SERVE
        </h2>

        <div className="grid md:grid-cols-5 border border-gray-300 bg-white">
          {industries.map(([Icon, title, text]) => (
            <div className="group p-7 border border-gray-200 transition-all duration-300 hover:bg-[#06213b] hover:text-white hover:-translate-y-2 hover:shadow-2xl hover:border-[#62c92a]" key={title}>
              <Icon className="text-[#62c92a] text-3xl mb-5 transition-transform group-hover:scale-110" />
              <h3 className="heading-font font-bold uppercase text-xl">{title}</h3>
              <p className="mt-3 text-gray-600 text-sm leading-6 transition-colors group-hover:text-white/75">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 md:px-24 py-22">
        <SectionLabel>Why Choose Us</SectionLabel>
        <h2 className="heading-font text-5xl md:text-6xl font-bold mt-6 leading-tight">
          THE STANDARD <br />
          <span className="text-[#62c92a]">OTHERS FOLLOW</span>
        </h2>

        <p className="mt-7 max-w-4xl text-lg leading-8">
          We do not just provide security — we provide peace of mind. Every
          officer we deploy is trained, vetted, and committed to protecting what
          matters most to you.
        </p>

        <div className="grid md:grid-cols-3 border border-gray-300 mt-14">
          {why.map(([title, text]) => (
            <div className="group p-9 border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#62c92a] hover:bg-[#f8fbff]" key={title}>
              <div className="w-1 h-8 bg-[#62c92a] mb-6 transition-all group-hover:h-12" />
              <h3 className="heading-font font-bold uppercase text-2xl">{title}</h3>
              <p className="mt-4 text-gray-600 leading-7">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;