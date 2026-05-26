import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import video from "../assets/images/iamonit2.mp4";
import {
  FaBuilding,
  FaHome,
  FaHardHat,
  FaIndustry,
  FaCalendarAlt,
  FaShoppingBag,
  FaUniversity,
  FaChurch,
  FaGraduationCap,
  FaMoneyBill,
} from "react-icons/fa";

function Industries() {
  const industries = [
    {
      icon: FaBuilding,
      title: "Commercial Property Managers",
      desc: "Office parks, retail centers, and mixed-use developments require consistent, professional security presence. We provide access control, patrol, and incident response tailored to your property.",
      services: ["Lobby & access control", "Parking lot patrol", "Tenant safety programs", "After-hours monitoring"],
    },
    {
      icon: FaHome,
      title: "Residential Communities",
      desc: "HOAs, apartment complexes, and gated communities trust us to keep residents safe while maintaining firm security standards.",
      services: ["Gate access management", "Community patrol", "Visitor screening", "Emergency response"],
    },
    {
      icon: FaHardHat,
      title: "Construction Sites",
      desc: "Construction sites are high-value targets for theft and vandalism. We protect your equipment, materials, and personnel with on-site security and mobile patrol.",
      services: ["Equipment protection", "Perimeter security", "Worker access control", "Night watch services"],
    },
    {
      icon: FaIndustry,
      title: "Industrial & Warehouse Facilities",
      desc: "Manufacturing plants, distribution centers, and logistics hubs require specialized security. We understand industrial risk and deploy accordingly.",
      services: ["Loading dock security", "Inventory protection", "Shift change coverage", "Hazmat area monitoring"],
    },
    {
      icon: FaCalendarAlt,
      title: "Event Organizations",
      desc: "From intimate corporate gatherings to large-scale concerts and festivals, our event security team handles crowd management, VIP protection, and venue safety with precision.",
      services: ["Crowd management", "VIP & artist protection", "Entry screening", "Emergency evacuation"],
    },
    {
      icon: FaShoppingBag,
      title: "Retailers & Loss Prevention",
      desc: "Retail theft costs businesses billions annually. Our loss prevention specialists reduce shrinkage, deter theft, and protect your bottom line without alienating customers.",
      services: ["Uniformed deterrence", "Plainclothes officers", "Shoplifting apprehension", "Employee theft support"],
    },
    {
      icon: FaUniversity,
      title: "Government Facilities",
      desc: "Municipal buildings, courthouses, and public offices require security that meets strict compliance standards. Our officers are trained for government facility protocols.",
      services: ["Entry screening & badging", "Sensitive area protection", "Compliance-ready officers", "Emergency protocols"],
    },
    {
      icon: FaChurch,
      title: "Churches & Houses of Worship",
      desc: "Places of worship deserve to be safe sanctuaries. We provide discreet, respectful security that protects congregations without disrupting the spiritual environment.",
      services: ["Service day coverage", "Parking lot patrol", "Discreet plainclothes options", "Emergency response"],
    },
    {
      icon: FaGraduationCap,
      title: "Schools & Universities",
      desc: "Educational institutions require security that balances safety with an open, welcoming environment. Our officers are trained in school safety protocols and student interaction.",
      services: ["Campus access control", "After-hours security", "Event coverage", "Emergency lockdown support"],
    },
    {
      icon: FaMoneyBill,
      title: "Banks & Financial Institutions",
      desc: "Financial institutions face unique security challenges. Our armed and unarmed officers provide visible deterrence, vault area monitoring, and rapid response to protect assets and personnel.",
      services: ["Armed lobby security", "ATM protection", "Vault area monitoring", "Cash transport escort"],
    },
  ];

  return (
    <div className="bg-[#06213b] text-white">
      <Navbar />

      <section className="relative overflow-hidden bg-[#06213b]">
        <div className="grid lg:grid-cols-2 min-h-[650px] items-center">
          <div className="relative z-20 px-6 md:px-16 lg:px-20 py-20">
            <div className="animate-slide-left bg-[#031421]/95 border border-white/10 shadow-2xl p-8 md:p-12 lg:mr-[-90px] relative z-30">
              <p className="flex items-center gap-4 text-[#62c92a] font-bold tracking-[0.3em] text-xs uppercase">
                <span className="w-10 h-[1px] bg-[#62c92a]" />
                Industries
              </p>

              <h1 className="heading-font text-6xl md:text-8xl font-bold leading-[0.95] mt-7">
                WHO WE <br />
                <span className="text-[#62c92a]">PROTECT</span>
              </h1>

              <p className="text-lg md:text-xl text-white/85 leading-8 mt-8 max-w-2xl">
                We serve a wide range of industries, each with unique security
                needs and each receiving a tailored solution from our experienced team.
              </p>

              <div className="mt-8 inline-flex border border-[#62c92a] px-6 py-4 bg-[#06213b]/80">
                <p className="text-[#62c92a] font-bold tracking-[0.22em] text-xs">
                  ● 10+ INDUSTRIES SERVED
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[500px] lg:min-h-[650px] overflow-hidden">
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#06213b]/10 to-[#06213b]/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06213b]/70 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-20">
        <div className="max-w-7xl mx-auto border border-[#62c92a]/20">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="group grid lg:grid-cols-[130px_1fr_320px] border-b border-[#62c92a]/15 last:border-b-0 transition-all duration-300 hover:bg-[#031421] hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="bg-[#083152] flex items-center justify-center p-8 border-r border-[#62c92a]/15">
                  <Icon className="text-[#62c92a] text-3xl transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_12px_rgba(98,201,42,0.8)]" />
                </div>

                <div className="p-8 md:p-12">
                  <h2 className="heading-font text-3xl md:text-4xl font-bold uppercase">
                    {industry.title}
                  </h2>

                  <p className="text-white/70 leading-8 mt-5 text-base md:text-lg max-w-4xl">
                    {industry.desc}
                  </p>

                  <button className="mt-7 text-[#62c92a] font-bold tracking-[0.18em] text-sm uppercase hover:tracking-[0.24em] transition-all">
                    Get a Quote →
                  </button>
                </div>

                <div className="bg-[#083152]/70 p-8 md:p-10 border-l border-[#62c92a]/15">
                  <h3 className="text-[#62c92a] text-xs font-bold tracking-[0.28em] uppercase mb-6">
                    Key Services
                  </h3>

                  <ul className="space-y-3">
                    {industry.services.map((service) => (
                      <li
                        key={service}
                        className="text-white/70 text-sm leading-6 flex gap-3"
                      >
                        <span className="text-[#62c92a]">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-[#62c92a]/20 px-6 md:px-20 py-20 text-center">
        <p className="text-[#62c92a] tracking-[0.3em] font-bold text-xs uppercase">
          Custom Coverage
        </p>

        <h2 className="heading-font text-5xl md:text-6xl font-bold mt-4">
          DON’T SEE YOUR INDUSTRY?
        </h2>

        <p className="text-white/70 mt-5 max-w-xl mx-auto leading-7">
          We work with all types of organizations. Contact us to discuss your
          specific security needs.
        </p>

        <button className="mt-8 bg-[#62c92a] px-10 py-4 font-bold tracking-[0.18em] hover:bg-white hover:text-[#06213b] transition-all hover:-translate-y-1">
          CONTACT US TODAY →
        </button>
      </section>

      <Footer />
    </div>
  );
}

export default Industries;