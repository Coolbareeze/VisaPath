import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEO from '@/components/SEO.jsx';
import VisaCard from '@/components/VisaCard.jsx';
import GetHelpForm from '@/components/GetHelpForm.jsx';
import { ChevronRight, Calculator, Banknote } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function UKVisasPage() {
  const visas = [
    {
      country: 'UK',
      visaType: 'Standard Visitor Visa',
      fee: 'GBP 115 (Rs. 40,250)',
      processingTime: '3-6 weeks',
      description: 'For tourism, business meetings, or short courses up to 6 months.',
      link: '/uk-visa-from-pakistan'
    },
    {
      country: 'UK',
      visaType: 'Family Visit Visa',
      fee: 'GBP 115 (Rs. 40,250)',
      processingTime: '3-6 weeks',
      description: 'Specifically tailored for visiting family members residing in the UK.',
      link: '/uk-visit-visa-from-pakistan'
    },
    {
      country: 'UK',
      visaType: 'Student Visa',
      fee: 'GBP 490 (Rs. 171,500)',
      processingTime: '3-4 weeks',
      description: 'For Pakistani students with a CAS from a UK educational institution.',
      link: '/uk-student-visa-from-pakistan'
    },
    {
      country: 'UK',
      visaType: 'Skilled Worker Visa',
      fee: 'GBP 719 (Rs. 251,650)',
      processingTime: '3-8 weeks',
      description: 'For professionals with a Certificate of Sponsorship (CoS) from a UK employer.',
      link: '/uk-work-visa-from-pakistan'
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visapath.pk/" },
      { "@type": "ListItem", "position": 2, "name": "UK Visas", "item": "https://visapath.pk/uk-visas" }
    ]
  };

  return (
    <>
      <SEO 
        title="UK Visa from Pakistan 2026 - Requirements & Fee"
        description="UK visa guide for Pakistanis. Check requirements, fees, processing time, documents & how to apply for visitor, student, and work visas."
        canonical="/uk-visas"
        schemas={[breadcrumbSchema]}
      />

      <Header />

      <main>
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">UK Visas</span>
            </nav>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                UK Visa from Pakistan 2026
              </h1>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="leading-relaxed mb-4">
                  The United Kingdom is a prime destination for Pakistanis for tourism, higher education, and career advancement. Applying for a UK visa requires meticulous preparation, as the UK Visas and Immigration (UKVI) has strict documentation and financial requirements.
                </p>
                <p className="leading-relaxed mb-4">
                  All UK visa applications from Pakistan are initiated online via the GOV.UK website, followed by a biometric appointment at a VFS Global center in Islamabad, Lahore, Karachi, or Mirpur.
                </p>
                <p className="leading-relaxed">
                  Select your intended visa category below to access detailed requirements, document checklists, and expert tips to maximize your chances of approval.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">Popular UK Visa Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {visas.map((visa, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <VisaCard {...visa} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">Helpful Tools for Your Application</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-md transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calculator className="h-5 w-5 text-primary" />
                      <span>Fee Calculator</span>
                    </CardTitle>
                    <CardDescription>Calculate total visa costs including IHS surcharge</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/tools/fee-calculator">Calculate Fees</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Banknote className="h-5 w-5 text-primary" />
                      <span>Bank Statement Calculator</span>
                    </CardTitle>
                    <CardDescription>Estimate required bank balance for your UK trip</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/tools/bank-calculator">Calculate Balance</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Need help with your UK visa?</h2>
              <GetHelpForm
                title="Get Expert Assistance"
                description="Our visa consultants will guide you through the entire process"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default UKVisasPage;