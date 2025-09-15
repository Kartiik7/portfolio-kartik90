import { useState, useEffect } from 'react';

const TypewriterText = ({ 
  text, 
  speed = 100, 
  delay = 0, 
  className = "",
  showCursor = true,
  onComplete
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTyping = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      if (onComplete) onComplete();
    }
  }, [currentIndex, text, speed, isTyping, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && isTyping && (
        <span className="animate-blink border-r-2 border-primary ml-1"></span>
      )}
    </span>
  );
};

export default TypewriterText;