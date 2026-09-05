import { useState } from 'react'

const NAV = ['about', 'projects', 'skills', 'studying', 'contact']

const PROJECTS = [
  {
    name: 'Real-Time Analytics Pipeline',
    stack: ['Apache Kafka', 'Spark Streaming', 'Snowflake', 'dbt'],
    description:
      'Designed and deployed an end-to-end streaming pipeline ingesting 2M+ events/day from IoT sensors. Reduced reporting latency from 4 hours to under 30 seconds.',
    status: 'production',
    year: '2024',
  },
  {
    name: 'Data Lakehouse Migration',
    stack: ['Delta Lake', 'Apache Iceberg', 'AWS S3', 'Glue'],
    description:
      'Led migration of 80TB legacy data warehouse to a modern lakehouse architecture on AWS. Achieved 40% cost reduction and improved query performance by 3×.',
    status: 'production',
    year: '2023',
  },
  {
    name: 'ML Feature Store',
    stack: ['Feast', 'Redis', 'PostgreSQL', 'Airflow'],
    description:
      'Built a centralized feature store serving 12 ML models in production. Standardized feature engineering across teams and cut model deployment time by 60%.',
    status: 'production',
    year: '2023',
  },
  {
    name: 'ELT Orchestration Platform',
    stack: ['Apache Airflow', 'dbt', 'BigQuery', 'Terraform'],
    description:
      'Developed a self-service ELT platform enabling data analysts to define and deploy pipelines without engineering involvement. Manages 300+ DAGs daily.',
    status: 'archived',
    year: '2022',
  },
]

const SKILLS = {
  'Data Pipelines': ['Apache Kafka', 'Apache Spark', 'Apache Airflow', 'dbt', 'Flink'],
  'Storage & Warehousing': ['Snowflake', 'BigQuery', 'Redshift', 'Delta Lake', 'Apache Iceberg'],
  'Cloud & Infra': ['AWS', 'GCP', 'Terraform', 'Docker', 'Kubernetes'],
  'Languages': ['Python', 'SQL', 'Scala', 'Bash'],
  'Databases': ['PostgreSQL', 'Redis', 'MongoDB', 'Cassandra'],
  'Monitoring': ['Grafana', 'Prometheus', 'DataDog', 'Great Expectations'],
}

const STUDYING = [
  {
    title: 'Apache Flink — Stream Processing at Scale',
    provider: 'Confluent Developer',
    progress: 68,
    status: 'in progress',
  },
  {
    title: 'Data Engineering Zoomcamp 2025',
    provider: 'DataTalks.Club',
    progress: 45,
    status: 'in progress',
  },
  {
    title: 'Designing Data-Intensive Applications',
    provider: 'O\'Reilly / Martin Kleppmann',
    progress: 80,
    status: 'reading',
  },
  {
    title: 'Google Professional Data Engineer Certification',
    provider: 'Google Cloud',
    progress: 30,
    status: 'planned',
  },
]

export default function App() {
  const [active, setActive] = useState('about')
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)

  return (
    <div className="min-h-full bg-[var(--background)] text-[var(--foreground)] flex flex-col">
      {/* Top bar */}
      <header className="border-b border-[var(--border)] sticky top-0 z-50 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <span className="text-[var(--primary)] font-mono text-xs tracking-widest uppercase select-none">
              {'>'}_
            </span>
            <span className="font-mono text-sm font-semibold tracking-wide text-[var(--foreground)]">
              alex.morgan
            </span>
            <span className="font-mono text-xs text-[var(--muted-foreground)] ml-1 hidden sm:block">
              // data engineer
            </span>
          </div>
          <nav className="flex items-center gap-1">
            {NAV.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                onMouseEnter={() => setHoveredNav(item)}
                onMouseLeave={() => setHoveredNav(null)}
                className={`font-mono text-xs px-3 py-1.5 transition-all duration-150 tracking-wider uppercase border ${
                  active === item
                    ? 'border-[var(--primary)] text-[var(--primary)] bg-[var(--primary)]/8'
                    : hoveredNav === item
                    ? 'border-[var(--border)] text-[var(--foreground)]'
                    : 'border-transparent text-[var(--muted-foreground)]'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-16">
        {active === 'about' && <About />}
        {active === 'projects' && <Projects />}
        {active === 'skills' && <Skills />}
        {active === 'studying' && <Studying />}
        {active === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <span className="font-mono text-xs text-[var(--muted-foreground)]">
            © 2025 alex.morgan — built with intent
          </span>
          <span className="font-mono text-xs text-[var(--primary)]">
            available for hire
          </span>
        </div>
      </footer>
    </div>
  )
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-xs text-[var(--primary)] tracking-widest uppercase">
        {children}
      </span>
      <div className="flex-1 h-px bg-[var(--border)]" />
      <span className="font-mono text-xs text-[var(--muted-foreground)]">
        {new Date().getFullYear()}
      </span>
    </div>
  )
}

function About() {
  return (
    <section>
      <SectionLabel>01 / about</SectionLabel>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Left — identity */}
        <div className="lg:col-span-3 space-y-8">
          <div>
            <h1 className="font-mono text-5xl font-bold tracking-tight text-[var(--foreground)] leading-tight mb-2">
              Alex Morgan
            </h1>
            <p className="font-mono text-lg text-[var(--primary)] tracking-wide">
              Senior Data Engineer
            </p>
          </div>

          <p className="text-[var(--secondary-foreground)] text-base leading-relaxed max-w-xl">
            I design and build data systems that move fast and stay reliable. With 6+ years
            working across fintech and e-commerce, I specialize in streaming pipelines,
            lakehouse architectures, and the infrastructure that keeps analytics teams
            unblocked.
          </p>

          <p className="text-[var(--secondary-foreground)] text-base leading-relaxed max-w-xl">
            I believe good data engineering is mostly invisible — the pipelines just run,
            the data is just there, and the business can make decisions without waiting for
            an engineer to fix something.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            {[
              { label: 'years experience', value: '6+' },
              { label: 'pipelines shipped', value: '80+' },
              { label: 'daily events processed', value: '2M+' },
              { label: 'based in', value: 'Berlin, DE' },
            ].map((stat) => (
              <div key={stat.label} className="border border-[var(--border)] p-4">
                <div className="font-mono text-2xl font-bold text-[var(--primary)] mb-1">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-[var(--muted-foreground)] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — meta */}
        <div className="lg:col-span-2 space-y-6">
          <div className="border border-[var(--border)] bg-[var(--card)] p-6">
            <div className="font-mono text-xs text-[var(--muted-foreground)] uppercase tracking-widest mb-4">
              quick.profile
            </div>
            {[
              { key: 'role', val: 'Senior Data Engineer' },
              { key: 'focus', val: 'Streaming & Lakehouse' },
              { key: 'location', val: 'Berlin, Germany' },
              { key: 'open_to', val: 'Full-time / Contract' },
              { key: 'languages', val: 'EN, DE (B2)' },
            ].map(({ key, val }) => (
              <div key={key} className="flex py-2 border-b border-[var(--border)] last:border-0">
                <span className="font-mono text-xs text-[var(--primary)] w-28 shrink-0">{key}</span>
                <span className="font-mono text-xs text-[var(--foreground)]">{val}</span>
              </div>
            ))}
          </div>

          <div className="border border-[var(--border)] bg-[var(--card)] p-6">
            <div className="font-mono text-xs text-[var(--muted-foreground)] uppercase tracking-widest mb-4">
              sys.status
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
              <span className="font-mono text-xs text-[var(--primary)]">available for new projects</span>
            </div>
            <p className="font-mono text-xs text-[var(--muted-foreground)] leading-relaxed">
              Currently open to senior and staff data engineering roles. Prefer async-first, remote teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section>
      <SectionLabel>02 / projects</SectionLabel>
      <div className="space-y-px">
        {PROJECTS.map((project, i) => (
          <div
            key={project.name}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={`border border-[var(--border)] p-6 transition-all duration-200 cursor-default ${
              hovered === i ? 'bg-[var(--card)] border-[var(--primary)]/40' : 'bg-transparent'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[var(--muted-foreground)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-mono text-base font-semibold text-[var(--foreground)]">
                  {project.name}
                </h3>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-mono text-xs text-[var(--muted-foreground)]">{project.year}</span>
                <span
                  className={`font-mono text-xs px-2 py-0.5 border ${
                    project.status === 'production'
                      ? 'border-[var(--primary)]/50 text-[var(--primary)]'
                      : 'border-[var(--border)] text-[var(--muted-foreground)]'
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>
            <p className="text-sm text-[var(--secondary-foreground)] leading-relaxed mb-4 max-w-2xl">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2 py-0.5 bg-[var(--secondary)] text-[var(--muted-foreground)] border border-[var(--border)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section>
      <SectionLabel>03 / skills</SectionLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category} className="bg-[var(--background)] p-6">
            <div className="font-mono text-xs text-[var(--primary)] uppercase tracking-widest mb-4">
              {category}
            </div>
            <div className="space-y-2">
              {items.map((skill) => (
                <div key={skill} className="flex items-center gap-2 group">
                  <span className="text-[var(--border)] group-hover:text-[var(--primary)] font-mono text-xs transition-colors">
                    ▸
                  </span>
                  <span className="font-mono text-sm text-[var(--foreground)]">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Studying() {
  return (
    <section>
      <SectionLabel>04 / currently studying</SectionLabel>
      <div className="mb-8 max-w-2xl">
        <p className="text-[var(--secondary-foreground)] text-sm leading-relaxed">
          I allocate ~8 hours/week to structured learning. Here's what's on the stack right now.
        </p>
      </div>
      <div className="space-y-4">
        {STUDYING.map((item, i) => (
          <div key={item.title} className="border border-[var(--border)] bg-[var(--card)] p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-mono text-xs text-[var(--muted-foreground)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-mono text-sm font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h3>
                </div>
                <span className="font-mono text-xs text-[var(--muted-foreground)] ml-8">
                  {item.provider}
                </span>
              </div>
              <span
                className={`font-mono text-xs px-2 py-0.5 border shrink-0 ${
                  item.status === 'in progress'
                    ? 'border-[var(--primary)]/50 text-[var(--primary)]'
                    : item.status === 'reading'
                    ? 'border-amber-500/50 text-amber-400'
                    : 'border-[var(--border)] text-[var(--muted-foreground)]'
                }`}
              >
                {item.status}
              </span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between font-mono text-xs text-[var(--muted-foreground)] mb-1">
                <span>progress</span>
                <span>{item.progress}%</span>
              </div>
              <div className="h-px bg-[var(--border)] relative overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-[var(--primary)] transition-all duration-700"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState<string | null>(null)

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 1800)
  }

  const links = [
    { key: 'email', label: 'email', value: 'alex.morgan@dataeng.dev', href: 'mailto:alex.morgan@dataeng.dev', copyable: true },
    { key: 'linkedin', label: 'linkedin', value: 'linkedin.com/in/alexmorgan-de', href: '#', copyable: false },
    { key: 'github', label: 'github', value: 'github.com/alexmorgan-de', href: '#', copyable: false },
    { key: 'calendly', label: 'book a call', value: 'calendly.com/alexmorgan', href: '#', copyable: false },
  ]

  return (
    <section>
      <SectionLabel>05 / contact</SectionLabel>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 space-y-6">
          <div>
            <h2 className="font-mono text-3xl font-bold text-[var(--foreground)] mb-3">
              Let's build something.
            </h2>
            <p className="text-[var(--secondary-foreground)] text-sm leading-relaxed max-w-md">
              Open to senior data engineering roles, consulting engagements, and interesting
              data infrastructure conversations. Response time: usually within 24 hours.
            </p>
          </div>

          <div className="space-y-px">
            {links.map(({ key, label, value, href, copyable }) => (
              <div
                key={key}
                className="flex items-center justify-between border border-[var(--border)] bg-[var(--card)] p-4 group hover:border-[var(--primary)]/40 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-[var(--primary)] w-20 shrink-0">{label}</span>
                  <a
                    href={href}
                    className="font-mono text-sm text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                    target={href !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                  >
                    {value}
                  </a>
                </div>
                {copyable && (
                  <button
                    onClick={() => copy(value, key)}
                    className="font-mono text-xs text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors px-2 py-1 border border-transparent hover:border-[var(--border)]"
                  >
                    {copied === key ? '✓ copied' : 'copy'}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="border border-[var(--border)] bg-[var(--card)] p-6 font-mono text-xs leading-relaxed text-[var(--muted-foreground)]">
            <div className="text-[var(--primary)] mb-3">// response_policy.json</div>
            <div className="space-y-1">
              <div><span className="text-[var(--foreground)]">{`{`}</span></div>
              <div className="pl-4"><span className="text-amber-400">"status"</span>: <span className="text-green-400">"available"</span>,</div>
              <div className="pl-4"><span className="text-amber-400">"response_sla"</span>: <span className="text-green-400">"24h"</span>,</div>
              <div className="pl-4"><span className="text-amber-400">"timezone"</span>: <span className="text-green-400">"Europe/Berlin"</span>,</div>
              <div className="pl-4"><span className="text-amber-400">"preferred_contact"</span>: <span className="text-green-400">"email"</span>,</div>
              <div className="pl-4"><span className="text-amber-400">"open_to"</span>: [</div>
              <div className="pl-8"><span className="text-green-400">"full-time"</span>,</div>
              <div className="pl-8"><span className="text-green-400">"contract"</span>,</div>
              <div className="pl-8"><span className="text-green-400">"consulting"</span></div>
              <div className="pl-4">],</div>
              <div className="pl-4"><span className="text-amber-400">"remote"</span>: <span className="text-blue-400">true</span></div>
              <div><span className="text-[var(--foreground)]">{`}`}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
