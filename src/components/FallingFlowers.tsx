import { motion } from "motion/react";

const FLOWERS = ["🌸", "🌺", "🌷", "🌼", "💐", "🏵️"];

export const FallingFlowers = () => {
  const flowerArray = Array.from({ length: 15 });

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {flowerArray.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -100, x: Math.random() * 100 + "%", rotate: 0, opacity: 0 }}
          animate={{ 
            y: "110vh", 
            x: ["0%", "10%", "-10%", "5%"],
            rotate: 360,
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
          className="absolute text-2xl"
          style={{ filter: "blur(0.5px)" }}
        >
          {FLOWERS[Math.floor(Math.random() * FLOWERS.length)]}
        </motion.div>
      ))}
    </div>
  );
};