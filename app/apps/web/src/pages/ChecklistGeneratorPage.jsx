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
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronRight, CheckSquare, Printer } from 'lucide-react';

function ChecklistGeneratorPage() {
  const [visaType, setVisaType] = useState('');
  const [checkedItems, setCheckedItems] = useState({});

  const checklists = {
    'Schengen Tourist': [
      'Valid passport (6+ months validity)',
      'Completed visa application form',
      '2 passport-sized photos',
      'Travel insurance (€30,000 coverage)',
      'Flight reservation',
      'Hotel bookings',
      'Bank statements (6 months)',
      'Employment letter with NOC',
      'Income tax returns',
      'Property documents',
      'Cover letter explaining trip purpose'
    ],
    'USA Visit': [
      'Valid passport',
      'DS-160 confirmation page',
      'Visa fee payment receipt',
      'Interview appointment letter',
      'Passport-sized photo',
      'Bank statements (6 months)',
      'Employment verification letter',
      'Property documents',
      'Tax returns',
      'Travel itinerary',
      'Previous visa copies (if any)'
    ],
    'Canada Visitor': [
      'Valid passport',
      'Online application confirmation',
      '2 digital photos',
      'Bank statements (6 months)',
      'Employment letter',
      'Property documents',
      'Travel itinerary',
      'Invitation letter (if applicable)',
      'Biometrics appointment confirmation',
      'Travel insurance'
    ],
    'Student Visa': [
      'Valid passport',
      'University acceptance letter',
      'Proof of tuition payment',
      'Bank statements/financial proof',
      'Academic transcripts',
      'Language test results (IELTS/TOEFL)',
      'Study plan/SOP',
      'Passport-sized photos',
      'Medical examination results',
      'Police clearance certificate',
      'Visa application form'
    ]
  };

  const handleCheck = (index) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const checklist = checklists[visaType] || [];

  return (
    <>
      <Helmet>
        <title>Visa checklist generator - Document checklist</title>
        <meta name="description" content="Generate customized document checklist for your visa application. Print or download your checklist." />
      </Helmet>

      <Header />

      <main>
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Checklist Generator</span>
            </nav>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <CheckSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  Visa checklist generator
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Generate customized document checklist for your visa type
                </p>
              </div>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Select Visa Type</CardTitle>
                  <CardDescription>Choose your visa category to generate checklist</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="visa-type">Visa Type</Label>
                    <Select value={visaType} onValueChange={(value) => { setVisaType(value); setCheckedItems({}); }}>
                      <SelectTrigger id="visa-type" className="text-foreground">
                        <SelectValue placeholder="Select visa type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Schengen Tourist">Schengen Tourist Visa</SelectItem>
                        <SelectItem value="USA Visit">USA Visit Visa (B1/B2)</SelectItem>
                        <SelectItem value="Canada Visitor">Canada Visitor Visa</SelectItem>
                        <SelectItem value="Student Visa">Student Visa (General)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {visaType && (
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>{visaType} Checklist</CardTitle>
                      <Button variant="outline" size="sm" onClick={handlePrint}>
                        <Printer className="h-4 w-4 mr-2" />
                        Print
                      </Button>
                    </div>
                    <CardDescription>
                      {Object.values(checkedItems).filter(Boolean).length} of {checklist.length} items completed
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {checklist.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                          <Checkbox
                            id={`item-${index}`}
                            checked={checkedItems[index] || false}
                            onCheckedChange={() => handleCheck(index)}
                          />
                          <label
                            htmlFor={`item-${index}`}
                            className={`text-sm leading-relaxed cursor-pointer flex-1 ${
                              checkedItems[index] ? 'line-through text-muted-foreground' : ''
                            }`}
                          >
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {visaType && (
                <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold mb-3">Important Notes</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Make photocopies of all original documents</li>
                    <li>• Organize documents in the order listed</li>
                    <li>• Check embassy website for latest requirements</li>
                    <li>• Some documents may need translation and attestation</li>
                    <li>• Keep digital copies as backup</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ChecklistGeneratorPage;