import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import EditableText from '../components/EditableText';
import ImageUpload from '../components/ImageUpload';

const HeroSection = ({ content, updateContent, isEditing }) => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-accent/50 shadow-lg shadow-accent/25">
                <ImageUpload
                  image={content.about?.image}
                  onImageChange={(image) => updateContent('about', prev => ({ ...prev, image }))}
                  onImageRemove={() => updateContent('about', prev => ({ ...prev, image: null }))}
                  isEditing={isEditing}
                  className="w-full h-full"
                  placeholder="Profile Photo"
                />
                {!content.about?.image && (
                  <div className="w-full h-full bg-gradient-accent flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {content.home?.title?.charAt(0) || 'S'}
                    </span>
                  </div>
                )}
              </div>
              <div className="absolute -inset-1 bg-gradient-accent rounded-full blur opacity-30 animate-pulse"></div>
            </div>
          </div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <EditableText
              value={content.home?.title}
              onChange={(value) => updateContent('home', prev => ({ ...prev, title: value }))}
              isEditing={isEditing}
              className="neon-text"
              placeholder="Your Name"
            />
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            <EditableText
              value={content.home?.subtitle}
              onChange={(value) => updateContent('home', prev => ({ ...prev, subtitle: value }))}
              isEditing={isEditing}
              className="font-light"
              placeholder="Your Title/Role"
            />
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            <EditableText
              value={content.home?.description}
              onChange={(value) => updateContent('home', prev => ({ ...prev, description: value }))}
              isEditing={isEditing}
              multiline={true}
              rows={3}
              placeholder="Brief description about yourself and your expertise"
            />
          </motion.p>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {content.contact?.email && (
              <a
                href={`mailto:${content.contact.email}`}
                className="flex items-center gap-2 glass-card px-4 py-2 hover:bg-white/10 transition-all group"
              >
                <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-gray-300">Email</span>
              </a>
            )}
            {content.contact?.github && (
              <a
                href={content.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 glass-card px-4 py-2 hover:bg-white/10 transition-all group"
              >
                <Github className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-gray-300">GitHub</span>
              </a>
            )}
            {content.contact?.linkedin && (
              <a
                href={content.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 glass-card px-4 py-2 hover:bg-white/10 transition-all group"
              >
                <Linkedin className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-gray-300">LinkedIn</span>
              </a>
            )}
            {content.contact?.location && (
              <div className="flex items-center gap-2 glass-card px-4 py-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-gray-300">{content.contact.location}</span>
              </div>
            )}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            onClick={scrollToAbout}
            className="glass-button animate-glow"
          >
            Explore My Work
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-accent transition-colors animate-bounce"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;