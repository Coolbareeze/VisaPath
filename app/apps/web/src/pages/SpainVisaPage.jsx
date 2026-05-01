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

function SpainVisaPage() {
  const requirements = ['Valid passport', 'Application form', 'Photos', 'Travel insurance', 'Accommodation proof', 'Flight reservation', 'Bank statements', 'Employment letter'];
  const documents = ['Passport + copies', 'Application form', '2 photos', 'Insurance', 'Flight booking', 'Hotel bookings', 'Bank statements (6 months)', 'Employment letter'];
  const steps = ['Fill application form', 'Book VFS appointment', 'Prepare documents', 'Pay fee (€80)', 'Submit application', 'Track status', 'Collect passport'];
  const rejectionReasons = [{ title: 'Low funds', description: 'Maintain €3,500+ for 2 weeks' }];
  const approvalTips = [{ title: 'Show tourism intent', description: 'Book hotels in multiple Spanish cities' }];
  const faqs = [{ question: 'Processing time?', answer: '20-30 working days' }];

  return (
    <>
      <Helmet>
        <title>Spain visa from Pakistan - Complete guide</title>
        <meta name="description" content="Spain Schengen visa guide from Pakistan with requirements and tips." />
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
              <span className="text-foreground">Spain Visa</span>
            </nav>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>Spain visa from Pakistan</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card><CardContent className="pt-6"><div className="flex items-center space-x-3"><DollarSign className="h-8 w-8 text-primary" /><div><p className="text-sm text-muted-foreground">Visa Fee</p><p className="text-xl font-semibold">€80 (Rs. 22,240)</p></div></div></CardContent></Card>
                <Card><CardContent className="pt-6"><div className="flex items-center space-x-3"><Clock className="h-8 w-8 text-primary" /><div><p className="text-sm text-muted-foreground">Processing Time</p><p className="text-xl font-semibold">20-30 days</p></div></div></CardContent></Card>
              </div>
              <div className="space-y-12">
                <RequirementsSection requirements={requirements} />
                <DocumentsChecklist documents={documents} />
                <BankStatementInfo amountUSD={3500} />
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Get help with your Spain visa</h2>
              <GetHelpForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SpainVisaPage;