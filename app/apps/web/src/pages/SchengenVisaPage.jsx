import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEO from '@/components/SEO.jsx';
import GetHelpForm from '@/components/GetHelpForm.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import VisaCard from '@/components/VisaCard.jsx';
import { ChevronRight } from 'lucide-react';

function SchengenVisaPage() {
  const faqs = [
    {
      question: 'Which Schengen country is easiest to get a visa from Pakistan in 2026?',
      answer: 'Approval rates vary, but historically countries like Germany, Spain, and Italy have straightforward processes if your documentation is perfect. Avoid applying to countries where you have no genuine travel itinerary just because you heard it is "easier".'
    },
    {
      question: 'How much bank balance is required for a Schengen visa?',
      answer: 'You should show enough to cover your flights, accommodation, and daily expenses (usually €50-€100 per day depending on the country). Use our Bank Statement Calculator for precise estimates.'
    },
    {
      question: 'Can I travel to multiple countries with one Schengen visa?',
      answer: 'Yes, a valid Schengen visa allows you to travel freely across all 27 member states. However, you must apply at the embassy of your main destination (where you will spend the most days).'
    },
    {
      question: 'Do I need confirmed flight tickets?',
      answer: 'No, embassies explicitly advise against buying non-refundable tickets before visa approval. A flight reservation or itinerary is sufficient.'
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visapath.pk/" },
      { "@type": "ListItem", "position": 2, "name": "Europe Visas", "item": "https://visapath.pk/europe-visas" },
      { "@type": "ListItem", "position": 3, "name": "Schengen Visa Guide", "item": "https://visapath.pk/schengen-visa-from-pakistan" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <>
      <SEO 
        title="Schengen Visa from Pakistan 2026 - Complete Application Guide"
        description="Learn how to apply for a Schengen visa from Pakistan in 2026. Requirements, document checklist, bank statement rules, and tips for 27 European countries."
        canonical="/schengen-visa-from-pakistan"
        schemas={[breadcrumbSchema, faqSchema]}
      />

      <Header />

      <main>
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/europe-visas" className="hover:text-primary transition-colors">Europe Visas</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Schengen Visa Guide</span>
            </nav>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Schengen Visa from Pakistan 2026: The Ultimate Guide
              </h1>
              
              <div className="prose prose-lg max-w-none mb-12 text-foreground">
                <p className="leading-relaxed text-muted-foreground">
                  The Schengen visa is one of the most powerful travel documents in the world, allowing Pakistani passport holders to visit 27 European countries with a single visa. Whether you are planning a vacation to Paris, a business trip to Frankfurt, or visiting family in Rome, understanding the Schengen visa process is crucial for a successful application in 2026.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Where to Apply for Your Schengen Visa?</h2>
                <p className="leading-relaxed text-muted-foreground">
                  A common mistake applicants make is applying to the wrong embassy. You must apply at the embassy or consulate of the country that is your <strong>main destination</strong>. 
                  If you are visiting multiple countries for an equal number of days, you must apply at the embassy of the country you will enter first. Most Schengen countries process their applications in Pakistan through VFS Global, Gerry's, or AEG.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Core Requirements for Pakistani Citizens</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li><strong>Valid Passport:</strong> Must be valid for at least 3 months beyond your planned return date, with at least two blank pages.</li>
                  <li><strong>Travel Medical Insurance:</strong> Minimum coverage of €30,000, valid across the entire Schengen area.</li>
                  <li><strong>Proof of Financial Means:</strong> 6 months of bank statements showing a stable income and sufficient balance. Use our <Link to="/tools/bank-calculator" className="text-primary hover:underline">Bank Statement Calculator</Link> to estimate the required amount.</li>
                  <li><strong>Flight Itinerary:</strong> Round-trip reservation (do not buy actual tickets until approved).</li>
                  <li><strong>Accommodation Proof:</strong> Hotel bookings or an official invitation letter from a host in Europe.</li>
                  <li><strong>Ties to Pakistan:</strong> Employment letter, NOC, property documents, or family ties proving you will return.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-12 mb-4">Country-Specific Guides</h2>
                <p className="leading-relaxed text-muted-foreground mb-6">
                  While the general Schengen rules apply, each embassy has its own specific nuances and processing times. Explore our detailed guides for the most popular destinations:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                  <VisaCard country="Germany" visaType="Schengen Visa" fee="€80" processingTime="15-20 days" link="/germany-visa-from-pakistan" />
                  <VisaCard country="Italy" visaType="Schengen Visa" fee="€80" processingTime="15-25 days" link="/italy-visa-from-pakistan" />
                  <VisaCard country="France" visaType="Schengen Visa" fee="€80" processingTime="15-20 days" link="/france-visa-from-pakistan" />
                  <VisaCard country="Spain" visaType="Schengen Visa" fee="€80" processingTime="20-30 days" link="/spain-visa-from-pakistan" />
                </div>
              </div>

              <div className="mt-12">
                <FAQSection faqs={faqs} title="Schengen Visa FAQs 2026" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Need Help with Your Schengen Application?</h2>
              <GetHelpForm 
                title="Expert Visa Consultation" 
                description="Ensure your documents are perfect before submission to avoid rejection."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default SchengenVisaPage;