import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import EditableText from '../components/EditableText';
import ImageUpload from '../components/ImageUpload';

const AboutSection = ({ content, updateContent, isEditing }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="neon-text">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-card p-8">
                <EditableText
                  value={content.about?.content}
                  onChange={(value) => updateContent('about', prev => ({ ...prev, content: value }))}
                  isEditing={isEditing}
                  multiline={true}
                  rows={8}
                  className="text-gray-300 leading-relaxed whitespace-pre-line"
                  placeholder="Write about your background, experience, and what drives you in data science..."
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {content.about?.stats?.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="glass-card p-4 text-center"
                  >
                    <div className="text-2xl font-bold neon-text mb-1">
                      <EditableText
                        value={stat.value}
                        onChange={(value) => {
                          const newStats = [...(content.about?.stats || [])];
                          newStats[index] = { ...newStats[index], value };
                          updateContent('about', prev => ({ ...prev, stats: newStats }));
                        }}
                        isEditing={isEditing}
                        placeholder="Value"
                      />
                    </div>
                    <div className="text-sm text-gray-400">
                      <EditableText
                        value={stat.label}
                        onChange={(value) => {
                          const newStats = [...(content.about?.stats || [])];
                          newStats[index] = { ...newStats[index], label: value };
                          updateContent('about', prev => ({ ...prev, stats: newStats }));
                        }}
                        isEditing={isEditing}
                        placeholder="Label"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="glass-card p-8">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <ImageUpload
                    image={content.about?.image}
                    onImageChange={(image) => updateContent('about', prev => ({ ...prev, image }))}
                    onImageRemove={() => updateContent('about', prev => ({ ...prev, image: null }))}
                    isEditing={isEditing}
                    className="w-full h-full"
                    placeholder="About Photo"
                  />
                  {!content.about?.image && (
                    <div className="w-full h-full bg-gradient-card flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <div className="text-6xl mb-4">👨‍💻</div>
                        <p>Professional Photo</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-purple/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;