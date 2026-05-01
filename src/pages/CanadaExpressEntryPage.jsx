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

function CanadaExpressEntryPage() {
  const requirements = ['Eligible occupation (NOC TEER 0,1,2,3)', 'Language test (IELTS/CELPIP)', 'Educational credential assessment', 'Work experience (1+ years)', 'Proof of funds', 'Medical exam', 'Police certificates'];
  const documents = ['Passport', 'IELTS results', 'ECA report', 'Work experience letters', 'Bank statements', 'Medical exam', 'Police clearance', 'Job offer (if applicable)'];
  const steps = ['Take language test', 'Get ECA', 'Create Express Entry profile', 'Receive CRS score', 'Wait for ITA', 'Submit PR application', 'Provide biometrics', 'Wait for decision'];
  const rejectionReasons = [{ title: 'Low CRS score', description: 'Improve language scores, get Canadian job offer, or provincial nomination' }, { title: 'Incomplete work experience proof', description: 'Detailed reference letters with duties and hours' }];
  const approvalTips = [{ title: 'Maximize CRS points', description: 'High IELTS scores (CLB 9+), masters degree, Canadian experience' }, { title: 'Provincial nomination', description: 'Apply to PNP programs for +600 CRS points' }];
  const faqs = [{ question: 'Minimum CRS score?', answer: 'Recent draws: 470-490 points. Varies by draw.' }, { question: 'Processing time?', answer: '6-12 months after ITA' }];

  return (
    <>
      <Helmet>
        <title>Canada Express Entry from Pakistan - Complete guide</title>
        <meta name="description" content="Canada Express Entry immigration guide from Pakistan with CRS calculator and tips." />
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
              <span className="text-foreground">Express Entry</span>
            </nav>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>Canada Express Entry from Pakistan</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card><CardContent className="pt-6"><div className="flex items-center space-x-3"><DollarSign className="h-8 w-8 text-primary" /><div><p className="text-sm text-muted-foreground">Application Fee</p><p className="text-xl font-semibold">CAD $1,365 (Rs. 316,680)</p></div></div></CardContent></Card>
                <Card><CardContent className="pt-6"><div className="flex items-center space-x-3"><Clock className="h-8 w-8 text-primary" /><div><p className="text-sm text-muted-foreground">Processing Time</p><p className="text-xl font-semibold">6-12 months</p></div></div></CardContent></Card>
              </div>
              <div className="space-y-12">
                <RequirementsSection requirements={requirements} />
                <DocumentsChecklist documents={documents} />
                <BankStatementInfo amountUSD={13000} />
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Get help with Express Entry</h2>
              <GetHelpForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default CanadaExpressEntryPage;