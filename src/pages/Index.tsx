
import { useState } from "react";
import { VideoInput } from "@/components/VideoInput";
import { VideoPreview } from "@/components/VideoPreview";
import { DownloadOptions } from "@/components/DownloadOptions";
import { DownloadButton } from "@/components/DownloadButton";
import { ThemeBackground } from "@/components/ThemeBackground";
import { useToast } from "@/hooks/use-toast";

// Mock video data for the demo
const MOCK_VIDEOS = [
  {
    id: "video1",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "Ultra HD 4K Nature Documentary | Earth's Most Stunning Landscapes",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    duration: "3:45",
    author: "NatureVision"
  },
  {
    id: "video2",
    url: "https://www.youtube.com/watch?v=abc123",
    title: "Cyberpunk 2077 4K Gameplay | RTX On | Ultra Settings",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    duration: "6:18",
    author: "GamingExperience"
  },
  {
    id: "video3",
    url: "https://www.youtube.com/watch?v=xyz456",
    title: "Advanced React Patterns | Learn from Senior React Developers",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    duration: "12:03",
    author: "TechMasters"
  }
];

export default function Index() {
  const [videoData, setVideoData] = useState<{
    url: string | null;
    title: string | null;
    thumbnail: string | null;
    duration: string | null;
    author: string | null;
  }>({
    url: null,
    title: null,
    thumbnail: null,
    duration: null,
    author: null
  });
  
  const [selectedQuality, setSelectedQuality] = useState<{
    id: string;
    label: string;
    resolution: string;
    size: string;
  } | null>(null);
  
  const { toast } = useToast();

  const handleVideoSubmit = (url: string) => {
    // Simulate API call to get video data
    setTimeout(() => {
      const randomVideo = MOCK_VIDEOS[Math.floor(Math.random() * MOCK_VIDEOS.length)];
      setVideoData({
        url: url,
        title: randomVideo.title,
        thumbnail: randomVideo.thumbnail,
        duration: randomVideo.duration,
        author: randomVideo.author
      });
      toast({
        title: "Video analyzed successfully",
        description: "Now you can choose your preferred quality and download.",
      });
    }, 1000);
  };

  const handleDownload = () => {
    // In a real app, this would initiate the actual download
    toast({
      title: "Download started",
      description: `Your ${selectedQuality?.label} video will be ready soon.`,
    });
  };

  const handleQualityChange = (quality: {
    id: string;
    label: string;
    resolution: string;
    size: string;
  }) => {
    setSelectedQuality(quality);
  };

  return (
    <div className="min-h-screen px-4 py-12 lg:py-16 overflow-hidden">
      <ThemeBackground />
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            YouTube <span className="text-neon-blue">Flux</span> Downloader
          </h1>
          <p className="text-muted-foreground font-roboto max-w-2xl mx-auto">
            Download YouTube videos in any format and quality. Fast, free, and without any limitations.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left column: Preview */}
          <div className="lg:col-span-2 animate-float">
            <VideoPreview 
              videoUrl={videoData.url}
              thumbnail={videoData.thumbnail}
              title={videoData.title}
              duration={videoData.duration}
              author={videoData.author}
            />
          </div>
          
          {/* Right column: Input and Download */}
          <div className="space-y-6">
            <div className="glass-panel p-6 rounded-lg">
              <h2 className="font-orbitron text-lg mb-4 neon-text">Enter Video URL</h2>
              <VideoInput onSubmit={handleVideoSubmit} />
            </div>
            
            {videoData.url && (
              <div className="glass-panel p-6 rounded-lg space-y-6 animate-fade-in">
                <h2 className="font-orbitron text-lg mb-4 neon-text">Download Options</h2>
                <DownloadOptions onQualityChange={handleQualityChange} />
                <DownloadButton onClick={handleDownload} quality={selectedQuality} />
              </div>
            )}
          </div>
        </div>
        
        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-lg hover:border-neon-purple/50 transition-colors text-center">
            <div className="mb-4 h-12 w-12 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full flex items-center justify-center mx-auto">
              <span className="text-white text-xl font-bold">1</span>
            </div>
            <h3 className="font-orbitron text-lg mb-2">Ultra Fast</h3>
            <p className="text-sm text-muted-foreground font-roboto">
              Download videos in seconds with our optimized servers
            </p>
          </div>
          
          <div className="glass-panel p-6 rounded-lg hover:border-neon-purple/50 transition-colors text-center">
            <div className="mb-4 h-12 w-12 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full flex items-center justify-center mx-auto">
              <span className="text-white text-xl font-bold">2</span>
            </div>
            <h3 className="font-orbitron text-lg mb-2">High Quality</h3>
            <p className="text-sm text-muted-foreground font-roboto">
              Support for 4K, 8K, and HDR videos with crystal clear audio
            </p>
          </div>
          
          <div className="glass-panel p-6 rounded-lg hover:border-neon-purple/50 transition-colors text-center">
            <div className="mb-4 h-12 w-12 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full flex items-center justify-center mx-auto">
              <span className="text-white text-xl font-bold">3</span>
            </div>
            <h3 className="font-orbitron text-lg mb-2">No Limits</h3>
            <p className="text-sm text-muted-foreground font-roboto">
              Unlimited downloads with no account required, completely free
            </p>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-16 text-center">
          <p className="text-sm text-muted-foreground font-roboto">
            © {new Date().getFullYear()} YouTube Flux Downloader • This is a demo application for educational purposes
          </p>
        </footer>
      </div>
    </div>
  );
}
