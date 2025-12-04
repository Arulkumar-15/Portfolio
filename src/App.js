import { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Loading } from './components/ui/Loading';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { analytics } from './config/firebase';
import { logEvent } from 'firebase/analytics';

// Lazy load sections for better performance
const About = lazy(() => import('./components/sections/About').then(module => ({ default: module.About })));
const Experience = lazy(() => import('./components/sections/Experience').then(module => ({ default: module.Experience })));
const Projects = lazy(() => import('./components/sections/Projects').then(module => ({ default: module.Projects })));
const Skills = lazy(() => import('./components/sections/Skills').then(module => ({ default: module.Skills })));
const Contact = lazy(() => import('./components/sections/Contact').then(module => ({ default: module.Contact })));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Firebase Analytics
    if (analytics) {
      logEvent(analytics, 'page_view', {
        page_title: 'Portfolio Home',
        page_location: window.location.href
      });
    }

    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loading key="loading" onLoadComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-dark-50 overflow-x-hidden">
          <Navbar />
          <main>
            <Hero />
            <Suspense fallback={<div className="h-screen" />}>
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Contact />
            </Suspense>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}

export default App;
