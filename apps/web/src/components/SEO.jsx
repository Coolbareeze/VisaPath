import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ 
  title, 
  description, 
  canonical = '', 
  schemas = [], 
  ogImage = 'https://images.unsplash.com/photo-1575127537690-af1804d9f6ac?w=1200&h=630&fit=crop' 
}) {
  const siteUrl = 'https://visapath.pk';
  const url = `${siteUrl}${canonical}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="VisaPath.pk" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schemas */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}