import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/lovable-uploads/c45d782c-2e07-41b2-877f-69e24d79b8f8.png',
        '/lovable-uploads/814754c1-29ce-4604-8716-b890594dded3.png',
        '/lovable-uploads/4a7b4553-2938-4dd1-aea7-73733ae61ded.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach(script => {
        if (!script.hasAttribute('async') && !script.hasAttribute('defer')) {
          script.setAttribute('defer', '');
        }
      });
    };

    // Remove unused CSS (basic implementation)
    const removeUnusedCSS = () => {
      // This is a simplified version - in production, use tools like PurgeCSS
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
      stylesheets.forEach(stylesheet => {
        if (stylesheet.getAttribute('href')?.includes('unused')) {
          stylesheet.remove();
        }
      });
    };

    // Implement resource hints
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const domains = ['fonts.googleapis.com', 'fonts.gstatic.com'];
      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });
    };

    // Monitor performance
    const monitorPerformance = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            const metrics = {
              FCP: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
              LCP: 0, // Would need PerformanceObserver for real LCP
              FID: 0, // Would need PerformanceObserver for real FID
              CLS: 0, // Would need PerformanceObserver for real CLS
              TTFB: perfData.responseStart - perfData.requestStart,
              domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
              loadComplete: perfData.loadEventEnd - perfData.loadEventStart
            };

            // Log performance metrics (in production, send to analytics)
            console.log('Performance Metrics:', metrics);
          }, 0);
        });
      }
    };

    // Execute optimizations
    preloadCriticalResources();
    optimizeThirdPartyScripts();
    removeUnusedCSS();
    addResourceHints();
    monitorPerformance();

    // Cleanup function
    return () => {
      // Remove any event listeners or cleanup resources if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;