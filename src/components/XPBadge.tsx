import React from 'react';
import { motion } from 'framer-motion';

interface XPBadgeProps {
  xp: number;
  animate?: boolean;
}

export const XPBadge: React.FC<XPBadgeProps> = ({ xp, animate = false }) => {
  return (
    <motion.div
      className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium"
      initial={animate ? { scale: 0, rotate: -180 } : {}}
      animate={animate ? { scale: 1, rotate: 0 } : {}}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <span className="mr-1">⚡</span>
      {xp} XP
    </motion.div>
  );
};