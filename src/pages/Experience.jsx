import { experience } from '../data'
import SectionTitle from '../components/SectionTitle'

function ExperienceSection({ title, items }) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <div className="space-y-6">
        {items.map((e, idx) => (
          <div key={idx} className="card flex gap-4 items-start">
            {e.image && (
              <img
                src={e.image}
                alt={e.company}
                className="w-16 h-16 object-contain rounded-lg border"
              />
            )}
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="text-lg font-semibold">
                  {e.role} — {e.company}
                </div>
                <div className="text-sm text-gray-500">{e.period}</div>
              </div>

              {e.bullets && (
                <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-1">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}

              {/* 👇 Add links here */}
              {e.links && e.links.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-3">
                  {e.links.map((l, i) => (
                    <a
                      key={i}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <div className="section">
      <SectionTitle
        eyebrow="Experience"
        title="My Professional Journey"
        desc="A mix of professional, organizational, and certification experiences."
      />

      <ExperienceSection
        title="Professional Experience"
        items={experience.professional}
      />
      <ExperienceSection
        title="Research"
        items={experience.research}
      />
      <ExperienceSection
        title="Certifications"
        items={experience.certifications}
      />
      <ExperienceSection
        title="Organizational Experience"
        items={experience.organizational}
      />
    </div>
  )
}
