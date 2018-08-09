/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "179f1d9fe1618d6bba288c04492da5c6"
  },
  {
    "url": "MaterialIcons-Regular.130eebfa.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "MaterialIcons-Regular.4247c3c0.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "MaterialIcons-Regular.6706b985.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "MaterialIcons-Regular.97bfb0f0.eot",
    "revision": "e79bfd88537def476913f3ed52f4f4b3"
  },
  {
    "url": "src.620c921b.css",
    "revision": "5dfde4bd0ebd8c5b20a9465258ff4540"
  },
  {
    "url": "src.620c921b.js",
    "revision": "94224852dd554261e0619d62e3f9867e"
  },
  {
    "url": "src.6c9e3c4c.css",
    "revision": "94288b0e8fae3f0b686ce24f29d116bd"
  },
  {
    "url": "src.6c9e3c4c.js",
    "revision": "1183795e24f780d7de89612b43f47c1f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
