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

function ItalyVisaPage() {
  const requirements = [
    'Valid Pakistani passport with at least 6 months validity',
    'Completed Schengen visa application form',
    'Two recent passport-sized photographs',
    'Travel insurance covering €30,000',
    'Proof of accommodation in Italy',
    'Round-trip flight reservation',
    'Bank statements showing sufficient funds',
    'Employment verification or business documents'
  ];

  const documents = [
    'Original passport + photocopies',
    'Visa application form (signed)',
    '2 passport photos (35mm x 45mm)',
    'Travel insurance certificate',
    'Flight reservation',
    'Hotel bookings or invitation letter',
    'Bank statements (6 months)',
    'Employment letter with NOC',
    'Income tax returns',
    'Property documents (if applicable)'
  ];

  const steps = [
    'Complete online visa application at Italy Visa Application Centre website',
    'Book appointment at VFS Global',
    'Prepare all required documents',
    'Pay visa fee (€80) at VFS centre',
    'Submit application and biometrics',
    'Track application online',
    'Collect passport from VFS'
  ];

  const rejectionReasons = [
    { title: 'Insufficient funds', description: 'Bank balance too low or irregular deposits. Maintain steady balance of €50-60 per day.' },
    { title: 'Incomplete itinerary', description: 'Vague travel plans. Provide detailed day-by-day itinerary with bookings.' },
    { title: 'Weak employment proof', description: 'No clear employment or business ties. Provide strong employment letter and NOC.' }
  ];

  const approvalTips = [
    { title: 'Show tourism intent', description: 'Book hotels in multiple Italian cities. Include museum tickets, tour bookings.' },
    { title: 'Maintain good bank balance', description: 'Keep €3,000-4,000 for 2-week trip with regular monthly deposits.' },
    { title: 'Provide property documents', description: 'Include property ownership papers to show ties to Pakistan.' }
  ];

  const faqs = [
    { question: 'How long does Italy visa take?', answer: 'Processing time is 15-25 working days. Apply 4-6 weeks before travel.' },
    { question: 'What bank balance is needed?', answer: 'Minimum €3,000-4,000 for a 2-week trip, maintained for 6 months.' },
    { question: 'Can I visit other Schengen countries?', answer: 'Yes, Italy visa allows travel to all Schengen countries.' }
  ];

  return (
    <>
      <Helmet>
        <title>Italy visa from Pakistan - Requirements and complete guide</title>
        <meta name="description" content="Complete guide for Italy Schengen visa from Pakistan. Requirements, documents, fees, and approval tips." />
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
              <span className="text-foreground">Italy Visa</span>
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
                Italy visa from Pakistan
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
                        <p className="text-xl font-semibold">15-25 days</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Italy is a popular Schengen destination known for its rich history, art, and culture. The Italian embassy processes visa applications through VFS Global in Pakistan. Italy offers good approval rates for applicants with complete documentation and clear tourism purpose.
                </p>
              </div>

              <div className="space-y-12">
                <RequirementsSection requirements={requirements} />
                <DocumentsChecklist documents={documents} />
                <BankStatementInfo
                  requirement="Bank statements for 6 months showing regular income. Recommended balance: €50-60 per day of stay."
                  amountUSD={3500}
                />
                <ApplicationSteps steps={steps} />
                <RejectionReasons reasons={rejectionReasons} />
                <ApprovalTips tips={approvalTips} />
                <FAQSection faqs={faqs} />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Get help with your Italy visa</h2>
              <GetHelpForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ItalyVisaPage;