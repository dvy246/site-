import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Plus, X, Star } from 'lucide-react';
import EditableText from '../components/EditableText';
import ImageUpload from '../components/ImageUpload';

const ProjectsSection = ({ content, updateContent, isEditing }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = content.projects || [];
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const addProject = () => {
    const newProject = {
      id: Date.now(),
      title: 'New Project',
      description: 'Project description...',
      image: null,
      tech: ['Python'],
      github: '',
      demo: '',
      featured: false
    };
    updateContent('projects', [...projects, newProject]);
  };

  const removeProject = (id) => {
    updateContent('projects', projects.filter(p => p.id !== id));
  };

  const updateProject = (id, field, value) => {
    updateContent('projects', projects.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ));
  };

  const updateTech = (id, techArray) => {
    updateProject(id, 'tech', techArray);
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const ProjectCard = ({ project, featured = false }) => (
    <motion.div
      variants={itemVariants}
      className={`glass-card overflow-hidden group relative ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      {project.featured && (
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-gradient-accent text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <Star className="w-3 h-3" />
            Featured
          </div>
        </div>
      )}

      {isEditing && (
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <button
            onClick={() => updateProject(project.id, 'featured', !project.featured)}
            className={`p-2 rounded-lg transition-colors ${
              project.featured 
                ? 'bg-accent text-white' 
                : 'bg-black/50 text-gray-400 hover:text-accent'
            }`}
            title="Toggle Featured"
          >
            <Star className="w-4 h-4" />
          </button>
          <button
            onClick={() => removeProject(project.id)}
            className="bg-red-500/20 text-red-400 hover:text-red-300 p-2 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Project Image */}
      <div className={`relative overflow-hidden ${featured ? 'h-64' : 'h-48'}`}>
        <ImageUpload
          image={project.image}
          onImageChange={(image) => updateProject(project.id, 'image', image)}
          onImageRemove={() => updateProject(project.id, 'image', null)}
          isEditing={isEditing}
          className="w-full h-full"
          placeholder="Project Screenshot"
        />
        {!project.image && (
          <div className="w-full h-full bg-gradient-card flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="text-4xl mb-2">🚀</div>
              <p>Project Image</p>
            </div>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Links */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-accent transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-accent transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">
          <EditableText
            value={project.title}
            onChange={(value) => updateProject(project.id, 'title', value)}
            isEditing={isEditing}
            placeholder="Project Title"
          />
        </h3>

        <p className="text-gray-400 mb-4 leading-relaxed">
          <EditableText
            value={project.description}
            onChange={(value) => updateProject(project.id, 'description', value)}
            isEditing={isEditing}
            multiline={true}
            rows={3}
            placeholder="Project description..."
          />
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech?.map((tech, index) => (
            <span
              key={index}
              className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium"
            >
              {isEditing ? (
                <input
                  type="text"
                  value={tech}
                  onChange={(e) => {
                    const newTech = [...project.tech];
                    newTech[index] = e.target.value;
                    updateTech(project.id, newTech);
                  }}
                  className="bg-transparent border-none outline-none w-20"
                />
              ) : (
                tech
              )}
            </span>
          ))}
          {isEditing && (
            <button
              onClick={() => updateTech(project.id, [...(project.tech || []), 'New Tech'])}
              className="bg-white/10 text-gray-400 hover:text-accent px-3 py-1 rounded-full text-sm transition-colors"
            >
              + Add Tech
            </button>
          )}
        </div>

        {/* Links in Edit Mode */}
        {isEditing && (
          <div className="space-y-2">
            <input
              type="url"
              value={project.github || ''}
              onChange={(e) => updateProject(project.id, 'github', e.target.value)}
              placeholder="GitHub URL"
              className="edit-input w-full text-sm"
            />
            <input
              type="url"
              value={project.demo || ''}
              onChange={(e) => updateProject(project.id, 'demo', e.target.value)}
              placeholder="Demo URL"
              className="edit-input w-full text-sm"
            />
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="neon-text">Featured Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A showcase of my most impactful data science and machine learning projects
            </p>
          </motion.div>

          {/* Add Project Button */}
          {isEditing && (
            <motion.div variants={itemVariants} className="text-center mb-8">
              <button
                onClick={addProject}
                className="glass-button flex items-center gap-2 mx-auto"
              >
                <Plus className="w-4 h-4" />
                Add Project
              </button>
            </motion.div>
          )}

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <motion.div variants={containerVariants} className="grid lg:grid-cols-2 gap-8 mb-16">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured={true} />
              ))}
            </motion.div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <>
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-300">Other Projects</h3>
              </motion.div>
              
              <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            </>
          )}

          {projects.length === 0 && (
            <motion.div variants={itemVariants} className="text-center py-12">
              <p className="text-gray-400">No projects added yet.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;