
import { profile, education } from '../data'
import SectionTitle from '../components/SectionTitle'
export default function About(){
  return (<div className="section">
    <SectionTitle eyebrow="About" title="A little about me" />
    <div className="grid md:grid-cols-3 gap-10">
      <div className="md:col-span-1"><img src={profile.photo} alt="Bryan" className="w-full rounded-2xl shadow-soft"/></div>
      <div className="md:col-span-2 space-y-6">
        <p className="text-gray-700">{profile.about}</p>
        <div><h3 className="font-semibold mb-2">Education</h3>
          <ul className="space-y-2 text-gray-700">
            {education.map((e,i)=>(<li key={i} className="card">{e.school} <span className="block text-sm text-gray-500">{e.period} {e.note?`• ${e.note}`:''}</span></li>))}
          </ul>
        </div>
      </div>
    </div>
  </div>)
}
