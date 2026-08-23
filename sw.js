const CACHE_NAME = "carcassonne-sandbox-5cc717fb48fb";
const CACHE_PREFIX = "carcassonne-sandbox-";
const OPTIONAL_CACHE_MESSAGE = "CACHE_OPTIONAL_ASSETS";
const CRITICAL_CACHE_URLS = [
  "/",
  "/assets/app-CHHmhBlM.css",
  "/assets/app-QzGukU9K.js",
  "/assets/material-symbols-outlined-CeOSsXN5.woff2"
];
const OPTIONAL_CACHE_URLS = [
  "/assets/dm-sans-latin-ext-BOFOeGcA.woff2",
  "/assets/dm-sans-latin-Xz1IZZA0.woff2",
  "/assets/manrope-cyrillic-Dvxsihut.woff2",
  "/assets/manrope-greek-DL7QRZyv.woff2",
  "/assets/manrope-latin-DHIcAJRg.woff2",
  "/assets/manrope-latin-ext-Ch3YOpNY.woff2",
  "/assets/manrope-vietnamese-usUDDRr7.woff2",
  "/images/workspace-preview.jpg",
  "/licenses/THIRD_PARTY_NOTICES.txt",
  "/public-pages.css",
  "/tournament-icons/cs_liga.webp",
  "/tournament-icons/devir.webp",
  "/tournament-icons/world-championship.webp",
  "/assets/about-CdbHPLj7.js",
  "/assets/black-BQzUrISt.png",
  "/assets/black-DXtLqhAO.png",
  "/assets/black-farmer-DhsyBoBB.png",
  "/assets/black-farmer-X0-6SjDV.png",
  "/assets/blue-AFXRLnQh.png",
  "/assets/blue-B0Dyhmp3.png",
  "/assets/blue-farmer-C5uFuI2c.png",
  "/assets/blue-farmer-CzfThVQG.png",
  "/assets/congruent_outline-DLlWotqQ.png",
  "/assets/connectwork-Dt1QCw5a.png",
  "/assets/cork-board-BNsy9H8U.png",
  "/assets/dark-grey-terrazzo-DmMAk_vc.png",
  "/assets/dark-triangles-DhugQ2Dw.png",
  "/assets/denim-C6eQYlav.png",
  "/assets/double-bubble-dark-B53eXaiL.webp",
  "/assets/green-83JFsTrV.png",
  "/assets/green-farmer-CWHbVeFD.png",
  "/assets/green-farmer-OK5-aJ79.png",
  "/assets/green-GmuPf2Hk.png",
  "/assets/grey_wash_wall-8yyRqWx-.png",
  "/assets/landing-BoRZw7LI.css",
  "/assets/landing-DQoigWS9.js",
  "/assets/low_contrast_linen-ROoHiSHb.png",
  "/assets/manifest-DzE7Fo3f.json",
  "/assets/moroccan-flower-dark-BEjHxG9j.png",
  "/assets/notFound-CdbHPLj7.js",
  "/assets/purty_wood-D-XFShmP.png",
  "/assets/red-B9mz31M5.png",
  "/assets/red-BuGBie8f.png",
  "/assets/red-farmer-BNq4WFja.png",
  "/assets/red-farmer-Ck_MVB_z.png",
  "/assets/retina_wood-Dasm1nPh.png",
  "/assets/SearchPanel-CVklQZoE.js",
  "/assets/SearchPanel-DI1DqRPE.css",
  "/assets/tex2res4-Bo-bwDiX.png",
  "/assets/tile_01-DanlrLDJ.webp",
  "/assets/tile_02-CovFDKtX.webp",
  "/assets/tile_03-CMMbMwII.webp",
  "/assets/tile_04-Bgcm2kIy.webp",
  "/assets/tile_05-DFlKfI6C.webp",
  "/assets/tile_06-q-dcZkVM.webp",
  "/assets/tile_07-BRk3C8h_.webp",
  "/assets/tile_08-C6s2VRkr.webp",
  "/assets/tile_09-Cwmtv_Jt.webp",
  "/assets/tile_10-Rrx8j_zU.webp",
  "/assets/tile_11-DYN037zf.webp",
  "/assets/tile_12-Ywzqfw83.webp",
  "/assets/tile_13-C4sZsOzZ.webp",
  "/assets/tile_14-BXjVBdDX.webp",
  "/assets/tile_15-Bk2WKb9a.webp",
  "/assets/tile_16-Ce2jztjH.webp",
  "/assets/tile_17-DDa4_JSL.webp",
  "/assets/tile_18-BEdDe2B3.webp",
  "/assets/tile_19-BlgRlhkQ.webp",
  "/assets/tile_20-7JSs6CrX.webp",
  "/assets/tile_21-DLKzylxJ.webp",
  "/assets/tile_22-BdX4QjlV.webp",
  "/assets/tile_23-Dv0ubvt9.webp",
  "/assets/tile_24-3qyk66WG.webp",
  "/assets/tile_25-BM_0qz84.webp",
  "/assets/tile_26-BIsW0osn.webp",
  "/assets/tile_27-5v_zATOv.webp",
  "/assets/tile_28-BCaIhJhK.webp",
  "/assets/tile_29-DZlg4c9u.webp",
  "/assets/tile_30-C5UbhNGV.webp",
  "/assets/tile_31-BeC9gHsr.webp",
  "/assets/tile_32-DTfBJxHL.webp",
  "/assets/tile_33-DLYfYnYn.webp",
  "/assets/tile_34-1LFaf3Yt.webp",
  "/assets/tile_35-gR05azWx.webp",
  "/assets/tile_36-DXJJchS2.webp",
  "/assets/tile_37-D8exwdWZ.webp",
  "/assets/tile_38-DikGPLQo.webp",
  "/assets/tile_39-kWE13F6c.webp",
  "/assets/tile_40-BIFiKm9W.webp",
  "/assets/tile_41-BMdWwMxR.webp",
  "/assets/tile_42-Bkj_2ABC.webp",
  "/assets/tile_43-DwJL9yXf.webp",
  "/assets/tile_44-CgWqCt7v.webp",
  "/assets/tile_45-DGgE8cXR.webp",
  "/assets/tile_46-B6wSry8s.webp",
  "/assets/tile_47-BDx7i_4F.webp",
  "/assets/tile_48-O36gPP5I.webp",
  "/assets/tile_49-DC2cIr1-.webp",
  "/assets/tile_50-yh4k_gzV.webp",
  "/assets/tile_51-Bt_gJSg9.webp",
  "/assets/tile_52-CXPqAAto.webp",
  "/assets/tile_53-BNQ_DXrB.webp",
  "/assets/tile_54-DTAwvM0i.webp",
  "/assets/tile_55-i1DPDXlo.webp",
  "/assets/tile_56-N2mjXGHA.webp",
  "/assets/tile_57-CCU8il6u.webp",
  "/assets/tile_58-CJ4kdgKy.webp",
  "/assets/tile_59-dcwbY6pp.webp",
  "/assets/tile_60-BtnXiDXG.webp",
  "/assets/tile_61-A0CHVLW4.webp",
  "/assets/tile_62-CQCbh4xN.webp",
  "/assets/tile_63-DclBGLjo.webp",
  "/assets/tile_64-5mVafHSm.webp",
  "/assets/tile_65-BuIE8iEM.webp",
  "/assets/tile_66-HFiq1UJ2.webp",
  "/assets/tile_67-7bNMsvKZ.webp",
  "/assets/tile_68-CUaBgJfr.webp",
  "/assets/tile_69-C2jq_xEq.webp",
  "/assets/tile_70-btGYZtlu.webp",
  "/assets/tile_71-Gt9G7xne.webp",
  "/assets/tile_72-De8y3QTl.webp",
  "/assets/tileable_wood_texture-DMAuHUfI.png",
  "/assets/tournament-navigation-CnMZQy2M.json",
  "/assets/type_01-Dp9y0Itl.webp",
  "/assets/type_01-DwtQm4me.webp",
  "/assets/type_02-B1ZKg2-l.webp",
  "/assets/type_02-cG9GOjdE.webp",
  "/assets/type_03-ByhbabH7.webp",
  "/assets/type_03-KEB8t5Qd.webp",
  "/assets/type_04-BNVKMd5Q.webp",
  "/assets/type_04-D5YFjEiL.webp",
  "/assets/type_05-BscQXkee.webp",
  "/assets/type_05-MQIiUp2O.webp",
  "/assets/type_06-jFcX6cjq.webp",
  "/assets/type_06-UAlKqt-6.webp",
  "/assets/type_07-3uFf2DQ6.webp",
  "/assets/type_07-K71GMnT1.webp",
  "/assets/type_08-D3c7VStm.webp",
  "/assets/type_08-DN2zKF3b.webp",
  "/assets/type_09-DQysQx7P.webp",
  "/assets/type_09-NDyfBHcY.webp",
  "/assets/type_10-DxEjG0i8.webp",
  "/assets/type_10-rp7DTRve.webp",
  "/assets/type_11-BKnQdMB_.webp",
  "/assets/type_12--rO507nd.webp",
  "/assets/type_12-Coz90hlo.webp",
  "/assets/type_13-B1yVnC8-.webp",
  "/assets/type_13-BOEarY0_.webp",
  "/assets/type_14-B7N0NUU_.webp",
  "/assets/type_14-DqW-ruQ7.webp",
  "/assets/type_15-BF6HjTrL.webp",
  "/assets/type_15-C7-U_qcB.webp",
  "/assets/type_16-tUCpoZ99.webp",
  "/assets/type_17-Ch3Tg8cp.webp",
  "/assets/type_18-BxRUeNFT.webp",
  "/assets/type_19-C9j8EBGe.webp",
  "/assets/type_20-C7eahA7u.webp",
  "/assets/type_21-CDQsF0wl.webp",
  "/assets/type_22-CwQAFUiy.webp",
  "/assets/type_22-sy720su6.webp",
  "/assets/type_23-DdRKJL4Y.webp",
  "/assets/type_23-DWcJYdZI.webp",
  "/assets/type_24-BjnNZj_Z.webp",
  "/assets/type_24-mFnmloKN.webp",
  "/assets/webb-dark-HnmwqEEW.png",
  "/assets/yellow-B5x6m-Hs.png",
  "/assets/yellow-CVIGR-OU.png",
  "/assets/yellow-farmer-CweHLCXw.png",
  "/assets/yellow-farmer-DfathmC8.png",
  "/icons/apple-touch-icon.png",
  "/icons/favicon-32.png",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-maskable-512.png"
];
const REUSABLE_CACHE_URLS = [
  "/assets/about-CdbHPLj7.js",
  "/assets/app-CHHmhBlM.css",
  "/assets/app-QzGukU9K.js",
  "/assets/black-BQzUrISt.png",
  "/assets/black-DXtLqhAO.png",
  "/assets/black-farmer-DhsyBoBB.png",
  "/assets/black-farmer-X0-6SjDV.png",
  "/assets/blue-AFXRLnQh.png",
  "/assets/blue-B0Dyhmp3.png",
  "/assets/blue-farmer-C5uFuI2c.png",
  "/assets/blue-farmer-CzfThVQG.png",
  "/assets/congruent_outline-DLlWotqQ.png",
  "/assets/connectwork-Dt1QCw5a.png",
  "/assets/cork-board-BNsy9H8U.png",
  "/assets/dark-grey-terrazzo-DmMAk_vc.png",
  "/assets/dark-triangles-DhugQ2Dw.png",
  "/assets/denim-C6eQYlav.png",
  "/assets/dm-sans-latin-ext-BOFOeGcA.woff2",
  "/assets/dm-sans-latin-Xz1IZZA0.woff2",
  "/assets/double-bubble-dark-B53eXaiL.webp",
  "/assets/green-83JFsTrV.png",
  "/assets/green-farmer-CWHbVeFD.png",
  "/assets/green-farmer-OK5-aJ79.png",
  "/assets/green-GmuPf2Hk.png",
  "/assets/grey_wash_wall-8yyRqWx-.png",
  "/assets/landing-BoRZw7LI.css",
  "/assets/landing-DQoigWS9.js",
  "/assets/low_contrast_linen-ROoHiSHb.png",
  "/assets/manifest-DzE7Fo3f.json",
  "/assets/manrope-cyrillic-Dvxsihut.woff2",
  "/assets/manrope-greek-DL7QRZyv.woff2",
  "/assets/manrope-latin-DHIcAJRg.woff2",
  "/assets/manrope-latin-ext-Ch3YOpNY.woff2",
  "/assets/manrope-vietnamese-usUDDRr7.woff2",
  "/assets/material-symbols-outlined-CeOSsXN5.woff2",
  "/assets/moroccan-flower-dark-BEjHxG9j.png",
  "/assets/notFound-CdbHPLj7.js",
  "/assets/purty_wood-D-XFShmP.png",
  "/assets/red-B9mz31M5.png",
  "/assets/red-BuGBie8f.png",
  "/assets/red-farmer-BNq4WFja.png",
  "/assets/red-farmer-Ck_MVB_z.png",
  "/assets/retina_wood-Dasm1nPh.png",
  "/assets/SearchPanel-CVklQZoE.js",
  "/assets/SearchPanel-DI1DqRPE.css",
  "/assets/tex2res4-Bo-bwDiX.png",
  "/assets/tile_01-DanlrLDJ.webp",
  "/assets/tile_02-CovFDKtX.webp",
  "/assets/tile_03-CMMbMwII.webp",
  "/assets/tile_04-Bgcm2kIy.webp",
  "/assets/tile_05-DFlKfI6C.webp",
  "/assets/tile_06-q-dcZkVM.webp",
  "/assets/tile_07-BRk3C8h_.webp",
  "/assets/tile_08-C6s2VRkr.webp",
  "/assets/tile_09-Cwmtv_Jt.webp",
  "/assets/tile_10-Rrx8j_zU.webp",
  "/assets/tile_11-DYN037zf.webp",
  "/assets/tile_12-Ywzqfw83.webp",
  "/assets/tile_13-C4sZsOzZ.webp",
  "/assets/tile_14-BXjVBdDX.webp",
  "/assets/tile_15-Bk2WKb9a.webp",
  "/assets/tile_16-Ce2jztjH.webp",
  "/assets/tile_17-DDa4_JSL.webp",
  "/assets/tile_18-BEdDe2B3.webp",
  "/assets/tile_19-BlgRlhkQ.webp",
  "/assets/tile_20-7JSs6CrX.webp",
  "/assets/tile_21-DLKzylxJ.webp",
  "/assets/tile_22-BdX4QjlV.webp",
  "/assets/tile_23-Dv0ubvt9.webp",
  "/assets/tile_24-3qyk66WG.webp",
  "/assets/tile_25-BM_0qz84.webp",
  "/assets/tile_26-BIsW0osn.webp",
  "/assets/tile_27-5v_zATOv.webp",
  "/assets/tile_28-BCaIhJhK.webp",
  "/assets/tile_29-DZlg4c9u.webp",
  "/assets/tile_30-C5UbhNGV.webp",
  "/assets/tile_31-BeC9gHsr.webp",
  "/assets/tile_32-DTfBJxHL.webp",
  "/assets/tile_33-DLYfYnYn.webp",
  "/assets/tile_34-1LFaf3Yt.webp",
  "/assets/tile_35-gR05azWx.webp",
  "/assets/tile_36-DXJJchS2.webp",
  "/assets/tile_37-D8exwdWZ.webp",
  "/assets/tile_38-DikGPLQo.webp",
  "/assets/tile_39-kWE13F6c.webp",
  "/assets/tile_40-BIFiKm9W.webp",
  "/assets/tile_41-BMdWwMxR.webp",
  "/assets/tile_42-Bkj_2ABC.webp",
  "/assets/tile_43-DwJL9yXf.webp",
  "/assets/tile_44-CgWqCt7v.webp",
  "/assets/tile_45-DGgE8cXR.webp",
  "/assets/tile_46-B6wSry8s.webp",
  "/assets/tile_47-BDx7i_4F.webp",
  "/assets/tile_48-O36gPP5I.webp",
  "/assets/tile_49-DC2cIr1-.webp",
  "/assets/tile_50-yh4k_gzV.webp",
  "/assets/tile_51-Bt_gJSg9.webp",
  "/assets/tile_52-CXPqAAto.webp",
  "/assets/tile_53-BNQ_DXrB.webp",
  "/assets/tile_54-DTAwvM0i.webp",
  "/assets/tile_55-i1DPDXlo.webp",
  "/assets/tile_56-N2mjXGHA.webp",
  "/assets/tile_57-CCU8il6u.webp",
  "/assets/tile_58-CJ4kdgKy.webp",
  "/assets/tile_59-dcwbY6pp.webp",
  "/assets/tile_60-BtnXiDXG.webp",
  "/assets/tile_61-A0CHVLW4.webp",
  "/assets/tile_62-CQCbh4xN.webp",
  "/assets/tile_63-DclBGLjo.webp",
  "/assets/tile_64-5mVafHSm.webp",
  "/assets/tile_65-BuIE8iEM.webp",
  "/assets/tile_66-HFiq1UJ2.webp",
  "/assets/tile_67-7bNMsvKZ.webp",
  "/assets/tile_68-CUaBgJfr.webp",
  "/assets/tile_69-C2jq_xEq.webp",
  "/assets/tile_70-btGYZtlu.webp",
  "/assets/tile_71-Gt9G7xne.webp",
  "/assets/tile_72-De8y3QTl.webp",
  "/assets/tileable_wood_texture-DMAuHUfI.png",
  "/assets/tournament-navigation-CnMZQy2M.json",
  "/assets/type_01-Dp9y0Itl.webp",
  "/assets/type_01-DwtQm4me.webp",
  "/assets/type_02-B1ZKg2-l.webp",
  "/assets/type_02-cG9GOjdE.webp",
  "/assets/type_03-ByhbabH7.webp",
  "/assets/type_03-KEB8t5Qd.webp",
  "/assets/type_04-BNVKMd5Q.webp",
  "/assets/type_04-D5YFjEiL.webp",
  "/assets/type_05-BscQXkee.webp",
  "/assets/type_05-MQIiUp2O.webp",
  "/assets/type_06-jFcX6cjq.webp",
  "/assets/type_06-UAlKqt-6.webp",
  "/assets/type_07-3uFf2DQ6.webp",
  "/assets/type_07-K71GMnT1.webp",
  "/assets/type_08-D3c7VStm.webp",
  "/assets/type_08-DN2zKF3b.webp",
  "/assets/type_09-DQysQx7P.webp",
  "/assets/type_09-NDyfBHcY.webp",
  "/assets/type_10-DxEjG0i8.webp",
  "/assets/type_10-rp7DTRve.webp",
  "/assets/type_11-BKnQdMB_.webp",
  "/assets/type_12--rO507nd.webp",
  "/assets/type_12-Coz90hlo.webp",
  "/assets/type_13-B1yVnC8-.webp",
  "/assets/type_13-BOEarY0_.webp",
  "/assets/type_14-B7N0NUU_.webp",
  "/assets/type_14-DqW-ruQ7.webp",
  "/assets/type_15-BF6HjTrL.webp",
  "/assets/type_15-C7-U_qcB.webp",
  "/assets/type_16-tUCpoZ99.webp",
  "/assets/type_17-Ch3Tg8cp.webp",
  "/assets/type_18-BxRUeNFT.webp",
  "/assets/type_19-C9j8EBGe.webp",
  "/assets/type_20-C7eahA7u.webp",
  "/assets/type_21-CDQsF0wl.webp",
  "/assets/type_22-CwQAFUiy.webp",
  "/assets/type_22-sy720su6.webp",
  "/assets/type_23-DdRKJL4Y.webp",
  "/assets/type_23-DWcJYdZI.webp",
  "/assets/type_24-BjnNZj_Z.webp",
  "/assets/type_24-mFnmloKN.webp",
  "/assets/webb-dark-HnmwqEEW.png",
  "/assets/yellow-B5x6m-Hs.png",
  "/assets/yellow-CVIGR-OU.png",
  "/assets/yellow-farmer-CweHLCXw.png",
  "/assets/yellow-farmer-DfathmC8.png"
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
