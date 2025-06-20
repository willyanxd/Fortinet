import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { studyModules } from '../data/studyModules';
import { useProgress } from '../hooks/useProgress';
import { CheckpointCard } from '../components/CheckpointCard';
import { ProgressBar } from '../components/ProgressBar';
import { ArrowLeft, Clock, Award, BookOpen } from 'lucide-react';

export const ModuleDetail: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const { progress, completeCheckpoint } = useProgress();
  
  const module = studyModules.find(m => m.id === moduleId);

  if (!module) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Module Not Found</h1>
          <Link to="/" className="text-fortinet-red hover:underline">
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const totalCheckpoints = module.chapters.reduce((acc, chapter) => 
    acc + chapter.checkpoints.length, 0);
  const completedCheckpoints = module.chapters.reduce((acc, chapter) => 
    acc + chapter.checkpoints.filter(cp => 
      progress.completedCheckpoints.includes(cp.id)).length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            to="/"
            className="inline-flex items-center text-fortinet-red hover:text-red-700 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-5xl">{module.icon}</span>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{module.title}</h1>
                  <p className="text-gray-600 text-lg">{module.description}</p>
                </div>
              </div>
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                module.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                module.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {module.difficulty}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">{module.estimatedTime}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700">{module.totalXP} XP Total</span>
              </div>
              <div className="flex items-center space-x-3">
                <BookOpen className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">{totalCheckpoints} Checkpoints</span>
              </div>
            </div>

            <ProgressBar
              current={completedCheckpoints}
              total={totalCheckpoints}
              label="Module Progress"
            />
          </div>
        </motion.div>

        {/* Chapters */}
        <div className="space-y-8">
          {module.chapters.map((chapter, chapterIndex) => {
            const chapterCompleted = chapter.checkpoints.filter(cp => 
              progress.completedCheckpoints.includes(cp.id)).length;
            const isChapterUnlocked = chapterIndex === 0 || 
              module.chapters[chapterIndex - 1].checkpoints.every(cp => 
                progress.completedCheckpoints.includes(cp.id));

            return (
              <motion.div
                key={chapter.id}
                className={`bg-white rounded-lg shadow-md p-6 ${
                  !isChapterUnlocked ? 'opacity-60' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: chapterIndex * 0.1 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {!isChapterUnlocked && '🔒 '}
                      {chapter.title}
                    </h2>
                    <p className="text-gray-600">{chapter.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">
                      {chapterCompleted}/{chapter.checkpoints.length} completed
                    </div>
                    <div className="text-lg font-semibold text-fortinet-red">
                      +{chapter.xpReward} XP
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <ProgressBar
                    current={chapterCompleted}
                    total={chapter.checkpoints.length}
                    label="Chapter Progress"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {chapter.checkpoints.map((checkpoint, checkpointIndex) => {
                    const isCheckpointUnlocked = isChapterUnlocked && (
                      checkpointIndex === 0 || 
                      progress.completedCheckpoints.includes(chapter.checkpoints[checkpointIndex - 1].id)
                    );

                    return (
                      <CheckpointCard
                        key={checkpoint.id}
                        checkpoint={checkpoint}
                        onComplete={completeCheckpoint}
                        isLocked={!isCheckpointUnlocked}
                      />
                    );
                  })}
                </div>

                {!isChapterUnlocked && (
                  <div className="mt-4 text-center text-gray-500">
                    Complete the previous chapter to unlock this content
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};