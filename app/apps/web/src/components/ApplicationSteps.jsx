import React from 'react';

function ApplicationSteps({ steps }) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Application Process</h2>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex space-x-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground font-bold text-lg">
                {index + 1}
              </div>
            </div>
            <div className="flex-1 pt-1">
              <p className="leading-relaxed">{step}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApplicationSteps;