import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [contactType, setContactType] = useState<'hi' | 'quote'>('hi');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { contactType, ...formData });
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 mb-16 lg:mb-24"
        >
          <h2 className="inline-flex">
            <span className="bg-lime px-6 py-3 rounded-xl text-3xl lg:text-5xl font-bold border-2 border-black">
              Contact Us
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </motion.div>

        {/* Contact Form */}
        <div className="bg-gray-light rounded-3xl p-8 lg:p-12 xl:p-16">
          <div className="max-w-3xl mx-auto">
            {/* Radio Buttons */}
            <div className="flex gap-6 mb-8">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="contactType"
                  checked={contactType === 'hi'}
                  onChange={() => setContactType('hi')}
                  className="w-5 h-5 accent-black cursor-pointer"
                />
                <span className="text-base">Say Hi</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="contactType"
                  checked={contactType === 'quote'}
                  onChange={() => setContactType('quote')}
                  className="w-5 h-5 accent-black cursor-pointer"
                />
                <span className="text-base">Get a Quote</span>
              </label>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-black bg-white focus:outline-none focus:ring-2 focus:ring-lime transition-shadow"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-black bg-white focus:outline-none focus:ring-2 focus:ring-lime transition-shadow"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-black bg-white focus:outline-none focus:ring-2 focus:ring-lime transition-shadow resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-dark text-white hover:bg-dark/90 rounded-lg px-6 py-4 h-14 text-base font-normal transition-all duration-300"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
