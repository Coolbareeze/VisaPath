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

function CanadaStudyVisaPage() {
  const requirements = ['Valid passport', 'Letter of acceptance', 'Proof of funds', 'Medical exam', 'Police certificate', 'Study plan', 'Biometrics'];
  const documents = ['Passport', 'Acceptance letter', 'Bank statements', 'GIC certificate', 'Academic transcripts', 'IELTS scores', 'Medical exam results', 'Police clearance'];
  const steps = ['Get acceptance from DLI', 'Arrange finances (GIC)', 'Create IRCC account', 'Fill application', 'Upload documents', 'Pay fee (CAD $150)', 'Submit biometrics', 'Wait for decision'];
  const rejectionReasons = [{ title: 'Insufficient funds', description: 'Show tuition + CAD $10,000 living expenses' }, { title: 'Weak study plan', description: 'Explain program choice and career goals' }];
  const approvalTips = [{ title: 'Get GIC', description: 'Guaranteed Investment Certificate shows financial capacity' }, { title: 'Strong SOP', description: 'Clear study plan and career objectives' }];
  const faqs = [{ question: 'GIC required?', answer: 'Highly recommended, shows CAD $10,000 living expenses' }, { question: 'Processing time?', answer: '6-8 weeks for study permit' }];

  return (
    <>
      <Helmet>
        <title>Canada study visa from Pakistan - Complete guide</title>
        <meta name="description" content="Canada study permit guide from Pakistan with requirements and tips." />
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
              <span className="text-foreground">Canada Study Visa</span>
            </nav>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>Canada study visa from Pakistan</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card><CardContent className="pt-6"><div className="flex items-center space-x-3"><DollarSign className="h-8 w-8 text-primary" /><div><p className="text-sm text-muted-foreground">Visa Fee</p><p className="text-xl font-semibold">CAD $150 (Rs. 34,800)</p></div></div></CardContent></Card>
                <Card><CardContent className="pt-6"><div className="flex items-center space-x-3"><Clock className="h-8 w-8 text-primary" /><div><p className="text-sm text-muted-foreground">Processing Time</p><p className="text-xl font-semibold">6-8 weeks</p></div></div></CardContent></Card>
              </div>
              <div className="space-y-12">
                <RequirementsSection requirements={requirements} />
                <DocumentsChecklist documents={documents} />
                <BankStatementInfo amountUSD={15000} />
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Get help with your Canada study visa</h2>
              <GetHelpForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default CanadaStudyVisaPage;