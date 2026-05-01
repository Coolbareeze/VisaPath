import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import VisaCard from '@/components/VisaCard.jsx';
import GetHelpForm from '@/components/GetHelpForm.jsx';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

function EuropeVisasPage() {
  const visas = [
    {
      country: 'Germany',
      visaType: 'Schengen Visa',
      fee: '€80 (Rs. 22,240)',
      processingTime: '15-20 days',
      description: 'Most popular Schengen visa with high approval rate',
      link: '/germany-visa-from-pakistan'
    },
    {
      country: 'Italy',
      visaType: 'Schengen Visa',
      fee: '€80 (Rs. 22,240)',
      processingTime: '15-25 days',
      description: 'Flexible requirements and faster processing',
      link: '/italy-visa-from-pakistan'
    },
    {
      country: 'Spain',
      visaType: 'Schengen Visa',
      fee: '€80 (Rs. 22,240)',
      processingTime: '20-30 days',
      description: 'Great for tourism and business visits',
      link: '/spain-visa-from-pakistan'
    },
    {
      country: 'France',
      visaType: 'Schengen Visa',
      fee: '€80 (Rs. 22,240)',
      processingTime: '15-20 days',
      description: 'Ideal for cultural and educational visits',
      link: '/france-visa-from-pakistan'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Europe visa guide from Pakistan - Schengen visa requirements</title>
        <meta name="description" content="Complete guide to European Schengen visas from Pakistan. Requirements, fees, processing times for Germany, Italy, Spain, France visas." />
      </Helmet>

      <Header />

      <main>
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Europe Visas</span>
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
                Europe visa guide from Pakistan
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Schengen visa allows you to travel to 27 European countries with a single visa. Pakistan passport holders can apply for Schengen visas through various European embassies in Islamabad and consulates in Karachi and Lahore.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">What is a Schengen visa?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="leading-relaxed text-muted-foreground mb-4">
                  A Schengen visa is a short-stay visa that allows you to travel freely within the Schengen Area for up to 90 days within a 180-day period. The Schengen Area includes 27 European countries that have abolished passport controls at their mutual borders.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  You must apply at the embassy or consulate of the country that is your main destination. If you're visiting multiple countries with equal duration, apply at the embassy of your first point of entry.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">Popular Schengen visas from Pakistan</h2>
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Need help with your Europe visa?</h2>
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

export default EuropeVisasPage;