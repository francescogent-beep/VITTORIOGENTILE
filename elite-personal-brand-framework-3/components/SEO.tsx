import React, { useEffect } from 'react';
import { SEOData } from '../types.ts';

interface SEOProps extends SEOData {
  canonical?: string;
  type?: 'Person' | 'Service' | 'WebPage' | 'Course' | 'Blog';
  serviceData?: any;
  slug?: string;
  category?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, lang, type = 'WebPage', serviceData, slug, category }) => {
  useEffect(() => {
    document.title = `${title} | Vittorio Gentile`;
    
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) || 
                    document.querySelector(`meta[property="${name}"]`);
      if (element) {
        element.setAttribute('content', content);
      }
    };

    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);
    updateMeta('og:title', title);
    updateMeta('og:description', description);
    updateMeta('og:locale', lang === 'it' ? 'it_IT' : 'en_GB');

    let schemas: any[] = [];
    const origin = window.location.origin;

    // 1. Person Schema (Permanent Identity)
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${origin}/#person`,
      "name": "Vittorio Gentile",
      "jobTitle": lang === 'it' ? "Sommelier Internazionale & Wine Educator" : "International Sommelier & Wine Educator",
      "url": origin,
      "description": "International Sommelier, WSET Educator, and Hospitality Consultant specialized in luxury wine programs and ROI optimization.",
      "sameAs": [
        "https://www.linkedin.com/in/vittorio-gentile",
        "https://www.instagram.com/vittorio_gentile_wine"
      ],
      "knowsAbout": ["Sommellerie", "Viticulture", "Hospitality Management", "Wine Sourcing", "Wine ROI", "Menu Engineering"]
    });

    // 2. WebSite Schema (Homepage only)
    if (window.location.pathname === '/' || window.location.hash === '#/') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Vittorio Gentile",
        "url": origin,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${origin}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      });
    }

    // 3. Breadcrumb Schema (Improved)
    const breadcrumbList: any = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": origin
        }
      ]
    };

    const path = window.location.hash.replace('#', '') || window.location.pathname;
    if (path !== '/' && path !== '') {
      const segments = path.split('/').filter(Boolean);
      segments.forEach((seg, i) => {
        breadcrumbList.itemListElement.push({
          "@type": "ListItem",
          "position": i + 2,
          "name": seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, ' '),
          "item": `${origin}/#${path.split('/').slice(0, i+2).join('/')}`
        });
      });
    }
    schemas.push(breadcrumbList);

    // 4. Specific Content Schemas
    if (type === 'Service' && serviceData) {
      const isEducation = category === 'Education';
      
      const mainSchema: any = {
        "@context": "https://schema.org",
        "@type": isEducation ? "Course" : "Service",
        "name": serviceData.title,
        "provider": { "@id": `${origin}/#person` },
        "description": serviceData.description,
        "areaServed": "Worldwide"
      };

      if (isEducation) {
        mainSchema.educationalLevel = "Professional / Advanced";
      }

      schemas.push(mainSchema);

      if (serviceData.faqs?.length > 0) {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": serviceData.faqs.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
          }))
        });
      }
    }

    if (type === 'Blog') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Vittorio Gentile Insights",
        "description": "Professional wine business and hospitality insights.",
        "publisher": { "@id": `${origin}/#person` }
      });
    }

    let script = document.getElementById('json-ld') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'json-ld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.innerHTML = JSON.stringify(schemas);

  }, [title, description, keywords, lang, type, serviceData, slug, category]);

  return null;
};

export default SEO;