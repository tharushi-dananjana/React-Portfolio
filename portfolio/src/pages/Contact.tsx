import { Helmet } from 'react-helmet';
import { Mail, Phone, MapPin } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { AnimatedSection } from '../components/AnimatedSection';
import { ContactForm } from '../components/forms/ContactForm';

export default function Contact() {
  return (
    <PageLayout>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Get in touch with Tharushi Dananjana for collaboration and projects! Whether you're 
        looking for web development expertise or software solutions, I'm here to create impactful digital experiences together." />
        <link rel="canonical" href="https://www.anupa.lk/contact" />
      </Helmet>

      <AnimatedSection>
        <h2 className="cursor-default text-4xl font-bold gradient-text pb-1">Contact</h2>
      </AnimatedSection>
      
      <div className="cursor-default mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatedSection delay={0.2}>
          <div className="card-gradient rounded-lg p-6">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <div className="mt-8 space-y-6">
            <a 
                href="mailto:info@anupa.lk"
                className="flex items-center group"
              >
                <div className="p-3 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="ml-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 
                transition-colors">
                  tdananjana075@gmail.com
                </span>
              </a>
              <a 
                href="tel:+94712003344"
                className="flex items-center group"
              >
                <div className="p-3 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="ml-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 
                transition-colors">
                  +94 (70) 582 3421
                </span>
              </a>
              <a 
                //href="https://www.google.com/search?q=tharu.lk"
                className="flex items-center group"
              >
                <div className="p-3 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="ml-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 
                transition-colors">
                  Tangalle, Sri Lanka
                </span>
              </a>
            </div>
          </div>
        </AnimatedSection>
        
        <ContactForm />
      </div>
    </PageLayout>
  );
}