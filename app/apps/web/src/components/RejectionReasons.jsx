import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AlertCircle } from 'lucide-react';

function RejectionReasons({ reasons }) {
  if (!reasons || reasons.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold flex items-center space-x-2">
        <AlertCircle className="h-6 w-6 text-destructive" />
        <span>Common Rejection Reasons</span>
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {reasons.map((reason, index) => (
          <AccordionItem key={index} value={`reason-${index}`}>
            <AccordionTrigger className="text-left">
              {reason.title || `Reason ${index + 1}`}
            </AccordionTrigger>
            <AccordionContent>
              <p className="leading-relaxed text-muted-foreground">{reason.description || reason}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default RejectionReasons;