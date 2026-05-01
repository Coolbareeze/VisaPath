
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="https://horizons-cdn.hostinger.com/65ca91dc-b28e-41e8-a2b7-317f42f6d8f6/e7de950382aacce9be01a7c8bd15a39c.jpg" 
                alt="VisaPath.pk Logo" 
                className="h-12 w-auto object-contain rounded-md"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-4 max-w-sm">
              Your trusted guide for visa applications from Pakistan. We provide comprehensive information, calculators, and tools to help you navigate the complex visa process with confidence.
            </p>
            <p className="text-xs italic opacity-80 max-w-sm border-l-2 border-primary pl-3 py-1">
              Disclaimer: We are not affiliated with any embassy or government organization. All information provided is for educational purposes only.
            </p>
          </div>

          <div>
            <span className="font-semibold text-foreground mb-4 block">Visa Categories</span>
            <ul className="space-y-2 text-sm">
              <li><Link to="/europe-visas" className="hover:text-primary transition-colors">Europe (Schengen)</Link></li>
              <li><Link to="/usa-visas" className="hover:text-primary transition-colors">USA Visas</Link></li>
              <li><Link to="/canada-visas" className="hover:text-primary transition-colors">Canada Visas</Link></li>
              <li><Link to="/uk-visas" className="hover:text-primary transition-colors">UK Visas</Link></li>
              <li><Link to="/turkey-visas" className="hover:text-primary transition-colors">Turkey Visas</Link></li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-foreground mb-4 block">Asia Visas</span>
            <ul className="space-y-2 text-sm">
              <li><Link to="/asia-visas" className="font-medium text-foreground hover:text-primary transition-colors">All Asia Visas</Link></li>
              <li><Link to="/thailand-visa-from-pakistan" className="hover:text-primary transition-colors">Thailand</Link></li>
              <li><Link to="/malaysia-visa-from-pakistan" className="hover:text-primary transition-colors">Malaysia</Link></li>
              <li><Link to="/singapore-visa-from-pakistan" className="hover:text-primary transition-colors">Singapore</Link></li>
              <li><Link to="/china-visa-from-pakistan" className="hover:text-primary transition-colors">China</Link></li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-foreground mb-4 block">Tools & Resources</span>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tools/fee-calculator" className="hover:text-primary transition-colors">Fee Calculator</Link></li>
              <li><Link to="/tools/points-calculator" className="hover:text-primary transition-colors">Points Calculator</Link></li>
              <li><Link to="/tools/bank-calculator" className="hover:text-primary transition-colors">Bank Statement Calculator</Link></li>
              <li><Link to="/tools/checklist-generator" className="hover:text-primary transition-colors">Document Checklist</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Visa Blog & News</Link></li>
              <li><Link to="/guides/google-search-console-setup" className="hover:text-primary transition-colors">Sitemap Guide</Link></li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-foreground mb-4 block">Contact Us</span>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:03083393393" className="hover:text-primary transition-colors">03083393393</a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@visapath.pk" className="hover:text-primary transition-colors">info@visapath.pk</a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Lahore, Pakistan</span>
              </li>
            </ul>
            <div className="flex space-x-3 mt-6">
              <a href="https://web.facebook.com/visapathpk" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2026 VisaPath.pk. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/contact-us" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact-us" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
