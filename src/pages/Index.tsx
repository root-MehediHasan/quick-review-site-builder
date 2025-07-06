import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestReviews from "@/components/LatestReviews";
import Categories from "@/components/Categories";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <LatestReviews />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;