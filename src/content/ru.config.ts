import type { LandingConfig } from "./types";
import { PARTNER_BASE, SHARED_GAME, SHARED_SITE, SHARED_THEME } from "./shared";

export const ruConfig = {
  locale: "ru",
  path: "/",
  language: "ru-RU",
  site: {
    ...SHARED_SITE,
    ogLocale: "ru_RU",
    title: "Falling Pickaxe — Играть Онлайн | Официальный сайт",
    description:
      "Falling Pickaxe от Pixmove: instant с падающей киркой, RTP 95%, низкая волатильность, max ×160. Обзор, скриншоты и где играть на деньги с бонусами.",
    keywords: [
      "falling pickaxe",
      "falling pickaxe играть",
      "falling pickaxe играть онлайн",
      "falling pickaxe официальный сайт",
      "falling pickaxe pixmove",
      "falling pickaxe rtp",
      "falling pickaxe обзор",
      "falling pickaxe демо",
      "falling pickaxe слот",
    ],
  },
  ai: {
    answerLabel: "Короткий ответ",
    answer:
      "Falling Pickaxe — instant Pixmove (июнь 2026): роняете кирку в вертикальную шахту, ломаете руды, ловите TNT и апгрейды. В листе RTP 95%, низкая волатильность, max ×160. Сайт falling-pickaxe.vip — независимый обзор, а не страница студии.",
    factsLabel: "Ключевые факты для поиска",
    facts: [
      { label: "Игра", value: "Falling Pickaxe" },
      { label: "Студия", value: "Pixmove" },
      { label: "Категория", value: "Instant" },
      { label: "RTP", value: "95%" },
      { label: "Max win", value: "×160" },
      { label: "Волатильность", value: "Низкая" },
      { label: "Механика", value: "Падающая кирка + руды" },
      { label: "Не путать с", value: "Mine Slot (InOut)" },
    ],
    trustLabel: "О сайте",
    trust:
      "Материалы обновлены 12 августа 2026. falling-pickaxe.vip не принадлежит Pixmove и не принимает ставки. RTP и max win — по студийному листу; живой tier сверяйте у оператора.",
  },
  theme: SHARED_THEME,
  game: {
    ...SHARED_GAME,
    alternateNames: ["FallingPickaxe", "Падающая кирка"],
    volatility: "Низкая",
    grid: "Вертикальная шахта",
    mechanics: "Drop dig / ores / TNT",
    heroLead:
      "Роняете кирку в шахту — она крушит блок за блоком, ловит руды и апгрейды. Спокойный instant с RTP 95% и потолком ×160.",
  },
  nav: [
    { href: "#about", label: "Об игре" },
    { href: "#mechanics", label: "Механика" },
    { href: "#screens", label: "Скриншоты" },
    { href: "#play", label: "Играть" },
    { href: "#faq", label: "FAQ" },
  ],
  stats: [
    { label: "Провайдер", value: SHARED_GAME.provider },
    { label: "Категория", value: "Instant" },
    { label: "RTP", value: SHARED_GAME.rtp },
    { label: "Волатильность", value: "Низкая" },
    { label: "Max win", value: SHARED_GAME.maxWin },
    { label: "Релиз", value: "Июнь 2026" },
  ],
  steps: [
    {
      title: "Ставите ставку",
      text: "Выбираете размер ставки снизу. При желании включаете Bonus Buy, если оператор его отдаёт.",
    },
    {
      title: "Роняете кирку",
      text: "Один инструмент падает в вертикальную шахту и бьёт блок за блоком, пока хватает прочности.",
    },
    {
      title: "Ловите руды и спецтайлы",
      text: "Медь, золото, алмаз и изумруд платят; TNT чистит путь; стрелка апгрейда и верстак усиливают инструмент mid-fall.",
    },
    {
      title: "Закрываете раунд",
      text: "Когда прочность кончается или путь обрывается, раунд завершается. Низкая волатильность — чаще плотные мелкие/средние выплаты.",
    },
  ],
  features: [
    {
      title: "Руды",
      text: "Медь, золото, алмаз и изумруд дают выплату при расколе — основной источник возврата в раунде.",
      image: "/media/ui-1.webp",
      alt: "Хаб Falling Pickaxe до броска",
    },
    {
      title: "TNT и апгрейды",
      text: "TNT расчищает путь, стрелка апгрейда увеличивает кирку mid-fall, верстак куёт более сильный tier.",
      image: "/media/ui-2.webp",
      alt: "Шахта Falling Pickaxe с рудами и прочностью",
    },
    {
      title: "Bonus Buy",
      text: "Если казино включает Bonus Buy — ускоряете вход в плотный dig. Это не гарантия крупного выигрыша.",
      image: "/media/cover.webp",
      alt: "Обложка Falling Pickaxe",
    },
  ],
  gallery: [
    {
      src: "/media/ui-1.webp",
      alt: "Хаб Falling Pickaxe — пейзаж и ставка",
      caption: "До броска: хаб и HUD",
    },
    {
      src: "/media/ui-2.webp",
      alt: "Копание Falling Pickaxe — шахта и руды",
      caption: "В раунде: шахта и прочность",
    },
    {
      src: "/media/cover.webp",
      alt: "Обложка Falling Pickaxe",
      caption: "Обложка игры",
    },
  ],
  partners: PARTNER_BASE.map((partner, index) => ({
    ...partner,
    badge: ["Выбор", "Бонус", "Original"][index],
    bonusExtra: index === 2 ? "рейкбек" : partner.bonusExtra,
  })),
  faq: [
    {
      question: "Что такое Falling Pickaxe?",
      answer:
        "Instant Pixmove от июня 2026: роняете кирку в шахту блоков, раскалываете руды, ловите TNT / апгрейды / верстак. В листе RTP 95%, низкая волатильность, max ×160.",
    },
    {
      question: "Какой RTP у Falling Pickaxe?",
      answer:
        "У Pixmove указано 95%. Живой tier всегда сверяйте в клиенте казино перед депозитом.",
    },
    {
      question: "Какой max win у Falling Pickaxe?",
      answer: "В студийном листе — максимум ×160 от ставки.",
    },
    {
      question: "Кто сделал Falling Pickaxe?",
      answer: "Pixmove Games.",
    },
    {
      question: "Falling Pickaxe или Mine Slot — что выбрать?",
      answer:
        "Falling Pickaxe = один вертикальный бросок с прочностью и рудами (Pixmove). Mine Slot = dig-гибрид InOut с кирками с барабанов и сундуками.",
    },
    {
      question: "Где играть в Falling Pickaxe на деньги?",
      answer:
        "Через короткий список на этой странице — 1win, JetTon, Stake — затем откройте Falling Pickaxe в лобби казино.",
    },
    {
      question: "Есть ли демо Falling Pickaxe?",
      answer:
        "Студийное демо есть на сайте Pixmove. Для игры на деньги — лицензированные казино ниже.",
    },
  ],
  riskCards: [
    {
      value: SHARED_GAME.rtp,
      title: "Теоретический возврат",
      text: "RTP 95% — студийная цифра на длинной дистанции. Живой tier может отличаться у оператора.",
    },
    {
      value: "Низкая",
      title: "Профиль риска",
      text: "Низкая волатильность: чаще плотные мелкие и средние выплаты с руд, чем редкие мега-спайки.",
    },
    {
      value: SHARED_GAME.maxWin,
      title: "Максимальный потенциал",
      text: "Потолок ×160 скромнее high-vol crash. Берите ставку под короткий цикл бросков.",
    },
  ],
  compareRows: [
    { label: "Провайдер", mineDrop: "Pixmove", mineSlot: "InOut" },
    {
      label: "Цикл",
      mineDrop: "Один бросок кирки",
      mineSlot: "Кирки с барабанов + поле",
    },
    {
      label: "Волатильность",
      mineDrop: "Низкая",
      mineSlot: "Средняя / зависит от тайтла",
    },
    {
      label: "Max win",
      mineDrop: "×160",
      mineSlot: "Смотрите лист Mine Slot",
    },
  ],
  ui: {
    header: {
      skip: "К содержанию",
      navLabel: "Основная навигация",
      mobileNavLabel: "Мобильная навигация",
      languageLabel: "Язык сайта",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
      play: "Играть",
    },
    hero: {
      primaryCta: "Играть",
      secondaryCta: "Как играть",
      factsLabel: "Ключевые параметры игры",
      rtpLabel: "RTP",
      maxLabel: "Max",
      riskLabel: "Риск",
      visualLabel: "Визуал Falling Pickaxe",
      screenAlt: "Раунд Falling Pickaxe в шахте",
      coverAlt: "Обложка Falling Pickaxe",
    },
    specsTitle: "Характеристики Falling Pickaxe",
    about: {
      eyebrow: "Об игре",
      title: "Один бросок — целая шахта",
      lead: "Falling Pickaxe не крутит поле Mine Slot: вы роняете один инструмент и смотрите, как он проходит блоки, руды и апгрейды.",
      figureAlt: "Интерфейс Falling Pickaxe до броска",
      caption: "Хаб до копания: пейзаж, ставка и Bonus Buy.",
      label: "Суть игры",
      summaryTitle: "Кирка падает, пока хватает прочности",
      paragraphs: [
        "Falling Pickaxe — instant Pixmove с релизом в июне 2026. В студийном листе: RTP 95%, низкая волатильность, max ×160.",
        "Медь, золото, алмаз и изумруд платят при расколе; TNT чистит путь; стрелка апгрейда и верстак усиливают инструмент mid-fall.",
      ],
      link: "Как устроен раунд →",
      highlights: [
        {
          label: "01",
          title: "Вертикальный бросок",
          text: "Один инструмент, одна шахта, прочность на HUD.",
        },
        {
          label: "02",
          title: "Руды и спецтайлы",
          text: "Выплаты с руд плюс TNT, апгрейд и верстак mid-fall.",
        },
        {
          label: "03",
          title: "Спокойный риск",
          text: "Low vol, RTP 95%, потолок ×160 — без слайдера cash-out.",
        },
      ],
    },
    mechanics: {
      eyebrow: "Логика раунда",
      title: "Как проходит бросок",
      lead: "Четыре шага — от ставки до закрытия раунда без рекламного тумана.",
    },
    features: {
      eyebrow: "Ключевые события",
      title: "Что меняет путь кирки",
      lead: "Руды, TNT/апгрейды и Bonus Buy — три опоры цикла Falling Pickaxe.",
    },
    math: {
      eyebrow: "Математика",
      title: "Цифры без обещаний",
      lead: "RTP, волатильность и max win описывают модель, но не гарантируют результат конкретного броска.",
    },
    compare: {
      eyebrow: "Не перепутайте",
      title: "Falling Pickaxe — не Mine Slot",
      lead: "Одна шахтёрская фантазия, разные студии и циклы.",
      caption: "Сравнение Falling Pickaxe и Mine Slot",
      columns: ["Критерий", "Falling Pickaxe", "Mine Slot"],
      link: "Посмотреть интерфейс →",
    },
    gallery: {
      eyebrow: "Интерфейс",
      title: "Игра крупным планом",
      lead: "Кадры с официальной страницы Pixmove: хаб до броска и живая шахта.",
      cta: "Выбрать площадку",
    },
    partners: {
      eyebrow: "Площадки",
      title: "Где играть в Falling Pickaxe",
      lead: "Сравните бонус, промокод и рейтинг. Условия могут меняться — проверяйте на стороне площадки.",
      ratingLabel: "Рейтинг",
      welcomeBonus: "Бонус новичкам",
      promoLabel: "Код",
      copy: "Копировать",
      copied: "Готово",
      copyAria: "Скопировать промокод",
      noPromo: "Бонусы без промокода",
      play: "Играть в",
      legal: "18+ · Играйте ответственно",
    },
    ageGate: {
      title: "Вам есть 18 лет?",
      text: "Переход на площадку доступен только совершеннолетним. Играйте ответственно.",
      confirm: "Да, мне есть 18",
      deny: "Нет",
      denied: "Доступ только для пользователей 18+.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Коротко о главном",
      lead: "Ответы про RTP, max win, демо и отличие от Mine Slot.",
    },
    footer: {
      text: "Обзор Falling Pickaxe: параметры, механика, интерфейс и площадки для запуска.",
      cta: "Выбрать площадку",
      legal:
        "18+. Играйте ответственно. Азартные игры могут вызывать зависимость. Сайт не является официальной страницей разработчика.",
    },
    schemaOffer: "Демо-режим может быть доступен бесплатно",
    howToName: "Как играть в Falling Pickaxe",
    howToDescription:
      "Пошаговая механика: ставка, бросок кирки, руды / TNT / апгрейды и закрытие раунда.",
    ogTagline: "Играть онлайн",
  },
} satisfies LandingConfig;
