
import React, { useState, useEffect } from 'react';
import './ToggleTheme.css';


const ToggleTheme = () => {
  const [theme, setTheme] = useState('light');
  const toggleThemes = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <button className='btn btn-dark' onClick={toggleThemes}>
        Toggle Theme
      </button>

    </div>
  );
};

export default ToggleTheme;