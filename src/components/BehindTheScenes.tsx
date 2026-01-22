const BehindTheScenes = () => {
  return (
    <section id="gallery" className="behind-scenes-section">
      <div className="container">
        <div className="bs-header">
          <h2>Behind the Scenes Inside Longevity Lounge</h2>
          <p>
            Step into a sanctuary of precision and elegance, where science meets
            serenity, creating a timeless space for proactive, personalized
            health journeys.
          </p>
        </div>

        <div className="bs-gallery">
          <div className="bs-col bs-col-large">
            <img src="assets/images/behing-the-scenes/1.png" />
          </div>
          <div className="bs-col bs-col-split">
            <img src="/assets/images/behing-the-scenes/2.jpg" />
            <img src="/assets/images/behing-the-scenes/3.jpg" />
          </div>

          <div className="bs-col bs-col-large">
            <img src="/assets/images/behing-the-scenes/4.jpg" />
          </div>

          <div className="bs-col bs-col-split reverse">
            <img src="/assets/images/behing-the-scenes/6.jpg" />
            <img src="/assets/images/behing-the-scenes/5.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindTheScenes;
