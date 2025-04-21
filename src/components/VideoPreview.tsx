
import { useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { WaveformVisualizer } from "./WaveformVisualizer";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface VideoPreviewProps {
  videoUrl: string | null;
  thumbnail: string | null;
  title: string | null;
  duration: string | null;
  author: string | null;
}

export function VideoPreview({ videoUrl, thumbnail, title, duration, author }: VideoPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(75);
  const maxTime = 100;

  useEffect(() => {
    let interval: number | null = null;
    
    if (isPlaying) {
      interval = window.setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= maxTime) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  // Reset player when video changes
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
  }, [videoUrl]);

  if (!videoUrl) {
    return (
      <div className="min-h-[280px] flex flex-col items-center justify-center p-8 rounded-lg glass-panel">
        <div className="text-center space-y-3">
          <h3 className="text-xl font-orbitron gradient-text">Enter a YouTube URL</h3>
          <p className="text-muted-foreground font-roboto">
            Paste a valid YouTube URL above to preview and download the video
          </p>
        </div>
      </div>
    );
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor((seconds / maxTime) * 3);
    const secs = Math.floor((seconds % (maxTime / 3)) * 1.8);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="rounded-lg overflow-hidden glass-panel">
      {/* Video preview */}
      <div className="relative aspect-video bg-black overflow-hidden group">
        <img 
          src={thumbnail || "https://images.unsplash.com/photo-1531297484001-80022131f5a1"} 
          alt={title || "Video preview"} 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 rounded-full bg-neon-purple/30 backdrop-blur-sm flex items-center justify-center hover:bg-neon-purple/60 transition-colors"
          >
            {isPlaying ? (
              <Pause className="h-8 w-8 text-white" />
            ) : (
              <Play className="h-8 w-8 text-white" />
            )}
          </button>
        </div>
      </div>
      
      {/* Video info and controls */}
      <div className="p-4 space-y-4">
        <div>
          <h3 className="font-orbitron text-lg text-neon-purple line-clamp-2">
            {title || "Video Title"}
          </h3>
          <p className="text-sm text-muted-foreground font-roboto">
            {author || "Channel Name"} • {duration || "3:45"}
          </p>
        </div>
        
        {/* Waveform visualization */}
        <WaveformVisualizer active={isPlaying} />
        
        {/* Progress bar */}
        <div className="space-y-2">
          <Slider
            value={[currentTime]}
            max={maxTime}
            step={1}
            onValueChange={(value) => setCurrentTime(value[0])}
            className={cn(
              "cursor-pointer",
              isPlaying && "before:absolute before:inset-0 before:bg-gradient-to-r before:from-neon-purple/20 before:to-transparent"
            )}
          />
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(maxTime)}</span>
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-dark-200 transition-colors">
              <SkipBack className="h-5 w-5 text-muted-foreground hover:text-white" />
            </button>
            
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className={cn(
                "p-2 rounded-full transition-colors",
                isPlaying ? "bg-neon-purple text-white" : "hover:bg-dark-200 text-muted-foreground hover:text-white"
              )}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </button>
            
            <button className="p-2 rounded-full hover:bg-dark-200 transition-colors">
              <SkipForward className="h-5 w-5 text-muted-foreground hover:text-white" />
            </button>
          </div>
          
          <div className="flex items-center space-x-2 w-24">
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            <Slider
              value={[volume]}
              max={100}
              step={1}
              onValueChange={(value) => setVolume(value[0])}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
