import React from 'react';
import { CheckCircle2 } from 'lucide-react';

function RequirementsSection({ requirements }) {
  if (!requirements || requirements.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Requirements</h2>
      <ul className="space-y-3">
        {requirements.map((requirement, index) => (
          <li key={index} className="flex items-start space-x-3">
            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="leading-relaxed">{requirement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RequirementsSection;