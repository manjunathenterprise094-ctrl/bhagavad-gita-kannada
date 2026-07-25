import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Chapter from "@/pages/chapter";
import UnderConstruction from "@/pages/under-construction";
import Chat from "@/pages/chat";
import Chapters from "@/pages/chapters";
import Verses from "@/pages/verses";
import Bookmarks from "@/pages/bookmarks";
import About from "@/pages/about";
import Pravachana from "@/pages/pravachana";
import Storybook from "@/pages/storybook";
import Footer from "@/components/Footer";
import SubscribeModal from "@/components/SubscribeModal";

/** Fire a GA4 page_view event on every SPA route change */
function usePageTracking() {
  const [location] = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "page_view", {
        page_path: location,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [location]);
}



function Router() {
  usePageTracking();
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/chapters" component={Chapters} />
      <Route path="/verses" component={Verses} />
      <Route path="/about" component={About} />
      <Route path="/bookmarks" component={Bookmarks} />
      <Route path="/chat" component={Chat} />
      <Route path="/pravachana" component={Pravachana} />
      <Route path="/storybook" component={Storybook} />
      <Route path="/chapter/:id" component={Chapter} />
      <Route path="/chapter/:id/verse/:verseId" component={Chapter} />
      <Route path="/api/:any*" component={() => (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center font-sans">
          <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-950/30 flex items-center justify-center text-red-600 mb-4">
            <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-foreground">API Routing / Static Deploy Warning</h2>
          <p className="text-xs text-muted-foreground max-w-sm mt-2 leading-relaxed">
            This API endpoint is handled by the Express/Node.js backend. If you see this page, it means you are viewing a static web preview, or the backend Node.js server is offline/not running.
          </p>
          <div className="mt-4 p-3 bg-muted rounded-xl border border-border text-left space-y-1 text-xs max-w-sm mx-auto">
            <div className="font-bold text-[10px] uppercase text-primary">To View Subscribers:</div>
            <div>Ensure you deploy the server files from <code>hostinger-nodejs-upload</code> and start the Node.js application process in your hosting manager.</div>
          </div>
          <a href="/" className="mt-6 px-5 py-2.5 bg-primary text-white text-xs font-bold rounded-xl shadow-md hover:bg-primary/90 transition-all cursor-pointer">
            Return to Home
          </a>
        </div>
      )} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className="flex flex-col min-h-screen">
        <Router />
        <Footer />
        <SubscribeModal />
      </div>
    </QueryClientProvider>
  );
}

export default App;

