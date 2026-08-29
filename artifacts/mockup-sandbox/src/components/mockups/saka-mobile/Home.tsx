import { ArrowUpRight, Check, Clock3, Info, Sparkles } from "lucide-react";
import { CurveChart, GlassCard, Metric, MiniLotus, Orb, SakaShell, SectionHead, TopBar } from "./_shared/SakaShared";
import "./_group.css";
import { useState } from "react";

export function Home() {
  const [done, setDone] = useState(false);
  const [showWhy, setShowWhy] = useState(false);
  return <SakaShell active="home">
    <TopBar eyebrow="Tuesday · 14 May 2024" title="Good morning, Aarav" notification />
    <div className="saka-card saka-card-pad" style={{ textAlign: "center", paddingTop: 25 }}>
      <p className="saka-eyebrow" style={{ marginBottom: 2 }}>Your signal for today</p>
      <div className="saka-orb-wrap"><Orb size={112} /></div>
      <h2 className="saka-serif" style={{ margin: "2px 0 5px", fontSize: 23, fontWeight: 500 }}>Move with quiet focus</h2>
      <p className="saka-subtle" style={{ maxWidth: 240, margin: "0 auto 17px" }}>There is enough energy for one meaningful thing. Let the rest wait.</p>
      <button className="saka-button violet" style={{ display: "inline-flex", alignItems: "center", gap: 7 }} onClick={() => setDone(!done)}>{done ? <Check size={15} /> : <ArrowUpRight size={15} />}{done ? "Marked for today" : "See today's move"}</button>
    </div>
    {done && <div className="saka-toast"><Check size={13} style={{ verticalAlign: "middle", marginRight: 6 }} />A small promise to yourself is still progress.</div>}
    <div className="saka-section">
      <SectionHead title="Today's move" action={showWhy ? "Hide why" : "Why this?"} />
      <GlassCard>
        <div className="saka-row" style={{ alignItems: "flex-start" }}><div><span className="saka-caption">MOST ALIGNED</span><h3 style={{ margin: "7px 0 5px", fontSize: 18, fontWeight: 500 }}>Finish the proposal</h3><p className="saka-subtle" style={{ margin: 0 }}>The conversation you have been avoiding.</p></div><span style={{ color: "var(--saka-gold)" }}><Clock3 size={17} /></span></div>
        {showWhy && <div style={{ display: "flex", gap: 8, marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--saka-line)" }}><Info size={14} color="var(--saka-gold)" /><p className="saka-caption" style={{ margin: 0 }}>Your attention is strongest between 10 AM and noon. Clear communication has a softer landing there.</p></div>}
      </GlassCard>
    </div>
    <div className="saka-section"><SectionHead title="Today at a glance" action="Details" /><div className="saka-metric-grid"><Metric label="Opportunity" value="84%" percent={84} /><Metric label="Focus" value="79%" percent={79} tone="violet" /><Metric label="Communication" value="76%" percent={76} /><Metric label="Rest" value="62%" percent={62} /></div></div>
    <div className="saka-section"><SectionHead title="Energy, in motion" /><GlassCard><div className="saka-row"><span className="saka-caption">NOW · 9:41 AM</span><span style={{ color: "var(--saka-gold)", font: "11px DM Mono" }}>PEAK AHEAD</span></div><CurveChart compact /><div className="saka-row saka-caption"><span>6 AM</span><span>12 PM</span><span>6 PM</span><span>10 PM</span></div></GlassCard></div>
    <div className="saka-section" style={{ display: "flex", alignItems: "center", gap: 11, color: "var(--saka-soft)" }}><MiniLotus /><p className="saka-caption" style={{ margin: 0 }}>Saka notices patterns so you can choose what to do with them.</p><Sparkles size={14} color="var(--saka-gold)" /></div>
  </SakaShell>;
}

export default Home;