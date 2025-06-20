export interface StudyModule {
  id: string;
  title: string;
  description: string;
  chapters: Chapter[];
  totalXP: number;
  estimatedTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: string;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  checkpoints: Checkpoint[];
  xpReward: number;
  isUnlocked: boolean;
  isCompleted: boolean;
}

export interface Checkpoint {
  id: string;
  title: string;
  description: string;
  type: 'reading' | 'quiz' | 'lab' | 'review';
  xpReward: number;
  isCompleted: boolean;
  tips: string[];
  keyPoints: string[];
  quiz?: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface UserProgress {
  totalXP: number;
  level: number;
  completedCheckpoints: string[];
  completedChapters: string[];
  completedModules: string[];
  achievements: Achievement[];
  streak: number;
  lastStudyDate: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: string;
  xpReward: number;
}