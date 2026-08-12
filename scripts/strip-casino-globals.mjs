import fs from "node:fs";
import path from "node:path";

const globalsPath = path.join(process.cwd(), "src/app/globals.css");
let css = fs.readFileSync(globalsPath, "utf8");

const casinoWrapper = `/* Casino section wrapper — cards styled in casino-block.css (demo.online) */
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
  /\/\* Casino section — adapted from demo\.online partner block \*\/[\s\S]*?\/\* FAQ \*\//,
  `${casinoWrapper}/* FAQ */`,
);

const patches = [
  [
    "html {\n  scroll-behavior: smooth;\n}",
    "html {\n  scroll-behavior: smooth;\n  color-scheme: dark;\n}",
  ],
  [
    ".hero__inner {\n  max-width: var(--content);\n  margin: 0 auto;\n  padding: 0 var(--gutter);\n  display: grid;\n  gap: 2.5rem;\n  align-items: center;\n}",
    ".hero__inner {\n  max-width: var(--content);\n  margin: 0 auto;\n  padding: 0 var(--gutter);\n  display: grid;\n  gap: clamp(1.5rem, 4vw, 2.5rem);\n  align-items: center;\n}\n\n.hero__copy,\n.hero__visual {\n  min-width: 0;\n}",
  ],
  [
    ".hero__visual {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}",
    ".hero__visual {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  width: 100%;\n  max-width: 340px;\n  margin-inline: auto;\n}\n\n@media (min-width: 960px) {\n  .hero__visual {\n    max-width: none;\n    margin-inline: 0;\n    justify-self: center;\n  }\n}",
  ],
  [
    ".section-inner {\n  max-width: var(--content);\n  margin: 0 auto;\n  padding: 0 var(--gutter);\n}",
    ".section-inner {\n  width: 100%;\n  max-width: var(--content);\n  margin: 0 auto;\n  padding: 0 var(--gutter);\n}",
  ],
  [
    ".site-footer {\n  padding: 2rem 0 5.5rem;",
    ".site-footer {\n  padding: 2rem 0 calc(5.5rem + env(safe-area-inset-bottom, 0px));",
  ],
];

for (const [from, to] of patches) {
  if (!css.includes(to.split("\n")[0])) {
    css = css.replace(from, to);
  }
}

fs.writeFileSync(globalsPath, css);
console.log("globals.css updated");
