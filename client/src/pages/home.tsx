import { Link } from "wouter";
import { bhagavadGitaData } from "@/lib/gita-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-primary/10 py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-64 h-64 bg-primary rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-primary rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-tight">
            ಶ್ರೀಮದ್ ಭಗವದ್ಗೀತೆ
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-serif mb-8">
            Srimad Bhagavad Gita
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed font-sans">
            The eternal wisdom of life, duty, and devotion. Explore the 18 chapters of the divine conversation between Lord Krishna and Arjuna.
          </p>
        </div>
      </div>

      {/* Chapters Grid */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bhagavadGitaData.map((chapter) => (
            <Link 
              key={chapter.id} 
              href={`/chapter/${chapter.id}`}
              className="block h-full group transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <Card className="h-full border-border/50 bg-card hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-sans font-bold uppercase tracking-wider text-primary/80 bg-primary/10 px-2 py-1 rounded">
                      Chapter {chapter.id}
                    </span>
                    <BookOpen className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {chapter.kannadaTitle}
                  </CardTitle>
                  <CardDescription className="text-base font-serif text-muted-foreground">
                    {chapter.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70 line-clamp-3 mb-4 font-sans">
                    {chapter.description}
                  </p>
                  <div className="text-xs text-muted-foreground font-sans flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {chapter.totalVerses} Verses
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 py-8 px-4 text-center border-t border-border/50">
        <p className="text-sm text-muted-foreground font-sans">
          Created with reverence for the timeless wisdom.
        </p>
      </footer>
    </div>
  );
}
