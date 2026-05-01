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

function TurkeyStudentVisaPage() {
  const requirements = [
    'Valid Pakistani passport (minimum 1 year validity)',
    'Acceptance letter from a Turkish University or Language School',
    'Completed and signed Turkey student visa application form',
    'Two recent biometric photographs (5x5 cm, white background)',
    'Proof of tuition fee payment (receipts)',
    'Proof of financial means (sponsor\'s bank statements)',
    'Educational documents (degrees, transcripts) attested by IBCC/HEC and MOFA',
    'Polio vaccination certificate (valid for 1 year)',
    'Police Character Certificate'
  ];

  const documents = [
    'Original passport + photocopies',
    'University Acceptance Letter',
    'Visa application form (duly signed)',
    '2 biometric photos (5x5 cm)',
    'Tuition fee payment receipts',
    'Sponsor\'s bank statements (last 6 months)',
    'Sponsor\'s affidavit of support',
    'Attested educational documents (Matric, Inter, Bachelors)',
    'Police Character Certificate',
    'Polio vaccination certificate',
    'FRC (Family Registration Certificate)'
  ];

  const steps = [
    'Obtain an official acceptance letter from a Turkish educational institution',
    'Pay the required tuition deposit to the university',
    'Fill out the preliminary online application form on the Turkish Consular website',
    'Gather all required documents and get educational documents attested',
    'Visit the nearest Anatolia Travel Services visa application center',
    'Submit your documents, provide biometrics, and pay the visa fee',
    'Track your application and collect your passport once processed'
  ];

  const rejectionReasons = [
    { title: 'Unverified Acceptance Letter', description: 'The acceptance letter must be genuine and verifiable by the Turkish consulate.' },
    { title: 'Insufficient financial proof', description: 'Your sponsor must show enough funds to cover your tuition and living expenses in Turkey.' },
    { title: 'Missing attestations', description: 'Educational documents must be properly attested by IBCC/HEC and MOFA Pakistan.' },
    { title: 'Missing Polio Certificate', description: 'Failure to provide a valid polio vaccination certificate.' },
    { title: 'Doubtful study intent', description: 'If the consular officer suspects your primary goal is to work illegally rather than study.' }
  ];

  const approvalTips = [
    { title: 'Ensure proper attestations', description: 'Get all your educational documents attested by the relevant authorities well in advance.' },
    { title: 'Strong financial sponsorship', description: 'Provide clear evidence of your sponsor\'s income and a notarized affidavit of support.' },
    { title: 'Pay tuition fees early', description: 'Attaching the tuition fee payment receipt significantly strengthens your application.' },
    { title: 'Write a clear Statement of Purpose', description: 'Explain why you chose Turkey and this specific university for your studies.' }
  ];

  const faqs = [
    { question: 'How long does Turkey student visa processing take?', answer: 'Standard processing time is 15-30 days. Apply well before your semester starts.' },
    { question: 'Can I work in Turkey on a student visa?', answer: 'International students in Turkey can work legally, but there are restrictions on hours (usually up to 24 hours a week) and it requires a separate work permit.' },
    { question: 'What is the minimum bank balance required for a student visa?', answer: 'Your sponsor should show enough funds to cover your first year of tuition plus living expenses (approx. USD 4,000 - 6,000).' },
    { question: 'Do I need an interview?', answer: 'Usually, no interview is required, but the consulate reserves the right to call you for one if they need clarification.' }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visapath.pk/" },
      { "@type": "ListItem", "position": 2, "name": "Turkey Visas", "item": "https://visapath.pk/turkey-visas" },
      { "@type": "ListItem", "position": 3, "name": "Turkey Student Visa", "item": "https://visapath.pk/turkey-student-visa-from-pakistan" }
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
        title="Turkey Student Visa from Pakistan 2026 - Requirements & Guide"
        description="Complete guide to Turkey student visa from Pakistan in 2026. Check requirements, university acceptance, fees, processing time, and apply successfully."
        canonical="/turkey-student-visa-from-pakistan"
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
              <span className="text-foreground">Turkey Student Visa</span>
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
                Turkey Student Visa from Pakistan 2026
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
                        <p className="text-xl font-semibold">15-30 days</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-lg max-w-none mb-12 text-foreground">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Turkey has become an increasingly popular destination for Pakistani students due to its high-quality education, affordable tuition fees, and cultural similarities. To study in Turkey, you must first secure an acceptance letter from a recognized Turkish university or language school.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Once accepted, you must apply for a Student Visa (Öğrenim Vizesi) through Anatolia Travel Services in Pakistan. It is crucial to have your educational documents properly attested by the relevant Pakistani authorities (IBCC, HEC, MOFA) before applying.
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
                    requirement="Sponsor's bank statements for the last 6 months showing sufficient balance to cover tuition and living expenses for at least the first year."
                    amountUSD={5000}
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Get help with your Turkey student visa</h2>
              <GetHelpForm
                title="Need Assistance?"
                description="Our education consultants will help you prepare a strong application"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default TurkeyStudentVisaPage;