
import { profile } from '../data'
import SectionTitle from '../components/SectionTitle'
export default function Resume(){
  return (<div className="section">
    <SectionTitle eyebrow="Resume" title="Curriculum Vitae" desc="View the PDF below or download a copy."/>
    <div className="mb-6">
      <a href={profile.cvPath} download className="px-5 py-2.5 rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition shadow-soft">Download CV</a>
      <a href={profile.portfolioPdfPath} target="_blank" rel="noreferrer" className="ml-3 px-5 py-2.5 rounded-xl border border-gray-200 hover:border-brand-300 hover:text-brand-700 transition">Open Portfolio PDF</a>
    </div>
    <div className="w-full glass rounded-2xl overflow-hidden">
      <object data={profile.cvPath} type="application/pdf" width="100%" height="900px">
        <iframe src={profile.cvPath} title="CV" width="100%" height="900px">Your browser does not support PDFs. <a href={profile.cvPath}>Download the PDF</a>.</iframe>
      </object>
    </div>
  </div>)
}
