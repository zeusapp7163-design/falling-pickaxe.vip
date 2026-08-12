import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const globalsPath = path.join(root, "src/app/globals.css");
const casinoPath = path.join(root, "src/styles/casino-block.css");

let globals = fs.readFileSync(globalsPath, "utf8");
const casino = fs
  .readFileSync(casinoPath, "utf8")
  .replace(/^\/\*[\s\S]*?\*\/\n/, "");

const casinoSection = `/* Casino block (demo.black) */
${casino}
.casino-section {
  padding: clamp(3rem, 7vw, 5rem) 0;
}

.casino-section__inner {
  max-width: var(--content);
  margin: 0 auto;
  padding: 0 var(--gutter);
}

`;

globals = globals.replace(
  /\/\* Casino section wrapper \*\/[\s\S]*?\.casino-section__inner \{[\s\S]*?\}\r?\n\r?\n/,
  casinoSection,
);

globals = globals.replace(
  /\.hero__inner \{[\s\S]*?@media \(min-width: 960px\) \{\r?\n  \.hero__inner \{[\s\S]*?\}\r?\n\}/,
  `.hero__inner {
  max-width: var(--content);
  margin: 0 auto;
  padding: 0 var(--gutter);
  display: grid;
  gap: 2.5rem;
  align-items: center;
}

@media (min-width: 960px) {
  .hero__inner {
    grid-template-columns: 1.05fr 0.95fr;
    gap: 3rem;
  }
}`,
);

globals = globals.replace(/content: "в—†";/, 'content: "◆";');

fs.writeFileSync(globalsPath, globals);
console.log("globals.css restored");
