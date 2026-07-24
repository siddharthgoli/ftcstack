import Link from 'next/link';
import {
  ArrowRight,
  Blocks,
  BrainCircuit,
  BookOpenText,
  Code2,
  Cpu,
  Gauge,
  GitBranch,
  SearchCode,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
} from 'lucide-react';

const learningPaths = [
  {
    title: 'Beginner path',
    description: 'Start with FTC, Java, and the SDK before writing your first robot loop.',
    href: '/docs/learn',
    accent: 'from-sky-400/20 to-cyan-400/5',
    icon: BookOpenText,
    steps: ['What FTC is', 'Java basics', 'Robot Controller setup', 'Your first OpMode'],
  },
  {
    title: 'Team software path',
    description: 'Learn how competitive teams structure code for a whole season.',
    href: '/docs/programming',
    accent: 'from-emerald-400/20 to-teal-400/5',
    icon: Blocks,
    steps: ['Architecture', 'TeleOp design', 'Autonomous systems', 'Debugging and tuning'],
  },
  {
    title: 'Advanced systems path',
    description: 'Move into control theory, vision, and reusable templates once the basics are solid.',
    href: '/docs/conntrol-theory',
    accent: 'from-amber-400/20 to-orange-400/5',
    icon: BrainCircuit,
    steps: ['PID and feedforward', 'OpenCV pipelines', 'Pathing templates', 'Performance work'],
  },
];

const featureHighlights = [
  {
    title: 'FTC-first explanations',
    description: 'Every concept is framed around how real robots behave on the field.',
    icon: Target,
  },
  {
    title: 'Open-source engineering habits',
    description: 'Versioning, structure, naming, and collaboration are taught as team skills.',
    icon: GitBranch,
  },
  {
    title: 'Practical debugging guidance',
    description: 'Use telemetry, dashboard tooling, and timing measurements to find issues fast.',
    icon: SearchCode,
  },
  {
    title: 'Reusable implementation snippets',
    description: 'Copyable templates for drivetrains, mechanisms, autonomous, and utilities.',
    icon: Code2,
  },
];

const sectionCards = [
  {
    title: 'Learn',
    description: 'The beginner curriculum: FTC, Java, and SDK fundamentals in sequence.',
    href: '/docs/learn',
    icon: Sparkles,
  },
  {
    title: 'Programming',
    description: 'How competitive FTC teams design maintainable robot codebases.',
    href: '/docs/programming',
    icon: Cpu,
  },
  {
    title: 'Control Theory',
    description: 'Feedback, motion, and tuning for real robot behavior.',
    href: '/docs/conntrol-theory',
    icon: Gauge,
  },
  {
    title: 'Vision',
    description: 'FTC camera pipelines, detection systems, and real-world debugging.',
    href: '/docs/vision',
    icon: ShieldCheck,
  },
  {
    title: 'Snippets',
    description: 'Implementation templates and patterns you can drop into a codebase.',
    href: '/docs/snippets',
    icon: Wrench,
  },
  {
    title: 'Reference',
    description: 'Quick lookup for libraries, tools, documentation, and glossary terms.',
    href: '/docs/reference',
    icon: BookOpenText,
  },
];

export default function HomePage() {
  return (
    <div className="relative flex-1 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_30%),radial-gradient(circle_at_left_top,rgba(14,165,233,0.18),transparent_28%)]" />
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-16 md:px-10 lg:px-12 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/80 px-4 py-2 text-sm text-fd-muted-foreground shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-sky-400" />
              Competitive FTC programming, organized like a real handbook
            </div>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-balance text-fd-foreground md:text-6xl lg:text-7xl">
                Build robot software that holds up in a season, not just in a demo.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-fd-muted-foreground md:text-xl">
                Competitive Codebase 101 is a professional FTC programming curriculum for teams that want
                reliable TeleOp, strong autonomous systems, and a codebase the whole roster can maintain.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/docs" className="inline-flex items-center gap-2 rounded-full bg-fd-primary px-5 py-3 text-sm font-medium text-fd-primary-foreground transition-transform hover:-translate-y-0.5">
                Start reading <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/docs/learn" className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-5 py-3 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-accent/10">
                Beginner path
              </Link>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-fd-muted-foreground">
              Designed for students, mentors, and teams who need a practical engineering reference through
              the full competition season.
            </p>
          </div>

          <div className="relative">
            <div className="cc101-glow absolute inset-0 -z-10 rounded-[2rem] blur-3xl" />
            <div className="cc101-panel rounded-[2rem] p-6 md:p-8">
              <div className="mb-6 flex items-center justify-between text-sm text-fd-muted-foreground">
                <span>Season-ready curriculum</span>
                <span>FTC • Java • Control • Vision</span>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  ['Learn the stack', 'FTC, Java, and Robot Controller fundamentals.'],
                  ['Design the codebase', 'Subsystems, state machines, and naming patterns.'],
                  ['Tune the robot', 'PID, feedforward, localization, and motion.'],
                  ['Ship faster', 'Debugging, dashboard work, and reusable snippets.'],
                ].map(([title, description]) => (
                  <div key={title} className="rounded-2xl border border-fd-border bg-fd-card/80 p-4">
                    <p className="text-sm font-medium text-fd-foreground">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {learningPaths.map((path) => {
            const Icon = path.icon;

            return (
              <Link
                key={path.title}
                href={path.href}
                className="group rounded-[1.5rem] border border-fd-border bg-fd-card/85 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-xl"
              >
                <div className={`rounded-2xl bg-gradient-to-br ${path.accent} p-4`}>
                  <Icon className="h-5 w-5 text-sky-300" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-fd-foreground">{path.title}</h2>
                <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">{path.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-fd-muted-foreground">
                  {path.steps.map((step) => (
                    <li key={step} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                      {step}
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {featureHighlights.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="rounded-[1.35rem] border border-fd-border bg-fd-card/80 p-5">
                  <Icon className="h-5 w-5 text-sky-400" />
                  <h3 className="mt-4 text-base font-semibold text-fd-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="cc101-panel rounded-[1.75rem] p-6 md:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-400">Documentation map</p>
            <h2 className="mt-3 text-2xl font-semibold text-fd-foreground">The site is split by learning intent</h2>
            <p className="mt-3 text-sm leading-7 text-fd-muted-foreground">
              Start in Learn, move into Programming once the basics are stable, and use Control Theory,
              Vision, Snippets, and Reference as the season demands.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {sectionCards.map((section) => {
                const Icon = section.icon;

                return (
                  <Link
                    key={section.title}
                    href={section.href}
                    className="rounded-2xl border border-fd-border bg-fd-card/80 p-4 transition-colors hover:border-sky-400/40 hover:bg-fd-accent/10"
                  >
                    <Icon className="h-5 w-5 text-sky-400" />
                    <h3 className="mt-3 text-base font-semibold text-fd-foreground">{section.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">{section.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 rounded-[1.75rem] border border-fd-border bg-fd-card/80 p-6 md:flex-row md:items-center md:p-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-400">Built for competition seasons</p>
            <h2 className="mt-2 text-2xl font-semibold text-fd-foreground">Use it as a handbook, not a quick start guide.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-fd-muted-foreground">
              This is a documentation site for teams that need a working curriculum, a practical reference,
              and a place to align code style across multiple students.
            </p>
          </div>
          <Link href="/docs/reference" className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-primary px-5 py-3 text-sm font-medium text-fd-primary-foreground">
            Open the reference <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
