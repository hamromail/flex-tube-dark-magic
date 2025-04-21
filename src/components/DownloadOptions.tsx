
import { useState } from "react";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface QualityOption {
  id: string;
  label: string;
  resolution: string;
  size: string;
}

const qualityOptions: QualityOption[] = [
  { id: "1080p", label: "Full HD", resolution: "1080p", size: "128 MB" },
  { id: "720p", label: "HD", resolution: "720p", size: "64 MB" },
  { id: "480p", label: "SD", resolution: "480p", size: "32 MB" },
  { id: "360p", label: "Low", resolution: "360p", size: "18 MB" },
  { id: "mp3", label: "MP3", resolution: "Audio Only", size: "4.8 MB" },
];

interface DownloadOptionsProps {
  onQualityChange: (quality: QualityOption) => void;
}

export function DownloadOptions({ onQualityChange }: DownloadOptionsProps) {
  const [selectedQuality, setSelectedQuality] = useState<QualityOption>(qualityOptions[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (quality: QualityOption) => {
    setSelectedQuality(quality);
    onQualityChange(quality);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "group flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-300",
          "bg-dark-200 border border-dark-300 hover:border-neon-purple/50 text-left",
          isOpen && "border-neon-purple/70 shadow-[0_0_10px_rgba(155,135,245,0.2)]"
        )}
      >
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-foreground font-medium font-roboto">{selectedQuality.label}</span>
            <span className="text-xs text-muted-foreground font-roboto">
              {selectedQuality.resolution} · {selectedQuality.size}
            </span>
          </div>
        </div>
        <ChevronDownIcon 
          className={cn(
            "h-5 w-5 text-muted-foreground transition-transform duration-300",
            isOpen && "rotate-180 text-neon-purple"
          )} 
        />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full z-10 rounded-lg border border-dark-300 bg-dark-100 shadow-lg animate-fade-in origin-top overflow-hidden">
          <div className="py-1 max-h-60 overflow-auto">
            {qualityOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSelect(option)}
                className={cn(
                  "flex items-center justify-between w-full px-4 py-2 text-left hover:bg-dark-200 transition-colors",
                  selectedQuality.id === option.id && "bg-dark-200"
                )}
              >
                <div className="flex flex-col">
                  <span className={cn(
                    "font-medium font-roboto",
                    selectedQuality.id === option.id ? "text-neon-purple" : "text-foreground"
                  )}>
                    {option.label}
                  </span>
                  <span className="text-xs text-muted-foreground font-roboto">
                    {option.resolution} · {option.size}
                  </span>
                </div>
                {selectedQuality.id === option.id && (
                  <CheckIcon className="h-4 w-4 text-neon-purple" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
