import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Suspense, lazy } from 'react';
import { Navigation } from './components/Navigation';
import { LoadingSpinner } from './components/LoadingSpinner';
import { useTheme } from './hooks/useTheme';
import { useRoutePersistence } from './hooks/useRoutePersistence';
import DisableActions from './components/DisableActions';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.default })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.default })));
const Projects = lazy(() => import('./pages/Projects').then(module => ({ default: module.default })));
const Experience = lazy(() => import('./pages/Experience').then(module => ({ default: module.default })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.default })));

function AppRoutes() {
  useRoutePersistence();
  
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AnimatePresence mode="wait">
        <DisableActions />
        <Helmet>
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Anupa Prabhasara",
                "description": "A Software Engineering undergraduate with a passion for web development and software engineering",
                "url": "https://www.anupa.lk",
                "image": "https://www.anupa.lk/assets/hero-BxTA0USW.jpg",
                "sameAs": [
                  "https://www.linkedin.com/in/anupaprabhasara",
                  "https://github.com/anupaprabhasara",
                  "https://x.com/anupaprabhasara"
                ],
                "jobTitle": "Software Engineering Undergraduate",
                "worksFor": {
                  "@type": "Organization",
                  "name": "SLIIT",
                  "url": "https://www.sliit.lk"
                },
                "knowsAbout": [
                  "Web Development",
                  "Software Engineering",
                  "Frontend Development",
                  "Backend Development",
                  "Cloud Computing"
                ],
                "skills": [
                  "HTML", "CSS", "Vanilla JS", "React JS", "TypeScript", "Tailwind CSS",
                  "Node.js", "Express.js", "GraphQL", "MongoDB", "MySQL", "PHP", "AWS",
                  "DigitalOcean", "Ubuntu Server", "Git", "GitHub", "VS Code", "Android Studio"
                ],
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://www.anupa.lk"
                }
              }
            `}
          </script>
        </Helmet>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default function App() {
  const { theme, setTheme } = useTheme();

  return (
    <Router>
      <div className={theme}>
        <Navigation theme={theme} setTheme={setTheme} />
        <AppRoutes />
      </div>
    </Router>
  );
}