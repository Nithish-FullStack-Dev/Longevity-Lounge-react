import { Microscope } from "lucide-react";

const MostTrusted = () => {
  return (
    <section id="about" className="most-trusted-section">
      <div className="container">
        <div className="trusted-banner-wrap">
          <span className="line right-line"></span>

          <div className="trusted-banner">
            <span>Most Trusted Longevity Lounge in India</span>
          </div>

          <span className="line left-line"></span>
        </div>

        <div className="content-wrapper">
          <div className="phone-mockup">
            <div className="phone-container">
              <div className="phone-glow"></div>
              <img
                src="/assets/images/most-trusted/mobile1.png"
                alt="Phone Frame"
                className="phone-frame"
              />

              <video className="phone-video" autoPlay loop muted playsInline>
                <source
                  src="assets/images/video/LL long video with audio low (1).mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="text-content">
            <div className="title">
              <Microscope className="icon-highlight" />
              <h2 className="section-title">
                Expert Led Series Unlock the Power of Personalized Medicine
              </h2>
            </div>

            <div className="icon-series">
              <p>
                Join our leading geneticists and wellness experts as they decode
                the complex relationships between your DNA, lifestyle, and
                longevity. Each episode reveals actionable insights to transform
                your health approach.
              </p>
            </div>

            <ul className="benefits-list">
              <li>
                <div className="list-disc">
                  <span className="disc"></span>

                  <div className="disc-content">
                    <h3>Genetic Risk Assessment</h3>
                    <p>
                      Understanding your predispositions before they become
                      problems
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="list-disc">
                  <span className="disc"></span>

                  <div className="disc-content">
                    <h3>Personalized Nutrition</h3>
                    <p>How your genes influence optimal dietary choices</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="list-disc">
                  <span className="disc"></span>

                  <div className="disc-content">
                    <h3>Longevity Protocols</h3>
                    <p>Science-backed strategies for healthy aging</p>
                  </div>
                </div>
              </li>
            </ul>

            <a href="#" className="cta-button">
              <div className="cta-content">
                <h4>Explore More</h4>
                <img src="/assets/images/most-trusted/right-arrow.png" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostTrusted;
