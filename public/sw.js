if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"2ecdee2815663916188bba1adeb61d88"},{url:"/_next/static/UdpF6Erez0ow9fYBWb_Le/_buildManifest.js",revision:"2110b171b15cc6487982575a12c6558e"},{url:"/_next/static/UdpF6Erez0ow9fYBWb_Le/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/196-f5619d38e179cb49.js",revision:"UdpF6Erez0ow9fYBWb_Le"},{url:"/_next/static/chunks/203.2b4c1ee4fbe3a7cf.js",revision:"2b4c1ee4fbe3a7cf"},{url:"/_next/static/chunks/218.57a830a2c55ba802.js",revision:"57a830a2c55ba802"},{url:"/_next/static/chunks/4bd1b696-a4a3f5936804f663.js",revision:"UdpF6Erez0ow9fYBWb_Le"},{url:"/_next/static/chunks/517-7afbb4d94e84edfb.js",revision:"UdpF6Erez0ow9fYBWb_Le"},{url:"/_next/static/chunks/606-60388d324c528c09.js",revision:"UdpF6Erez0ow9fYBWb_Le"},{url:"/_next/static/chunks/615-7be20404f44ecf69.js",revision:"UdpF6Erez0ow9fYBWb_Le"},{url:"/_next/static/chunks/746-9a557db300817a00.js",revision:"UdpF6Erez0ow9fYBWb_Le"},{url:"/_next/static/chunks/app/(auth)/login/page-88ffa709c57e5efd.js",revision:"UdpF6Erez0ow9fYBWb_Le"},{url:"/_next/static/chunks/app/(auth)/signup/page-c5aff6ac56bee5bf.js",revision:"UdpF6Erez0ow9fYBWb_Le"},{url:"/_next/static/chunks/app/(protected)/dashboard/page-e1f18880f809379d.js",revision:"UdpF6Erez0ow9fYBWb_Le"},{url:"/_next/static/chunks/app/(protected)/profile/page-f3f45e1f63e07ae4.js",revision:"UdpF6Erez0ow9fYBWb_Le"},{url:"/_next/static/chunks/app/(public)/about/page-be60ab3d87f921cc.js",revision:"UdpF6Erez0ow9fYBWb_Le"},{url:"/_next/static/chunks/app/(public)/terms/page-6e7cde2dc6a575af.js",revision:"UdpF6Erez0ow9fYBWb_Le"},{url:"/_next/static/chunks/app/_not-found/page-f48c61c052a24ed1.js",revision:"UdpF6Erez0ow9fYBWb_Le"},{url:"/_next/static/chunks/app/api/auth/%5B...nextauth%5D/route-b050a1604ec9b96a.js",revision:"UdpF6Erez0ow9fYBWb_Le"},{url:"/_next/static/chunks/app/layout-d600bc831715cc89.js",revision:"UdpF6Erez0ow9fYBWb_Le"},{url:"/_next/static/chunks/app/page-c99deecd7a31e64b.js",revision:"UdpF6Erez0ow9fYBWb_Le"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"UdpF6Erez0ow9fYBWb_Le"},{url:"/_next/static/chunks/main-81a7dcad9ba5abf2.js",revision:"UdpF6Erez0ow9fYBWb_Le"},{url:"/_next/static/chunks/main-app-9fc91bbfaccfd59c.js",revision:"UdpF6Erez0ow9fYBWb_Le"},{url:"/_next/static/chunks/pages/_app-430fec730128923e.js",revision:"UdpF6Erez0ow9fYBWb_Le"},{url:"/_next/static/chunks/pages/_error-2d7241423c4a35ba.js",revision:"UdpF6Erez0ow9fYBWb_Le"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-5a1d654ef0b0653a.js",revision:"UdpF6Erez0ow9fYBWb_Le"},{url:"/_next/static/css/3b64e5a8d074b7de.css",revision:"3b64e5a8d074b7de"},{url:"/assets/fonts/iran-sans.ttf",revision:"e59513c82578df5dafb6b8da951be9b6"},{url:"/assets/fonts/vazir-matn.ttf",revision:"24d05392e628925dcb1722a1f20952d3"},{url:"/assets/fonts/yekan.ttf",revision:"52ce4de2efeeb8b18dcbd379711224f3"},{url:"/assets/icons/icon512_maskable.png",revision:"f62ebd5e73892acfb6425e2752f63bac"},{url:"/assets/icons/icon512_rounded.png",revision:"e1d689a9bd5e3b7aab59533968b603c2"},{url:"/assets/icons/images.png",revision:"6b7a965bd745dae8d7d81584c93cb620"},{url:"/assets/images/home/landing-bg.jpg",revision:"9e6c9dcb0634e03690c5cdd61643e34a"},{url:"/manifest.json",revision:"ad3511137b01dfd90ef9e946faf9c765"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
