import { INDEXNOW_BASE as BASE, pingIndexNowEndpoints } from './lib/indexnow.mjs';

const RU_URLS = [
  `${BASE}/`,
  `${BASE}/demo`,
  `${BASE}/rtp`,
  `${BASE}/bonuses`,
  `${BASE}/how-to-play`,
];

const urls = process.argv.slice(2).length
  ? process.argv.slice(2)
  : RU_URLS;

console.log('IndexNow ping:', urls.length, 'URLs');
urls.forEach((u) => console.log(' -', u));
await pingIndexNowEndpoints(urls, { requireYandex: true });
