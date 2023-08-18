'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "26b596a2cf1829fe1c35a03f59d31e5d",
"index.html": "27edbf3526524bf5fe7f8725fef5a5a2",
"/": "27edbf3526524bf5fe7f8725fef5a5a2",
"main.dart.js": "9a47dfe0c36e9ed211c80098956d35e7",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "74d1a9219f53824f7d8947f3abc3120a",
"assets/AssetManifest.json": "02370920893d53235da8da8f050cc42c",
"assets/NOTICES": "0eb98f00af0fdbd7e680d1379da70fa2",
"assets/FontManifest.json": "8cfc2a1a5aeac6c745441960a5928575",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/highend_ui/assets/images/logo.png": "0ebd0000f46a2ee94aac0883412c0a89",
"assets/packages/highend_ui/assets/icons/listing.svg": "b95c00b36d89ebb016b83598353a4d37",
"assets/packages/highend_ui/assets/icons/account.svg": "6c2a60eef5d12175926db1d00fe1b4d9",
"assets/packages/highend_ui/assets/icons/home.svg": "52e79498bdc3bba5544dd2160f6af1e6",
"assets/packages/highend_ui/assets/icons/arrow_up_ios.svg": "e71f165a380e0c57af88680901b9cc11",
"assets/packages/highend_ui/assets/icons/arrow_back.svg": "bf093b09ec42885d923876fd0c63f220",
"assets/packages/highend_ui/assets/icons/facebook_logo.svg": "7f1af444a94a19f8d37886f2c20c377e",
"assets/packages/highend_ui/assets/icons/apple_logo.svg": "5eaaa02c73490ee0c0f9e868c569ccf3",
"assets/packages/highend_ui/assets/icons/cart.svg": "4ed2f5b2b5596a1f54913b01139dcd3a",
"assets/packages/highend_ui/assets/icons/catalog.svg": "a58b71ea645aac7eccc94ca561394fed",
"assets/packages/highend_ui/assets/icons/account_circle.svg": "6cdd74ff233e966046580a1c01cb4132",
"assets/packages/highend_ui/assets/icons/check.svg": "2218003af51e779f6ddc9467a6bad7ca",
"assets/packages/highend_ui/assets/icons/warning.svg": "0a9a06a6c09d67fcf274c5803a8e65f5",
"assets/packages/highend_ui/assets/icons/info.svg": "cbf14a2a8ebca444364b572fe1e8255d",
"assets/packages/highend_ui/assets/icons/arrow_down_ios.svg": "c3c769e1c3b31891b252328fb5f14a15",
"assets/packages/highend_ui/assets/icons/add.svg": "23d1da56c41444aba6d85589c8dda0f9",
"assets/packages/highend_ui/assets/icons/arrow_right_ios.svg": "1a17db86cb6219628418ce65925ec941",
"assets/packages/highend_ui/assets/icons/close.svg": "34dbecfcc1740ba9604f0c5a7b8a2a57",
"assets/packages/highend_ui/assets/icons/image.svg": "e0fd9aec70df913c6cad58a8a0667097",
"assets/packages/highend_ui/assets/icons/favorites.svg": "0ef3876533794f22ca40fb47a4f370d8",
"assets/packages/highend_ui/assets/icons/arrow_back_ios.svg": "ddd833d9399bc3fd6f8cdb3d009f9747",
"assets/packages/highend_ui/assets/icons/edit.svg": "d0847ea29ebe81059e1b5af616e818c1",
"assets/packages/highend_ui/assets/icons/filter_list.svg": "f7bba651d103512e5ea2a15798f43b65",
"assets/packages/highend_ui/assets/icons/sync_alt.svg": "18bdcfda539241982337b32b34e8aa1b",
"assets/packages/highend_ui/assets/icons/google_logo.svg": "becf09905a072dba5dfb897cc29b985d",
"assets/packages/highend_ui/assets/icons/upload.svg": "3c5837dde85469701c034c93f0eaa6ce",
"assets/packages/highend_ui/assets/icons/menu.svg": "6b9137a7e8f6776014626de2bc557a2a",
"assets/packages/highend_ui/assets/icons/heart.svg": "1b7d685d88aede356fa9b28e78cf52d1",
"assets/packages/highend_ui/assets/fonts/Playfair/PlayfairDisplay-Bold.ttf": "48ebb38b5445196e567f948e132230ca",
"assets/packages/highend_ui/assets/fonts/Playfair/PlayfairDisplay-Medium.ttf": "0f3ea302305126e3d1e2112920c4ff85",
"assets/packages/highend_ui/assets/fonts/Playfair/PlayfairDisplay-Regular.ttf": "a96ecd13655587d30a21265c547cd8aa",
"assets/packages/highend_ui/assets/fonts/Satoshi/Satoshi-Bold.otf": "4a6fdcfc68ad464e8a9811e4edcacf00",
"assets/packages/highend_ui/assets/fonts/Satoshi/Satoshi-Regular.otf": "177a4dda04b52dedbd966942e932c5dc",
"assets/packages/highend_ui/assets/fonts/Satoshi/Satoshi-Medium.otf": "378def5c1f4df7eb6554a88608893391",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "8bfe281f6da864bd184f59fb63c36bc2",
"assets/fonts/MaterialIcons-Regular.otf": "b191b3d0ee98eef5de2cdacf58f30920",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
