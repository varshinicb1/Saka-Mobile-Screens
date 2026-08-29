import { ArrowUp, Mic, MoreHorizontal, Plus, Sparkles, Volume2 } from "lucide-react";
import { GlassCard, Orb, SakaShell } from "./_shared/SakaShared";
import "./_group.css";
import { useState } from "react";

type Message = { from: "saka" | "you"; text: string };
export function AskSaka() {
  const [messages, setMessages] = useState<Message[]>([{ from: "saka", text: "I am here. What feels unclear right now?" }]);
  const [draft, setDraft] = useState("");
  const [listening, setListening] = useState(false);
  const send = (text = draft) => { if (!text.trim()) return; setMessages(prev => [...prev, { from: "you", text }, { from: "saka", text: "You already know the first honest step. Let us make it small enough to take today." }]); setDraft(""); };
  return <SakaShell active="ask"><div className="saka-topbar"><button className="saka-icon-button" aria-label="New conversation" onClick={() => setMessages([{ from: "saka", text: "A clear page. What is on your mind?" }])}><Plus size={16} /></button><div style={{ textAlign: "center" }}><p className="saka-eyebrow" style={{ marginBottom: 3 }}>YOUR COMPANION</p><h1 className="saka-title" style={{ fontSize: 19 }}>Ask Saka</h1></div><button className="saka-icon-button" aria-label="More options" onClick={() => window.alert("Conversation options are coming with your next update.")}><MoreHorizontal size={16} /></button></div>
    <div style={{ display: "grid", placeItems: "center", padding: "14px 0 22px" }}><Orb size={82} /><span className="saka-caption" style={{ marginTop: 23 }}>QUIETLY LISTENING</span></div>
    <div className="saka-list" style={{ paddingBottom: 18 }}>{messages.map((message, i) => <div key={`${message.text}-${i}`} style={{ display: "flex", justifyContent: message.from === "you" ? "flex-end" : "flex-start" }}><div className={message.from === "you" ? "saka-card" : ""} style={{ maxWidth: "82%", padding: message.from === "you" ? "12px 14px" : "3px 0", borderRadius: 16, color: message.from === "you" ? "var(--saka-ink)" : "var(--saka-soft)", background: message.from === "you" ? "rgba(137,87,171,.35)" : "transparent", fontSize: 14, lineHeight: 1.5 }}>{message.from === "saka" && <Sparkles size={12} color="var(--saka-gold)" style={{ marginRight: 7, verticalAlign: "middle" }} />}{message.text}</div></div>)}</div>
    <div className="saka-section"><p className="saka-caption" style={{ margin: "0 0 9px" }}>TRY ASKING</p><div className="saka-chip-row">{["What should I prioritize?", "Why do I feel stuck?", "Is this the right time?"].map(item => <button className="saka-chip" key={item} onClick={() => send(item)}>{item}</button>)}</div></div>
    <div className="saka-card" style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 18, padding: 6 }}><button className={`saka-icon-button ${listening ? "active" : ""}`} onClick={() => setListening(!listening)} aria-label="Voice input"><Mic size={16} color={listening ? "var(--saka-gold)" : undefined} /></button><input value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => e.key === "Enter" && send()} placeholder={listening ? "Listening..." : "Ask something real"} aria-label="Ask Saka a question" style={{ minWidth: 0, flex: 1, border: 0, outline: 0, color: "var(--saka-ink)", background: "transparent", fontSize: 12 }} /><button className="saka-button small violet" onClick={() => send()} aria-label="Send question"><ArrowUp size={15} /></button></div>
    {listening && <div className="saka-toast"><Volume2 size={13} style={{ verticalAlign: "middle", marginRight: 6 }} />Listening for the shape of your question.</div>}
    <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}><button className="saka-link" onClick={() => window.alert("Saka keeps your reflections private on this device.")}>Your conversations are private</button></div>
  </SakaShell>;
}
export default AskSaka;