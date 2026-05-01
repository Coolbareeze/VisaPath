import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEO from '@/components/SEO.jsx';
import GetHelpForm from '@/components/GetHelpForm.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import { ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

function UsaVisaInterviewGuidePage() {
  const faqs = [
    {
      question: 'What should I wear to my US visa interview in Islamabad/Karachi?',
      answer: 'Dress professionally and neatly. Business casual or formal traditional Pakistani attire (like a neat Shalwar Kameez with a waistcoat) is appropriate. Avoid overly casual clothes like t-shirts or flip-flops.'
    },
    {
      question: 'How long does the US visa interview last?',
      answer: 'The actual interview with the consular officer usually lasts only 2 to 5 minutes. However, expect to spend 1-2 hours at the embassy for security checks, biometrics, and waiting in line.'
    },
    {
      question: 'Can I bring my phone to the US Embassy?',
      answer: 'No, mobile phones, smartwatches, and large bags are strictly prohibited inside the US Embassy in Islamabad and the Consulate in Karachi. Leave them in your car or at home.'
    },
    {
      question: 'What language is the interview conducted in?',
      answer: 'Interviews are primarily conducted in English. However, you can request an interview in Urdu. It is better to speak confidently in Urdu than to struggle in English, unless you are applying for a student (F1) visa where English proficiency is expected.'
    },
    {
      question: 'What happens if my US visa is rejected under section 214(b)?',
      answer: 'A 214(b) rejection means the officer was not convinced you have strong enough ties to Pakistan to return. You can reapply at any time, but you should only do so if your circumstances have significantly changed or you can present new evidence.'
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visapath.pk/" },
      { "@type": "ListItem", "position": 2, "name": "USA Visas", "item": "https://visapath.pk/usa-visas" },
      { "@type": "ListItem", "position": 3, "name": "USA Visa Interview Guide", "item": "https://visapath.pk/usa-visa-interview-guide" }
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
        title="USA Visa Interview Guide for Pakistanis 2026 - Tips & Questions"
        description="Master your US visa interview in Islamabad or Karachi. Learn common questions, how to prove strong ties to Pakistan, and tips to avoid 214(b) rejection in 2026."
        canonical="/usa-visa-interview-guide"
        schemas={[breadcrumbSchema, faqSchema]}
      />

      <Header />

      <main>
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/usa-visas" className="hover:text-primary transition-colors">USA Visas</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Interview Guide</span>
            </nav>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                USA Visa Interview Guide for Pakistanis 2026
              </h1>
              
              <div className="prose prose-lg max-w-none mb-12 text-foreground">
                <p className="leading-relaxed text-muted-foreground">
                  The US visa interview is the most critical part of your application process. Whether you are applying for a <Link to="/usa-visit-visa-from-pakistan" className="text-primary hover:underline">B1/B2 Visit Visa</Link> or an <Link to="/usa-student-visa-from-pakistan" className="text-primary hover:underline">F1 Student Visa</Link>, the consular officer at the US Embassy in Islamabad or the Consulate in Karachi will make a decision based primarily on your 2-5 minute conversation.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Understanding the 214(b) Presumption</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Under US immigration law (Section 214(b)), every non-immigrant visa applicant is presumed to be an intending immigrant until they prove otherwise. Your main goal during the interview is to overcome this presumption by demonstrating <strong>strong ties to Pakistan</strong> that will compel you to return after your temporary visit.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Top 5 Common US Visa Interview Questions</h3>
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-2">1. Why are you traveling to the US?</p>
                      <p className="text-sm text-muted-foreground">Be specific. Don't just say "for tourism." Say "I am taking a 2-week vacation to visit the Grand Canyon and tour Los Angeles."</p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-2">2. How long will you stay?</p>
                      <p className="text-sm text-muted-foreground">Keep it realistic. A 2-3 week stay is believable for a working professional. Asking for 6 months raises red flags about how you can leave your job in Pakistan for that long.</p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-2">3. Who is sponsoring your trip?</p>
                      <p className="text-sm text-muted-foreground">If self-sponsored, state your profession and income clearly. If sponsored by a relative in the US, be prepared to explain their status and your relationship.</p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-2">4. What do you do in Pakistan?</p>
                      <p className="text-sm text-muted-foreground">This is your chance to show strong ties. Mention your stable job, business, or studies. "I have been working as a Senior Engineer at XYZ company for 5 years."</p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-2">5. Do you have relatives in the US?</p>
                      <p className="text-sm text-muted-foreground">Always tell the truth. The embassy already knows. Lying about relatives is a guaranteed way to get rejected for misrepresentation.</p>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-2xl font-semibold mt-12 mb-4">Tips to Pass Your US Visa Interview</h2>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Answer directly and concisely:</strong> Consular officers conduct hundreds of interviews daily. Keep your answers short, to the point, and only answer what is asked.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Match your DS-160:</strong> Your verbal answers must perfectly match what you filled out in your DS-160 form. Inconsistencies lead to rejections.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Don't push documents:</strong> Only hand over documents if the officer explicitly asks for them. They rely more on your verbal answers than your paperwork.</span>
                  </li>
                </ul>

                <div className="bg-destructive/10 p-6 rounded-xl border border-destructive/20 my-8">
                  <h3 className="text-xl font-semibold text-destructive flex items-center mb-3">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    Red Flags to Avoid
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Showing desperation or arguing with the officer.</li>
                    <li>Having a blank passport (no previous travel history) but applying for a long tourist stay.</li>
                    <li>Unexplained large deposits in your <Link to="/tools/bank-calculator" className="text-primary hover:underline">bank statement</Link> right before the interview.</li>
                    <li>Applying immediately after a previous rejection without any change in circumstances.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12">
                <FAQSection faqs={faqs} title="US Visa Interview FAQs" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Need Interview Preparation Help?</h2>
              <GetHelpForm 
                title="Mock Interview Sessions" 
                description="Practice with our experts to build confidence before your actual embassy interview."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default UsaVisaInterviewGuidePage;