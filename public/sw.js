if (!self.define) {
  let e,
    s = {};
  const n = (n, a) => (
    (n = new URL(n + ".js", a).href),
    s[n] ||
      new Promise(s => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, i) => {
    const c = e || ("document" in self ? document.currentScript.src : "") || location.href;
    if (s[c]) return;
    let t = {};
    const r = e => n(e, c),
      o = { module: { uri: c }, exports: t, require: r };
    s[c] = Promise.all(a.map(e => o[e] || r(e))).then(e => (i(...e), t));
  };
}
define(["./workbox-4754cb34"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/_next/app-build-manifest.json", revision: "a500d145c6fcd9ab6976742881a20a03" },
        {
          url: "/_next/static/RW26k9GHLbunglCciFVyD/_buildManifest.js",
          revision: "79ea5a6a3ed2a6fe76775ca588bc4b26",
        },
        {
          url: "/_next/static/RW26k9GHLbunglCciFVyD/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        { url: "/_next/static/chunks/203.2b4c1ee4fbe3a7cf.js", revision: "2b4c1ee4fbe3a7cf" },
        { url: "/_next/static/chunks/218.384013fc6869a41c.js", revision: "384013fc6869a41c" },
        { url: "/_next/static/chunks/40-43fb4711fe9fdda3.js", revision: "RW26k9GHLbunglCciFVyD" },
        { url: "/_next/static/chunks/4bd1b696-e86c14c66e34e8a1.js", revision: "RW26k9GHLbunglCciFVyD" },
        { url: "/_next/static/chunks/517-d9d2650e56ea41b9.js", revision: "RW26k9GHLbunglCciFVyD" },
        { url: "/_next/static/chunks/615-92d969ba608d92b6.js", revision: "RW26k9GHLbunglCciFVyD" },
        {
          url: "/_next/static/chunks/app/(auth)/login/page-4d56bc6e471d2b73.js",
          revision: "RW26k9GHLbunglCciFVyD",
        },
        {
          url: "/_next/static/chunks/app/(auth)/signup/page-c5aff6ac56bee5bf.js",
          revision: "RW26k9GHLbunglCciFVyD",
        },
        {
          url: "/_next/static/chunks/app/(protected)/dashboard/page-445501d8c4f39c45.js",
          revision: "RW26k9GHLbunglCciFVyD",
        },
        {
          url: "/_next/static/chunks/app/(protected)/profile/page-f3f45e1f63e07ae4.js",
          revision: "RW26k9GHLbunglCciFVyD",
        },
        {
          url: "/_next/static/chunks/app/(public)/about/page-be60ab3d87f921cc.js",
          revision: "RW26k9GHLbunglCciFVyD",
        },
        {
          url: "/_next/static/chunks/app/(public)/terms/page-6e7cde2dc6a575af.js",
          revision: "RW26k9GHLbunglCciFVyD",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-478ce1389bf8b881.js",
          revision: "RW26k9GHLbunglCciFVyD",
        },
        {
          url: "/_next/static/chunks/app/api/auth/%5B...nextauth%5D/route-b050a1604ec9b96a.js",
          revision: "RW26k9GHLbunglCciFVyD",
        },
        {
          url: "/_next/static/chunks/app/layout-def3a3fa33a6ddfe.js",
          revision: "RW26k9GHLbunglCciFVyD",
        },
        { url: "/_next/static/chunks/app/page-4293f35742e551ce.js", revision: "RW26k9GHLbunglCciFVyD" },
        {
          url: "/_next/static/chunks/framework-6b27c2b7aa38af2d.js",
          revision: "RW26k9GHLbunglCciFVyD",
        },
        { url: "/_next/static/chunks/main-81a7dcad9ba5abf2.js", revision: "RW26k9GHLbunglCciFVyD" },
        { url: "/_next/static/chunks/main-app-e9684336598de495.js", revision: "RW26k9GHLbunglCciFVyD" },
        {
          url: "/_next/static/chunks/pages/_app-430fec730128923e.js",
          revision: "RW26k9GHLbunglCciFVyD",
        },
        {
          url: "/_next/static/chunks/pages/_error-089246a636860512.js",
          revision: "RW26k9GHLbunglCciFVyD",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        { url: "/_next/static/chunks/webpack-3c00e203a93bd643.js", revision: "RW26k9GHLbunglCciFVyD" },
        { url: "/_next/static/css/0f6de5928985aa16.css", revision: "0f6de5928985aa16" },
        {
          url: "/_next/static/media/569ce4b8f30dc480-s.p.woff2",
          revision: "ef6cefb32024deac234e82f932a95cbd",
        },
        {
          url: "/_next/static/media/747892c23ea88013-s.woff2",
          revision: "a0761690ccf4441ace5cec893b82d4ab",
        },
        {
          url: "/_next/static/media/93f479601ee12b01-s.p.woff2",
          revision: "da83d5f06d825c5ae65b7cca706cb312",
        },
        {
          url: "/_next/static/media/ba015fad6dcf6784-s.woff2",
          revision: "8ea4f719af3312a055caf09f34c89a77",
        },
        { url: "/assets/icons/icon512_maskable.png", revision: "f62ebd5e73892acfb6425e2752f63bac" },
        { url: "/assets/icons/icon512_rounded.png", revision: "e1d689a9bd5e3b7aab59533968b603c2" },
        { url: "/assets/icons/images.png", revision: "6b7a965bd745dae8d7d81584c93cb620" },
        { url: "/file.svg", revision: "d09f95206c3fa0bb9bd9fefabfd0ea71" },
        { url: "/globe.svg", revision: "2aaafa6a49b6563925fe440891e32717" },
        { url: "/manifest.json", revision: "4df2968d7d98d1398e5f4abe39cbda1d" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/vercel.svg", revision: "c0af2f507b369b085b35ef4bbe3bcf1e" },
        { url: "/window.svg", revision: "a2760511c65806022ad20adf74370ff3" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: n, state: a }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, { status: 200, statusText: "OK", headers: s.headers })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      "GET"
    );
});
