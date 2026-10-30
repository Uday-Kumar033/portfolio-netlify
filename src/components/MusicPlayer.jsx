import { useEffect, useRef, useState } from "react";
import { Music2, Volume2, X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MusicPlayer = () => {
  const audioRef = useRef(null);

  const [showPopup, setShowPopup] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.7;
  }, []);

  const startMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      await audio.play();

      setIsPlaying(true);
      setShowPopup(false);
    } catch (error) {
      console.error("Music play failed:", error);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Music play failed:", error);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      {/* Audio */}
      <audio
        ref={audioRef}
        src="/music/portfolio-song.mp3"
        loop
        preload="auto"
      />

      {/* Music Permission Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-[10000]
              flex items-center justify-center
              bg-black/70 px-5
              backdrop-blur-md
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.95,
              }}
              transition={{ duration: 0.3 }}
              className="
                relative w-full max-w-md
                overflow-hidden
                rounded-[28px]
                border border-white/10
                bg-[#0b0b0b]
                p-7
                shadow-[0_25px_100px_rgba(0,0,0,0.7)]
                sm:p-9
              "
            >
              {/* Glow */}
              <div
                className="
                  pointer-events-none
                  absolute -right-20 -top-20
                  h-52 w-52
                  rounded-full
                  bg-purple-600/20
                  blur-[80px]
                "
              />

              {/* Close */}
              <button
                onClick={closePopup}
                className="
                  absolute right-5 top-5
                  flex h-9 w-9
                  items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  text-gray-500
                  transition
                  hover:bg-white/[0.08]
                  hover:text-white
                "
                aria-label="Close"
              >
                <X size={17} />
              </button>

              {/* Music Icon */}
              <div
                className="
                  relative mx-auto
                  flex h-16 w-16
                  items-center justify-center
                  rounded-2xl
                  border border-purple-500/20
                  bg-purple-500/10
                "
              >
                <Music2 size={28} className="text-purple-400" />

                <span
                  className="
                    absolute inset-0
                    rounded-2xl
                    border border-purple-400/20
                    animate-pulse
                  "
                />
              </div>

              {/* Content */}
              <div className="relative mt-6 text-center">
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-purple-400
                  "
                >
                  Welcome
                </p>

                <h2
                  className="
                    mt-3
                    text-2xl
                    font-bold
                    text-white
                    sm:text-3xl
                  "
                >
                  Want some music?
                </h2>

                <p
                  className="
                    mx-auto
                    mt-4
                    max-w-sm
                    text-sm
                    leading-7
                    text-gray-500
                  "
                >
                  Enhance your experience with some background music while
                  exploring my portfolio.
                </p>
              </div>

              {/* Buttons */}
              <div
                className="
                  relative mt-7
                  grid grid-cols-2
                  gap-3
                "
              >
                {/* Play Music */}
                <button
                  onClick={startMusic}
                  className="
                    group
                    flex items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-white
                    px-5 py-3.5
                    text-sm
                    font-semibold
                    text-black
                    transition-all
                    duration-300
                    hover:bg-purple-400
                    hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]
                  "
                >
                  <Play size={16} className="fill-current" />
                  Play Music
                </button>

                {/* Maybe Later */}
                <button
                  onClick={closePopup}
                  className="
                    rounded-2xl
                    border border-white/10
                    bg-white/[0.03]
                    px-5 py-3.5
                    text-sm
                    font-medium
                    text-gray-400
                    transition-all
                    duration-300
                    hover:border-white/20
                    hover:bg-white/[0.06]
                    hover:text-white
                  "
                >
                  Maybe Later
                </button>
              </div>

              <p
                className="
                  relative mt-5
                  text-center
                  text-[11px]
                  text-gray-700
                "
              >
                You can control the music anytime.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Single Music Control */}
      <AnimatePresence>
        {!showPopup && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            className="
              fixed
              bottom-6
              right-6
              z-[9999]
            "
          >
            <button
              onClick={toggleMusic}
              aria-label="Toggle music"
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-full
                border border-white/10
                bg-black/70
                text-gray-300
                shadow-xl
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-purple-500/40
                hover:bg-purple-500/10
                hover:text-white
              "
            >
              {isPlaying ? (
                <Volume2 size={17} />
              ) : (
                <Play size={17} className="ml-0.5 fill-current" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;
