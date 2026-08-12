import type { FaqItem, Locale } from "./types";

export const SEO_PAGE_SLUGS = [
  "demo",
  "rtp",
  "bonuses",
  "how-to-play",
] as const;

export type SeoPageSlug = (typeof SEO_PAGE_SLUGS)[number];

export type SeoPageContent = {
  slug: SeoPageSlug;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  quickAnswer: string;
  updatedLabel: string;
  highlights: Array<{ label: string; value: string }>;
  sections: Array<{
    title: string;
    paragraphs: string[];
    points?: string[];
  }>;
  faq: FaqItem[];
  relatedLabel: string;
  homeLabel: string;
  playLabel: string;
};

const ruPages: Record<SeoPageSlug, SeoPageContent> = {
  demo: {
    slug: "demo",
    title: "Falling Pickaxe демо — интерфейс и игровой процесс",
    description:
      "Обзор демо Falling Pickaxe: вертикальная шахта, падающая кирка, руды, TNT и Bonus Buy. Что проверить перед игрой без депозита.",
    eyebrow: "Демо и интерфейс",
    heading: "Демо Falling Pickaxe: изучите раунд до ставки",
    intro:
      "Демо-режим нужен не для прогноза выигрыша, а для знакомства с темпом игры. На этой странице разобраны элементы интерфейса, бросок кирки и функции, которые стоит проверить до запуска на реальные деньги.",
    quickAnswer:
      "Демо Falling Pickaxe показывает хаб, вертикальную шахту, руды, TNT/апгрейды и Bonus Buy без депозита. Доступность зависит от площадки и региона; короткий демо-результат не доказывает RTP 95% и не равен игре на деньги.",
    updatedLabel: "Проверено 12 августа 2026",
    highlights: [
      { label: "Формат", value: "Вертикальная шахта" },
      { label: "Механика", value: "Падающая кирка" },
      { label: "Доступ", value: "Зависит от региона" },
    ],
    sections: [
      {
        title: "Что показывает демо-режим",
        paragraphs: [
          "В хабе вы видите ставку, Bonus Buy и пейзаж до броска. После старта кирка падает вниз, ломает блоки, собирает руды и реагирует на TNT и апгрейды, пока хватает прочности.",
          "Демо помогает увидеть этот цикл без депозита. Доступность бесплатного режима определяется площадкой и правилами региона; сам falling-pickaxe.vip не запускает игру внутри страницы.",
        ],
        points: [
          "расположение ставки, баланса и прочности;",
          "поведение кирки после броска;",
          "руды, TNT, стрелка апгрейда и верстак;",
          "стоимость и предупреждения в меню Bonus Buy.",
        ],
      },
      {
        title: "Чего демо не доказывает",
        paragraphs: [
          "Короткая тестовая серия не показывает фактический RTP и не позволяет оценить вероятность максимального выигрыша. RTP 95% относится к большой статистической дистанции, а отдельная сессия может заметно отклоняться от этого значения.",
          "Результат в демо также не является обещанием аналогичного результата в денежном режиме. Используйте бесплатный запуск только для изучения правил и выбора комфортного размера ставки.",
        ],
      },
      {
        title: "Проверка перед запуском",
        paragraphs: [
          "Убедитесь, что открыта именно Falling Pickaxe от Pixmove, а не похожая по тематике Mine Slot. Проверьте таблицу выплат, текущую версию RTP и доступность функций непосредственно в интерфейсе площадки.",
        ],
        points: [
          "название провайдера — Pixmove;",
          "указанный RTP — 95%;",
          "низкая волатильность и лимиты ставки;",
          "региональные ограничения и условия площадки.",
        ],
      },
    ],
    faq: [
      {
        question: "Можно ли открыть Falling Pickaxe демо без регистрации?",
        answer:
          "Это зависит от выбранной площадки и региона. Студийное демо есть на сайте Pixmove; у операторов доступ может требовать вход.",
      },
      {
        question: "Совпадает ли механика демо и игры на деньги?",
        answer:
          "Правила и интерфейс обычно совпадают, но демонстрационный баланс не имеет денежной ценности. Перед запуском проверьте таблицу выплат и версию RTP.",
      },
    ],
    relatedLabel: "Продолжить изучение",
    homeLabel: "Вернуться к обзору",
    playLabel: "Выбрать площадку",
  },
  rtp: {
    slug: "rtp",
    title: "RTP Falling Pickaxe 95% — волатильность и max win",
    description:
      "Разбор математики Falling Pickaxe: RTP 95%, низкая волатильность, максимальный выигрыш ×160 и влияние Bonus Buy на риск.",
    eyebrow: "Математика",
    heading: "RTP Falling Pickaxe: что означает показатель 95%",
    intro:
      "Цифры в листе Pixmove описывают модель на длинной дистанции. Ниже — как читать RTP, волатильность и потолок ×160 без обещаний по конкретной сессии.",
    quickAnswer:
      "Заявленный RTP Falling Pickaxe — 95% на длинной дистанции. Волатильность низкая, max win ×160 относится к верхней части распределения. Bonus Buy повышает стоимость входа, но не гарантирует лучший результат сессии.",
    updatedLabel: "Проверено 12 августа 2026",
    highlights: [
      { label: "RTP", value: "95%" },
      { label: "Волатильность", value: "Низкая" },
      { label: "Max win", value: "×160" },
    ],
    sections: [
      {
        title: "Как читать RTP 95%",
        paragraphs: [
          "RTP — теоретический возврат на очень длинной выборке раундов. Короткая сессия может закончиться выше или ниже этой цифры.",
          "Живой tier у оператора иногда отличается от студийного листа. Перед депозитом сверяйте значение в клиенте казино.",
        ],
      },
      {
        title: "Низкая волатильность",
        paragraphs: [
          "Низкая волатильность означает более частые мелкие и средние выплаты с руд и меньше редких экстремальных спайков по сравнению с high-vol dig/crash.",
          "Это не «безопасная» игра: банкролл всё равно нужно ограничивать размером ставки и числом бросков.",
        ],
      },
      {
        title: "Max win ×160",
        paragraphs: [
          "Заявленный максимальный потенциал Falling Pickaxe составляет ×160 от ставки и относится к редкой части распределения. Высокий потолок ничего не говорит о вероятности его достижения в короткой сессии.",
        ],
        points: [
          "потолок скромнее high-vol слотов;",
          "Bonus Buy меняет стоимость входа, не гарантию;",
          "сверяйте лимиты ставки у оператора.",
        ],
      },
    ],
    faq: [
      {
        question: "Гарантирует ли RTP 95% возврат за вечер?",
        answer:
          "Нет. RTP описывает длинную дистанцию. Одна сессия может сильно отклоняться от теоретического значения.",
      },
      {
        question: "Где проверить актуальный RTP?",
        answer:
          "В таблице выплат или info-панели клиента казино. Не полагайтесь только на текст обзора.",
      },
    ],
    relatedLabel: "Продолжить изучение",
    homeLabel: "Вернуться к обзору",
    playLabel: "Выбрать площадку",
  },
  bonuses: {
    slug: "bonuses",
    title: "Бонусы Falling Pickaxe — Bonus Buy и предложения площадок",
    description:
      "Как устроен Bonus Buy в Falling Pickaxe и чем игровые функции отличаются от приветственных бонусов казино. Условия, риски и проверка промокода.",
    eyebrow: "Бонусы",
    heading: "Бонусы Falling Pickaxe: отделяем механику от промо",
    intro:
      "В контексте Falling Pickaxe словом «бонус» называют две разные вещи: платную игровую функцию Bonus Buy и промо-предложения площадок. У них разные правила, стоимость и ограничения.",
    quickAnswer:
      "Bonus Buy — платная функция внутри Falling Pickaxe. Приветственный бонус казино — отдельное промо оператора с вейджером и лимитами. Перед регистрацией сверяйте полные правила на стороне площадки; сайт не принимает ставки.",
    updatedLabel: "Проверено 12 августа 2026",
    highlights: [
      { label: "В игре", value: "Bonus Buy" },
      { label: "У казино", value: "Welcome / FS" },
      { label: "Промокод", value: "ADBLOCK" },
    ],
    sections: [
      {
        title: "Bonus Buy внутри игры",
        paragraphs: [
          "Если оператор включает Bonus Buy, вы платите повышенную стоимость за более плотный dig. Это ускоряет вход в события, но повышает дисперсию и не гарантирует крупный выигрыш.",
        ],
        points: [
          "доступность зависит от казино;",
          "стоимость выше обычного броска;",
          "результат всё равно определяется механикой раунда.",
        ],
      },
      {
        title: "Приветственные бонусы площадок",
        paragraphs: [
          "Промо 1win / JetTon / Stake — это условия оператора, а не параметры Pixmove. Перед активацией проверяйте:",
        ],
        points: [
          "процент и сумму депозитного бонуса;",
          "вейджер и срок отыгрыша;",
          "участие Falling Pickaxe в отыгрыше;",
          "лимиты вывода и региональные правила.",
        ],
      },
      {
        title: "Промокоды и партнёрские ссылки",
        paragraphs: [
          "Партнёрские ссылки на falling-pickaxe.vip помечены как рекламные. Их наличие не меняет математические параметры Falling Pickaxe и не означает гарантии выплаты со стороны площадки.",
        ],
      },
    ],
    faq: [
      {
        question: "Нужно ли включать Bonus Buy?",
        answer:
          "Нет. Это опция. Обычные броски остаются доступны, если оператор отдаёт игру.",
      },
      {
        question: "Работает ли промокод ADBLOCK всегда?",
        answer:
          "Условия меняются. Актуальный статус и сумму проверяйте на стороне площадки в момент регистрации.",
      },
    ],
    relatedLabel: "Продолжить изучение",
    homeLabel: "Вернуться к обзору",
    playLabel: "Выбрать площадку",
  },
  "how-to-play": {
    slug: "how-to-play",
    title: "Как играть в Falling Pickaxe — правила и механика",
    description:
      "Пошаговые правила Falling Pickaxe: ставка, бросок кирки, руды, TNT, апгрейды, Bonus Buy, RTP и контроль ставки.",
    eyebrow: "Правила",
    heading: "Как играть в Falling Pickaxe",
    intro:
      "Falling Pickaxe строит раунд вокруг одного вертикального броска. Кирка проходит блоки, пока хватает прочности; руды платят, спецтайлы меняют путь.",
    quickAnswer:
      "В Falling Pickaxe вы ставите ставку и роняете кирку в шахту. Медь, золото, алмаз и изумруд дают выплату; TNT, апгрейд и верстак усиливают путь. RTP 95% и max ×160 описывают модель, а не исход одного броска.",
    updatedLabel: "Проверено 12 августа 2026",
    highlights: [
      { label: "Шаг 1", value: "Ставка" },
      { label: "Шаг 2", value: "Бросок" },
      { label: "Шаг 3", value: "Руды / спецтайлы" },
    ],
    sections: [
      {
        title: "Порядок раунда",
        paragraphs: [
          "Выберите размер ставки. При желании откройте Bonus Buy. Запустите бросок — кирка падает сверху вниз и бьёт блоки, пока прочность не кончится или путь не оборвётся.",
        ],
        points: [
          "прочность отображается на HUD;",
          "руды — основной источник выплат;",
          "TNT расчищает путь;",
          "стрелка апгрейда и верстак усиливают инструмент mid-fall.",
        ],
      },
      {
        title: "Чем Falling Pickaxe отличается от Mine Slot",
        paragraphs: [
          "Falling Pickaxe — один вертикальный бросок Pixmove. Mine Slot — dig-гибрид InOut с кирками с барабанов и сундуками. Не путайте тайтлы в лобби.",
        ],
      },
      {
        title: "Контроль риска",
        paragraphs: [
          "Низкая волатильность не отменяет лимит сессии. Заранее задайте размер ставки и число бросков. RTP 95% и max ×160 — студийные ориентиры, не обещание результата.",
        ],
      },
    ],
    faq: [
      {
        question: "Есть ли линии выплат?",
        answer:
          "Falling Pickaxe использует drop-механику в шахте, а не классические линии. Точные правила — в таблице выплат активной версии.",
      },
      {
        question: "Можно ли остановить кирку вручную?",
        answer:
          "Нет cash-out слайдера как в crash. Раунд закрывается, когда прочность кончается или путь обрывается.",
      },
    ],
    relatedLabel: "Продолжить изучение",
    homeLabel: "Вернуться к обзору",
    playLabel: "Выбрать площадку",
  },
};

const enPages: Record<SeoPageSlug, SeoPageContent> = {
  demo: {
    slug: "demo",
    title: "Falling Pickaxe Demo — Interface and Gameplay Guide",
    description:
      "Explore the Falling Pickaxe demo: vertical mine, falling pickaxe, ores, TNT and Bonus Buy before playing.",
    eyebrow: "Demo and interface",
    heading: "Falling Pickaxe demo: learn the round before staking",
    intro:
      "Demo mode is for learning pace and UI, not forecasting wins. This page covers the hub, the drop loop and features to check before real-money play.",
    quickAnswer:
      "The Falling Pickaxe demo shows the hub, vertical mine, ores, TNT/upgrades and Bonus Buy without a deposit. Availability depends on the platform and region; a short demo sample does not prove the 95% RTP or match real-money results.",
    updatedLabel: "Checked August 12, 2026",
    highlights: [
      { label: "Format", value: "Vertical mine" },
      { label: "Mechanic", value: "Falling pickaxe" },
      { label: "Access", value: "Region-dependent" },
    ],
    sections: [
      {
        title: "What the demo shows",
        paragraphs: [
          "In the hub you see stake, Bonus Buy and the landscape before the drop. After start the pickaxe falls, breaks blocks, collects ores and reacts to TNT and upgrades while durability lasts.",
          "A free version lets you inspect that loop without a deposit. Availability depends on the platform and region; falling-pickaxe.vip does not embed or operate the game itself.",
        ],
        points: [
          "stake, balance and durability layout;",
          "pickaxe behaviour after the drop;",
          "ores, TNT, upgrade arrow and crafting table;",
          "cost and warnings in the Bonus Buy menu.",
        ],
      },
      {
        title: "What the demo does not prove",
        paragraphs: [
          "A short test series does not show realised RTP or the chance of max win. 95% RTP is a long-run figure; a single session can deviate a lot.",
          "Demo outcomes are not a promise of matching cash results. Use free play only to learn rules and pick a comfortable stake size.",
        ],
      },
      {
        title: "Checks before launch",
        paragraphs: [
          "Confirm that the title is Falling Pickaxe by Pixmove rather than the thematically similar Mine Slot. Open the paytable and verify the RTP version and available features on the platform.",
        ],
        points: [
          "provider name — Pixmove;",
          "stated RTP — 95%;",
          "low volatility and stake limits;",
          "regional limits and platform terms.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I try the Falling Pickaxe demo without registering?",
        answer:
          "It depends on the platform and region. Studio demo is on Pixmove’s site; some operators require a login.",
      },
      {
        question: "Does demo match real-money mechanics?",
        answer:
          "Rules and UI usually match, but demo balance has no cash value. Verify the paytable and RTP version before depositing.",
      },
    ],
    relatedLabel: "Explore the details",
    homeLabel: "Back to the review",
    playLabel: "Choose a platform",
  },
  rtp: {
    slug: "rtp",
    title: "Falling Pickaxe RTP 95% — Volatility and Max Win",
    description:
      "Falling Pickaxe math explained: 95% RTP, low volatility, ×160 maximum win and the risk profile of Bonus Buy.",
    eyebrow: "Game math",
    heading: "Falling Pickaxe RTP: what 95% means",
    intro:
      "Pixmove sheet figures describe the long-run model. Below is how to read RTP, volatility and the ×160 ceiling without session promises.",
    quickAnswer:
      "Falling Pickaxe states a 95% RTP over a long sample. Volatility is low and the ×160 max win sits in the upper tail. Bonus Buy raises entry cost; it does not guarantee a better session result.",
    updatedLabel: "Checked August 12, 2026",
    highlights: [
      { label: "RTP", value: "95%" },
      { label: "Volatility", value: "Low" },
      { label: "Max win", value: "×160" },
    ],
    sections: [
      {
        title: "Reading 95% RTP",
        paragraphs: [
          "RTP is theoretical return over a very long sample. A short session can finish above or below that number.",
          "The live operator tier can differ from the studio sheet. Verify the value in the casino client before depositing.",
        ],
      },
      {
        title: "Low volatility",
        paragraphs: [
          "Low volatility means denser small and medium ore payouts and fewer extreme spikes versus high-vol dig/crash titles.",
          "It is not a “safe” game: still cap bankroll by stake size and number of drops.",
        ],
      },
      {
        title: "Max win ×160",
        paragraphs: [
          "The stated maximum potential is ×160 the stake and sits in the rare part of the distribution. The ceiling says nothing about the chance of hitting it in a short session.",
        ],
        points: [
          "ceiling is modest versus high-vol slots;",
          "Bonus Buy changes entry cost, not a guarantee;",
          "verify stake limits with the operator.",
        ],
      },
    ],
    faq: [
      {
        question: "Does 95% RTP guarantee a return tonight?",
        answer:
          "No. RTP describes the long run. One session can deviate sharply from the theoretical value.",
      },
      {
        question: "Where do I check the live RTP?",
        answer:
          "In the paytable or info panel of the casino client. Do not rely only on review text.",
      },
    ],
    relatedLabel: "Explore the details",
    homeLabel: "Back to the review",
    playLabel: "Choose a platform",
  },
  bonuses: {
    slug: "bonuses",
    title: "Falling Pickaxe Bonuses — Bonus Buy and Platform Offers",
    description:
      "Understand Falling Pickaxe Bonus Buy and how it differs from casino welcome offers. Check wagering terms, promo codes and risk.",
    eyebrow: "Bonuses",
    heading: "Falling Pickaxe bonuses: game feature versus promotion",
    intro:
      "The word “bonus” can mean two different things here: the paid Bonus Buy feature inside Falling Pickaxe and a promotional offer from a platform. Their rules, costs and restrictions are separate.",
    quickAnswer:
      "Bonus Buy is a paid in-game feature in Falling Pickaxe. A casino welcome offer is a separate operator promotion with wagering and limits. Read the full platform terms before registering; this site does not accept wagers.",
    updatedLabel: "Checked August 12, 2026",
    highlights: [
      { label: "In-game", value: "Bonus Buy" },
      { label: "Casino", value: "Welcome / FS" },
      { label: "Promo", value: "ADBLOCK" },
    ],
    sections: [
      {
        title: "Bonus Buy inside the game",
        paragraphs: [
          "If the operator enables Bonus Buy, you pay a higher cost for a denser dig. It speeds entry into events but raises variance and does not guarantee a big win.",
        ],
        points: [
          "availability depends on the casino;",
          "cost is higher than a normal drop;",
          "outcome is still driven by round mechanics.",
        ],
      },
      {
        title: "Platform welcome offers",
        paragraphs: [
          "1win / JetTon / Stake promos are operator terms, not Pixmove parameters. Before activating, check:",
        ],
        points: [
          "deposit bonus percent and amount;",
          "wagering and expiry;",
          "whether Falling Pickaxe contributes to wagering;",
          "withdrawal limits and regional rules.",
        ],
      },
      {
        title: "Promo codes and partner links",
        paragraphs: [
          "Partner links on falling-pickaxe.vip are labelled as advertising. They do not change Falling Pickaxe mathematics or guarantee payment by an operator.",
        ],
      },
    ],
    faq: [
      {
        question: "Do I need to use Bonus Buy?",
        answer:
          "No. It is optional. Standard drops remain available when the operator offers the game.",
      },
      {
        question: "Does promo code ADBLOCK always work?",
        answer:
          "Terms change. Verify the live status and amount on the platform at registration time.",
      },
    ],
    relatedLabel: "Explore the details",
    homeLabel: "Back to the review",
    playLabel: "Choose a platform",
  },
  "how-to-play": {
    slug: "how-to-play",
    title: "How to Play Falling Pickaxe — Rules and Mechanics",
    description:
      "Learn Falling Pickaxe rules step by step: stake, pickaxe drop, ores, TNT, upgrades, Bonus Buy, RTP and stake control.",
    eyebrow: "Rules",
    heading: "How to play Falling Pickaxe",
    intro:
      "Falling Pickaxe builds each round around one vertical drop. The pickaxe passes blocks while durability lasts; ores pay and specials change the path.",
    quickAnswer:
      "In Falling Pickaxe you set a stake and drop a pickaxe into the mine. Copper, gold, diamond and emerald pay; TNT, upgrade and crafting strengthen the path. 95% RTP and ×160 max describe the model, not one drop.",
    updatedLabel: "Checked August 12, 2026",
    highlights: [
      { label: "Step 1", value: "Stake" },
      { label: "Step 2", value: "Drop" },
      { label: "Step 3", value: "Ores / specials" },
    ],
    sections: [
      {
        title: "Round order",
        paragraphs: [
          "Choose stake size. Optionally open Bonus Buy. Launch the drop — the pickaxe falls top to bottom and hits blocks until durability ends or the path stops.",
        ],
        points: [
          "durability is shown on the HUD;",
          "ores are the main payout source;",
          "TNT clears the path;",
          "upgrade arrow and crafting table strengthen the tool mid-fall.",
        ],
      },
      {
        title: "How Falling Pickaxe differs from Mine Slot",
        paragraphs: [
          "Falling Pickaxe is one vertical Pixmove drop. Mine Slot is an InOut dig hybrid with reel pickaxes and chests. Do not confuse the titles in the lobby.",
        ],
      },
      {
        title: "Risk control",
        paragraphs: [
          "Low volatility does not remove a session limit. Set stake size and drop count in advance. 95% RTP and ×160 max are studio guides, not a result promise.",
        ],
      },
    ],
    faq: [
      {
        question: "Does Falling Pickaxe use paylines?",
        answer:
          "It uses a drop mechanic in the mine, not classic lines. Exact rules are in the active version’s paytable.",
      },
      {
        question: "Can I stop the pickaxe manually?",
        answer:
          "There is no cash-out slider like in crash. The round closes when durability ends or the path stops.",
      },
    ],
    relatedLabel: "Explore the details",
    homeLabel: "Back to the review",
    playLabel: "Choose a platform",
  },
};

const pagesByLocale: Record<
  Locale,
  Record<SeoPageSlug, SeoPageContent>
> = {
  ru: ruPages,
  en: enPages,
};

export function getSeoPage(locale: Locale, slug: SeoPageSlug) {
  return pagesByLocale[locale][slug];
}

export function isSeoPageSlug(value: string): value is SeoPageSlug {
  return SEO_PAGE_SLUGS.some((slug) => slug === value);
}

export function getSeoPagePath(locale: Locale, slug: SeoPageSlug) {
  return locale === "ru" ? `/${slug}` : `/en/${slug}`;
}

export function getSeoNavigation(locale: Locale) {
  return SEO_PAGE_SLUGS.map((slug) => {
    const page = getSeoPage(locale, slug);
    return {
      href: getSeoPagePath(locale, slug),
      label:
        locale === "ru"
          ? {
              demo: "Демо",
              rtp: "RTP и математика",
              bonuses: "Бонусы",
              "how-to-play": "Как играть",
            }[slug]
          : {
              demo: "Demo",
              rtp: "RTP and math",
              bonuses: "Bonuses",
              "how-to-play": "How to play",
            }[slug],
      title: page.heading,
    };
  });
}
