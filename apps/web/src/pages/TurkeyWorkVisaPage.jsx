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

function TurkeyWorkVisaPage() {
  const requirements = [
    'Valid Pakistani passport (minimum 6 months validity)',
    'Valid employment contract from a Turkish company',
    'Completed and signed Turkey work visa application form',
    'Two recent biometric photographs (5x5 cm, white background)',
    'Police Character Certificate (attested by MOFA)',
    'Educational documents and professional certificates',
    'Polio vaccination certificate (valid for 1 year)',
    'Medical certificate (if requested)'
  ];

  const documents = [
    'Original passport + photocopies',
    'Employment Contract (signed by both parties)',
    'Visa application form (duly signed)',
    '2 biometric photos (5x5 cm)',
    'Attested Police Character Certificate',
    'Attested educational degrees and diplomas',
    'Experience letters from previous employers',
    'Polio vaccination certificate',
    'FRC (Family Registration Certificate)'
  ];

  const steps = [
    'Secure a job offer and sign an employment contract with a Turkish employer',
    'Apply for the work visa at Anatolia Travel Services in Pakistan',
    'Receive a reference number from the Turkish Consulate',
    'Provide the reference number to your Turkish employer',
    'Employer submits the work permit application to the Turkish Ministry of Labor within 10 days',
    'Wait for the Ministry of Labor to approve the work permit',
    'Once approved, the consulate issues the work visa sticker in your passport'
  ];

  const rejectionReasons = [
    { title: 'Employer failed to apply', description: 'If your Turkish employer does not submit the work permit application to the Ministry of Labor within 10 days of your visa application.' },
    { title: 'Invalid employment contract', description: 'The contract does not meet Turkish labor law standards or the company is not eligible to hire foreigners.' },
    { title: 'Missing attestations', description: 'Police certificates or educational documents are not properly attested by MOFA Pakistan.' },
    { title: 'Criminal record', description: 'Having a criminal record in Pakistan or previous immigration violations in Turkey.' }
  ];

  const approvalTips = [
    { title: 'Coordinate with your employer', description: 'Ensure your employer in Turkey is ready to submit their part of the application immediately after you get your reference number.' },
    { title: 'Verify company legitimacy', description: 'Ensure the Turkish company is registered and legally allowed to hire foreign workers.' },
    { title: 'Complete attestations early', description: 'Get your police character certificate and degrees attested by MOFA before starting the visa process.' }
  ];

  const faqs = [
    { question: 'How long does Turkey work visa processing take?', answer: 'The entire process, including the Ministry of Labor approval in Turkey, usually takes 30-45 days.' },
    { question: 'Do I need a bank statement for a work visa?', answer: 'Generally, a bank statement is not the primary requirement since you have an employment contract, but providing one can support your application.' },
    { question: 'Can I bring my family on a work visa?', answer: 'Yes, once you have your work permit and residence permit in Turkey, you can apply for family reunification visas for your spouse and children.' },
    { question: 'Who pays the work permit fee?', answer: 'Typically, the employer in Turkey pays the work permit fee to the Ministry of Labor, while you pay the visa application fee in Pakistan.' }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visapath.pk/" },
      { "@type": "ListItem", "position": 2, "name": "Turkey Visas", "item": "https://visapath.pk/turkey-visas" },
      { "@type": "ListItem", "position": 3, "name": "Turkey Work Visa", "item": "https://visapath.pk/turkey-work-visa-from-pakistan" }
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
        title="Turkey Work Visa from Pakistan 2026 - Requirements & Guide"
        description="Complete guide to Turkey work visa from Pakistan in 2026. Check requirements, employer contract rules, fees, processing time, and apply successfully."
        canonical="/turkey-work-visa-from-pakistan"
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
              <span className="text-foreground">Turkey Work Visa</span>
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
                Turkey Work Visa from Pakistan 2026
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
                        <p className="text-xl font-semibold">30-45 days</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-lg max-w-none mb-12 text-foreground">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="leading-relaxed text-muted-foreground">
                  To work legally in Turkey, Pakistani citizens must obtain a Work Visa (Çalışma Vizesi) and a Work Permit (Çalışma İzni). The process is a joint effort between you (the applicant in Pakistan) and your employer in Turkey.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  You initiate the process by applying for a work visa at Anatolia Travel Services in Pakistan. You will receive a reference number, which your Turkish employer must use to apply for your work permit at the Turkish Ministry of Labor and Social Security within 10 days.
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Get help with your Turkey work visa</h2>
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

export default TurkeyWorkVisaPage;