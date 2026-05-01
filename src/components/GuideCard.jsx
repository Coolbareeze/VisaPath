import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

function GuideCard({ title, description, author, date, category, slug }) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-200">
      <CardHeader>
        <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-2">
          {category && <span className="px-2 py-1 bg-accent rounded-md font-medium">{category}</span>}
        </div>
        <CardTitle className="text-xl leading-snug">{title}</CardTitle>
        {description && <CardDescription className="line-clamp-2">{description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-4">
          {author && (
            <div className="flex items-center space-x-1">
              <User className="h-3 w-3" />
              <span>{author}</span>
            </div>
          )}
          {date && (
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
            </div>
          )}
        </div>
        <div className="mt-auto">
          <Button asChild variant="outline" className="w-full">
            <Link to={`/blog/${slug}`}>Read More</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default GuideCard;