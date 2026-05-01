import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

function TestimonialCard({ name, country, rating, text }) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex space-x-1 mb-3">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
          ))}
        </div>
        <p className="leading-relaxed mb-4 italic">"{text}"</p>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{country}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;