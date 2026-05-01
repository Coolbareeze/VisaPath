import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEO from '@/components/SEO.jsx';
import { ChevronRight, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

function GoogleSearchConsoleGuidePage() {
  const faqs = [
    {
      question: "How long does it take for Google to index my sitemap?",
      answer: "After submitting your sitemap, it can take anywhere from a few days to a few weeks for Google to crawl and index your pages. The exact time depends on your site's authority, crawl budget, and content quality."
    },
    {
      question: "How often should I resubmit my sitemap?",
      answer: "You do not need to resubmit your sitemap manually every time you add a page. As long as your sitemap URL remains the same and updates dynamically (or you update the static file), Google will periodically fetch it. You only need to resubmit if you change the sitemap URL."
    },
    {
      question: "What if my sitemap is too large?",
      answer: "A single sitemap can contain up to 50,000 URLs and must be under 50MB uncompressed. If your site exceeds this, you must split your URLs into multiple sitemaps and use a sitemap index file to link them together."
    },
    {
      question: "How often does Google check the sitemap?",
      answer: "Google checks sitemaps based on its own scheduling algorithms. It may check daily for high-traffic news sites, or weekly/monthly for smaller sites. You can use the <lastmod> tag in your XML to signal when content was updated."
    },
    {
      question: "Why are some submitted URLs not indexed?",
      answer: "Google does not guarantee indexing for every submitted URL. Pages might be excluded due to low quality, duplicate content, canonical tags pointing elsewhere, or 'noindex' directives. Check the 'Pages' report in GSC for specific reasons."
    },
    {
      question: "Can I submit multiple sitemaps?",
      answer: "Yes, you can submit multiple sitemaps. This is common for large sites that separate sitemaps by category (e.g., blog-sitemap.xml, visa-sitemap.xml, tools-sitemap.xml)."
    },
    {
      question: "How do I fix 'Couldn't fetch' errors?",
      answer: "A 'Couldn't fetch' error usually means Googlebot couldn't access the file. Check if your sitemap URL is correct, ensure it's not blocked by robots.txt, and verify your server isn't blocking Google's IP addresses. Sometimes, it's just a temporary Google glitch—try submitting again later."
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visapath.pk/" },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://visapath.pk/blog" },
      { "@type": "ListItem", "position": 3, "name": "Google Search Console Setup", "item": "https://visapath.pk/guides/google-search-console-setup" }
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
        title="How to Submit Sitemap to Google Search Console - Step by Step 2026"
        description="Complete guide to submit your sitemap to Google Search Console. Learn verification, property setup & indexing for VisaPath.pk."
        canonical="/guides/google-search-console-setup"
        schemas={[breadcrumbSchema, faqSchema]}
      />

      <Header />

      <main>
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Guides</span>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground truncate">Google Search Console Setup</span>
            </nav>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                How to Submit Sitemap to Google Search Console - Complete Guide
              </h1>
              
              <div className="prose prose-lg max-w-none text-foreground mb-16">
                <p className="lead text-xl text-muted-foreground mb-8">
                  Submitting an XML sitemap to Google Search Console (GSC) is one of the most critical steps in technical SEO. It acts as a roadmap for Googlebot, ensuring all your important pages are discovered, crawled, and indexed efficiently.
                </p>

                <h2 className="text-2xl font-semibold mt-12 mb-4">1. Introduction to Google Search Console</h2>
                <p>
                  Google Search Console is a free tool provided by Google that helps you monitor, maintain, and troubleshoot your site's presence in Google Search results. While Google can find your site without a sitemap, submitting one speeds up the discovery process, especially for new websites, large sites, or sites with isolated pages.
                </p>

                <h2 className="text-2xl font-semibold mt-12 mb-4">2. Step-by-Step Guide to Submitting Your Sitemap</h2>
                
                <div className="space-y-8 mt-6">
                  <div className="bg-card border rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-medium flex items-center mb-3">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
                      Log in to Google Search Console
                    </h3>
                    <p className="text-muted-foreground">
                      Go to <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">search.google.com/search-console</a> and log in with your Google account. If you haven't set up a property yet, you'll be prompted to do so.
                    </p>
                  </div>

                  <div className="bg-card border rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-medium flex items-center mb-3">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
                      Add Your Property
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      You can add your site as a <strong>Domain property</strong> (covers all subdomains and protocols) or a <strong>URL prefix property</strong> (covers only the exact URL entered). Domain property is highly recommended.
                    </p>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                      <li>Select "Domain"</li>
                      <li>Enter your domain (e.g., <code>visapath.pk</code>)</li>
                      <li>Click Continue</li>
                    </ul>
                  </div>

                  <div className="bg-card border rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-medium flex items-center mb-3">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
                      Verify Ownership
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      If you chose Domain property, you must verify via DNS record. Copy the TXT record provided by Google and add it to your domain registrar's DNS settings.
                    </p>
                    <div className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto mb-3">
                      Type: TXT<br/>
                      Name: @ (or leave blank)<br/>
                      Value: google-site-verification=YOUR_UNIQUE_CODE_HERE
                    </div>
                    <p className="text-muted-foreground text-sm">
                      <em>Note: DNS changes can take anywhere from a few minutes to 24 hours to propagate.</em>
                    </p>
                  </div>

                  <div className="bg-card border rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-medium flex items-center mb-3">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">4</span>
                      Navigate to Sitemaps
                    </h3>
                    <p className="text-muted-foreground">
                      Once verified, open your property dashboard. In the left-hand sidebar, under the "Indexing" section, click on <strong>Sitemaps</strong>.
                    </p>
                  </div>

                  <div className="bg-card border rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-medium flex items-center mb-3">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">5</span>
                      Submit sitemap.xml
                    </h3>
                    <p className="text-muted-foreground">
                      In the "Add a new sitemap" field, enter the URL path to your sitemap. For this site, it is <code>sitemap.xml</code>. Click the <strong>Submit</strong> button.
                    </p>
                  </div>

                  <div className="bg-card border rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-medium flex items-center mb-3">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">6</span>
                      Monitor Coverage
                    </h3>
                    <p className="text-muted-foreground">
                      Google will display a "Success" status if it can read the file. It will show how many URLs were discovered. Check back in a few days to see how many of those discovered URLs were actually indexed.
                    </p>
                  </div>

                  <div className="bg-card border rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-medium flex items-center mb-3">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">7</span>
                      Request Indexing (Optional)
                    </h3>
                    <p className="text-muted-foreground">
                      If you have a brand new, highly important page, you don't have to wait for the sitemap crawl. You can paste the specific URL into the top search bar in GSC and click <strong>Request Indexing</strong> for priority crawling.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold mt-16 mb-6">3. Troubleshooting Common Issues</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <Card className="border-destructive/20 bg-destructive/5">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-foreground mb-1">Sitemap "Couldn't fetch"</h4>
                          <p className="text-sm text-muted-foreground">Ensure your sitemap is accessible in a browser and not blocked by robots.txt. Sometimes this is a temporary GSC bug—try again tomorrow.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-destructive/20 bg-destructive/5">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-foreground mb-1">Discovered - currently not indexed</h4>
                          <p className="text-sm text-muted-foreground">Google found the URL but decided not to crawl it yet to save server load. This usually resolves itself over time.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-2xl font-semibold mt-12 mb-6">4. Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full mb-12">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <h2 className="text-2xl font-semibold mt-12 mb-6">5. Additional Resources</h2>
                <ul className="space-y-3 mb-12">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <a href="/sitemap.xml" target="_blank" className="text-primary hover:underline font-medium">View our live sitemap.xml</a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ExternalLink className="h-5 w-5 text-muted-foreground" />
                    <a href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Google's Official Sitemap Documentation</a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ExternalLink className="h-5 w-5 text-muted-foreground" />
                    <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Read more SEO and Visa Guides on our Blog</Link>
                  </li>
                </ul>

                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center mt-16">
                  <h3 className="text-2xl font-semibold mb-4">Ready to explore our visa guides?</h3>
                  <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                    Now that your technical SEO is set up, explore our comprehensive visa guides and tools designed for Pakistani travelers.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button asChild size="lg">
                      <Link to="/europe-visas">Explore Europe Visas</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/tools/fee-calculator">Try Fee Calculator</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default GoogleSearchConsoleGuidePage;