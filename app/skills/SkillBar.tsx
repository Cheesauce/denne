'use client';

import { motion } from 'framer-motion';

type SkillBarProps = {
  name: string;
  level: string;
  percent: number;
  delay?: number;
};

/**
 * A single labeled proficiency bar. The fill animates from 0 to its target
 * width once when it scrolls into view (viewport.once), rather than on
 * mount, so bars lower on the page don't all race at once on page load.
 */
export default function SkillBar({ name, level, percent, delay = 0 }: SkillBarProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5 gap-2">
        <span className="text-sm font-medium dark:text-gray-200 text-gray-800">{name}</span>
        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#10b981] shrink-0">{level}</span>
      </div>
      <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <motion.div
          className="h-full bg-[#10b981]"
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
