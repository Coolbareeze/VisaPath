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
import { ChevronRight, TrendingUp } from 'lucide-react';

function PointsCalculatorPage() {
  const [age, setAge] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [ielts, setIelts] = useState('');
  const [result, setResult] = useState(null);

  const calculatePoints = () => {
    let points = 0;
    const breakdown = {};

    const ageNum = parseInt(age);
    if (ageNum >= 18 && ageNum <= 35) {
      breakdown.age = 110;
      points += 110;
    } else if (ageNum >= 36 && ageNum <= 45) {
      breakdown.age = 100 - (ageNum - 35) * 5;
      points += breakdown.age;
    }

    const eduPoints = {
      'High School': 30,
      'Diploma': 90,
      'Bachelors': 120,
      'Masters': 135,
      'PhD': 150
    };
    breakdown.education = eduPoints[education] || 0;
    points += breakdown.education;

    const expYears = parseInt(experience);
    if (expYears >= 1) {
      breakdown.experience = Math.min(expYears * 15, 80);
      points += breakdown.experience;
    }

    const ieltsScore = parseFloat(ielts);
    if (ieltsScore >= 8.0) {
      breakdown.language = 136;
      points += 136;
    } else if (ieltsScore >= 7.0) {
      breakdown.language = 124;
      points += 124;
    } else if (ieltsScore >= 6.0) {
      breakdown.language = 100;
      points += 100;
    }

    setResult({ total: points, breakdown });
  };

  return (
    <>
      <Helmet>
        <title>Canada Express Entry points calculator - CRS score</title>
        <meta name="description" content="Calculate your Comprehensive Ranking System (CRS) score for Canada Express Entry immigration." />
      </Helmet>

      <Header />

      <main>
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Points Calculator</span>
            </nav>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  Express Entry points calculator
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Calculate your CRS score for Canada Express Entry immigration
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Calculate Your CRS Score</CardTitle>
                  <CardDescription>Enter your details to estimate your points</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="Enter your age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="text-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="education">Education Level</Label>
                    <Select value={education} onValueChange={setEducation}>
                      <SelectTrigger id="education" className="text-foreground">
                        <SelectValue placeholder="Select education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="High School">High School</SelectItem>
                        <SelectItem value="Diploma">Diploma (2 years)</SelectItem>
                        <SelectItem value="Bachelors">Bachelors Degree</SelectItem>
                        <SelectItem value="Masters">Masters Degree</SelectItem>
                        <SelectItem value="PhD">PhD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Work Experience (years)</Label>
                    <Input
                      id="experience"
                      type="number"
                      placeholder="Years of skilled work experience"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="text-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ielts">IELTS Overall Score</Label>
                    <Input
                      id="ielts"
                      type="number"
                      step="0.5"
                      placeholder="e.g., 7.5"
                      value={ielts}
                      onChange={(e) => setIelts(e.target.value)}
                      className="text-foreground"
                    />
                  </div>

                  <Button onClick={calculatePoints} className="w-full" disabled={!age || !education || !experience || !ielts}>
                    Calculate Points
                  </Button>

                  {result && (
                    <div className="mt-6 p-6 bg-accent/50 rounded-lg space-y-3">
                      <h3 className="font-semibold text-lg mb-4">Your CRS Score</h3>
                      <div className="flex justify-between">
                        <span>Age Points:</span>
                        <span className="font-medium">{result.breakdown.age || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Education Points:</span>
                        <span className="font-medium">{result.breakdown.education || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Experience Points:</span>
                        <span className="font-medium">{result.breakdown.experience || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Language Points:</span>
                        <span className="font-medium">{result.breakdown.language || 0}</span>
                      </div>
                      <div className="border-t pt-3 mt-3">
                        <div className="flex justify-between text-2xl font-bold">
                          <span>Total CRS Score:</span>
                          <span className="text-primary">{result.total}</span>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-background rounded-md">
                        <p className="text-sm text-muted-foreground">
                          {result.total >= 470 ? '✓ Your score is competitive for recent draws' : 
                           result.total >= 400 ? 'Consider improving language scores or getting provincial nomination' :
                           'Focus on improving IELTS scores and gaining more work experience'}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-3">How to Improve Your Score</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Improve IELTS score to CLB 9 or higher (8.0+ overall)</li>
                  <li>• Get a masters degree or higher education</li>
                  <li>• Gain more skilled work experience (NOC TEER 0,1,2,3)</li>
                  <li>• Apply for Provincial Nominee Program (+600 points)</li>
                  <li>• Get a valid job offer from Canadian employer (+50-200 points)</li>
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

export default PointsCalculatorPage;