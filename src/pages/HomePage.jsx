import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEO from '@/components/SEO.jsx';
import GetHelpForm from '@/components/GetHelpForm.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';
import GuideCard from '@/components/GuideCard.jsx';
import ToolCard from '@/components/ToolCard.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, FileCheck, Banknote, TrendingUp, CheckSquare, Search, Globe, Plane, GraduationCap, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

function HomePage() {
  const [searchCountry, setSearchCountry] = useState('');
  const [searchVisaType, setSearchVisaType] = useState('');

  const handleSearch = () => {
    if (searchCountry) {
      const countryMap = {
        'Germany': '/germany-visa-from-pakistan',
        'Italy': '/italy-visa-from-pakistan',
        'Spain': '/spain-visa-from-pakistan',
        'France': '/france-visa-from-pakistan',
        'USA': '/usa-visas',
        'Canada': '/canada-visas'
      };
      window.location.href = countryMap[searchCountry] || '/';
    }
  };

  const faqs = [
    {
      question: 'How long does it take to get a visa from Pakistan in 2026?',
      answer: 'Processing times vary by country and visa type. Schengen visas typically take 15-20 days, USA visas can take 3-8 weeks, and Canada visas usually take 4-6 weeks. Check our specific visa pages for accurate timelines.'
    },
    {
      question: 'What is the minimum bank balance required for a visa?',
      answer: 'Bank balance requirements vary by destination and duration. Generally, you need to show sufficient funds to cover your stay. Use our Bank Statement Calculator tool to get an estimate for your specific case.'
    },
    {
      question: 'Can I apply for a visa without a travel agent?',
      answer: 'Yes, you can apply for most visas independently. Our guides provide step-by-step instructions for self-application. However, complex cases may benefit from professional assistance.'
    },
    {
      question: 'What are the most common reasons for visa rejection?',
      answer: 'Common rejection reasons include insufficient funds, incomplete documentation, unclear travel purpose, weak ties to Pakistan, and previous immigration violations. Check our detailed guides for specific visa types.'
    },
    {
      question: 'Do I need travel insurance for a visa application?',
      answer: 'Travel insurance is mandatory for Schengen visas and recommended for most other visa types. It should cover medical expenses, repatriation, and emergency evacuation for the entire trip duration.'
    }
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VisaPath.pk",
    "url": "https://visapath.pk",
    "logo": "https://visapath.pk/logo.png",
    "description": "Your complete guide to visa applications from Pakistan.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-300-1234567",
      "contactType": "customer service",
      "areaServed": "PK",
      "availableLanguage": ["English", "Urdu"]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://visapath.pk/"
    }]
  };

  return (
    <>
      <SEO 
        title="VisaPath.pk - Complete Visa Guide for Pakistanis 2026"
        description="Get comprehensive visa information, requirements, and tools for Europe, USA, Canada visas from Pakistan. Step-by-step guides, calculators, and expert tips for 2026."
        canonical="/"
        schemas={[organizationSchema, faqSchema, breadcrumbSchema]}
      />

      <Header />

      <main>
        <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1575127537690-af1804d9f6ac?w=1920&q=80"
              alt="Passport and travel documents for Pakistani citizens applying for visas"
              loading="eager"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                Your Complete Guide to Visa Applications from Pakistan 2026
              </h1>
              <h2 className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto font-normal">
                Get accurate visa requirements, step-by-step guides, and helpful tools for <Link to="/europe-visas" className="text-primary hover:underline">Europe</Link>, <Link to="/usa-visas" className="text-primary hover:underline">USA</Link>, <Link to="/canada-visas" className="text-primary hover:underline">Canada</Link>, and more.
              </h2>

              <Card className="max-w-2xl mx-auto shadow-lg border-0">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-3">
                    <Select value={searchCountry} onValueChange={setSearchCountry}>
                      <SelectTrigger className="flex-1 text-foreground">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Germany">Germany</SelectItem>
                        <SelectItem value="Italy">Italy</SelectItem>
                        <SelectItem value="Spain">Spain</SelectItem>
                        <SelectItem value="France">France</SelectItem>
                        <SelectItem value="USA">USA</SelectItem>
                        <SelectItem value="Canada">Canada</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={searchVisaType} onValueChange={setSearchVisaType}>
                      <SelectTrigger className="flex-1 text-foreground">
                        <SelectValue placeholder="Select visa type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tourist">Tourist/Visit</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="work">Work</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button onClick={handleSearch} className="md:w-auto">
                      <Search className="h-4 w-4 mr-2" />
                      Search
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl md:text-4xl font-semibold mb-4">Popular Visa Destinations for Pakistanis</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Explore comprehensive guides for the most sought-after visa destinations from Pakistan. We cover everything from document checklists to interview preparation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
                <Card className="h-full hover:shadow-lg transition-all duration-200 border-0 shadow-md">
                  <div className="aspect-video relative overflow-hidden rounded-t-xl">
                    <img src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80" alt="European landmarks representing Schengen visa from Pakistan" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Globe className="h-5 w-5 text-primary" />
                      <span>Europe Visas</span>
                    </CardTitle>
                    <CardDescription>
                      Schengen visa guides for <Link to="/germany-visa-from-pakistan" className="hover:underline text-primary">Germany</Link>, <Link to="/italy-visa-from-pakistan" className="hover:underline text-primary">Italy</Link>, Spain, France and more.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link to="/europe-visas">Explore Europe Visas</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
                <Card className="h-full hover:shadow-lg transition-all duration-200 border-0 shadow-md">
                  <div className="aspect-video relative overflow-hidden rounded-t-xl">
                    <img src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&q=80" alt="USA landmarks representing US visa applications from Pakistan" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Plane className="h-5 w-5 text-primary" />
                      <span>USA Visas</span>
                    </CardTitle>
                    <CardDescription>
                      Complete guides for <Link to="/usa-visit-visa-from-pakistan" className="hover:underline text-primary">US visit (B1/B2)</Link>, student (F1), and work visas.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link to="/usa-visas">Explore USA Visas</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
                <Card className="h-full hover:shadow-lg transition-all duration-200 border-0 shadow-md">
                  <div className="aspect-video relative overflow-hidden rounded-t-xl">
                    <img src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&q=80" alt="Canada landmarks representing Canadian visa and Express Entry" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <span>Canada Visas</span>
                    </CardTitle>
                    <CardDescription>
                      Visitor, study, and <Link to="/canada-express-entry-from-pakistan" className="hover:underline text-primary">Express Entry</Link> immigration guides.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link to="/canada-visas">Explore Canada Visas</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl md:text-4xl font-semibold mb-4">Free Visa Preparation Tools</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Use our free calculators and generators to prepare your application perfectly. From <Link to="/tools/bank-calculator" className="text-primary hover:underline">bank statements</Link> to <Link to="/tools/points-calculator" className="text-primary hover:underline">immigration points</Link>.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ToolCard icon={Calculator} title="Fee Calculator" description="Calculate total visa fees including processing and service charges" link="/tools/fee-calculator" />
              <ToolCard icon={TrendingUp} title="Points Calculator" description="Calculate your immigration points for Canada Express Entry" link="/tools/points-calculator" />
              <ToolCard icon={Banknote} title="Bank Statement Calculator" description="Estimate required bank balance for your visa application" link="/tools/bank-calculator" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <FAQSection faqs={faqs} title="Frequently Asked Questions about Visas from Pakistan" />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;