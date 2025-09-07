import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Twitter, MapPin, Send } from 'lucide-react';
import EditableText from '../components/EditableText';

const ContactSection = ({ content, updateContent, isEditing }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: content.contact?.email,
      href: `mailto:${content.contact?.email}`,
      field: 'email'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: content.contact?.github,
      href: content.contact?.github,
      field: 'github'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: content.contact?.linkedin,
      href: content.contact?.linkedin,
      field: 'linkedin'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: content.contact?.twitter,
      href: content.contact?.twitter,
      field: 'twitter'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: content.contact?.location,
      href: null,
      field: 'location'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="neon-text">Get In Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Ready to collaborate on your next data science project? Let's connect and discuss how we can turn your data into actionable insights.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    if (!item.value && !isEditing) return null;
                    
                    return (
                      <div key={index} className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-400 text-sm">{item.label}</p>
                          {isEditing ? (
                            <EditableText
                              value={item.value}
                              onChange={(value) => updateContent('contact', prev => ({ ...prev, [item.field]: value }))}
                              isEditing={isEditing}
                              placeholder={`Your ${item.label.toLowerCase()}`}
                              className="text-white font-medium"
                            />
                          ) : item.href ? (
                            <a
                              href={item.href}
                              target={item.field !== 'email' ? '_blank' : undefined}
                              rel={item.field !== 'email' ? 'noopener noreferrer' : undefined}
                              className="text-white font-medium hover:text-accent transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-white font-medium">{item.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Call to Action */}
              <motion.div variants={itemVariants} className="glass-card p-8 text-center">
                <h4 className="text-xl font-bold mb-4">Let's Build Something Amazing</h4>
                <p className="text-gray-400 mb-6">
                  Whether you need help with machine learning models, data analysis, or AI strategy, I'm here to help turn your vision into reality.
                </p>
                {content.contact?.email && (
                  <a
                    href={`mailto:${content.contact.email}`}
                    className="glass-button inline-flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </a>
                )}
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        className="edit-input w-full"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="edit-input w-full"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      className="edit-input w-full"
                      placeholder="Project collaboration"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={6}
                      className="edit-textarea w-full"
                      placeholder="Tell me about your project and how I can help..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="glass-button w-full flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
                
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Note: This is a demo form. In production, integrate with a backend service.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;