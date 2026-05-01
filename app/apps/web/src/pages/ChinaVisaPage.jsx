
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

function ChinaVisaPage() {
  const requirements = [
    'Original Passport with at least 6 months validity and blank pages',
    'Completed Chinese Visa Online Application Form (COVA)',
    'Printed confirmation page and appointment slip',
    'Recent color photograph (48mm x 33mm, white background)',
    'Invitation Letter (PU) or Trade Fair Invitation (for Business M Visa)',
    'Hotel booking and return flight ticket (for Tourist L Visa)',
    'Police Character Certificate (attested by MOFA)',
    'Personal bank statement for the last 6 months',
    'Employment/Business proof (NOC, NTN, Tax Returns)'
  ];

  const documents = [
    'Original Passport + copies of data page and previous Chinese visas',
    'CNIC Copy (front and back)',
    'Signed COVA Form',
    '2 Photos (strictly following Chinese specs)',
    'Official Invitation Letter (for Business)',
    'Flight itinerary and Hotel reservation',
    'Bank statement (stamped by bank) and Account Maintenance Certificate',
    'Police Character Certificate (attested)',
    'Company Cover Letter/NOC'
  ];

  const steps = [
    'Fill out the Chinese Visa Online Application (COVA) form',
    'Print the completed form and sign the confirmation page',
    'Book an appointment online for submission at Gerry’s Visa Application Center',
    'Prepare all supporting documents, ensuring proper attestations (e.g., Police Certificate)',
    'Visit the visa center on your appointment date to submit documents and provide biometrics',
    'Pay the visa and service fees',
    'Track application and collect your passport once processed'
  ];

  const rejectionReasons = [
    { title: 'Invalid Invitation Letter', description: 'For business visas, the invitation letter must be official (PU letter) and have a verifiable barcode/stamp from a recognized Chinese entity.' },
    { title: 'Incomplete COVA Form', description: 'Leaving mandatory fields blank or providing incorrect passport details on the online form.' },
    { title: 'Missing Attestations', description: 'Failing to get the Police Character Certificate attested by the Ministry of Foreign Affairs (MOFA) Pakistan.' },
    { title: 'Photo Does Not Meet Specs', description: 'The Chinese consulate is very strict about the 48x33mm photo dimensions and white background.' }
  ];

  const approvalTips = [
    { title: 'Secure a Strong Invitation', description: 'For business travelers, an official PU letter from a Chinese government department or an authorized company guarantees approval.' },
    { title: 'Ensure Exact Dates', description: 'Your hotel bookings, flight tickets, and invitation letter dates must all match perfectly.' },
    { title: 'Review Form Carefully', description: 'Once the COVA form is submitted and printed, it cannot be edited. Double-check everything before final submission.' }
  ];

  const faqs = [
    { question: 'Do Pakistanis need a visa for China?', answer: 'Yes, Pakistani citizens need a valid sticker visa to enter mainland China. Different categories exist for tourism (L), business (M), and study (X).' },
    { question: 'Where do I submit my China visa application?', answer: 'Applications are submitted through Gerry’s Visa Application Centers located in major cities in Pakistan.' },
    { question: 'What is the visa fee for China?', answer: 'The embassy fee for Pakistanis is often waived or very low, but Gerry’s service charges apply (approx. PKR 18,000 - 20,000 total).' },
    { question: 'Is a Police Character Certificate mandatory?', answer: 'Yes, for most visa categories, a recent Police Character Certificate attested by MOFA is mandatory.' },
    { question: 'How long does processing take?', answer: 'Normal processing takes about 4 to 7 working days. Express services are available for an additional fee.' }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visapath.pk/" },
      { "@type": "ListItem", "position": 2, "name": "Asia Visas", "item": "https://visapath.pk/asia-visas" },
      { "@type": "ListItem", "position": 3, "name": "China Visa", "item": "https://visapath.pk/china-visa-from-pakistan" }
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
        title="China Visa from Pakistan 2026 - Requirements & Business PU Letter"
        description="Comprehensive guide for China Visa (L/M/X) from Pakistan. Check COVA form requirements, PU letter details, bank statement, and Gerry's application process."
        canonical="/china-visa-from-pakistan"
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
              <span className="text-foreground">China Visa</span>
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
                China Visa from Pakistan 2026
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Visa Fee</p>
                        <p className="text-xl font-semibold">PKR 18,000 (Service charges)</p>
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
                        <p className="text-xl font-semibold">4-7 days</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-lg max-w-none mb-12 text-foreground">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="leading-relaxed text-muted-foreground">
                  China and Pakistan share deep economic and political ties, making travel between the two nations frequent. Whether you are traveling for the Canton Fair, seeking higher education, or visiting for tourism, you must secure a sticker visa before traveling.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  The application process involves filling out the comprehensive COVA (Chinese Visa Online Application) form and submitting your physical documents and biometrics at a Gerry’s Visa Application Center. For business visas, the authenticity of your Invitation Letter is the most critical factor.
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
                    requirement="Bank statements for the last 6 months. A robust closing balance is advised, particularly for Business (M) visas without sponsored accommodation."
                    amountPKR={500000}
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Get help with your China visa</h2>
              <GetHelpForm
                title="Need Assistance?"
                description="We assist with COVA forms, appointments, and document reviews for China visas."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ChinaVisaPage;
