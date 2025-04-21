
import React from "react";

export function ThemeBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Animated gradient spots */}
      <div className="absolute top-0 left-0 w-[40vw] h-[40vh] rounded-full bg-neon-purple/5 blur-[120px] animate-float" 
           style={{animationDelay: "0s", animationDuration: "15s"}}/>
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vh] rounded-full bg-neon-blue/5 blur-[120px] animate-float" 
           style={{animationDelay: "-5s", animationDuration: "20s"}}/>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(155, 135, 245, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(155, 135, 245, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
}
