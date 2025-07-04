import { Helmet } from 'react-helmet';
import { Github, ExternalLink } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { AnimatedSection } from '../components/AnimatedSection';
import BloodDonation from '../assets/blood-donation.png';
import GPACalculator from '../assets/gpa-calculator.png';
import HTMLPortfolio from '../assets/html-portfolio.png';
import NewsBlog from '../assets/news-blog.png';
import JavaLMS from '../assets/java-lms.png';
import TPSriLanka from '../assets/tp-srilanka.png';
import JaniReside from '../assets/jani-reside.png';
import VinuSafari from '../assets/vinu-safari.png';
import TravelPage from '../assets/travel-page.gif';
import BMICalculator from '../assets/bmi-calculator.png';

const projects = [
  {
    title: 'Boat Safari Management System',
    description: 'A full-stack blood donation solution built with PHP and MySQL',
    image: BloodDonation,
    technologies: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
    github: 'https://github.com/tharushi-dananjana/IWT-project.git',
    live: 'https://github.com/tharushi-dananjana/IWT-project.git',
  },
  {
    title: 'House Design',
    description: 'Developed a GPA calculator web application for SLIIT students',
    image: GPACalculator,
    technologies: ['HTML', 'React', 'Tailwind', 'TypeScript', 'Ubuntu'],
    github: 'https://github.com/tharushi-dananjana/house-design.git',
    live: 'https://github.com/tharushi-dananjana/house-design.git',
  },
  {
    title: 'Simple Portfolio Website',
    description: 'A front-end portfolio website with modern looking user interface',
    image: HTMLPortfolio,
    technologies: ['HTML', 'CSS', 'JS', 'Sitemap', 'Forms'],
    github: 'https://github.com/tharushi-dananjana/protfolio.git',
    live: 'https://github.com/tharushi-dananjana/protfolio.git',
  },
  {
    title: 'Library Management System',
    description: 'Created a library management system with Java and MySQL',
    image: JavaLMS,
    technologies: ['Java', 'MySQL', 'Servlet', 'Tomcat', 'MVC'],
    github: 'https://github.com/anupaprabhasara/Java-Library-Management-System',
    live: 'https://github.com/anupaprabhasara/Java-Library-Management-System',
  },
  {
    title: 'Hotel Booking Website',
    description: 'Created a responsive hotel booking website with WordPress',
    image: JaniReside,
    technologies: ['WordPress', 'PHP', 'Brevo', 'Nginx', 'Ubuntu'],
    github: 'https://github.com/anupaprabhasara',
    live: 'https://janishiresidencies.com',
  },
  {
    title: 'Safari Booking Platform',
    description: 'Created a responsive safari booking website with WordPress',
    image: VinuSafari,
    technologies: ['WordPress', 'PHP', 'Brevo', 'Nginx', 'Ubuntu'],
    github: 'https://github.com/anupaprabhasara',
    live: 'https://vinusafari.com',
  },
];

export default function Projects() {
  return (
    <PageLayout>
      <Helmet>
        <title>Projects</title>
        <meta name="description" content="Showcasing Anupa Prabhasara’s diverse range of web development and software engineering projects. From frontend design to backend development, dive into my creative process and the innovative solutions I've developed." />
        <link rel="canonical" href="https://www.anupa.lk/projects" />
      </Helmet>

      <AnimatedSection>
        <h2 className="cursor-default text-4xl font-bold gradient-text pb-1">Projects</h2>
      </AnimatedSection>
      
      <div className="cursor-default mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <AnimatedSection key={project.title} delay={index * 0.05}>
            <div className="card-gradient rounded-lg shadow-lg overflow-hidden border border-white/10">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </PageLayout>
  );
}