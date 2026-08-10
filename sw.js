const CACHE_NAME = "carcassonne-sandbox-b5edb05df2e2";
const CACHE_PREFIX = "carcassonne-sandbox-";
const OPTIONAL_CACHE_MESSAGE = "CACHE_OPTIONAL_ASSETS";
const CRITICAL_CACHE_URLS = [
  "/",
  "/assets/about-ByZ0jlx7.js",
  "/assets/app-DTLSsPpP.js",
  "/assets/app-Dw1xSmiu.css",
  "/assets/landing-B0Isz5Yf.js",
  "/assets/landing-C0t3xtlj.css",
  "/assets/notFound-ByZ0jlx7.js"
];
const OPTIONAL_CACHE_URLS = [
  "/assets/tiles_abstractsonne-DwFaxU_L.webp",
  "/assets/tiles_first_edition-CcZLkXT6.webp",
  "/assets/tiles_second_edition_low-ChJnQUCG.webp",
  "/assets/tiles_second_edition-7cZU_jU_.webp",
  "/assets/dm-sans-latin-ext-BOFOeGcA.woff2",
  "/assets/dm-sans-latin-Xz1IZZA0.woff2",
  "/assets/manrope-cyrillic-Dvxsihut.woff2",
  "/assets/manrope-greek-DL7QRZyv.woff2",
  "/assets/manrope-latin-DHIcAJRg.woff2",
  "/assets/manrope-latin-ext-Ch3YOpNY.woff2",
  "/assets/manrope-vietnamese-usUDDRr7.woff2",
  "/assets/material-symbols-outlined-CeOSsXN5.woff2",
  "/assets/congruent_outline-DLlWotqQ.png",
  "/assets/connectwork-Dt1QCw5a.png",
  "/assets/cork-board-BNsy9H8U.png",
  "/assets/dark-grey-terrazzo-DmMAk_vc.png",
  "/assets/dark-triangles-DhugQ2Dw.png",
  "/assets/denim-C6eQYlav.png",
  "/assets/double-bubble-dark-B53eXaiL.webp",
  "/assets/grey_wash_wall-8yyRqWx-.png",
  "/assets/low_contrast_linen-ROoHiSHb.png",
  "/assets/manifest-_Rm2g74H.json",
  "/assets/meeples_outline-Cbc1skf0.webp",
  "/assets/moroccan-flower-dark-BEjHxG9j.png",
  "/assets/purty_wood-D-XFShmP.png",
  "/assets/retina_wood-Dasm1nPh.png",
  "/assets/SearchPanel-CphBvLyd.js",
  "/assets/SearchPanel-DI1DqRPE.css",
  "/assets/tex2res4-Bo-bwDiX.png",
  "/assets/theme_dark-rmdpsR-r.png",
  "/assets/theme_light-BRbXdTlW.png",
  "/assets/tile_abstractsonne_unsaturated-Bz04CWS6.png",
  "/assets/tile_abstractsonne-DQ5rxeGc.png",
  "/assets/tile_c1-BbU3w6eo.jpg",
  "/assets/tile_c2-tFnhQ6KZ.jpg",
  "/assets/tileable_wood_texture-DMAuHUfI.png",
  "/assets/tournament-navigation-DxNzVdsI.json",
  "/assets/webb-dark-HnmwqEEW.png",
  "/icons/apple-touch-icon.png",
  "/icons/favicon-32.png",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-maskable-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(CRITICAL_CACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) =>
        Promise.all(
          names
            .filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
            .map((name) => caches.delete(name)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

let optionalCachePromise;

async function cacheOptionalAssets() {
  const cache = await caches.open(CACHE_NAME);

  for (const url of OPTIONAL_CACHE_URLS) {
    if (await cache.match(url)) continue;

    try {
      const response = await fetch(url);
      if (response.ok || response.type === "opaque") {
        await cache.put(url, response);
      }
    } catch {
      // A later page visit will retry assets that could not be cached.
    }
  }
}

function cacheOptionalAssetsOnce() {
  if (!optionalCachePromise) {
    optionalCachePromise = cacheOptionalAssets().finally(() => {
      optionalCachePromise = undefined;
    });
  }
  return optionalCachePromise;
}

self.addEventListener("message", (event) => {
  if (event.data?.type !== OPTIONAL_CACHE_MESSAGE) return;
  event.waitUntil(cacheOptionalAssetsOnce());
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  if (response.ok || response.type === "opaque") {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response.clone());
  }
  return response;
}

async function appShell(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put("/", response.clone());
    }
    return response;
  } catch {
    return (await caches.match("/")) || Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin === self.location.origin && url.pathname.startsWith("/api/")) {
    return;
  }

  if (request.mode === "navigate") {
    if (url.pathname !== "/") return;
    event.respondWith(appShell(request));
    return;
  }

  if (
    url.origin === self.location.origin ||
    request.destination === "font" ||
    request.destination === "style"
  ) {
    event.respondWith(cacheFirst(request));
  }
});
