import { useState, useRef, useEffect } from 'react';

const EditableText = ({ 
  value, 
  onChange, 
  isEditing, 
  className = '', 
  placeholder = 'Enter text...',
  multiline = false,
  rows = 3
}) => {
  const [localValue, setLocalValue] = useState(value || '');
  const inputRef = useRef(null);

  useEffect(() => {
    setLocalValue(value || '');
  }, [value]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    onChange(newValue);
  };

  const handleKeyDown = (e) => {
    if (!multiline && e.key === 'Enter') {
      e.preventDefault();
      inputRef.current?.blur();
    }
  };

  if (!isEditing) {
    return (
      <div className={className}>
        {value || placeholder}
      </div>
    );
  }

  const Component = multiline ? 'textarea' : 'input';

  return (
    <Component
      ref={inputRef}
      type={multiline ? undefined : 'text'}
      value={localValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      rows={multiline ? rows : undefined}
      className={`${multiline ? 'edit-textarea' : 'edit-input'} ${className} w-full`}
    />
  );
};

export default EditableText;