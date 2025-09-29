import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const base = "px-4 py-2 rounded-full transition block"
  const idle = "text-gray-700 hover:text-brand-700 hover:bg-brand-50"
  const active = "bg-brand-100 text-brand-800"

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/experience', label: 'Experience' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/resume', label: 'Resume' }
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="container-pad flex items-center justify-between h-16">
        {/* Logo / Title */}
        <NavLink to="/" className="font-semibold text-lg tracking-tight">
          <span className="text-brand-700">Bryan</span> Portfolio
        </NavLink>

        {/* Desktop menu */}
        <nav className="hidden sm:flex gap-2">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `${base} ${isActive ? active : idle}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden p-2 rounded-md border text-gray-600 hover:bg-gray-100 transition"
        >
          {open ? (
            // Close (X) icon
            <span className="text-2xl font-bold">&times;</span>
          ) : (
            // Hamburger icon
            <span className="text-2xl">&#9776;</span>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden border-t bg-white shadow-md animate-fadeIn">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${base} ${isActive ? active : idle}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
