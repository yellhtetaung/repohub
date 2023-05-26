import { Link, NavLink } from "react-router-dom";
import HomeImage from "../../assets/img/Home-img-1.png";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Story = () => {
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
                    <h3 className="fw-light headline">Our Story</h3>
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
            <div className="container pb-md-5">
              <div className="row">
                <div className="col-12 col-md-4 headline">
                  <h1 className="display-3 fw-bolder">20</h1>
                  <h6>Employers</h6>
                </div>

                <div className="col-12 col-md-4 headline">
                  <h1 className="display-3 fw-bolder">5</h1>
                  <h6>years of Experiences</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Home Section*/}

      {/*Start Services Section*/}
      <div className="border-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="py-5 my-5">
                      <Link
                        to="/services"
                        className="text-decoration-none text-secondary"
                      >
                        <div className="text-center py-5 my-5 headline">
                          <p className="text-uppercase">next</p>
                          <h4>Our Servies</h4>
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
      </div>
      {/*End Services Section */}

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
export default Story;
