import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, X } from 'lucide-react';
import EditableText from '../components/EditableText';

const SkillsSection = ({ content, updateContent, isEditing }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState('All');

  const skills = content.skills || [];
  const categories = ['All', ...new Set(skills.map(skill => skill.category))];
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const addSkill = () => {
    const newSkill = {
      id: Date.now(),
      name: 'New Skill',
      level: 80,
      category: 'Programming'
    };
    updateContent('skills', [...skills, newSkill]);
  };

  const removeSkill = (id) => {
    updateContent('skills', skills.filter(skill => skill.id !== id));
  };

  const updateSkill = (id, field, value) => {
    updateContent('skills', skills.map(skill => 
      skill.id === id ? { ...skill, [field]: value } : skill
    ));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20 relative">
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
              <span className="neon-text">Skills & Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels across various domains
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-accent text-white'
                    : 'glass-card text-gray-300 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Add Skill Button */}
          {isEditing && (
            <motion.div variants={itemVariants} className="text-center mb-8">
              <button
                onClick={addSkill}
                className="glass-button flex items-center gap-2 mx-auto"
              >
                <Plus className="w-4 h-4" />
                Add Skill
              </button>
            </motion.div>
          )}

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                variants={itemVariants}
                className="glass-card p-6 relative group"
              >
                {isEditing && (
                  <button
                    onClick={() => removeSkill(skill.id)}
                    className="absolute top-2 right-2 text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">
                      <EditableText
                        value={skill.name}
                        onChange={(value) => updateSkill(skill.id, 'name', value)}
                        isEditing={isEditing}
                        placeholder="Skill Name"
                      />
                    </h3>
                    <span className="text-accent font-bold">
                      {isEditing ? (
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={skill.level}
                          onChange={(e) => updateSkill(skill.id, 'level', parseInt(e.target.value) || 0)}
                          className="edit-input w-16 text-center"
                        />
                      ) : (
                        `${skill.level}%`
                      )}
                    </span>
                  </div>
                  
                  <div className="text-sm text-gray-400 mb-3">
                    <EditableText
                      value={skill.category}
                      onChange={(value) => updateSkill(skill.id, 'category', value)}
                      isEditing={isEditing}
                      placeholder="Category"
                    />
                  </div>

                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredSkills.length === 0 && (
            <motion.div variants={itemVariants} className="text-center py-12">
              <p className="text-gray-400">No skills found in this category.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;