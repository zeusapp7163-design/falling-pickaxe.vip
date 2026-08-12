export const SHARED_SITE = {
  name: "Falling Pickaxe",
  domain: "falling-pickaxe.vip",
  url: "https://falling-pickaxe.vip",
  published: "2026-07-30",
  updated: "2026-08-12",
} as const;

export const SHARED_THEME = {
  sky: "#6ec8ff",
  ore: "#c87941",
  sand: "#e8c36a",
  grass: "#5fbf8a",
} as const;

export const SHARED_GAME = {
  name: "Falling Pickaxe",
  provider: "Pixmove",
  engine: "Pixmove Instant",
  release: "06.2026",
  rtp: "95%",
  maxWin: "×160",
  cover: "/media/cover.webp",
} as const;

export const PARTNER_BASE = [
  {
    id: "1win",
    name: "1win",
    logo: "/images/affiliates/1win.png",
    rating: "4.90",
    bonusValue: "500%",
    bonusExtra: "+70 FS",
    promoCode: "ADBLOCK",
  },
  {
    id: "jetton",
    name: "JetTon",
    logo: "/images/affiliates/jetton.png",
    rating: "4.88",
    bonusValue: "425%",
    bonusExtra: "+250 FS",
    promoCode: "ADBLOCK",
  },
  {
    id: "stake",
    name: "Stake",
    logo: "/images/affiliates/stake.png",
    rating: "4.85",
    bonusValue: "VIP",
    bonusExtra: "rakeback",
    promoCode: null,
  },
] as const;

export const AFFILIATE_LINKS_ENABLED = true;

export const PARTNER_DESTINATIONS: Record<string, string> = {
  "1win":
    "https://one-vv6649.com/casino/list?open=register&sub1=fallingpickaxe",
  jetton:
    "https://jtbetlab.click/ch7v2YRRqma?click_id={click_id}&target_id=/&target_type=registration",
  stake: "https://stake3098.com/?c=blackDemo",
};
