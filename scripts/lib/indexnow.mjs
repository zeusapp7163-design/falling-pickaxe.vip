/**
 * IndexNow for falling-pickaxe.vip (Yandex / Bing / IndexNow.org).
 */
export const INDEXNOW_KEY = '103229c8d75cd7654355609af782bed6';
export const INDEXNOW_HOST = 'falling-pickaxe.vip';
export const INDEXNOW_BASE = `https://${INDEXNOW_HOST}`;
export const INDEXNOW_KEY_LOCATION = `${INDEXNOW_BASE}/${INDEXNOW_KEY}.txt`;

const ENDPOINTS = [
  { name: 'yandex', url: 'https://yandex.com/indexnow', required: true },
  { name: 'bing', url: 'https://www.bing.com/indexnow', required: false },
  { name: 'indexnow', url: 'https://api.indexnow.org/indexnow', required: false },
];

export function buildIndexNowBody(urls) {
  return {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: [...new Set(urls)],
  };
}

export async function pingIndexNowEndpoints(urls, opts = {}) {
  const requireYandex = opts.requireYandex === true;
  const body = JSON.stringify(buildIndexNowBody(urls));
  const results = [];

  for (const endpoint of ENDPOINTS) {
    try {
      const res = await fetch(endpoint.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body,
      });
      const text = await res.text().catch(() => '');
      const ok = res.status === 200 || res.status === 202;
      console.log(
        `IndexNow ${endpoint.name}: ${res.status} (${urls.length} URLs)${ok ? '' : text ? ` — ${text.slice(0, 160)}` : ''}`,
      );
      results.push({ name: endpoint.name, status: res.status, ok, text: text.slice(0, 200) });
    } catch (err) {
      console.error(`IndexNow ${endpoint.name} failed:`, err.message);
      results.push({ name: endpoint.name, status: 0, ok: false, error: err.message });
    }
  }

  if (requireYandex) {
    const yandex = results.find((r) => r.name === 'yandex');
    if (!yandex?.ok) {
      throw new Error(`IndexNow Yandex ping failed (status ${yandex?.status ?? 0}).`);
    }
  }

  return results;
}
