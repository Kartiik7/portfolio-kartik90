import { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';

const AnimatedSkillBar = ({ skill, level, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setAnimatedLevel(level);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [isVisible, level, delay]);

  return (
    <div ref={barRef} className="space-y-2 animate-slide-up">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill}</span>
        <Badge variant="secondary" className="text-xs">
          {level}%
        </Badge>
      </div>
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
        <div
          className="progress-bar h-full rounded-full relative overflow-hidden"
          style={{
            width: `${animatedLevel}%`,
            transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse-slow"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedSkillBar;