import { useRef } from 'react';
import { Upload, X } from 'lucide-react';
import { motion } from 'framer-motion';

const ImageUpload = ({ 
  image, 
  onImageChange, 
  onImageRemove, 
  isEditing, 
  className = '',
  placeholder = 'Upload Image'
}) => {
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      // Check file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        onImageChange(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = (e) => {
    e.stopPropagation();
    onImageRemove();
  };

  if (!isEditing && !image) {
    return null;
  }

  return (
    <div className={`relative ${className}`}>
      {image ? (
        <div className="relative group">
          <img
            src={image}
            alt="Uploaded content"
            className="w-full h-full object-cover rounded-lg"
          />
          {isEditing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
            >
              <div className="flex gap-2">
                <button
                  onClick={handleUploadClick}
                  className="bg-accent text-white p-2 rounded-lg hover:bg-accent/80 transition-colors"
                >
                  <Upload className="w-4 h-4" />
                </button>
                <button
                  onClick={handleRemoveImage}
                  className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      ) : isEditing ? (
        <button
          onClick={handleUploadClick}
          className="w-full h-48 border-2 border-dashed border-white/20 rounded-lg flex flex-col items-center justify-center gap-2 hover:border-accent transition-colors group"
        >
          <Upload className="w-8 h-8 text-gray-400 group-hover:text-accent transition-colors" />
          <span className="text-gray-400 group-hover:text-accent transition-colors">
            {placeholder}
          </span>
          <span className="text-xs text-gray-500">
            Max 5MB • JPG, PNG, GIF
          </span>
        </button>
      ) : null}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </div>
  );
};

export default ImageUpload;