import { motion } from 'framer-motion';
import { Edit3, Save, RotateCcw, LogOut } from 'lucide-react';

const EditToolbar = ({ 
  isEditing, 
  setIsEditing, 
  onReset, 
  onLogout, 
  isAdmin 
}) => {
  if (!isAdmin) return null;

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 right-4 z-40 flex items-center gap-2"
    >
      <div className="glass-card px-4 py-2 flex items-center gap-2">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
            isEditing 
              ? 'bg-accent text-white' 
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
          }`}
        >
          <Edit3 className="w-4 h-4" />
          {isEditing ? 'Exit Edit' : 'Edit Mode'}
        </button>

        {isEditing && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2"
          >
            <button
              onClick={onReset}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all"
              title="Reset to defaults"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </motion.div>
        )}

        <button
          onClick={onLogout}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20 transition-all"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>

      {isEditing && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card px-3 py-2"
        >
          <div className="flex items-center gap-2 text-sm text-green-400">
            <Save className="w-4 h-4" />
            Auto-saving...
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default EditToolbar;