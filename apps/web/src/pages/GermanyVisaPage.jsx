import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
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

function GermanyVisaPage() {
  const requirements = [
    'Valid Pakistani passport with at least 6 months validity',
    'Completed and signed Schengen visa application form',
    'Two recent passport-sized photographs',
    'Travel insurance covering minimum €30,000',
    'Proof of accommodation (hotel bookings or invitation letter)',
    'Round-trip flight reservation',
    'Proof of financial means (bank statements)',
    'Employment letter or business registration',
    'No-objection certificate (NOC) from employer'
  ];

  const documents = [
    'Original passport + 2 photocopies of all pages',
    'Previous passports (if any)',
    'Visa application form (signed)',
    '2 passport-sized photos (35mm x 45mm, white background)',
    'Travel insurance certificate',
    'Flight reservation (not purchased ticket)',
    'Hotel bookings or invitation letter with host details',
    'Bank statements for last 6 months',
    'Employment letter on company letterhead',
    'NOC from employer',
    'Business registration (if self-employed)',
    'Income tax returns for last 2 years',
    'Property documents (if applicable)',
    'Marriage certificate (if traveling with spouse)'
  ];

  const steps = [
    'Fill out the online Schengen visa application form at the German embassy website',
    'Book an appointment at VFS Global Germany Visa Application Centre',
    'Gather all required documents and make photocopies',
    'Pay the visa fee (€80) at the VFS centre on appointment day',
    'Submit your application and provide biometrics (fingerprints and photo)',
    'Track your application status online using the reference number',
    'Collect your passport from VFS centre once processing is complete'
  ];

  const rejectionReasons = [
    {
      title: 'Insufficient financial proof',
      description: 'Bank statements showing irregular deposits, low balance, or recent large deposits without explanation. Maintain a stable balance of at least €50-60 per day of stay.'
    },
    {
      title: 'Unclear travel purpose',
      description: 'Vague or inconsistent travel plans. Provide detailed itinerary with hotel bookings, planned activities, and clear reason for visiting Germany.'
    },
    {
      title: 'Weak ties to Pakistan',
      description: 'No proof of employment, property, or family ties in Pakistan. Show strong reasons to return: job, business, property ownership, or family responsibilities.'
    },
    {
      title: 'Invalid travel insurance',
      description: 'Insurance not covering full Schengen area or minimum €30,000. Purchase insurance from approved providers covering all Schengen countries.'
    },
    {
      title: 'Incomplete documentation',
      description: 'Missing documents or photocopies. Use our checklist to ensure all required documents are included.'
    }
  ];

  const approvalTips = [
    {
      title: 'Maintain consistent bank balance',
      description: 'Show 6 months of regular salary deposits. Avoid sudden large deposits before application. Minimum €3,000-4,000 for a 2-week trip.'
    },
    {
      title: 'Book refundable hotels',
      description: 'Make hotel reservations that can be cancelled. This shows planning without financial risk if visa is rejected.'
    },
    {
      title: 'Get strong employment letter',
      description: 'Letter should state position, salary, leave approval, and return date. Include company registration and tax documents.'
    },
    {
      title: 'Show property ownership',
      description: 'Include property documents if you own land or house in Pakistan. This demonstrates strong ties to return.'
    },
    {
      title: 'Provide detailed itinerary',
      description: 'Create day-by-day plan with specific locations, activities, and transportation. Shows genuine tourism purpose.'
    }
  ];

  const faqs = [
    {
      question: 'How long does Germany visa processing take from Pakistan?',
      answer: 'Standard processing time is 15-20 working days. During peak season (May-August), it may take up to 30 days. Apply at least 4-6 weeks before your intended travel date.'
    },
    {
      question: 'What is the minimum bank balance required?',
      answer: 'There is no official minimum, but generally €50-60 per day of stay is recommended. For a 15-day trip, maintain at least €3,000-4,000 in your account for the last 6 months.'
    },
    {
      question: 'Can I apply for Germany visa if I have no travel history?',
      answer: 'Yes, first-time travelers can apply. However, having previous Schengen or other visa stamps improves your chances. Focus on strong financial proof and clear travel purpose.'
    },
    {
      question: 'Do I need to buy flight tickets before visa approval?',
      answer: 'No, only provide a flight reservation or dummy ticket. Do not purchase actual tickets until your visa is approved.'
    },
    {
      question: 'Can I visit other Schengen countries with Germany visa?',
      answer: 'Yes, a Schengen visa allows travel to all 27 Schengen countries. However, Germany should be your main destination or first point of entry.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Germany visa from Pakistan - Complete requirements and guide</title>
        <meta name="description" content="Step-by-step guide for Germany Schengen visa from Pakistan. Requirements, documents, fees, processing time, and approval tips." />
      </Helmet>

      <Header />

      <main>
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/europe-visas" className="hover:text-primary transition-colors">Europe Visas</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Germany Visa</span>
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
                Germany visa from Pakistan
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Visa Fee</p>
                        <p className="text-xl font-semibold">€80 (Rs. 22,240)</p>
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
                        <p className="text-xl font-semibold">15-20 days</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Germany is one of the most popular Schengen visa destinations for Pakistani travelers. The German embassy in Islamabad and consulates in Karachi and Lahore process visa applications through VFS Global. Germany offers relatively high approval rates for well-prepared applications with complete documentation and strong financial proof.
                </p>
              </div>

              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <RequirementsSection requirements={requirements} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <DocumentsChecklist documents={documents} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <BankStatementInfo
                    requirement="Bank statements for the last 6 months showing regular income and sufficient balance. Minimum recommended balance is €50-60 per day of intended stay."
                    amountUSD={3500}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ApplicationSteps steps={steps} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <RejectionReasons reasons={rejectionReasons} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ApprovalTips tips={approvalTips} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <FAQSection faqs={faqs} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Get help with your Germany visa</h2>
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

export default GermanyVisaPage;