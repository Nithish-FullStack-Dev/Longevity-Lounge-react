import { useState } from "react";
import "./VideoGrid.css";

interface VideoItem {
  id: number;
  src: string;
  poster: string;
}

const videos: VideoItem[] = [
  {
    id: 1,
    src: "/assets/images/video/video.mp4",
    poster: "/assets/images/video/poster.jpg",
  },
  {
    id: 2,
    src: "/assets/images/video/video2.mp4",
    poster: "/assets/images/video/poster.jpg",
  },
  {
    id: 3,
    src: "/assets/images/video/video3.mp4",
    poster: "/assets/images/video/poster.jpg",
  },
  {
    id: 4,
    src: "/assets/images/video/video4.mp4",
    poster: "/assets/images/video/poster.jpg",
  },
  {
    id: 5,
    src: "/assets/images/video/video5.mp4",
    poster: "/assets/images/video/poster.jpg",
  },
  {
    id: 6,
    src: "/assets/images/video/video6.mp4",
    poster: "/assets/images/video/poster.jpg",
  },
  {
    id: 7,
    src: "/assets/images/video/video7.mp4",
    poster: "/assets/images/video/poster.jpg",
  },
  {
    id: 8,
    src: "/assets/images/video/video8.mp4",
    poster: "/assets/images/video/poster.jpg",
  },
  {
    id: 9,
    src: "/assets/images/video/video9.mp4",
    poster: "/assets/images/video/poster.jpg",
  },
];

export default function VideoGrid() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section className="video-grid-section">
      <div className="container">
        <h2 className="video-grid-title">
          Speciality Health Campaigns Longevity Lounge
        </h2>

        <div className="video-grid">
          {videos.map((video) => (
            <div
              key={video.id}
              className="video-card"
              onClick={() => setActiveVideo(video.id)}
            >
              {activeVideo === video.id ? (
                <video src={video.src} controls autoPlay playsInline />
              ) : (
                <>
                  <img src={video.poster} alt="Video thumbnail" />
                  <div className="play-button" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
