import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";
import LazyImage from "../components/LazyImage";
import TatooineModel from "../components/TatooineModel";
import CurvedDivider from "@/components/CurvedDivder";
import { ArrowRight, Globe, Users, BarChart, Zap } from "react-feather";
import background from "../assets/tatooinebg2.jpg";

const Home = () => {
  return (
    <>
      <section
        className="hero-section relative"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container hero-content">
          <div className="w-full flex justify-center items-center flex-col text-center">
            <h1
              className="text-white"
              style={{
                fontSize: "3rem", // augmenté de 2.5rem à 3rem
                fontWeight: "bold",
                marginBottom: "2rem", // un peu plus d'espace
              }}
            >
              Extend Your Reach Across EMEA
            </h1>
            <p
              className="text-gray w-2/3" // un peu plus large pour respirer
              style={{
                fontSize: "1.5rem", // augmenté de 1.25rem à 1.5rem
                marginBottom: "2.5rem", // plus d’espace en bas
              }}
            >
              We build customized teams for sales acceleration and legitimize
              your business in the places you want to expand to.
            </p>
            <div
              className="flex justify-center flex-col gap-5"
              style={{ maxWidth: "450px" }} // un peu plus large
            >
              <Link to="/services" className="btn btn-primary text-lg py-3">
                Our Services
              </Link>
              <Link to="/contact" className="btn btn-outline text-lg py-3">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <CurvedDivider position="bottom" color="#000" height={70} />
      </section>

      {/* About Section */}
      <section className="section-padding bg-black relative">
        <div className="container">
          <div className="grid grid-2 items-center">
            <FadeInSection>
              <div className="space-y-6">
                <h2
                  className="text-white"
                  style={{ fontSize: "2rem", fontWeight: "bold" }}
                >
                  Your Gateway to EMEA Markets
                </h2>
                <p className="text-gray">
                  Tatooine Networks specializes in extending your company's
                  reach across EMEA markets. With our deep understanding of
                  regional business cultures and extensive network, we help you
                  navigate the complexities of international expansion.
                </p>
                <div className="flex items-center gap-4">
                  <div
                    style={{
                      width: "4rem",
                      height: "0.25rem",
                      backgroundColor: "var(--primary)",
                    }}
                  ></div>
                  <p className="text-primary" style={{ fontWeight: "500" }}>
                    Trusted by industry leaders
                  </p>
                </div>
                <Link
                  to="/about"
                  className="flex items-center text-primary"
                  style={{ transition: "color 0.3s ease" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = "var(--secondary)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                >
                  Learn more about us{" "}
                  <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
                </Link>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="relative">
                <div
                  className="absolute "
                  style={{
                    top: "-1rem",
                    left: "-1rem",
                    width: "6rem",
                    height: "6rem",
                    borderTop: "2px solid var(--primary)",
                    borderLeft: "2px solid var(--primary)",
                  }}
                ></div>
                <LazyImage
                  src="/eu-map.png"
                  alt="EU MAP"
                  className="rounded-lg"
                />
                <div
                  className="absolute"
                  style={{
                    bottom: "-1rem",
                    right: "-1rem",
                    width: "6rem",
                    height: "6rem",
                    borderBottom: "2px solid var(--primary)",
                    borderRight: "2px solid var(--primary)",
                  }}
                ></div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-dark relative">
        <CurvedDivider
          position="top"
          color="#000"
          height={70}
          inverted={true}
        />

        <div className="container">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2
                className="text-white"
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
              >
                Why Choose Tatooine Networks?
              </h2>
              <p className="text-gray max-w-3xl mx-auto">
                With over 25 years of experience in the EMEA market, we bring
                unparalleled expertise and a proven track record of success.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-4 gap-8">
            <FadeInSection>
              <div className="card service-card">
                <Globe size={40} className="text-primary mb-4" />
                <h3
                  className="text-white"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                  }}
                >
                  Global Expertise
                </h3>
                <p className="text-gray">
                  25+ years of experience in EMEA markets with deep
                  understanding of regional business cultures.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="card service-card">
                <Users size={40} className="text-primary mb-4" />
                <h3
                  className="text-white"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                  }}
                >
                  Team Building
                </h3>
                <p className="text-gray">
                  We build and manage customized teams tailored to your specific
                  business needs.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="card service-card">
                <BarChart size={40} className="text-primary mb-4" />
                <h3
                  className="text-white"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                  }}
                >
                  Proven Results
                </h3>
                <p className="text-gray">
                  Successful track record building $20M+ annual recurring
                  revenues for our clients.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="card service-card">
                <Zap size={40} className="text-primary mb-4" />
                <h3
                  className="text-white"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                  }}
                >
                  Accelerated Growth
                </h3>
                <p className="text-gray">
                  Rapid market entry strategies that minimize risk and maximize
                  opportunity.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
        <CurvedDivider position="bottom" color="#000" height={70} />
      </section>

      {/* 3D Model Section */}
      <section className="section-padding relative bg-black">
        <div className="container relative">
          <div className="grid grid-2 items-center relative ">
            <FadeInSection>
              <TatooineModel />
            </FadeInSection>

            <FadeInSection>
              <div className="space-y-6">
                <h2
                  className="text-white"
                  style={{ fontSize: "2rem", fontWeight: "bold" }}
                >
                  Innovative Solutions for Global Challenges
                </h2>
                <p className="text-gray">
                  At Tatooine Networks, we combine cutting-edge technology with
                  deep market expertise to create innovative solutions that help
                  your business thrive in new markets.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        borderRadius: "50%",
                        backgroundColor: "var(--primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "0.25rem",
                      }}
                    >
                      <ArrowRight size={14} style={{ color: "white" }} />
                    </div>
                    <p className="text-gray">Strategic market entry planning</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        borderRadius: "50%",
                        backgroundColor: "var(--primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "0.25rem",
                      }}
                    >
                      <ArrowRight size={14} style={{ color: "white" }} />
                    </div>
                    <p className="text-gray">
                      Customized team building and management
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        borderRadius: "50%",
                        backgroundColor: "var(--primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "0.25rem",
                      }}
                    >
                      <ArrowRight size={14} style={{ color: "white" }} />
                    </div>
                    <p className="text-gray">
                      Regulatory compliance and localization support
                    </p>
                  </li>
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section-padding relative"
        style={{ backgroundColor: "var(--primary)" }}
      >
        <CurvedDivider
          position="top"
          color="#000"
          height={70}
          inverted={true}
        />
        <div className="container text-center">
          <FadeInSection>
            <h2
              className="text-white"
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
              }}
            >
              Ready to Expand Your Business Across EMEA?
            </h2>
            <p
              className="text-white"
              style={{
                fontSize: "1.25rem",
                marginBottom: "2rem",
                maxWidth: "48rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Contact us today to discuss how Tatooine Networks can help you
              achieve your international growth objectives.
            </p>
            <Link to="/contact" className="btn btn-white">
              Get Started
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default Home;
