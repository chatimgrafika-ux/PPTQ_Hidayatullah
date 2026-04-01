import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProgramCard = ({ icon: Icon, title, description, features, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-card text-card-foreground rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border flex flex-col h-full"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="bg-accent p-3 rounded-xl flex-shrink-0">
          <Icon className="w-8 h-8 text-accent-foreground" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2" style={{ textWrap: 'balance' }}>{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
      
      {features && features.length > 0 && (
        <ul className="space-y-3 mt-auto">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default ProgramCard;
