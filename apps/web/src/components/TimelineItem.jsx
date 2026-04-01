import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, description, isLast = false, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative pl-8 pb-12"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-border" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-8 h-8 bg-accent rounded-full border-4 border-background shadow-md flex items-center justify-center">
        <div className="w-3 h-3 bg-accent-foreground rounded-full" />
      </div>
      
      {/* Content */}
      <div className="bg-card text-card-foreground rounded-xl p-6 shadow-md border border-border">
        <div className="flex items-baseline gap-4 mb-3">
          <span className="text-3xl font-bold text-accent-foreground" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {year}
          </span>
          <h3 className="text-xl font-bold flex-1" style={{ textWrap: 'balance' }}>{title}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
