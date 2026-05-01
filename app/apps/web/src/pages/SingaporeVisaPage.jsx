
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

function SingaporeVisaPage() {
  const requirements = [
    'Valid Passport (minimum 6 months validity)',
    'Form 14A duly completed and signed',
    'Recent passport-sized color photograph (white background)',
    'Confirmed return flight ticket',
    'Confirmed hotel booking',
    'Letter of Introduction (Form V39A) issued by a local sponsor OR application through an authorized visa agent',
    'Proof of employment or business in Pakistan',
    'Bank statements for the last 6 months'
  ];

  const documents = [
    'Original Passport and photocopy of bio-data page',
    'CNIC Copy',
    'Completed Form 14A',
    'Completed Form V39A (if you have a local sponsor)',
    '2 Passport size photographs',
    'Flight itinerary',
    'Hotel reservation',
    'Original Bank Statement and Account Maintenance Certificate',
    'NOC from employer or Business Registration documents'
  ];

  const steps = [
    'Determine if you have a local contact in Singapore (Citizen or PR) to sponsor you via Form V39A',
    'If no local contact, select an authorized visa agent to process your application',
    'Gather all required documents and fill out Form 14A',
    'Submit your documents to your local sponsor or authorized agent',
    'The sponsor/agent submits your application online via the SAVE system',
    'Pay the visa processing fee',
    'Once approved, receive your e-Visa (electronic visa) document via email'
  ];

  const rejectionReasons = [
    { title: 'Incomplete Sponsor Details', description: 'If applying through a local contact, failure to provide their accurate NRIC details and a signed Form V39A.' },
    { title: 'Unreliable Agent', description: 'Using an unauthorized or fraudulent agent who submits fake documents on your behalf.' },
    { title: 'Inconsistent Information', description: 'Discrepancies between your stated occupation, financial standing, and travel intent.' },
    { title: 'Previous Immigration Violations', description: 'Overstaying in Singapore or other countries previously.' }
  ];

  const approvalTips = [
    { title: 'Use Authorized Agents', description: 'If you do not have a sponsor, only use well-reputed, authorized travel agencies in Pakistan.' },
    { title: 'Show Strong Financials', description: 'Singapore is an expensive destination. Show a healthy bank balance to prove you can afford the trip.' },
    { title: 'Provide a Detailed Itinerary', description: 'A clear, day-by-day plan of your activities in Singapore adds credibility to your application.' }
  ];

  const faqs = [
    { question: 'Do Pakistanis need a visa for Singapore?', answer: 'Yes, Pakistani passport holders are categorized as Assessment Level II and require a valid visa to enter Singapore.' },
    { question: 'Can I apply for a Singapore visa online myself?', answer: 'No. You cannot apply independently. The application must be submitted online by a local Singaporean contact or through an authorized visa agent.' },
    { question: 'How much does the Singapore visa cost?', answer: 'The official fee is SGD 30. However, authorized agents charge additional service fees, bringing the total to approx. PKR 12,000 - 15,000.' },
    { question: 'How long does processing take?', answer: 'Generally, it takes 5 to 7 working days, excluding weekends and public holidays.' },
    { question: 'What is Form V39A?', answer: 'It is a Letter of Introduction that a local Singaporean Citizen or Permanent Resident must fill out to sponsor your visit.' }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visapath.pk/" },
      { "@type": "ListItem", "position": 2, "name": "Asia Visas", "item": "https://visapath.pk/asia-visas" },
      { "@type": "ListItem", "position": 3, "name": "Singapore Visa", "item": "https://visapath.pk/singapore-visa-from-pakistan" }
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
        title="Singapore Visa from Pakistan 2026 - Requirements & Authorized Agents"
        description="Learn how to get a Singapore visa from Pakistan. Understand Form 14A, V39A sponsor requirements, authorized agents, bank balance, and fees."
        canonical="/singapore-visa-from-pakistan"
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
              <span className="text-foreground">Singapore Visa</span>
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
                Singapore Visa from Pakistan 2026
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Visa Fee</p>
                        <p className="text-xl font-semibold">PKR 12,000 (Approx with agent)</p>
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
                        <p className="text-xl font-semibold">5-7 days</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-lg max-w-none mb-12 text-foreground">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Singapore is a global financial center and an incredible tourist destination. The visa process for Singapore is unique compared to other countries; you cannot apply for it directly on your own.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  You must either have a local contact in Singapore (a citizen or permanent resident) who can submit the application for you online using their Singpass account, or you must use an authorized visa agent/travel agency in Pakistan.
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
                    requirement="Bank statements for 6 months demonstrating sufficient funds for a stay in an expensive city. Agent might require specific closing balances."
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Need a Singapore Visa Agent?</h2>
              <GetHelpForm
                title="Connect with Authorized Agents"
                description="We can process your Singapore visa reliably through our authorized channels."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default SingaporeVisaPage;
