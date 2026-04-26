import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { testimonialVideos } from "../constants";
import FadeIn from "./FadeIn";

type Testimony = (typeof testimonialVideos)[0];

const VideoCard = ({ testimony }: { testimony: Testimony }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden bg-black aspect-[9/16] w-full max-h-[72vh]">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        muted
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={testimony.video} type="video/mp4" />
      </video>

      {/* Top overlay — name & question */}
      <div className="absolute top-0 left-0 right-0 p-5 bg-gradient-to-b from-black/70 to-transparent pointer-events-none">
        <p className="font-sans font-semibold text-white text-sm leading-snug">
          {testimony.name}
        </p>
        <p className="font-sans text-xs text-tech-accent mt-1 leading-snug">
          {testimony.question}
        </p>
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-between">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-white" />
          ) : (
            <Play className="w-4 h-4 text-white" />
          )}
        </button>
        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-white" />
          ) : (
            <Volume2 className="w-4 h-4 text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

const VideoTestimonials = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-darker to-tech-dark" />
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-gold/40" />
              <span className="section-label">Video Testimonials</span>
              <div className="h-px w-10 bg-gold/40" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-mist leading-tight">
              Hear From Our <span className="italic text-gold">Brothers</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {testimonialVideos.map((testimony, i) => (
            <FadeIn key={testimony.id} delay={i * 0.1} from={i % 2 === 0 ? "left" : "right"}>
              <VideoCard testimony={testimony} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
