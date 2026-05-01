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

function UKStudentVisaPage() {
  const requirements = [
    'Valid Pakistani passport',
    'Confirmation of Acceptance for Studies (CAS) from a licensed UK university',
    'Proof of English language proficiency (IELTS/PTE)',
    'Proof of financial means (maintenance funds) held for 28 consecutive days',
    'Tuberculosis (TB) test certificate from an approved clinic',
    'ATAS certificate (if studying specific science/tech subjects)',
    'Payment of Immigration Health Surcharge (IHS)',
    'Educational documents used to obtain the CAS'
  ];

  const documents = [
    'Original passport',
    'CAS statement',
    'IELTS/PTE certificate',
    'Bank statements showing funds held for 28 days',
    'TB test certificate',
    'Educational degrees and transcripts',
    'Consent letter from parents (if under 18 or using parents\' bank account)',
    'Birth certificate (if using parents\' bank account)',
    'ATAS certificate (if applicable)'
  ];

  const steps = [
    'Receive an unconditional offer and CAS from a UK university',
    'Ensure your maintenance funds have been in your bank account for 28 days',
    'Take a TB test at a UKVI approved clinic in Pakistan',
    'Apply online on the GOV.UK website and pay the visa fee and IHS',
    'Book an appointment at VFS Global',
    'Upload your documents online',
    'Attend your appointment for biometrics and a potential credibility interview'
  ];

  const rejectionReasons = [
    { title: 'Funds not held for 28 days', description: 'The required maintenance funds must be in your account for 28 consecutive days before applying. Even a 1-day dip below the required amount leads to rejection.' },
    { title: 'Failed credibility interview', description: 'If you cannot confidently answer questions about your course, university, or career plans during the interview.' },
    { title: 'Invalid financial documents', description: 'Using a bank that is not recognized by UKVI or providing statements in an incorrect format.' },
    { title: 'Missing TB certificate', description: 'Failing to provide a valid TB certificate from an approved clinic.' }
  ];

  const approvalTips = [
    { title: 'Prepare for the interview', description: 'Know your course modules, why you chose the specific university, and how it aligns with your career goals in Pakistan.' },
    { title: 'Calculate funds accurately', description: 'You need 1 year of tuition fees + £1,334/month (London) or £1,023/month (outside London) for up to 9 months.' },
    { title: 'Use approved banks', description: 'Ensure your bank is on the UKVI approved list of financial institutions in Pakistan.' },
    { title: 'Check CAS details', description: 'Ensure all personal details on your CAS match your passport exactly.' }
  ];

  const faqs = [
    { question: 'How long does UK Student Visa processing take?', answer: 'Standard processing is 3-4 weeks. Priority (5 days) and Super Priority (24 hours) services are often available for an extra fee.' },
    { question: 'How much bank balance is required?', answer: 'It depends on your tuition fee and location. Generally, you need to show PKR 4,000,000 to 6,000,000 held for 28 days.' },
    { question: 'Can I work on a UK Student Visa?', answer: 'Yes, degree-level students can usually work up to 20 hours per week during term time and full-time during holidays.' },
    { question: 'Can I bring my dependents?', answer: 'As of 2024, only students on postgraduate research programs (e.g., PhD) or government-sponsored students can bring dependents.' }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visapath.pk/" },
      { "@type": "ListItem", "position": 2, "name": "UK Visas", "item": "https://visapath.pk/uk-visas" },
      { "@type": "ListItem", "position": 3, "name": "UK Student Visa", "item": "https://visapath.pk/uk-student-visa-from-pakistan" }
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
        title="UK Student Visa from Pakistan 2026 - Requirements & Guide"
        description="Complete guide to UK Student Visa (Tier 4) from Pakistan. Check CAS requirements, 28-day bank statement rules, fees, and interview tips."
        canonical="/uk-student-visa-from-pakistan"
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
              <span className="text-foreground">UK Student Visa</span>
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
                UK Student Visa from Pakistan 2026
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Visa Fee</p>
                        <p className="text-xl font-semibold">GBP 490 ≈ PKR 171,500</p>
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
                        <p className="text-xl font-semibold">3-4 weeks</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-lg max-w-none mb-12 text-foreground">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="leading-relaxed text-muted-foreground">
                  The UK is home to some of the world's top universities, making it a premier destination for Pakistani students. To study in the UK, you must apply for a Student Visa (formerly Tier 4). The most critical components of this application are your Confirmation of Acceptance for Studies (CAS) and your financial evidence.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  UKVI has strict rules regarding maintenance funds. The required money must be held in your or your parents' bank account for 28 consecutive days before you apply. Additionally, you will need to pay the Immigration Health Surcharge (IHS) to access the UK's National Health Service during your stay.
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
                    requirement="Funds covering 1 year of tuition + 9 months of living expenses (£1,334/mo in London, £1,023/mo outside). Must be held for 28 consecutive days."
                    amountPKR={5000000}
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Get help with your UK student visa</h2>
              <GetHelpForm
                title="Need Assistance?"
                description="Our education consultants will help you prepare a flawless application"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default UKStudentVisaPage;