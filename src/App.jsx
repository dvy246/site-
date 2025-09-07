import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

// Components
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import LoginModal from './components/LoginModal';
import EditToolbar from './components/EditToolbar';

// Sections
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';

// Hooks
import { useAuth } from './hooks/useAuth';
import { useContent } from './hooks/useContent';

function App() {
  const { isLoggedIn, login, logout } = useAuth();
  const { content, updateContent, isEditing, setIsEditing, resetContent } = useContent();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all content to defaults? This cannot be undone.')) {
      resetContent();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-main text-white relative overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navigation isAdmin={isLoggedIn} />

      {/* Admin Login Button */}
      {!isLoggedIn && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
          onClick={() => setShowLoginModal(true)}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          title="Admin Login"
        >
          <Settings className="w-5 h-5 text-white" />
        </motion.button>
      )}

      {/* Edit Toolbar */}
      <EditToolbar
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        onReset={handleReset}
        onLogout={logout}
        isAdmin={isLoggedIn}
      />

      {/* Login Modal */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={login}
      />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection
          content={content}
          updateContent={updateContent}
          isEditing={isEditing}
        />
        
        <AboutSection
          content={content}
          updateContent={updateContent}
          isEditing={isEditing}
        />
        
        <SkillsSection
          content={content}
          updateContent={updateContent}
          isEditing={isEditing}
        />
        
        <ProjectsSection
          content={content}
          updateContent={updateContent}
          isEditing={isEditing}
        />
        
        <ExperienceSection
          content={content}
          updateContent={updateContent}
          isEditing={isEditing}
        />
        
        <ContactSection
          content={content}
          updateContent={updateContent}
          isEditing={isEditing}
        />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 {content.home?.title || 'Portfolio'}. Built with React & Tailwind CSS.
          </p>
          {isLoggedIn && (
            <p className="text-xs text-green-400 mt-2">
              ✓ All changes are automatically saved to localStorage
            </p>
          )}
        </div>
      </footer>
    </div>
  );
}

export default App;