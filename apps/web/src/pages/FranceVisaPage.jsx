
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEO from '@/components/SEO.jsx';
import RequirementsSection from '@/components/RequirementsSection.jsx';
import DocumentsChecklist from '@/components/DocumentsChecklist.jsx';
import BankStatementInfo from '@/components/BankStatementInfo.jsx';
import ApplicationSteps from '@/components/ApplicationSteps.jsx';
import RejectionReasons from '@/components/RejectionReasons.jsx';
import ApprovalTips from '@/components/ApprovalTips.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import GetHelpForm from '@/components/GetHelpForm.jsx';
import { ChevronRight, DollarSign, Clock, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

function FranceVisaPage() {
  const requirements = [
    'Valid Pakistani passport (minimum 3 months validity beyond planned return)',
    'Completed France-Visas online application form',
    'Two recent biometric photos (3.5 x 4.5 cm, light grey/white background)',
    'Schengen Travel Medical Insurance (minimum coverage €30,000)',
    'Proof of accommodation (hotel bookings or Attestation d\'accueil)',
    'Confirmed round-trip flight reservation',
    'Proof of financial means (6 months bank statements)',
    'Employment/Business documents (NOC, NTN, FBR Returns)',
    'Family Registration Certificate (FRC) from NADRA'
  ];

  const documents = [
    'Original passport + copies of all pages with visas/stamps',
    'CNIC Copy (front and back)',
    'Signed France-Visas application form and receipt',
    '2 Biometric Photos',
    'Schengen Travel Insurance certificate',
    'Flight itinerary',
    'Hotel booking or official invitation (Attestation d\'accueil)',
    'Bank statement (stamped by bank) and Account Maintenance Certificate',
    'Employment Letter/NOC and 3 months payslips',
    'FBR Tax Returns for the last 2 years',
    'FRC (Family Registration Certificate)'
  ];

  const steps = [
    'Create an account on the official France-Visas portal',
    'Complete the online application form and print the generated PDF and receipt',
    'Book an appointment at the VFS Global center in Pakistan (Islamabad, Lahore, or Karachi)',
    'Gather all required documents according to the checklist provided by France-Visas',
    'Attend your appointment at VFS Global to submit documents and provide biometrics',
    'Pay the visa fee and VFS service charges',
    'Track your application and collect your passport once processed'
  ];

  const rejectionReasons = [
    { title: 'Insufficient Ties to Pakistan', description: 'The embassy believes you intend to migrate to France illegally. Lack of property, family, or stable job leads to this.' },
    { title: 'Unjustified Purpose of Travel', description: 'Your itinerary does not match your hotel bookings or you lack a clear, logical travel plan.' },
    { title: 'Inadequate Funds', description: 'Your bank statement shows low balance, sudden unexplained deposits, or does not cover the €120/day requirement.' },
    { title: 'Fake Bookings', description: 'Using dummy flight or hotel tickets that get cancelled before the embassy checks them.' }
  ];

  const approvalTips = [
    { title: 'Provide a Detailed Cover Letter', description: 'Explain your exact purpose of visit, itinerary, and promise to return to Pakistan. Address any weak points in your application here.' },
    { title: 'Genuine Financials', description: 'Maintain your bank balance organically over 6 months. If a sponsor is paying, provide their financial documents and an affidavit.' },
    { title: 'Show Strong Ties', description: 'Attach property deeds, business ownership documents, or marriage/children certificates to prove you will return.' },
    { title: 'Consistent Itinerary', description: 'Ensure your flight dates, hotel dates, and insurance validity perfectly align.' }
  ];

  const faqs = [
    { question: 'Is France part of the Schengen area?', answer: 'Yes, France is a Schengen member state. A French Schengen visa allows you to travel to all 29 Schengen countries for up to 90 days within a 180-day period.' },
    { question: 'What is the visa fee for France?', answer: 'The Schengen visa fee is €90 for adults. Additionally, VFS Global charges a service fee of approximately €30-40.' },
    { question: 'How much bank balance do I need?', answer: 'You should demonstrate funds to cover approx. €120 per day in France. A safe minimum balance from Pakistan is PKR 1,000,000.' },
    { question: 'How long does processing take?', answer: 'Standard processing is 15-20 days, but during peak summer or holiday seasons, it can take up to 45 days. Apply early.' },
    { question: 'What is an Attestation d\'accueil?', answer: 'It is an official proof of accommodation document that your host in France must obtain from their local town hall (Mairie) if you are staying at their house.' }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visapath.pk/" },
      { "@type": "ListItem", "position": 2, "name": "Europe Visas", "item": "https://visapath.pk/europe-visas" },
      { "@type": "ListItem", "position": 3, "name": "France Visa", "item": "https://visapath.pk/france-visa-from-pakistan" }
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
        title="France Visa from Pakistan 2026 - Schengen Requirements & VFS Guide"
        description="Comprehensive guide to obtaining a France Schengen Visa from Pakistan. Check France-Visas requirements, VFS appointments, bank statement rules, and fees."
        canonical="/france-visa-from-pakistan"
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
              <span className="text-foreground">France Visa</span>
            </nav>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="mb-6 flex items-center p-4 bg-primary/10 text-primary border border-primary/20 rounded-lg">
                <Info className="h-5 w-5 mr-3 flex-shrink-0" />
                <p className="text-sm font-medium">France is a Schengen member state. This visa allows travel to all 29 Schengen countries under the 90/180 days rule.</p>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                France Schengen Visa from Pakistan 2026
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Visa Fee</p>
                        <p className="text-xl font-semibold">€90 ≈ PKR 27,000</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Processing Time</p>
                        <p className="text-xl font-semibold">15-20 days</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-lg max-w-none mb-12 text-foreground">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="leading-relaxed text-muted-foreground">
                  France remains one of the most visited countries in the world, famous for Paris, the Eiffel Tower, the Riviera, and its rich cultural heritage. Since France is part of the Schengen Agreement, Pakistani passport holders must apply for a short-stay Schengen Visa (Type C) for tourism, business, or family visits.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  All applications must be initiated through the official France-Visas website. After completing the online form, applicants must schedule an appointment at VFS Global to submit their physical documents and provide biometric data.
                </p>
              </div>

              <div className="space-y-12">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <RequirementsSection requirements={requirements} />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <DocumentsChecklist documents={documents} />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <BankStatementInfo
                    requirement="Bank statements for the last 6 months. Ensure you have enough funds to cover approx. €120 per day of your stay, plus flights."
                    amountPKR={1000000}
                  />
                  <div className="mt-4 flex gap-4 text-sm font-medium">
                    <Link to="/tools/bank-calculator" className="text-primary hover:underline">Bank Statement Calculator →</Link>
                    <Link to="/tools/fee-calculator" className="text-primary hover:underline">Schengen Fee Calculator →</Link>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <ApplicationSteps steps={steps} />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <RejectionReasons reasons={rejectionReasons} />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <ApprovalTips tips={approvalTips} />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                  <FAQSection faqs={faqs} />
                </motion.div>
                
                <div className="pt-8 border-t border-border">
                  <h3 className="text-xl font-semibold mb-4">Explore Other Schengen Destinations</h3>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/schengen-visa-from-pakistan" className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm hover:bg-secondary/80 transition-colors">Schengen Guide</Link>
                    <Link to="/germany-visa-from-pakistan" className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm hover:bg-secondary/80 transition-colors">Germany Visa</Link>
                    <Link to="/italy-visa-from-pakistan" className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm hover:bg-secondary/80 transition-colors">Italy Visa</Link>
                    <Link to="/spain-visa-from-pakistan" className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm hover:bg-secondary/80 transition-colors">Spain Visa</Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Get help with your France visa</h2>
              <GetHelpForm
                title="Need Assistance?"
                description="Our Schengen experts will help you prepare a flawless application and cover letter."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default FranceVisaPage;
