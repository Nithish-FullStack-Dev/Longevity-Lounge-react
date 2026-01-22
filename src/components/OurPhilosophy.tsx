const OurPhilosophy = () => {
  return (
    <section className="philosophy">
      <div className="container">
        <div className="philosophy-contain">
          <div className="left">
            <h1 className="title">Our Philosophy Proactive Health</h1>

            <p className="para">
              At Longevity Lounge, we see health as a journey, not a rescue
              mission. Too often, the world waits for illness before paying
              attention. We choose a different path—one where genetics light the
              way toward prevention, vitality, and confidence.
            </p>

            <p className="para">
              By understanding your unique DNA, we design personalized
              strategies that help you feel stronger, live longer, and enjoy
              life more fully. This isn't about chasing years; it's about
              creating quality in every season of life.
            </p>

            <div className="blocks">
              <div className="block">
                <div className="image">
                  <img src="/assets/images/our-philosophy/genetic.png" alt="" />
                </div>
                <h3>Genetic Insights</h3>
                <p>Personalized DNA Analysis</p>
              </div>

              <div className="block">
                <div className="image">
                  <img src="/assets/images/our-philosophy/target.png" alt="" />
                </div>
                <h3>Target Prevention</h3>
                <p>Proactive Health Strategies</p>
              </div>
              <div className="block">
                <div className="image">
                  <img src="/assets/images/our-philosophy/genetic.png" alt="" />
                </div>
                <h3>Wellness Tracking</h3>
                <p>Monitor Metrics and Habits</p>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="shield-mockup-container">
              <video className="shield-video" autoPlay loop muted playsInline>
                <source
                  src="assets/images/video/philosophy.mp4"
                  type="video/mp4"
                />
              </video>

              <svg
                className="svg"
                viewBox="0 0 330 448"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 165 0 L 310 50 Q 330 60 330 85 L 330 363 Q 330 388 310 398 L 165 448 L 20 398 Q 0 388 0 363 L 0 85 Q 0 60 20 50 Z"
                  fill="none"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
