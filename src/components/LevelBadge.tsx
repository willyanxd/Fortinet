import React from 'react';

interface LevelBadgeProps {
  level: number;
  totalXP: number;
}

export const LevelBadge: React.FC<LevelBadgeProps> = ({ level, totalXP }) => {
  const xpForCurrentLevel = (level - 1) * 1000;
  const xpForNextLevel = level * 1000;
  const progressToNextLevel = totalXP - xpForCurrentLevel;
  const xpNeededForNextLevel = xpForNextLevel - xpForCurrentLevel;

  return (
    <div className="bg-gradient-to-r from-fortinet-red to-red-600 text-white p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl font-bold">Level {level}</span>
        <span className="text-sm opacity-90">{totalXP} XP</span>
      </div>
      <div className="w-full bg-red-800 bg-opacity-50 rounded-full h-2">
        <div
          className="bg-white h-2 rounded-full transition-all duration-500"
          style={{ width: `${(progressToNextLevel / xpNeededForNextLevel) * 100}%` }}
        />
      </div>
      <div className="text-xs mt-1 opacity-90">
        {progressToNextLevel}/{xpNeededForNextLevel} XP to next level
      </div>
    </div>
  );
};