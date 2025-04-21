
import { BookOpen } from "lucide-react";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen px-4 py-12 flex flex-col items-center justify-center bg-background">
      <div className="max-w-2xl glass-panel p-8 rounded-lg shadow-lg bg-glass border border-neon-purple">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="h-7 w-7 text-neon-purple"/>
          <h1 className="font-orbitron text-2xl md:text-3xl font-bold gradient-text">
            Terms of Use
          </h1>
        </div>
        <p className="mb-4 text-muted-foreground">
          By using this demo application, you agree to the following terms.
        </p>
        <ol className="list-decimal list-inside text-muted-foreground space-y-2">
          <li>
            <strong>Educational Use Only:</strong> This site is a demonstration project. Any downloads or features provided are for learning and experimentation.
          </li>
          <li>
            <strong>No Warranty:</strong> No guarantees are made regarding service uptime, feature completeness, or fitness for any purpose.
          </li>
          <li>
            <strong>Copyright Responsibility:</strong> Users are responsible for ensuring they comply with the copyright policies of YouTube and relevant laws before attempting to download content.
          </li>
          <li>
            <strong>No Liability:</strong> The creators of this site are not liable for any misuse or damages resulting from the use of this demo.
          </li>
        </ol>
        <p className="mt-8 text-muted-foreground">
          For further questions, please contact the developer via Lovable platform or <a href="https://docs.lovable.dev/" target="_blank" className="text-neon-purple underline">read more</a>.
        </p>
      </div>
    </div>
  );
}
