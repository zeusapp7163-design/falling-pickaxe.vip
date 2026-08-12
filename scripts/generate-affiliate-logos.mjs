import sharp from "sharp";
import { readFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "public/images/affiliates");

const logos = [
  // Official white wordmark from brand asset (not the fake blue SVG).
  { in: "1win-src.png", out: "1win.png", w: 312, h: 96, kind: "png" },
  { in: "jetton.svg", out: "jetton.png", w: 312, h: 96, kind: "svg" },
  { in: "stake.svg", out: "stake.png", w: 312, h: 96, kind: "svg" },
];

for (const logo of logos) {
  const input = path.join(outDir, logo.in);
  const output = path.join(outDir, logo.out);
  const pipeline =
    logo.kind === "svg"
      ? sharp(readFileSync(input), { density: 300 })
      : sharp(input);

  await pipeline
    .resize(logo.w, logo.h, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(output);
  console.log(`wrote ${logo.out}`);
}
