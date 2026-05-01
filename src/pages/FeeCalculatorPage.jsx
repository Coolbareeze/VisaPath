import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ChevronRight, Calculator } from 'lucide-react';

function FeeCalculatorPage() {
  const [country, setCountry] = useState('');
  const [visaType, setVisaType] = useState('');
  const [result, setResult] = useState(null);

  const feeData = {
    'Germany': { 'Tourist': 80, 'Business': 80, 'Student': 75 },
    'Italy': { 'Tourist': 80, 'Business': 80, 'Student': 75 },
    'Spain': { 'Tourist': 80, 'Business': 80, 'Student': 75 },
    'France': { 'Tourist': 80, 'Business': 80, 'Student': 75 },
    'USA': { 'Tourist': 185, 'Business': 185, 'Student': 185 },
    'Canada': { 'Tourist': 100, 'Business': 100, 'Student': 150 }
  };

  const calculateFee = () => {
    if (!country || !visaType) return;

    const baseFee = feeData[country]?.[visaType] || 0;
    const processingFee = baseFee * 0.15;
    const serviceFee = 25;
    const totalUSD = baseFee + processingFee + serviceFee;
    const totalPKR = totalUSD * 278;

    setResult({
      baseFee,
      processingFee: processingFee.toFixed(2),
      serviceFee,
      totalUSD: totalUSD.toFixed(2),
      totalPKR: Math.round(totalPKR)
    });
  };

  return (
    <>
      <Helmet>
        <title>Visa fee calculator - Calculate total visa costs</title>
        <meta name="description" content="Calculate total visa fees including processing and service charges for Europe, USA, Canada visas from Pakistan." />
      </Helmet>

      <Header />

      <main>
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Fee Calculator</span>
            </nav>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  Visa fee calculator
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Calculate total visa costs including embassy fees, processing charges, and service fees
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Calculate Your Visa Fee</CardTitle>
                  <CardDescription>Select country and visa type to see the breakdown</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select value={country} onValueChange={setCountry}>
                      <SelectTrigger id="country" className="text-foreground">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Germany">Germany</SelectItem>
                        <SelectItem value="Italy">Italy</SelectItem>
                        <SelectItem value="Spain">Spain</SelectItem>
                        <SelectItem value="France">France</SelectItem>
                        <SelectItem value="USA">USA</SelectItem>
                        <SelectItem value="Canada">Canada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="visa-type">Visa Type</Label>
                    <Select value={visaType} onValueChange={setVisaType}>
                      <SelectTrigger id="visa-type" className="text-foreground">
                        <SelectValue placeholder="Select visa type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Tourist">Tourist/Visit</SelectItem>
                        <SelectItem value="Business">Business</SelectItem>
                        <SelectItem value="Student">Student</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button onClick={calculateFee} className="w-full" disabled={!country || !visaType}>
                    Calculate Fee
                  </Button>

                  {result && (
                    <div className="mt-6 p-6 bg-accent/50 rounded-lg space-y-3">
                      <h3 className="font-semibold text-lg mb-4">Fee Breakdown</h3>
                      <div className="flex justify-between">
                        <span>Base Visa Fee:</span>
                        <span className="font-medium">${result.baseFee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Processing Fee (15%):</span>
                        <span className="font-medium">${result.processingFee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Service Fee:</span>
                        <span className="font-medium">${result.serviceFee}</span>
                      </div>
                      <div className="border-t pt-3 mt-3">
                        <div className="flex justify-between text-lg font-semibold">
                          <span>Total (USD):</span>
                          <span className="text-primary">${result.totalUSD}</span>
                        </div>
                        <div className="flex justify-between text-lg font-semibold mt-2">
                          <span>Total (PKR):</span>
                          <span className="text-primary">Rs. {result.totalPKR.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-3">Important Notes</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Fees are approximate and may vary based on current exchange rates</li>
                  <li>• Additional costs may include travel insurance, document translation, and courier fees</li>
                  <li>• VFS service charges are separate and vary by location</li>
                  <li>• Fees are non-refundable even if visa is rejected</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default FeeCalculatorPage;