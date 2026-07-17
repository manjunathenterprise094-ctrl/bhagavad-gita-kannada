import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Hammer } from "lucide-react";

interface UnderConstructionProps {
  title: string;
}

export default function UnderConstruction({ title }: UnderConstructionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-primary/5 p-4">
      <div className="text-center max-w-md bg-card/50 backdrop-blur-sm border border-primary/15 p-8 rounded-2xl shadow-xl">
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <Hammer className="h-8 w-8 text-primary animate-bounce" />
        </div>
        <h1 className="text-3xl font-bold text-primary mb-4">{title}</h1>
        <p className="text-muted-foreground mb-8">
          This page is under construction. Please check back later!
        </p>
        <Link href="/">
          <Button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md hover:shadow-lg font-medium">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
