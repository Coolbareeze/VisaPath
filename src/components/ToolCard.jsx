import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function ToolCard({ icon: Icon, title, description, link }) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-200">
      <CardHeader>
        <div className="flex items-center space-x-3 mb-2">
          {Icon && <Icon className="h-8 w-8 text-primary" />}
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="mt-auto">
          <Button asChild variant="outline" className="w-full">
            <Link to={link}>Use Tool</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ToolCard;