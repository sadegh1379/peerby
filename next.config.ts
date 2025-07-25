const withPWA = require('next-pwa')({
  dest: 'public'
});

module.exports = withPWA({
  reactStrictMode: true, // Keep this in the top-level configuration

  // Add image domains
  images: {
    domains: ['placehold.co', 'picsum.photos']
  },

  // Other Next.js config options go here...

  // Now configure the PWA settings separately
  pwa: {
    dest: 'public', // The folder where service worker will be generated
    register: true, // Enable service worker registration
    skipWaiting: true // Skip waiting and activate the service worker immediately
  }
});
