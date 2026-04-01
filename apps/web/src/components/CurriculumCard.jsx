import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const CurriculumCard = ({ category, subjects, color = 'primary', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-card text-card-foreground rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`bg-${color} p-2 rounded-lg`}>
          <BookOpen className={`w-6 h-6 text-${color}-foreground`} />
        </div>
        <h3 className="text-xl font-bold">{category}</h3>
      </div>
      
      <ul className="space-y-2">
        {subjects.map((subject, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-accent-foreground mt-1.5">•</span>
            <span className="leading-relaxed">{subject}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default CurriculumCard;
