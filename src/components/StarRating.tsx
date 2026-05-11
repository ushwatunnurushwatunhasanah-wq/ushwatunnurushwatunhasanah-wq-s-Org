import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
  rating?: number;
  className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating = 0, className = '' }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const maxStars = 5;

  return (
    <div className={`flex items-center gap-0.5 text-yellow-400 ${className}`}>
      {[...Array(maxStars)].map((_, i) => {
        if (i < fullStars) {
          return <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />;
        }
        if (i === fullStars && hasHalfStar) {
          return <StarHalf key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />;
        }
        return <Star key={i} className="w-4 h-4 text-gray-300" />;
      })}
      <span className="text-xs font-semibold text-gray-600 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
};
