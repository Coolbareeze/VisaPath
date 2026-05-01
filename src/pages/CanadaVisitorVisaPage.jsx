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

function CanadaVisitorVisaPage() {
  const requirements = ['Valid passport', 'Online application', 'Photos', 'Financial proof', 'Travel itinerary', 'Purpose of visit letter', 'Biometrics'];
  const documents = ['Passport', 'Application form', '2 photos', 'Bank statements (6 months)', 'Employment letter', 'Property documents', 'Travel plan', 'Invitation letter (if applicable)'];
  const steps = ['Create IRCC account', 'Fill online application', 'Upload documents', 'Pay fee (CAD $100)', 'Submit biometrics at VAC', 'Wait for processing', 'Receive decision'];
  const rejectionReasons = [{ title: 'Insufficient funds', description: 'Show CAD $1,000+ per week of stay' }, { title: 'Weak ties to Pakistan', description: 'Prove you will return after visit' }];
  const approvalTips = [{ title: 'Detailed travel plan', description: 'Day-by-day itinerary with bookings' }, { title: 'Strong financial proof', description: 'Regular income and savings' }];
  const faqs = [{ question: 'Processing time?', answer: '4-6 weeks online application' }, { question: 'Bank balance needed?', answer: 'CAD $1,000-1,500 per week minimum' }];

  return (
    <>
      <Helmet>
        <title>Canada visitor visa from Pakistan - Complete guide</title>
        <meta name="description" content="Canada visitor visa (TRV) guide from Pakistan with requirements and tips." />
      </Helmet>
      <Header />
      <main>
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/canada-visas" className="hover:text-primary transition-colors">Canada Visas</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Canada Visitor Visa</span>
            </nav>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>Canada visitor visa from Pakistan</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card><CardContent className="pt-6"><div className="flex items-center space-x-3"><DollarSign className="h-8 w-8 text-primary" /><div><p className="text-sm text-muted-foreground">Visa Fee</p><p className="text-xl font-semibold">CAD $100 (Rs. 23,200)</p></div></div></CardContent></Card>
                <Card><CardContent className="pt-6"><div className="flex items-center space-x-3"><Clock className="h-8 w-8 text-primary" /><div><p className="text-sm text-muted-foreground">Processing Time</p><p className="text-xl font-semibold">4-6 weeks</p></div></div></CardContent></Card>
              </div>
              <div className="space-y-12">
                <RequirementsSection requirements={requirements} />
                <DocumentsChecklist documents={documents} />
                <BankStatementInfo amountUSD={2000} />
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Get help with your Canada visitor visa</h2>
              <GetHelpForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default CanadaVisitorVisaPage;