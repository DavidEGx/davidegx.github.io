const CACHE_NAME = "carcassonne-sandbox-d47f1b3cb0a6";
const CACHE_PREFIX = "carcassonne-sandbox-";
const OPTIONAL_CACHE_MESSAGE = "CACHE_OPTIONAL_ASSETS";
const CRITICAL_CACHE_URLS = [
  "/",
  "/assets/app-Be7XUqdY.css",
  "/assets/app-COjybk39.js"
];
const OPTIONAL_CACHE_URLS = [
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
  "/images/workspace-preview.png",
  "/licenses/THIRD_PARTY_NOTICES.txt",
  "/public-pages.css",
  "/tournament-icons/cs_liga.webp",
  "/tournament-icons/devir.webp",
  "/tournament-icons/world-championship.webp",
  "/assets/about-ByZ0jlx7.js",
  "/assets/congruent_outline-DLlWotqQ.png",
  "/assets/connectwork-Dt1QCw5a.png",
  "/assets/cork-board-BNsy9H8U.png",
  "/assets/dark-grey-terrazzo-DmMAk_vc.png",
  "/assets/dark-triangles-DhugQ2Dw.png",
  "/assets/denim-C6eQYlav.png",
  "/assets/double-bubble-dark-B53eXaiL.webp",
  "/assets/grey_wash_wall-8yyRqWx-.png",
  "/assets/landing-B0Isz5Yf.js",
  "/assets/landing-C0t3xtlj.css",
  "/assets/low_contrast_linen-ROoHiSHb.png",
  "/assets/manifest-_Rm2g74H.json",
  "/assets/meeples_outline-Cbc1skf0.webp",
  "/assets/moroccan-flower-dark-BEjHxG9j.png",
  "/assets/notFound-ByZ0jlx7.js",
  "/assets/purty_wood-D-XFShmP.png",
  "/assets/retina_wood-Dasm1nPh.png",
  "/assets/SearchPanel-Dg-y1z8M.js",
  "/assets/SearchPanel-DI1DqRPE.css",
  "/assets/tex2res4-Bo-bwDiX.png",
  "/assets/tile_abstractsonne_unsaturated-Bz04CWS6.png",
  "/assets/tile_abstractsonne-DQ5rxeGc.png",
  "/assets/tile_c1-BbU3w6eo.jpg",
  "/assets/tile_c2-tFnhQ6KZ.jpg",
  "/assets/tileable_wood_texture-DMAuHUfI.png",
  "/assets/tournament-navigation-CxFOY7_v.json",
  "/assets/type_01-DwtQm4me.webp",
  "/assets/type_02-cG9GOjdE.webp",
  "/assets/type_03-ByhbabH7.webp",
  "/assets/type_04-D5YFjEiL.webp",
  "/assets/type_05-BscQXkee.webp",
  "/assets/type_06-UAlKqt-6.webp",
  "/assets/type_07-K71GMnT1.webp",
  "/assets/type_08-D3c7VStm.webp",
  "/assets/type_09-DQysQx7P.webp",
  "/assets/type_10-rp7DTRve.webp",
  "/assets/type_12-Coz90hlo.webp",
  "/assets/type_13-BOEarY0_.webp",
  "/assets/type_14-DqW-ruQ7.webp",
  "/assets/type_15-BF6HjTrL.webp",
  "/assets/type_22-CwQAFUiy.webp",
  "/assets/type_23-DdRKJL4Y.webp",
  "/assets/type_24-BjnNZj_Z.webp",
  "/assets/webb-dark-HnmwqEEW.png",
  "/icons/apple-touch-icon.png",
  "/icons/favicon-32.png",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-maskable-512.png"
];
const REUSABLE_CACHE_URLS = [
  "/assets/about-ByZ0jlx7.js",
  "/assets/app-Be7XUqdY.css",
  "/assets/app-COjybk39.js",
  "/assets/congruent_outline-DLlWotqQ.png",
  "/assets/connectwork-Dt1QCw5a.png",
  "/assets/cork-board-BNsy9H8U.png",
  "/assets/dark-grey-terrazzo-DmMAk_vc.png",
  "/assets/dark-triangles-DhugQ2Dw.png",
  "/assets/denim-C6eQYlav.png",
  "/assets/dm-sans-latin-ext-BOFOeGcA.woff2",
  "/assets/dm-sans-latin-Xz1IZZA0.woff2",
  "/assets/double-bubble-dark-B53eXaiL.webp",
  "/assets/grey_wash_wall-8yyRqWx-.png",
  "/assets/landing-B0Isz5Yf.js",
  "/assets/landing-C0t3xtlj.css",
  "/assets/low_contrast_linen-ROoHiSHb.png",
  "/assets/manifest-_Rm2g74H.json",
  "/assets/manrope-cyrillic-Dvxsihut.woff2",
  "/assets/manrope-greek-DL7QRZyv.woff2",
  "/assets/manrope-latin-DHIcAJRg.woff2",
  "/assets/manrope-latin-ext-Ch3YOpNY.woff2",
  "/assets/manrope-vietnamese-usUDDRr7.woff2",
  "/assets/material-symbols-outlined-CeOSsXN5.woff2",
  "/assets/meeples_outline-Cbc1skf0.webp",
  "/assets/moroccan-flower-dark-BEjHxG9j.png",
  "/assets/notFound-ByZ0jlx7.js",
  "/assets/purty_wood-D-XFShmP.png",
  "/assets/retina_wood-Dasm1nPh.png",
  "/assets/SearchPanel-Dg-y1z8M.js",
  "/assets/SearchPanel-DI1DqRPE.css",
  "/assets/tex2res4-Bo-bwDiX.png",
  "/assets/tile_abstractsonne_unsaturated-Bz04CWS6.png",
  "/assets/tile_abstractsonne-DQ5rxeGc.png",
  "/assets/tile_c1-BbU3w6eo.jpg",
  "/assets/tile_c2-tFnhQ6KZ.jpg",
  "/assets/tileable_wood_texture-DMAuHUfI.png",
  "/assets/tiles_first_edition-CcZLkXT6.webp",
  "/assets/tiles_second_edition_low-ChJnQUCG.webp",
  "/assets/tiles_second_edition-7cZU_jU_.webp",
  "/assets/tournament-navigation-CxFOY7_v.json",
  "/assets/type_01-DwtQm4me.webp",
  "/assets/type_02-cG9GOjdE.webp",
  "/assets/type_03-ByhbabH7.webp",
  "/assets/type_04-D5YFjEiL.webp",
  "/assets/type_05-BscQXkee.webp",
  "/assets/type_06-UAlKqt-6.webp",
  "/assets/type_07-K71GMnT1.webp",
  "/assets/type_08-D3c7VStm.webp",
  "/assets/type_09-DQysQx7P.webp",
  "/assets/type_10-rp7DTRve.webp",
  "/assets/type_12-Coz90hlo.webp",
  "/assets/type_13-BOEarY0_.webp",
  "/assets/type_14-DqW-ruQ7.webp",
  "/assets/type_15-BF6HjTrL.webp",
  "/assets/type_22-CwQAFUiy.webp",
  "/assets/type_23-DdRKJL4Y.webp",
  "/assets/type_24-BjnNZj_Z.webp",
  "/assets/webb-dark-HnmwqEEW.png"
];

async function reusePreviousAssets(cache) {
  const previousCacheNames = (await caches.keys()).filter(
    (name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME,
  );
  const previousCaches = await Promise.all(
    previousCacheNames.map((name) => caches.open(name)),
  );

  await Promise.all(
    REUSABLE_CACHE_URLS.map(async (url) => {
      for (const previousCache of previousCaches) {
        const response = await previousCache.match(url);
        if (response) {
          await cache.put(url, response);
          return;
        }
      }
    }),
  );
}

async function cacheCriticalAssets() {
  const cache = await caches.open(CACHE_NAME);
  await reusePreviousAssets(cache);

  await Promise.all(
    CRITICAL_CACHE_URLS.map(async (url) => {
      if (!(await cache.match(url))) {
        await cache.add(url);
      }
    }),
  );
}

self.addEventListener("install", (event) => {
  event.waitUntil(cacheCriticalAssets().then(() => self.skipWaiting()));
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
const pendingAssetRequests = new Map();

async function fetchAndCache(request) {
  const requestUrl =
    typeof request === "string"
      ? new URL(request, self.location.origin).href
      : request.url;
  const pendingRequest = pendingAssetRequests.get(requestUrl);
  if (pendingRequest) {
    return (await pendingRequest).clone();
  }

  const fetchPromise = fetch(request)
    .then(async (response) => {
      if (response.ok || response.type === "opaque") {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }
      return response;
    })
    .finally(() => pendingAssetRequests.delete(requestUrl));

  pendingAssetRequests.set(requestUrl, fetchPromise);
  return (await fetchPromise).clone();
}

async function cacheOptionalAssets() {
  const cache = await caches.open(CACHE_NAME);

  await Promise.all(
    OPTIONAL_CACHE_URLS.map(async (url) => {
      if (await cache.match(url)) return;

      try {
        const response = await fetchAndCache(url);
        await response.body?.cancel();
      } catch {
        // A later page visit will retry assets that could not be cached.
      }
    }),
  );
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

  return fetchAndCache(request);
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
