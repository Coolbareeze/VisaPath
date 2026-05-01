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

function TurkeyVisasPage() {
  const visas = [
    {
      country: 'Turkey',
      visaType: 'Tourist/Visit Visa',
      fee: 'USD 60 (Rs. 16,680)',
      processingTime: '10-20 days',
      description: 'For tourism, business meetings, or visiting family and friends in Turkey.',
      link: '/turkey-visa-from-pakistan'
    },
    {
      country: 'Turkey',
      visaType: 'Student Visa',
      fee: 'USD 60 (Rs. 16,680)',
      processingTime: '15-30 days',
      description: 'For Pakistani students accepted into Turkish universities or language courses.',
      link: '/turkey-student-visa-from-pakistan'
    },
    {
      country: 'Turkey',
      visaType: 'Work Visa',
      fee: 'USD 60 (Rs. 16,680)',
      processingTime: '30-45 days',
      description: 'For professionals with a valid job offer from a Turkish employer.',
      link: '/turkey-work-visa-from-pakistan'
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visapath.pk/" },
      { "@type": "ListItem", "position": 2, "name": "Turkey Visas", "item": "https://visapath.pk/turkey-visas" }
    ]
  };

  return (
    <>
      <SEO 
        title="Turkey Visa from Pakistan 2026 - Requirements & Fee"
        description="Turkey visa guide for Pakistanis. Check requirements, fees, processing time, documents & how to apply for tourist, student, and work visas."
        canonical="/turkey-visas"
        schemas={[breadcrumbSchema]}
      />

      <Header />

      <main>
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Turkey Visas</span>
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
                Turkey Visa from Pakistan 2026
              </h1>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="leading-relaxed mb-4">
                  Turkey is a top destination for Pakistani travelers, offering a rich blend of history, culture, and stunning landscapes. Whether you are planning a vacation to Istanbul, pursuing higher education in Ankara, or seeking employment opportunities, understanding the Turkish visa process is essential.
                </p>
                <p className="leading-relaxed mb-4">
                  Pakistani citizens holding ordinary passports must obtain a sticker visa from the Turkish Embassy or Consulate through Anatolia Travel Services. However, if you hold a valid Schengen, USA, UK, or Ireland visa/residence permit, you may be eligible for an e-Visa.
                </p>
                <p className="leading-relaxed">
                  Explore our comprehensive guides below to find the specific requirements, document checklists, and step-by-step application processes for your intended visa type.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">Popular Turkey Visa Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <CardDescription>Calculate total visa costs including service charges</CardDescription>
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
                    <CardDescription>Estimate required bank balance for your Turkey trip</CardDescription>
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Need help with your Turkey visa?</h2>
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

export default TurkeyVisasPage;