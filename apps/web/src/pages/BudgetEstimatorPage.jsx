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
import { ChevronRight, FileCheck } from 'lucide-react';

function BudgetEstimatorPage() {
  const [country, setCountry] = useState('');
  const [days, setDays] = useState('');
  const [result, setResult] = useState(null);

  const costs = {
    'Germany': { accommodation: 70, food: 40, transport: 15, activities: 30, visa: 80 },
    'Italy': { accommodation: 65, food: 35, transport: 12, activities: 25, visa: 80 },
    'Spain': { accommodation: 60, food: 30, transport: 10, activities: 20, visa: 80 },
    'France': { accommodation: 80, food: 45, transport: 18, activities: 35, visa: 80 },
    'USA': { accommodation: 120, food: 60, transport: 25, activities: 50, visa: 185 },
    'Canada': { accommodation: 100, food: 50, transport: 20, activities: 40, visa: 100 }
  };

  const estimateBudget = () => {
    if (!country || !days) return;

    const numDays = parseInt(days);
    const dailyCosts = costs[country];
    
    const accommodation = dailyCosts.accommodation * numDays;
    const food = dailyCosts.food * numDays;
    const transport = dailyCosts.transport * numDays;
    const activities = dailyCosts.activities * numDays;
    const visa = dailyCosts.visa;
    const insurance = 50;
    const flights = country === 'USA' || country === 'Canada' ? 1200 : 800;
    
    const totalUSD = accommodation + food + transport + activities + visa + insurance + flights;
    const totalPKR = totalUSD * 278;

    setResult({
      accommodation,
      food,
      transport,
      activities,
      visa,
      insurance,
      flights,
      totalUSD,
      totalPKR: Math.round(totalPKR)
    });
  };

  return (
    <>
      <Helmet>
        <title>Travel budget estimator - Calculate trip costs</title>
        <meta name="description" content="Estimate total travel costs including accommodation, food, transport, and visa fees for your trip." />
      </Helmet>

      <Header />

      <main>
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Budget Estimator</span>
            </nav>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <FileCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  Travel budget estimator
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Get detailed cost breakdown for your trip
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Estimate Your Trip Budget</CardTitle>
                  <CardDescription>Calculate total costs for your travel</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">Destination</Label>
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
                    <Label htmlFor="days">Number of Days</Label>
                    <Input
                      id="days"
                      type="number"
                      placeholder="Trip duration"
                      value={days}
                      onChange={(e) => setDays(e.target.value)}
                      className="text-foreground"
                    />
                  </div>

                  <Button onClick={estimateBudget} className="w-full" disabled={!country || !days}>
                    Estimate Budget
                  </Button>

                  {result && (
                    <div className="mt-6 p-6 bg-accent/50 rounded-lg space-y-3">
                      <h3 className="font-semibold text-lg mb-4">Cost Breakdown</h3>
                      <div className="flex justify-between">
                        <span>Accommodation:</span>
                        <span className="font-medium">${result.accommodation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Food & Dining:</span>
                        <span className="font-medium">${result.food}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Local Transport:</span>
                        <span className="font-medium">${result.transport}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Activities & Tours:</span>
                        <span className="font-medium">${result.activities}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Visa Fee:</span>
                        <span className="font-medium">${result.visa}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Travel Insurance:</span>
                        <span className="font-medium">${result.insurance}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Round-trip Flights:</span>
                        <span className="font-medium">${result.flights}</span>
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
                <h3 className="font-semibold mb-3">Budget Tips</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Book flights 2-3 months in advance for better prices</li>
                  <li>• Consider hostels or Airbnb for cheaper accommodation</li>
                  <li>• Use public transport instead of taxis</li>
                  <li>• Look for free walking tours and museum days</li>
                  <li>• Add 10-15% buffer for unexpected expenses</li>
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

export default BudgetEstimatorPage;