import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Plus, X } from 'lucide-react';
import EditableText from '../components/EditableText';

const ExperienceSection = ({ content, updateContent, isEditing }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experience = content.experience || [];

  const addExperience = () => {
    const newExp = {
      id: Date.now(),
      title: 'New Position',
      company: 'Company Name',
      period: '2023 - Present',
      description: 'Job description...',
      achievements: ['Achievement 1', 'Achievement 2']
    };
    updateContent('experience', [...experience, newExp]);
  };

  const removeExperience = (id) => {
    updateContent('experience', experience.filter(exp => exp.id !== id));
  };

  const updateExperience = (id, field, value) => {
    updateContent('experience', experience.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const updateAchievement = (expId, achievementIndex, value) => {
    updateContent('experience', experience.map(exp => {
      if (exp.id === expId) {
        const newAchievements = [...(exp.achievements || [])];
        newAchievements[achievementIndex] = value;
        return { ...exp, achievements: newAchievements };
      }
      return exp;
    }));
  };

  const addAchievement = (expId) => {
    updateContent('experience', experience.map(exp => {
      if (exp.id === expId) {
        return { ...exp, achievements: [...(exp.achievements || []), 'New achievement'] };
      }
      return exp;
    }));
  };

  const removeAchievement = (expId, achievementIndex) => {
    updateContent('experience', experience.map(exp => {
      if (exp.id === expId) {
        const newAchievements = [...(exp.achievements || [])];
        newAchievements.splice(achievementIndex, 1);
        return { ...exp, achievements: newAchievements };
      }
      return exp;
    }));
  };

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="experience" className="py-20 relative">
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
              <span className="neon-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              My professional journey in data science and machine learning
            </p>
          </motion.div>

          {/* Add Experience Button */}
          {isEditing && (
            <motion.div variants={itemVariants} className="text-center mb-8">
              <button
                onClick={addExperience}
                className="glass-button flex items-center gap-2 mx-auto"
              >
                <Plus className="w-4 h-4" />
                Add Experience
              </button>
            </motion.div>
          )}

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-accent"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/25">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass-card p-8 relative group">
                    {isEditing && (
                      <button
                        onClick={() => removeExperience(exp.id)}
                        className="absolute top-4 right-4 text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}

                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2">
                        <EditableText
                          value={exp.title}
                          onChange={(value) => updateExperience(exp.id, 'title', value)}
                          isEditing={isEditing}
                          placeholder="Job Title"
                        />
                      </h3>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                        <h4 className="text-lg text-accent font-semibold">
                          <EditableText
                            value={exp.company}
                            onChange={(value) => updateExperience(exp.id, 'company', value)}
                            isEditing={isEditing}
                            placeholder="Company Name"
                          />
                        </h4>
                        <span className="text-gray-400">
                          <EditableText
                            value={exp.period}
                            onChange={(value) => updateExperience(exp.id, 'period', value)}
                            isEditing={isEditing}
                            placeholder="2023 - Present"
                          />
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      <EditableText
                        value={exp.description}
                        onChange={(value) => updateExperience(exp.id, 'description', value)}
                        isEditing={isEditing}
                        multiline={true}
                        rows={3}
                        placeholder="Job description and responsibilities..."
                      />
                    </p>

                    {/* Achievements */}
                    <div>
                      <h5 className="font-semibold mb-3 text-gray-200">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements?.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3 group/achievement">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <div className="flex-1">
                              <EditableText
                                value={achievement}
                                onChange={(value) => updateAchievement(exp.id, achIndex, value)}
                                isEditing={isEditing}
                                className="text-gray-300"
                                placeholder="Achievement description..."
                              />
                            </div>
                            {isEditing && (
                              <button
                                onClick={() => removeAchievement(exp.id, achIndex)}
                                className="text-red-400 hover:text-red-300 opacity-0 group-hover/achievement:opacity-100 transition-opacity"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            )}
                          </li>
                        ))}
                        {isEditing && (
                          <li>
                            <button
                              onClick={() => addAchievement(exp.id)}
                              className="text-accent hover:text-accent/80 text-sm flex items-center gap-2"
                            >
                              <Plus className="w-3 h-3" />
                              Add Achievement
                            </button>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {experience.length === 0 && (
            <motion.div variants={itemVariants} className="text-center py-12">
              <p className="text-gray-400">No experience added yet.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;