"use client";

import { motion } from "framer-motion";

interface FadeProps {
  children: React.ReactNode;
  delay?: number;
}

export default function Fade({
  children,
  delay = 0,
}: FadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 0.61, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}