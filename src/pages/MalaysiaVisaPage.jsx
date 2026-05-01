
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

function MalaysiaVisaPage() {
  const requirements = [
    'Original Passport valid for at least 6 months beyond travel date',
    'Completed e-Visa application form',
    'Digital passport-sized photograph (white background, strict dimensions)',
    'Confirmed return flight ticket',
    'Confirmed hotel accommodation',
    'Bank statements for the last 6 months',
    'No Objection Certificate (NOC) from employer',
    'NADRA Family Registration Certificate (FRC)'
  ];

  const documents = [
    'Scanned copy of Passport Information Page',
    'Scanned copy of CNIC (front and back)',
    'Recent Digital Photo (studio quality, not cropped from a phone picture)',
    'Flight Booking (Return ticket)',
    'Hotel Reservation for the entire duration of stay',
    'Bank statement showing sufficient funds (stamped)',
    'Employment/NOC letter or Business Registration',
    'Previous visa copies (if applicable)'
  ];

  const steps = [
    'Visit the official Malaysia e-Visa portal (malaysiavisa.imi.gov.my)',
    'Register for a new account or log in',
    'Select the Tourist e-Visa category',
    'Fill in applicant details exactly as they appear on the passport',
    'Upload high-resolution scans of all required documents',
    'Pay the visa processing fee online via credit/debit card',
    'Track your application and download the e-Visa once approved'
  ];

  const rejectionReasons = [
    { title: 'Non-compliant Photograph', description: 'Malaysia is extremely strict about photo dimensions and quality. A shadow, wrong background, or poor lighting will lead to rejection.' },
    { title: 'Fake Flight/Hotel Bookings', description: 'Providing edited or cancelled bookings will result in immediate refusal.' },
    { title: 'Insufficient Funds', description: 'Bank statements showing low balance or lacking the bank’s official stamp and signature.' },
    { title: 'Passport Glare', description: 'Uploading a passport scan that has a flash glare covering important details.' }
  ];

  const approvalTips = [
    { title: 'Get a Professional Photo', description: 'Go to a studio and ask for the specific Malaysia e-Visa photo size. Do not try to take it yourself on a phone.' },
    { title: 'Scan Documents Properly', description: 'Use a flatbed scanner for your passport and CNIC. Avoid mobile scanner apps if they reduce quality.' },
    { title: 'Show Travel History', description: 'If you have previous visas, make sure to upload them to prove you are a genuine traveler.' },
    { title: 'Ensure Details Match', description: 'Your hotel and flight dates must perfectly align with the dates entered in your application form.' }
  ];

  const faqs = [
    { question: 'Is the Malaysia visa an e-Visa or sticker?', answer: 'For Pakistani citizens, Malaysia issues an e-Visa which can be applied for entirely online.' },
    { question: 'What is the processing time for Malaysia e-Visa?', answer: 'It usually takes 3 to 5 working days, provided all documents are correct.' },
    { question: 'How much bank balance is required?', answer: 'A minimum closing balance of PKR 200,000 to PKR 300,000 is recommended per applicant.' },
    { question: 'Can I apply for a Multiple Entry Visa (MEV)?', answer: 'Yes, you can select MEV during the application, but approval depends on your travel history and financial standing.' },
    { question: 'Do I need a polio vaccination certificate?', answer: 'While not always requested during the visa process, you must carry a valid polio certificate when traveling from Pakistan.' }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visapath.pk/" },
      { "@type": "ListItem", "position": 2, "name": "Asia Visas", "item": "https://visapath.pk/asia-visas" },
      { "@type": "ListItem", "position": 3, "name": "Malaysia Visa", "item": "https://visapath.pk/malaysia-visa-from-pakistan" }
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
        title="Malaysia Visa from Pakistan 2026 - E-Visa Guide & Fee"
        description="Step-by-step guide for Malaysia e-Visa from Pakistan. Find out document requirements, photo specifications, bank balance, and processing time."
        canonical="/malaysia-visa-from-pakistan"
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
              <span className="text-foreground">Malaysia Visa</span>
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
                Malaysia Visa from Pakistan 2026
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Visa Fee</p>
                        <p className="text-xl font-semibold">PKR 18,000 (Approx)</p>
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
                        <p className="text-xl font-semibold">3-5 days</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-lg max-w-none mb-12 text-foreground">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Malaysia is a top destination offering a mix of modern cities like Kuala Lumpur and stunning natural landscapes. For Pakistanis, obtaining a Malaysia visa is highly convenient thanks to the e-Visa portal. You can complete the entire process from the comfort of your home.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  While the process is digital, the Malaysian Immigration Department is exceptionally strict regarding document quality—particularly the digital photograph and passport scan. Ensuring these meet their exact specifications is the key to approval.
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
                    requirement="Bank statements for the last 6 months. Must be stamped by the bank and accompanied by an Account Maintenance Certificate."
                    amountPKR={250000}
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Get help with your Malaysia visa</h2>
              <GetHelpForm
                title="Need Assistance?"
                description="We ensure your documents meet strict e-Visa standards for a smooth approval."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default MalaysiaVisaPage;
