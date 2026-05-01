import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import VisaCard from '@/components/VisaCard.jsx';
import GetHelpForm from '@/components/GetHelpForm.jsx';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

function CanadaVisasPage() {
  const visas = [
    {
      country: 'Canada',
      visaType: 'Visitor Visa',
      fee: 'CAD $100 (Rs. 23,200)',
      processingTime: '4-6 weeks',
      description: 'For tourism, family visits, or business',
      link: '/canada-visitor-visa-from-pakistan'
    },
    {
      country: 'Canada',
      visaType: 'Study Visa',
      fee: 'CAD $150 (Rs. 34,800)',
      processingTime: '6-8 weeks',
      description: 'For students accepted at Canadian institutions',
      link: '/canada-study-visa-from-pakistan'
    },
    {
      country: 'Canada',
      visaType: 'Express Entry',
      fee: 'CAD $1,365 (Rs. 316,680)',
      processingTime: '6-12 months',
      description: 'Permanent residence through skilled worker program',
      link: '/canada-express-entry-from-pakistan'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Canada visa guide from Pakistan - Visitor, study, and Express Entry</title>
        <meta name="description" content="Complete guide to Canadian visas from Pakistan. Requirements, fees, processing times for visitor visa, study permit, and Express Entry immigration." />
      </Helmet>

      <Header />

      <main>
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Canada Visas</span>
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
                Canada visa guide from Pakistan
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Canada offers various immigration pathways for Pakistani citizens, from temporary visitor visas to permanent residence through Express Entry. All applications are processed online through the IRCC portal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Canadian visa options</h2>
              <div className="prose prose-lg max-w-none">
                <p className="leading-relaxed text-muted-foreground mb-4">
                  Canada's immigration system is points-based and highly transparent. Temporary resident visas (visitor, study, work) are processed separately from permanent residence applications. Most applications are submitted online with biometrics required at a Visa Application Centre.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Express Entry is Canada's flagship immigration program for skilled workers. It uses a Comprehensive Ranking System (CRS) to rank candidates, with regular draws inviting top-scoring applicants to apply for permanent residence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">Popular Canada visa types</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visas.map((visa, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <VisaCard {...visa} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Need help with your Canada visa?</h2>
              <GetHelpForm
                title="Get Expert Assistance"
                description="Our immigration consultants will guide you through the Canadian visa process"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default CanadaVisasPage;