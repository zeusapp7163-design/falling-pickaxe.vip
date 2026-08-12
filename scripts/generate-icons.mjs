import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const cover = path.join(root, "public/media/cover.webp");
const appDir = path.join(root, "src/app");

await mkdir(appDir, { recursive: true });

const sizes = [
  { name: "icon.png", size: 32 },
  { name: "apple-icon.png", size: 180 },
];

for (const { name, size } of sizes) {
  await sharp(cover)
    .resize(size, size, { fit: "cover", position: "centre" })
    .png()
    .toFile(path.join(appDir, name));
  console.log(`wrote ${name} (${size}px)`);
}

const favicon32 = await sharp(cover)
  .resize(32, 32, { fit: "cover", position: "centre" })
  .png()
  .toBuffer();

await Promise.all([
  sharp(favicon32).toFile(path.join(root, "public/favicon.ico")),
  sharp(favicon32).toFile(path.join(appDir, "favicon.ico")),
  sharp(favicon32).toFile(path.join(root, "public/favicon-32.png")),
]);

console.log("wrote favicon.ico + favicon-32.png");
