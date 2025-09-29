
import { projects } from '../data'
import SectionTitle from '../components/SectionTitle'
export default function Portfolio(){
  return (<div className="section">
    <SectionTitle eyebrow="Work" title="Selected Projects" desc="Each card includes a short description, tags, and links."/>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p,idx)=>(<article key={idx} className="card">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{p.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">{p.tags.map(t=><span key={t} className="badge">{t}</span>)}</div>
        <div className="mt-4 flex flex-wrap gap-3">{p.links.map((l,i)=>(<a key={i} className="link" href={l.url} target="_blank" rel="noreferrer">{l.label} ↗</a>))}</div>
      </article>))}
    </div>
  </div>)
}
