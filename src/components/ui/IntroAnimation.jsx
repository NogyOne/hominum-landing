import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function IntroAnimation({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
      document.body.style.overflow = "auto";
    }, 2000);
  }, []);

  return (
    isVisible && (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 1, 0] }}
        transition={{ duration: 3.5, times: [0, 0.7, 1], ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white text-white text-4xl font-bold z-50"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <img
            src="./logo/logo-hominum.webp"
            alt="hominum-logo"
            className="w-80"
          />
        </motion.div>
      </motion.div>
    )
  );
}
