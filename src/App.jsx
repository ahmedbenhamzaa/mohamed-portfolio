import { useEffect, useState } from 'react';
import { Footer, Navbar } from './components/index.js';
import { getHashPath } from './utils/link.js';
import HomePage from './routes/HomePage.jsx';
import PsychiatryPage from './routes/PsychiatryPage.jsx';
import StrategyPage from './routes/StrategyPage.jsx';
import TrainingPage from './routes/TrainingPage.jsx';
import LeadershipPage from './routes/LeadershipPage.jsx';
import PublicationsPage from './routes/PublicationsPage.jsx';
import SpeakingPage from './routes/SpeakingPage.jsx';
import ContactPage from './routes/ContactPage.jsx';

const routes = {
  '/': HomePage,
  '/psychiatry': PsychiatryPage,
  '/strategy': StrategyPage,
  '/training': TrainingPage,
  '/leadership': LeadershipPage,
  '/publications': PublicationsPage,
  '/speaking': SpeakingPage,
  '/contact': ContactPage,
};

function useHashRoute() {
  const [path, setPath] = useState(getHashPath);

  useEffect(() => {
    const update = () => setPath(getHashPath());
    window.addEventListener('hashchange', update);
    window.addEventListener('popstate', update);
    return () => {
      window.removeEventListener('hashchange', update);
      window.removeEventListener('popstate', update);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [path]);

  return path;
}

export default function App() {
  const path = useHashRoute();
  const Page = routes[path] || HomePage;

  return (
    <div className="min-h-screen bg-deep-navy text-white">
      <Navbar />
      <Page />
      <Footer />
    </div>
  );
}
