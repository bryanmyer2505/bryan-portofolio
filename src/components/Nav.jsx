
import { NavLink } from 'react-router-dom'
export default function Nav(){
  const base="px-4 py-2 rounded-full transition"
  const idle="text-gray-700 hover:text-brand-700 hover:bg-brand-50"
  const active="bg-brand-100 text-brand-800"
  return (<header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
    <div className="container-pad flex items-center justify-between h-16">
      <NavLink to="/" className="font-semibold text-lg tracking-tight"><span className="text-brand-700">Bryan</span> Portfolio</NavLink>
      <nav className="hidden sm:flex gap-2">
        {[['/','Home'],['/about','About'],['/skills','Skills'],['/experience','Experience'],['/portfolio','Portfolio'],['/resume','Resume']].map(([to,label])=>(
          <NavLink key={to} to={to} end={to==='/'}
            className={({isActive})=>`${base} ${isActive?active:idle}`}>{label}</NavLink>))}
      </nav>
    </div></header>)
}
