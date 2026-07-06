import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { FaTiktok, FaFacebook, FaTwitter } from "react-icons/fa";
import { SiBinance, SiGoogleads, SiMeta, SiShopee, SiTether } from "react-icons/si";
import {
  ArrowRight, BadgeDollarSign, BarChart3, CreditCard, Globe2,
  Headphones, Infinity, LockKeyhole, ShieldCheck, Sparkles,
  UserRound, Wallet, Zap, Plus, X, ChevronDown, Code2, Layers3,
} from "lucide-react";

/* ─── CONTENT ─────────────────────────────────────────────────────────────── */
const content = {
  vi: {
    nav: ["Enterprise", "Cashback", "Thẻ", "Giải pháp", "So sánh"],
    cta: "Đăng ký",
    heroHeadline: "Thẻ ảo cho quảng cáo hiệu suất cao",
    heroSub: "Nạp USDT, mở vô hạn thẻ, kiểm soát chi tiêu và tối ưu ngân sách quảng cáo trên mọi nền tảng.",
    card1Title: "BMCard Ultima",
    card1Sub: "Thẻ quảng cáo cao cấp",
    card1BackTitle: "BMCard Ultima",
    card1BackDesc: "Thẻ ảo cao cấp nhất cho mọi loại thanh toán quảng cáo. Hỗ trợ 3D-Secure và đa đầu BIN.",
    card1Cta: "Lấy thẻ ngay",
    card2Title: "20+ loại thẻ",
    card2Sub: "Cho mọi nền tảng quảng cáo",
    card2BackTitle: "Đa dạng thẻ ảo",
    card2BackDesc: "Hơn 20 đầu BIN khác nhau, tối ưu cho Meta, Google, TikTok và nhiều nền tảng khác.",
    card2Cta: "Xem tất cả thẻ",
    simpleTitle: "Tạo thẻ đơn giản",
    step1: "1. Đăng ký",
    step1Desc: "Tạo tài khoản BMCard trong vài phút",
    step2: "2. Tạo thẻ",
    step2Desc: "Mở thẻ ảo và bắt đầu chạy quảng cáo ngay",
    infiniteTitle: "Mở vô hạn thẻ",
    infiniteDesc: "Không giới hạn số lượng thẻ ảo cho mỗi tài khoản, campaign hoặc khách hàng.",
    affTitle: "Dành cho affiliate marketing",
    noRiskTitle: "Không còn rủi ro",
    noRiskSub: "Chuyên cho quảng cáo mạng xã hội",
    cardTypesTitle: "20+ loại thẻ",
    cardTypesSub: "bằng USD & EUR",
    premiumWord: "PREMIUM",
    premiumCashback: "1.5%",
    premiumCashbackDesc: "Hoàn tiền cho chi tiêu quảng cáo trên Facebook, Google và TikTok",
    premiumFree: "Không giới hạn",
    premiumFreeDesc: "Thẻ ảo mỗi tháng, không tính phí mở thẻ",
    premiumCta: "Tham gia BMCard Premium",
    apiTitle: "RESTful API",
    apiSub: "Tích hợp trực tiếp vào hệ thống của bạn",
    binTitle: "BIN Checker",
    binSub: "Kiểm tra thông tin BIN nâng cao",
    binCta: "Kiểm tra BIN →",
    teamTitle: "Làm việc nhóm & kiểm soát tài chính",
    teamDesc: "Quản lý ngân sách team, phân quyền thành viên và theo dõi chi tiêu theo thời gian thực.",
    pricingTitle: "Mô hình phí minh bạch",
    fees: [
      "0% phí giao dịch",
      "0% phí thẻ bị từ chối",
      "0% phí rút từ thẻ",
      "0% phí hoàn tiền",
      "0% phí mở thẻ",
    ],
    pricingCta: "Xem chi tiết phí",
    chooseTitle: "Chọn loại thẻ",
    cards: [
      {
        tags: ["Quảng cáo", "Tốt nhất"],
        name: "BMCard Ultima",
        cardImg: "/cards/card-ultima.png",
        imgWidth: 450,
        desc: "Thẻ ảo cao cấp nhất bằng USD cho mọi loại thanh toán quảng cáo. Hỗ trợ 3D-Secure.",
        cta: "Tạo thẻ",
        learn: "Tìm hiểu thêm",
        gradient: "from-orange-400 to-orange-600",
        cardColor: "from-orange-500 to-amber-500",
      },
      {
        tags: ["Facebook Ads", "17 BIN"],
        name: "BMCard Meta",
        cardImg: "/cards/card-meta.png",
        imgWidth: 360,
        imgHeight: 200,
        desc: "Thẻ tối ưu hóa cho Facebook và Instagram Ads. Tỷ lệ phê duyệt cao nhất.",
        cta: "Tạo thẻ",
        learn: "Tìm hiểu thêm",
        gradient: "from-blue-500 to-blue-700",
        cardColor: "from-blue-600 to-indigo-600",
      },
      {
        tags: ["Google Ads"],
        name: "BMCard Google Ads",
        cardImg: "/cards/card-google.png",
        imgWidth: 360,
        imgHeight: 200,
        desc: "Thẻ ảo tối ưu cho Google Ads. Hỗ trợ đa BIN, phê duyệt cao và thanh toán ổn định.",
        cta: "Tạo thẻ",
        learn: "Tìm hiểu thêm",
        gradient: "from-green-400 to-emerald-600",
        cardColor: "from-green-500 to-emerald-500",
      },
      {
        tags: ["TikTok Ads"],
        name: "BMCard TikTok Ads",
        cardImg: "/cards/card-tiktok.png",
        imgWidth: 360,
        imgHeight: 200,
        desc: "Thẻ ảo chuyên dụng cho TikTok Ads. Tỷ lệ phê duyệt cao nhất, hỗ trợ 3D-Secure.",
        cta: "Tạo thẻ",
        learn: "Tìm hiểu thêm",
        gradient: "from-slate-700 to-slate-900",
        cardColor: "from-slate-600 to-slate-800",
      },
    ],
    faqTitle: "Câu hỏi thường gặp",
    faqs: [
      ["BMCard có nạp bằng USDT được không?", "Có. BMCard hỗ trợ nạp trực tiếp bằng USDT để cấp ngân sách vào thẻ nhanh hơn."],
      ["Có thật là 0% phí giao dịch không?", "Đúng. BMCard không thu phí giao dịch để bạn dành tối đa ngân sách cho quảng cáo."],
      ["Tôi có thể mở bao nhiêu thẻ ảo?", "Không giới hạn. Mở thẻ riêng cho từng campaign, khách hàng hoặc tài khoản quảng cáo."],
      ["Thẻ hỗ trợ những nền tảng nào?", "Google Ads, Meta, TikTok Ads, Shopee Ads, Binance Ads và nhiều nền tảng khác."],
    ],
    finalTitle: "Sẵn sàng scale ad spend?",
    finalDesc: "Mở thẻ ảo, nạp USDT và kiểm soát ngân sách campaign với hệ thống thanh toán dành cho advertiser.",
    finalCta: "Đăng ký miễn phí",
    footerDesc: "Thẻ ảo tối ưu cho advertiser, agency và affiliate team.",
  },
  en: {
    nav: ["Enterprise", "Cashback", "Cards", "Solutions", "Compare"],
    cta: "Sign up",
    heroHeadline: "Virtual cards built for performance advertising",
    heroSub: "Top up with USDT, create unlimited virtual cards, control spending and optimize ad budgets across all platforms.",
    card1Title: "BMCard Ultima",
    card1Sub: "Premium advertising card",
    card1BackTitle: "BMCard Ultima",
    card1BackDesc: "The most advanced virtual card for all types of advertisement payments. Supports 3D-Secure and multiple BINs.",
    card1Cta: "Get card",
    card2Title: "20+ card types",
    card2Sub: "For every ad platform",
    card2BackTitle: "Diverse virtual cards",
    card2BackDesc: "Over 20 different BINs, optimized for Meta, Google, TikTok and many other platforms.",
    card2Cta: "View all cards",
    simpleTitle: "Create cards simply",
    step1: "1. Sign up",
    step1Desc: "Create your BMCard account in minutes",
    step2: "2. Create card",
    step2Desc: "Open a virtual card and start advertising immediately",
    infiniteTitle: "Unlimited cards",
    infiniteDesc: "No limits on virtual cards per account, campaign or client.",
    affTitle: "Made for affiliate marketing",
    noRiskTitle: "No more risks",
    noRiskSub: "Native for social ads",
    cardTypesTitle: "20+ type of cards",
    cardTypesSub: "in USD & EUR",
    premiumWord: "PREMIUM",
    premiumCashback: "1.5%",
    premiumCashbackDesc: "Cashback on advertising spend on Facebook, Google and TikTok",
    premiumFree: "Unlimited",
    premiumFreeDesc: "Virtual cards per month, no card opening fee",
    premiumCta: "Join BMCard Premium",
    apiTitle: "RESTful API",
    apiSub: "Integrate directly into your system",
    binTitle: "BIN Checker",
    binSub: "Advanced BIN information checker",
    binCta: "Check BIN →",
    teamTitle: "Teamwork & financial control",
    teamDesc: "Manage team budgets, assign member roles and track spending in real time.",
    pricingTitle: "Transparent business model",
    fees: [
      "0% transaction fee",
      "0% fee for declined payments",
      "0% fee for withdrawal from card",
      "0% refund fee",
      "0% card opening fee",
    ],
    pricingCta: "View fee details",
    chooseTitle: "Choose your card",
    cards: [
      {
        tags: ["For advertisements", "The best of our cards"],
        name: "BMCard Ultima",
        cardImg: "/cards/card-ultima.png",
        imgWidth: 450,
        desc: "The most advanced virtual card in USD for all kinds of advertisement payments. With 3D-Secure support.",
        cta: "Get card",
        learn: "Learn more",
        gradient: "from-orange-400 to-orange-600",
        cardColor: "from-orange-500 to-amber-500",
      },
      {
        tags: ["For facebook ads", "In 17 BINs"],
        name: "BMCard Meta",
        cardImg: "/cards/card-meta.png",
        imgWidth: 360,
        imgHeight: 200,
        desc: "Optimized card for Facebook and Instagram Ads. Highest approval rate.",
        cta: "Get card",
        learn: "Learn more",
        gradient: "from-blue-500 to-blue-700",
        cardColor: "from-blue-600 to-indigo-600",
      },
      {
        tags: ["Google Ads"],
        name: "BMCard Google Ads",
        cardImg: "/cards/card-google.png",
        imgWidth: 360,
        imgHeight: 200,
        desc: "Virtual card optimized for Google Ads. Multiple BINs, high approval rate and stable payments.",
        cta: "Get card",
        learn: "Learn more",
        gradient: "from-green-400 to-emerald-600",
        cardColor: "from-green-500 to-emerald-500",
      },
      {
        tags: ["TikTok Ads"],
        name: "BMCard TikTok Ads",
        cardImg: "/cards/card-tiktok.png",
        imgWidth: 360,
        imgHeight: 200,
        desc: "Dedicated virtual card for TikTok Ads. Highest approval rate with 3D-Secure support.",
        cta: "Get card",
        learn: "Learn more",
        gradient: "from-slate-700 to-slate-900",
        cardColor: "from-slate-600 to-slate-800",
      },
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      ["Can I top up BMCard with USDT?", "Yes. BMCard supports direct USDT top-up for faster card funding."],
      ["Is there really a 0% transaction fee?", "Yes. BMCard charges zero transaction fees so you spend more on ads."],
      ["How many virtual cards can I create?", "Unlimited. Create separate cards for each campaign, client, or ad account."],
      ["Which platforms are supported?", "Google Ads, Meta, TikTok Ads, Shopee Ads, Binance Ads and many more."],
    ],
    finalTitle: "Ready to scale ad spend?",
    finalDesc: "Create virtual cards, top up with USDT, and control campaign budgets with a payment system built for advertisers.",
    finalCta: "Sign up free",
    footerDesc: "Virtual cards optimized for advertisers, agencies and affiliate teams.",
  },
};

/* ─── MOTION ──────────────────────────────────────────────────────────────── */
const ease = [0.16, 1, 0.3, 1];
const easeOut = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -48, filter: "blur(8px)" },
  show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 48, filter: "blur(8px)" },
  show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.92, filter: "blur(8px)" },
  show: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.7, ease: easeOut } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } };
const staggerFast = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } };
const staggerSlow = { hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } } };

/* ─── GLOBAL STYLES ───────────────────────────────────────────────────────── */
function GlobalStyles() {
  return (
    <style>{`
      *, *::before, *::after { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #fff; }
      @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      @keyframes floatY { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
      @keyframes pulseGlow { 0%,100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.04); } }
      .animate-marquee { animation: marquee 36s linear infinite; }
      .animate-float { animation: floatY 4s ease-in-out infinite; }
      .animate-pulse-glow { animation: pulseGlow 3s ease-in-out infinite; }
      .flip-card { perspective: 1200px; }
      .flip-inner { transition: transform 0.7s cubic-bezier(0.16,1,0.3,1); transform-style: preserve-3d; position: relative; width: 100%; height: 100%; }
      .flip-inner.flipped { transform: rotateY(180deg); }
      .flip-face { position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden; border-radius: 24px; overflow: hidden; }
      .flip-back { transform: rotateY(180deg); background: #fff; }
      .card-hover { transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s cubic-bezier(0.16,1,0.3,1); will-change: transform; }
      .card-hover:hover { transform: translateY(-6px) scale(1.015); box-shadow: 0 24px 60px rgba(0,0,0,0.10); }
      .card-hover-sm { transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s cubic-bezier(0.16,1,0.3,1); }
      .card-hover-sm:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.08); }
      @keyframes shimmer { 0% { background-position: -400px 0; } 100% { background-position: 400px 0; } }
      @media (max-width: 768px) {
        html, body { overflow-x: hidden !important; max-width: 100vw !important; }
        .mob-hide { display: none !important; }
        .mob-grid-1 { grid-template-columns: 1fr !important; gap: 16px !important; }
        .mob-col { flex-direction: column !important; }
        .mob-h-auto { height: auto !important; min-height: unset !important; }
        .mob-pad { padding: 20px !important; }
        .mob-img-hide { display: none !important; }
        .mob-full { width: 100% !important; max-width: 100% !important; box-sizing: border-box !important; }
        .flip-card-grid { grid-template-columns: 1fr !important; }
        .mob-nav-right .mob-hide-contact { display: none !important; }
      }
    `}</style>
  );
}


/* ─── REGISTER MODAL ──────────────────────────────────────────────────────── */
function RegisterModal({ open, onClose, lang, refSource }) {
  const [form, setForm] = React.useState({ name: "", contact: "", platform: "" });
  const [submitted, setSubmitted] = React.useState(false);
  const platforms = ["Meta / Facebook Ads", "Google Ads", "TikTok Ads", "Nhiều nền tảng"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, ref: refSource || 'direct' }),
      });
    } catch (_) {}
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => { setSubmitted(false); setForm({ name: "", contact: "", platform: "" }); }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleClose}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, backdropFilter: "blur(4px)" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.3, ease: [0.16,1,0.3,1] }}
            onClick={e => e.stopPropagation()}
            style={{ background: "#fff", borderRadius: 24, padding: "40px 36px", width: "100%", maxWidth: 440, position: "relative", boxShadow: "0 24px 80px rgba(0,0,0,0.18)" }}>
            {/* Close */}
            <button onClick={handleClose} style={{ position: "absolute", top: 16, right: 16, width: 36, height: 36, borderRadius: "50%", border: "none", background: "#f5f5f5", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <X size={18} color="#666" />
            </button>

            {!submitted ? (
              <>
                <div style={{ marginBottom: 28 }}>
                  <img src="/logo-black.png" alt="BMCard" style={{ height: 32, objectFit: "contain", marginBottom: 20 }} />
                  <h2 style={{ fontSize: 26, fontWeight: 900, color: "#111", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
                    {lang === "vi" ? "Đăng ký tài khoản" : "Create account"}
                  </h2>
                  <p style={{ fontSize: 14, color: "#888", margin: 0 }}>
                    {lang === "vi" ? "Điền thông tin để bắt đầu tạo thẻ ngay hôm nay." : "Fill in your details to get started today."}
                  </p>
                </div>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "#444", display: "block", marginBottom: 6 }}>
                      {lang === "vi" ? "Họ và tên" : "Full name"} <span style={{ color: "#FF6500" }}>*</span>
                    </label>
                    <input
                      required value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder={lang === "vi" ? "Nguyễn Văn A" : "John Smith"}
                      style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "1.5px solid #e5e5e5", fontSize: 15, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s", fontFamily: "inherit", color: "#111", background: "#fff" }}
                      onFocus={e => e.target.style.borderColor = "#FF6500"}
                      onBlur={e => e.target.style.borderColor = "#e5e5e5"}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "#444", display: "block", marginBottom: 6 }}>
                      {lang === "vi" ? "Telegram hoặc Zalo" : "Telegram or Zalo"} <span style={{ color: "#FF6500" }}>*</span>
                    </label>
                    <input
                      required value={form.contact}
                      onChange={e => setForm(f => ({ ...f, contact: e.target.value }))}
                      placeholder={lang === "vi" ? "@username hoặc số điện thoại" : "@username or phone number"}
                      style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "1.5px solid #e5e5e5", fontSize: 15, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s", fontFamily: "inherit", color: "#111", background: "#fff" }}
                      onFocus={e => e.target.style.borderColor = "#FF6500"}
                      onBlur={e => e.target.style.borderColor = "#e5e5e5"}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "#444", display: "block", marginBottom: 10 }}>
                      {lang === "vi" ? "Nền tảng chạy quảng cáo" : "Advertising platform"} <span style={{ color: "#FF6500" }}>*</span>
                    </label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {platforms.map(p => (
                        <button key={p} type="button"
                          onClick={() => setForm(f => ({ ...f, platform: p }))}
                          style={{
                            padding: "9px 18px", borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s",
                            background: form.platform === p ? "#FF6500" : "#f5f5f5",
                            color: form.platform === p ? "#fff" : "#444",
                            border: form.platform === p ? "1.5px solid #FF6500" : "1.5px solid #e5e5e5",
                          }}>
                          {p}
                        </button>
                      ))}
                    </div>
                    {!form.platform && <input type="text" required value={form.platform} onChange={() => {}} style={{ opacity: 0, height: 0, width: 0, position: "absolute" }} />}
                  </div>
                  <button type="submit"
                    style={{ marginTop: 8, padding: "14px", background: "#FF6500", color: "#fff", border: "none", borderRadius: 12, fontWeight: 700, fontSize: 16, cursor: "pointer", fontFamily: "inherit", transition: "opacity 0.2s" }}
                    onMouseEnter={e => e.target.style.opacity = "0.88"}
                    onMouseLeave={e => e.target.style.opacity = "1"}>
                    {lang === "vi" ? "Đăng ký ngay" : "Sign up now"} →
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ width: 64, height: 64, background: "#fff7ed", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 28 }}>🎉</div>
                <h2 style={{ fontSize: 24, fontWeight: 900, color: "#111", margin: "0 0 10px", letterSpacing: "-0.02em" }}>
                  {lang === "vi" ? "Đã nhận thông tin!" : "We got your info!"}
                </h2>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6, margin: "0 0 28px" }}>
                  {lang === "vi"
                    ? "Đội ngũ BMCard sẽ liên hệ với bạn qua Telegram/Zalo trong thời gian sớm nhất."
                    : "The BMCard team will contact you via Telegram/Zalo shortly."}
                </p>
                <button onClick={handleClose}
                  style={{ padding: "12px 32px", background: "#111", color: "#fff", border: "none", borderRadius: 12, fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "inherit" }}>
                  {lang === "vi" ? "Đóng" : "Close"}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── CONTACT MODAL ───────────────────────────────────────────────────────── */
function ContactModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1001, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, backdropFilter: "blur(4px)" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16,1,0.3,1] }}
            onClick={e => e.stopPropagation()}
            style={{ background: "#fff", borderRadius: 20, padding: "36px 32px", width: "100%", maxWidth: 360, position: "relative", boxShadow: "0 20px 60px rgba(0,0,0,0.15)", textAlign: "center" }}>
            <button onClick={onClose} style={{ position: "absolute", top: 14, right: 14, width: 32, height: 32, borderRadius: "50%", border: "none", background: "#f5f5f5", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <X size={16} color="#666" />
            </button>
            <div style={{ fontSize: 32, marginBottom: 12 }}>👋</div>
            <h3 style={{ fontSize: 20, fontWeight: 900, color: "#111", margin: "0 0 6px", letterSpacing: "-0.02em" }}>Liên hệ BMCard</h3>
            <p style={{ fontSize: 14, color: "#888", margin: "0 0 24px" }}>Chúng tôi hỗ trợ qua Zalo và Telegram</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="https://zalo.me/0934671919" target="_blank" rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 20px", background: "#f0f9ff", borderRadius: 14, textDecoration: "none", border: "1px solid #e0f0ff" }}>
                <span style={{ fontSize: 24 }}>💬</span>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 11, color: "#888", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Zalo</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#0068ff" }}>0934671919</div>
                </div>
              </a>
              <a href="https://t.me/thomasnguyen1510" target="_blank" rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 20px", background: "#f0f7ff", borderRadius: 14, textDecoration: "none", border: "1px solid #ddeeff" }}>
                <span style={{ fontSize: 24 }}>✈️</span>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 11, color: "#888", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Telegram</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#229ED9" }}>@thomasnguyen1510</div>
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── AFFILIATE LINK MODAL ────────────────────────────────────────────────── */
function AffiliateModal({ open, onClose }) {
  const [name, setName] = React.useState("");
  const [copied, setCopied] = React.useState(false);
  const base = typeof window !== "undefined" ? window.location.origin : "https://bm-card.com";
  const link = name.trim() ? `${base}?ref=${encodeURIComponent(name.trim().toLowerCase().replace(/\s+/g, "-"))}` : "";

  const handleCopy = () => {
    if (!link) return;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1002, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, backdropFilter: "blur(4px)" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16,1,0.3,1] }}
            onClick={e => e.stopPropagation()}
            style={{ background: "#fff", borderRadius: 20, padding: "36px 32px", width: "100%", maxWidth: 460, position: "relative", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
            <button onClick={onClose} style={{ position: "absolute", top: 14, right: 14, width: 32, height: 32, borderRadius: "50%", border: "none", background: "#f5f5f5", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <X size={16} color="#666" />
            </button>
            <div style={{ marginBottom: 24 }}>
              <span style={{ fontSize: 24, marginRight: 8 }}>🔗</span>
              <span style={{ fontSize: 20, fontWeight: 900, color: "#111", letterSpacing: "-0.02em" }}>Tạo link Affiliate</span>
              <p style={{ fontSize: 14, color: "#888", margin: "8px 0 0" }}>Nhập tên nhóm/kênh để tạo link tracking riêng.</p>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: "#444", display: "block", marginBottom: 8 }}>Tên nhóm / kênh</label>
              <input
                value={name}
                onChange={e => { setName(e.target.value); setCopied(false); }}
                placeholder="VD: nhom-facebook, kenh-tiktok..."
                style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "1.5px solid #e5e5e5", fontSize: 15, outline: "none", boxSizing: "border-box", fontFamily: "inherit", color: "#111", background: "#fff" }}
                onFocus={e => e.target.style.borderColor = "#FF6500"}
                onBlur={e => e.target.style.borderColor = "#e5e5e5"}
              />
            </div>

            {link && (
              <div style={{ background: "#f8f8f6", borderRadius: 12, padding: "14px 16px", marginBottom: 16, display: "flex", alignItems: "center", gap: 12, border: "1px solid #eee" }}>
                <span style={{ fontSize: 13, color: "#444", flex: 1, wordBreak: "break-all", fontFamily: "monospace" }}>{link}</span>
                <button
                  onClick={handleCopy}
                  style={{ padding: "8px 16px", background: copied ? "#22c55e" : "#FF6500", color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "inherit", flexShrink: 0, transition: "background 0.2s" }}>
                  {copied ? "✓ Đã copy" : "Copy"}
                </button>
              </div>
            )}

            <div style={{ background: "#fff7ed", borderRadius: 12, padding: "14px 16px", border: "1px solid #fed7aa" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#FF6500", marginBottom: 6 }}>📊 Cách theo dõi</div>
              <div style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>Mỗi đăng ký qua link này sẽ gửi thông tin <strong>🔗 Nguồn</strong> về nhóm Telegram của bạn.</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── NAV ─────────────────────────────────────────────────────────────────── */
function Nav({ lang, setLang, t, openModal, openContact, openAff }) {
  const [isMob, setIsMob] = React.useState(window.innerWidth <= 768);
  React.useEffect(() => {
    const handler = () => setIsMob(window.innerWidth <= 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  const anchors = ["#enterprise", "#cashback", "#cards", "#solutions", "#compare"];
  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #f0f0f0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px", display: "flex", alignItems: "center", height: 60, gap: isMob ? 0 : 32 }}>
        {/* Logo */}
        <a href="#" style={{ flexShrink: 0, textDecoration: "none", marginRight: isMob ? "auto" : 0 }}>
          <img src="/logo-black.png" alt="BMCard" style={{ height: 36, objectFit: "contain" }} />
        </a>
        {/* Links - desktop only */}
        {!isMob && (
          <div style={{ display: "flex", gap: 4, flex: 1 }}>
            {t.nav.map((item, i) => (
              <a key={item} href={anchors[i] || "#"}
                onClick={e => { e.preventDefault(); const el = document.querySelector(anchors[i]); if(el) el.scrollIntoView({ behavior: "smooth" }); }}
                style={{ padding: "6px 12px", borderRadius: 20, fontSize: 14, fontWeight: 500, color: "#444", textDecoration: "none", cursor: "pointer", whiteSpace: "nowrap" }}
                onMouseEnter={e => e.target.style.background = "#f5f5f5"}
                onMouseLeave={e => e.target.style.background = "transparent"}
              >{item}</a>
            ))}
            <button onClick={openAff}
              style={{ padding: "6px 12px", borderRadius: 20, fontSize: 14, fontWeight: 600, color: "#FF6500", background: "transparent", border: "none", cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" }}
              onMouseEnter={e => e.currentTarget.style.background = "#fff7ed"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >🔗 Affiliate</button>
          </div>
        )}
        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <button onClick={() => setLang(lang === "vi" ? "en" : "vi")}
            style={{ padding: "5px 10px", borderRadius: 20, border: "1px solid #e5e5e5", background: "transparent", fontSize: 12, fontWeight: 500, color: "#444", cursor: "pointer" }}>
            {lang === "vi" ? "EN" : "VI"}
          </button>
          {!isMob && (
            <button onClick={openContact} style={{ padding: "6px 16px", borderRadius: 20, border: "1px solid #ddd", background: "transparent", fontSize: 14, fontWeight: 500, color: "#333", cursor: "pointer", fontFamily: "inherit" }}>
              Liên hệ
            </button>
          )}

          <button onClick={openModal} style={{ padding: isMob ? "8px 16px" : "8px 20px", borderRadius: 20, background: "#FF6500", color: "#fff", fontSize: isMob ? 13 : 14, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 6 }}>
            {isMob ? "Đăng ký" : t.cta} {!isMob && <Plus size={16} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ─── HERO FLIP CARD ──────────────────────────────────────────────────────── */
function FlipCard({ front, backTitle, backDesc, backCta, height = 420, onCta }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="flip-card" style={{ height }}>
      <div className={`flip-inner${flipped ? " flipped" : ""}`} style={{ height }}>
        {/* Front */}
        <div className="flip-face" style={{ height, pointerEvents: flipped ? "none" : "auto" }}>
          {front}
          <button
            onClick={() => setFlipped(true)}
            style={{ position: "absolute", top: 16, right: 16, width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.25)", border: "none", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(8px)", zIndex: 2, transition: "background 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.4)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
          >
            <Plus size={18} />
          </button>
        </div>
        {/* Back */}
        <div className="flip-face flip-back" style={{ height, padding: 36, display: "flex", flexDirection: "column", pointerEvents: flipped ? "auto" : "none" }}>
          <button
            onClick={() => setFlipped(false)}
            style={{ position: "absolute", top: 16, right: 16, width: 36, height: 36, borderRadius: "50%", background: "#f5f5f5", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <X size={16} />
          </button>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ fontSize: 28, fontWeight: 800, color: "#111", margin: "0 0 12px" }}>{backTitle}</h3>
              <p style={{ fontSize: 15, color: "#666", lineHeight: 1.6, margin: 0 }}>{backDesc}</p>
            </div>
            <button onClick={onCta} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 24px", background: "#FF6500", color: "#fff", borderRadius: 14, fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", fontFamily: "inherit", width: "fit-content" }}>
              {backCta} <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── HERO ────────────────────────────────────────────────────────────────── */
function Hero({ t, openModal }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  return (
    <section ref={ref} style={{ background: "#fff", padding: "60px 24px 40px", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Headline */}
        <motion.div initial="hidden" animate="show" variants={stagger} style={{ textAlign: "center", marginBottom: 48 }}>
          <motion.div variants={fadeUp}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", background: "#fff7f0", border: "1px solid #ffd0a8", borderRadius: 20, fontSize: 13, fontWeight: 600, color: "#FF6500", marginBottom: 20 }}>
              <Zap size={14} /> Dành cho advertiser &amp; agency
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 900, color: "#111", margin: "0 0 16px", lineHeight: 1.08, letterSpacing: "-0.03em" }}>
            {t.heroHeadline}
          </motion.h1>
          <motion.p variants={fadeUp} style={{ fontSize: 18, color: "#666", maxWidth: 560, margin: "0 auto 32px", lineHeight: 1.6 }}>
            {t.heroSub}
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button onClick={openModal} style={{ padding: "14px 28px", background: "#FF6500", color: "#fff", borderRadius: 14, fontWeight: 700, fontSize: 16, border: "none", cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 8 }}>
              {t.cta} <Plus size={18} />
            </button>
            <a href="#cards" onClick={e => { e.preventDefault(); document.querySelector("#cards")?.scrollIntoView({ behavior: "smooth" }); }} style={{ padding: "14px 28px", background: "#f5f5f5", color: "#333", borderRadius: 14, fontWeight: 600, fontSize: 16, textDecoration: "none" }}>
              Tìm hiểu thêm
            </a>
          </motion.div>
        </motion.div>

        {/* Two Flip Cards */}
        <div className="flip-card-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 960, margin: "0 auto" }}>
          {/* Card 1 - Orange Ultima */}
          <motion.div style={{ y: y1 }} initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.2 }} className="card-hover">
            <FlipCard
              height={500}
              backTitle={t.card1BackTitle}
              backDesc={t.card1BackDesc}
              backCta={t.card1Cta} onCta={openModal}
              front={
                <div style={{ height: "100%", background: "linear-gradient(135deg, #FF6500 0%, #FF9500 60%, #FFB800 100%)", padding: 32, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
                  {/* Glow */}
                  <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, background: "rgba(255,255,255,0.12)", borderRadius: "50%", filter: "blur(40px)" }} />
                  <div style={{ position: "absolute", bottom: -40, left: -40, width: 200, height: 200, background: "rgba(255,100,0,0.3)", borderRadius: "50%", filter: "blur(50px)" }} />
                  <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "rgba(255,255,255,0.7)", textTransform: "uppercase" }}>{t.card1Sub}</span>
                      <h2 style={{ fontSize: 38, fontWeight: 900, color: "#fff", margin: "8px 0 0", letterSpacing: "-0.02em" }}>{t.card1Title}</h2>
                    </div>
                    {/* Card Image — đặt file vào /public/cards/card-ultima.png */}
                    <div style={{ margin: "24px 0", display: "flex", justifyContent: "center" }}>
                      <div className="animate-float" style={{ width: "100%", maxWidth: 420 }}>
                        <img
                          src="/cards/card-ultima.png"
                          alt="BMCard Ultima"
                          style={{ width: "100%", borderRadius: 0, objectFit: "contain", mixBlendMode: "multiply", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.2))" }}
                          onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                        />
                        {/* Fallback nếu chưa có ảnh */}
                        <div style={{ display: "none", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(20px)", borderRadius: 20, padding: "24px 28px", border: "1px solid rgba(255,255,255,0.25)", flexDirection: "column", gap: 16 }}>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                              <img src="/logo-white.png" alt="BMCard" style={{ height: 20, objectFit: "contain" }} />
                            </div>
                            <div style={{ display: "flex" }}>
                              <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,200,0,0.8)" }} />
                              <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,100,0,0.8)", marginLeft: -8 }} />
                            </div>
                          </div>
                          <div style={{ fontFamily: "monospace", fontSize: 18, color: "#fff", letterSpacing: "0.1em" }}>•••• •••• •••• 8421</div>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>Card holder</div>
                              <div style={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>BMCard User</div>
                            </div>
                            <div>
                              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>Expires</div>
                              <div style={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>12/27</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      {["0% phí", "USDT", "3D Secure"].map(tag => (
                        <span key={tag} style={{ padding: "6px 14px", background: "rgba(255,255,255,0.18)", borderRadius: 20, fontSize: 12, fontWeight: 600, color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              }
            />
          </motion.div>

          {/* Card 2 - Dark stacked cards */}
          <motion.div style={{ y: y2 }} initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.35 }} className="card-hover">
            <FlipCard
              height={500}
              backTitle={t.card2BackTitle}
              backDesc={t.card2BackDesc}
              backCta={t.card2Cta} onCta={() => { const el = document.querySelector("#cards"); if(el) el.scrollIntoView({ behavior: "smooth" }); }}
              front={
                <div style={{ height: "100%", background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)", padding: 32, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, background: "rgba(99,102,241,0.2)", borderRadius: "50%", filter: "blur(60px)" }} />
                  <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>{t.card2Sub}</span>
                      <h2 style={{ fontSize: 48, fontWeight: 900, color: "#fff", margin: "8px 0 0", letterSpacing: "-0.03em", lineHeight: 1 }}>{t.card2Title}</h2>
                    </div>
                    {/* Card Image — đặt file vào /public/cards/card-stack.png */}
                    <div style={{ display: "flex", justifyContent: "center", margin: "20px 0", flex: 1, alignItems: "center" }}>
                      <div className="animate-float" style={{ width: "100%", maxWidth: 440 }}>
                        <img
                          src="/cards/card-stack.png"
                          alt="BMCard stack"
                          style={{ width: "100%", borderRadius: 0, objectFit: "contain", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }}
                          onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "block"; }}
                        />
                        {/* Fallback stacked cards */}
                        <div style={{ display: "none", position: "relative", height: 160 }}>
                          {[
                            { top: 40, rotate: -8, bg: "linear-gradient(135deg,#6366f1,#8b5cf6)", z: 1 },
                            { top: 20, rotate: -3, bg: "linear-gradient(135deg,#ec4899,#f97316)", z: 2 },
                            { top: 0, rotate: 2, bg: "linear-gradient(135deg,#10b981,#3b82f6)", z: 3 },
                          ].map((c, i) => (
                            <div key={i} style={{ position: "absolute", left: 0, right: 0, top: c.top, height: 90, background: c.bg, borderRadius: 14, transform: `rotate(${c.rotate}deg)`, zIndex: c.z }} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {["Meta", "Google", "TikTok"].map(tag => (
                        <span key={tag} style={{ padding: "6px 14px", background: "rgba(255,255,255,0.1)", borderRadius: 20, fontSize: 12, fontWeight: 600, color: "#fff", border: "1px solid rgba(255,255,255,0.15)" }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── STATS TICKER ────────────────────────────────────────────────────────── */
function StatsTicker() {
  const items = ["10,000+ Advertisers", "500M+ USD/month", "99.9% success rate", "0% transaction fee", "24/7 Support", "20+ BIN types", "Unlimited cards", "USDT top-up"];
  const doubled = [...items, ...items];
  return (
    <div style={{ background: "#FF6500", padding: "14px 0", overflow: "hidden" }}>
      <div className="animate-marquee" style={{ display: "flex", gap: 48, width: "max-content" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ fontSize: 13, fontWeight: 600, color: "#fff", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 12 }}>
            {item}
            <span style={{ opacity: 0.4 }}>•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── SIMPLE SECTION ──────────────────────────────────────────────────────── */
function SimpleSection({ t }) {
  return (
    <section style={{ background: "#f8f8f6", padding: "32px 24px" }}>
      <div className="mob-grid-1" style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {/* Left - Orange "It's so simple" */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeLeft}
          className="card-hover mob-h-auto mob-pad" style={{ background: "#FF6500", borderRadius: 24, padding: "48px 40px", position: "relative", overflow: "hidden", height: 400 }}>
          <div style={{ position: "absolute", bottom: -60, right: -60, width: 240, height: 240, background: "rgba(255,255,255,0.1)", borderRadius: "50%", filter: "blur(40px)" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: 40, fontWeight: 900, color: "#fff", margin: "0 0 40px", letterSpacing: "-0.02em" }}>{t.simpleTitle}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {[
                { num: "1", title: t.step1, desc: t.step1Desc },
                { num: "2", title: t.step2, desc: t.step2Desc },
              ].map(step => (
                <div key={step.num} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 18, color: "#fff", flexShrink: 0 }}>
                    {step.num}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: "#fff", fontSize: 18, marginBottom: 4 }}>{step.title}</div>
                    <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.5 }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right - Grey "Infinite card issuance" */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeRight}
          className="card-hover mob-h-auto mob-pad" style={{ background: "#ebebeb", borderRadius: 24, padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between", height: 400 }}>
          {/* Infinity image */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
            <img src="/cards/infinite.png" alt="Unlimited cards" style={{ width: 200, objectFit: "contain", mixBlendMode: "multiply" }} />
          </div>
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 900, color: "#111", margin: "0 0 12px", letterSpacing: "-0.02em" }}>{t.infiniteTitle}</h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.6, margin: 0 }}>{t.infiniteDesc}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── AFFILIATE SECTION ───────────────────────────────────────────────────── */
function AffiliateSection({ t }) {
  const platforms = [
    { name: "Google", icon: SiGoogleads, color: "#4285F4" },
    { name: "Facebook", icon: FaFacebook, color: "#1877F2" },
    { name: "TikTok", icon: FaTiktok, color: "#010101" },
    { name: "Twitter", icon: FaTwitter, color: "#1DA1F2" },
    { name: "Binance", icon: SiBinance, color: "#F3BA2F" },
    { name: "Shopee", icon: SiShopee, color: "#EE4D2D" },
  ];
  return (
    <section style={{ background: "#f8f8f6", padding: "0 24px 32px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {/* Section title */}
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          style={{ fontSize: "clamp(32px,5vw,56px)", fontWeight: 900, color: "#111", textAlign: "center", margin: "0 0 24px", letterSpacing: "-0.03em" }}>
          {t.affTitle}
        </motion.h2>

        <div className="mob-grid-1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {/* Left - No more risks */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeLeft}
            className="card-hover mob-h-auto" style={{ background: "#f5f5f3", borderRadius: 24, padding: "40px 40px 0", height: 400, display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}>
            <div style={{ marginBottom: 8 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#FF6500", textTransform: "uppercase", letterSpacing: "0.1em" }}>{t.noRiskSub}</span>
            </div>
            <h3 style={{ fontSize: 44, fontWeight: 900, color: "#111", margin: "0 0 0", letterSpacing: "-0.03em", lineHeight: 1.1 }}>{t.noRiskTitle}</h3>
            {/* Platform logos - tràn 3 cạnh dưới/trái/phải */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "62%" }}>
              <img src="/cards/platforms.png" alt="Platforms" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", mixBlendMode: "multiply" }} />
            </div>
          </motion.div>

          {/* Right - 20+ card types */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeRight}
            className="card-hover mob-h-auto mob-pad" style={{ background: "linear-gradient(145deg, #6366f1 0%, #a855f7 40%, #f97316 100%)", borderRadius: 24, padding: "36px", height: 400, display: "flex", alignItems: "flex-end", position: "relative", overflow: "hidden" }}>
            <h3 style={{ fontSize: "clamp(44px, 6.5vw, 72px)", fontWeight: 900, color: "#fff", margin: 0, letterSpacing: "-0.03em", lineHeight: 1.0 }}>
              20+<br />type of<br />cards<br /><em style={{ fontStyle: "italic" }}>in USD<br />&amp; EUR</em>
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── PREMIUM SECTION (BLACK) ─────────────────────────────────────────────── */
function PremiumSection({ t, openModal }) {
  return (
    <section id="solutions" style={{ background: "#0a0a0a", padding: "80px 24px 48px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {/* Giant PREMIUM text */}
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease }}>
          <h2 style={{
            fontSize: "clamp(80px, 14vw, 180px)", fontWeight: 900, margin: "0 0 48px", textAlign: "center",
            letterSpacing: "-0.04em", lineHeight: 0.9,
            background: "linear-gradient(180deg, #fff 0%, #888 60%, #444 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            {t.premiumWord}
          </h2>
        </motion.div>

        {/* Dark Feature Cards */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={staggerFast} className="mob-grid-1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
          {/* Cashback card */}
          <motion.div variants={scaleIn} className="card-hover-sm"
            style={{ background: "#1a1a1a", borderRadius: 24, padding: "40px" }}>
            <div style={{ fontSize: 64, fontWeight: 900, color: "#FF6500", lineHeight: 1, marginBottom: 8 }}>{t.premiumCashback}</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 16 }}>cashback</div>
            <p style={{ fontSize: 14, color: "#FF6500", lineHeight: 1.6, margin: 0 }}>{t.premiumCashbackDesc}</p>
          </motion.div>

          {/* Free cards */}
          <motion.div variants={scaleIn} className="card-hover-sm"
            style={{ background: "#1a1a1a", borderRadius: 24, padding: "40px" }}>
            <div style={{ fontSize: 52, fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: 8 }}>{t.premiumFree}</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 16 }}>thẻ ảo</div>
            <p style={{ fontSize: 14, color: "#FF6500", lineHeight: 1.6, margin: 0 }}>{t.premiumFreeDesc}</p>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} style={{ textAlign: "center" }}>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "18px 40px", background: "#FF6500", color: "#fff", borderRadius: 16, fontWeight: 700, fontSize: 17, textDecoration: "none" }}>
            <button onClick={openModal} style={{ background: "none", border: "none", color: "inherit", fontSize: "inherit", fontWeight: "inherit", cursor: "pointer", fontFamily: "inherit", padding: 0 }}>{t.premiumCta}</button>
          </a>
        </motion.div>

        {/* Dark Feature Cards Row 2 - API & BIN */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={staggerFast} className="mob-grid-1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
          {/* API Card */}
          <motion.div variants={scaleIn} className="card-hover-sm"
            style={{ background: "#1a1a1a", borderRadius: 24, padding: "40px", overflow: "hidden" }}>
            <h3 style={{ fontSize: 32, fontWeight: 900, color: "#fff", margin: "0 0 4px", letterSpacing: "-0.02em" }}>{t.apiTitle}</h3>
            <p style={{ fontSize: 14, color: "#888", marginBottom: 24 }}>{t.apiSub}</p>
            {/* Code block mockup */}
            <div style={{ background: "#111", borderRadius: 14, padding: "20px", fontFamily: "monospace", fontSize: 12, lineHeight: 1.7, overflow: "hidden" }}>
              <div style={{ color: "#888" }}>$ bmcard payment_intents create --amount 100</div>
              <div style={{ color: "#3b82f6" }}>{"{"}</div>
              <div style={{ paddingLeft: 16 }}>
                <div><span style={{ color: "#f97316" }}>"id"</span><span style={{ color: "#fff" }}>: </span><span style={{ color: "#22c55e" }}>"pi_xYz123abc"</span><span style={{ color: "#888" }}>,</span></div>
                <div><span style={{ color: "#f97316" }}>"object"</span><span style={{ color: "#fff" }}>: </span><span style={{ color: "#22c55e" }}>"payment_intent"</span><span style={{ color: "#888" }}>,</span></div>
                <div><span style={{ color: "#f97316" }}>"amount"</span><span style={{ color: "#fff" }}>: </span><span style={{ color: "#a78bfa" }}>100</span><span style={{ color: "#888" }}>,</span></div>
                <div><span style={{ color: "#f97316" }}>"currency"</span><span style={{ color: "#fff" }}>: </span><span style={{ color: "#22c55e" }}>"usd"</span></div>
              </div>
              <div style={{ color: "#3b82f6" }}>{"}"}</div>
            </div>
          </motion.div>

          {/* BIN Checker */}
          <motion.div variants={scaleIn} className="card-hover-sm"
            style={{ background: "#1a1a1a", borderRadius: 24, padding: "40px", display: "flex", flexDirection: "column" }}>
            <h3 style={{ fontSize: 32, fontWeight: 900, color: "#FF6500", margin: "0 0 4px", letterSpacing: "-0.02em" }}>{t.binTitle}</h3>
            <p style={{ fontSize: 14, color: "#888", marginBottom: "auto" }}>{t.binSub}</p>
            {/* Heartbeat visual */}
            <div style={{ position: "relative", height: 80, marginBottom: 24, overflow: "hidden" }}>
              <svg viewBox="0 0 300 80" style={{ width: "100%", height: "100%" }}>
                <defs>
                  <linearGradient id="heartGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FF6500" stopOpacity="0" />
                    <stop offset="50%" stopColor="#FF6500" stopOpacity="1" />
                    <stop offset="100%" stopColor="#FF6500" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,40 L60,40 L70,20 L80,60 L90,10 L100,70 L110,35 L120,40 L300,40" stroke="url(#heartGrad)" strokeWidth="2.5" fill="none" />
              </svg>
            </div>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px 24px", background: "#FF6500", color: "#fff", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              {t.binCta}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── TEAMWORK SECTION ────────────────────────────────────────────────────── */
function TeamworkSection({ t }) {
  return (
    <section id="enterprise" style={{ background: "#f8f8f6", padding: "32px 24px" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 32 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, ease: easeOut }}
        className="card-hover" style={{ maxWidth: 960, margin: "0 auto", background: "#fff", borderRadius: 24, overflow: "hidden", position: "relative" }}>
        <img src="/cards/teamwork2.png" alt="Team dashboard" style={{ width: "100%", display: "block", objectFit: "cover" }} />
      </motion.div>
    </section>
  );
}

/* ─── PRICING SECTION ─────────────────────────────────────────────────────── */
function PricingSection({ t }) {
  return (
    <section id="cashback" style={{ background: "#f8f8f6", padding: "0 24px 32px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", background: "#fff", borderRadius: 24, padding: "48px" }} className="mob-pad">
        <div className="mob-grid-1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeLeft}>
            <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, color: "#111", margin: "0 0 32px", letterSpacing: "-0.03em" }}>
              {t.pricingTitle}
            </motion.h2>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {t.fees.map((fee, i) => (
                <motion.div key={i} variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF6500", flexShrink: 0 }} />
                  <span style={{ fontSize: 18, fontWeight: 600, color: "#111" }}>{fee}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6, ease }} style={{ marginTop: 32 }}>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: "#111", color: "#fff", borderRadius: 14, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
                {t.pricingCta} <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
          {/* Visual - fee breakdown */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={staggerSlow} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <motion.div variants={fadeRight} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "linear-gradient(135deg,#FF6500,#ff8c00)", borderRadius: 14, padding: "20px 24px" }}>
              <div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", fontWeight: 600, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>Cashback</div>
                <div style={{ fontSize: 14, color: "#fff", fontWeight: 500 }}>Hoàn tiền chi tiêu quảng cáo</div>
              </div>
              <span style={{ fontSize: 36, fontWeight: 900, color: "#fff" }}>3%</span>
            </motion.div>
            {[
              { label: "Phí giao dịch", value: "0%", color: "#f0fdf4" },
              { label: "Phí mở thẻ", value: "$0", color: "#fffbeb" },
              { label: "Phí FX", value: "0.5%", color: "#f0f9ff" },
            ].map(item => (
              <motion.div key={item.label} variants={fadeRight} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: item.color, borderRadius: 14, padding: "16px 20px" }}>
                <span style={{ fontSize: 14, color: "#666", fontWeight: 500 }}>{item.label}</span>
                <span style={{ fontSize: 22, fontWeight: 900, color: "#111" }}>{item.value}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── CARD CATALOG ────────────────────────────────────────────────────────── */
function CardCatalog({ t, openModal }) {
  const [isMob, setIsMob] = React.useState(window.innerWidth <= 768);
  React.useEffect(() => {
    const handler = () => setIsMob(window.innerWidth <= 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return (
    <section id="cards" style={{ background: "#f8f8f6", padding: isMob ? "40px 16px" : "80px 24px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <motion.h2
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          style={{ fontSize: "clamp(36px,6vw,72px)", fontWeight: 900, color: "#111", margin: "0 0 40px", letterSpacing: "-0.04em" }}>
          {t.chooseTitle}
        </motion.h2>
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }} variants={staggerSlow}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {t.cards.map((card, i) => (
            <motion.div key={i} variants={fadeUp} className="card-hover-sm"
              style={{
                background: "#fff",
                borderRadius: 20,
                display: "flex",
                flexDirection: isMob ? "column" : "row",
                alignItems: "stretch",
                overflow: "hidden",
                minHeight: isMob ? "auto" : 200,
                border: "1px solid #f0f0f0",
              }}>
              {/* Left: text */}
              <div style={{ flex: 1, padding: "32px 36px", display: "flex", flexDirection: "column", justifyContent: "center", minWidth: 0 }}>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
                  {card.tags.map((tag, j) => (
                    <span key={j} style={{
                      padding: "5px 14px",
                      background: j === 0 ? "#fff7ed" : "#f5f5f5",
                      borderRadius: 20, fontSize: 12, fontWeight: 600,
                      color: j === 0 ? "#FF6500" : "#555",
                      border: j === 0 ? "1px solid #fed7aa" : "1px solid #eee",
                    }}>{tag}</span>
                  ))}
                </div>
                <h3 style={{ fontSize: 28, fontWeight: 900, color: "#111", margin: "0 0 10px", letterSpacing: "-0.025em" }}>{card.name}</h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.65, margin: "0 0 24px", maxWidth: 380 }}>{card.desc}</p>
                <div style={{ display: "flex", gap: 10 }}>
                  <button onClick={openModal} style={{ padding: "11px 24px", background: "#111", color: "#fff", borderRadius: 10, fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer", fontFamily: "inherit" }}>{card.cta}</button>
                  <a href="#" style={{ padding: "11px 24px", background: "#f5f5f5", color: "#333", borderRadius: 10, fontWeight: 600, fontSize: 14, textDecoration: "none" }}>{card.learn}</a>
                </div>
              </div>
              {/* Right: image — fills right side flush */}
              {!isMob && <div style={{
                width: 340,
                flexShrink: 0,
                position: "relative",
                overflow: "hidden",
                background: "#f9f9f9",
              }}>
                {card.cardImg ? (
                  <img
                    src={card.cardImg}
                    alt={card.name}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                      mixBlendMode: "multiply",
                      padding: "16px",
                      boxSizing: "border-box",
                    }}
                  />
                ) : (
                  <div className={`bg-gradient-to-br ${card.gradient}`}
                    style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "28px 32px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <img src="/logo-white.png" alt="BMCard" style={{ height: 18, objectFit: "contain" }} />
                      <div style={{ display: "flex" }}>
                        <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(255,200,0,0.75)" }} />
                        <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(255,100,0,0.75)", marginLeft: -9 }} />
                      </div>
                    </div>
                    <div style={{ fontFamily: "monospace", fontSize: 14, color: "rgba(255,255,255,0.9)", letterSpacing: "0.1em" }}>•••• {["7834","2190","1234","5678"][i]}</div>
                  </div>
                )}
              </div>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


/* ─── ADS COST COMPARISON ─────────────────────────────────────────────────── */
function AdsComparisonSection({ openModal }) {
  const [spend, setSpend] = React.useState(10000);

  const bmFee      = 0.5;   // BMCard: 0.5% FX, 0% transaction
  const bankAvgFee = 3.34;  // average VCB/ACB/TCB/VPBank

  const banks = [
    { name: "VCB Visa",    fee: 3.37 },
    { name: "ACB Visa",    fee: 3.10 },
    { name: "Techcombank", fee: 3.49 },
    { name: "VPBank",      fee: 3.40 },
  ];

  const bmCost   = Math.round(spend * bmFee / 100);
  const bankCost = Math.round(spend * bankAvgFee / 100);
  const saved    = bankCost - bmCost;
  const savedY   = saved * 12;
  const maxFee   = 4;

  const benefits = [
    { icon: "🚫", title: "Không bị block ads",   desc: "Thẻ issue tại Mỹ — tỷ lệ phê duyệt Meta & Google cao hơn thẻ VN nhiều lần." },
    { icon: "⚡", title: "Nạp tiền trong 5 phút", desc: "USDT on-chain, không chờ duyệt chuyển khoản quốc tế 1–3 ngày." },
    { icon: "♾️", title: "Vô hạn thẻ ảo",        desc: "1 thẻ / 1 BM account — tạo bao nhiêu cũng được, scale không giới hạn." },
    { icon: "📋", title: "Ít thủ tục rắc rối",    desc: "Không cần giải trình giao dịch ngoại tệ, không sao kê phức tạp." },
    { icon: "💰", title: "Cashback 1.5%",          desc: "Hoàn tiền trực tiếp vào tài khoản mỗi tháng. Thẻ bank VN không có." },
    { icon: "🏦", title: "Không hạn mức thẻ",     desc: "Chi theo số dư USDT, không cần xin nâng hạn mức hay bị ngân hàng giới hạn." },
  ];

  return (
    <section id="compare" style={{ background: "#fff", padding: "80px 24px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>

        {/* Header */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} style={{ textAlign: "center", marginBottom: 52 }}>
          <motion.div variants={fadeUp} style={{ marginBottom: 14 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", background: "#fff7f0", border: "1px solid #ffd0a8", borderRadius: 20, fontSize: 13, fontWeight: 600, color: "#FF6500" }}>
              💸 $10k ads/tháng — bạn đang trả thừa bao nhiêu?
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(32px,5vw,60px)", fontWeight: 900, color: "#111", margin: "0 0 14px", letterSpacing: "-0.03em" }}>
            Cắt 85% phí chạy ads<br />chỉ bằng cách đổi thẻ
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: 17, color: "#666", maxWidth: 500, margin: "0 auto", lineHeight: 1.6 }}>
            Thẻ ngân hàng VN tính 3–3.5% mỗi giao dịch quốc tế. BMCard chỉ 0.5%. Nhân với ngân sách ads mỗi tháng — con số chênh lệch đủ để thuê thêm người.
          </motion.p>
        </motion.div>

        {/* Comparison card */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease }}
          style={{ background: "#fafafa", borderRadius: 24, padding: "36px 36px 28px", marginBottom: 16, border: "1px solid #f0f0f0" }}>

          {/* Spend input */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32, flexWrap: "wrap" }}>
            <span style={{ fontSize: 14, color: "#888", fontWeight: 500, flexShrink: 0 }}>Ngân sách ads/tháng:</span>
            <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#fff", border: "1.5px solid #e5e5e5", borderRadius: 12, padding: "7px 14px" }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#aaa" }}>$</span>
              <input type="number" value={spend} min={500} max={500000} step={500}
                onChange={e => setSpend(Math.max(0, parseInt(e.target.value) || 0))}
                style={{ width: 90, background: "transparent", border: "none", fontSize: 20, fontWeight: 800, color: "#111", outline: "none", fontFamily: "inherit" }} />
            </div>
            <input type="range" min={500} max={200000} step={500} value={spend}
              onChange={e => setSpend(parseInt(e.target.value))}
              style={{ flex: 1, minWidth: 120, accentColor: "#FF6500" }} />
          </div>

          {/* Bars */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {/* BMCard — highlighted */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 120, flexShrink: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#FF6500" }}>BMCard</div>
                <div style={{ fontSize: 10, color: "#FF6500", opacity: 0.7 }}>0.5% FX</div>
              </div>
              <div style={{ flex: 1, height: 44, background: "#f5f5f5", borderRadius: 10, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${(bmFee / maxFee) * 100}%`, background: "linear-gradient(90deg,#FF6500,#ff9500)", borderRadius: 10, display: "flex", alignItems: "center", paddingLeft: 14, minWidth: 70, transition: "width 0.4s" }}>
                  <span style={{ fontSize: 14, fontWeight: 800, color: "#fff", whiteSpace: "nowrap" }}>{bmFee}%</span>
                </div>
              </div>
              <div style={{ width: 90, flexShrink: 0, textAlign: "right", fontSize: 16, fontWeight: 900, color: "#FF6500" }}>
                ${bmCost.toLocaleString()}
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "#eee", margin: "4px 0" }} />

            {/* Banks */}
            {banks.map(b => {
              const cost = Math.round(spend * b.fee / 100);
              return (
                <div key={b.name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 120, flexShrink: 0, fontSize: 13, fontWeight: 500, color: "#888" }}>{b.name}</div>
                  <div style={{ flex: 1, height: 36, background: "#f0f0f0", borderRadius: 8, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${(b.fee / maxFee) * 100}%`, background: "#d1d5db", borderRadius: 8, display: "flex", alignItems: "center", paddingLeft: 12, transition: "width 0.4s" }}>
                      <span style={{ fontSize: 12, fontWeight: 600, color: "#666", whiteSpace: "nowrap" }}>{b.fee}%</span>
                    </div>
                  </div>
                  <div style={{ width: 90, flexShrink: 0, textAlign: "right", fontSize: 14, fontWeight: 600, color: "#999" }}>
                    ${cost.toLocaleString()}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Savings summary */}
          <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 10 }}>
            {[
              { label: "Tiết kiệm / tháng", value: `+$${saved.toLocaleString()}`, bg: "#fff7ed", border: "#fed7aa", color: "#FF6500" },
              { label: "Tiết kiệm / năm",   value: `+$${savedY.toLocaleString()}`, bg: "#f0fdf4", border: "#bbf7d0", color: "#16a34a" },
              { label: "BMCard rẻ hơn",      value: `${Math.round((1 - bmFee / bankAvgFee) * 100)}%`, bg: "#f5f3ff", border: "#ddd6fe", color: "#7c3aed",
                sub: "so với trung bình" },
            ].map(item => (
              <div key={item.label} style={{ background: item.bg, border: `1px solid ${item.border}`, borderRadius: 14, padding: "14px 18px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: item.color, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: 26, fontWeight: 900, color: item.color }}>{item.value}</div>
                {item.sub && <div style={{ fontSize: 10, color: "#999", marginTop: 2 }}>{item.sub}</div>}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Fee table */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ background: "#fafafa", borderRadius: 20, overflow: "hidden", border: "1px solid #f0f0f0", marginBottom: 20 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr", background: "#f5f5f5", padding: "10px 20px", fontSize: 11, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            {["Phương thức", "Phí chuyển đổi", "Phí QT/Auth", "Tổng phí", "Nguy cơ block", "Tạo nhiều thẻ"].map(h => (
              <div key={h} style={{ padding: "2px 4px" }}>{h}</div>
            ))}
          </div>
          {[
            { name: "VCB Visa",    conv: "2.27%", auth: "~1.10%", total: "~3.37%", risk: "🔴 Cao",  multi: "❌ Khó" },
            { name: "ACB Visa",    conv: "~2.00%", auth: "~1.10%", total: "~3.10%", risk: "🔴 Cao",  multi: "❌ Khó" },
            { name: "Techcombank", conv: "2.39%", auth: "~1.10%", total: "~3.49%", risk: "🔴 Cao",  multi: "❌ Khó" },
            { name: "VPBank",      conv: "~2.30%", auth: "~1.10%", total: "~3.40%", risk: "🔴 Cao",  multi: "❌ Khó" },
          ].map((r, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr", padding: "12px 20px", borderTop: "1px solid #ebebeb", fontSize: 13, color: "#555", alignItems: "center" }}>
              <div style={{ fontWeight: 600, color: "#333" }}>{r.name}</div>
              <div style={{ color: "#e53e3e" }}>{r.conv}</div>
              <div style={{ color: "#e53e3e" }}>{r.auth}</div>
              <div style={{ fontWeight: 700, color: "#e53e3e" }}>{r.total}</div>
              <div>{r.risk}</div>
              <div>{r.multi}</div>
            </div>
          ))}
          {/* BMCard row — highlighted */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr", padding: "14px 20px", borderTop: "2px solid #FF6500", background: "#fff7ed", fontSize: 13, alignItems: "center" }}>
            <div style={{ fontWeight: 800, color: "#FF6500", fontSize: 14 }}>⚡ BMCard</div>
            <div style={{ fontWeight: 700, color: "#16a34a" }}>0%</div>
            <div style={{ fontWeight: 700, color: "#16a34a" }}>0.5%</div>
            <div style={{ fontWeight: 900, color: "#FF6500", fontSize: 15 }}>0.5%</div>
            <div style={{ fontWeight: 600, color: "#16a34a" }}>🟢 Thấp</div>
            <div style={{ fontWeight: 600, color: "#16a34a" }}>✅ Vô hạn</div>
          </div>
        </motion.div>

        {/* Benefits grid */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }} variants={staggerFast}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 12, marginBottom: 36 }}>
          {benefits.map((b, i) => (
            <motion.div key={i} variants={scaleIn} className="card-hover-sm"
              style={{ background: "#fafafa", borderRadius: 16, padding: "22px 24px", border: "1px solid #f0f0f0" }}>
              <div style={{ fontSize: 26, marginBottom: 8 }}>{b.icon}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#111", marginBottom: 6 }}>{b.title}</div>
              <div style={{ fontSize: 13, color: "#888", lineHeight: 1.65 }}>{b.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
          style={{ textAlign: "center" }}>
          <button onClick={openModal}
            style={{ padding: "16px 40px", background: "#FF6500", color: "#fff", borderRadius: 14, fontWeight: 800, fontSize: 17, border: "none", cursor: "pointer", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 10 }}>
            Mở thẻ BMCard — tiết kiệm ${saved.toLocaleString()}/tháng <ArrowRight size={20} />
          </button>
          <div style={{ marginTop: 10, fontSize: 13, color: "#aaa" }}>Đăng ký miễn phí · Nạp USDT · Chạy ads ngay</div>
        </motion.div>

      </div>
    </section>
  );
}

/* ─── FAQ ─────────────────────────────────────────────────────────────────── */
function FaqSection({ t }) {
  const [open, setOpen] = useState(null);
  return (
    <section style={{ background: "#f8f8f6", padding: "0 24px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, color: "#111", margin: "0 0 24px", letterSpacing: "-0.03em" }}>
          {t.faqTitle}
        </motion.h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {t.faqs.map(([q, a], i) => (
            <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              style={{ background: "#fff", borderRadius: 16, overflow: "hidden" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: "100%", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", border: "none", background: "transparent", cursor: "pointer", textAlign: "left" }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: "#111" }}>{q}</span>
                <ChevronDown size={20} color="#888" style={{ transform: open === i ? "rotate(180deg)" : "none", transition: "transform 0.3s" }} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease }}>
                    <p style={{ padding: "0 24px 20px", margin: 0, fontSize: 15, color: "#666", lineHeight: 1.7 }}>{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ───────────────────────────────────────────────────────────── */
function FinalCta({ t, openModal }) {
  return (
    <section style={{ background: "#f8f8f6", padding: "0 24px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", background: "#FF6500", borderRadius: 24, padding: "60px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, left: -80, width: 300, height: 300, background: "rgba(255,255,255,0.08)", borderRadius: "50%", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", bottom: -60, right: -60, width: 250, height: 250, background: "rgba(0,0,0,0.1)", borderRadius: "50%", filter: "blur(50px)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            style={{ fontSize: "clamp(32px,5vw,60px)", fontWeight: 900, color: "#fff", margin: "0 0 16px", letterSpacing: "-0.03em" }}>
            {t.finalTitle}
          </motion.h2>
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.6 }}>
            {t.finalDesc}
          </motion.p>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <a href="#" style={{ padding: "16px 36px", background: "#fff", color: "#FF6500", borderRadius: 14, fontWeight: 800, fontSize: 17, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
              {t.finalCta} <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ──────────────────────────────────────────────────────────────── */
function Footer({ t }) {
  return (
    <footer style={{ background: "#111", padding: "48px 24px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <img src="/logo-white.png" alt="BMCard" style={{ height: 24, objectFit: "contain", marginBottom: 16, display: "block" }} />
            <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7, margin: "0 0 24px", maxWidth: 260 }}>{t.footerDesc}</p>
            <div style={{ display: "flex", gap: 12 }}>
              {[FaFacebook, FaTiktok, FaTwitter].map((Icon, i) => (
                <a key={i} href="#" style={{ width: 36, height: 36, borderRadius: "50%", background: "#222", display: "flex", alignItems: "center", justifyContent: "center", color: "#888", textDecoration: "none", transition: "background 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#333"}
                  onMouseLeave={e => e.currentTarget.style.background = "#222"}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          {/* Links */}
          {[
            { title: "Product", links: ["Cards", "Pricing", "API", "BIN Checker"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
            { title: "Support", links: ["Help Center", "Contact", "Privacy", "Terms"] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>{col.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map(link => (
                  <a key={link} href="#" style={{ fontSize: 14, color: "#666", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={e => e.target.style.color = "#fff"}
                    onMouseLeave={e => e.target.style.color = "#666"}
                  >{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid #222", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "#555" }}>&copy; 2025 BMCard. All rights reserved.</span>
          <div style={{ display: "flex", gap: 16 }}>
            {["Privacy", "Terms", "Cookies"].map(link => (
              <a key={link} href="#" style={{ fontSize: 12, color: "#555", textDecoration: "none" }}>{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}


// LANDING - main assembler
function Landing() {
  const [lang, setLang] = React.useState("vi");
  const [modalOpen, setModalOpen] = React.useState(false);
  const [contactOpen, setContactOpen] = React.useState(false);
  const [affOpen, setAffOpen] = React.useState(false);
  const t = content[lang];
  const openModal = () => setModalOpen(true);
  const ref = React.useMemo(() => new URLSearchParams(window.location.search).get("ref") || "", []);
  return (
    <>
      <GlobalStyles />
      <RegisterModal open={modalOpen} onClose={() => setModalOpen(false)} lang={lang} refSource={ref} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <AffiliateModal open={affOpen} onClose={() => setAffOpen(false)} />
      <Nav lang={lang} setLang={setLang} t={t} openModal={openModal} openContact={() => setContactOpen(true)} openAff={() => setAffOpen(true)} />
      <Hero t={t} openModal={openModal} />
      <StatsTicker />
      <SimpleSection t={t} />
      <AdsComparisonSection openModal={openModal} />
      <AffiliateSection t={t} />
      <PremiumSection t={t} openModal={openModal} />
      <TeamworkSection t={t} />
      <CardCatalog t={t} openModal={openModal} />
      <PricingSection t={t} />
      <FaqSection t={t} />
      <FinalCta t={t} openModal={openModal} />
      <Footer t={t} />
    </>
  );
}

export default Landing;
