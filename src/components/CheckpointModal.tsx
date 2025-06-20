import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Checkpoint, QuizQuestion } from '../types';
import { X, Lightbulb, Target, Award } from 'lucide-react';
import { XPBadge } from './XPBadge';

interface CheckpointModalProps {
  checkpoint: Checkpoint;
  isOpen: boolean;
  onClose: () => void;
  onComplete: (checkpointId: string, xpReward: number) => void;
}

export const CheckpointModal: React.FC<CheckpointModalProps> = ({
  checkpoint,
  isOpen,
  onClose,
  onComplete
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showXPAnimation, setShowXPAnimation] = useState(false);

  const handleQuizAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (checkpoint.quiz && currentQuestionIndex < checkpoint.quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleCompleteCheckpoint = () => {
    if (!checkpoint.isCompleted) {
      setShowXPAnimation(true);
      setTimeout(() => {
        onComplete(checkpoint.id, checkpoint.xpReward);
        setShowXPAnimation(false);
        onClose();
      }, 2000);
    } else {
      onClose();
    }
  };

  const calculateQuizScore = () => {
    if (!checkpoint.quiz) return 0;
    let correct = 0;
    checkpoint.quiz.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / checkpoint.quiz.length) * 100);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <h2 className="text-2xl font-bold text-gray-900">{checkpoint.title}</h2>
                  <XPBadge xp={checkpoint.xpReward} animate={showXPAnimation} />
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-gray-600 mb-6">{checkpoint.description}</p>

              {/* Tips Section */}
              {checkpoint.tips.length > 0 && (
                <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center mb-3">
                    <Lightbulb className="w-5 h-5 text-yellow-600 mr-2" />
                    <h3 className="font-semibold text-yellow-800">Tips</h3>
                  </div>
                  <ul className="space-y-2">
                    {checkpoint.tips.map((tip, index) => (
                      <li key={index} className="text-yellow-700 text-sm flex items-start">
                        <span className="mr-2">💡</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Points Section */}
              {checkpoint.keyPoints.length > 0 && (
                <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center mb-3">
                    <Target className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-blue-800">Key Points</h3>
                  </div>
                  <ul className="space-y-2">
                    {checkpoint.keyPoints.map((point, index) => (
                      <li key={index} className="text-blue-700 text-sm flex items-start">
                        <span className="mr-2">🎯</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quiz Section */}
              {checkpoint.type === 'quiz' && checkpoint.quiz && !showResults && (
                <div className="mb-6">
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-gray-900">
                        Question {currentQuestionIndex + 1} of {checkpoint.quiz.length}
                      </h3>
                      <div className="text-sm text-gray-500">
                        Progress: {Math.round(((currentQuestionIndex + 1) / checkpoint.quiz.length) * 100)}%
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-fortinet-red h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestionIndex + 1) / checkpoint.quiz.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-4">
                      {checkpoint.quiz[currentQuestionIndex].question}
                    </h4>
                    <div className="space-y-3">
                      {checkpoint.quiz[currentQuestionIndex].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuizAnswer(index)}
                          className={`w-full text-left p-3 rounded-lg border transition-all ${
                            selectedAnswers[currentQuestionIndex] === index
                              ? 'border-fortinet-red bg-red-50 text-fortinet-red'
                              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                      disabled={currentQuestionIndex === 0}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleNextQuestion}
                      disabled={selectedAnswers[currentQuestionIndex] === undefined}
                      className="px-6 py-2 bg-fortinet-red text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {currentQuestionIndex === checkpoint.quiz.length - 1 ? 'Finish Quiz' : 'Next'}
                    </button>
                  </div>
                </div>
              )}

              {/* Quiz Results */}
              {checkpoint.type === 'quiz' && showResults && checkpoint.quiz && (
                <div className="mb-6">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <Award className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Quiz Complete!</h3>
                    <p className="text-lg text-gray-600">
                      Your Score: <span className="font-bold text-green-600">{calculateQuizScore()}%</span>
                    </p>
                  </div>

                  <div className="space-y-4">
                    {checkpoint.quiz.map((question, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">{question.question}</h4>
                        <div className="space-y-2">
                          {question.options.map((option, optionIndex) => (
                            <div
                              key={optionIndex}
                              className={`p-2 rounded ${
                                optionIndex === question.correctAnswer
                                  ? 'bg-green-100 text-green-800 border border-green-300'
                                  : selectedAnswers[index] === optionIndex && optionIndex !== question.correctAnswer
                                  ? 'bg-red-100 text-red-800 border border-red-300'
                                  : 'bg-white'
                              }`}
                            >
                              <span className="font-medium mr-2">{String.fromCharCode(65 + optionIndex)}.</span>
                              {option}
                              {optionIndex === question.correctAnswer && (
                                <span className="ml-2 text-green-600">✓ Correct</span>
                              )}
                              {selectedAnswers[index] === optionIndex && optionIndex !== question.correctAnswer && (
                                <span className="ml-2 text-red-600">✗ Your answer</span>
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 p-3 bg-blue-50 rounded border border-blue-200">
                          <p className="text-sm text-blue-800">
                            <strong>Explanation:</strong> {question.explanation}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-4 mt-6">
                    <button
                      onClick={resetQuiz}
                      className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Retake Quiz
                    </button>
                  </div>
                </div>
              )}

              {/* Complete Button */}
              <div className="flex justify-end">
                <button
                  onClick={handleCompleteCheckpoint}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    checkpoint.isCompleted
                      ? 'bg-green-100 text-green-800 cursor-default'
                      : 'bg-fortinet-red text-white hover:bg-red-700 hover:shadow-lg'
                  }`}
                  disabled={checkpoint.type === 'quiz' && !showResults && checkpoint.quiz}
                >
                  {checkpoint.isCompleted ? '✓ Completed' : 'Mark as Complete'}
                </button>
              </div>

              {/* XP Animation */}
              <AnimatePresence>
                {showXPAnimation && (
                  <motion.div
                    className="fixed inset-0 flex items-center justify-center pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="text-6xl font-bold text-yellow-500"
                      initial={{ scale: 0, y: 50 }}
                      animate={{ scale: 1, y: -50 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      +{checkpoint.xpReward} XP
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};