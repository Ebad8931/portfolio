import Button from "./Button";
import heroImage from "../assets/headshot.jpeg";
import { name, jobTitle, intro, links } from "../constants/data";

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="row hero-content">
          <div className="col-12 col-sm-6">
            <div className="content-wrapper">
              <h5>Hi &#x1F44B; I am </h5>
              <div className="title">
                <h1>{name}</h1>
                <h5>
                  {jobTitle.split("").map((ch, index) =>
                    ch === " " ? (
                      <span className="space" key={`ch-${index}`}>
                        {ch}
                      </span>
                    ) : (
                      <span key={`ch-${index}`}>{ch}</span>
                    )
                  )}
                </h5>
              </div>
              <p>{intro}</p>
              <Button url={links.resume} type="cta" size="lg" text="Download Resume" />
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="img-wrapper">
              <img src={heroImage} alt="" className="hero-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
