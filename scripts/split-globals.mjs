import fs from "node:fs";
import path from "node:path";

const globalsPath = path.join(process.cwd(), "src/app/globals.css");
let css = fs.readFileSync(globalsPath, "utf8");

const casinoWrapper = `/* Casino section wrapper */
.casino-section {
  padding: clamp(3rem, 7vw, 5rem) 0;
  background:
    radial-gradient(ellipse 80% 50% at 50% 0%, rgba(245, 200, 66, 0.06), transparent 60%),
    rgba(8, 8, 12, 0.5);
}

.casino-section__inner {
  max-width: var(--content);
  margin: 0 auto;
  padding: 0 var(--gutter);
}

`;

css = css.replace(
  /\/\* Casino block \(demo\.black\) \*\/[\s\S]*?\.casino-section__inner \{[\s\S]*?\}\r?\n\r?\n/,
  casinoWrapper,
);

const heroBlock = `.hero__inner {
  max-width: var(--content);
  margin: 0 auto;
  padding: 0 var(--gutter);
  display: grid;
  gap: 2.5rem;
  align-items: center;
}

.hero__copy {
  min-width: 0;
}

@media (min-width: 960px) {
  .hero__inner {
    grid-template-columns: 1.05fr 0.95fr;
    gap: 3rem;
  }
}`;

css = css.replace(
  /\.hero__inner \{[\s\S]*?@media \(min-width: 960px\) \{\r?\n  \.hero__inner \{[\s\S]*?\}\r?\n\}/,
  heroBlock,
);

if (!css.includes("main {\n  position: relative")) {
  css = css.replace(
    "/* Header */",
    `main {
  position: relative;
  z-index: 0;
}

/* Header */`,
  );
}

fs.writeFileSync(globalsPath, css);
console.log("split globals.css — casino block removed");
