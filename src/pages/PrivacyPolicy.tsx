
import { FileText } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen px-4 py-12 flex flex-col items-center justify-center bg-background">
      <div className="max-w-2xl glass-panel p-8 rounded-lg shadow-lg bg-glass border border-neon-blue">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="h-7 w-7 text-neon-blue"/>
          <h1 className="font-orbitron text-2xl md:text-3xl font-bold gradient-text">
            Privacy Policy
          </h1>
        </div>
        <p className="mb-4 text-muted-foreground">
          Your privacy is important to us. This demo app does <strong>not</strong> collect, store, or transmit any personal information, browsing data, or video content.
        </p>
        <h2 className="text-neon-blue font-bold mb-2 mt-8">Information We Collect</h2>
        <p className="mb-2 text-muted-foreground">We do not collect personal data from users.</p>
        <h2 className="text-neon-blue font-bold mb-2 mt-8">Third-party Services</h2>
        <p className="mb-2 text-muted-foreground">No third-party analytics or cookies are used in this demo. All video data is processed locally in your browser for demonstration purposes only.</p>
        <h2 className="text-neon-blue font-bold mb-2 mt-8">Contact</h2>
        <p className="text-muted-foreground">If you have questions about this policy, please contact the developer through the <span className="text-neon-blue">Lovable</span> platform.</p>
      </div>
    </div>
  );
}
