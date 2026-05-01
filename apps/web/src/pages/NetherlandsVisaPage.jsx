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

function NetherlandsVisaPage() {
  const country = "Netherlands";
  
  const requirements = [
    'Valid Pakistani passport (minimum 6 months validity, 2 blank pages)',
    'Completed and signed Schengen visa application form',
    'Two recent passport-sized photographs (white background)',
    'Travel medical insurance covering minimum €30,000',
    'Proof of accommodation (hotel bookings or invitation)',
    'Round-trip flight reservation or itinerary',
    'Proof of financial means (6 months bank statements)',
    'Employment letter, NOC, or business registration documents',
    'Family Registration Certificate (FRC) from NADRA'
  ];

  const documents = [
    'Original passport + photocopies of all previous visas',
    'CNIC copy (front and back)',
    'Visa application form (duly signed)',
    '2 passport-sized photos (35mm x 45mm)',
    'Travel insurance certificate',
    'Flight reservation (do not purchase before approval)',
    'Hotel bookings or official invitation letter',
    'Bank statements for the last 6 months (stamped and signed)',
    'Account maintenance certificate from the bank',
    'Employment letter on company letterhead with salary details',
    'NOC (No Objection Certificate) for leave from employer',
    'Income tax returns (FBR) for the last 2 years'
  ];

  const steps = [
    'Determine the exact visa type you need (Tourist, Business, Visit Family)',
    'Fill out the online Schengen visa application form',
    'Book an appointment at the VFS Global Visa Application Centre',
    'Gather all required documents according to the checklist',
    'Attend your appointment, submit documents, and provide biometrics',
    'Pay the visa fee (€80) at the application centre',
    'Track your application and collect your passport once processed'
  ];

  const rejectionReasons = [
    { title: 'Insufficient financial proof', description: 'Bank statements showing irregular deposits, low balance, or recent large deposits without explanation.' },
    { title: 'Unclear travel purpose', description: 'Vague or inconsistent travel plans. Provide a detailed day-by-day itinerary.' },
    { title: 'Weak ties to Pakistan', description: 'Lack of proof regarding employment, property, or family ties in Pakistan.' },
    { title: 'Invalid travel insurance', description: 'Insurance not covering the full Schengen area or falling short of the €30,000 minimum.' },
    { title: 'Forged or fake documents', description: 'Submitting fake hotel bookings or altered bank statements will lead to immediate rejection and a potential ban.' }
  ];

  const approvalTips = [
    { title: 'Write a strong cover letter', description: 'Explain your purpose of visit, itinerary, and how you will fund the trip clearly.' },
    { title: 'Maintain a consistent bank balance', description: 'Show 6 months of regular salary deposits. Avoid sudden large deposits.' },
    { title: 'Provide genuine bookings', description: 'Make hotel reservations that can be verified by the embassy.' },
    { title: 'Show strong ties to return', description: 'Include property documents, business ownership, or strong family ties in Pakistan.' },
    { title: 'Organize your documents', description: 'Present your application neatly in the exact order requested by the embassy.' }
  ];

  const faqs = [
    { question: `How long does ${country} visa processing take from Pakistan?`, answer: 'Standard processing time is 15-30 days. During peak seasons, it may take longer. Apply at least 4-6 weeks in advance.' },
    { question: 'What is the minimum bank balance required?', answer: 'You should maintain a balance equivalent to €50-€100 per day of your stay, plus flight costs. Typically, PKR 800,000 to 1,500,000 is recommended.' },
    { question: `Is ${country} part of the Schengen area?`, answer: `Yes, ${country} is a Schengen member state. A visa for ${country} allows you to travel to other Schengen countries.` },
    { question: 'Do I need an interview?', answer: 'Usually, a short interview is conducted at the VFS centre when submitting biometrics, but the embassy may call you for a detailed interview if needed.' },
    { question: 'Can I appeal a visa rejection?', answer: 'Yes, you have the right to appeal within a specific timeframe mentioned in your rejection letter, usually 3-4 weeks.' }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visapath.pk/" },
      { "@type": "ListItem", "position": 2, "name": "Europe Visas", "item": "https://visapath.pk/europe-visas" },
      { "@type": "ListItem", "position": 3, "name": `${country} Visa`, "item": `https://visapath.pk/${country.toLowerCase()}-visa-from-pakistan` }
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
        title={`${country} Visa from Pakistan 2026 - Requirements & Fee`}
        description={`Complete guide to ${country} visa from Pakistan in 2026. Check requirements, bank statement, fees, processing time, and apply successfully.`}
        canonical={`/${country.toLowerCase()}-visa-from-pakistan`}
        schemas={[breadcrumbSchema, faqSchema]}
      />

      <Header />

      <main>
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/europe-visas" className="hover:text-primary transition-colors">Europe Visas</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{country} Visa</span>
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
                {country} Visa from Pakistan 2026
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Visa Fee</p>
                        <p className="text-xl font-semibold">EUR 80 ≈ PKR 25,000</p>
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
                  Applying for a {country} visa from Pakistan requires careful preparation. As a member of the Schengen agreement, {country} follows standard European visa protocols. Whether you are traveling for tourism, business, or visiting family, you must apply for a <Link to="/schengen-visa-from-pakistan" className="text-primary hover:underline">Schengen Visa</Link>.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  The application process involves submitting your documents through VFS Global or Gerry's Visa drop box in major cities like Islamabad, Lahore, or Karachi. To ensure a smooth process, we highly recommend using our <Link to="/tools/checklist-generator" className="text-primary hover:underline">Document Checklist Generator</Link> and <Link to="/tools/fee-calculator" className="text-primary hover:underline">Fee Calculator</Link> before submitting your application.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  A strong application hinges on proving your ties to Pakistan and demonstrating sufficient financial means. Read our guide on <Link to="/blog/why-visas-get-rejected-from-pakistan" className="text-primary hover:underline">Why Visas Get Rejected</Link> to avoid common pitfalls.
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
                    requirement={`Bank statements for the last 6 months showing regular income and sufficient balance. Use our Bank Calculator to estimate exact needs.`}
                    amountUSD={3500}
                  />
                  <div className="mt-4">
                    <Link to="/tools/bank-calculator" className="text-sm text-primary hover:underline font-medium">
                      Calculate exact bank statement required for {country} →
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Get help with your {country} visa</h2>
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

export default NetherlandsVisaPage;