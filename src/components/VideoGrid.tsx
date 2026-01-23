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
    src: "/assets/images/video-grid/Longevity Leadership.mp4",
    poster: "/assets/images/video/poster.jpg",
  },
  {
    id: 2,
    src: "/assets/images/video-grid/Cancer & Longevity Script.mp4",
    poster: "/assets/images/video/poster.jpg",
  },
  {
    id: 3,
    src: "/assets/images/video-grid/Ll Neuro Brochure Video.mp4",
    poster: "/assets/images/video/poster.jpg",
  },
  {
    id: 4,
    src: "/assets/images/video-grid/Ll Heart Brochure Video.mp4",
    poster: "/assets/images/video/poster.jpg",
  },
  {
    id: 5,
    src: "/assets/images/video-grid/Ll Fertility Brochure Vide.mp4",
    poster: "/assets/images/video/poster.jpg",
  },
  {
    id: 6,
    src: "/assets/images/video-grid/Ll Kids Brochure Video.mp4",
    poster: "/assets/images/video/poster.jpg",
  },
  {
    id: 7,
    src: "/assets/images/video-grid/Ll Gastrointestinal Brochur Video.mp4",
    poster: "/assets/images/video/poster.jpg",
  },
  {
    id: 8,
    src: "/assets/images/video-grid/Ll Endocrinology Brochure Video.mp4",
    poster: "/assets/images/video/poster.jpg",
  },
  {
    id: 9,
    src: "/assets/images/video-grid/Beauty Video Script.mp4",
    poster: "/assets/images/video/poster.jpg",
  },
];

export default function VideoGrid() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

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
              onClick={() => setActiveVideo(video)}
            >
              <img src={video.poster} alt="Video thumbnail" />
              <div className="play-button" />
            </div>
          ))}
        </div>
      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className="video-modal" onClick={() => setActiveVideo(null)}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-close"
              onClick={() => setActiveVideo(null)}
            >
              ✕
            </button>

            <video src={activeVideo.src} controls autoPlay playsInline />
          </div>
        </div>
      )}
    </section>
  );
}
