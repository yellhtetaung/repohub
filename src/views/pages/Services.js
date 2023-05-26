import { Link, NavLink } from "react-router-dom";
import HomeImage from "../../assets/img/Home-img-1.png";
import Service1 from "../../assets/img/our_service_1.png";
import Service2 from "../../assets/img/our_service_2.png";
import Service3 from "../../assets/img/our_service_3.png";
import Service4 from "../../assets/img/our_service_4.png";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Services = () => {
  const Services = [
    {
      id: 1,
      src: Service1,
      title: "Research & Analysis",
      desc: "We immerse ourselve in the analytics of your business, in order to study all the subtleties and determine target audience.",
      items: [
        "Analyze cliente business",
        "Branding Strategy",
        "Research opportunities",
        "Create information architecture",
        "Study the target audience",
        "Production planning",
      ],
    },
    {
      id: 2,
      src: Service2,
      title: "Product design",
      desc: "We know how to create complex and intuitive interface systems that are enjoyable to use.",
      items: [
        "Interface design",
        "Visual Identity",
        "Corporate & Promo landings",
        "UI Kits & Libraries",
        "E-commerce",
        "Apps for iOS & Android",
      ],
    },
    {
      id: 3,
      src: Service3,
      title: "Development & Integration",
      desc: "Our developer them easily subdue developments of any complexity. We dominate all the cycle of development.",
      items: [
        "Front-end Development",
        "Development Consulting",
        "CMS Development",
        "API",
        "Highload-systems",
        "Animations",
      ],
    },
    {
      id: 4,
      src: Service4,
      title: "Support",
      desc: "We provide technical assistance, that will help you to improve, keep the quality and speed of the launched project like website, app or full product.",
      items: [
        "content Strategy & Research",
        "Branding Stragegy",
        "Opportunity Analysis",
        "Content Strategy",
        "Strategic Planning",
        "Production Planning",
      ],
    },
  ];

  useEffect(() => {
    ScrollReveal().reveal(".headline", {
      origin: "bottom",
      distance: "40px",
      duration: 1200,
      // reset: true,
      interval: 200,
      scale: 0.9,
      viewFactor: 0.1,
    });
  }, []);

  return (
    <div>
      {/*Start Home Section*/}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <section className="container">
              <div className="row">
                <div className="col-12">
                  <div className="my-5 py-5">
                    <h3 className="fw-light headline">Services</h3>
                    <h3 className="mb-5 headline Walone-Bold">
                      Our services extend to every aspect of the project
                      development process
                    </h3>
                    <img
                      src={HomeImage}
                      className="img-fluid headline pdf-rounded-xl"
                      alt="HomeImage"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/*End Home Section*/}

      {/* Start Services Section */}
      {Services.map((service) => {
        return (
          <div key={service.id} className="border-top py-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="row">
                    <div className="col-lg-8 headline">
                      <div className="col">
                        <h3 className="fw-bold">{service.title}</h3>
                        <p>{service.desc}</p>
                      </div>
                      <div className="col py-5">
                        <h5 className="fw-bold">What we do</h5>
                        <ul className="d-md-flex list-unstyled">
                          <div className="col">
                            {service.items.slice(0, 3).map((item, index) => {
                              return (
                                <div className="py-2" key={index}>
                                  <li>- {item}</li>
                                </div>
                              );
                            })}
                          </div>

                          <div className="col">
                            {service.items.slice(3, 6).map((item, index) => {
                              return (
                                <div className="py-2" key={index}>
                                  <li>- {item}</li>
                                </div>
                              );
                            })}
                          </div>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-8 d-flex justify-content-center align-items-center mx-md-auto headline">
                      <img src={service.src} className="w-75" alt="item" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* End Services Section */}

      {/*Start Story Section*/}
      <div className="border-top py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="py-5 my-5">
                      <Link
                        to="/contact"
                        className="text-decoration-none text-secondary"
                      >
                        <div className="text-center py-5 my-5 headline">
                          <p className="text-uppercase">next</p>
                          <h4>Our Contact</h4>
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Story Section */}

        {/*Start Footer Section*/}
        <div className="border-top py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="container">
                  <div className="row">
                    <div className="col col-md-10 col-lg-4 headline">
                      <div className="small mb-4 mb-lg-0 text-center">
                        <NavLink
                          to="/"
                          className="text-decoration-none text-secondary me-4"
                        >
                          Home
                        </NavLink>
                        <NavLink
                          to="/"
                          className="text-decoration-none text-secondary me-4"
                        >
                          Story
                        </NavLink>
                        <NavLink
                          to="/"
                          className="text-decoration-none text-secondary me-4"
                        >
                          Works
                        </NavLink>
                        <NavLink
                          to="/"
                          className="text-decoration-none text-secondary  d-lg-none"
                        >
                          Careers
                        </NavLink>
                        <NavLink
                          to="/"
                          className="text-decoration-none text-secondary ms-4 d-lg-none"
                        >
                          Contact Us
                        </NavLink>
                      </div>
                    </div>

                    <div className="col col-lg-4 col-md-2 headline">
                      <div className="text-center">
                        <h4 className="fw-bold">RepoHub</h4>
                      </div>
                    </div>

                    <div className="col d-none d-lg-block headline">
                      <div className="text-center small">
                        <NavLink
                          to="/"
                          className="text-decoration-none text-secondary ms-4"
                        >
                          Careers
                        </NavLink>
                        <NavLink
                          to="/"
                          className="text-decoration-none text-secondary mx-4"
                        >
                          Contact Us
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Section */}
    </div>
  );
};
export default Services;
