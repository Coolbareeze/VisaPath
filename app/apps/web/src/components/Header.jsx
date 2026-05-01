
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, Facebook, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMobileSubmenu = (menu) => {
    if (expandedMobileMenu === menu) {
      setExpandedMobileMenu(null);
    } else {
      setExpandedMobileMenu(menu);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex flex-col">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden sm:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm font-medium">
          <div className="flex items-center space-x-6">
            <a href="tel:03083393393" className="flex items-center hover:text-primary-foreground/80 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              03083393393
            </a>
            <a href="mailto:info@visapath.pk" className="flex items-center hover:text-primary-foreground/80 transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              info@visapath.pk
            </a>
          </div>
          <div className="flex items-center">
            <a 
              href="https://web.facebook.com/visapathpk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center hover:text-primary-foreground/80 transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img 
              src="https://horizons-cdn.hostinger.com/65ca91dc-b28e-41e8-a2b7-317f42f6d8f6/e7de950382aacce9be01a7c8bd15a39c.jpg" 
              alt="VisaPath.pk - Your Path to Global Opportunities" 
              className="h-10 w-auto object-contain rounded-md"
            />
          </Link>

          <nav className="hidden xl:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/') ? 'text-primary bg-accent' : 'text-foreground hover:text-primary hover:bg-accent/50'
              }`}
            >
              Home
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                {/* Europe Visas */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Europe</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-4">
                      <div className="mb-4 pb-2 border-b">
                        <NavigationMenuLink asChild>
                          <Link to="/europe-visas" className="font-semibold text-primary hover:underline">
                            View All Europe Visas →
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      <ul className="grid grid-cols-3 gap-2">
                        {[
                          { name: 'Schengen Visa', path: '/schengen-visa-from-pakistan' },
                          { name: 'Germany', path: '/germany-visa-from-pakistan' },
                          { name: 'Italy', path: '/italy-visa-from-pakistan' },
                          { name: 'Spain', path: '/spain-visa-from-pakistan' },
                          { name: 'France', path: '/france-visa-from-pakistan' },
                          { name: 'Denmark', path: '/denmark-visa-from-pakistan' },
                          { name: 'Finland', path: '/finland-visa-from-pakistan' },
                          { name: 'Ireland', path: '/ireland-visa-from-pakistan' },
                          { name: 'Luxembourg', path: '/luxembourg-visa-from-pakistan' },
                          { name: 'Malta', path: '/malta-visa-from-pakistan' },
                          { name: 'Netherlands', path: '/netherlands-visa-from-pakistan' },
                          { name: 'Norway', path: '/norway-visa-from-pakistan' },
                          { name: 'Portugal', path: '/portugal-visa-from-pakistan' },
                          { name: 'Sweden', path: '/sweden-visa-from-pakistan' },
                          { name: 'Switzerland', path: '/switzerland-visa-from-pakistan' },
                        ].map((item) => (
                          <li key={item.path}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.path}
                                className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                {item.name}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Asia Visas */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Asia</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/asia-visas" className="block select-none rounded-md p-2 text-sm font-semibold text-primary hover:bg-accent hover:text-accent-foreground">
                            All Asia Visas
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/thailand-visa-from-pakistan" className="block select-none rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground">
                            Thailand Visa
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/malaysia-visa-from-pakistan" className="block select-none rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground">
                            Malaysia Visa
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/singapore-visa-from-pakistan" className="block select-none rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground">
                            Singapore Visa
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/china-visa-from-pakistan" className="block select-none rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground">
                            China Visa
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* USA Visas */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">USA</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/usa-visas" className="block select-none rounded-md p-2 text-sm font-semibold text-primary hover:bg-accent hover:text-accent-foreground">
                            All USA Visas
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/usa-visit-visa-from-pakistan" className="block select-none rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground">
                            Visit Visa (B1/B2)
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/usa-student-visa-from-pakistan" className="block select-none rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground">
                            Student Visa (F1)
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/usa-visa-interview-guide" className="block select-none rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground">
                            Interview Guide
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Canada Visas */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Canada</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/canada-visas" className="block select-none rounded-md p-2 text-sm font-semibold text-primary hover:bg-accent hover:text-accent-foreground">
                            All Canada Visas
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/canada-visitor-visa-from-pakistan" className="block select-none rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground">
                            Visitor Visa
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/canada-study-visa-from-pakistan" className="block select-none rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground">
                            Study Visa
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/canada-express-entry-from-pakistan" className="block select-none rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground">
                            Express Entry
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Turkey Visas */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Turkey</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/turkey-visas" className="block select-none rounded-md p-2 text-sm font-semibold text-primary hover:bg-accent hover:text-accent-foreground">
                            All Turkey Visas
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/turkey-visa-from-pakistan" className="block select-none rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground">
                            Tourist/Visit Visa
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/turkey-student-visa-from-pakistan" className="block select-none rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground">
                            Student Visa
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/turkey-work-visa-from-pakistan" className="block select-none rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground">
                            Work Visa
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* UK Visas */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">UK</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/uk-visas" className="block select-none rounded-md p-2 text-sm font-semibold text-primary hover:bg-accent hover:text-accent-foreground">
                            All UK Visas
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/uk-visa-from-pakistan" className="block select-none rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground">
                            Standard Visitor Visa
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/uk-visit-visa-from-pakistan" className="block select-none rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground">
                            Family Visit Visa
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/uk-student-visa-from-pakistan" className="block select-none rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground">
                            Student Visa
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/uk-work-visa-from-pakistan" className="block select-none rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground">
                            Skilled Worker Visa
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Tools */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Tools</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/tools/fee-calculator" className="block select-none rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground">
                            Fee Calculator
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/tools/points-calculator" className="block select-none rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground">
                            Points Calculator
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/tools/bank-calculator" className="block select-none rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground">
                            Bank Statement Calculator
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/tools/budget-estimator" className="block select-none rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground">
                            Budget Estimator
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/tools/checklist-generator" className="block select-none rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground">
                            Checklist Generator
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/blog"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/blog') ? 'text-primary bg-accent' : 'text-foreground hover:text-primary hover:bg-accent/50'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/contact-us"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/contact-us') ? 'text-primary bg-accent' : 'text-foreground hover:text-primary hover:bg-accent/50'
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden xl:flex items-center space-x-4">
            <Button asChild>
              <Link to="/contact-us">Get Help</Link>
            </Button>
          </div>

          <button
            className="xl:hidden p-2 rounded-md hover:bg-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-4 border-t max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between px-3 pb-4 mb-4 border-b border-border">
              <a href="tel:03083393393" className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary">
                <Phone className="h-4 w-4 mr-2" />
                Call Us
              </a>
              <a href="mailto:info@visapath.pk" className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary">
                <Mail className="h-4 w-4 mr-2" />
                Email Us
              </a>
            </div>
            <nav className="flex flex-col space-y-1 px-2">
              <Link
                to="/"
                className="px-3 py-2 text-base font-medium rounded-md hover:bg-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Europe */}
              <div>
                <button 
                  onClick={() => toggleMobileSubmenu('europe')}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium rounded-md hover:bg-accent transition-colors"
                >
                  Europe Visas
                  <ChevronDown className={`h-4 w-4 transition-transform ${expandedMobileMenu === 'europe' ? 'rotate-180' : ''}`} />
                </button>
                {expandedMobileMenu === 'europe' && (
                  <div className="pl-6 py-2 space-y-1 border-l-2 border-muted ml-4 mt-1">
                    <Link to="/europe-visas" className="block px-3 py-2 text-sm font-medium text-primary" onClick={() => setMobileMenuOpen(false)}>All Europe Visas</Link>
                    <Link to="/schengen-visa-from-pakistan" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Schengen Visa</Link>
                    <Link to="/germany-visa-from-pakistan" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Germany</Link>
                    <Link to="/italy-visa-from-pakistan" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Italy</Link>
                    <Link to="/spain-visa-from-pakistan" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Spain</Link>
                    <Link to="/france-visa-from-pakistan" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>France</Link>
                  </div>
                )}
              </div>

              {/* Mobile Asia */}
              <div>
                <button 
                  onClick={() => toggleMobileSubmenu('asia')}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium rounded-md hover:bg-accent transition-colors"
                >
                  Asia Visas
                  <ChevronDown className={`h-4 w-4 transition-transform ${expandedMobileMenu === 'asia' ? 'rotate-180' : ''}`} />
                </button>
                {expandedMobileMenu === 'asia' && (
                  <div className="pl-6 py-2 space-y-1 border-l-2 border-muted ml-4 mt-1">
                    <Link to="/asia-visas" className="block px-3 py-2 text-sm font-medium text-primary" onClick={() => setMobileMenuOpen(false)}>All Asia Visas</Link>
                    <Link to="/thailand-visa-from-pakistan" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Thailand</Link>
                    <Link to="/malaysia-visa-from-pakistan" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Malaysia</Link>
                    <Link to="/singapore-visa-from-pakistan" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Singapore</Link>
                    <Link to="/china-visa-from-pakistan" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>China</Link>
                  </div>
                )}
              </div>

              {/* Mobile USA */}
              <div>
                <button 
                  onClick={() => toggleMobileSubmenu('usa')}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium rounded-md hover:bg-accent transition-colors"
                >
                  USA Visas
                  <ChevronDown className={`h-4 w-4 transition-transform ${expandedMobileMenu === 'usa' ? 'rotate-180' : ''}`} />
                </button>
                {expandedMobileMenu === 'usa' && (
                  <div className="pl-6 py-2 space-y-1 border-l-2 border-muted ml-4 mt-1">
                    <Link to="/usa-visas" className="block px-3 py-2 text-sm font-medium text-primary" onClick={() => setMobileMenuOpen(false)}>All USA Visas</Link>
                    <Link to="/usa-visit-visa-from-pakistan" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Visit Visa (B1/B2)</Link>
                    <Link to="/usa-student-visa-from-pakistan" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Student Visa (F1)</Link>
                    <Link to="/usa-visa-interview-guide" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Interview Guide</Link>
                  </div>
                )}
              </div>

              {/* Mobile Canada */}
              <div>
                <button 
                  onClick={() => toggleMobileSubmenu('canada')}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium rounded-md hover:bg-accent transition-colors"
                >
                  Canada Visas
                  <ChevronDown className={`h-4 w-4 transition-transform ${expandedMobileMenu === 'canada' ? 'rotate-180' : ''}`} />
                </button>
                {expandedMobileMenu === 'canada' && (
                  <div className="pl-6 py-2 space-y-1 border-l-2 border-muted ml-4 mt-1">
                    <Link to="/canada-visas" className="block px-3 py-2 text-sm font-medium text-primary" onClick={() => setMobileMenuOpen(false)}>All Canada Visas</Link>
                    <Link to="/canada-visitor-visa-from-pakistan" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Visitor Visa</Link>
                    <Link to="/canada-study-visa-from-pakistan" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Study Visa</Link>
                    <Link to="/canada-express-entry-from-pakistan" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Express Entry</Link>
                  </div>
                )}
              </div>

              {/* Mobile Turkey */}
              <div>
                <button 
                  onClick={() => toggleMobileSubmenu('turkey')}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium rounded-md hover:bg-accent transition-colors"
                >
                  Turkey Visas
                  <ChevronDown className={`h-4 w-4 transition-transform ${expandedMobileMenu === 'turkey' ? 'rotate-180' : ''}`} />
                </button>
                {expandedMobileMenu === 'turkey' && (
                  <div className="pl-6 py-2 space-y-1 border-l-2 border-muted ml-4 mt-1">
                    <Link to="/turkey-visas" className="block px-3 py-2 text-sm font-medium text-primary" onClick={() => setMobileMenuOpen(false)}>All Turkey Visas</Link>
                    <Link to="/turkey-visa-from-pakistan" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Tourist/Visit Visa</Link>
                    <Link to="/turkey-student-visa-from-pakistan" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Student Visa</Link>
                    <Link to="/turkey-work-visa-from-pakistan" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Work Visa</Link>
                  </div>
                )}
              </div>

              {/* Mobile UK */}
              <div>
                <button 
                  onClick={() => toggleMobileSubmenu('uk')}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium rounded-md hover:bg-accent transition-colors"
                >
                  UK Visas
                  <ChevronDown className={`h-4 w-4 transition-transform ${expandedMobileMenu === 'uk' ? 'rotate-180' : ''}`} />
                </button>
                {expandedMobileMenu === 'uk' && (
                  <div className="pl-6 py-2 space-y-1 border-l-2 border-muted ml-4 mt-1">
                    <Link to="/uk-visas" className="block px-3 py-2 text-sm font-medium text-primary" onClick={() => setMobileMenuOpen(false)}>All UK Visas</Link>
                    <Link to="/uk-visa-from-pakistan" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Standard Visitor Visa</Link>
                    <Link to="/uk-visit-visa-from-pakistan" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Family Visit Visa</Link>
                    <Link to="/uk-student-visa-from-pakistan" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Student Visa</Link>
                    <Link to="/uk-work-visa-from-pakistan" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Skilled Worker Visa</Link>
                  </div>
                )}
              </div>

              {/* Mobile Tools */}
              <div>
                <button 
                  onClick={() => toggleMobileSubmenu('tools')}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium rounded-md hover:bg-accent transition-colors"
                >
                  Tools
                  <ChevronDown className={`h-4 w-4 transition-transform ${expandedMobileMenu === 'tools' ? 'rotate-180' : ''}`} />
                </button>
                {expandedMobileMenu === 'tools' && (
                  <div className="pl-6 py-2 space-y-1 border-l-2 border-muted ml-4 mt-1">
                    <Link to="/tools/fee-calculator" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Fee Calculator</Link>
                    <Link to="/tools/points-calculator" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Points Calculator</Link>
                    <Link to="/tools/bank-calculator" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Bank Statement Calculator</Link>
                    <Link to="/tools/budget-estimator" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Budget Estimator</Link>
                    <Link to="/tools/checklist-generator" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Checklist Generator</Link>
                  </div>
                )}
              </div>

              <Link
                to="/blog"
                className="px-3 py-2 text-base font-medium rounded-md hover:bg-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact-us"
                className="px-3 py-2 text-base font-medium rounded-md hover:bg-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              
              <div className="pt-4 px-3">
                <Button asChild className="w-full">
                  <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)}>
                    Get Help
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
