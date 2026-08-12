import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outDir = path.join(process.cwd(), "public/media");
await mkdir(outDir, { recursive: true });

const files = [
  ["cover.webp", "https://demo.black/images/slots/falling-pickaxe.webp"],
  ["ui-1.webp", "https://demo.black/images/reviews/falling-pickaxe/ui-1.webp"],
  ["ui-2.webp", "https://demo.black/images/reviews/falling-pickaxe/ui-2.webp"],
];

for (const [name, url] of files) {
  const res = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 falling-pickaxe.vip setup" },
  });
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(path.join(outDir, name), buf);
  console.log(`saved ${name} (${buf.length} bytes)`);
}
