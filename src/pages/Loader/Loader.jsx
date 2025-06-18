import { motion } from "framer-motion"

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[9999] flex items-center justify-center">
      <div className="relative w-16 h-16">
        {/* Outer spinning ring */}
        <motion.div
          className="absolute inset-0 border-4 border-blue-600/20 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner spinning ring */}
        <motion.div
          className="absolute inset-0 border-4 border-t-blue-600 rounded-full"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Center dot */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-3 h-3 bg-blue-600 rounded-full" />
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-blue-600 font-medium whitespace-nowrap"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Loading...
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;