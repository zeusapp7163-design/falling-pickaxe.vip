import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const cover = path.join(root, "public/media/cover.webp");
const appDir = path.join(root, "src/app");

await mkdir(appDir, { recursive: true });

const sizes = [
  { name: "icon.png", size: 32, dir: appDir },
  { name: "apple-icon.png", size: 180, dir: appDir },
  { name: "favicon-32.png", size: 32, dir: path.join(root, "public") },
  { name: "favicon-120.png", size: 120, dir: path.join(root, "public") },
];

for (const { name, size, dir } of sizes) {
  await sharp(cover)
    .resize(size, size, { fit: "cover", position: "centre" })
    .png()
    .toFile(path.join(dir, name));
  console.log(`wrote ${name} (${size}px)`);
}

const favicon32 = await sharp(cover)
  .resize(32, 32, { fit: "cover", position: "centre" })
  .png()
  .toBuffer();

await Promise.all([
  sharp(favicon32).toFile(path.join(root, "public/favicon.ico")),
  sharp(favicon32).toFile(path.join(appDir, "favicon.ico")),
]);

console.log("wrote favicon.ico");
