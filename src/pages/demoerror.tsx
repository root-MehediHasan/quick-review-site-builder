import React, { useState, useEffect } from 'react';
import { Search, Home, ArrowLeft, FileQuestion, Compass, BookOpen, Mail, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface FloatingElementProps {
  delay: number;
  children: React.ReactNode;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ delay, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
};

interface AnimatedNumberProps {
  number: string;
  delay: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ number, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`text-9xl md:text-[12rem] font-bold text-primary/20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-12'
      }`}
    >
      {number}
    </div>
  );
};

interface PopularPageProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const PopularPage: React.FC<PopularPageProps> = ({ title, description, icon, href }) => {
  return (
    <Card className="p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-border bg-card">
      <div className="flex items-start space-x-3">
        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
      </div>
    </Card>
  );
};

interface BreadcrumbProps {
  items: Array<{ label: string; href?: string }>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-muted-foreground">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight className="w-4 h-4" />}
          {item.href ? (
            <button
              className="hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              onClick={() => console.log(`Navigate to ${item.href}`)}
            >
              {item.label}
            </button>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

const Error404Page: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const popularPages = [
    {
      title: 'Documentation',
      description: 'Learn how to use our platform',
      icon: <BookOpen className="w-5 h-5" />,
      href: '/docs'
    },
    {
      title: 'Help Center',
      description: 'Find answers to common questions',
      icon: <FileQuestion className="w-5 h-5" />,
      href: '/help'
    },
    {
      title: 'Contact Support',
      description: 'Get in touch with our team',
      icon: <Mail className="w-5 h-5" />,
      href: '/contact'
    },
    {
      title: 'Explore Features',
      description: 'Discover what we have to offer',
      icon: <Compass className="w-5 h-5" />,
      href: '/features'
    }
  ];

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Error 404' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
    }
  };

  const handleGoHome = () => {
    console.log('Navigate to home');
  };

  const handleGoBack = () => {
    console.log('Go back');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <FloatingElement delay={100}>
          <div className="mb-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </FloatingElement>

        {/* Main Content */}
        <div className="text-center mb-16">
          {/* Animated 404 */}
          <div className="flex justify-center items-center mb-8 relative">
            <AnimatedNumber number="4" delay={200} />
            <div className="relative mx-4">
              <AnimatedNumber number="0" delay={400} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary/20 animate-pulse"></div>
              </div>
            </div>
            <AnimatedNumber number="4" delay={600} />
          </div>

          {/* Error Message */}
          <FloatingElement delay={800}>
            <div className="max-w-2xl mx-auto mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Oops! Page Not Found
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                The page you're looking for seems to have wandered off into the digital wilderness. 
                Don't worry, we'll help you find your way back!
              </p>
              <Badge variant="secondary" className="mb-6">
                Error Code: 404
              </Badge>
            </div>
          </FloatingElement>

          {/* Action Buttons */}
          <FloatingElement delay={1000}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                onClick={handleGoHome}
                className="group transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Go Home
              </Button>
              <Button
                onClick={handleGoBack}
                variant="outline"
                className="group transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                Go Back
              </Button>
            </div>
          </FloatingElement>
        </div>

        {/* Search Section */}
        <FloatingElement delay={1200}>
          <div className="max-w-md mx-auto mb-16">
            <h2 className="text-xl font-semibold text-center mb-4">Search for what you need</h2>
            <form onSubmit={handleSearch} className="relative">
              <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search pages, documentation, help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="pl-10 pr-4 py-3 w-full border-border focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  aria-label="Search site content"
                />
              </div>
              <Button
                type="submit"
                className="w-full mt-3 transition-all duration-300 hover:scale-105"
              >
                Search
              </Button>
            </form>
          </div>
        </FloatingElement>

        <Separator className="mb-16" />

        {/* Popular Pages */}
        <FloatingElement delay={1400}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Popular Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularPages.map((page, index) => (
                <div
                  key={index}
                  style={{ animationDelay: `${1600 + index * 100}ms` }}
                  className="animate-fade-in-up"
                >
                  <PopularPage {...page} />
                </div>
              ))}
            </div>
          </div>
        </FloatingElement>

        {/* Help Text */}
        <FloatingElement delay={2000}>
          <div className="text-center mt-16 max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              Still can't find what you're looking for? Our support team is here to help.
            </p>
            <Button
              variant="link"
              className="mt-2 text-primary hover:text-primary/80 transition-colors duration-300"
              onClick={() => console.log('Contact support')}
            >
              Contact Support →
            </Button>
          </div>
        </FloatingElement>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(var(--foreground), 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Error404Page;
