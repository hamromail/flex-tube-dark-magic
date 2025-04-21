
import { useEffect, useRef } from "react";

interface WaveformVisualizerProps {
  active: boolean;
}

export function WaveformVisualizer({ active }: WaveformVisualizerProps) {
  const barCount = 32;
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active || !barsRef.current) return;

    const bars = Array.from(barsRef.current.children) as HTMLElement[];
    
    // Reset animations
    bars.forEach(bar => {
      bar.style.animation = 'none';
      // Force reflow
      bar.offsetHeight;
      bar.style.animation = '';
    });

    // Animate in sequence with increasing delay
    bars.forEach((bar, i) => {
      const delay = i * (1.5 / bars.length);
      bar.style.animationDelay = `${delay}s`;
    });
  }, [active]);

  return (
    <div className={`flex items-end justify-center h-16 gap-[2px] mt-2 mb-6 transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}>
      <div ref={barsRef} className="flex items-end h-full">
        {Array.from({ length: barCount }).map((_, i) => {
          // Calculate a height based on position to create a wave pattern
          const baseHeight = Math.sin((i / barCount) * Math.PI) * 100;
          const height = Math.max(15, baseHeight);
          
          return (
            <div
              key={i}
              className="w-2 bg-gradient-to-t from-neon-purple to-neon-blue rounded-t-sm animate-wave"
              style={{ 
                height: `${height}%`,
                animationDuration: `${0.5 + Math.random() * 0.7}s`
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
