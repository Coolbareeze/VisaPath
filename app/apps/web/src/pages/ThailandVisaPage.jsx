
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

function ThailandVisaPage() {
  const requirements = [
    'Original Passport (valid for at least 6 months from travel date)',
    '1 Year validity required if applying for a 1-year multiple entry visa',
    'Completed and signed Visa Application Form',
    'Two recent passport-sized photos (3.5 x 4.5 cm, white background)',
    'Confirmed return flight ticket',
    'Proof of accommodation (Hotel booking for entire stay)',
    'Personal bank statements for the last 6 months',
    'Account Maintenance Certificate',
    'Employment/Business documents (NOC, NTN, FBR Returns)',
    'Family Registration Certificate (FRC) from NADRA'
  ];

  const documents = [
    'Passport (current and all previous)',
    'Copy of CNIC (front and back on one page)',
    'Visa Application Form',
    '2 Photos (white background, no glasses/caps)',
    'Flight reservation',
    'Hotel accommodation reservation',
    'Original bank statement (last 6 months, stamped by bank)',
    'Bank account maintenance letter',
    'Employment Letter/NOC (if employed)',
    'NTN and 2 years tax returns (if business owner)',
    'FRC (Family Registration Certificate)'
  ];

  const steps = [
    'Create an account on the official Thai E-Visa portal (thaievisa.go.th)',
    'Fill out the online application form accurately',
    'Upload clear, scanned copies of all required documents',
    'Pay the visa fee securely online',
    'Wait for the application to be processed',
    'If requested, attend an interview or submit additional documents to the embassy',
    'Receive your e-Visa via email and print it for travel'
  ];

  const rejectionReasons = [
    { title: 'Inconsistent Bank Statements', description: 'Showing large, sudden deposits just before applying without a proper explanation.' },
    { title: 'Unconfirmed Bookings', description: 'Submitting dummy hotel or flight bookings that are cancelled before the embassy verifies them.' },
    { title: 'Poor Document Quality', description: 'Uploading blurry or unreadable scans in the e-Visa system.' },
    { title: 'Lack of Ties to Pakistan', description: 'Not providing sufficient proof of employment, business, or family to show intent to return.' }
  ];

  const approvalTips = [
    { title: 'Maintain Balance Over Time', description: 'Ensure your required balance is maintained consistently over the 6 months, not just the last week.' },
    { title: 'Upload High-Quality Scans', description: 'Since it is an e-Visa, the clarity of your uploaded documents is crucial.' },
    { title: 'Provide Authentic Bookings', description: 'Only use verifiable hotel and flight reservations.' },
    { title: 'Attach FBR Returns', description: 'Even if optional, attaching your FBR tax returns significantly boosts your credibility.' }
  ];

  const faqs = [
    { question: 'Is Thailand visa a sticker or an e-Visa for Pakistanis?', answer: 'Thailand has transitioned to an e-Visa system for Pakistani citizens. You apply online and receive the visa via email.' },
    { question: 'What is the minimum bank balance required for a Thailand visa?', answer: 'You should maintain a closing balance of at least PKR 300,000 to PKR 500,000 for a single applicant.' },
    { question: 'How long does it take to get a Thailand visa?', answer: 'Processing typically takes 10 to 15 working days, but applying at least 3 weeks in advance is recommended.' },
    { question: 'Do I need an interview?', answer: 'Usually, no. However, the Thai Embassy reserves the right to request a physical interview or additional documents.' },
    { question: 'What is the visa validity?', answer: 'A single-entry tourist visa is usually valid for 3 months from the date of issue, allowing a stay of up to 60 days.' }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visapath.pk/" },
      { "@type": "ListItem", "position": 2, "name": "Asia Visas", "item": "https://visapath.pk/asia-visas" },
      { "@type": "ListItem", "position": 3, "name": "Thailand Visa", "item": "https://visapath.pk/thailand-visa-from-pakistan" }
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
        title="Thailand Visa from Pakistan 2026 - E-Visa Requirements & Fee"
        description="Apply for a Thailand e-Visa from Pakistan. Discover requirements, required bank statement, processing time, and visa fees for 2026."
        canonical="/thailand-visa-from-pakistan"
        schemas={[breadcrumbSchema, faqSchema]}
      />

      <Header />

      <main>
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/asia-visas" className="hover:text-primary transition-colors">Asia Visas</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Thailand Visa</span>
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
                Thailand Visa from Pakistan 2026
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Visa Fee</p>
                        <p className="text-xl font-semibold">PKR 15,000 (Approx)</p>
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
                        <p className="text-xl font-semibold">10-15 days</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-lg max-w-none mb-12 text-foreground">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Thailand is famous for its tropical beaches, opulent royal palaces, ancient ruins, and ornate temples. For Pakistani citizens, the visa application process has been modernized through the introduction of the Thai E-Visa system. This means you no longer need to physically submit your passport for a sticker visa in most cases.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  The tourist visa allows you to explore the country for up to 60 days. To ensure a smooth application, it is highly recommended to have your financial documents, such as 6 months of bank statements, fully organized and verifiable.
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
                    requirement="Bank statements for the last 6 months showing regular income and sufficient balance. Sudden large deposits must be explained."
                    amountPKR={300000}
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Get help with your Thailand visa</h2>
              <GetHelpForm
                title="Need Assistance?"
                description="Our visa experts will help you prepare a strong E-Visa application"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ThailandVisaPage;
