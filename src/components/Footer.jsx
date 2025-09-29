
import { profile } from '../data'
export default function Footer(){
  return (<footer className="mt-16 border-t border-gray-100">
    <div className="section grid md:grid-cols-3 gap-8">
      <div><h4 className="font-semibold text-gray-800 mb-3">Contact</h4>
        <ul className="space-y-1 text-sm text-gray-700">
          <li><strong>Email:</strong> <a className="link" href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li><strong>Phone:</strong> <a className="link" href={`tel:${profile.phone}`}>{profile.phone}</a></li>
          <li><strong>LinkedIn:</strong> <a className="link" href={profile.linkedin} target="_blank" rel="noreferrer">Profile</a></li>
          {profile.github && <li><strong>GitHub:</strong> <a className="link" href={profile.github} target="_blank" rel="noreferrer">{profile.github}</a></li>}
          <li><strong>Address:</strong> {profile.location}</li>
        </ul>
      </div>
      <div><h4 className="font-semibold text-gray-800 mb-3">Quick Links</h4>
        <ul className="space-y-1 text-sm">
          {['/','/about','/skills','/experience','/portfolio','/resume'].map((href,i)=>(<li key={href}><a className="link" href={href}>{['Home','About','Skills','Experience','Portfolio','Resume'][i]}</a></li>))}
        </ul>
      </div>
      <div className="text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Bryan Myer Setiawan. All rights reserved.</p>
        <p className="mt-2">Built with React & Tailwind.</p>
      </div>
    </div></footer>)
}
