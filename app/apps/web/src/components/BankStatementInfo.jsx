import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Banknote } from 'lucide-react';

function BankStatementInfo({ requirement, amountUSD, amountPKR }) {
  if (!requirement && !amountUSD && !amountPKR) return null;

  const usdToPkr = 278;

  return (
    <Card className="bg-accent/50">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Banknote className="h-5 w-5 text-primary" />
          <span>Bank Statement Requirement</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {requirement && <p className="leading-relaxed">{requirement}</p>}
        {(amountUSD || amountPKR) && (
          <div className="bg-background rounded-lg p-4 space-y-2">
            {amountUSD && (
              <div className="flex justify-between items-center">
                <span className="font-medium">Estimated Amount (USD):</span>
                <span className="text-lg font-semibold text-primary">${amountUSD.toLocaleString()}</span>
              </div>
            )}
            {amountPKR && (
              <div className="flex justify-between items-center">
                <span className="font-medium">Estimated Amount (PKR):</span>
                <span className="text-lg font-semibold text-primary">Rs. {amountPKR.toLocaleString()}</span>
              </div>
            )}
            {amountUSD && !amountPKR && (
              <div className="flex justify-between items-center">
                <span className="font-medium">Estimated Amount (PKR):</span>
                <span className="text-lg font-semibold text-primary">Rs. {(amountUSD * usdToPkr).toLocaleString()}</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default BankStatementInfo;