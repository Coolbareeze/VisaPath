import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEO from '@/components/SEO.jsx';
import GetHelpForm from '@/components/GetHelpForm.jsx';
import { ChevronRight, Calendar, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import pb from '@/lib/pocketbaseClient';

function ArticlePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const records = await pb.collection('blog_articles').getFullList({
          filter: `slug = "${slug}"`,
          $autoCancel: false
        });
        
        if (records.length > 0) {
          setArticle(records[0]);
        } else {
          // Fallback to placeholder content if not found in DB
          setArticle({
            title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + ' 2026',
            content: `This is a comprehensive guide regarding ${slug.replace(/-/g, ' ')}. \n\nVisa applications from Pakistan require careful preparation and attention to detail. Always ensure your documents are complete and accurate before submission. \n\nFor example, if you are applying for a Schengen visa, you must ensure your bank statements reflect a stable income. Use our Bank Statement Calculator to estimate your needs. If you are looking at Canada, check out our Express Entry Points Calculator.\n\nInternal links are crucial for navigating the complex visa landscape. Make sure to review our guides on USA Visas, Canada Visas, and Europe Visas to make an informed decision.`,
            category: 'Visa Guides',
            author: 'Visa Expert',
            date: new Date().toISOString(),
            meta_description: `Comprehensive guide and tips for ${slug.replace(/-/g, ' ')} from Pakistan in 2026.`
          });
        }
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="py-16 container mx-auto px-4 max-w-3xl">
          <Skeleton className="h-8 w-32 mb-8" />
          <Skeleton className="h-12 w-full mb-4" />
          <Skeleton className="h-12 w-3/4 mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!article) {
    return (
      <>
        <Header />
        <main className="py-32 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <p className="text-muted-foreground mb-8">The article you are looking for does not exist.</p>
          <Button onClick={() => navigate('/blog')}>Back to Blog</Button>
        </main>
        <Footer />
      </>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.meta_description,
    "author": {
      "@type": "Person",
      "name": article.author || "Visa Expert"
    },
    "datePublished": article.date || article.created,
    "publisher": {
      "@type": "Organization",
      "name": "VisaPath.pk",
      "logo": {
        "@type": "ImageObject",
        "url": "https://visapath.pk/logo.png"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visapath.pk/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://visapath.pk/blog" },
      { "@type": "ListItem", "position": 3, "name": article.title, "item": `https://visapath.pk/blog/${slug}` }
    ]
  };

  return (
    <>
      <SEO 
        title={`${article.title} - VisaPath.pk`}
        description={article.meta_description || article.title}
        canonical={`/blog/${slug}`}
        schemas={[articleSchema, breadcrumbSchema]}
      />

      <Header />

      <main>
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground truncate max-w-[200px] sm:max-w-xs">{article.title}</span>
            </nav>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Button variant="ghost" size="sm" className="mb-8 -ml-4" onClick={() => navigate('/blog')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to articles
              </Button>

              <div className="mb-8">
                {article.category && (
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
                    {article.category}
                  </span>
                )}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  {article.title}
                </h1>
                
                <div className="flex items-center space-x-6 text-sm text-muted-foreground border-b pb-8">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{article.author || 'Visa Expert'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.date || article.created).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none mb-16 text-foreground">
                <div className="whitespace-pre-wrap leading-relaxed">
                  {article.content}
                </div>
              </div>

              <div className="bg-muted/50 rounded-2xl p-8 mt-16">
                <h3 className="text-2xl font-semibold mb-4">Need personalized advice?</h3>
                <p className="text-muted-foreground mb-6">
                  Every visa application is unique. Get expert guidance tailored to your specific situation.
                </p>
                <GetHelpForm title="Contact an Expert" description="" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ArticlePage;