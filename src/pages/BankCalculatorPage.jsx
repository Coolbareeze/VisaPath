import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ChevronRight, Banknote } from 'lucide-react';

function BankCalculatorPage() {
  const [country, setCountry] = useState('');
  const [duration, setDuration] = useState('');
  const [result, setResult] = useState(null);

  const dailyCosts = {
    'Germany': 60,
    'Italy': 55,
    'Spain': 50,
    'France': 65,
    'USA': 100,
    'Canada': 85
  };

  const calculateBalance = () => {
    if (!country || !duration) return;

    const days = parseInt(duration);
    const dailyCost = dailyCosts[country];
    const totalUSD = dailyCost * days;
    const buffer = totalUSD * 0.3;
    const recommendedUSD = totalUSD + buffer;
    const recommendedPKR = recommendedUSD * 278;

    setResult({
      dailyCost,
      days,
      totalUSD,
      buffer: buffer.toFixed(2),
      recommendedUSD: recommendedUSD.toFixed(2),
      recommendedPKR: Math.round(recommendedPKR)
    });
  };

  return (
    <>
      <Helmet>
        <title>Bank statement calculator - Required balance for visa</title>
        <meta name="description" content="Calculate required bank balance for your visa application based on destination and trip duration." />
      </Helmet>

      <Header />

      <main>
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Bank Calculator</span>
            </nav>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <Banknote className="h-12 w-12 text-primary mx-auto mb-4" />
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  Bank statement calculator
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Estimate required bank balance for your visa application
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Calculate Required Balance</CardTitle>
                  <CardDescription>Based on destination and trip duration</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">Destination Country</Label>
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
                    <Label htmlFor="duration">Trip Duration (days)</Label>
                    <Input
                      id="duration"
                      type="number"
                      placeholder="Number of days"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="text-foreground"
                    />
                  </div>

                  <Button onClick={calculateBalance} className="w-full" disabled={!country || !duration}>
                    Calculate Balance
                  </Button>

                  {result && (
                    <div className="mt-6 p-6 bg-accent/50 rounded-lg space-y-3">
                      <h3 className="font-semibold text-lg mb-4">Recommended Balance</h3>
                      <div className="flex justify-between">
                        <span>Daily Living Cost:</span>
                        <span className="font-medium">${result.dailyCost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Trip Duration:</span>
                        <span className="font-medium">{result.days} days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Base Amount:</span>
                        <span className="font-medium">${result.totalUSD}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Safety Buffer (30%):</span>
                        <span className="font-medium">${result.buffer}</span>
                      </div>
                      <div className="border-t pt-3 mt-3">
                        <div className="flex justify-between text-lg font-semibold">
                          <span>Recommended (USD):</span>
                          <span className="text-primary">${result.recommendedUSD}</span>
                        </div>
                        <div className="flex justify-between text-lg font-semibold mt-2">
                          <span>Recommended (PKR):</span>
                          <span className="text-primary">Rs. {result.recommendedPKR.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-3">Important Tips</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Maintain this balance for at least 6 months before application</li>
                  <li>• Show regular monthly income deposits</li>
                  <li>• Avoid large sudden deposits before visa application</li>
                  <li>• Include all bank accounts in your statement</li>
                  <li>• This is an estimate - actual requirements may vary</li>
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

export default BankCalculatorPage;