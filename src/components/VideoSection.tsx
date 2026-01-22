const VideoSection = () => {
  return (
    <section className="hero-video-section">
      <video
        id="heroVideo"
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="assets/images/video/poster.jpg"
      >
        <source src="assets/images/video/video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default VideoSection;
