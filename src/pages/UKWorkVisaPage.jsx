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

function UKWorkVisaPage() {
  const requirements = [
    'Valid Pakistani passport',
    'Certificate of Sponsorship (CoS) from a UK licensed employer',
    'Job offer meeting the minimum salary threshold (usually £38,700/year)',
    'Proof of English language proficiency (IELTS UKVI or UK NARIC)',
    'Tuberculosis (TB) test certificate from an approved clinic',
    'Proof of personal savings (£1,270) unless employer certifies maintenance',
    'Criminal record certificate (if working in certain sectors)',
    'Payment of Immigration Health Surcharge (IHS)'
  ];

  const documents = [
    'Original passport',
    'Certificate of Sponsorship (CoS) reference number',
    'IELTS UKVI certificate or Ecctis (NARIC) letter',
    'TB test certificate',
    'Bank statements showing £1,270 held for 28 days (if applicable)',
    'Police character certificate (if applicable)',
    'Educational degrees and professional certificates',
    'Marriage/Birth certificates for dependents (if applying together)'
  ];

  const steps = [
    'Secure a job offer from a UK employer with a sponsor license',
    'Receive your Certificate of Sponsorship (CoS) reference number',
    'Take a TB test and English language test (if required)',
    'Apply online on the GOV.UK website up to 3 months before your start date',
    'Pay the visa application fee and Immigration Health Surcharge (IHS)',
    'Book and attend a biometric appointment at VFS Global in Pakistan',
    'Wait for the decision and collect your passport'
  ];

  const rejectionReasons = [
    { title: 'Invalid CoS', description: 'The Certificate of Sponsorship is invalid, expired, or withdrawn by the employer.' },
    { title: 'Salary below threshold', description: 'The job offer does not meet the minimum salary requirement for the specific occupation code.' },
    { title: 'Failed English requirement', description: 'Providing an English test that is not approved by UKVI (e.g., standard IELTS instead of IELTS for UKVI).' },
    { title: 'Insufficient maintenance funds', description: 'Failing to show £1,270 held for 28 days, unless the employer has ticked the "certify maintenance" box on the CoS.' }
  ];

  const approvalTips = [
    { title: 'Check employer certification', description: 'Ask your employer to certify your maintenance on the CoS. This exempts you from showing personal bank statements.' },
    { title: 'Verify occupation codes', description: 'Ensure your job title and salary match the official UKVI occupation codes and going rates.' },
    { title: 'Take the right English test', description: 'Ensure you take a Secure English Language Test (SELT) approved by UKVI, or get your degree assessed by Ecctis.' }
  ];

  const faqs = [
    { question: 'How long does UK Skilled Worker Visa processing take?', answer: 'Standard processing is usually 3 to 8 weeks. Priority services may be available.' },
    { question: 'Can I bring my family?', answer: 'Yes, you can bring your spouse and children under 18 as dependents. They must apply separately and pay their own fees and IHS.' },
    { question: 'How long is the visa valid?', answer: 'It can be valid for up to 5 years, depending on your CoS. After 5 years, you may be eligible to apply for Indefinite Leave to Remain (ILR).' },
    { question: 'What is the Immigration Health Surcharge (IHS)?', answer: 'It is a mandatory fee (£1,035 per year of the visa) that gives you access to the UK National Health Service.' }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visapath.pk/" },
      { "@type": "ListItem", "position": 2, "name": "UK Visas", "item": "https://visapath.pk/uk-visas" },
      { "@type": "ListItem", "position": 3, "name": "UK Skilled Worker Visa", "item": "https://visapath.pk/uk-work-visa-from-pakistan" }
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
        title="UK Skilled Worker Visa from Pakistan 2026 - Requirements & Guide"
        description="Complete guide to UK Skilled Worker Visa from Pakistan. Check CoS requirements, salary thresholds, fees, processing time, and how to apply."
        canonical="/uk-work-visa-from-pakistan"
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
              <span className="text-foreground">UK Skilled Worker Visa</span>
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
                UK Skilled Worker Visa from Pakistan 2026
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Visa Fee</p>
                        <p className="text-xl font-semibold">GBP 719 ≈ PKR 251,650</p>
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
                        <p className="text-xl font-semibold">3-8 weeks</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-lg max-w-none mb-12 text-foreground">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="leading-relaxed text-muted-foreground">
                  The UK Skilled Worker Visa (formerly Tier 2 General) allows Pakistani professionals to come to or stay in the UK to do an eligible job with an approved employer. This is the primary route for long-term employment and settlement in the UK.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  To apply, you must have a confirmed job offer and a Certificate of Sponsorship (CoS) from a UK employer that holds a valid sponsor license. The job must meet specific skill and salary thresholds set by the UK government.
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
                    requirement="Proof of personal savings of £1,270 held for 28 days, UNLESS your employer has certified your maintenance on your CoS."
                    amountPKR={450000}
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Get help with your UK work visa</h2>
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

export default UKWorkVisaPage;