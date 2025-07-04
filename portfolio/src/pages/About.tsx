
import { Helmet } from 'react-helmet';
import { PageLayout } from '../components/layout/PageLayout';
import { AnimatedSection } from '../components/AnimatedSection';
import AboutImg from '../assets/about.png';

export default function About() {  
  return (
    <PageLayout>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Learn more about Anupa Prabhasara, a dedicated Information Technology student 
        passionate about web development and software solutions. Discover my journey, skills, and how I strive to turn 
        ideas into functional and user-friendly digital experiences." />
      </Helmet>

      <AnimatedSection>
        <h2 className="cursor-default text-4xl font-bold gradient-text pb-1">About Me</h2>
      </AnimatedSection>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatedSection delay={0.2}>
        <div className="prose dark:prose-invert">
            <p className="cursor-default text-gray-600 dark:text-gray-400">
              Hi, I’m Tharushi Dananjana, a Information Technology undergraduate at SLIIT pursuing a BSc (Hons) in Information 
              Technology, specializing in Information Technology. I’ve completed my first year with a 
              CGPA of 2.97.<br /><br />I’m passionate about turning ideas into functional, user-friendly digital solutions.
              This website showcases my journey, projects, and the knowledge I’ve gained. Let’s connect and create something amazing together!
            </p>
            <h3 className="cursor-default text-xl font-semibold text-gray-900 dark:text-white mt-6">Skills</h3>
            <ul className="cursor-default mt-4 space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                Note: Skills marked with a strikethrough are currently being learned and have not yet been applied to projects. 
                The rest reflect my hands-on project experience.
              </li>
              <br />
              <li className="text-gray-600 dark:text-gray-400">
                Frontend: Vanilla JS, React JS, TypeScript, Tailwind CSS
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Backend: <s>Node.js, Express.js, MongoDB</s>, MySQL, PHP
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Other Languages: C, C++, Java, <s>Kotlin</s>
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Cloud: AWS, DigitalOcean, Linux Server
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Tools: Git, GitHub, VS Code, <s>Android Studio</s>
              </li>
            </ul>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          <img
            src={AboutImg}
            alt="About"
            className="rounded-lg shadow-lg"
          />
        </AnimatedSection>
      </div>
    </PageLayout>
  );
}