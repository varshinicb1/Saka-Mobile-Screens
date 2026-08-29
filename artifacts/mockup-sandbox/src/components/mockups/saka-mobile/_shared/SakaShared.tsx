import { ArrowLeft, Bell, CalendarDays, ChevronRight, CircleUserRound, Compass, Home, Lightbulb, MessageCircle, Moon, Sparkles, UserRound } from "lucide-react";
import type { ReactNode } from "react";
import "../_group.css";

export type SakaTab = "home" | "forecast" | "daymap" | "ask" | "you";

const navItems: Array<{ id: SakaTab; label: string; icon: typeof Home; href: string }> = [
  { id: "home", label: "Home", icon: Home, href: "/__mockup/preview/saka-mobile/Home" },
  { id: "forecast", label: "Forecast", icon: Compass, href: "/__mockup/preview/saka-mobile/Forecast" },
  { id: "daymap", label: "Day Map", icon: CalendarDays, href: "/__mockup/preview/saka-mobile/DayMap" },
  { id: "you", label: "You", icon: UserRound, href: "/__mockup/preview/saka-mobile/Profile" },
];

export function SakaShell({ active, children, className = "" }: { active: SakaTab; children: ReactNode; className?: string }) {
  return <main className={`saka-app ${className}`}><div className="saka-scroll">{children}</div><BottomNav active={active} /></main>;
}

export function TopBar({ title, eyebrow, back = false, notification = false }: { title: string; eyebrow?: string; back?: boolean; notification?: boolean }) {
  return <header className="saka-topbar">
    <div className="saka-row" style={{ justifyContent: "flex-start" }}>
      {back && <button className="saka-icon-button" aria-label="Go back" onClick={() => window.history.back()}><ArrowLeft size={16} /></button>}
      <div>
        {eyebrow && <p className="saka-eyebrow">{eyebrow}</p>}
        <h1 className="saka-title">{title}</h1>
      </div>
    </div>
    {notification && <button className="saka-icon-button" aria-label="Notifications" onClick={() => window.alert("You are all caught up.")}><Bell size={16} /></button>}
  </header>;
}

function BottomNav({ active }: { active: SakaTab }) {
  return <nav className="saka-nav" aria-label="Primary navigation">
    <a href={navItems[0].href} className={`saka-nav-item ${active === "home" ? "active" : ""}`}><Home size={16} strokeWidth={active === "home" ? 2.3 : 1.6} /><span className="saka-nav-label">Home</span></a>
    <a href={navItems[1].href} className={`saka-nav-item ${active === "forecast" ? "active" : ""}`}><Compass size={16} strokeWidth={active === "forecast" ? 2.3 : 1.6} /><span className="saka-nav-label">Forecast</span></a>
    <a href="/__mockup/preview/saka-mobile/AskSaka" className={`saka-nav-item saka-nav-center ${active === "ask" ? "active" : ""}`} aria-label="Ask Saka"><Sparkles size={19} /></a>
    <a href="/__mockup/preview/saka-mobile/DayMap" className={`saka-nav-item ${active === "daymap" ? "active" : ""}`}><CalendarDays size={16} strokeWidth={active === "daymap" ? 2.3 : 1.6} /><span className="saka-nav-label">Day Map</span></a>
    <a href={navItems[3].href} className={`saka-nav-item ${active === "you" ? "active" : ""}`}><UserRound size={16} strokeWidth={active === "you" ? 2.3 : 1.6} /><span className="saka-nav-label">You</span></a>
  </nav>;
}

export function Orb({ size = 100, className = "" }: { size?: number; className?: string }) {
  return <div className={`saka-orb saka-breathe ${className}`} style={{ width: size, height: size }} aria-label="Saka is present"><span className="saka-orb-core" /></div>;
}

export function GlassCard({ children, className = "", pad = true }: { children: ReactNode; className?: string; pad?: boolean }) {
  return <section className={`saka-card ${pad ? "saka-card-pad" : ""} ${className}`}>{children}</section>;
}

export function SectionHead({ title, action }: { title: string; action?: string }) {
  return <div className="saka-section-head"><h2 className="saka-section-title">{title}</h2>{action && <button className="saka-link" onClick={() => window.alert(`${action} is ready for your next check-in.`)}>{action}</button>}</div>;
}

export function Metric({ label, value, percent, tone = "" }: { label: string; value: string; percent: number; tone?: string }) {
  return <div className="saka-metric"><div className="saka-metric-label">{label}</div><div className={`saka-metric-value ${tone}`}>{value}</div><div className="saka-meter"><span style={{ width: `${percent}%` }} /></div></div>;
}

export function CurveChart({ compact = false }: { compact?: boolean }) {
  return <svg className="saka-chart" viewBox="0 0 340 120" role="img" aria-label="A rising and falling energy curve">
    <defs><linearGradient id="sakaCurveFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c38cda" stopOpacity=".3" /><stop offset="100%" stopColor="#c38cda" stopOpacity="0" /></linearGradient></defs>
    <path className="grid" d="M0 28H340M0 60H340M0 92H340" />
    {!compact && <path className="fill" d="M0 94 C29 88, 39 70, 66 75 S99 41, 127 52 S155 86, 181 68 S207 34, 237 43 S258 70, 280 50 S312 48, 340 25 V120 H0Z" />}
    <path className="curve" d={compact ? "M0 76 C34 70,42 57,68 64 S103 42,129 53 S162 67,184 50 S219 37,242 53 S276 65,300 45 S322 35,340 28" : "M0 94 C29 88, 39 70, 66 75 S99 41, 127 52 S155 86, 181 68 S207 34, 237 43 S258 70, 280 50 S312 48, 340 25"} />
    <circle cx="237" cy="43" r="4" fill="#f0c68f" /><circle cx="237" cy="43" r="8" fill="none" stroke="#f0c68f" strokeOpacity=".28" />
  </svg>;
}

export function MiniLotus() {
  return <svg width="42" height="36" viewBox="0 0 42 36" aria-label="Lotus mark"><path d="M21 32C15 28 9 22 10 15c4 1 8 4 11 9-1-10 1-16 0-20 4 5 6 11 0 20 3-5 7-8 11-9 1 7-5 13-11 17Z" fill="none" stroke="#d8aa68" strokeWidth="1.2" /><path d="M5 30C12 27 30 27 37 30" fill="none" stroke="#d8aa68" strokeOpacity=".7" /></svg>;
}

export function ChevronRow({ icon, title, detail, onClick }: { icon: ReactNode; title: string; detail?: string; onClick?: () => void }) {
  return <button className="saka-list-row" style={{ width: "100%", border: 0, background: "none", textAlign: "left", color: "inherit" }} onClick={onClick}>
    <span style={{ display: "grid", placeItems: "center", width: 30, height: 30, borderRadius: 10, color: "var(--saka-gold)", background: "rgba(214,169,101,.1)" }}>{icon}</span>
    <span style={{ flex: 1 }}><strong style={{ display: "block", fontSize: 12, fontWeight: 500 }}>{title}</strong>{detail && <span className="saka-caption">{detail}</span>}</span><ChevronRight size={15} color="var(--saka-dim)" />
  </button>;
}

export { Bell, CircleUserRound, Lightbulb, MessageCircle, Moon };