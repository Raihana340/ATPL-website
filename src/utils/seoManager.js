/**
 * Utility for dynamically updating HTML Document Head metadata & SEO tags
 * Supports OpenGraph, Twitter Cards, Canonical URLs, Robots, and Keywords
 */

const setMetaTag = (selector, attributeName, attributeValue, content) => {
  if (typeof document === 'undefined') return;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content || '');
};

const setLinkTag = (rel, href) => {
  if (typeof document === 'undefined') return;
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href || '');
};

export const applyPageSEO = (pageKey, seoData) => {
  if (typeof document === 'undefined' || !seoData) return;

  const globalConfig = seoData.global || {};
  const pagesConfig = seoData.pages || {};
  const currentPage = pagesConfig[pageKey] || pagesConfig.home || {};

  // Compute Full Title
  const siteTitle = currentPage.title || globalConfig.siteName || 'Archery Technocrats';
  document.title = siteTitle;

  // Primary Meta Tags
  setMetaTag('meta[name="title"]', 'name', 'title', siteTitle);
  setMetaTag('meta[name="description"]', 'name', 'description', currentPage.description || '');
  
  const keywordsStr = Array.isArray(currentPage.keywords) 
    ? currentPage.keywords.join(', ') 
    : (currentPage.keywords || '');
  setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywordsStr);
  
  setMetaTag('meta[name="robots"]', 'name', 'robots', currentPage.robots || 'index, follow');

  // Canonical URL
  const canonicalUrl = currentPage.canonical || `${globalConfig.baseUrl || 'https://atplgroup.com'}${currentPage.route || '/'}`;
  setLinkTag('canonical', canonicalUrl);

  // Open Graph
  const ogTitle = currentPage.ogTitle || siteTitle;
  const ogDescription = currentPage.ogDescription || currentPage.description || '';
  const ogImage = currentPage.ogImage || globalConfig.defaultOgImage || 'https://atplgroup.com/og-image.png';

  setMetaTag('meta[property="og:title"]', 'property', 'og:title', ogTitle);
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', ogDescription);
  setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);

  // Twitter Cards
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', ogTitle);
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', ogDescription);
  setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);
  setMetaTag('meta[name="twitter:url"]', 'name', 'twitter:url', canonicalUrl);

  // Verification Tag
  if (globalConfig.googleVerificationCode) {
    setMetaTag('meta[name="google-site-verification"]', 'name', 'google-site-verification', globalConfig.googleVerificationCode);
  }
};

