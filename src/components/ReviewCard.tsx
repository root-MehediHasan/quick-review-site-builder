import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Clock } from "lucide-react";

interface ReviewCardProps {
  title: string;
  excerpt: string;
  rating: number;
  category: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const ReviewCard = ({ 
  title, 
  excerpt, 
  rating, 
  category, 
  readTime, 
  image, 
  featured = false 
}: ReviewCardProps) => {
  return (
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 bg-card border-border overflow-hidden ${featured ? 'shadow-glow' : 'shadow-card'}`}>
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Rating & Meta */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-primary text-primary' : 'text-muted'}`} 
                />
              ))}
            </div>
            <span className="font-bold text-primary">{rating}/10</span>
          </div>
          
          <div className="flex items-center space-x-1 text-muted-foreground text-sm">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>

        <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          Read Review
        </Button>
      </div>
    </Card>
  );
};

export default ReviewCard;