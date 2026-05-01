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
import { ChevronRight, DollarSign, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

function UKVisaPage() {
  const requirements = [
    'Valid Pakistani passport (minimum 6 months validity)',
    'Completed online UK visa application form',
    'Proof of financial means (6 months bank statements)',
    'Proof of employment or business in Pakistan',
    'Detailed travel itinerary and accommodation details',
    'Tuberculosis (TB) test results (if staying for more than 6 months)',
    'Family Registration Certificate (FRC) from NADRA',
    'Previous passports showing travel history'
  ];

  const documents = [
    'Original passport + photocopies',
    'Printed online application form',
    'Appointment confirmation letter',
    'Bank statements for the last 6 months (stamped and signed)',
    'Account maintenance certificate',
    'Employment letter with salary details and NOC',
    'Income tax returns (FBR) for the last 2 years',
    'Property documents (to show ties to Pakistan)',
    'Hotel bookings or accommodation proof',
    'Flight reservation',
    'FRC (Family Registration Certificate)'
  ];

  const steps = [
    'Determine the type of Standard Visitor Visa you need',
    'Fill out the online application form on the GOV.UK website',
    'Pay the visa fee online using a credit/debit card',
    'Book an appointment at a VFS Global centre in Pakistan',
    'Upload your supporting documents online before your appointment',
    'Attend your appointment to provide biometrics (fingerprints and photo)',
    'Wait for the decision and collect your passport'
  ];

  const rejectionReasons = [
    { title: 'Unexplained bank deposits', description: 'Large, sudden deposits in your bank account without a clear source of origin.' },
    { title: 'Weak ties to Pakistan', description: 'Failure to prove that you have strong reasons (job, property, family) to return to Pakistan.' },
    { title: 'Inconsistent information', description: 'Discrepancies between your application form, cover letter, and supporting documents.' },
    { title: 'Insufficient funds', description: 'Not having enough money to cover your trip without relying on public funds.' },
    { title: 'Doubtful travel history', description: 'Previous visa refusals or immigration violations that were not declared.' }
  ];

  const approvalTips = [
    { title: 'Explain large transactions', description: 'If you have large deposits, provide a cover letter and evidence explaining their source (e.g., property sale, bonus).' },
    { title: 'Provide a clear itinerary', description: 'Show exactly what you plan to do in the UK day-by-day.' },
    { title: 'Show strong ties', description: 'Include property deeds, business ownership documents, or a strong employment letter.' },
    { title: 'Be honest', description: 'Always declare previous visa refusals from any country. UKVI shares data with other nations.' }
  ];

  const faqs = [
    { question: 'How long does UK Standard Visitor Visa processing take?', answer: 'Standard processing time is usually 3 to 6 weeks. Priority services may be available for an extra fee.' },
    { question: 'What is the minimum bank balance required?', answer: 'There is no fixed amount, but you should show enough to cover your flights, accommodation, and daily expenses (approx. £100-£150/day). Minimum PKR 1,000,000 to 2,000,000 is recommended.' },
    { question: 'Do I need an interview?', answer: 'Usually, no interview is required for a visitor visa. Decisions are made based on your documents.' },
    { question: 'Can I work on a Standard Visitor Visa?', answer: 'No, you cannot do paid or unpaid work in the UK on a visitor visa.' }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visapath.pk/" },
      { "@type": "ListItem", "position": 2, "name": "UK Visas", "item": "https://visapath.pk/uk-visas" },
      { "@type": "ListItem", "position": 3, "name": "UK Standard Visitor Visa", "item": "https://visapath.pk/uk-visa-from-pakistan" }
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
        title="UK Visa from Pakistan 2026 - Requirements & Fee"
        description="UK Standard Visitor Visa guide for Pakistanis. Check requirements, fees, processing time, documents & how to apply successfully in 2026."
        canonical="/uk-visa-from-pakistan"
        schemas={[breadcrumbSchema, faqSchema]}
      />

      <Header />

      <main>
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/uk-visas" className="hover:text-primary transition-colors">UK Visas</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">UK Standard Visitor Visa</span>
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                UK Standard Visitor Visa from Pakistan 2026
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Visa Fee</p>
                        <p className="text-xl font-semibold">GBP 115 ≈ PKR 40,250</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Processing Time</p>
                        <p className="text-xl font-semibold">3-6 weeks</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-lg max-w-none mb-12 text-foreground">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="leading-relaxed text-muted-foreground">
                  The UK Standard Visitor Visa allows Pakistani citizens to visit the UK for tourism, business meetings, academic conferences, or medical treatment for up to 6 months. The application process is entirely online, followed by a biometric appointment at VFS Global.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  UK Visas and Immigration (UKVI) is known for its strict scrutiny of financial documents. It is imperative that your bank statements reflect your stated income and that any large deposits are thoroughly explained. Use our <Link to="/tools/bank-calculator" className="text-primary hover:underline">Bank Statement Calculator</Link> to ensure you meet the financial thresholds.
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
                    requirement="Bank statements for the last 6 months showing regular income and sufficient balance. Minimum PKR 1,000,000-2,000,000 is recommended."
                    amountPKR={1500000}
                  />
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
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Get help with your UK visa</h2>
              <GetHelpForm
                title="Need Assistance?"
                description="Our visa experts will help you prepare a strong application"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default UKVisaPage;