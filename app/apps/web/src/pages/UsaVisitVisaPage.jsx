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

function UsaVisitVisaPage() {
  const requirements = ['Valid passport', 'DS-160 form', 'Photo', 'Interview appointment', 'Bank statements', 'Employment proof', 'Property documents', 'Travel itinerary'];
  const documents = ['Passport', 'DS-160 confirmation', 'Photo', 'Interview letter', 'Bank statements (6 months)', 'Employment letter', 'Property papers', 'Tax returns'];
  const steps = ['Fill DS-160 online', 'Pay visa fee ($185)', 'Schedule interview', 'Prepare documents', 'Attend interview at US Embassy', 'Wait for processing', 'Collect passport'];
  const rejectionReasons = [{ title: 'Weak ties to Pakistan', description: 'Show strong employment, property, family ties' }, { title: 'Immigration intent', description: 'Prove you will return to Pakistan' }];
  const approvalTips = [{ title: 'Be confident in interview', description: 'Answer clearly and honestly about travel purpose' }, { title: 'Show strong ties', description: 'Bring property documents, employment letter, family photos' }];
  const faqs = [{ question: 'Interview tips?', answer: 'Be honest, confident, show ties to Pakistan, have clear travel purpose' }, { question: 'Processing time?', answer: '3-8 weeks after interview' }];

  return (
    <>
      <Helmet>
        <title>USA visit visa (B1/B2) from Pakistan - Complete guide</title>
        <meta name="description" content="US B1/B2 visitor visa guide from Pakistan with interview tips and requirements." />
      </Helmet>
      <Header />
      <main>
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/usa-visas" className="hover:text-primary transition-colors">USA Visas</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">USA Visit Visa</span>
            </nav>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>USA visit visa (B1/B2) from Pakistan</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card><CardContent className="pt-6"><div className="flex items-center space-x-3"><DollarSign className="h-8 w-8 text-primary" /><div><p className="text-sm text-muted-foreground">Visa Fee</p><p className="text-xl font-semibold">$185 (Rs. 51,430)</p></div></div></CardContent></Card>
                <Card><CardContent className="pt-6"><div className="flex items-center space-x-3"><Clock className="h-8 w-8 text-primary" /><div><p className="text-sm text-muted-foreground">Processing Time</p><p className="text-xl font-semibold">3-8 weeks</p></div></div></CardContent></Card>
              </div>
              <div className="space-y-12">
                <RequirementsSection requirements={requirements} />
                <DocumentsChecklist documents={documents} />
                <BankStatementInfo amountUSD={5000} />
                <ApplicationSteps steps={steps} />
                <RejectionReasons reasons={rejectionReasons} />
                <ApprovalTips tips={approvalTips} />
                <FAQSection faqs={faqs} />
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Get help with your USA visa</h2>
              <GetHelpForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default UsaVisitVisaPage;