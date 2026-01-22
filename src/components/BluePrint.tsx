const BluePrint = () => {
  return (
    <section className="blueprint-section">
      <div className="container">
        <div className="bp-header">
          <h2>Your Blueprint to Better Living</h2>
          <p>
            Follow our proven four step process to unlock your genetic potential
            and build a healthier, more vibrant future.
          </p>
        </div>

        <div className="bp-grid">
          <div className="bp-card">
            <div className="bp-image">
              <img src="../assets/images/your-blueprint/1.jpg" />
            </div>
            <div className="bp-content">
              <h3>Decode Your Blueprint</h3>
              <p>Unlock your DNA to discover personalized paths to wellness.</p>
            </div>
          </div>

          <div className="bp-card">
            <div className="bp-content even">
              <h3>Hear Your Body</h3>
              <p>
                Translate subtle signals into meaningful actions for better
                health.
              </p>
            </div>
            <div className="bp-image">
              <img src="../assets/images/your-blueprint/2.jpg" />
            </div>
          </div>

          <div className="bp-card">
            <div className="bp-image">
              <img src="../assets/images/your-blueprint/3.jpg" />
            </div>
            <div className="bp-content">
              <h3>Choose Prevention</h3>
              <p>
                Act today to protect tomorrow and live with lasting vitality.
              </p>
            </div>
          </div>

          <div className="bp-card">
            <div className="bp-content even">
              <h3>Own Your Future</h3>
              <p>
                Shape your health journey with confidence, clarity, and purpose.
              </p>
            </div>
            <div className="bp-image">
              <img src="../assets/images/your-blueprint/4.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BluePrint;
