import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";
import {
  ArrowRight,
  Globe,
  FileText,
  Search,
  BarChart,
  Users,
  Layers,
  Calendar,
} from "react-feather";

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="page-title">Our Services</h1>
            <p className="page-description">
              Comprehensive solutions to help your business expand across EMEA
              markets.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-black">
        <div className="container">
          <div className="grid grid-3">
            <FadeInSection>
              <div className="card service-card">
                <Search size={40} className="text-primary mb-6" />
                <h3
                  className="text-white"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "0.75rem",
                  }}
                >
                  Market Opportunity Assessment
                </h3>
                <p className="text-gray mb-6">
                  Comprehensive analysis of market potential, competitive
                  landscape, and entry barriers to identify the most promising
                  opportunities for your business.
                </p>
                <Link
                  to="/contact"
                  className="flex items-center text-primary"
                  style={{ transition: "color 0.3s ease" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = "var(--secondary)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                >
                  Learn more{" "}
                  <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
                </Link>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="card service-card">
                <FileText size={40} className="text-primary mb-6" />
                <h3
                  className="text-white"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "0.75rem",
                  }}
                >
                  Regulatory and Compliance Review
                </h3>
                <p className="text-gray mb-6">
                  Navigate complex regulatory environments with our expert
                  guidance to ensure your business meets all legal and
                  compliance requirements in target markets.
                </p>
                <Link
                  to="/contact"
                  className="flex items-center text-primary"
                  style={{ transition: "color 0.3s ease" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = "var(--secondary)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                >
                  Learn more{" "}
                  <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
                </Link>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="card service-card">
                <Globe size={40} className="text-primary mb-6" />
                <h3
                  className="text-white"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "0.75rem",
                  }}
                >
                  Localisation Requirements Analysis
                </h3>
                <p className="text-gray mb-6">
                  Identify and address cultural, linguistic, and operational
                  adaptations needed to successfully localize your products and
                  services for EMEA markets.
                </p>
                <Link
                  to="/contact"
                  className="flex items-center text-primary"
                  style={{ transition: "color 0.3s ease" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = "var(--secondary)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                >
                  Learn more{" "}
                  <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
                </Link>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="card service-card">
                <BarChart size={40} className="text-primary mb-6" />
                <h3
                  className="text-white"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "0.75rem",
                  }}
                >
                  Go-to-Market Strategy Development
                </h3>
                <p className="text-gray mb-6">
                  Develop comprehensive strategies tailored to your specific
                  business objectives, target audience, and market conditions to
                  maximize your chances of success.
                </p>
                <Link
                  to="/contact"
                  className="flex items-center text-primary"
                  style={{ transition: "color 0.3s ease" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = "var(--secondary)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                >
                  Learn more{" "}
                  <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
                </Link>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="card service-card">
                <Users size={40} className="text-primary mb-6" />
                <h3
                  className="text-white"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "0.75rem",
                  }}
                >
                  Partner Ecosystem Mapping
                </h3>
                <p className="text-gray mb-6">
                  Identify and connect with the right partners, distributors,
                  and channels to accelerate your market entry and expansion
                  across EMEA.
                </p>
                <Link
                  to="/contact"
                  className="flex items-center text-primary"
                  style={{ transition: "color 0.3s ease" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = "var(--secondary)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                >
                  Learn more{" "}
                  <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
                </Link>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="card service-card">
                <Layers size={40} className="text-primary mb-6" />
                <h3
                  className="text-white"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "0.75rem",
                  }}
                >
                  Sales Organisation Design
                </h3>
                <p className="text-gray mb-6">
                  Design and implement effective sales structures, processes,
                  and teams tailored to your specific market entry and growth
                  objectives.
                </p>
                <Link
                  to="/contact"
                  className="flex items-center text-primary"
                  style={{ transition: "color 0.3s ease" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = "var(--secondary)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                >
                  Learn more{" "}
                  <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
                </Link>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="card service-card">
                <Calendar size={40} className="text-primary mb-6" />
                <h3
                  className="text-white"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "0.75rem",
                  }}
                >
                  Launch Planning and Execution
                </h3>
                <p className="text-gray mb-6">
                  Comprehensive planning and execution support to ensure a
                  successful market entry, from initial strategy to
                  implementation and beyond.
                </p>
                <Link
                  to="/contact"
                  className="flex items-center text-primary"
                  style={{ transition: "color 0.3s ease" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = "var(--secondary)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                >
                  Learn more{" "}
                  <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-dark">
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
                Our Approach
              </h2>
              <p className="text-gray max-w-3xl mx-auto">
                We follow a structured yet flexible approach to help you
                successfully expand into EMEA markets.
              </p>
            </div>
          </FadeInSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div
                className="absolute"
                style={{
                  left: "50%",
                  transform: "translateX(-50%)",
                  height: "100%",
                  width: "2px",
                  backgroundColor: "var(--primary)",
                }}
              ></div>

              <FadeInSection>
                <div className="relative mb-12">
                  <div
                    className="absolute"
                    style={{
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: "-0.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "50%",
                        backgroundColor: "var(--primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ color: "white", fontWeight: "bold" }}>
                        1
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      marginLeft: "auto",
                      width: "41.666667%",
                      paddingLeft: "2rem",
                    }}
                  >
                    <div className="card">
                      <h3
                        className="text-white"
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: "bold",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Assessment
                      </h3>
                      <p className="text-gray">
                        We conduct a thorough analysis of your business,
                        objectives, and target markets to identify opportunities
                        and challenges.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection>
                <div className="relative mb-12">
                  <div
                    className="absolute"
                    style={{
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: "-0.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "50%",
                        backgroundColor: "var(--primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ color: "white", fontWeight: "bold" }}>
                        2
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      marginRight: "auto",
                      width: "41.666667%",
                      paddingRight: "2rem",
                    }}
                  >
                    <div className="card">
                      <h3
                        className="text-white"
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: "bold",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Strategy Development
                      </h3>
                      <p className="text-gray">
                        Based on our assessment, we develop a customized
                        strategy tailored to your specific needs and market
                        conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection>
                <div className="relative mb-12">
                  <div
                    className="absolute"
                    style={{
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: "-0.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "50%",
                        backgroundColor: "var(--primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ color: "white", fontWeight: "bold" }}>
                        3
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      marginLeft: "auto",
                      width: "41.666667%",
                      paddingLeft: "2rem",
                    }}
                  >
                    <div className="card">
                      <h3
                        className="text-white"
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: "bold",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Implementation
                      </h3>
                      <p className="text-gray">
                        We help you execute the strategy, providing hands-on
                        support and guidance throughout the implementation
                        process.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection>
                <div className="relative">
                  <div
                    className="absolute"
                    style={{
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: "-0.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "50%",
                        backgroundColor: "var(--primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ color: "white", fontWeight: "bold" }}>
                        4
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      marginRight: "auto",
                      width: "41.666667%",
                      paddingRight: "2rem",
                    }}
                  >
                    <div className="card">
                      <h3
                        className="text-white"
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: "bold",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Optimization & Growth
                      </h3>
                      <p className="text-gray">
                        We continuously monitor performance, make adjustments as
                        needed, and identify new opportunities for growth and
                        expansion.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--primary)" }}
      >
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
              Ready to Expand Your Business?
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
              Contact us today to discuss how our services can help you
              successfully enter and grow in EMEA markets.
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

export default Services;
