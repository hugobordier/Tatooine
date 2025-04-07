import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";
import LazyImage from "../components/LazyImage";
import { CheckCircle } from "react-feather";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="page-title">About Us</h1>
            <p className="page-description">
              Learn about our expertise and experience in the EMEA market.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-black">
        <div className="container">
          <div className="grid grid-2 items-center">
            <FadeInSection>
              <LazyImage
                src="/logov2.png"
                alt="Business meeting"
                className="rounded-lg"
              />
            </FadeInSection>

            <FadeInSection>
              <div className="space-y-6">
                <h2
                  className="text-white mb-6"
                  style={{ fontSize: "2rem", fontWeight: "bold" }}
                >
                  Our Experience
                </h2>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      size={24}
                      className="text-primary"
                      style={{ flexShrink: 0, marginTop: "0.25rem" }}
                    />
                    <p className="text-gray">
                      25+ Years as Sales Leader in EMEA market in the
                      Cybersecurity and ITSM Marketspace
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      size={24}
                      className="text-primary"
                      style={{ flexShrink: 0, marginTop: "0.25rem" }}
                    />
                    <p className="text-gray">
                      Include 7 years in USA selling software solutions
                      (ERP/ITSM and Cloud IT…)
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      size={24}
                      className="text-primary"
                      style={{ flexShrink: 0, marginTop: "0.25rem" }}
                    />
                    <p className="text-gray">
                      Initiate and develop Business in France for 5 emerging
                      vendors in Cybersecurity
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      size={24}
                      className="text-primary"
                      style={{ flexShrink: 0, marginTop: "0.25rem" }}
                    />
                    <p className="text-gray">
                      Strong knowledge of Cybersecurity French Channel Networks
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      size={24}
                      className="text-primary"
                      style={{ flexShrink: 0, marginTop: "0.25rem" }}
                    />
                    <p className="text-gray">
                      Developed Operations from Scratch in several other EMEA
                      countries
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      size={24}
                      className="text-primary"
                      style={{ flexShrink: 0, marginTop: "0.25rem" }}
                    />
                    <p className="text-gray">
                      Successful track records building $20M+ Annual recurring
                      revenues
                    </p>
                  </li>
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
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
                Our Vision & Mission
              </h2>
              <div
                style={{
                  width: "6rem",
                  height: "0.25rem",
                  backgroundColor: "var(--primary)",
                  margin: "0 auto",
                }}
              ></div>
            </div>
          </FadeInSection>

          <div className="grid grid-2">
            <FadeInSection>
              <div className="card h-full">
                <h3
                  className="text-white"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                  }}
                >
                  Vision
                </h3>
                <p className="text-gray">
                  To be a trusted partner for Cybersecurity vendors seeking to
                  expand their presence in EMEA markets, known for our
                  expertise, integrity, and consistent delivery of exceptional
                  results.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="card h-full">
                <h3
                  className="text-white"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                  }}
                >
                  Mission
                </h3>
                <p className="text-gray">
                  To empower businesses to successfully navigate the
                  complexities of international expansion by providing strategic
                  guidance, local expertise, and customized solutions that drive
                  sustainable growth and create lasting value.
                </p>
              </div>
            </FadeInSection>
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
              Ready to Work With Us?
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
              Contact us today to discuss how our expertise can help your
              business expand across EMEA.
            </p>
            <Link to="/contact" className="btn btn-white">
              Contact Us
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default About;
