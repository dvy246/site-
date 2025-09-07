import { useState, useEffect } from 'react';
import { DEFAULT_CONTENT } from '../data/defaultContent';

export const useContent = () => {
  const [content, setContent] = useState(() => {
    try {
      const stored = localStorage.getItem('portfolio_content');
      return stored ? JSON.parse(stored) : DEFAULT_CONTENT;
    } catch (error) {
      console.error('Error loading content from localStorage:', error);
      return DEFAULT_CONTENT;
    }
  });

  const [isEditing, setIsEditing] = useState(false);

  // Auto-save with debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      try {
        localStorage.setItem('portfolio_content', JSON.stringify(content));
      } catch (error) {
        console.error('Error saving content to localStorage:', error);
      }
    }, 700);

    return () => clearTimeout(handler);
  }, [content]);

  const updateContent = (section, data) => {
    setContent(prev => ({
      ...prev,
      [section]: typeof data === 'function' ? data(prev[section]) : data
    }));
  };

  const resetContent = () => {
    setContent(DEFAULT_CONTENT);
    localStorage.removeItem('portfolio_content');
  };

  return {
    content,
    setContent,
    updateContent,
    isEditing,
    setIsEditing,
    resetContent
  };
};