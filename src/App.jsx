import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaShopify, FaTelegram, FaTiktok } from "react-icons/fa";
import { SiBinance, SiGoogleads, SiMeta, SiShopee, SiTether } from "react-icons/si";
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  CheckCircle2,
  CreditCard,
  Globe2,
  Headphones,
  Infinity,
  Layers3,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  UserRound,
  Wallet,
  Zap,
} from "lucide-react";

const content = {
  vi: {
    nav: ["Trang chủ", "Phí", "Lợi ích", "Giải pháp", "Cách hoạt động", "FAQ"],
    cta: "Bắt đầu ngay",
    contact: "Liên hệ sales",
    badge: "Dành cho advertiser & agency",
    title: "Thẻ ảo tối ưu cho quảng cáo",
    title2: "chi tiêu và tăng trưởng",
    desc: "BMCard giúp advertiser, agency và affiliate team nạp trực tiếp bằng USDT, mở vô hạn thẻ ảo, kiểm soát chi tiêu và tối ưu ngân sách quảng cáo.",
    features: [
      ["Nạp trực tiếp bằng USDT", Wallet],
      ["0% phí giao dịch", BadgeDollarSign],
      ["Không phí ẩn", ShieldCheck],
      ["Mở vô hạn thẻ", Infinity],
      ["Tự chủ chi tiêu", BarChart3],
      ["Đa dạng đầu BIN", Layers3],
    ],
    stats: [
      ["10,000+", "Advertiser tin dùng", UserRound],
      ["500M+", "USD chi tiêu mỗi tháng", Wallet],
      ["99.9%", "Tỷ lệ thành công", ShieldCheck],
      ["24/7", "Hỗ trợ toàn cầu", Headphones],
    ],
    partnersTitle: "Được tin dùng bởi advertiser và các nền tảng hàng đầu",
    benefitsTitle: "Lợi ích nổi bật dành riêng cho advertiser",
    benefitsDesc: "Tất cả những gì bạn cần để chi tiêu quảng cáo hiệu quả hơn: nạp nhanh, phí rõ ràng, mở thẻ linh hoạt và kiểm soát ngân sách tốt hơn.",
    benefits: [
      ["Nạp trực tiếp bằng USDT", "Nạp tiền nhanh chóng, phù hợp với đội ngũ chạy quảng cáo quốc tế.", Wallet],
      ["0% phí giao dịch", "Không mất phí khi thanh toán. Tối ưu ngân sách quảng cáo.", BadgeDollarSign],
      ["Không phí ẩn", "Minh bạch chi phí, không phụ phí bất ngờ sau giao dịch.", ShieldCheck],
      ["Mở vô hạn thẻ", "Tạo thẻ riêng cho từng tài khoản, chiến dịch hoặc buyer.", Infinity],
      ["Tự chủ chi tiêu", "Thiết lập hạn mức và kiểm soát mọi giao dịch theo thời gian thực.", BarChart3],
      ["Thẻ chính chủ", "Quản lý thẻ rõ ràng, an toàn và chủ động hơn khi vận hành.", LockKeyhole],
    ],
    useTitle: "Một hệ thống thẻ cho mọi nền tảng quảng cáo",
    useDesc: "BMCard phù hợp cho media buyer, affiliate, agency và doanh nghiệp cần quản lý nhiều tài khoản quảng cáo, nhiều campaign và nhiều ngân sách khác nhau.",
    useCases: ["Google Ads", "TikTok Ads", "Meta Ads", "Shopee Ads", "Lazada Ads", "Affiliate Marketing"],
    stepsTitle: "Từ nạp USDT đến chạy campaign chỉ trong vài bước",
    steps: [
      ["01", "Tạo tài khoản BMCard", "Thiết lập workspace để quản lý thẻ và ngân sách quảng cáo."],
      ["02", "Nạp trực tiếp bằng USDT", "Nạp tiền nhanh và phân bổ ngân sách vào số dư thẻ."],
      ["03", "Mở vô hạn thẻ ảo", "Tạo thẻ riêng cho từng campaign, tài khoản ads hoặc buyer."],
      ["04", "Gắn thẻ vào tài khoản ads", "Sử dụng BMCard cho Google Ads, TikTok Ads, Meta Ads và nhiều nền tảng khác."],
    ],
    pricingTitle: "Không để phí ẩn ăn vào ngân sách quảng cáo",
    pricingDesc: "0% phí giao dịch, nạp trực tiếp USDT, mở vô hạn thẻ và kiểm soát chi tiêu rõ ràng.",
    faqTitle: "Những câu hỏi advertiser thường quan tâm",
    faqs: [
      ["BMCard có nạp bằng USDT được không?", "Có. BMCard hỗ trợ nạp trực tiếp bằng USDT để cấp ngân sách vào thẻ nhanh hơn."],
      ["Có thật là 0% phí giao dịch không?", "Có. BMCard tập trung vào thông điệp 0% phí giao dịch để user dành nhiều ngân sách hơn cho ad spend."],
      ["Có phí ẩn không?", "Không. BMCard được thiết kế với pricing minh bạch và không có phí ẩn sau giao dịch."],
      ["Tôi có thể mở bao nhiêu thẻ ảo?", "Bạn có thể mở vô hạn thẻ ảo cho nhiều campaign, khách hàng, platform và tài khoản quảng cáo."],
    ],
    finalTitle: "Sẵn sàng scale ad spend với BMCard?",
    feeTitle: "Cấu trúc phí minh bạch",
    feeDesc: "Toàn bộ chi phí được trình bày rõ ràng để advertiser dễ dàng tính toán ngân sách quảng cáo.",
    feeItems: [
      ["$0", "Phí mở thẻ", "Mở thẻ nhanh chóng, không cần trả phí khởi tạo.", CreditCard, "from-emerald-400/20 to-emerald-500/5", "text-emerald-300", "border-emerald-400/20"],
      ["0%", "Phí nạp tiền", "Nạp tiền trực tiếp bằng USDT mà không mất phí top-up.", Wallet, "from-green-400/20 to-green-500/5", "text-green-300", "border-green-400/20"],
      ["0%", "Phí giao dịch", "Thanh toán quảng cáo mà không bị trừ thêm phí giao dịch.", BadgeDollarSign, "from-sky-400/20 to-sky-500/5", "text-sky-300", "border-sky-400/20"],
      ["0.5%", "Phí FX", "Áp dụng cho giao dịch non-USD payment.", Globe2, "from-amber-400/20 to-amber-500/5", "text-amber-300", "border-amber-400/20"],
      ["1.5%", "Hoàn tiền", "Hoàn tiền trên chi tiêu đủ điều kiện, giúp tối ưu ngân sách quảng cáo.", Sparkles, "from-yellow-400/20 to-yellow-500/5", "text-yellow-300", "border-yellow-400/20"],
      ["No", "monthly fee", "Không mất phí duy trì tài khoản/thẻ hàng tháng.", ShieldCheck, "from-zinc-300/20 to-zinc-500/5", "text-zinc-200", "border-zinc-300/20"],
      ["Web", "Quản lý chi tiêu", "Theo dõi thẻ, ngân sách, giao dịch và chi tiêu quảng cáo trong một dashboard.", BarChart3, "from-cyan-400/20 to-cyan-500/5", "text-cyan-300", "border-cyan-400/20"],
    ],
    finalDesc: "Bắt đầu mở thẻ ảo, nạp bằng USDT và kiểm soát ngân sách campaign bằng hệ thống thanh toán dành cho advertiser.",
  },
  en: {
    nav: ["Home", "Fees", "Benefits", "Solutions", "How it works", "FAQ"],
    cta: "Get started",
    contact: "Contact sales",
    badge: "Built for advertisers & agencies",
    title: "Virtual cards built for advertising",
    title2: "spend and growth",
    desc: "BMCard helps advertisers, agencies, and affiliate teams top up with USDT, create unlimited virtual cards, control spending, and optimize ad budgets.",
    features: [
      ["Direct USDT top-up", Wallet],
      ["0% transaction fee", BadgeDollarSign],
      ["No hidden fees", ShieldCheck],
      ["Unlimited cards", Infinity],
      ["Full spend control", BarChart3],
      ["Multiple BIN options", Layers3],
    ],
    stats: [
      ["10,000+", "Trusted advertisers", UserRound],
      ["500M+", "Monthly USD spend", Wallet],
      ["99.9%", "Success rate", ShieldCheck],
      ["24/7", "Global support", Headphones],
    ],
    partnersTitle: "Trusted by advertisers and leading platforms",
    benefitsTitle: "Everything advertisers need to spend smarter",
    benefitsDesc: "Top up faster, keep fees clear, create cards flexibly, and manage ad budgets with more control.",
    benefits: [
      ["Direct USDT Top-Up", "Fund cards quickly and securely with USDT.", Wallet],
      ["0% Transaction Fee", "Spend more on campaigns, not payment fees.", BadgeDollarSign],
      ["No Hidden Fees", "Transparent pricing with no surprise deductions.", ShieldCheck],
      ["Unlimited Virtual Cards", "Create cards for every account, campaign, client, or buyer.", Infinity],
      ["Full Spending Control", "Set limits and control every transaction in real time.", BarChart3],
      ["Real-Name Ownership", "Use cards under your own account with clearer control.", LockKeyhole],
    ],
    useTitle: "One card system for every advertising platform",
    useDesc: "BMCard is designed for media buyers, affiliates, agencies, and businesses managing multiple ad accounts, campaigns, and budgets.",
    useCases: ["Google Ads", "TikTok Ads", "Meta Ads", "Shopee Ads", "Lazada Ads", "Affiliate Marketing"],
    stepsTitle: "From USDT top-up to live campaigns in minutes",
    steps: [
      ["01", "Create your BMCard account", "Set up your workspace for card and ad budget management."],
      ["02", "Top up directly with USDT", "Add funds quickly and allocate budget to your card balance."],
      ["03", "Create unlimited cards", "Launch separate cards for campaigns, ad accounts, or buyers."],
      ["04", "Attach cards to ad accounts", "Use BMCard across Google Ads, TikTok Ads, Meta Ads, and more."],
    ],
    pricingTitle: "No hidden costs eating into your ad budget",
    pricingDesc: "0% transaction fee, direct USDT top-up, unlimited cards, and clear spending control.",
    faqTitle: "Questions advertisers usually ask",
    faqs: [
      ["Can I top up BMCard with USDT?", "Yes. BMCard supports direct USDT top-up for faster card funding."],
      ["Is there really a 0% transaction fee?", "Yes. BMCard is positioned around a clear 0% transaction fee message."],
      ["Are there hidden fees?", "No. BMCard is designed around transparent pricing with no hidden transaction fees."],
      ["How many virtual cards can I create?", "You can create unlimited virtual cards for campaigns, clients, platforms, and ad accounts."],
    ],
    finalTitle: "Ready to scale your ad spend with BMCard?",
    feeTitle: "Fee Structure",
    feeDesc: "All fees are clearly presented so advertisers can calculate ad budgets with confidence.",
    feeItems: [
      ["$0", "to open card", "Open cards quickly with no setup fee.", CreditCard, "from-emerald-400/20 to-emerald-500/5", "text-emerald-300", "border-emerald-400/20"],
      ["0%", "top-up fee", "Top up directly with USDT without top-up charges.", Wallet, "from-green-400/20 to-green-500/5", "text-green-300", "border-green-400/20"],
      ["0%", "transaction fee", "Pay for ads without additional transaction fees.", BadgeDollarSign, "from-sky-400/20 to-sky-500/5", "text-sky-300", "border-sky-400/20"],
      ["0.5%", "FX fee", "Applies to non-USD payments.", Globe2, "from-amber-400/20 to-amber-500/5", "text-amber-300", "border-amber-400/20"],
      ["1.5%", "cashback", "Cashback on eligible spend to help optimize ad budgets.", Sparkles, "from-yellow-400/20 to-yellow-500/5", "text-yellow-300", "border-yellow-400/20"],
      ["No", "monthly fee", "No monthly account or card maintenance fee.", ShieldCheck, "from-zinc-300/20 to-zinc-500/5", "text-zinc-200", "border-zinc-300/20"],
      ["Web", "management dashboard", "Track cards, budgets, transactions, and ad spend in one dashboard.", BarChart3, "from-cyan-400/20 to-cyan-500/5", "text-cyan-300", "border-cyan-400/20"],
    ],
    finalDesc: "Start creating virtual cards, top up with USDT, and control campaign budgets with a payment system designed for advertisers.",
  },
};

const motionEase = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: motionEase } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96, y: 18 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: motionEase } },
};

const partners = [
  { name: "Google Ads", icon: SiGoogleads, color: "text-[#4285F4]" },
  { name: "TikTok Ads", icon: FaTiktok, color: "text-white" },
  { name: "Meta", icon: SiMeta, color: "text-[#0081FB]" },
  { name: "Tether USDT", icon: SiTether, color: "text-[#26A17B]" },
  { name: "Binance", icon: SiBinance, color: "text-[#F3BA2F]" },
  { name: "Shopee Ads", icon: SiShopee, color: "text-[#EE4D2D]" },
  { name: "Shopify", icon: FaShopify, color: "text-[#95BF47]" },
  { name: "Telegram Ads", icon: FaTelegram, color: "text-[#27A7E7]" },
  { name: "Agency Teams", icon: Globe2, color: "text-zinc-300" },
];

function GlobalStyles() {
  return (
    <style>{`
      @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      @keyframes shimmer { 0% { transform: translateX(-40%); opacity: 0; } 45% { opacity: .18; } 100% { transform: translateX(140%); opacity: 0; } }
      @keyframes ambientFloat { 0%, 100% { transform: translate3d(0,0,0) scale(1); opacity: .7; } 50% { transform: translate3d(24px,-18px,0) scale(1.06); opacity: 1; } }
      @keyframes logoBreath { 0%, 100% { opacity: .86; transform: translateY(0); } 50% { opacity: 1; transform: translateY(-2px); } }
      .animate-marquee { animation: marquee 30s linear infinite; }
      .animate-shimmer { animation: shimmer 9s ease-in-out infinite; }
      .animate-ambient { animation: ambientFloat 14s ease-in-out infinite; }
      .animate-logo-breath { animation: logoBreath 5.5s ease-in-out infinite; }
    `}</style>
  );
}

function Logo() {
  return (
    <div className="group flex items-center gap-4">
      <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white via-zinc-200 to-zinc-500 shadow-[0_10px_40px_rgba(255,255,255,0.08)]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(255,255,255,0.5),transparent)] opacity-40" />
        <div className="relative flex items-center justify-center">
          <div className="absolute h-6 w-6 rounded-md border-2 border-black/80 rotate-12" />
          <div className="absolute h-6 w-6 rounded-md border-2 border-black/90 -rotate-12" />
          <span className="relative text-[15px] font-black tracking-tight text-black">BM</span>
        </div>
      </div>

      <div className="leading-none">
        <div className="flex items-end gap-1">
          <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-2xl font-black tracking-[-0.04em] text-transparent md:text-[30px]">
            BM
          </span>
          <span className="text-2xl font-semibold tracking-[-0.04em] text-zinc-300 md:text-[30px]">
            Card
          </span>
        </div>
        <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-500">
          Advertising Payment Infrastructure
        </div>
      </div>
    </div>
  );
}

function Button({ children, variant = "primary", onClick }) {
  const cls = variant === "primary" ? "bg-white text-black shadow-xl shadow-white/10" : "border border-white/15 bg-white/5 text-white hover:bg-white/10";
  return (
    <motion.button
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3 text-sm font-bold transition ${cls}`}
    >
      <span className="absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition duration-700 group-hover:left-[120%] group-hover:opacity-100" />
      <span className="relative z-10">{children}</span>
      <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.button>
  );
}

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.075]" style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "86px 86px" }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,255,255,0.15),transparent_26%),radial-gradient(circle_at_88%_25%,rgba(255,188,73,0.14),transparent_24%),linear-gradient(135deg,#080808,#050505_48%,#13110b)]" />
      <div className="animate-shimmer absolute top-0 h-full w-[30%] bg-gradient-to-r from-transparent via-white/25 to-transparent blur-2xl" />
      <div className="animate-ambient absolute right-[-12%] top-[-22%] h-[650px] w-[650px] rounded-full bg-[radial-gradient(circle,rgba(255,196,92,0.17),transparent_62%)] blur-2xl" />
      <div className="animate-ambient absolute bottom-[-20%] left-[22%] h-[520px] w-[520px] rounded-full bg-white/[0.045] blur-3xl [animation-delay:2s]" />
    </div>
  );
}

function CardVisual() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 6 });
  };

  return (
    <div className="relative mx-auto w-full max-w-[560px] py-10">
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        animate={{ y: [0, -10, 0], rotateX: tilt.x, rotateY: tilt.y, rotateZ: [-2, -0.5, -2] }}
        transition={{ duration: 0.45, ease: motionEase }}
        className="relative [transform-style:preserve-3d]"
      >
        <div className="absolute -inset-12 rounded-[3rem] bg-[radial-gradient(circle,rgba(255,196,92,0.16),transparent_62%)] blur-3xl" />
        <div className="absolute -inset-6 rounded-[2.5rem] border border-white/10 bg-white/[0.025] blur-sm" />

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 p-8 shadow-2xl shadow-black/70">
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(115deg,transparent,rgba(255,255,255,.13),transparent)] opacity-35" />
          <div className="pointer-events-none absolute right-[-20%] top-[-35%] h-64 w-64 rounded-full bg-white/[0.06] blur-3xl" />

          <div className="relative z-10">
            <div className="mb-9 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white via-zinc-200 to-zinc-500">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(255,255,255,0.45),transparent)] opacity-40" />
                  <div className="relative flex items-center justify-center">
                    <div className="absolute h-5 w-5 rounded-md border-2 border-black/80 rotate-12" />
                    <div className="absolute h-5 w-5 rounded-md border-2 border-black/90 -rotate-12" />
                    <span className="relative text-[11px] font-black tracking-tight text-black">BM</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-end gap-1 leading-none">
                    <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-2xl font-black tracking-[-0.04em] text-transparent">BM</span>
                    <span className="text-2xl font-semibold tracking-[-0.04em] text-zinc-300">Card</span>
                  </div>
                </div>
              </div>
              <div className="text-3xl text-zinc-500">)))</div>
            </div>

            <div className="mb-8 h-10 w-14 rounded-lg bg-gradient-to-br from-zinc-200 to-zinc-500" />

            <div className="whitespace-nowrap font-mono text-[23px] tracking-[0.11em] text-white sm:text-[25px] lg:text-[27px]">
              5591 5030 1234 5678
            </div>

            <div className="mt-9 flex items-end justify-between text-xs uppercase text-zinc-500">
              <div>
                <div>Card Holder</div>
                <div className="mt-2 text-sm normal-case text-white">BMCard User</div>
              </div>
              <div>
                <div>Valid Thru</div>
                <div className="mt-2 text-sm text-white">12/28</div>
              </div>
              <div className="text-3xl font-black italic text-white">VISA</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function PartnerMarquee() {
  const row = [...partners, ...partners];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
        {row.map((p, i) => { const Icon = p.icon; return (
          <motion.div key={`${p.name}-${i}`} whileHover={{ y: -3, scale: 1.025 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="animate-logo-breath flex items-center gap-3 rounded-2xl border border-white/10 bg-black/50 px-5 py-3 backdrop-blur-xl">
            <Icon className={`h-6 w-6 ${p.color}`} /><span className="whitespace-nowrap text-base font-black text-white">{p.name}</span>
          </motion.div>
        ); })}
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, desc }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-zinc-300"><Sparkles className="h-4 w-4" />{eyebrow}</div>
      <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
      {desc && <p className="mt-5 text-base leading-7 text-zinc-400 md:text-lg">{desc}</p>}
    </motion.div>
  );
}

function MotionCard({ children, className = "" }) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function OnboardingPage({ onBack }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    phone: "",
    email: "",
    country: "",
    platform: "Google Ads",
    monthlySpend: "$1,000 - $10,000",
    usage: "Team",
    note: "",
  });

  const requiredFilled = form.name && form.contact && form.phone && form.email && form.country;

  const updateField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!requiredFilled) return;
    setSubmitted(true);
  };

  const inputClass = "w-full rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white/30 focus:bg-black/70";
  const labelClass = "mb-2 block text-sm font-bold text-zinc-300";

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <GlobalStyles />
      <HeroBackground />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-10">
        <div className="w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black/70 shadow-2xl shadow-black/70 backdrop-blur-2xl">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative border-b border-white/10 p-8 md:p-12 lg:border-b-0 lg:border-r">
              <Button variant="secondary" onClick={onBack}>← Quay lại</Button>

              <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-zinc-300">
                <Sparkles className="h-4 w-4" /> BMCard Onboarding
              </div>

              <h1 className="mt-6 max-w-xl text-4xl font-black leading-[1.08] tracking-[-0.03em] md:text-6xl">
                Bắt đầu scale quảng cáo với BMCard
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-400">
                Điền thông tin để đội ngũ BMCard hỗ trợ setup hệ thống thẻ phù hợp với nhu cầu quảng cáo của bạn.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  ["Nạp trực tiếp bằng USDT", Wallet],
                  ["0% phí giao dịch", BadgeDollarSign],
                  ["Không phí ẩn", ShieldCheck],
                  ["Mở vô hạn thẻ", Infinity],
                  ["Hỗ trợ advertiser & agency", Headphones],
                  ["Đa dạng đầu BIN", Layers3],
                ].map(([text, Icon]) => (
                  <div key={text} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-black"><Icon className="h-5 w-5" /></div>
                    <span className="text-sm font-bold text-white">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 md:p-12">
              {submitted ? (
                <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="flex min-h-[560px] flex-col items-center justify-center text-center">
                  <div className="grid h-20 w-20 place-items-center rounded-full bg-white text-black">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h2 className="mt-8 text-4xl font-black">Thông tin đã được gửi</h2>
                  <p className="mt-4 max-w-md leading-7 text-zinc-400">
                    Đội ngũ BMCard sẽ liên hệ và hỗ trợ setup hệ thống phù hợp với nhu cầu quảng cáo của bạn.
                  </p>
                  <div className="mt-8"><Button onClick={onBack}>Quay lại trang chủ</Button></div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className={labelClass}>Họ và tên *</label>
                    <input className={inputClass} value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Nguyễn Văn A" />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className={labelClass}>Telegram hoặc Zalo *</label>
                      <input className={inputClass} value={form.contact} onChange={(e) => updateField("contact", e.target.value)} placeholder="@username / Zalo" />
                    </div>
                    <div>
                      <label className={labelClass}>Số điện thoại *</label>
                      <input className={inputClass} value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="0934 571 919" />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className={labelClass}>Email *</label>
                      <input className={inputClass} type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="you@company.com" />
                    </div>
                    <div>
                      <label className={labelClass}>Quốc gia *</label>
                      <input className={inputClass} value={form.country} onChange={(e) => updateField("country", e.target.value)} placeholder="Việt Nam" />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className={labelClass}>Nền tảng quảng cáo đang sử dụng</label>
                      <select className={inputClass} value={form.platform} onChange={(e) => updateField("platform", e.target.value)}>
                        {["Google Ads", "TikTok Ads", "Meta Ads", "Affiliate", "Agency", "Other"].map((item) => <option key={item}>{item}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Số tiền chạy quảng cáo mỗi tháng</label>
                      <select className={inputClass} value={form.monthlySpend} onChange={(e) => updateField("monthlySpend", e.target.value)}>
                        {["< $1,000", "$1,000 - $10,000", "$10,000 - $50,000", "$50,000+"].map((item) => <option key={item}>{item}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Nhu cầu sử dụng</label>
                    <select className={inputClass} value={form.usage} onChange={(e) => updateField("usage", e.target.value)}>
                      {["Cá nhân", "Team", "Agency", "Enterprise"].map((item) => <option key={item}>{item}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Nội dung thêm / ghi chú</label>
                    <textarea className={`${inputClass} min-h-[120px] resize-none`} value={form.note} onChange={(e) => updateField("note", e.target.value)} placeholder="Bạn đang chạy nền tảng nào, volume bao nhiêu, cần bao nhiêu thẻ..." />
                  </div>

                  {!requiredFilled && <p className="text-sm text-zinc-500">Vui lòng điền các trường có dấu *.</p>}

                  <button type="submit" className="w-full rounded-2xl bg-white px-6 py-4 text-sm font-black text-black shadow-xl shadow-white/10 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40" disabled={!requiredFilled}>
                    Gửi thông tin
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function FeeStructure({ t }) {
  return (
    <section id="fees" className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeader eyebrow="Fee Structure" title={t.feeTitle} desc={t.feeDesc} />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
      >
        {t.feeItems.map(([value, label, desc, Icon, gradient, color, border], index) => (
          <MotionCard
            key={`${value}-${label}`}
            className={`group relative overflow-hidden rounded-[2rem] border ${border} bg-gradient-to-br ${gradient} p-6 backdrop-blur-xl transition hover:bg-white/[0.06] ${index === 6 ? "xl:col-span-2" : ""}`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)] opacity-0 transition group-hover:opacity-100" />
            <div className="relative z-10">
              <div className={`mb-7 flex h-13 w-13 items-center justify-center rounded-2xl border ${border} bg-black/35 ${color}`}>
                <Icon className="h-6 w-6" />
              </div>
              <div className={`text-5xl font-black tracking-[-0.05em] ${color}`}>{value}</div>
              <div className="mt-2 text-lg font-black text-white">{label}</div>
              <p className="mt-4 min-h-[72px] text-sm leading-6 text-zinc-400">{desc}</p>
            </div>
          </MotionCard>
        ))}
      </motion.div>
    </section>
  );
}

function ContactPage({ onBack }) {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <GlobalStyles />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <Button variant="secondary" onClick={onBack}>← Back to BMCard</Button>
        <h1 className="mt-10 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">Liên hệ BMCard Sales</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">Hỗ trợ advertiser, agency và affiliate team 24/7.</p>
        <div className="mt-12 grid w-full gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"><div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.7rem] bg-white p-3"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo" className="h-full w-full object-contain" /></div><h3 className="mt-6 text-2xl font-black">Zalo Support</h3><div className="mt-5 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-3xl font-black">0934571919</div></div>
          {[["24/7 Support", "Hỗ trợ liên tục về card operation, payment issue và campaign spending.", Headphones], ["BMCard Supports", "Google Ads, TikTok Ads, Meta Ads, USDT top-up và unlimited virtual cards.", CreditCard]].map(([title, desc, Icon]) => <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5"><Icon className="h-8 w-8" /></div><h3 className="mt-6 text-2xl font-black">{title}</h3><p className="mt-4 leading-7 text-zinc-400">{desc}</p></div>)}
        </div>
      </div>
    </main>
  );
}

function NavItem({ item, href, index }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="group relative px-1 py-2 text-sm font-black"
      style={{ opacity: 1 - index * 0.035 }}
    >
      <span className="relative z-10 bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent transition duration-300 group-hover:from-white group-hover:via-white group-hover:to-zinc-200">
        {item}
      </span>
      <span className="absolute inset-x-0 -bottom-1 mx-auto h-px w-0 bg-gradient-to-r from-transparent via-white/70 to-transparent transition-all duration-300 group-hover:w-full" />
      <span className="absolute inset-0 -z-10 rounded-full bg-white/0 blur-xl transition duration-300 group-hover:bg-white/10" />
    </motion.a>
  );
}

export default function BMCardLandingPage() {
  const [lang, setLang] = useState("vi");
  const [contact, setContact] = useState(false);
  const [onboarding, setOnboarding] = useState(false);
  const t = content[lang];
  const navTargets = ["#", "#fees", "#section-1", "#section-2", "#section-3", "#section-5"]; 
  if (contact) return <ContactPage onBack={() => setContact(false)} />;
  if (onboarding) return <OnboardingPage onBack={() => setOnboarding(false)} />;

  return (
    <main key={lang} className="min-h-screen overflow-x-hidden bg-black text-white">
      <GlobalStyles />
      <section className="p-3 md:p-5">
        <div className="relative mx-auto overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl shadow-black/70">
          <HeroBackground />
          <div className="relative z-10 flex min-h-[760px] flex-col xl:min-h-[calc(100vh-40px)]">
            <header className="mx-4 mt-4 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-2xl">
              <div className="flex items-center justify-between px-5 py-4 md:px-7">
                <Logo />
                <nav className="hidden items-center gap-9 rounded-2xl border border-white/[0.04] bg-white/[0.02] px-5 py-2 text-sm font-bold text-zinc-300 backdrop-blur-xl lg:flex">
                  {t.nav.map((item, i) => (
                    <NavItem key={item} item={item} href={navTargets[i]} index={i} />
                  ))}
                </nav>
                <div className="flex items-center gap-3"><div className="flex rounded-xl border border-white/10 bg-white/5 p-1 text-sm font-bold"><button type="button" onClick={() => setLang("vi")} className={`rounded-lg px-3 py-2 ${lang === "vi" ? "bg-white text-black" : "text-zinc-300"}`}>VI</button><button type="button" onClick={() => setLang("en")} className={`rounded-lg px-3 py-2 ${lang === "en" ? "bg-white text-black" : "text-zinc-300"}`}>EN</button></div><div className="hidden md:block"><Button variant="secondary" onClick={() => setContact(true)}>{t.contact}</Button></div><div className="hidden xl:block"><Button onClick={() => setOnboarding(true)}>{t.cta}</Button></div></div>
              </div>
            </header>

            <div className="grid flex-1 items-center gap-10 px-6 py-12 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(440px,0.9fr)] lg:px-16 xl:px-20">
              <div className="max-w-[680px]">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-black uppercase tracking-wide text-zinc-200"><Zap className="h-4 w-4" />{t.badge}</motion.div>
                <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="text-[40px] font-black leading-[1.08] tracking-[-0.025em] text-white sm:text-[54px] xl:text-[68px] 2xl:text-[76px]">{t.title}<span className="block bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">{t.title2}</span></motion.h1>
                <p className="mt-6 max-w-xl border-l border-white/30 pl-5 text-base leading-8 text-zinc-300 md:text-lg">{t.desc}</p>
                <div className="mt-7 flex flex-col gap-4 sm:flex-row"><Button onClick={() => setOnboarding(true)}>{t.cta}</Button><Button variant="secondary" onClick={() => setContact(true)}>{t.contact}</Button></div>
                <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2 2xl:grid-cols-3">{t.features.map(([label, Icon]) => <div key={label} className="flex min-h-[62px] items-center gap-3 rounded-2xl border border-white/10 bg-black/35 p-3 backdrop-blur-xl"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-black"><Icon className="h-5 w-5" /></div><span className="text-sm font-bold text-white">{label}</span></div>)}</div>
              </div>
              <div className="hidden lg:block"><CardVisual /></div>
            </div>

            <div className="border-t border-white/10 bg-black/45 px-6 py-5 backdrop-blur-xl md:px-10"><div className="grid items-center gap-5 lg:grid-cols-[270px_1fr]"><div className="text-sm font-bold leading-6 text-white">{t.partnersTitle}</div><PartnerMarquee /></div></div>
          </div>
        </div>
      </section>

      <FeeStructure t={t} />

      <section id="section-1" className="mx-auto max-w-7xl px-6 py-24"><SectionHeader eyebrow="BMCard" title={t.benefitsTitle} desc={t.benefitsDesc} /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{t.benefits.map(([title, desc, Icon]) => <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/20"><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5"><Icon className="h-7 w-7" /></div><h3 className="text-xl font-black text-white">{title}</h3><p className="mt-3 leading-7 text-zinc-400">{desc}</p></div>)}</div></section>
      <section id="section-2" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2"><SectionHeader eyebrow="Solutions" title={t.useTitle} desc={t.useDesc} /><div className="grid gap-4 sm:grid-cols-2">{t.useCases.map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5"><CheckCircle2 className="h-5 w-5" /><span className="font-bold">{item}</span></div>)}</div></section>
      <section id="section-3" className="mx-auto max-w-7xl px-6 py-20"><SectionHeader eyebrow="Process" title={t.stepsTitle} desc="" /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{t.steps.map(([num, title, desc]) => <div key={num} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"><div className="text-sm font-black text-zinc-300">{num}</div><h3 className="mt-4 text-lg font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-zinc-400">{desc}</p></div>)}</div></section>
      <section id="section-4" className="mx-auto max-w-5xl px-6 py-20 text-center"><SectionHeader eyebrow="Fees" title={t.pricingTitle} desc={t.pricingDesc} /><div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10"><div className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-8xl font-black text-transparent">0%</div><div className="mt-3 text-2xl font-black">Transaction fee</div></div></section>
      <section id="section-5" className="mx-auto max-w-4xl px-6 py-20"><SectionHeader eyebrow="FAQ" title={t.faqTitle} desc="" /><div className="space-y-4">{t.faqs.map(([q, a]) => <details key={q} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"><summary className="cursor-pointer text-lg font-black">{q}</summary><p className="mt-4 leading-7 text-zinc-400">{a}</p></details>)}</div></section>
      <section className="mx-auto max-w-7xl px-6 py-20"><div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 text-center md:p-14"><h2 className="mx-auto max-w-3xl text-4xl font-black tracking-tight md:text-6xl">{t.finalTitle}</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">{t.finalDesc}</p><div className="mt-8 flex justify-center gap-4"><Button onClick={() => setOnboarding(true)}>{t.cta}</Button><Button variant="secondary" onClick={() => setContact(true)}>{t.contact}</Button></div></div></section>
      <footer className="border-t border-white/10 px-6 py-8"><div className="mx-auto flex max-w-7xl items-center justify-between text-sm text-zinc-500"><Logo /><span>© 2026 BMCard</span></div></footer>
    </main>
  );
}
