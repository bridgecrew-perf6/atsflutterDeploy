'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "251c0a05b1794455c350f77d1cd38fda",
"assets/video/SnowBoundHemlock.mp4": "18927bcbe4cea390fd6ac9172f1e6b9d",
"assets/video/TopOut.mp4": "987baa562558479b9cdbe6b733b8a867",
"assets/video/SmallRigOut.mp4": "5cdac505dc8fea9d6922cf4a08b01816",
"assets/video/BigTreeTopRemoval.mp4": "6df5cf2182ff9b3028cbcb4620f79943",
"assets/video/JustGettingStarted.mp4": "91349bde4b7e481848c7d8903ef191e8",
"assets/video/BigCedarRemoval.mp4": "d6e61aaf11980c70b2ab6537256974d1",
"assets/video/LogDrop.mp4": "d7055d1255bb537212cef29ca62fb04b",
"assets/video/MakeItSnow.mp4": "5707f1cd4d4dd76d822fede581f35952",
"assets/NOTICES": "9ba40e071efbf716f155c7adb67b25ce",
"assets/AssetManifest.json": "1c2d3f62f72b9ae251340b7b5d20c377",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "4789687da0eed067da024f7c82de6e0a",
"assets/images/kitsap.webp": "9084693ff03693c3a74f62abd7e9033a",
"assets/images/smallrigout_overlay.webp": "6301753bc98db2a53372dd4e0a72012b",
"assets/images/cloudflare.webp": "a0e87378a5bd269ec93512fa7d96cd6b",
"assets/images/pierce.webp": "4fa00ac1b7da8f2f6f166e8ac7e2db47",
"assets/images/firebase2.webp": "3c05d58f69eb82dad3da9c1999040bb4",
"assets/images/webp/JustGettingStarted.webp": "2fe244724f5986f8578679a51b97ed5c",
"assets/images/webp/MakeItSnow.webp": "1bd5e4fc341e8fbf67e90370d4d054c4",
"assets/images/webp/SnowBoundHemlock.webp": "119b445bcb63e01e014499af687969e3",
"assets/images/webp/DyingWhitePineRemoval.webp": "471bb297c69df338b66e58b503b88ad1",
"assets/images/webp/BigTreeTopRemoval.webp": "f8875d3b179da0695ac1bd5d89d3b6b5",
"assets/images/webp/BigCedarTreeRemoval.webp": "f54a8b2015d04ab4d43e382494b51611",
"assets/images/mason.webp": "36e4a7f67b3b047bb45c4664eba54eda",
"assets/images/logdrop_overlay.webp": "23c75e7424b460774443a70ed6e45909",
"assets/images/flutter_logo2.webp": "45f2adfe6c05cf372599228f95af79c0",
"assets/images/topout_overlay.webp": "de48f86fe153be046424108ea33326aa",
"assets/images/banner.webp": "257221fa0e9f985cf12504522a4019de",
"assets/images/curt.webp": "43a7b06a5b4e679d537bb7015460e35d",
"assets/images/gallery/landscape/20201121_141826.webp": "1de6ab1215f7b708d99c4bbb69826917",
"assets/images/gallery/landscape/20211022_083103_thumb.webp": "5256e2f120a7efb78545a7adc28aac94",
"assets/images/gallery/landscape/20201121_154747.webp": "9895c96a9f916137ae7c6189e0adbefe",
"assets/images/gallery/landscape/20201121_141845_thumb.webp": "632faf061f9ea0e4af89b07f9255a10d",
"assets/images/gallery/landscape/20211023_111619.webp": "58266ee9fdc24de15ef09099a889853a",
"assets/images/gallery/landscape/20201112_105832.webp": "3541b6e42908464c586d246e8aaf11e1",
"assets/images/gallery/landscape/20201121_141826_thumb.webp": "a5a4ac9b386f2b86d008647ec288a80d",
"assets/images/gallery/landscape/20201121_154747_thumb.webp": "6e67d4488089148d1cef40b1d2e7dbcb",
"assets/images/gallery/landscape/20201112_104620.webp": "62aa92cbd634776c5b91a62b9a710ade",
"assets/images/gallery/landscape/20211023_111607.webp": "e701088c74f890de675fe775be74362f",
"assets/images/gallery/landscape/20201121_141838.webp": "0632e26e0d273c68e4b6af12d0711031",
"assets/images/gallery/landscape/20211023_111619_thumb.webp": "f14ec019eb866bb5530144202f73e7e8",
"assets/images/gallery/landscape/20201112_105838_thumb.webp": "53b2f54c8f2c62c7118c3f53b3fa7216",
"assets/images/gallery/landscape/20201112_105832_thumb.webp": "76207fa765420c921e1f48cf62b4f30a",
"assets/images/gallery/landscape/20211023_111607_thumb.webp": "fd9e09ee6d01301e7fe9cf057ebc4279",
"assets/images/gallery/landscape/20201121_141608_thumb.webp": "9d83ac7f2828ed0953362e4b5bd72589",
"assets/images/gallery/landscape/20210114_141712.webp": "b3e4b210b400117e692e33fd0ed9af51",
"assets/images/gallery/landscape/20201112_104620_thumb.webp": "0df59dedc89a94a15a45e1bce3446817",
"assets/images/gallery/landscape/20201121_141544_thumb.webp": "2d6697a5c050333227712f652506f4f5",
"assets/images/gallery/landscape/20201121_141549.webp": "d198ab1c43643eb16d5237aec2691dcd",
"assets/images/gallery/landscape/20201121_141845.webp": "4319f93b6a4ac7ddfa8ab303db33e417",
"assets/images/gallery/landscape/20210114_140555.webp": "2f597c95d21d1fdad5bf1172d429df06",
"assets/images/gallery/landscape/20201112_105838.webp": "b0c7016500b9ec4e6cdf875b70d2f364",
"assets/images/gallery/landscape/20200520_143645.webp": "ca9871b2b592c9abbcbaee7c6f552347",
"assets/images/gallery/landscape/20201121_141838_thumb.webp": "ce220f005fe650bc41db6321b0e2051e",
"assets/images/gallery/landscape/20200520_143645_thumb.webp": "64b917dae8d5ecd3af93ef1735c1c71d",
"assets/images/gallery/landscape/20211022_083103.webp": "1454fd822ca8797564e88e2fa2f03131",
"assets/images/gallery/landscape/20210114_141712_thumb.webp": "5749886e46974c0b2ac339ab6328e04b",
"assets/images/gallery/landscape/20210907_174135.webp": "1f6dc6c78a425a7855a77df2fc8a678b",
"assets/images/gallery/landscape/20201121_141608.webp": "9f8f1a481c9a77d5422055ab22b328e6",
"assets/images/gallery/landscape/20201121_141544.webp": "41318dbfab9103c7337e3b3c274289ad",
"assets/images/gallery/landscape/20201121_154954_thumb.webp": "9717039b72cfaae59d7d86824bd35ea4",
"assets/images/gallery/landscape/20201121_141549_thumb.webp": "9cc562a3f15d6af884f4b9b134d104d5",
"assets/images/gallery/landscape/20210907_174135_thumb.webp": "f234501b26252b0ae21c9b2eefae7fb6",
"assets/images/gallery/landscape/20201121_154954.webp": "e621a3a1297e45b6f2d187b2239ba184",
"assets/images/gallery/landscape/20210114_140555_thumb.webp": "d681bba0cb5fb9e0d20319bbbf2cccc7",
"assets/images/gallery/portrait/20201112_103812_thumb.webp": "2bdc3e8a0ff3d15d1b726b33a701835f",
"assets/images/gallery/portrait/20210901_110253.webp": "52ae78c0323d335ccc8083bcb8e39c69",
"assets/images/gallery/portrait/20210114_131804_thumb.webp": "8c4dbab7cfa036e4cbf3695d8d9416b8",
"assets/images/gallery/portrait/20210114_130013.webp": "f32ec864d1d9080de1071297c4a06b68",
"assets/images/gallery/portrait/20210709_084059.webp": "74fb5786ccc6d05ea13975571edf55d8",
"assets/images/gallery/portrait/20210114_140603.webp": "5e9653a0e1d715d4d35e6bb4a9302623",
"assets/images/gallery/portrait/20210728_110344_thumb.webp": "48e590d4af025a279c620e0075c330ee",
"assets/images/gallery/portrait/20210907_161055_thumb.webp": "2f75f8ed492fe17ec4923714ab44748d",
"assets/images/gallery/portrait/20210901_110237_thumb.webp": "727caa938a22ebfd3caf55626c4f12e7",
"assets/images/gallery/portrait/20210907_161053.webp": "9bee009234078832168d34c747cbfa07",
"assets/images/gallery/portrait/20210114_131757.webp": "f3e3437f88961109d028da325d74814e",
"assets/images/gallery/portrait/20210918_112452.webp": "f12ab1077e72cc1370206a9aa4b6a4ad",
"assets/images/gallery/portrait/20210907_161104.webp": "f8b9fa55272d9531f7a01303c1d9b022",
"assets/images/gallery/portrait/20200703_122220_thumb.webp": "3a98f10ade049dbd76561a449ab2a087",
"assets/images/gallery/portrait/20200703_122219.webp": "ab8819176b5bb3ed8774b43a2ac909c1",
"assets/images/gallery/portrait/20201121_142519.webp": "2d8bec214a30294f9289fb67e4ed3fb9",
"assets/images/gallery/portrait/20210918_105132_thumb.webp": "1b2ea4d9fe56a42afe36b25647bbb8a9",
"assets/images/gallery/portrait/20210907_161051_thumb.webp": "81b62bae71bd33d1f89a545aecd9fddf",
"assets/images/gallery/portrait/20201121_142519_thumb.webp": "d49900394adc2d7288dc04c21e73caea",
"assets/images/gallery/portrait/20210901_110253_thumb.webp": "f40a848724bc86c47a426beb2714a075",
"assets/images/gallery/portrait/20210728_110233_thumb.webp": "12c85a0364efc827daced462a719eb61",
"assets/images/gallery/portrait/20210901_110234.webp": "9c9bdca7c621d79a6265a214d38c701c",
"assets/images/gallery/portrait/20201119_100147.webp": "ce834c89b5fecc61d1e9444b38538604",
"assets/images/gallery/portrait/20210901_110629.webp": "0b6e0f1880783153e0213f9682b521f8",
"assets/images/gallery/portrait/20210907_161104_thumb.webp": "3b9ec4d5f3c0f22a793ba5f9ab5362f5",
"assets/images/gallery/portrait/20210907_161053_thumb.webp": "f61e15f914f12073b452776394be18b3",
"assets/images/gallery/portrait/20210918_105132.webp": "2362841ebbda493df8813bf2fa3b8957",
"assets/images/gallery/portrait/20210901_110619_thumb.webp": "91d22c5a357b536c2f763f431f2e1c32",
"assets/images/gallery/portrait/20210114_111858_thumb.webp": "35eeb2881df18ae4913d4c4891588525",
"assets/images/gallery/portrait/20210709_093724.webp": "149f64fb5162a472a26c377ca9bdbd23",
"assets/images/gallery/portrait/20210907_161051.webp": "0f76c79fbc5631cb21667b353be8981f",
"assets/images/gallery/portrait/20210901_110336.webp": "c46c3cb6e765d4d11830e071acc0754e",
"assets/images/gallery/portrait/20201112_120634_thumb.webp": "fbeb37fa227729268973703bb76d5272",
"assets/images/gallery/portrait/20201112_112326_thumb.webp": "2c25f34b78e4dedc0aafeb48d3f5d009",
"assets/images/gallery/portrait/20201112_104612.webp": "2af2591154d6e52324e3cfc300d47f0b",
"assets/images/gallery/portrait/20210918_105104.webp": "fe7d31520c61fc101e2d76eb6ada0e46",
"assets/images/gallery/portrait/20210901_110316.webp": "db0928735b82142b1b508b5a447a6734",
"assets/images/gallery/portrait/20210703_114205_thumb.webp": "ad709f7712cd4b35c76a37104627b4d1",
"assets/images/gallery/portrait/20200703_122216_thumb.webp": "9f02061c8200cff4724964bc464afd38",
"assets/images/gallery/portrait/20200703_122220.webp": "cc17bc0d753ceb1afb337268aaf61579",
"assets/images/gallery/portrait/20201112_120634.webp": "c09d7355f4f9dc9c470089de8e541fc6",
"assets/images/gallery/portrait/20210114_130013_thumb.webp": "20dbd23061bfd4b1c9f6b0bc705f9677",
"assets/images/gallery/portrait/20210901_110629_thumb.webp": "26e10e4bec8c406104dbe1a19f186616",
"assets/images/gallery/portrait/20210114_131809_thumb.webp": "9e3dde89604669236c180ac291255607",
"assets/images/gallery/portrait/20201112_101000.webp": "fa2cb0ac7c141ad0139009e8fd442cdd",
"assets/images/gallery/portrait/20211022_081949_thumb.webp": "2c19f641c7c59ac851da868b940181d4",
"assets/images/gallery/portrait/20201112_112404.webp": "12fc38b0eb558abc93dabfbc16d3802d",
"assets/images/gallery/portrait/20210709_093733.webp": "db00bddcad8b355b7a551aeafd7d6d61",
"assets/images/gallery/portrait/20210114_111902_thumb.webp": "9f48d1a76bebcacb0e82869d0427ec7b",
"assets/images/gallery/portrait/20210709_093733_thumb.webp": "8b6a1baaba3a20137fcde55ec6aebab5",
"assets/images/gallery/portrait/20201112_101000_thumb.webp": "0c835eae265f014e139f141d8aa71088",
"assets/images/gallery/portrait/20210114_144538.webp": "9ed0ea6a6ef5d98e3f3ebd213f28fd43",
"assets/images/gallery/portrait/20210907_161102.webp": "d445bbca3025611cd754c2f05f0fcfd0",
"assets/images/gallery/portrait/20210901_110340_thumb.webp": "c7057a10cd37860d56765481ac3aef97",
"assets/images/gallery/portrait/20210703_114205.webp": "85ea2fe2c6f8ac94c182acbfe1c1fd28",
"assets/images/gallery/portrait/20210114_144538_thumb.webp": "e5c46e1a8803bda98928234fd2c1789e",
"assets/images/gallery/portrait/20210709_093705_thumb.webp": "cb7a7d0fa0f7bfd78ca55e3a2337fc42",
"assets/images/gallery/portrait/20201112_104612_thumb.webp": "ec573821b881b0c6c09485c225d0cb4c",
"assets/images/gallery/portrait/20200703_122216.webp": "3e931b7f0661364b6d480d1ae0350935",
"assets/images/gallery/portrait/20210918_112452_thumb.webp": "097444bef0b7e7139af1c921635cc374",
"assets/images/gallery/portrait/20210703_114202.webp": "5b6e528c7c795712a81b23de953d13a5",
"assets/images/gallery/portrait/20210114_131804.webp": "3a2afa52de82c5a386733e2c144a69e0",
"assets/images/gallery/portrait/20201112_112404_thumb.webp": "96f39815c9866841bf2a160a66aa4113",
"assets/images/gallery/portrait/20211021_145212_thumb.webp": "d0c0c21c122caf4775a08aae8f516461",
"assets/images/gallery/portrait/20210114_141802.webp": "1ce0fbbe62ed42e44977aa9f951dc2aa",
"assets/images/gallery/portrait/20210114_111902.webp": "12d96e96c31fa660b8ac9a034bb75705",
"assets/images/gallery/portrait/20210703_114203.webp": "1dab75c021e555db10d3c5e1960574a5",
"assets/images/gallery/portrait/20201119_100147_thumb.webp": "161883f960472cd3aca13b7b9bd0d57c",
"assets/images/gallery/portrait/20210901_110234_thumb.webp": "4000449b610ae7a475c5ba9fcbd0ff40",
"assets/images/gallery/portrait/20200703_122219_thumb.webp": "433b83235bf039d5098926d97ac7f183",
"assets/images/gallery/portrait/20210114_113656.webp": "a121a45c690a45fb36c334f5ca80300e",
"assets/images/gallery/portrait/20210918_105104_thumb.webp": "031f5e14636e18e568ba1d2c69a73901",
"assets/images/gallery/portrait/20210918_105122_thumb.webp": "efe8eae580071e4f60d6c69abd1acd0e",
"assets/images/gallery/portrait/20210709_084059_thumb.webp": "eb65b7ad2a657a37e2c606681f4fbe17",
"assets/images/gallery/portrait/20210114_113707.webp": "c4f253a70341fb0bbbd2898cc1c2a823",
"assets/images/gallery/portrait/20210901_110336_thumb.webp": "f936a92e2d155cc9dca12fc9ce5c6893",
"assets/images/gallery/portrait/20201112_103812.webp": "a1527f6067add478d31caa4a54a6c213",
"assets/images/gallery/portrait/20210114_141802_thumb.webp": "c3d309f5d5a7df9f0f1aa5d64aff80ac",
"assets/images/gallery/portrait/20201112_112326.webp": "6ec27b0cd615050a9c9812861ffc65b6",
"assets/images/gallery/portrait/20210114_113707_thumb.webp": "9324498b0a736860bb45a45a4b4ceb02",
"assets/images/gallery/portrait/20200703_122229_thumb.webp": "2aa6617580bc1dc96f690eee80169245",
"assets/images/gallery/portrait/20210901_110316_thumb.webp": "39517d94d15e26cb8e5d1cabc9f1a6a0",
"assets/images/gallery/portrait/20210728_110344.webp": "c22f6b985fd7e23732d7c6b0012f1b89",
"assets/images/gallery/portrait/20210907_161055.webp": "f6349db81159e639543322aa35de4edd",
"assets/images/gallery/portrait/20210918_105122.webp": "29e7ba981ecf79c2565ca91a9cc4df6e",
"assets/images/gallery/portrait/20210114_111858.webp": "e82e52ddf37f87e6af5baa30b67e4e63",
"assets/images/gallery/portrait/20210728_110233.webp": "b1f60f3de45c093a4f9278e120d43e7d",
"assets/images/gallery/portrait/20210901_110605.webp": "4119c0fbdd6734ac0a8634887eeb7b2b",
"assets/images/gallery/portrait/20210907_161102_thumb.webp": "c05882df3872e534eca3fc49d56cf93c",
"assets/images/gallery/portrait/20210703_114202_thumb.webp": "eb3fc515f63dfa06ad01a026f6816f37",
"assets/images/gallery/portrait/20210728_110226_thumb.webp": "61c5606962144f5f03a3d702ea3ec45f",
"assets/images/gallery/portrait/20211022_082327_thumb.webp": "3c37adacde441f5d54c63f13c71a82de",
"assets/images/gallery/portrait/20210114_140603_thumb.webp": "05ab073308d4abbbe22e8a117d5a78ef",
"assets/images/gallery/portrait/20210114_131757_thumb.webp": "1d07120cfea90f6de30fe9a4e8ee6a16",
"assets/images/gallery/portrait/20200703_122218_thumb.webp": "c0d8b483f0daf637d66174132c353a41",
"assets/images/gallery/portrait/20210703_114203_thumb.webp": "8909e1b4d3063ef6f691e913bbe0f12c",
"assets/images/gallery/portrait/20210114_131809.webp": "efb1d55eff8be03ef43656b64ebdd51d",
"assets/images/gallery/portrait/20211021_145212.webp": "1fa2757a9b0522ef9f6b531153cefd1c",
"assets/images/gallery/portrait/20200703_122208_thumb.webp": "168b12327109658a1e985d6f4e91c30b",
"assets/images/gallery/portrait/20200703_122208.webp": "b709d2493aacb7bb63abcc29a3be3929",
"assets/images/gallery/portrait/20210901_110619.webp": "ca3edde9492e14d2174ab9a082c6de5b",
"assets/images/gallery/portrait/20210901_110237.webp": "37adce68ffb8633f55556ebccfd1b334",
"assets/images/gallery/portrait/20210709_093705.webp": "5791192b282b3e988fbad11414c6b64a",
"assets/images/gallery/portrait/20210709_093724_thumb.webp": "5d746d704ab26a362c4558acd2639539",
"assets/images/gallery/portrait/20200703_122229.webp": "820286d71dd8381d675cad8693838110",
"assets/images/gallery/portrait/20211022_082327.webp": "2325e5884de91a7c497df15ce9aa853f",
"assets/images/gallery/portrait/20210901_110605_thumb.webp": "f2832fa1a3b56f9773668862a665029c",
"assets/images/gallery/portrait/20211022_081949.webp": "f16a4bf4b323e99cc04c39be35607e86",
"assets/images/gallery/portrait/20210709_093636.webp": "5aacd8ba24b9e3bc21c951646e108cae",
"assets/images/gallery/portrait/20200703_122218.webp": "41bbae5ea1c96027a57405c3b52144ac",
"assets/images/gallery/portrait/20210728_110226.webp": "deec5413247f0a6af18467b8ac39f825",
"assets/images/gallery/portrait/20210709_093636_thumb.webp": "63b2e103bcf1a7b7ef35ffda656014af",
"assets/images/gallery/portrait/20211023_111603.webp": "7f0ff8643837ec69f49710af2a698a50",
"assets/images/gallery/portrait/20210114_113656_thumb.webp": "d23bd2069787690bf89415623c6d88e6",
"assets/images/gallery/portrait/20211023_111603_thumb.webp": "47b8154023fe792ac9847a9765d07bf1",
"assets/images/gallery/portrait/20210901_110340.webp": "c2f6a52d007da3b61824f758f4eaa38d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"version.json": "6d3fe0eff93767aa280e710f396a44be",
"index.html": "1997749da2f403807cef802c3e159d73",
"/": "1997749da2f403807cef802c3e159d73",
"canvaskit/profiling/canvaskit.wasm": "2c16ab2af3d4fbad52da379264e260e8",
"canvaskit/profiling/canvaskit.js": "dfb57a8542220c772374503baaf2632c",
"canvaskit/canvaskit.wasm": "e58017ff67dd1419dbd7b720458fb1af",
"canvaskit/canvaskit.js": "9d49083c3442cfc15366562eb578b5f3",
"manifest.json": "31c54390a2740b4b84de2ee5116d0d5c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
