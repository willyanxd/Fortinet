import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Checkpoint } from '../types';
import { XPBadge } from './XPBadge';
import { CheckpointModal } from './CheckpointModal';
import { CheckCircle, Circle, Book, HelpCircle, Wrench, Eye } from 'lucide-react';

interface CheckpointCardProps {
  checkpoint: Checkpoint;
  onComplete: (checkpointId: string, xpReward: number) => void;
  isLocked?: boolean;
}

export const CheckpointCard: React.FC<CheckpointCardProps> = ({
  checkpoint,
  onComplete,
  isLocked = false
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'reading': return <Book className="w-5 h-5" />;
      case 'quiz': return <HelpCircle className="w-5 h-5" />;
      case 'lab': return <Wrench className="w-5 h-5" />;
      case 'review': return <Eye className="w-5 h-5" />;
      default: return <Circle className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'reading': return 'bg-blue-100 text-blue-800';
      case 'quiz': return 'bg-purple-100 text-purple-800';
      case 'lab': return 'bg-green-100 text-green-800';
      case 'review': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <motion.div
        className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-200 ${
          isLocked 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:shadow-lg hover:scale-105'
        } ${checkpoint.isCompleted ? 'ring-2 ring-green-500' : ''}`}
        whileHover={!isLocked ? { y: -2 } : {}}
        onClick={() => !isLocked && setIsModalOpen(true)}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            {checkpoint.isCompleted ? (
              <CheckCircle className="w-6 h-6 text-green-500" />
            ) : (
              <Circle className="w-6 h-6 text-gray-400" />
            )}
            <div>
              <h3 className="font-semibold text-gray-900">{checkpoint.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{checkpoint.description}</p>
            </div>
          </div>
          <XPBadge xp={checkpoint.xpReward} />
        </div>

        <div className="flex items-center justify-between">
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(checkpoint.type)}`}>
            {getTypeIcon(checkpoint.type)}
            <span className="ml-2 capitalize">{checkpoint.type}</span>
          </div>
          
          {checkpoint.isCompleted && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-green-500 font-medium text-sm"
            >
              ✓ Completed
            </motion.div>
          )}
        </div>

        {isLocked && (
          <div className="mt-4 text-center text-sm text-gray-500">
            🔒 Complete previous checkpoints to unlock
          </div>
        )}
      </motion.div>

      <CheckpointModal
        checkpoint={checkpoint}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onComplete={onComplete}
      />
    </>
  );
};