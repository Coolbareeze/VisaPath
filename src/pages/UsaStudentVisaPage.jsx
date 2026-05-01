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

function UsaStudentVisaPage() {
  const requirements = ['Valid passport', 'I-20 form from university', 'DS-160 form', 'SEVIS fee receipt', 'Financial proof', 'Academic documents', 'Interview appointment'];
  const documents = ['Passport', 'I-20', 'DS-160 confirmation', 'SEVIS receipt', 'Bank statements', 'Transcripts', 'Test scores (TOEFL/SAT)', 'Admission letter'];
  const steps = ['Receive I-20 from university', 'Pay SEVIS fee', 'Fill DS-160', 'Pay visa fee', 'Schedule interview', 'Attend interview', 'Collect passport'];
  const rejectionReasons = [{ title: 'Insufficient funds', description: 'Show ability to pay tuition + living costs' }, { title: 'Weak academic profile', description: 'Strong grades and test scores required' }];
  const approvalTips = [{ title: 'Know your program', description: 'Explain why this university and program' }, { title: 'Show financial capacity', description: 'Bank statements covering full program cost' }];
  const faqs = [{ question: 'Financial proof needed?', answer: 'Full tuition + living expenses for first year minimum' }, { question: 'Processing time?', answer: '4-6 weeks after interview' }];

  return (
    <>
      <Helmet>
        <title>USA student visa (F1) from Pakistan - Complete guide</title>
        <meta name="description" content="US F1 student visa guide from Pakistan with requirements and interview tips." />
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
              <span className="text-foreground">USA Student Visa</span>
            </nav>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>USA student visa (F1) from Pakistan</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card><CardContent className="pt-6"><div className="flex items-center space-x-3"><DollarSign className="h-8 w-8 text-primary" /><div><p className="text-sm text-muted-foreground">Visa Fee</p><p className="text-xl font-semibold">$185 (Rs. 51,430)</p></div></div></CardContent></Card>
                <Card><CardContent className="pt-6"><div className="flex items-center space-x-3"><Clock className="h-8 w-8 text-primary" /><div><p className="text-sm text-muted-foreground">Processing Time</p><p className="text-xl font-semibold">4-6 weeks</p></div></div></CardContent></Card>
              </div>
              <div className="space-y-12">
                <RequirementsSection requirements={requirements} />
                <DocumentsChecklist documents={documents} />
                <BankStatementInfo amountUSD={30000} />
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Get help with your USA student visa</h2>
              <GetHelpForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default UsaStudentVisaPage;