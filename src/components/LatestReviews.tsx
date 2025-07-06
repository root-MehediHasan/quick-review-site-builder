import ReviewCard from "./ReviewCard";
import phoneReview from "@/assets/phone-review.jpg";
import laptopReview from "@/assets/laptop-review.jpg";
import headphonesReview from "@/assets/headphones-review.jpg";

const LatestReviews = () => {
  const reviews = [
    {
      title: "Samsung Galaxy S24 Ultra: The Android King Returns",
      excerpt: "Samsung's latest flagship brings impressive camera improvements, S Pen functionality, and AI features that set it apart from the competition.",
      rating: 8.8,
      category: "Smartphones",
      readTime: "8 min read",
      image: phoneReview,
      featured: true
    },
    {
      title: "MacBook Pro M3 Max: Creative Powerhouse Review",
      excerpt: "Apple's most powerful laptop gets even better with the M3 Max chip. We test video editing, 3D rendering, and battery life.",
      rating: 9.1,
      category: "Laptops",
      readTime: "12 min read",
      image: laptopReview
    },
    {
      title: "Sony WH-1000XM5: Still the ANC Champion?",
      excerpt: "Sony's latest noise-canceling headphones face tough competition. Do they maintain their crown in the premium audio space?",
      rating: 8.5,
      category: "Audio",
      readTime: "6 min read",
      image: headphonesReview
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Latest</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Reviews</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            In-depth reviews of the latest tech gadgets, tested by our expert team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestReviews;