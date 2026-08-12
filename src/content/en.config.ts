import type { LandingConfig } from "./types";
import { PARTNER_BASE, SHARED_GAME, SHARED_SITE, SHARED_THEME } from "./shared";

export const enConfig = {
  locale: "en",
  path: "/en",
  language: "en-US",
  site: {
    ...SHARED_SITE,
    ogLocale: "en_US",
    title: "Falling Pickaxe — Play Online | Official Site",
    description:
      "Falling Pickaxe by Pixmove: instant pickaxe drop into a vertical mine, 95% RTP, low volatility, max ×160. Review, screenshots and where to play for real money.",
    keywords: [
      "falling pickaxe",
      "falling pickaxe play",
      "falling pickaxe play online",
      "falling pickaxe official site",
      "falling pickaxe pixmove",
      "falling pickaxe rtp",
      "falling pickaxe review",
      "falling pickaxe demo",
      "falling pickaxe slot",
    ],
  },
  ai: {
    answerLabel: "Quick answer",
    answer:
      "Falling Pickaxe is a Pixmove instant (June 2026): you drop a pickaxe into a vertical mine, break ores, and catch TNT and upgrades. Stated sheet: 95% RTP, low volatility, max ×160. falling-pickaxe.vip is an independent review, not the studio page.",
    factsLabel: "Key searchable facts",
    facts: [
      { label: "Game", value: "Falling Pickaxe" },
      { label: "Studio", value: "Pixmove" },
      { label: "Category", value: "Instant" },
      { label: "RTP", value: "95%" },
      { label: "Max win", value: "×160" },
      { label: "Volatility", value: "Low" },
      { label: "Mechanic", value: "Falling pickaxe + ores" },
      { label: "Not the same as", value: "Mine Slot (InOut)" },
    ],
    trustLabel: "About this site",
    trust:
      "Updated August 12, 2026. falling-pickaxe.vip is not owned by Pixmove and does not accept wagers. RTP and max win follow the studio sheet; verify the live tier with the operator.",
  },
  theme: SHARED_THEME,
  game: {
    ...SHARED_GAME,
    alternateNames: ["FallingPickaxe", "Falling Pickaxe Game"],
    volatility: "Low",
    grid: "Vertical mine",
    mechanics: "Drop dig / ores / TNT",
    heroLead:
      "Drop a pickaxe into the shaft — it smashes block by block, picks up ores and upgrades. A calm instant with 95% RTP and a ×160 ceiling.",
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#mechanics", label: "How it works" },
    { href: "#screens", label: "Screenshots" },
    { href: "#play", label: "Play" },
    { href: "#faq", label: "FAQ" },
  ],
  stats: [
    { label: "Provider", value: SHARED_GAME.provider },
    { label: "Category", value: "Instant" },
    { label: "RTP", value: SHARED_GAME.rtp },
    { label: "Volatility", value: "Low" },
    { label: "Max win", value: SHARED_GAME.maxWin },
    { label: "Release", value: "June 2026" },
  ],
  steps: [
    {
      title: "Set the stake",
      text: "Choose your bet size at the bottom. Turn on Bonus Buy if the operator offers it.",
    },
    {
      title: "Drop the pickaxe",
      text: "One tool falls into the vertical mine and hits block by block while durability lasts.",
    },
    {
      title: "Catch ores and specials",
      text: "Copper, gold, diamond and emerald pay; TNT clears the path; upgrade arrow and crafting table strengthen the tool mid-fall.",
    },
    {
      title: "Close the round",
      text: "When durability ends or the path stops, the round closes. Low volatility means denser small/medium payouts more often.",
    },
  ],
  features: [
    {
      title: "Ores",
      text: "Copper, gold, diamond and emerald pay when broken — the main return source in a round.",
      image: "/media/ui-1.webp",
      alt: "Falling Pickaxe hub before the drop",
    },
    {
      title: "TNT and upgrades",
      text: "TNT clears the path, the upgrade arrow grows the pickaxe mid-fall, and the crafting table forges a stronger tier.",
      image: "/media/ui-2.webp",
      alt: "Falling Pickaxe mine with ores and durability",
    },
    {
      title: "Bonus Buy",
      text: "If the casino enables Bonus Buy, you jump into a denser dig faster. That is not a guaranteed big win.",
      image: "/media/cover.webp",
      alt: "Falling Pickaxe cover art",
    },
  ],
  gallery: [
    {
      src: "/media/ui-1.webp",
      alt: "Falling Pickaxe hub — landscape and stake",
      caption: "Before the drop: hub and HUD",
    },
    {
      src: "/media/ui-2.webp",
      alt: "Falling Pickaxe dig — mine and ores",
      caption: "In round: mine and durability",
    },
    {
      src: "/media/cover.webp",
      alt: "Falling Pickaxe cover",
      caption: "Game cover",
    },
  ],
  partners: PARTNER_BASE.map((partner, index) => ({
    ...partner,
    badge: ["Featured", "Bonus", "Original"][index],
  })),
  faq: [
    {
      question: "What is Falling Pickaxe?",
      answer:
        "A Pixmove instant from June 2026: you drop a pickaxe into a block mine, crack ores, and catch TNT / upgrades / crafting. Stated sheet: 95% RTP, low volatility, max ×160.",
    },
    {
      question: "What is the Falling Pickaxe RTP?",
      answer:
        "Pixmove lists 95%. Always verify the live tier in the casino client before depositing.",
    },
    {
      question: "What is the max win?",
      answer: "On the studio sheet — up to ×160 the stake.",
    },
    {
      question: "Who made Falling Pickaxe?",
      answer: "Pixmove Games.",
    },
    {
      question: "Falling Pickaxe or Mine Slot — which to choose?",
      answer:
        "Falling Pickaxe = one vertical drop with durability and ores (Pixmove). Mine Slot = InOut dig hybrid with reel pickaxes and chests.",
    },
    {
      question: "Where can I play Falling Pickaxe for real money?",
      answer:
        "Through the short list on this page — 1win, JetTon, Stake — then open Falling Pickaxe in the casino lobby.",
    },
    {
      question: "Is there a Falling Pickaxe demo?",
      answer:
        "Studio demo is on the Pixmove site. For real-money play — licensed casinos below.",
    },
  ],
  riskCards: [
    {
      value: SHARED_GAME.rtp,
      title: "Theoretical return",
      text: "95% RTP is a studio long-run figure. The live tier can differ by operator.",
    },
    {
      value: "Low",
      title: "Risk profile",
      text: "Low volatility: denser small and medium ore payouts more often than rare mega spikes.",
    },
    {
      value: SHARED_GAME.maxWin,
      title: "Maximum potential",
      text: "The ×160 ceiling is modest versus high-vol crash titles. Size bets for short drop cycles.",
    },
  ],
  compareRows: [
    { label: "Provider", mineDrop: "Pixmove", mineSlot: "InOut" },
    {
      label: "Loop",
      mineDrop: "One pickaxe drop",
      mineSlot: "Reel pickaxes + field",
    },
    {
      label: "Volatility",
      mineDrop: "Low",
      mineSlot: "Medium / title-dependent",
    },
    {
      label: "Max win",
      mineDrop: "×160",
      mineSlot: "See Mine Slot sheet",
    },
  ],
  ui: {
    header: {
      skip: "Skip to content",
      navLabel: "Main navigation",
      mobileNavLabel: "Mobile navigation",
      languageLabel: "Site language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      play: "Play",
    },
    hero: {
      primaryCta: "Play",
      secondaryCta: "How to play",
      factsLabel: "Key game specifications",
      rtpLabel: "RTP",
      maxLabel: "Max",
      riskLabel: "Risk",
      visualLabel: "Falling Pickaxe gameplay preview",
      screenAlt: "Falling Pickaxe round in the mine",
      coverAlt: "Falling Pickaxe cover art",
    },
    specsTitle: "Falling Pickaxe specifications",
    about: {
      eyebrow: "About the game",
      title: "One drop — a full mine",
      lead: "Falling Pickaxe does not spin a Mine Slot field: you drop one tool and watch it pass blocks, ores and upgrades.",
      figureAlt: "Falling Pickaxe interface before the drop",
      caption: "Hub before digging: landscape, stake and Bonus Buy.",
      label: "Core idea",
      summaryTitle: "The pickaxe falls while durability lasts",
      paragraphs: [
        "Falling Pickaxe is a Pixmove instant released in June 2026. Studio sheet: 95% RTP, low volatility, max ×160.",
        "Copper, gold, diamond and emerald pay when broken; TNT clears the path; upgrade arrow and crafting table strengthen the tool mid-fall.",
      ],
      link: "See how a round works →",
      highlights: [
        {
          label: "01",
          title: "Vertical drop",
          text: "One tool, one mine, durability on the HUD.",
        },
        {
          label: "02",
          title: "Ores and specials",
          text: "Ore payouts plus TNT, upgrade and crafting mid-fall.",
        },
        {
          label: "03",
          title: "Calm risk",
          text: "Low vol, 95% RTP, ×160 ceiling — no cash-out slider.",
        },
      ],
    },
    mechanics: {
      eyebrow: "Round logic",
      title: "How a drop works",
      lead: "Four steps — from stake to round close without promo fog.",
    },
    features: {
      eyebrow: "Key events",
      title: "What changes the pickaxe path",
      lead: "Ores, TNT/upgrades and Bonus Buy — three pillars of the Falling Pickaxe loop.",
    },
    math: {
      eyebrow: "Game math",
      title: "Numbers, not promises",
      lead: "RTP, volatility and max win describe the model. They do not guarantee one drop’s result.",
    },
    compare: {
      eyebrow: "Do not confuse them",
      title: "Falling Pickaxe is not Mine Slot",
      lead: "One mining fantasy, different studios and loops.",
      caption: "Falling Pickaxe and Mine Slot comparison",
      columns: ["Criteria", "Falling Pickaxe", "Mine Slot"],
      link: "View the interface →",
    },
    gallery: {
      eyebrow: "Interface",
      title: "A closer look at the game",
      lead: "Frames from the official Pixmove page: hub before the drop and the live mine.",
      cta: "Choose a platform",
    },
    partners: {
      eyebrow: "Platforms",
      title: "Where to play Falling Pickaxe",
      lead: "Compare the welcome offer, promo code and rating. Terms can change — verify on the platform.",
      ratingLabel: "Rating",
      welcomeBonus: "Welcome offer",
      promoLabel: "Code",
      copy: "Copy",
      copied: "Copied",
      copyAria: "Copy promo code",
      noPromo: "Offers without a promo code",
      play: "Play at",
      legal: "18+ · Play responsibly",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Quick answers",
      lead: "RTP, max win, demo and how it differs from Mine Slot.",
    },
    footer: {
      text: "Falling Pickaxe review: specs, mechanics, screenshots and platforms to launch.",
      cta: "Choose a platform",
      legal:
        "18+. Play responsibly. Gambling can be addictive. This site is not the developer’s official page.",
    },
    schemaOffer: "A free demo mode may be available",
    howToName: "How to play Falling Pickaxe",
    howToDescription:
      "Step-by-step flow: stake, pickaxe drop, ores / TNT / upgrades and round close.",
    ogTagline: "Play online",
  },
} satisfies LandingConfig;
