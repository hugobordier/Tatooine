import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";

const Why = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="page-title">Why Choose Us</h1>
            <p className="page-description">
              Discover the unique advantages of partnering with Tatooine
              Networks.
            </p>
          </div>
        </div>
      </section>

      {/* Content Coming Soon */}
      <section className="section-padding bg-black">
        <div className="container text-center">
          <FadeInSection>
            <h2
              className="text-white"
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "2rem",
              }}
            >
              Content Coming Soon
            </h2>
            <p className="text-gray max-w-2xl mx-auto mb-12">
              We're currently developing detailed content for this page. Please
              check back soon for more information about why Tatooine Networks
              is the ideal partner for your EMEA expansion.
            </p>
            <div
              className="flex flex-col gap-4"
              style={{ maxWidth: "400px", margin: "0 auto" }}
            >
              <Link to="/services" className="btn btn-primary">
                Explore Our Services
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default Why;
