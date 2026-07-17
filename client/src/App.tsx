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
      <Route path="/chapter/:id" component={Chapter} />
      <Route path="/chapter/:id/verse/:verseId" component={Chapter} />
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

