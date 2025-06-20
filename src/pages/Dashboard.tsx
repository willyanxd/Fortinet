import React from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '../hooks/useProgress';
import { studyModules } from '../data/studyModules';
import { LevelBadge } from '../components/LevelBadge';
import { ProgressBar } from '../components/ProgressBar';
import { Link } from 'react-router-dom';
import { BookOpen, Target, Award, Flame } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { progress } = useProgress();

  const totalCheckpoints = studyModules.reduce((acc, module) => 
    acc + module.chapters.reduce((chapterAcc, chapter) => 
      chapterAcc + chapter.checkpoints.length, 0), 0);

  const completedCheckpoints = progress.completedCheckpoints.length;

  const recentAchievements = progress.achievements.slice(-3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            FortiGate 7.6 Study Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master FortiGate administration through gamified learning with checkpoints, achievements, and hands-on practice.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <LevelBadge level={progress.level} totalXP={progress.totalXP} />
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-fortinet-red" />
                <span className="font-semibold text-gray-900">Progress</span>
              </div>
              <span className="text-2xl font-bold text-fortinet-red">
                {Math.round((completedCheckpoints / totalCheckpoints) * 100)}%
              </span>
            </div>
            <ProgressBar
              current={completedCheckpoints}
              total={totalCheckpoints}
              label={`${completedCheckpoints}/${totalCheckpoints} Checkpoints`}
              showPercentage={false}
            />
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Flame className="w-6 h-6 text-orange-500" />
                <span className="font-semibold text-gray-900">Streak</span>
              </div>
              <span className="text-2xl font-bold text-orange-500">
                {progress.streak}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              {progress.streak > 0 ? 'Keep it up!' : 'Start your streak today!'}
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-yellow-500" />
                <span className="font-semibold text-gray-900">Achievements</span>
              </div>
              <span className="text-2xl font-bold text-yellow-500">
                {progress.achievements.length}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Unlock more by studying!
            </p>
          </motion.div>
        </div>

        {/* Recent Achievements */}
        {recentAchievements.length > 0 && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recentAchievements.map((achievement, index) => (
                <div
                  key={achievement.id}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-lg shadow-md"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <h3 className="font-bold">{achievement.title}</h3>
                      <p className="text-sm opacity-90">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Study Modules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Study Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studyModules.map((module, index) => {
              const moduleCheckpoints = module.chapters.reduce((acc, chapter) => 
                acc + chapter.checkpoints.length, 0);
              const completedModuleCheckpoints = module.chapters.reduce((acc, chapter) => 
                acc + chapter.checkpoints.filter(cp => 
                  progress.completedCheckpoints.includes(cp.id)).length, 0);

              return (
                <motion.div
                  key={module.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{module.icon}</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        module.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        module.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {module.difficulty}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
                    <p className="text-gray-600 mb-4">{module.description}</p>
                    
                    <div className="mb-4">
                      <ProgressBar
                        current={completedModuleCheckpoints}
                        total={moduleCheckpoints}
                        label="Progress"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>⏱️ {module.estimatedTime}</span>
                      <span>⚡ {module.totalXP} XP</span>
                    </div>
                    
                    <Link
                      to={`/module/${module.id}`}
                      className="w-full bg-fortinet-red text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium text-center block"
                    >
                      {completedModuleCheckpoints > 0 ? 'Continue' : 'Start'} Module
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};