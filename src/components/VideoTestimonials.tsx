import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";

import { testimonialVideos } from "../constants";

const VideoTestimonials = () => {
  const videoRef = useRef<(HTMLVideoElement | null)[]>([]);
  const videoSpanRef = useRef<(HTMLSpanElement | null)[]>([]);
  const videoDivRef = useRef<(HTMLDivElement | null)[]>([]);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const tickerRef = useRef<(() => void) | null>(null);

  // video and indicator
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState<any[]>([]);
  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  // Slider animation with proper cleanup
  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [videoId]);

  // Progress bar animation with proper cleanup
  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    // Kill previous animation and ticker
    if (animationRef.current) {
      animationRef.current.kill();
    }
    if (tickerRef.current) {
      gsap.ticker.remove(tickerRef.current);
      tickerRef.current = null;
    }

    // Reset all inactive indicators to circles
    videoDivRef.current.forEach((div, index) => {
      if (div && index !== videoId) {
        gsap.to(div, {
          width: "12px",
          duration: 0.3,
        });
        if (span[index]) {
          gsap.to(span[index], {
            width: "0%",
            backgroundColor: "#afafaf",
            duration: 0.3,
          });
        }
      }
    });

    if (span[videoId]) {
      // Expand the indicator bar
      gsap.to(videoDivRef.current[videoId], {
        width:
          window.innerWidth < 760
            ? "10vw"
            : window.innerWidth < 1200
            ? "10vw"
            : "4vw",
        duration: 0.3,
      });

      // Create new animation with proper references
      const anim = gsap.to(span[videoId], {
        width: "100%",
        backgroundColor: "white",
        duration: testimonialVideos[videoId].videoDuration,
        ease: "none",
        paused: true, // Start paused
        onUpdate: () => {
          currentProgress = Math.ceil(anim.progress() * 100);
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      animationRef.current = anim;

      // Update progress bar
      const animUpdate = () => {
        if (videoRef.current[videoId]) {
          anim.progress(
            videoRef.current[videoId]!.currentTime /
              testimonialVideos[videoId].videoDuration
          );
        }
      };

      if (isPlaying) {
        tickerRef.current = animUpdate;
        gsap.ticker.add(animUpdate);
      }
    }

    // Cleanup function
    return () => {
      if (tickerRef.current) {
        gsap.ticker.remove(tickerRef.current);
        tickerRef.current = null;
      }
    };
  }, [videoId, startPlay, isPlaying]);

  // Handle video play/pause
  useEffect(() => {
    if (videoRef.current[videoId]) {
      if (!isPlaying) {
        videoRef.current[videoId]?.pause();
      } else {
        startPlay && videoRef.current[videoId]?.play().catch(() => {});
      }
    }
  }, [startPlay, videoId, isPlaying]);

  // Reset on videoId change
  useEffect(() => {
    videoDivRef.current.forEach((div, index) => {
      if (div) {
        gsap.set(div, { width: "12px" });
      }
      if (videoSpanRef.current[index]) {
        gsap.set(videoSpanRef.current[index], {
          width: "0%",
          backgroundColor: "#afafaf",
        });
      }
    });

    videoRef.current.forEach((video, index) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
        if (index === videoId) {
          video.play().catch(() => {});
        }
      }
    });
  }, [videoId]);

  const handleProcess = (type: string, i?: number) => {
    switch (type) {
      case "video-end":
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: (i || 0) + 1 }));
        break;

      case "video-last":
        setVideo((pre) => ({ ...pre, isLastVideo: true }));
        break;

      case "video-reset":
        setVideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false }));
        break;

      case "pause":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      case "play":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      default:
        return video;
    }
  };

  const handleLoadedMetaData = (i: number, e: any) =>
    setLoadedData((pre) => [...pre, e]);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden mb-10">
        <div id="slider" className="flex">
          {testimonialVideos.map((testimony, i) => (
            <div key={testimony.id} className="w-full flex-shrink-0 px-2 md:px-4">
              <div className="relative rounded-3xl overflow-hidden bg-black mx-auto max-w-sm max-h-[70vh] aspect-[9/16]">
                <video
                  id="video"
                  playsInline={true}
                  className="w-full h-full object-cover pointer-events-none"
                  preload="auto"
                  ref={(el) => {
                    if (el) videoRef.current[i] = el;
                  }}
                  onEnded={() =>
                    i !== testimonialVideos.length - 1
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last")
                  }
                  onPlay={() =>
                    setVideo((pre) => ({ ...pre, isPlaying: true }))
                  }
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                >
                  <source src={testimony.video} type="video/mp4" />
                </video>

                <div className="absolute top-8 left-[5%] right-[5%] z-10">
                  <p className="sm:text-base md:text-lg lg:text-xl text-sm font-semibold text-white mb-1">
                    {testimony.name}
                  </p>
                  <p className="sm:text-sm md:text-base lg:text-lg text-xs font-medium text-tech-accent bg-black/50 backdrop-blur px-3 py-2 rounded-lg">
                    {testimony.question}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          className="w-12 h-12 rounded-full bg-tech-accent hover:bg-tech-accent/80 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() =>
            setVideo((pre) => ({
              ...pre,
              videoId: Math.max(0, pre.videoId - 1),
              isEnd: false,
              isLastVideo: false,
              startPlay: true,
              isPlaying: true,
            }))
          }
          disabled={videoId === 0}
        >
          <span className="text-white text-xl font-bold">‹</span>
        </button>

        <div className="flex items-center py-5 px-7 bg-gray-700/50 backdrop-blur rounded-full gap-2">
          {testimonialVideos.map((_, i) => (
            <div
              key={i}
              className="h-3 bg-gray-500 rounded-full relative cursor-pointer hover:bg-gray-400 overflow-hidden"
              style={{ width: "12px" }}
              ref={(el) => {
                if (el) videoDivRef.current[i] = el;
              }}
              onClick={() =>
                setVideo((pre) => ({
                  ...pre,
                  videoId: i,
                  isEnd: false,
                  isLastVideo: false,
                  startPlay: true,
                  isPlaying: true,
                }))
              }
            >
              <span
                className="absolute h-full rounded-full bg-white"
                style={{ width: "0%" }}
                ref={(el) => {
                  if (el) videoSpanRef.current[i] = el;
                }}
              />
            </div>
          ))}
        </div>

        <button
          className="w-12 h-12 rounded-full bg-tech-accent hover:bg-tech-accent/80 flex items-center justify-center transition-colors"
          onClick={
            isLastVideo
              ? () => handleProcess("video-reset")
              : !isPlaying
              ? () => handleProcess("play")
              : () => handleProcess("pause")
          }
        >
          <span className="text-white text-xl font-bold">
            {isLastVideo ? "↻" : !isPlaying ? "▶" : "⏸"}
          </span>
        </button>

        <button
          className="w-12 h-12 rounded-full bg-tech-accent hover:bg-tech-accent/80 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() =>
            setVideo((pre) => ({
              ...pre,
              videoId: Math.min(
                testimonialVideos.length - 1,
                pre.videoId + 1
              ),
              isEnd: false,
              isLastVideo: false,
              startPlay: true,
              isPlaying: true,
            }))
          }
          disabled={videoId === testimonialVideos.length - 1}
        >
          <span className="text-white text-xl font-bold">›</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTestimonials;
