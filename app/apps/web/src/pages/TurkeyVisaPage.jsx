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

function TurkeyVisaPage() {
  const requirements = [
    'Valid Pakistani passport (minimum 6 months validity)',
    'Completed and signed Turkey visa application form',
    'Two recent biometric photographs (5x5 cm, white background)',
    'Travel medical insurance covering minimum €30,000',
    'Proof of accommodation (hotel bookings)',
    'Round-trip flight reservation',
    'Proof of financial means (6 months bank statements)',
    'Employment letter, NOC, or business registration documents',
    'Polio vaccination certificate (valid for 1 year)',
    'Family Registration Certificate (FRC) from NADRA'
  ];

  const documents = [
    'Original passport + photocopies of first two pages and previous visas',
    'CNIC copy (front and back)',
    'Visa application form (duly signed)',
    '2 biometric photos (5x5 cm)',
    'Travel insurance certificate',
    'Flight reservation',
    'Hotel bookings',
    'Bank statements for the last 6 months (stamped and signed)',
    'Account maintenance certificate',
    'Employment letter with salary details and NOC',
    'Income tax returns (FBR) for the last 2 years',
    'Polio vaccination certificate'
  ];

  const steps = [
    'Fill out the preliminary online application form on the Turkish Consular website',
    'Print and sign the completed application form',
    'Gather all required documents according to the checklist',
    'Visit the nearest Anatolia Travel Services visa application center',
    'Submit your documents and provide biometrics',
    'Pay the visa fee and service charges at the center',
    'Track your application and collect your passport once processed'
  ];

  const rejectionReasons = [
    { title: 'Insufficient financial proof', description: 'Bank statements showing irregular deposits, low balance, or recent large deposits without explanation.' },
    { title: 'Unclear travel purpose', description: 'Vague or inconsistent travel plans. Provide a detailed day-by-day itinerary.' },
    { title: 'Weak ties to Pakistan', description: 'Lack of proof regarding employment, property, or family ties in Pakistan.' },
    { title: 'Missing Polio Certificate', description: 'Failure to provide a valid polio vaccination certificate is a common reason for delays or rejection.' },
    { title: 'Forged documents', description: 'Submitting fake hotel bookings or altered bank statements will lead to immediate rejection.' }
  ];

  const approvalTips = [
    { title: 'Maintain a consistent bank balance', description: 'Show 6 months of regular salary deposits. Avoid sudden large deposits.' },
    { title: 'Provide genuine bookings', description: 'Make hotel reservations that can be verified by the embassy.' },
    { title: 'Show strong ties to return', description: 'Include property documents, business ownership, or strong family ties in Pakistan.' },
    { title: 'Get the right insurance', description: 'Ensure your travel insurance covers the entire duration of your stay in Turkey.' },
    { title: 'Organize your documents', description: 'Present your application neatly in the exact order requested by Anatolia Travel Services.' }
  ];

  const faqs = [
    { question: 'How long does Turkey visa processing take from Pakistan?', answer: 'Standard processing time is 10-20 working days. Apply at least 3-4 weeks in advance.' },
    { question: 'What is the minimum bank balance required?', answer: 'You should maintain a balance of at least PKR 400,000 to 800,000, depending on your trip duration.' },
    { question: 'Can I get a Turkey e-Visa?', answer: 'Pakistani citizens can only get an e-Visa if they hold a valid visa or residence permit from a Schengen country, USA, UK, or Ireland.' },
    { question: 'Do I need an interview?', answer: 'Usually, no interview is required. You just need to submit your documents at Anatolia Travel Services.' },
    { question: 'Is the Polio certificate mandatory?', answer: 'Yes, a valid polio vaccination certificate is mandatory for all applicants traveling from Pakistan.' }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visapath.pk/" },
      { "@type": "ListItem", "position": 2, "name": "Turkey Visas", "item": "https://visapath.pk/turkey-visas" },
      { "@type": "ListItem", "position": 3, "name": "Turkey Visit Visa", "item": "https://visapath.pk/turkey-visa-from-pakistan" }
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
        title="Turkey Visa from Pakistan 2026 - Requirements & Fee"
        description="Complete guide to Turkey visit visa from Pakistan in 2026. Check requirements, bank statement, fees, processing time, and apply successfully."
        canonical="/turkey-visa-from-pakistan"
        schemas={[breadcrumbSchema, faqSchema]}
      />

      <Header />

      <main>
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/turkey-visas" className="hover:text-primary transition-colors">Turkey Visas</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Turkey Visit Visa</span>
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
                Turkey Visa from Pakistan 2026
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Visa Fee</p>
                        <p className="text-xl font-semibold">USD 60 ≈ PKR 16,680</p>
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
                        <p className="text-xl font-semibold">10-20 days</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-lg max-w-none mb-12 text-foreground">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Turkey is a highly sought-after destination for Pakistani tourists. To visit Turkey for tourism or business purposes, Pakistani citizens holding ordinary passports must apply for a sticker visa through Anatolia Travel Services, the official visa application center for Turkey in Pakistan.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  The application process is straightforward if you have the correct documentation. You will need to prove your financial stability, ties to Pakistan, and genuine intent to return. Use our <Link to="/tools/checklist-generator" className="text-primary hover:underline">Document Checklist Generator</Link> to ensure you don't miss any crucial paperwork.
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
                    requirement="Bank statements for the last 6 months showing regular income and sufficient balance. Minimum PKR 400,000-800,000 is recommended."
                    amountPKR={600000}
                  />
                  <div className="mt-4">
                    <Link to="/tools/bank-calculator" className="text-sm text-primary hover:underline font-medium">
                      Calculate exact bank statement required for Turkey →
                    </Link>
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
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Get help with your Turkey visa</h2>
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

export default TurkeyVisaPage;