import { motion } from "framer-motion";

const MouseEffect = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Soft Purple Orb */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 60, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-purple-600/[0.07] blur-[120px]"
      />

      {/* Second Soft Orb */}
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] right-[10%] h-80 w-80 rounded-full bg-purple-500/[0.05] blur-[130px]"
      />

      {/* Small Floating Glow */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[50%] top-[30%] h-32 w-32 rounded-full bg-purple-400/[0.04] blur-[70px]"
      />
    </div>
  );
};

export default MouseEffect;
