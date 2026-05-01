import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Lightbulb } from 'lucide-react';

function ApprovalTips({ tips }) {
  if (!tips || tips.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold flex items-center space-x-2">
        <Lightbulb className="h-6 w-6 text-accent" />
        <span>Tips for Approval</span>
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {tips.map((tip, index) => (
          <AccordionItem key={index} value={`tip-${index}`}>
            <AccordionTrigger className="text-left">
              {tip.title || `Tip ${index + 1}`}
            </AccordionTrigger>
            <AccordionContent>
              <p className="leading-relaxed text-muted-foreground">{tip.description || tip}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default ApprovalTips;