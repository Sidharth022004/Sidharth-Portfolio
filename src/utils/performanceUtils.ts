// Performance utility functions

export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = async (sources: string[]): Promise<void[]> => {
  return Promise.all(sources.map(preloadImage));
};

export const getWebVitals = (): Promise<any> => {
  return new Promise((resolve) => {
    // Web vitals temporarily disabled - would require web-vitals package
    resolve({});
  });
};

export const optimizeImages = (images: NodeListOf<HTMLImageElement>) => {
  images.forEach((img) => {
    // Add loading="lazy" if not already present
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Add decoding="async" for better performance
    if (!img.hasAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }
    
    // Add proper alt text if missing
    if (!img.hasAttribute('alt')) {
      img.setAttribute('alt', '');
    }
  });
};

export const removeUnusedCSS = () => {
  // This is a simplified version - in production, use PurgeCSS or similar
  const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
  const usedSelectors = new Set<string>();
  
  // Collect all used CSS selectors
  document.querySelectorAll('*').forEach((element) => {
    if (element.className) {
      element.className.split(' ').forEach((className) => {
        if (className.trim()) {
          usedSelectors.add(`.${className.trim()}`);
        }
      });
    }
  });
  
  // Log unused selectors (in production, remove them)
  console.log('Used CSS selectors:', usedSelectors.size);
};

export const enableServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered:', registration);
    } catch (error) {
      console.log('Service Worker registration failed:', error);
    }
  }
};