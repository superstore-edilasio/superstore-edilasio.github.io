importScripts('workbox-sw.prod.v2.1.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "b4231ba337dba99b2bb636d5cb031120"
  },
  {
    "url": "main.d6d709a4b9687c0ff1c5.js",
    "revision": "1d3ce0c1ecb2fe86ccfc9a6834e0e65b"
  },
  {
    "url": "polyfills.1dba77038a318672db5a.js",
    "revision": "089cc9dec2cd5a8925ff73488c768a96"
  },
  {
    "url": "runtime.a66f828dca56eeb90e02.js",
    "revision": "f2c1a0d5e113c332e6bbe7887eb378b2"
  },
  {
    "url": "styles.adb9ad20d436f5f11a39.css",
    "revision": "c41239d13cfd78b3a65b4f432e77e859"
  },
  {
    "url": "assets/avatar.png",
    "revision": "bda9b390221c6fd0e98869cca64cfa25"
  },
  {
    "url": "assets/sda-control.svg",
    "revision": "7c6ac1a4d214dad88548deb55572c2a3"
  },
  {
    "url": "assets/super-store.svg",
    "revision": "8df0df15b5f843c322ac92e58e34fcce"
  },
  {
    "url": "assets/games/binoculars-clipart.png",
    "revision": "2ccfa7dbeb0cf3d59c6bfc542a05156c"
  },
  {
    "url": "assets/games/bomber.jpg",
    "revision": "67f015d95e34cac5a6825f631f93d5ab"
  },
  {
    "url": "assets/games/captain.jpg",
    "revision": "592fadaed0f6733746e9b80cf22afd54"
  },
  {
    "url": "assets/games/cdino.jpg",
    "revision": "87d760122ce51d7184c8390f7a903b76"
  },
  {
    "url": "assets/games/cdino.png",
    "revision": "20633b39dd474e3dc772140c395e94e1"
  },
  {
    "url": "assets/games/chrono.jpg",
    "revision": "264b20e089d012a60fe6fd8d56db39c9"
  },
  {
    "url": "assets/games/diablo.png",
    "revision": "b03f2b619e1310360e396962d6113da6"
  },
  {
    "url": "assets/games/dk.png",
    "revision": "1bba50e42074af1022693d8eca6097a5"
  },
  {
    "url": "assets/games/doom.jpg",
    "revision": "9a05edef5bddf21d7947c89c5228bfda"
  },
  {
    "url": "assets/games/final-fight.jpg",
    "revision": "09df5c429e9f36d36cd1fd71d650aee0"
  },
  {
    "url": "assets/games/fzero.jpg",
    "revision": "32f24b1f5432b269b22c006355c8b1b7"
  },
  {
    "url": "assets/games/ga.jpg",
    "revision": "fccc5a7b7c538c65e9fc5cc0f97e9066"
  },
  {
    "url": "assets/games/goof.jpg",
    "revision": "2a760df9971819a9611cddce6b8b1669"
  },
  {
    "url": "assets/games/ki.jpg",
    "revision": "4a13e237ac8cdddb49d697f1c9a6b549"
  },
  {
    "url": "assets/games/mario.jpg",
    "revision": "8696e995a1b0c46c204100681cd226dc"
  },
  {
    "url": "assets/games/megaman.png",
    "revision": "d946b148aa9b3fb6315637cf3519cc8c"
  },
  {
    "url": "assets/games/metal-gear.jpg",
    "revision": "565b0089d685460efa8a72c9f9906f3a"
  },
  {
    "url": "assets/games/mortal-kombat.jpg",
    "revision": "df65bfd138fcd7c1eba21a3f1956f726"
  },
  {
    "url": "assets/games/pokemon.jpg",
    "revision": "fae1fd896b0582e85e3fe172cf6a9958"
  },
  {
    "url": "assets/games/rock.jpg",
    "revision": "591393a6f05b59c4182c52f715df0522"
  },
  {
    "url": "assets/games/sm.jpg",
    "revision": "ad557288cd1ccffd90eb37ccf9a4791c"
  },
  {
    "url": "assets/games/sonic2.jpg",
    "revision": "d7d9fe347286f357774a4fe5bf556199"
  },
  {
    "url": "assets/games/street-fighter.jpg",
    "revision": "ededc61895683e62a556814cd86015ff"
  },
  {
    "url": "assets/games/sunset.png",
    "revision": "4b495723631c1a08b62e639119ae2c47"
  },
  {
    "url": "assets/games/tomb.jpg",
    "revision": "744007e9e1830d3eb042b86f65645849"
  },
  {
    "url": "assets/games/topgear.jpg",
    "revision": "0559335f257af6d2a20d09986a43974b"
  },
  {
    "url": "assets/games/zelda.png",
    "revision": "fdaeb375d087b7065c12fa8c109c033f"
  },
  {
    "url": "manifest.json",
    "revision": "c13c50e6ae7e3765e05a736bde790b76"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
