"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type NavLink = {
  label: string;
  href: string;
};

type Service = {
  title: string;
  description: string;
  image: string;
  href: string;
};

type WorksItem = {
  title: string;
  date: string;
  category: string;
  image: string;
  href: string;
};

type WorksCategory = {
  id: string;
  label: string;
  items: WorksItem[];
};

type CompanyPanel = {
  title: string;
  image: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "ネモト塗装の強み", href: "#about" },
  { label: "塗装サービス", href: "#services" },
  { label: "価格表", href: "#pricing" },
  { label: "施工事例", href: "#works" },
  { label: "対応エリア", href: "#areas" },
  { label: "会社案内", href: "#company" },
  { label: "お問い合わせ", href: "#contact" },
];

const heroBadges = [
  { top: "外壁", bottom: "塗装" },
  { top: "屋根", bottom: "塗装" },
  { top: "左官", bottom: "塗装" },
  { top: "雨漏" },
  { top: "防水", bottom: "工事" },
  { top: "足場" },
];

const strengths = [
  {
    title: "完全自社施工",
    description:
      "塗装職人として培ってきた確かな技術で、見積りから施工まで責任を持って対応します。",
  },
  {
    title: "的確な診断と提案",
    description:
      "外壁・屋根の劣化状態を丁寧に把握し、お客様にとって最適な工法と塗料をご提案します。",
  },
  {
    title: "地域密着のサポート",
    description:
      "静岡県東部エリアを中心に、迅速なアフターフォローと長期的に安心できる体制を整えています。",
  },
];

const services: Service[] = [
  {
    title: "外壁塗装",
    description:
      "当然ながら専門店ですので、外壁塗装に関しては一流であると自負しています。",
    image: "/images/service-wall.jpg",
    href: "https://tosounemoto.com/service/wall/",
  },
  {
    title: "屋根塗装",
    description:
      "屋根はとても大切な場所です。雨や風、日差しから家を守ってくれています。",
    image: "/images/service-roof.jpg",
    href: "https://tosounemoto.com/service/roof/",
  },
  {
    title: "防水塗装",
    description: "雨漏りの原因を早急に特定して早期解決いたします。",
    image: "/images/service-waterproof.jpg",
    href: "https://tosounemoto.com/service/waterproof/",
  },
];

const worksCategories: WorksCategory[] = [
  {
    id: "exterior",
    label: "外壁・屋根塗装",
    items: [
      {
        title: "宮代製茶様",
        date: "2025年9月17日",
        category: "外壁・屋根塗装",
        image: "/images/work-exterior-01.png",
        href: "https://tosounemoto.com/works/1992/",
      },
      {
        title: "伊豆の国市エメラルドタウンT様邸",
        date: "2024年3月10日",
        category: "外壁・屋根塗装",
        image: "/images/work-exterior-02.jpg",
        href: "https://tosounemoto.com/works/222/",
      },
      {
        title: "函南町 H様邸 外壁塗装",
        date: "2024年2月1日",
        category: "外壁・屋根塗装",
        image: "/images/work-exterior-03.jpg",
        href: "https://tosounemoto.com/works/609/",
      },
    ],
  },
  {
    id: "waterproof",
    label: "防水塗装・工事",
    items: [
      {
        title: "グランドハイツ庄栄",
        date: "2025年8月27日",
        category: "防水塗装・工事",
        image: "/images/work-waterproof-01.jpg",
        href: "https://tosounemoto.com/works/1676/",
      },
      {
        title: "塗膜防水自着シート工法",
        date: "2018年4月9日",
        category: "防水塗装・工事",
        image: "/images/work-waterproof-02.jpg",
        href: "https://tosounemoto.com/works/531/",
      },
      {
        title: "沼津市 N様邸 防水工事",
        date: "2017年11月2日",
        category: "防水塗装・工事",
        image: "/images/work-waterproof-03.jpg",
        href: "https://tosounemoto.com/works/478/",
      },
    ],
  },
  {
    id: "special",
    label: "特殊塗装",
    items: [
      {
        title: "玄関塗装",
        date: "2020年1月17日",
        category: "特殊塗装",
        image: "/images/work-special-01.jpg",
        href: "https://tosounemoto.com/works/588/",
      },
      {
        title: "プレジャーボード塗り替え",
        date: "2018年5月15日",
        category: "特殊塗装",
        image: "/images/work-special-02.jpg",
        href: "https://tosounemoto.com/works/521/",
      },
      {
        title: "三島市 塗り替え外壁屋根塗装",
        date: "2020年10月1日",
        category: "特殊塗装",
        image: "/images/work-special-03.jpg",
        href: "https://tosounemoto.com/works/601/",
      },
    ],
  },
];

const areaList = [
  "沼津市",
  "三島市",
  "清水町",
  "裾野市・御殿場市",
  "長泉町",
  "函南町",
  "熱海市・伊豆方面",
  "伊豆の国市",
];

const companyPanels: CompanyPanel[] = [
  {
    title: "代表者挨拶",
    image: "/images/about-panel-greeting.jpg",
    href: "https://tosounemoto.com/about/#greeting",
  },
  {
    title: "会社概要",
    image: "/images/about-panel-overview.jpg",
    href: "https://tosounemoto.com/about/#overview",
  },
  {
    title: "職人紹介",
    image: "/images/about-panel-craftsman.jpg",
    href: "https://tosounemoto.com/about/#craftsman",
  },
];

const footerNavLinks: NavLink[] = [
  { label: "ネモト塗装の強み", href: "https://tosounemoto.com/strength/" },
  { label: "塗装サービス", href: "#services" },
  { label: "価格表", href: "#pricing" },
  { label: "施工事例", href: "#works" },
  { label: "対応エリア", href: "#areas" },
  { label: "会社案内", href: "#company" },
  { label: "お問い合わせ", href: "#contact" },
  { label: "プライバシーポリシー", href: "https://tosounemoto.com/privacy-policy/" },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(worksCategories[0].id);

  const activeWorks = useMemo(() => {
    return worksCategories.find((category) => category.id === activeCategory)?.items ?? [];
  }, [activeCategory]);

  return (
    <div className="bg-white text-[#333333]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#19663a]/30 text-[#19663a] lg:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              <span className="sr-only">toggle menu</span>
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <>
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                  </>
                )}
              </svg>
            </button>
            <div className="flex items-center gap-4">
              <Link href="#hero" className="flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  alt="有限会社ネモト塗装工業"
                  width={184}
                  height={28}
                  priority
                  className="h-auto w-40 sm:w-48"
                />
              </Link>
              <span className="hidden text-sm text-gray-500 sm:block">
                静岡県沼津市　塗装・防水のプロ集団
              </span>
            </div>
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <div className="text-right text-xs text-gray-500">
              <div className="font-medium text-[#19663a]">0120-437-770</div>
              <div>営業時間 8:30～18:00（日祝を除く）</div>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:0120-437-770"
                className="flex items-center gap-2 rounded-full bg-[#19663a] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#14502d]"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 12.7 12.7 0 004 0 1 1 0 01.79.24l2.54 2.54a1 1 0 01.24.99 4.74 4.74 0 01-4.47 3.29c-7.73 0-14-6.27-14-14A4.74 4.74 0 014.29 2a1 1 0 01.99.24l2.54 2.54a1 1 0 01.24.79 12.7 12.7 0 000 4 1 1 0 01-.24 1.01z" />
                </svg>
                お電話はこちら
              </a>
              <Link
                href="#contact"
                className="flex items-center gap-2 rounded-full border border-[#19663a] px-5 py-2 text-sm font-semibold text-[#19663a] transition hover:bg-[#19663a] hover:text-white"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2l-10 7L2 6zm0 2.24V18a2 2 0 002 2h16a2 2 0 002-2V8.24l-9.12 6.38a2 2 0 01-2.28 0L2 8.24z" />
                </svg>
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
        <nav
          className={`border-t border-black/5 bg-white lg:border-none ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <ul className="mx-auto flex max-w-screen-xl flex-col gap-2 px-4 py-4 text-sm font-medium text-[#19663a] lg:flex-row lg:flex-wrap lg:items-center lg:gap-6 lg:px-6 lg:py-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("#") ? (
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-full px-4 py-2 transition hover:bg-[#19663a]/10"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-full px-4 py-2 transition hover:bg-[#19663a]/10"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pb-32">
        <section id="hero" className="relative">
          <div className="relative min-h-[520px] overflow-hidden">
            <Image
              src="/images/hero-bg.jpg"
              alt="施工中の様子"
              fill
              priority
              className="object-cover object-[70%_50%]"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="relative mx-auto flex max-w-screen-xl flex-col gap-10 px-4 py-16 text-white sm:px-6 lg:flex-row lg:items-center lg:py-24">
              <div className="max-w-xl lg:max-w-lg">
                <div className="mb-6 grid grid-cols-3 gap-2 text-center text-sm font-semibold sm:grid-cols-6">
                  {heroBadges.map((badge) => (
                    <div
                      key={badge.top}
                      className="rounded-md border border-white/40 bg-black/30 px-2 py-3 leading-tight backdrop-blur"
                    >
                      <span className="block text-xs text-white/70">{badge.top}</span>
                      {badge.bottom ? (
                        <span className="block text-lg font-bold">{badge.bottom}</span>
                      ) : null}
                    </div>
                  ))}
                </div>
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                  妥協なしの施工で
                  <br />
                  プライドを持って
                  <br />
                  塗装いたします
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#f7f7f7] py-16">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
            <h2 className="text-center text-3xl font-bold">
              <span className="relative inline-block px-2">
                <span className="absolute inset-x-0 bottom-0 h-3 translate-y-1 rounded-sm bg-[#ffdc40]" aria-hidden />
                <span className="relative">
                  お客様に長期間にわたって喜んでいただける妥協のない職人の集団
                </span>
              </span>
            </h2>
            <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-6 text-sm leading-relaxed sm:text-base">
                <p>
                  ネモト塗装工業ではお客様に満足される責任ある施工をモットーに日々努力しています。塗装職人から始めて、塗装に関して深く追求し今も感じることは「妥協のない職人仕事」で、納得の仕上がりをお客様にご提供するということです。
                </p>
                <p>
                  塗装に関して深く追求してきたこと、これが「塗装をするならおたくにしようと思っていた」と安心して選んでいただいている一番の理由です。経験豊富な職人による完全自社施工で、お客様に納得いただける適正価格と仕上がりをお約束します。まずはお気軽にご相談ください。
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {strengths.map((strength) => (
                    <div
                      key={strength.title}
                      className="rounded-xl border border-[#19663a]/20 bg-white p-4 shadow-sm"
                    >
                      <h3 className="text-base font-semibold text-[#19663a]">
                        {strength.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">{strength.description}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="https://tosounemoto.com/strength/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#19663a] px-6 py-3 text-sm font-semibold text-[#19663a] transition hover:bg-[#19663a] hover:text-white"
                >
                  ネモト塗装の強み
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src="/images/about-appearance.png"
                  alt="ネモト塗装工業の施工風景"
                  width={750}
                  height={563}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
            <div className="text-center">
              <p className="text-sm font-semibold tracking-[0.4em] text-[#19663a]">SERVICE</p>
              <h2 className="mt-2 text-3xl font-bold">塗装サービス</h2>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <a
                  key={service.title}
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col overflow-hidden rounded-3xl border border-[#19663a]/20 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[3/2]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="text-xl font-semibold text-[#19663a]">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#19663a]">
                      詳しく見る
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div id="pricing" className="mt-12 text-center">
              <a
                href="https://tosounemoto.com/price/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#19663a] px-8 py-3 text-sm font-semibold text-[#19663a] transition hover:bg-[#19663a] hover:text-white"
              >
                価格表
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section id="works" className="bg-[#f7f7f7] py-16">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
            <div className="text-center">
              <p className="text-sm font-semibold tracking-[0.4em] text-[#19663a]">WORKS</p>
              <h2 className="mt-2 text-3xl font-bold">施工事例</h2>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {worksCategories.map((category) => {
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "border-[#19663a] bg-[#19663a] text-white"
                        : "border-[#19663a]/40 bg-white text-[#19663a] hover:border-[#19663a]"
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {activeWorks.map((work) => (
                <a
                  key={work.title}
                  href={work.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#19663a]/20 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <h3 className="text-lg font-semibold text-[#19663a]">
                      {work.title}
                    </h3>
                    <div className="mt-auto flex flex-wrap items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M12 8v4l3 3" />
                          <circle cx={12} cy={12} r={9} />
                        </svg>
                        {work.date}
                      </span>
                      <span className="flex items-center gap-1 text-[#19663a]">
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M3 9h18M3 15h18" />
                          <path d="M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {work.category}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://tosounemoto.com/works/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#19663a] px-8 py-3 text-sm font-semibold text-[#19663a] transition hover:bg-[#19663a] hover:text-white"
              >
                施工事例一覧
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section id="areas" className="py-16">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold tracking-[0.4em] text-[#19663a]">AREA</p>
                  <h2 className="mt-2 text-3xl font-bold">対応エリア</h2>
                </div>
                <div className="overflow-hidden rounded-3xl border border-[#19663a]/20 shadow-sm">
                  <Image
                    src="/images/area.png"
                    alt="対応エリアの地図"
                    width={750}
                    height={563}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  沼津市、三島市、清水町など静岡県東部の幅広い地域に対応しています。
                </p>
                <ul className="grid grid-cols-2 gap-3 text-sm text-[#19663a] sm:grid-cols-4">
                  {areaList.map((area) => (
                    <li key={area} className="flex items-center gap-2 rounded-full border border-[#19663a]/20 bg-[#19663a]/5 px-4 py-2">
                      <span className="h-2 w-2 rounded-full bg-[#19663a]" aria-hidden />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div id="company" className="space-y-10">
                <div>
                  <p className="text-sm font-semibold tracking-[0.4em] text-[#19663a]">ABOUT US</p>
                  <h2 className="mt-2 text-3xl font-bold">会社案内</h2>
                </div>
                <div className="grid gap-6">
                  {companyPanels.map((panel) => (
                    <a
                      key={panel.title}
                      href={panel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group grid gap-6 overflow-hidden rounded-3xl border border-[#19663a]/20 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:grid-cols-[1fr_1.5fr]"
                    >
                      <div className="relative aspect-[3/1] md:aspect-auto">
                        <Image
                          src={panel.image}
                          alt={panel.title}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col gap-2 p-6">
                        <h3 className="text-xl font-semibold text-[#19663a]">
                          {panel.title}
                        </h3>
                        <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#19663a]">
                          READ MORE
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14" />
                            <path d="M13 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden py-16">
          <Image
            src="/images/footer-bg.jpg"
            alt="お問い合わせ背景"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/60" />
          <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6">
            <div className="rounded-3xl border border-[#19663a]/20 bg-white/80 p-10 shadow-xl backdrop-blur">
              <h2 className="text-center text-3xl font-bold text-[#19663a]">
                <span className="inline-flex items-center gap-3">
                  <span className="rounded-full bg-[#ffdc40] px-4 py-1 text-sm font-semibold text-black">
                    無料
                  </span>
                  <span>ご相談</span>
                  <span>診断</span>
                  <span>お見積り</span>
                </span>
                <br />
                <span className="text-xl font-normal text-[#333333]">
                  まずはお気軽にご相談ください
                </span>
              </h2>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-[#19663a]/20 bg-[#19663a]/5 p-6 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#19663a]">
                    TEL
                  </p>
                  <a
                    href="tel:0120-437-770"
                    className="mt-2 block text-3xl font-bold text-[#19663a]"
                  >
                    0120-437-770
                  </a>
                  <p className="mt-3 text-sm text-gray-600">
                    営業時間 8:30～18:00（日祝を除く）
                  </p>
                </div>
                <div className="rounded-2xl border border-[#19663a]/20 bg-[#19663a]/5 p-6 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#19663a]">
                    MAIL
                  </p>
                  <Link
                    href="https://tosounemoto.com/contact/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#19663a] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#14502d]"
                  >
                    お問い合わせフォーム
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white pt-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className="grid gap-12 xl:grid-cols-3">
            <div className="space-y-6">
              <Link href="#hero" className="inline-block">
                <Image
                  src="/images/logo.png"
                  alt="有限会社ネモト塗装工業"
                  width={184}
                  height={28}
                  className="h-auto w-48"
                />
              </Link>
              <div>
                <h3 className="text-lg font-semibold text-[#19663a]">
                  有限会社ネモト塗装工業
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  〒410-0821　静岡県沼津市大平2102-1
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p>
                    <span className="font-semibold text-[#19663a]">TEL.</span>
                    <a className="ml-2" href="tel:055-941-5171">
                      055-941-5171
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-[#19663a]">FAX.</span>
                    <span className="ml-2">055-941-5172</span>
                  </p>
                  <p>
                    <span className="font-semibold text-[#19663a]">営業時間</span>
                    <span className="ml-2">8:30～18:00</span>
                  </p>
                  <p>
                    <span className="font-semibold text-[#19663a]">定休日</span>
                    <span className="ml-2">日曜日・祝日</span>
                  </p>
                </div>
              </div>
              <div>
                <a
                  href="https://astec-japan.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Image
                    src="/images/astec.jpg"
                    alt="アステックジャパン"
                    width={398}
                    height={108}
                    className="h-auto w-64"
                  />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-[#19663a]">沼津本社</h4>
                <p className="mt-1 text-sm text-gray-600">静岡県沼津市大平 2102-1</p>
                <div className="mt-4 overflow-hidden rounded-2xl border border-[#19663a]/20">
                  <iframe
                    title="沼津本社"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.2822977188284!2d138.90898131279263!3d35.07467867267559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601991afbf07d637%3A0xd39db6b80e17ec2b!2z77yI5pyJ77yJ44ON44Oi44OI5aGX6KOF5bel5qWt!5e0!3m2!1sja!2sjp!4v1724233504480!5m2!1sja!2sjp"
                    width="100%"
                    height="220"
                    loading="lazy"
                    allowFullScreen
                    style={{ border: 0 }}
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#19663a]">函南ショールーム</h4>
                <p className="mt-1 text-sm text-gray-600">静岡県田方群函南町平井621-7</p>
                <div className="mt-4 overflow-hidden rounded-2xl border border-[#19663a]/20">
                  <iframe
                    title="函南ショールーム"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.6883610428627!2d138.9503001757615!3d35.08951857278395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019911210cc08dd%3A0x7bfeff709f82a65e!2z5pyJ6ZmQ5Lya56S-44ON44Oi44OI5aGX6KOF5bel5qWtIOWHveWNl-OCt-ODp-ODvOODq-ODvOODoA!5e0!3m2!1sja!2sjp!4v1725279487333!5m2!1sja!2sjp"
                    width="100%"
                    height="220"
                    loading="lazy"
                    allowFullScreen
                    style={{ border: 0 }}
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-[#19663a]">メニュー</h4>
              <ul className="grid gap-3 text-sm text-gray-600">
                {footerNavLinks.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("#") ? (
                      <Link href={link.href} className="transition hover:text-[#19663a]">
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="transition hover:text-[#19663a]"
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-black/5 py-6 text-center text-xs text-gray-500">
            © 有限会社ネモト塗装工業
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 shadow-[0_-8px_30px_rgba(0,0,0,0.1)] backdrop-blur">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <h2 className="text-center text-lg font-semibold text-[#19663a] sm:text-left">
            <span className="mr-3 inline-flex rounded-full bg-[#ffdc40] px-3 py-0.5 text-xs font-bold text-black">
              無料
            </span>
            ご相談・診断・お見積り まずはお気軽にご連絡ください
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:0120-437-770"
              className="flex items-center justify-center gap-2 rounded-full bg-[#19663a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#14502d]"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 12.7 12.7 0 004 0 1 1 0 01.79.24l2.54 2.54a1 1 0 01.24.99 4.74 4.74 0 01-4.47 3.29c-7.73 0-14-6.27-14-14A4.74 4.74 0 014.29 2a1 1 0 01.99.24l2.54 2.54a1 1 0 01.24.79 12.7 12.7 0 000 4 1 1 0 01-.24 1.01z" />
              </svg>
              0120-437-770
            </a>
            <Link
              href="https://tosounemoto.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-[#19663a] px-6 py-3 text-sm font-semibold text-[#19663a] transition hover:bg-[#19663a] hover:text-white"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
