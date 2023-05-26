import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Contact = () => {
  const contactLists = [
    { id: 1, title: "New Business" },
    { id: 2, title: "Send a message" },
    { id: 3, title: "Careers" },
  ];

  const footerLists = [
    {
      id: 1,
      subtitle: "General inquiries",
      title: "Quick chat",
      desc: `Message on facebook`,
    },
    {
      id: 2,
      subtitle: "New business",
      title: "hi@repohub.co",
      desc: "+95 9 888 777 666",
    },
    {
      id: 3,
      subtitle: "Office",
      title: "Yangon",
      desc: "Yangon, Myanmar",
    },
  ];

  const descContent = (item) => {
    if (item.includes("facebook")) {
      return (
        <span>
          <i className="fa-brands fa-facebook-messenger me-2"></i>
          <span>{item}</span>
        </span>
      );
    } else {
      return (
        <span>
          <span>{item}</span>
        </span>
      );
    }
  };

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
      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <section className="container">
              <div className="row">
                <div className="col-12">
                  <div className="my-5">
                    <h3 className="fw-light headline">Wazup there</h3>
                    <h3 className="mb-5 headline Walone-Bold">
                      We're here for you, drop as a line
                    </h3>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/*End Home Section*/}

      {/* Start Contact List Section */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="container headline">
              <div className="row flex-column">
                {contactLists.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="col-lg-6 border-2 border-bottom py-4"
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="text-secondary">{item.title}</h5>
                        <i className="fa-solid fa-arrow-right text-secondary"></i>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact List Section */}

      {/*Start Footer Section*/}
      <div className="py-5 mt-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="container">
                <div className="row">
                  {footerLists.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="col-md-4 py-3 py-md-0 headline"
                      >
                        <div className="text-center">
                          <div className="small d-flex justify-content-center align-items-center text-secondary">
                            <span>{item.subtitle}</span>
                            <div className="footer-bar ms-2"></div>
                          </div>
                          <h4 className="fw-bold">{item.title}</h4>
                          <span className="small">
                            {descContent(item.desc)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
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
export default Contact;
