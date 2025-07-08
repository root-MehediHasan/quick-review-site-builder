import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Phones from "./pages/Phones";
import Laptops from "./pages/Laptops";
import Audio from "./pages/Audio";
import AllCategories from "./pages/AllCategories";
import Gaming from "./pages/Gaming";
import Cameras from "./pages/Cameras";
import BuyingGuides from "./pages/BuyingGuides";
import ComparisonTools from "./pages/ComparisonTools";
import TechNews from "./pages/TechNews";
import VideoReviews from "./pages/VideoReviews";
import TechTips from "./pages/TechTips";
import AboutUs from "./pages/AboutUs";
import EditorialTeam from "./pages/EditorialTeam";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import Wearables from "./pages/Wearables";
import Tablets from "./pages/Tablets";
import Monitors from "./pages/Monitors";
import Keyboards from "./pages/Keyboards";
import Mice from "./pages/Mice";
import Speakers from "./pages/Speakers";
import SmartTVs from "./pages/SmartTVs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/cameras" element={<Cameras />} />
          <Route path="/wearables" element={<Wearables />} />
          <Route path="/tablets" element={<Tablets />} />
          <Route path="/monitors" element={<Monitors />} />
          <Route path="/keyboards" element={<Keyboards />} />
          <Route path="/mice" element={<Mice />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/smart-tvs" element={<SmartTVs />} />
          <Route path="/categories" element={<AllCategories />} />
          <Route path="/buying-guides" element={<BuyingGuides />} />
          <Route path="/comparison-tools" element={<ComparisonTools />} />
          <Route path="/tech-news" element={<TechNews />} />
          <Route path="/video-reviews" element={<VideoReviews />} />
          <Route path="/tech-tips" element={<TechTips />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/editorial-team" element={<EditorialTeam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
