import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

function VisaCard({ country, visaType, fee, processingTime, description, link }) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-200">
      <CardHeader>
        <CardTitle className="text-xl">{country} {visaType}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-3 mb-6">
          {fee && (
            <div className="flex items-center space-x-2 text-sm">
              <DollarSign className="h-4 w-4 text-primary" />
              <span className="font-medium">Fee:</span>
              <span>{fee}</span>
            </div>
          )}
          {processingTime && (
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="h-4 w-4 text-primary" />
              <span className="font-medium">Processing:</span>
              <span>{processingTime}</span>
            </div>
          )}
        </div>
        <div className="mt-auto">
          <Button asChild className="w-full">
            <Link to={link}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default VisaCard;