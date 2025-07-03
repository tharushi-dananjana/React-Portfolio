import { useState } from 'react';
import { AnimatedSection } from '../AnimatedSection';
import { sendContactForm } from '../../utils/contact';
import type { ContactFormData } from '../../types/contact';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      await sendContactForm(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection delay={0.4}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-800/50 
                     border border-gray-200 dark:border-gray-700 dark:text-white
                     focus:ring-2 focus:ring-blue-500/25 focus:border-white/50
                     dark:focus:border-gray-800/50 focus:outline-none
                     placeholder-gray-400 dark:placeholder-gray-500
                     backdrop-blur-sm resize-none"
            placeholder="Your name"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-800/50 
                     border border-gray-200 dark:border-gray-700 dark:text-white
                     focus:ring-2 focus:ring-blue-500/25 focus:border-white/50
                     dark:focus:border-gray-800/50 focus:outline-none
                     placeholder-gray-400 dark:placeholder-gray-500
                     backdrop-blur-sm resize-none"
            placeholder="username@domain.com"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-800/50 
                     border border-gray-200 dark:border-gray-700 dark:text-white
                     focus:ring-2 focus:ring-blue-500/25 focus:border-white/50
                     dark:focus:border-gray-800/50 focus:outline-none
                     placeholder-gray-400 dark:placeholder-gray-500
                     backdrop-blur-sm resize-none"
            placeholder="Your message..."
            disabled={isSubmitting}
          />
        </div>
        
        {submitStatus === 'success' && (
          <div className="text-green-600 dark:text-green-400 text-sm font-medium bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
            Message sent successfully! We'll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="text-red-600 dark:text-red-400 text-sm font-medium bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white
                   hover:from-blue-700 hover:to-blue-800 focus:outline-none
                   focus:ring-blue-500 focus:ring-offset-2 py-4 px-6 rounded-lg
                   disabled:opacity-50 disabled:cursor-not-allowed
                   font-medium text-sm shadow-lg focus:ring-2"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </AnimatedSection>
  );
}