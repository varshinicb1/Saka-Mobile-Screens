import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Heart, Leaf, Plus, Sparkles, Star, UsersRound } from "lucide-react";
import { GlassCard, MiniLotus, SakaShell, TopBar } from "./_shared/SakaShared";
import "./_group.css";
import { useState } from "react";

const moments = [
  { year: "2025", title: "Current chapter", detail: "Building momentum", icon: Sparkles, tone: "var(--saka-violet-bright)" },
  { year: "2026", title: "Career shift", detail: "High growth potential", icon: BriefcaseBusiness, tone: "var(--saka-mint)" },
  { year: "2027", title: "Expansion", detail: "New opportunities", icon: ArrowUpRight, tone: "var(--saka-gold)" },
  { year: "2028", title: "Relationship", detail: "Deeper connection", icon: Heart, tone: "var(--saka-rose)" },
  { year: "2029", title: "Leadership", detail: "Taking charge", icon: Star, tone: "var(--saka-peach)" },
  { year: "2030", title: "Legacy", detail: "Making an impact", icon: UsersRound, tone: "var(--saka-mint)" },
];
export function LifeMap() {
  const [selected, setSelected] = useState(0);
  const moment = moments[selected];
  return <SakaShell active="you"><TopBar eyebrow="Your longer rhythm" title="Life map" back /><div className="saka-card saka-card-pad" style={{ paddingBottom: 21 }}><div className="saka-row"><div><p className="saka-eyebrow" style={{ marginBottom: 5 }}>THE VIEW AHEAD</p><h2 className="saka-serif" style={{ margin: 0, fontSize: 22, fontWeight: 500 }}>A life in chapters</h2></div><MiniLotus /></div><p className="saka-subtle" style={{ margin: "12px 0 18px" }}>Not a fixed future. A pattern of where your energy wants to go next.</p><div className="saka-progress-line" /><div className="saka-row saka-caption"><span>NOW</span><span>YOUR HORIZON</span></div></div>
    <div className="saka-section"><div className="saka-row" style={{ alignItems: "flex-start" }}><div><p className="saka-eyebrow" style={{ marginBottom: 5 }}>SELECT A CHAPTER</p><h2 className="saka-section-title" style={{ fontSize: 15 }}>{moment.title}</h2></div><button className="saka-icon-button" aria-label="Add chapter" onClick={() => window.alert("Your own chapter has been added to the map.")}><Plus size={15} /></button></div>
      <div className="saka-card" style={{ marginTop: 13, padding: "5px 15px" }}>{moments.map((item, i) => { const Icon = item.icon; return <button key={item.year} onClick={() => setSelected(i)} style={{ position: "relative", display: "flex", alignItems: "center", width: "100%", gap: 12, padding: "12px 0", border: 0, borderBottom: i === moments.length - 1 ? 0 : "1px solid rgba(214,176,232,.1)", color: "inherit", textAlign: "left", background: "transparent", opacity: selected === i ? 1 : .63 }}><div style={{ position: "absolute", top: 0, bottom: 0, left: 15, width: 1, background: i < selected ? item.tone : "rgba(214,176,232,.12)" }} /><span className="saka-mono" style={{ zIndex: 1, width: 39, color: selected === i ? "var(--saka-gold)" : "var(--saka-soft)", fontSize: 11 }}>{item.year}</span><span style={{ zIndex: 1, display: "grid", placeItems: "center", width: 30, height: 30, border: `1px solid ${selected === i ? item.tone : "rgba(214,176,232,.2)"}`, borderRadius: "50%", color: item.tone, background: "#241535" }}><Icon size={13} /></span><span style={{ flex: 1 }}><strong style={{ display: "block", fontSize: 12, fontWeight: 500 }}>{item.title}</strong><span className="saka-caption">{item.detail}</span></span>{selected === i && <ArrowUpRight size={14} color="var(--saka-gold)" />}</button> })}</div></div>
    <GlassCard className="saka-section"><p className="saka-eyebrow" style={{ marginBottom: 5 }}>A NOTE FOR THIS CHAPTER</p><h3 style={{ margin: 0, fontSize: 16, fontWeight: 500 }}>{moment.title}, with room to change</h3><p className="saka-subtle" style={{ margin: "9px 0 14px" }}>Your best decisions happen when you trust the direction and stay flexible about the route.</p><button className="saka-button ghost small" onClick={() => window.alert("This chapter has been saved to your reflections.")}>Save reflection</button></GlassCard>
    <div className="saka-section" style={{ display: "flex", justifyContent: "space-between", color: "var(--saka-dim)" }}><span className="saka-caption"><ArrowDown size={13} style={{ verticalAlign: "middle", marginRight: 5 }} />Scroll to explore</span><span className="saka-caption">Updated today</span></div>
  </SakaShell>;
}
export default LifeMap;