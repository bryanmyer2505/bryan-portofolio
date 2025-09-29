
export default function SectionTitle({eyebrow,title,desc}){
  return (<div className="mb-10">
    {eyebrow && <div className="text-brand-700 font-medium tracking-wide mb-2">{eyebrow}</div>}
    <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
    {desc && <p className="text-gray-600 max-w-2xl">{desc}</p>}
  </div>)
}
