import React from 'react';
import { motion } from 'framer-motion';

const StatisticCard = ({ icon: Icon, number, label, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="bg-white/20 p-4 rounded-xl">
          <Icon className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <p className="text-4xl md:text-5xl font-bold" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {number}
          </p>
          <p className="text-lg font-medium opacity-90">{label}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default StatisticCard;
