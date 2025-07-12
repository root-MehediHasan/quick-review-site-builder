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
import RequestReview from "./pages/RequestReview";
import FAQ from "./pages/FAQ";
import SamsungGalaxyS24Ultra from "./pages/review/SamsungGalaxyS24Ultra";
import IPhone15ProMax from "./pages/review/iPhone15ProMax";
import MacBookProM3Max from "./pages/review/MacBookProM3Max";
import AirPodsProTwo from "./pages/review/AirPodsProTwo";
import PlayStation5Pro from "./pages/review/PlayStation5Pro";
import CanonEOSR6MarkII from "./pages/review/CanonEOSR6MarkII";
import SmartphoneUnder500 from "./pages/guide/SmartphoneUnder500";
import GamingLaptopGuide from "./pages/guide/GamingLaptopGuide";
import AppleM4Chip from "./pages/news/AppleM4Chip";
import SamsungGalaxyS25 from "./pages/news/SamsungGalaxyS25";
import AppleWatchSeries9 from "./pages/news/AppleWatchSeries9";
import SamsungGalaxyWatch6 from "./pages/news/SamsungGalaxyWatch6";
import IPadProM2 from "./pages/review/iPadProM2";
import SamsungGalaxyTabS9Ultra from "./pages/review/SamsungGalaxyTabS9Ultra";

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
          <Route path="/request-review" element={<RequestReview />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/review/samsung-galaxy-s24-ultra" element={<SamsungGalaxyS24Ultra />} />
          <Route path="/review/iphone-15-pro-max" element={<IPhone15ProMax />} />
          <Route path="/review/macbook-pro-m3-max" element={<MacBookProM3Max />} />
          <Route path="/review/airpods-pro-2" element={<AirPodsProTwo />} />
          <Route path="/review/playstation-5-pro" element={<PlayStation5Pro />} />
          <Route path="/review/canon-eos-r6-mark-ii" element={<CanonEOSR6MarkII />} />
          <Route path="/guide/smartphone-under-500" element={<SmartphoneUnder500 />} />
          <Route path="/guide/gaming-laptop-guide" element={<GamingLaptopGuide />} />
          <Route path="/news/apple-m4-chip" element={<AppleM4Chip />} />
          <Route path="/news/samsung-galaxy-s25" element={<SamsungGalaxyS25 />} />
          <Route path="/news/apple-watch-series-9" element={<AppleWatchSeries9 />} />
          <Route path="/news/samsung-galaxy-watch-6" element={<SamsungGalaxyWatch6 />} />
          <Route path="/review/ipad-pro-m2" element={<IPadProM2 />} />
          <Route path="/review/samsung-galaxy-tab-s9-ultra" element={<SamsungGalaxyTabS9Ultra />} />
          <Route path="/all-categories" element={<AllCategories />} />
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