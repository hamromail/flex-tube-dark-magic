
import { useState } from "react";
import { Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface VideoInputProps {
  onSubmit: (url: string) => void;
}

export function VideoInput({ onSubmit }: VideoInputProps) {
  const [url, setUrl] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onSubmit(url);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-2">
      <div className={`relative group ${isFocused ? "neon-border rounded-lg" : ""}`}>
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Youtube className={`h-5 w-5 ${isFocused ? "text-neon-purple" : "text-muted-foreground"}`} />
        </div>
        <Input
          type="text"
          placeholder="Paste YouTube URL here..."
          className={`pl-10 pr-32 h-14 bg-dark-200 border-dark-200 focus:bg-dark-100 transition-all duration-300 
            ${isFocused ? "border-neon-purple shadow-[0_0_15px_rgba(155,135,245,0.3)]" : ""}
            placeholder:text-muted-foreground/60 font-roboto text-lg`}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div className="absolute inset-y-0 right-2 flex items-center">
          <Button 
            type="submit" 
            size="sm"
            className="bg-gradient-to-r from-neon-purple to-neon-purple2 hover:from-neon-purple2 hover:to-neon-purple transition-all duration-300 font-medium"
          >
            Analyze
          </Button>
        </div>
      </div>
      <p className="text-xs text-muted-foreground font-roboto">
        Supported: YouTube videos, playlists, and shorts
      </p>
    </form>
  );
}
