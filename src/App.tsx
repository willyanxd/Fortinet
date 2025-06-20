import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { ModuleDetail } from './pages/ModuleDetail';
import { AchievementNotification } from './components/AchievementNotification';
import { useProgress } from './hooks/useProgress';
import { Achievement } from './types';

function App() {
  const { progress } = useProgress();
  const [currentAchievement, setCurrentAchievement] = useState<Achievement | null>(null);
  const [lastAchievementCount, setLastAchievementCount] = useState(0);

  useEffect(() => {
    if (progress.achievements.length > lastAchievementCount) {
      const newAchievement = progress.achievements[progress.achievements.length - 1];
      setCurrentAchievement(newAchievement);
      setLastAchievementCount(progress.achievements.length);
    }
  }, [progress.achievements, lastAchievementCount]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/module/:moduleId" element={<ModuleDetail />} />
        </Routes>
        
        <AchievementNotification
          achievement={currentAchievement}
          onClose={() => setCurrentAchievement(null)}
        />
      </div>
    </Router>
  );
}

export default App;