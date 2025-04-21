
import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DownloadButtonProps {
  onClick: () => void;
  quality: { id: string; label: string; resolution: string; size: string } | null;
}

export function DownloadButton({ onClick, quality }: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    if (isDownloading || !quality) return;
    
    setIsDownloading(true);
    setProgress(0);
    
    // Simulate download progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDownloading(false);
            setProgress(0);
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 300);
    
    onClick();
  };

  return (
    <Button
      onClick={handleClick}
      disabled={isDownloading || !quality}
      className={cn(
        "relative w-full h-14 overflow-hidden transition-all duration-300 font-orbitron text-lg",
        isDownloading 
          ? "bg-dark-200 border border-neon-purple cursor-not-allowed" 
          : "bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-blue hover:to-neon-purple animate-gradient-shift",
        !quality && "opacity-70 cursor-not-allowed"
      )}
    >
      {isDownloading ? (
        <>
          <div 
            className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-blue animate-gradient-shift origin-left" 
            style={{ width: `${progress}%`, transition: "width 0.3s ease-out" }}
          />
          <span className="relative z-10 flex items-center justify-center gap-2">
            {progress < 100 ? `Downloading... ${Math.round(progress)}%` : "Download Complete!"}
          </span>
        </>
      ) : (
        <span className="flex items-center justify-center gap-2">
          <Download className="h-5 w-5" />
          Download {quality?.label || ""}
        </span>
      )}
    </Button>
  );
}
