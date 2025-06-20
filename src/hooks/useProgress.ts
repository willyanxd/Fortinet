import { useState, useEffect } from 'react';
import { UserProgress, Achievement } from '../types';

const defaultProgress: UserProgress = {
  totalXP: 0,
  level: 1,
  completedCheckpoints: [],
  completedChapters: [],
  completedModules: [],
  achievements: [],
  streak: 0,
  lastStudyDate: ''
};

export const useProgress = () => {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);

  useEffect(() => {
    const savedProgress = localStorage.getItem('fortigate-study-progress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const saveProgress = (newProgress: UserProgress) => {
    setProgress(newProgress);
    localStorage.setItem('fortigate-study-progress', JSON.stringify(newProgress));
  };

  const completeCheckpoint = (checkpointId: string, xpReward: number) => {
    const newProgress = {
      ...progress,
      totalXP: progress.totalXP + xpReward,
      completedCheckpoints: [...progress.completedCheckpoints, checkpointId],
      level: Math.floor((progress.totalXP + xpReward) / 1000) + 1,
      lastStudyDate: new Date().toISOString()
    };

    // Update streak
    const today = new Date().toDateString();
    const lastStudy = progress.lastStudyDate ? new Date(progress.lastStudyDate).toDateString() : '';
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    if (lastStudy === yesterday) {
      newProgress.streak = progress.streak + 1;
    } else if (lastStudy !== today) {
      newProgress.streak = 1;
    }

    // Check for achievements
    const newAchievements = checkAchievements(newProgress);
    newProgress.achievements = [...progress.achievements, ...newAchievements];

    saveProgress(newProgress);
  };

  const checkAchievements = (currentProgress: UserProgress): Achievement[] => {
    const achievements: Achievement[] = [];
    const now = new Date().toISOString();

    // First checkpoint achievement
    if (currentProgress.completedCheckpoints.length === 1 && 
        !progress.achievements.find(a => a.id === 'first-checkpoint')) {
      achievements.push({
        id: 'first-checkpoint',
        title: 'First Steps',
        description: 'Complete your first checkpoint',
        icon: '🎯',
        unlockedAt: now,
        xpReward: 50
      });
    }

    // Level up achievements
    if (currentProgress.level >= 5 && 
        !progress.achievements.find(a => a.id === 'level-5')) {
      achievements.push({
        id: 'level-5',
        title: 'Rising Star',
        description: 'Reach level 5',
        icon: '⭐',
        unlockedAt: now,
        xpReward: 100
      });
    }

    // Streak achievements
    if (currentProgress.streak >= 7 && 
        !progress.achievements.find(a => a.id === 'week-streak')) {
      achievements.push({
        id: 'week-streak',
        title: 'Dedicated Learner',
        description: 'Study for 7 days in a row',
        icon: '🔥',
        unlockedAt: now,
        xpReward: 200
      });
    }

    return achievements;
  };

  return {
    progress,
    completeCheckpoint,
    saveProgress
  };
};