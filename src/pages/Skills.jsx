
import { skills } from '../data'
import SectionTitle from '../components/SectionTitle'
const Pill=({children})=><span className="badge">{children}</span>
export default function Skills(){
  return (<div className="section">
    <SectionTitle eyebrow="Skills" title="What I bring to the table"/>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="card"><h3 className="font-semibold mb-3">Technical</h3><div className="flex flex-wrap gap-2">{skills.technical.map(s=><Pill key={s}>{s}</Pill>)}</div></div>
      <div className="card"><h3 className="font-semibold mb-3">Mathematics</h3><div className="flex flex-wrap gap-2">{skills.mathematics.map(s=><Pill key={s}>{s}</Pill>)}</div></div>
      <div className="card"><h3 className="font-semibold mb-3">Soft Skills</h3><div className="flex flex-wrap gap-2">{skills.soft.map(s=><Pill key={s}>{s}</Pill>)}</div></div>
      <div className="card"><h3 className="font-semibold mb-3">Linguistics</h3><div className="flex flex-wrap gap-2">{skills.linguistics.map(s=><Pill key={s}>{s}</Pill>)}</div></div>
    </div>
  </div>)
}
