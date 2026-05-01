import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import VisaCard from '@/components/VisaCard.jsx';
import GetHelpForm from '@/components/GetHelpForm.jsx';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

function UsaVisasPage() {
  const visas = [
    {
      country: 'USA',
      visaType: 'Visit Visa (B1/B2)',
      fee: '$185 (Rs. 51,430)',
      processingTime: '3-8 weeks',
      description: 'For tourism, business, or medical treatment',
      link: '/usa-visit-visa-from-pakistan'
    },
    {
      country: 'USA',
      visaType: 'Student Visa (F1)',
      fee: '$185 (Rs. 51,430)',
      processingTime: '4-6 weeks',
      description: 'For academic studies at US institutions',
      link: '/usa-student-visa-from-pakistan'
    }
  ];

  return (
    <>
      <Helmet>
        <title>USA visa guide from Pakistan - B1/B2 and F1 visa requirements</title>
        <meta name="description" content="Complete guide to US visas from Pakistan. Requirements, fees, interview tips for USA visit visa and student visa applications." />
      </Helmet>

      <Header />

      <main>
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">USA Visas</span>
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
                USA visa guide from Pakistan
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                US visa applications from Pakistan require careful preparation and a successful interview at the US Embassy in Islamabad or Consulate in Karachi. Our comprehensive guides help you understand requirements and prepare effectively.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Understanding US visa types</h2>
              <div className="prose prose-lg max-w-none">
                <p className="leading-relaxed text-muted-foreground mb-4">
                  The United States offers various visa categories for Pakistani citizens. The most common are B1/B2 visitor visas for tourism and business, and F1 student visas for academic studies. Each visa type has specific requirements and interview procedures.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  All US visa applicants must complete the DS-160 form online, pay the visa fee, and attend an in-person interview at the US Embassy or Consulate. Strong ties to Pakistan and clear travel purpose are essential for approval.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">Popular US visa types</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Need help with your USA visa?</h2>
              <GetHelpForm
                title="Get Expert Assistance"
                description="Our consultants will help you prepare for your US visa interview"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default UsaVisasPage;