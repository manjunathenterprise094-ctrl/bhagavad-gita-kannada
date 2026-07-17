/**
 * Helper utility to dynamically update HTML Meta tags for advanced SEO indexation and social sharing
 */
export function updateMetaTags(
  title: string, 
  description: string, 
  keywords: string = "", 
  ogImage: string = ""
) {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  // 1. Browser Title
  document.title = title;
  
  // 2. Primary Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  // 3. Meta Keywords
  if (keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);
  }

  // 4. OpenGraph URL (Current canonical location)
  const currentUrl = window.location.href;
  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (!ogUrl) {
    ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    document.head.appendChild(ogUrl);
  }
  ogUrl.setAttribute('content', currentUrl);

  // 5. OpenGraph Title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute('content', title);
  
  // 6. OpenGraph Description
  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (!ogDesc) {
    ogDesc = document.createElement('meta');
    ogDesc.setAttribute('property', 'og:description');
    document.head.appendChild(ogDesc);
  }
  ogDesc.setAttribute('content', description);

  // 7. OpenGraph and Twitter Share Image
  const resolvedImage = ogImage || `${window.location.origin}/opengraph.jpg`;
  
  let ogImgElement = document.querySelector('meta[property="og:image"]');
  if (!ogImgElement) {
    ogImgElement = document.createElement('meta');
    ogImgElement.setAttribute('property', 'og:image');
    document.head.appendChild(ogImgElement);
  }
  ogImgElement.setAttribute('content', resolvedImage);

  let twitterImgElement = document.querySelector('meta[name="twitter:image"]');
  if (!twitterImgElement) {
    twitterImgElement = document.createElement('meta');
    twitterImgElement.setAttribute('name', 'twitter:image');
    document.head.appendChild(twitterImgElement);
  }
  twitterImgElement.setAttribute('content', resolvedImage);

  // 8. Twitter Card Metadata
  let twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (!twitterTitle) {
    twitterTitle = document.createElement('meta');
    twitterTitle.setAttribute('name', 'twitter:title');
    document.head.appendChild(twitterTitle);
  }
  twitterTitle.setAttribute('content', title);

  let twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (!twitterDesc) {
    twitterDesc = document.createElement('meta');
    twitterDesc.setAttribute('name', 'twitter:description');
    document.head.appendChild(twitterDesc);
  }
  twitterDesc.setAttribute('content', description);

  // 9. Canonical Link Tag (prevents duplicate page SEO ranking split)
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', currentUrl);
}

