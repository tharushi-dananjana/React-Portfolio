import { Helmet } from 'react-helmet';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { AnimatedSection } from '../components/AnimatedSection';
import ProPic from '../assets/hero.jpg';

export default function Home() {
  return (
    <PageLayout>
      <Helmet>
        <title>Tharushi Dananjana</title>
        <meta name="description" content="Explore my journey as a Software Engineering undergraduate 
        passionate about web development and software solutions. Learn about my skills, projects, and 
        how we can collaborate to create amazing digital solutions." />
        
      </Helmet>
      
      <div className="text-center">
        <AnimatedSection>
          <div className="relative">
            <img
              src={ProPic}
              alt="Profile"
              className="mx-auto h-32 w-32 rounded-full object-cover ring-4 ring-black/10 dark:ring-white/10 shadow-xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-pink-500/20 animate-pulse" />
          </div>
          
          <h1 className="cursor-default mt-6 text-5xl font-bold gradient-text">
            Tharushi Dananjana
          </h1>
          <p className="cursor-default mt-2 text-xl text-gray-600 dark:text-gray-400">
            Information Technology Undergraduate
          </p>
          <p className="cursor-default mt-4 max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            Hi! I’m Tharushi Dananjana, a Information Technology Undergraduate passionate about web development. 
            This site showcases my projects and ideas, blending technical skills with 
            creative design to create user-friendly experiences.<br /><br />Join me as I explore how technology 
            solves problems and improves lives. Let’s build something great together!
          </p>
          
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://github.com/tharushi-dananjana"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 backdrop-blur-sm hover:bg-gray-300 text-gray-500 hover:text-gray-900 
              dark:bg-white/10 dark:hover:bg-white/20 dark:text-gray-400 dark:hover:text-white"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/tharushi-dananjana"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 backdrop-blur-sm hover:bg-gray-300 text-gray-500 hover:text-gray-900 
              dark:bg-white/10 dark:hover:bg-white/20 dark:text-gray-400 dark:hover:text-white"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              className="p-3 rounded-full bg-gray-200 backdrop-blur-sm hover:bg-gray-300 text-gray-500 hover:text-gray-900 
              dark:bg-white/10 dark:hover:bg-white/20 dark:text-gray-400 dark:hover:text-white"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  );
}