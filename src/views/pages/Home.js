import { Link, NavLink } from "react-router-dom";
import HomeImage from "../../assets/img/Home-img-1.png";
import Service1 from "../../assets/img/our_service_1.png";
import Service2 from "../../assets/img/our_service_2.png";
import Service3 from "../../assets/img/our_service_3.png";
import Service4 from "../../assets/img/our_service_4.png";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Home = () => {
  const Work = [
    { id: 1, src: HomeImage, subtitle: "Sportbooks", desc: "Rewind" },
    { id: 2, src: HomeImage, subtitle: "Sportbooks", desc: "Rewind" },
    { id: 3, src: HomeImage, subtitle: "Sportbooks", desc: "Rewind" },
    { id: 4, src: HomeImage, subtitle: "Sportbooks", desc: "Rewind" },
    { id: 5, src: HomeImage, subtitle: "Sportbooks", desc: "Rewind" },
    { id: 6, src: HomeImage, subtitle: "Sportbooks", desc: "Rewind" },
  ];

  const Services = [
    { id: 1, src: Service1, title: "Research & Analysis" },
    { id: 2, src: Service2, title: "Research & Analysis" },
    { id: 3, src: Service3, title: "Research & Analysis" },
    { id: 4, src: Service4, title: "Research & Analysis" },
  ];

  useEffect(() => {
    ScrollReveal().reveal(".headline", {
      origin: "bottom",
      distance: "40px",
      duration: 1200,
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
                    <h3 className="fw-light headline">Digital Agency</h3>
                    <h3 className="mb-5 headline Walone-Bold">
                      Web developer complex interface systems for Web, Mobile &
                      Ar
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

      {/*Start Work Section*/}
      <div className="bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <section className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="my-5 py-5">
                      <h3 className="text-center headline">
                        Our Work Select Project
                      </h3>
                      <div className="row row-cols-md-2 row-cols-1 g-5">
                        {Work.map((work) => {
                          return (
                            <div className="col headline" key={work.id}>
                              <div className="card rounded pdf-rounded-xl overflow-hidden border-0 shadow-xl shadow-green-50">
                                <img
                                  src={work.src}
                                  className="img-fluid"
                                  alt="HeroImage"
                                />
                                <div className="card-body">
                                  <h6 className="card-title Walone-Bold">
                                    {work.subtitle}
                                  </h6>
                                  <p className="card-text text-secondary">
                                    {work.desc}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="col-12 my-5 headline">
                        <div className="float-end my-5">
                          <div className="d-flex justify-content-center align-items-center">
                            <span className="me-3 text-uppercase">
                              More Cases
                            </span>
                            <i className="fa-solid fa-angle-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      {/*End Work Section*/}

      {/*Start Services Section*/}
      <div className="bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <h4 className="Walone-Bold headline">Our Services</h4>
                  </div>
                  <div className="col-lg-6">
                    <p className="text-secondary headline">
                      As a strategic partner, we create a working product with a
                      thoughtful and large-scale architecture. We launch,
                      support and development.
                    </p>
                  </div>
                </div>
                <div className="row mt-4 g-4">
                  {Services.map((service) => {
                    return (
                      <div key={service.id} className="col headline">
                        <div className="card text-center py-3 py-lg-5 border-0 shadow-xl shadow-blue-50">
                          <div className="mb-lg-3 mb-2">
                            <img
                              src={service.src}
                              className="w-50"
                              alt="ServiceImage"
                            />
                          </div>
                          <div className="card-body">
                            <h6 className="card-title text-center">
                              {service.title}
                            </h6>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="col-12 headline">
                    <div className="float-end my-5">
                      <div className="d-flex justify-content-center align-items-center">
                        <span className="me-3 text-uppercase">
                          Explore More
                        </span>
                        <i className="fa-solid fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Services Section */}

      {/*Start Story Section*/}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="py-5 my-5">
                    <Link
                      to="/story"
                      className="text-decoration-none text-secondary"
                    >
                      <div className="text-center py-5 my-5 headline">
                        <p className="text-uppercase">next</p>
                        <h4>Our Story</h4>
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
      {/* End Footer Section */}
    </div>
  );
};
export default Home;
