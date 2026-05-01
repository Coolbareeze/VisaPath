
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEO from '@/components/SEO.jsx';
import VisaCard from '@/components/VisaCard.jsx';
import GetHelpForm from '@/components/GetHelpForm.jsx';
import { ChevronRight, Calculator, FileCheck, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function AsiaVisasPage() {
  const visas = [
    {
      country: 'Thailand',
      visaType: 'E-Visa / Sticker',
      fee: 'PKR 15,000+',
      processingTime: '10-15 days',
      description: 'One of the most popular tourist destinations for Pakistanis. Learn about the new e-Visa process.',
      link: '/thailand-visa-from-pakistan'
    },
    {
      country: 'Malaysia',
      visaType: 'E-Visa',
      fee: 'PKR 18,000+',
      processingTime: '3-5 days',
      description: 'Experience a seamless online visa application for business and tourism in Malaysia.',
      link: '/malaysia-visa-from-pakistan'
    },
    {
      country: 'Singapore',
      visaType: 'E-Visa',
      fee: 'PKR 12,000+',
      processingTime: '5-7 days',
      description: 'Requires an authorized agent or a local sponsor in Singapore. We break down the requirements.',
      link: '/singapore-visa-from-pakistan'
    },
    {
      country: 'China',
      visaType: 'Sticker Visa',
      fee: 'PKR 18,000+',
      processingTime: '4-7 days',
      description: 'A booming destination for business, trade, and tourism. Comprehensive guide for Chinese visas.',
      link: '/china-visa-from-pakistan'
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visapath.pk/" },
      { "@type": "ListItem", "position": 2, "name": "Asia Visas", "item": "https://visapath.pk/asia-visas" }
    ]
  };

  return (
    <>
      <SEO 
        title="Asia Visa from Pakistan 2026 - Requirements & Fee"
        description="Comprehensive guide for getting Asia visas from Pakistan. Information on Thailand, Malaysia, Singapore, and China visa requirements, fees, and procedures."
        canonical="/asia-visas"
        schemas={[breadcrumbSchema]}
      />

      <Header />

      <main>
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Asia Visas</span>
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
                Asia Visa from Pakistan 2026
              </h1>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="leading-relaxed mb-4">
                  Asian destinations consistently rank as top choices for Pakistani travelers due to their proximity, cultural similarities, thriving business opportunities, and relatively streamlined visa processes. From the pristine beaches of Thailand to the bustling trade hubs of China, we provide you with up-to-date and accurate visa information.
                </p>
                <p className="leading-relaxed mb-4">
                  Many Asian countries have recently transitioned to an e-Visa system for Pakistani passport holders, making it easier than ever to apply online. However, it's crucial to prepare your documents, especially financial statements, accurately to avoid rejections.
                </p>
                <p className="leading-relaxed">
                  Choose your destination below to find complete requirements, processing times, required bank balances, and step-by-step application instructions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">Popular Asian Destinations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {visas.map((visa, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex flex-col h-full"
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">Visa Assessment Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover:shadow-md transition-all border-none shadow-sm bg-secondary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-lg">
                      <Calculator className="h-5 w-5 text-primary" />
                      <span>Fee Calculator</span>
                    </CardTitle>
                    <CardDescription>Estimate total visa and processing costs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full bg-background">
                      <Link to="/tools/fee-calculator">Calculate Fees</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-all border-none shadow-sm bg-secondary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-lg">
                      <Landmark className="h-5 w-5 text-primary" />
                      <span>Bank Calculator</span>
                    </CardTitle>
                    <CardDescription>Determine the required bank balance for your trip</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full bg-background">
                      <Link to="/tools/bank-calculator">Calculate Balance</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-all border-none shadow-sm bg-secondary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-lg">
                      <FileCheck className="h-5 w-5 text-primary" />
                      <span>Document Checklist</span>
                    </CardTitle>
                    <CardDescription>Generate a tailored list of required documents</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full bg-background">
                      <Link to="/tools/checklist-generator">Generate Checklist</Link>
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Need help with an Asia visa?</h2>
              <GetHelpForm
                title="Get Expert Assistance"
                description="Our visa consultants will guide you through the process for Thailand, Malaysia, Singapore, or China."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AsiaVisasPage;
