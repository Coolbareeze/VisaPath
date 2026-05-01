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

function UKVisitVisaPage() {
  const requirements = [
    'Valid Pakistani passport (minimum 6 months validity)',
    'Completed online UK visa application form',
    'Invitation letter from family/friends in the UK',
    'Proof of sponsor\'s status in the UK (Passport/BRP copy)',
    'Proof of financial means (your bank statements or sponsor\'s)',
    'Proof of employment or business in Pakistan',
    'Proof of relationship with the sponsor (birth/marriage certificates)',
    'Family Registration Certificate (FRC) from NADRA'
  ];

  const documents = [
    'Original passport + photocopies',
    'Printed online application form',
    'Invitation letter from UK host',
    'Host\'s passport/BRP copy and utility bills',
    'Host\'s bank statements (if they are sponsoring the trip)',
    'Your bank statements for the last 6 months',
    'Employment letter with salary details and NOC',
    'Income tax returns (FBR) for the last 2 years',
    'Property documents (to show ties to Pakistan)',
    'FRC (Family Registration Certificate)'
  ];

  const steps = [
    'Obtain an invitation letter and supporting documents from your UK host',
    'Fill out the online application form on the GOV.UK website',
    'Pay the visa fee online using a credit/debit card',
    'Book an appointment at a VFS Global centre in Pakistan',
    'Upload your supporting documents online before your appointment',
    'Attend your appointment to provide biometrics (fingerprints and photo)',
    'Wait for the decision and collect your passport'
  ];

  const rejectionReasons = [
    { title: 'Doubtful intention to return', description: 'The officer believes you might overstay and live with your relatives illegally.' },
    { title: 'Unexplained bank deposits', description: 'Large, sudden deposits in your bank account without a clear source of origin.' },
    { title: 'Weak ties to Pakistan', description: 'Failure to prove that you have strong reasons (job, property, immediate family) to return to Pakistan.' },
    { title: 'Insufficient sponsor funds', description: 'If your host is sponsoring you, but their bank statements do not show enough disposable income.' }
  ];

  const approvalTips = [
    { title: 'Prove strong ties', description: 'Even if your host is paying for everything, you must prove you have a life in Pakistan to return to (job, property, spouse/children).' },
    { title: 'Clear invitation letter', description: 'The host should clearly state the purpose of visit, duration, and what expenses they are covering.' },
    { title: 'Provide relationship proof', description: 'Include birth certificates, marriage certificates, or photos to prove your relationship with the host.' },
    { title: 'Explain large transactions', description: 'If you have large deposits, provide a cover letter and evidence explaining their source.' }
  ];

  const faqs = [
    { question: 'How long does UK Family Visit Visa processing take?', answer: 'Standard processing time is usually 3 to 6 weeks.' },
    { question: 'Can my relative in the UK sponsor my entire trip?', answer: 'Yes, they can provide an undertaking to cover your flights, accommodation, and daily expenses. They must provide their bank statements and payslips.' },
    { question: 'Do I still need to show my own bank statement if sponsored?', answer: 'Yes, it is highly recommended to show your own bank statement to prove your financial stability and ties to Pakistan.' },
    { question: 'How long can I stay in the UK?', answer: 'You can stay for up to 6 months, but it is advisable to stick to the duration mentioned in your application (e.g., 3-4 weeks).' }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visapath.pk/" },
      { "@type": "ListItem", "position": 2, "name": "UK Visas", "item": "https://visapath.pk/uk-visas" },
      { "@type": "ListItem", "position": 3, "name": "UK Family Visit Visa", "item": "https://visapath.pk/uk-visit-visa-from-pakistan" }
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
        title="UK Family Visit Visa from Pakistan 2026 - Requirements & Guide"
        description="Guide to visiting family and friends in the UK from Pakistan. Check requirements, sponsor documents, fees, and how to apply successfully in 2026."
        canonical="/uk-visit-visa-from-pakistan"
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
              <span className="text-foreground">UK Family Visit Visa</span>
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
                UK Family Visit Visa from Pakistan 2026
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
                  If you have family members or friends living in the United Kingdom, you can apply for a Standard Visitor Visa to visit them. While the visa category is the same as a tourist visa, the documentation required is slightly different, as it involves your host in the UK.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  A common misconception is that an invitation letter guarantees a visa. In reality, UKVI will heavily scrutinize your ties to Pakistan to ensure you will not overstay. Even if your host is sponsoring your trip, you must prove you have a compelling reason to return home.
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
                    requirement="Your bank statements for 6 months, plus your sponsor's bank statements if they are funding the trip. Minimum PKR 1,000,000 is recommended in your account to show ties."
                    amountPKR={1000000}
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

export default UKVisitVisaPage;