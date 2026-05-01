import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function DocumentsChecklist({ documents }) {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheck = (index) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  if (!documents || documents.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Required Documents Checklist</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {documents.map((document, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Checkbox
                id={`doc-${index}`}
                checked={checkedItems[index] || false}
                onCheckedChange={() => handleCheck(index)}
              />
              <label
                htmlFor={`doc-${index}`}
                className={`text-sm leading-relaxed cursor-pointer ${
                  checkedItems[index] ? 'line-through text-muted-foreground' : ''
                }`}
              >
                {document}
              </label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default DocumentsChecklist;